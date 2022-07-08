import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import Anchor from "@ui/anchor";

const Activity = ({
    className,
    title,
    path,
    desc,
    time,
    date,
    author,
    image,
    status,
}) => (
    <div className={clsx("single-activity-wrapper", className)}>
        <div className="inner">
            <div className="read-content">
                {image?.src && (
                    <div className="thumbnail">
                        <Anchor path={path}>
                            <Image
                                src={image.src}
                                alt={image?.alt || "Nft_Profile"}
                                width={image?.width || 500}
                                height={image?.height || 500}
                            />
                        </Anchor>
                    </div>
                )}
                <div className="content">
                    <Anchor path={path}>
                        <h6 className="title">{title}</h6>
                    </Anchor>
                    <p dangerouslySetInnerHTML={{ __html: desc }} />
                    <div className="time-maintane">
                        <div className="time data">
                            <i className="feather-clock" />
                            <span>
                                {time} on {date}
                            </span>
                        </div>
                        <div className="user-area data">
                            <i className="feather-user" />
                            <Anchor path={author.slug}>{author.name}</Anchor>
                        </div>
                    </div>
                </div>
            </div>
            <div className="icone-area">
                {status === "follow" && <i className="feather-thumbs-up" />}
                {status === "sale" && <i className="feather-shopping-cart" />}
                {status === "like" && <i className="feather-heart" />}
                {status === "offer" && <i className="feather-user-plus" />}
            </div>
        </div>
    </div>
);

Activity.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.shape({
        src: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string])
            .isRequired,
        alt: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }).isRequired,
    status: PropTypes.oneOf(["follow", "sale", "like", "offer"]),
};

export default Activity;
