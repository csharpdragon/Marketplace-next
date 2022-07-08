/* eslint-disable react/prop-types */
import { Range } from "react-range";
import PropTypes from "prop-types";
import Button from "@ui/button";
import SliderTrack from "./slider-track";
import SliderThumb from "./slider-thumb";

const STEP = 1;
const MIN = 0;
const MAX = 100;

const InputRange = ({ values, onChange, hideButton }) => {
    const renderTrack = (props) => (
        <SliderTrack {...props} min={MIN} max={MAX} values={values} />
    );
    return (
        <div className="input-range">
            <Range
                step={STEP}
                min={MIN}
                max={MAX}
                values={values}
                onChange={(vals) => onChange(vals)}
                renderTrack={renderTrack}
                renderThumb={SliderThumb}
            />
            <div className="slider__range--output">
                <div className="price__output--wrap">
                    <div className="price--output">
                        <span>Price :</span>
                        <span className="output-label">
                            ${values[0] || 0 / 100} - ${values[1] || 0 / 100}
                        </span>
                    </div>
                    {hideButton === false && (
                        <div className="price--filter">
                            <Button size="small" path="#!">
                                Filter
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

InputRange.propTypes = {
    values: PropTypes.arrayOf(PropTypes.number),
    onChange: PropTypes.func,
    hideButton: PropTypes.bool,
};

InputRange.defaultProps = {
    hideButton: false,
};

export default InputRange;
