import PropTypes from "prop-types";
import clsx from "clsx";
import TopSeller from "@components/top-seller/layout-01";
import { ImageType } from "@utils/types";

const ProductCategory = ({ className, owner }) => (
    <div className={clsx("catagory", className)}>
        <span>
            Catagory <span className="color-body">10% royalties</span>
        </span>
        <TopSeller
            name={owner.name}
            slug={owner.slug}
            image={{ src: owner.image.src, width: 44, height: 44 }}
        />
    </div>
);

ProductCategory.propTypes = {
    className: PropTypes.string,
    owner: PropTypes.shape({
        name: PropTypes.string,
        slug: PropTypes.string,
        image: ImageType,
    }),
};

export default ProductCategory;
