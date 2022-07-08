import PropTypes from "prop-types";
import clsx from "clsx";

const ErrorText = ({ className, children }) => (
    <span className={clsx("text-danger mt-2 d-inline-block", className)}>
        {children}
    </span>
);

ErrorText.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default ErrorText;
