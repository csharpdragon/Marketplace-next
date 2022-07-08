import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import BlogArea from "@containers/blog/layout-02";
import { flatDeep } from "@utils/methods";
import { getPostsByTag, getAllPosts } from "../../../lib/api";

const Blog = ({ posts, title }) => (
    <Wrapper>
        <SEO pageTitle="Blog" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle={title} currentPage="Our Blog" />
            <BlogArea data={{ posts }} />
        </main>
        <Footer />
    </Wrapper>
);

export async function getStaticPaths() {
    const posts = getAllPosts(["tags"]);
    const tagss = [
        ...new Set(
            flatDeep(posts.map(({ tags }) => tags.map((tag) => tag.slug)))
        ),
    ];

    return {
        paths: tagss.map((tag) => ({
            params: {
                tag,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const posts = getPostsByTag(params.tag, [
        "title",
        "date",
        "slug",
        "image",
        "category",
        "timeToRead",
        "tags",
    ]);

    return {
        props: {
            posts,
            title: params.tag,
            className: "template-color-1",
        },
    };
}

Blog.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({})),
    title: PropTypes.string,
};

export default Blog;
