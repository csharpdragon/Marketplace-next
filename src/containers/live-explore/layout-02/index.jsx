import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout-01";
import Product from "@components/product/layout-01";
import { SectionTitleType, ProductType } from "@utils/types";

const LiveExploreArea = ({ data, className, space, gap }) => (
    <div
        className={clsx(
            "rn-live-bidding-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            {data?.section_title && (
                <div className="row mb--50">
                    <div className="col-lg-12">
                        <SectionTitle {...data.section_title} />
                    </div>
                </div>
            )}
            {data?.products && (
                <div className={clsx("row", gap && `g-${gap}`)}>
                    {data.products.map((prod) => (
                        <div
                            key={prod.id}
                            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                            data-sal-delay="150"
                            data-sal="slide-up"
                            data-sal-duration="800"
                        >
                            <Product
                                overlay
                                placeBid={!!data.placeBid}
                                title={prod.title}
                                slug={prod.slug}
                                auction_date={prod.auction_date}
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

LiveExploreArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        products: PropTypes.arrayOf(ProductType).isRequired,
        placeBid: PropTypes.bool,
    }),
    gap: PropTypes.number,
};

LiveExploreArea.defaultProps = {
    space: 1,
};

export default LiveExploreArea;
