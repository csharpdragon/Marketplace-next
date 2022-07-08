import PropTypes from "prop-types";
import clsx from "clsx";
import Anchor from "@ui/anchor";

const CategoryCard = ({ className, icon, title, path }) => (
    <Anchor className={clsx("category-style-one", className)} path={path}>
        <i className={icon} />
        <span className="category-label">{title}</span>
    </Anchor>
);

CategoryCard.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default CategoryCard;
