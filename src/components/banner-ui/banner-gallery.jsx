import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { ImageType } from "@utils/types";

const BannerGallery = ({ className, images }) => (
    <div className={clsx("banner-gallery-wrapper", className)}>
        <div className="banner-gallery-loop">
            {images.map((image, index, arr) => (
                <div
                    key={image.src}
                    className={clsx(
                        "banner-gallery",
                        `banner-gallery-${index + 1}`,
                        (index === 0 || index === arr.length - 1) && "mt--90"
                    )}
                >
                    <Image
                        src={image.src}
                        alt={image?.alt || "banner"}
                        width={image?.width || 240}
                        height={image?.height || 3024}
                        priority
                    />
                    <Image
                        src={image.src}
                        alt={image?.alt || "banner"}
                        width={image?.width || 240}
                        height={image?.height || 3024}
                        priority
                    />
                </div>
            ))}
        </div>
    </div>
);

BannerGallery.propTypes = {
    className: PropTypes.string,
    images: PropTypes.arrayOf(ImageType),
};

export default BannerGallery;
