import PropTypes from "prop-types";
import InputRange from "@ui/input-range";

const PriceRangeFilter = ({ values, onChange }) => (
    <div className="nuron-expo-filter-widget widget-shortby mt--30">
        <div className="inner">
            <h5 className="widget-title">Filter By Price</h5>
            <div className="content">
                <div className="price_filter s-filter clear">
                    <InputRange
                        values={values}
                        onChange={onChange}
                        hideButton
                    />
                </div>
            </div>
        </div>
    </div>
);

PriceRangeFilter.propTypes = {
    values: PropTypes.arrayOf(PropTypes.number),
    onChange: PropTypes.func,
};

export default PriceRangeFilter;
