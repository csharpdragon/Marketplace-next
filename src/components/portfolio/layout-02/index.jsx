import PropTypes from "prop-types";
import Image from "next/image";
import Anchor from "@ui/anchor";
import { ImageType } from "@utils/types";

const Portfolio = ({ title, author, path, image }) => (
    <div className="slider-thumbnail thumbnail-overlay">
        {image?.src && (
            <Anchor path={path}>
                <Image
                    className="w-100"
                    src={image.src}
                    alt={image?.alt || "Nft_Profile"}
                    width={image?.width || 658}
                    height={image?.height || 615}
                />
            </Anchor>
        )}
        <div className="read-wrapper">
            <h5 className="title">
                <Anchor path={path}>{title}</Anchor>
            </h5>
            {author?.name && <span>{author.name}</span>}
        </div>
    </div>
);

Portfolio.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }),
    path: PropTypes.string.isRequired,
    image: ImageType.isRequired,
};

export default Portfolio;
