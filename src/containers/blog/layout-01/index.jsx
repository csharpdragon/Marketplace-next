import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout-02";
import Anchor from "@ui/anchor";
import BlogCard from "@components/blog/blog-card";
import { SectionTitleType } from "@utils/types";

const BlogArea = ({ space, className, data }) => (
    <div
        className={clsx(
            "rn-blog-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row mb--50 align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    {data?.section_title && (
                        <SectionTitle
                            className="mb--0"
                            {...data.section_title}
                        />
                    )}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                    <div
                        className="view-more-btn text-start text-sm-end"
                        data-sal-delay="150"
                        data-sal="slide-up"
                        data-sal-duration="800"
                    >
                        <Anchor className="btn-transparent" path="/blog">
                            VIEW ALL
                            <i className="feather-arrow-right" />
                        </Anchor>
                    </div>
                </div>
            </div>
            <div className="row g-5">
                {data?.posts?.map((post) => (
                    <div
                        className="col-xl-3 col-lg-4 col-md-6 col-12"
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
                            image={post.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

BlogArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        posts: PropTypes.arrayOf(PropTypes.shape({})),
    }),
};

BlogArea.defaultProps = {
    space: 1,
};

export default BlogArea;
