import PropTypes from "prop-types";
import ScrollToTop from "@ui/scroll-to-top";
import { ToastContainer } from "react-toastify";

const Wrapper = ({ children }) => (
    <>
        {children}
        <ScrollToTop />
        <ToastContainer />
    </>
);

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper;
