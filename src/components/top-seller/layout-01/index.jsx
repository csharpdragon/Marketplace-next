import PropTypes from "prop-types";
import Image from "next/image";
import clsx from "clsx";
import Anchor from "@ui/anchor";
import Button from "@ui/button";

const TopSeller = ({
    name,
    total_sale,
    image,
    slug,
    className,
    isVarified,
    followBtn,
}) => (
    <div className={clsx("top-seller-inner-one", className)}>
        <div className="top-seller-wrapper">
            <div className={clsx("thumbnail", isVarified && "varified")}>
                {image?.src && (
                    <Anchor path={slug}>
                        <Image
                            src={image.src}
                            alt={image?.alt || name}
                            width={image?.width || 54}
                            height={image?.height || 54}
                            layout="fixed"
                        />
                    </Anchor>
                )}
            </div>
            <div className="top-seller-content">
                <Anchor path={slug}>
                    <h6 className="name">{name}</h6>
                </Anchor>
                {total_sale && (
                    <span className="count-number">
                        {new Intl.NumberFormat("en-US", {
                            currency: "USD",
                        }).format(total_sale)}
                    </span>
                )}
            </div>
        </div>
        {followBtn && (
            <Button path={slug} color="primary-alta" size="small">
                Follow
            </Button>
        )}
    </div>
);

TopSeller.propTypes = {
    name: PropTypes.string.isRequired,
    total_sale: PropTypes.number,
    slug: PropTypes.string.isRequired,
    image: PropTypes.shape({
        src: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string])
            .isRequired,
        alt: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }).isRequired,
    className: PropTypes.string,
    isVarified: PropTypes.bool,
    followBtn: PropTypes.bool,
};

export default TopSeller;
