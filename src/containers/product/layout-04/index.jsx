import PropTypes from "prop-types";
import clsx from "clsx";
import Product from "@components/product/layout-01";
import SectionTitle from "@components/section-title/layout-02";
import Anchor from "@ui/anchor";
import { ProductType, SectionTitleType } from "@utils/types";

const ProductArea = ({ space, className, data }) => (
    <div
        className={clsx(
            "rn-new-items",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row mb--50 align-items-center">
                {data?.section_title && (
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <SectionTitle
                            {...data.section_title}
                            className="mb-0"
                        />
                    </div>
                )}

                <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                    <div
                        className="view-more-btn text-start text-sm-end"
                        data-sal-delay="150"
                        data-sal="slide-up"
                        data-sal-duration="800"
                    >
                        <Anchor className="btn-transparent" path="/product">
                            VIEW ALL
                            <i className="feather feather-arrow-right" />
                        </Anchor>
                    </div>
                </div>
            </div>
            {data?.products && (
                <div className="row g-5">
                    {data.products.map((prod) => (
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
                                image={prod.images?.[0]}
                                authors={prod.authors}
                                bitCount={prod.bitCount}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
);

ProductArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        products: PropTypes.arrayOf(ProductType).isRequired,
    }),
};

ProductArea.defaultProps = {
    space: 1,
};

export default ProductArea;
