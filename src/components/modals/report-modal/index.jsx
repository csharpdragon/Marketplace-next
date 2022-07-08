import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";

const ReportModal = ({ show, handleModal }) => (
    <Modal
        className="rn-popup-modal report-modal-wrapper"
        show={show}
        onHide={handleModal}
        centered
    >
        {show && (
            <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleModal}
            >
                <i className="feather-x" />
            </button>
        )}
        <Modal.Header className="report-modal-header">
            <h5 className="modal-title">Why are you reporting?</h5>
        </Modal.Header>
        <Modal.Body>
            <p>
                Describe why you think this item should be removed from
                marketplace
            </p>
            <div className="report-form-box">
                <h6 className="title">Message</h6>
                <textarea name="message" placeholder="Write issues" />
                <div className="report-button">
                    <Button size="medium" className="mr--10 w-auto">
                        Report
                    </Button>
                    <Button
                        color="primary-alta"
                        size="medium"
                        className="w-auto"
                        onClick={handleModal}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal.Body>
    </Modal>
);

ReportModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
};
export default ReportModal;
