import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Product from "@components/product/layout-01";

const ProductModal = ({ show, handleModal, data }) => (
    <Modal
        className="rn-popup-modal upload-modal-wrapper"
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
        <Modal.Body>
            <Product
                overlay
                disableShareDropdown
                title={data.name}
                slug="/product"
                latestBid="6/30"
                price={{
                    amount: +data.price,
                    currency: "wETH",
                }}
                likeCount={300}
                image={{ src: URL.createObjectURL(data.image) }}
                authors={[
                    {
                        name: "Mark Jordan",
                        slug: "/author",
                        image: {
                            src: "/images/client/client-2.png",
                        },
                    },
                    {
                        name: "Farik Shaikh",
                        slug: "/author",
                        image: {
                            src: "/images/client/client-3.png",
                        },
                    },
                    {
                        name: "John Doe",
                        slug: "/author",
                        image: {
                            src: "/images/client/client-5.png",
                        },
                    },
                ]}
                bitCount={15}
            />
        </Modal.Body>
    </Modal>
);

ProductModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
    data: PropTypes.shape({
        image: PropTypes.shape({}),
        name: PropTypes.string,
        price: PropTypes.string,
    }),
};
export default ProductModal;
