import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const FilterButtons = ({ buttons, filterHandler }) => {
    const [active, setActive] = useState("all");
    const activeHandler = (filterKey) => {
        setActive(filterKey);
        filterHandler(filterKey);
    };
    return (
        <div className="button-group isotop-filter filters-button-group d-flex justify-content-start justify-content-lg-end mt_md--30 mt_sm--30">
            <button
                type="button"
                className={clsx(active === "all" && "is-checked")}
                onClick={() => activeHandler("all")}
            >
                All
            </button>
            {buttons.map((button) => (
                <button
                    key={button}
                    type="button"
                    className={clsx(button === active && "is-checked")}
                    onClick={() => activeHandler(button)}
                >
                    {button}
                </button>
            ))}
        </div>
    );
};

FilterButtons.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.string),
    filterHandler: PropTypes.func,
};

export default FilterButtons;
