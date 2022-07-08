/* eslint-disable react/prop-types */
import clsx from "clsx";

const SliderThumb = ({ props, isDragged }) => (
    <div className="slider-thumb-container" style={props.style} {...props}>
        <div
            className={clsx("slider-thumb", { "is-dragged": isDragged })}
            style={{
                ...props.style,
            }}
        />
    </div>
);

export default SliderThumb;
