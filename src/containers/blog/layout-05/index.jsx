import PropTypes from "prop-types";
import clsx from "clsx";
import BlogCard from "@components/blog/blog-card";
import Pagination from "@components/pagination";

const BlogArea = ({ space, className, data, rootPage }) => (
    <div
        className={clsx(
            "rn-blog-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-5">
                {data?.posts?.map((post) => (
                    <div
                        className="col-lg-4 col-md-6 col-12 sal-animate"
                        data-sal="slide-up"
                        data-sal-duration="800"
                        data-sal-delay="150"
                        key={post.slug}
                    >
                        <BlogCard
                            title={post.title}
                            slug={post.slug}
                            category={post.category}
                            timeToRead={post.timeToRead}
                            image={{ ...post.image, width: 653, height: 489 }}
                            rootPage={rootPage}
                        />
                    </div>
                ))}
            </div>
            {data.pagiData?.numberOfPages > 1 && (
                <Pagination
                    currentPage={data.pagiData.currentPage}
                    numberOfPages={data.pagiData.numberOfPages}
                    rootPage={rootPage}
                />
            )}
        </div>
    </div>
);

BlogArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        posts: PropTypes.arrayOf(PropTypes.shape({})),
        pagiData: PropTypes.shape({
            currentPage: PropTypes.number.isRequired,
            numberOfPages: PropTypes.number.isRequired,
        }),
    }),
    rootPage: PropTypes.string,
};

BlogArea.defaultProps = {
    space: 1,
};

export default BlogArea;
