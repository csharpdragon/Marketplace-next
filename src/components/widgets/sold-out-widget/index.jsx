import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import Image from "next/image";

const SoldOutWidget = ({ data }) => (
    <div className="footer-widget">
        <h6 className="widget-title">{data.title}</h6>
        {data?.products && (
            <ul className="footer-recent-post">
                {data.products.map((product) => (
                    <li key={product.id} className="recent-post">
                        {product.image?.src && (
                            <div className="thumbnail">
                                <Anchor path={product.path}>
                                    <Image
                                        src={product.image.src}
                                        alt={
                                            product.image?.alt ||
                                            "Product Images"
                                        }
                                        layout="fixed"
                                        width={60}
                                        height={60}
                                    />
                                </Anchor>
                            </div>
                        )}

                        <div className="content">
                            <h6 className="title">
                                <Anchor path={product.path}>
                                    {product.title}
                                </Anchor>
                            </h6>
                            <p>{product.highestBid}</p>
                            <span className="price">{product.price}</span>
                        </div>
                    </li>
                ))}
            </ul>
        )}
    </div>
);

SoldOutWidget.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        products: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                    .isRequired,
                title: PropTypes.string.isRequired,
                path: PropTypes.string.isRequired,
                highestBid: PropTypes.string.isRequired,
                price: PropTypes.string.isRequired,
                image: PropTypes.shape({
                    src: PropTypes.string.isRequired,
                    alt: PropTypes.string,
                }),
            })
        ),
    }),
};

export default SoldOutWidget;
