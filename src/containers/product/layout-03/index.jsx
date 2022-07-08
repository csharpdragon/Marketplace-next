import PropTypes from "prop-types";
import clsx from "clsx";
import Product from "@components/product/layout-01";
import { ProductType } from "@utils/types";

const ProductArea = ({ space, className, data }) => (
    <div
        className={clsx(
            "product-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row mb--30 align-items-center">
                <div className="col-12">
                    <h3
                        className="title mb--0"
                        data-sal-delay="150"
                        data-sal="slide-up"
                        data-sal-duration="800"
                    >
                        {data?.section_title.title}
                    </h3>
                </div>
            </div>
            <div className="row g-5">
                {data?.products?.map((prod) => (
                    <div
                        key={prod.id}
                        data-sal="slide-up"
                        data-sal-delay="150"
                        data-sal-duration="800"
                        className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                    >
                        <Product
                            title={prod.title}
                            slug={prod.slug}
                            latestBid={prod.latestBid}
                            price={prod.price}
                            likeCount={prod.likeCount}
                            auction_date={prod.auction_date}
                            image={prod.images?.[0]}
                            authors={prod.authors}
                            bitCount={prod.bitCount}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

ProductArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            title: PropTypes.string,
        }),
        products: PropTypes.arrayOf(ProductType),
    }),
};

ProductArea.defaultProps = {
    space: 1,
};

export default ProductArea;
