import PropTypes from "prop-types";
import clsx from "clsx";

const Sticky = ({ children, className, top }) => (
    <div className={clsx("widge-wrapper", className)} style={{ top }}>
        {children}
    </div>
);

Sticky.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    top: PropTypes.string,
};

Sticky.defaultProps = {
    top: "100px",
};

export default Sticky;
