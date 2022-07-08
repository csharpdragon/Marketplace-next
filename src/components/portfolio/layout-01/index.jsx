import Image from "next/image";
import PropTypes from "prop-types";
import Anchor from "@ui/anchor";

const Portfolio = ({ title, path, author, image }) => (
    <div className="inner">
        {image?.src && (
            <div className="thumbnail">
                <Anchor path={path}>
                    <Image
                        src={image.src}
                        alt={image?.alt || "NFT_portfolio"}
                        width={570}
                        height={570}
                    />
                </Anchor>
            </div>
        )}
        <div className="banner-read-thumb">
            <h4>
                <Anchor path={path}>{title}</Anchor>
            </h4>
            {author?.name && <span>{author.name}</span>}
        </div>
    </div>
);

Portfolio.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string,
    }),
    image: PropTypes.shape({
        src: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string])
            .isRequired,
        alt: PropTypes.string,
    }).isRequired,
};

export default Portfolio;
