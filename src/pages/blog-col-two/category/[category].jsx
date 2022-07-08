import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import BlogArea from "@containers/blog/layout-04";
import { getPostsByCategory, getAllPosts } from "../../../lib/api";

const BlogTwoColumn = ({ posts, title }) => (
    <Wrapper>
        <SEO pageTitle="Blog Two Column" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle={title} currentPage="Blog Two Column" />
            <BlogArea data={{ posts }} rootPage="/blog-col-two" />
        </main>
        <Footer />
    </Wrapper>
);

export async function getStaticPaths() {
    const posts = getAllPosts(["category"]);
    return {
        paths: posts.map(({ category }) => ({
            params: {
                category: category.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const posts = getPostsByCategory(params.category, [
        "title",
        "date",
        "slug",
        "image",
        "category",
        "timeToRead",
    ]);

    return {
        props: {
            posts,
            title: params.category,
            className: "template-color-1",
        },
    };
}

BlogTwoColumn.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({})),
    title: PropTypes.string,
};

export default BlogTwoColumn;
