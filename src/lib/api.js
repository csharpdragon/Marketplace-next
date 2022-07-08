import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { slugify } from "@utils/methods";

const postsDirectory = join(process.cwd(), "src/data/posts");

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

const wordsPerMinute = 225;

function isWord(str) {
    let alphaNumericFound = false;
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (
            (code > 47 && code < 58) || // numeric (0-9)
            (code > 64 && code < 91) || // upper alpha (A-Z)
            (code > 96 && code < 123)
        ) {
            // lower alpha (a-z)
            alphaNumericFound = true;
            return alphaNumericFound;
        }
    }
    return alphaNumericFound;
}

function wordCounter(input) {
    const text = input.split(/\s+/);
    let wordCount = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== " " && isWord(text[i])) {
            wordCount += 1;
        }
    }
    return wordCount;
}

export function readingTime(text) {
    return Math.ceil(wordCounter(text) / wordsPerMinute);
}
export function getPostBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === "slug") {
            items[field] = realSlug;
        }
        if (field === "content") {
            items[field] = marked(content);
        }

        if (field === "timeToRead") {
            const readTime = readingTime(content);
            items[field] = readTime;
        }

        if (field === "category") {
            items[field] = {
                title: data.category,
                slug: slugify(data.category),
            };
        }

        if (field === "tags") {
            items[field] = data.tags.map((tag) => ({
                title: tag,
                slug: slugify(tag),
            }));
        }

        if (
            field !== "category" &&
            field !== "tags" &&
            typeof data[field] !== "undefined"
        ) {
            items[field] = data[field];
        }
    });

    return items;
}

export function getAllPosts(fields = []) {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

export function getPostsByCategory(cat, fields = []) {
    const posts = getAllPosts(fields);
    return posts.filter((post) => post.category.slug === cat);
}

export function getPostsByTag(tag, fields = []) {
    const posts = getAllPosts(fields);
    return posts.filter((post) => post.tags.map((t) => t.slug).includes(tag));
}

// const productsDirectory = JSON.parse(
//     fs.readFileSync("src/data/products.json", "utf8")
// );

// export function getProductSlugs() {
//     return fs.readdirSync(productsDirectory);
// }

// export function getAllProducts() {
//     const slugs = getPostSlugs();
//     return slugs;
// }
