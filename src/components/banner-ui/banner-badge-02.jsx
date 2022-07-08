import PropTypes from "prop-types";
import Image from "next/image";
import clsx from "clsx";
import { ImageType } from "@utils/types";

const BannerBadge02 = ({ className, image }) => (
    <div
        className={clsx("badge-inner", className)}
        data-sal-delay="900"
        data-sal="slide-left"
        data-sal-duration="1000"
    >
        <Image
            className="image-1"
            src={image.src}
            alt={image?.alt || "Badge"}
            width={image.width || 180}
            height={image.height || 180}
            priority
        />
    </div>
);

BannerBadge02.propTypes = {
    className: PropTypes.string,
    image: ImageType,
};

export default BannerBadge02;
