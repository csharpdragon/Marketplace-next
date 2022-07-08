import PropTypes from "prop-types";
import Image from "next/image";
import { ImageType } from "@utils/types";

const Comment = ({ image, username, time, text }) => (
    <div className="single-comment">
        <div className="comment-author comment-img">
            {image?.src && (
                <div className="comment-avatar">
                    <Image
                        src={image.src}
                        alt={image?.alt || "Comment Image"}
                        width={image?.width || 50}
                        height={image?.height || 50}
                        layout="fixed"
                    />
                </div>
            )}

            <div className="m-b-20">
                <div className="commenter">{username}</div>
                <div className="time-spent"> {time}</div>
            </div>
        </div>
        <div className="comment-text">
            <p>{text}</p>
        </div>
        <div className="reply-edit">
            <div className="reply">
                <a className="comment-reply-link" href="#!">
                    <i className="rbt feather-corner-down-right" />
                    Reply
                </a>
            </div>
        </div>
    </div>
);

Comment.propTypes = {
    image: ImageType.isRequired,
    username: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Comment;
