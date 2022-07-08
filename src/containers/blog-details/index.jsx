import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { getMonth } from "@utils/methods";
import { ImageType } from "@utils/types";

const BlogDetailsArea = ({ className, post }) => {
    const date = new Date(post.date);
    return (
        <div className={clsx("blog-details-area", className)}>
            <div className="blog-content-top">
                <h2 className="title">{post.title}</h2>
                <span className="date">
                    {date.getDate().toString().padStart(2, "0")}{" "}
                    {getMonth(date)}, {date.getFullYear()}
                </span>
            </div>
            <div className="bd-thumbnail">
                <div className="large-img mb--30">
                    {post.image?.src && (
                        <Image
                            className="w-100"
                            src={post.image.src}
                            alt="Blog Images"
                            width={919}
                            height={517}
                            layout="responsive"
                        />
                    )}
                </div>
            </div>
            <div
                className="news-details"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </div>
    );
};

BlogDetailsArea.propTypes = {
    className: PropTypes.string,
    post: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        image: ImageType,
        content: PropTypes.string,
    }),
};

export default BlogDetailsArea;
