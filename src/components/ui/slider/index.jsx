import SlickSlider from "react-slick";
import PropTypes from "prop-types";
import clsx from "clsx";

const ArrowButton = ({ onClick, icon, className }) => (
    <button
        type="button"
        onClick={onClick}
        className={clsx("slide-arrow", className)}
    >
        <i className={icon} />
    </button>
);

ArrowButton.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    icon: PropTypes.string,
};

const Slider = ({ options, children, prevIcon, nextIcon, className }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        cssEase: "linear",
        prevArrow: <ArrowButton icon={prevIcon} />,
        nextArrow: <ArrowButton icon={nextIcon} />,
        ...options,
    };
    return (
        <SlickSlider className={clsx(className)} {...settings}>
            {children}
        </SlickSlider>
    );
};

Slider.propTypes = {
    options: PropTypes.shape({
        dots: PropTypes.bool,
        infinite: PropTypes.bool,
        speed: PropTypes.bool,
        slidesToShow: PropTypes.number,
        slidesToScroll: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
    prevIcon: PropTypes.string,
    nextIcon: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Slider.defaultProps = {
    prevIcon: "feather-arrow-left",
    nextIcon: "feather-arrow-right",
};

export default Slider;

export const SliderItem = ({ children, className, ...rest }) => (
    <div className={clsx(className, "slider-item")} {...rest}>
        {children}
    </div>
);

SliderItem.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
