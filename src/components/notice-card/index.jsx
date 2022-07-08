import Image from "next/image";
import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import Button from "@ui/button";

const NoticeCard = ({ title, description, path, date, time, image }) => (
    <div className="single-notice">
        {image?.src && (
            <div className="thumbnail">
                <Anchor path={path}>
                    <Image
                        src={image.src}
                        alt={image?.alt || "Nft_Profile"}
                        width={44}
                        height={44}
                        layout="fixed"
                    />
                </Anchor>
            </div>
        )}

        <div className="content-wrapper">
            <Anchor path={path}>
                <h6 className="title">{title}</h6>
            </Anchor>
            <p>{description}</p>
            <div className="notice-time">
                <span>{date}</span>
                <span>{time}</span>
            </div>
            <Button path={path} color="primary-alta" size="small">
                Check Out
            </Button>
        </div>
    </div>
);

NoticeCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    image: PropTypes.shape({
        src: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string])
            .isRequired,
        alt: PropTypes.string,
    }).isRequired,
};

export default NoticeCard;
