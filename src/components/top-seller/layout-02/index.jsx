import Image from "next/image";
import PropTypes from "prop-types";
import clsx from "clsx";
import Anchor from "@ui/anchor";

const TopSeller = ({ name, time, path, image, eth, isVarified }) => (
    <div className="top-seller-inner-one">
        <div className="top-seller-wrapper">
            {image?.src && (
                <div className={clsx("thumbnail", isVarified && "varified")}>
                    <Anchor path={path}>
                        <Image
                            src={image.src}
                            alt={image?.alt || "Nft_Profile"}
                            width={image?.width || 50}
                            height={image?.height || 50}
                            layout="fixed"
                        />
                    </Anchor>
                </div>
            )}
            <div className="top-seller-content">
                <span>
                    {eth && <>{eth} by</>}
                    <Anchor path={path}>{name}</Anchor>
                </span>
                {time && <span className="count-number">{time}</span>}
            </div>
        </div>
    </div>
);

TopSeller.propTypes = {
    name: PropTypes.string.isRequired,
    time: PropTypes.string,
    path: PropTypes.string.isRequired,
    eth: PropTypes.string,
    image: PropTypes.shape({
        src: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string])
            .isRequired,
        alt: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }).isRequired,
    isVarified: PropTypes.bool,
};

export default TopSeller;
