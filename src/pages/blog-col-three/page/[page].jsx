import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import BlogArea from "@containers/blog/layout-05";
import { getAllPosts, getPostSlugs } from "../../../lib/api";

const POSTS_PER_PAGE = 8;

const BlogTwoColumn = ({ posts, pagiData, page }) => (
    <Wrapper>
        <SEO pageTitle={`Blog Three Column - Page: ${page}`} />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Blog Two Column"
                currentPage="Blog Two Column"
            />
            <BlogArea data={{ posts, pagiData }} rootPage="/blog-col-three" />
        </main>
        <Footer />
    </Wrapper>
);

export const getStaticPaths = async () => {
    const pages = Math.ceil(getPostSlugs().length / POSTS_PER_PAGE);
    const paths = Array.from(Array(pages).keys()).map((page) => ({
        params: { page: String(page + 1) },
    }));

    return {
        paths,
        fallback: true,
    };
};

export async function getStaticProps({ params }) {
    const { page } = params;
    const posts = getAllPosts([
        "title",
        "date",
        "slug",
        "author",
        "image",
        "excerpt",
        "category",
        "tags",
        "timeToRead",
    ]);

    return {
        props: {
            posts: posts.slice(
                (page - 1) * POSTS_PER_PAGE,
                page * POSTS_PER_PAGE
            ),
            className: "template-color-1",
            page: Number(page),
            pagiData: {
                currentPage: Number(page),
                numberOfPages: Math.ceil(posts.length / POSTS_PER_PAGE),
            },
        },
    };
}

BlogTwoColumn.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({})),
    pagiData: PropTypes.shape({
        currentPage: PropTypes.number.isRequired,
        numberOfPages: PropTypes.number.isRequired,
    }),
    page: PropTypes.number,
};

export default BlogTwoColumn;
