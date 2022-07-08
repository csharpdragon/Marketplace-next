import PropTypes from "prop-types";
import clsx from "clsx";

const FilterButton = ({ onClick, open }) => (
    <div
        className="view-more-btn text-start text-sm-end"
        data-sal-delay="150"
        data-sal="slide-up"
        data-sal-duration="800"
    >
        <button
            type="button"
            className={clsx(
                "discover-filter-button discover-filter-activation btn btn-primary",
                open && "open"
            )}
            onClick={onClick}
        >
            Filter
            <i className="feather-filter" />
        </button>
    </div>
);

FilterButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    open: PropTypes.bool,
};

export default FilterButton;
