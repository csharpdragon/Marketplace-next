import PropTypes from "prop-types";
import clsx from "clsx";
import BlogCard from "@components/blog/blog-card";

const RelatedPostsArea = ({ space, className, relatedPosts, rootPage }) => (
    <div className={clsx("row g-5", space === 1 && "pt--60", className)}>
        <div className="col-lg-12">
            <h3 className="title">Related Post</h3>
        </div>
        {relatedPosts?.map((post) => (
            <div key={post.slug} className="col-xl-4 col-lg-6 col-md-6 col-12">
                <BlogCard
                    title={post.title}
                    slug={post.slug}
                    category={post.category}
                    timeToRead={post.timeToRead}
                    image={post.image}
                    rootPage={rootPage}
                />
            </div>
        ))}
    </div>
);

RelatedPostsArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    relatedPosts: PropTypes.arrayOf(PropTypes.shape({})),
    rootPage: PropTypes.string,
};

RelatedPostsArea.defaultProps = {
    space: 1,
    rootPage: "/blog",
};

export default RelatedPostsArea;
