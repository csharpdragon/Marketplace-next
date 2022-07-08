import PropTypes from "prop-types";
import clsx from "clsx";

const ProductProperty = ({ type, value, className }) => (
    <div className={clsx("pd-property-inner", className)}>
        <span className="color-body type">{type}</span>
        <span className="color-white value">{value}</span>
    </div>
);

ProductProperty.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default ProductProperty;
