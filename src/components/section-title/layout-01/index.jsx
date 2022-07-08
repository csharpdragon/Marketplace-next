import PropTypes from "prop-types";
import clsx from "clsx";

const SectionTitle = ({ title, align, className, ...rest }) => (
    <div className={clsx(`section-title text-${align}`, className)} {...rest}>
        {title && (
            <h3
                className={clsx("title mb--0 live-bidding-title")}
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
            >
                {title}
            </h3>
        )}
    </div>
);

SectionTitle.propTypes = {
    title: PropTypes.string,
    align: PropTypes.oneOf(["left", "right", "center"]),
    className: PropTypes.string,
};

SectionTitle.defaultProps = {
    align: "left",
};

export default SectionTitle;
