import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import BlogArea from "@containers/blog/layout-03";
import BlogSidebar from "@containers/blog-sidebar";
import { flatDeep } from "@utils/methods";
import { getPostsByTag, getAllPosts } from "../../../lib/api";

const BlogSingleColumn = ({ posts, title, categories, recentPosts, tags }) => (
    <Wrapper>
        <SEO pageTitle="Blog" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle={title} currentPage="Our Blog" />
            <div className="rn-blog-area rn-blog-details-default rn-section-gapTop">
                <div className="container">
                    <div className="row g-6">
                        <div className="col-xl-8 col-lg-8">
                            <BlogArea
                                data={{ posts }}
                                rootPage="/blog-single-column"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-4 mt_md--40 mt_sm--40">
                            <BlogSidebar
                                categories={categories}
                                recentPosts={recentPosts}
                                tags={tags}
                                rootPage="/blog-single-column"
                            />
                        </div>
                    </div>
                </div>
            </div>
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
    const widgetPosts = getAllPosts(["title", "slug", "category", "tags"]);
    const categories = widgetPosts.map((blog) => ({ ...blog.category }));
    const tags = widgetPosts.map((blog) => [...blog.tags]);
    const recentPosts = widgetPosts.slice(0, 4);

    return {
        props: {
            posts,
            categories,
            recentPosts,
            tags,
            title: params.tag,
            className: "template-color-1",
        },
    };
}

BlogSingleColumn.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({})),
    categories: PropTypes.arrayOf(PropTypes.shape({})),
    recentPosts: PropTypes.arrayOf(PropTypes.shape({})),
    tags: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    title: PropTypes.string,
};

export default BlogSingleColumn;
