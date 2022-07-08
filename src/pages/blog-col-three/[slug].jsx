import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import BlogDetailsArea from "@containers/blog-details";
import CommentsArea from "@containers/comments-area";
import CommentForm from "@components/comment-form";
import RelatedPostsArea from "@containers/related-posts";
import BlogSidebar from "@containers/blog-sidebar";
import { getAllPosts, getPostBySlug } from "../../lib/api";

const BlogDetails = ({ post, categories, recentPosts, tags, relatedPosts }) => (
    <Wrapper>
        <SEO pageTitle="Blog Details" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Blog Details" currentPage="Blog Details" />
            <div className="rn-blog-area rn-blog-details-default rn-section-gapTop">
                <div className="container">
                    <div className="row g-6">
                        <div className="col-xl-8 col-lg-8">
                            <BlogDetailsArea post={post} />
                            <CommentsArea />
                            <CommentForm />
                            <RelatedPostsArea
                                relatedPosts={relatedPosts}
                                rootPage="/blog-col-three"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-4 mt_md--40 mt_sm--40">
                            <BlogSidebar
                                categories={categories}
                                recentPosts={recentPosts}
                                tags={tags}
                                rootPage="/blog-col-three"
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
    const posts = getAllPosts(["slug"]);

    // map through to return post paths
    const paths = posts.map((post) => ({
        params: {
            slug: post.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const post = getPostBySlug(slug, [
        "content",
        "title",
        "date",
        "slug",
        "image",
        "category",
    ]);
    const posts = getAllPosts([
        "category",
        "slug",
        "title",
        "tags",
        "image",
        "timeToRead",
    ]);
    const categories = posts.map((blog) => ({ ...blog.category }));
    const tags = posts.map((blog) => [...blog.tags]);
    const recentPosts = posts.slice(0, 4);
    const relatedPosts = posts
        .filter((blog) => blog.category.slug === post.category.slug)
        .slice(0, 3);

    return {
        props: {
            post,
            slug,
            categories,
            recentPosts,
            tags,
            relatedPosts,
            className: "template-color-1",
        },
    };
}

BlogDetails.propTypes = {
    post: PropTypes.shape({}),
    categories: PropTypes.arrayOf(PropTypes.shape({})),
    recentPosts: PropTypes.arrayOf(PropTypes.shape({})),
    tags: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    relatedPosts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default BlogDetails;
