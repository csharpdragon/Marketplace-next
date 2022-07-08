import PropTypes from "prop-types";
import clsx from "clsx";
import TopSeller from "@components/top-seller/layout-01";
import { ImageType } from "@utils/types";

const ProductCollection = ({ className, collection }) => (
    <div className={clsx("collection", className)}>
        <span>Collections</span>
        <TopSeller
            name={collection.name}
            slug={collection.slug}
            image={{ src: collection.image.src, width: 44, height: 44 }}
        />
    </div>
);

ProductCollection.propTypes = {
    className: PropTypes.string,
    collection: PropTypes.shape({
        name: PropTypes.string,
        slug: PropTypes.string,
        image: ImageType,
    }),
};

export default ProductCollection;
