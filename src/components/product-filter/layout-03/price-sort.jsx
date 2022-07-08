import PropTypes from "prop-types";

const PriceSort = ({ onChange, value }) => {
    const changeHandler = (e) => {
        const { value: currentValue } = e.target;
        onChange(currentValue);
    };
    return (
        <div className="nuron-expo-filter-widget widget-shortby mt--30">
            <div className="inner">
                <h5 className="widget-title">Sort By Price</h5>
                <div className="content">
                    <div className="nuron-form-check">
                        <input
                            type="radio"
                            value="low-to-high"
                            name="sort"
                            id="price-check1"
                            checked={value === "low-to-high"}
                            onChange={changeHandler}
                        />
                        <label htmlFor="price-check1">Price: Low to High</label>
                    </div>
                    <div className="nuron-form-check">
                        <input
                            type="radio"
                            value="high-to-low"
                            name="sort"
                            id="price-check2"
                            checked={value === "high-to-low"}
                            onChange={changeHandler}
                        />
                        <label htmlFor="price-check2">Price: High to Low</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

PriceSort.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
};

export default PriceSort;
