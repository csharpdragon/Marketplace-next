import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout-01";
import Product from "@components/product/layout-01";
import { SectionTitleType, ProductType } from "@utils/types";

const LiveExploreArea = ({ data, className, space, id }) => (
    <div
        className={clsx(
            "rn-live-bidding-area",
            space === 1 && "ptb--70",
            className
        )}
        id={id}
    >
        <div className="container">
            {data?.section_title && (
                <div className="row mb--30">
                    <SectionTitle {...data.section_title} />
                </div>
            )}

            {data?.products && (
                <div className="row g-5">
                    {data.products.map((prod) => (
                        <div
                            className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12"
                            key={prod.id}
                        >
                            <Product
                                overlay
                                title={prod.title}
                                slug={prod.slug}
                                latestBid={prod.latestBid}
                                price={prod.price}
                                auction_date={prod.auction_date}
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
    id: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        products: PropTypes.arrayOf(ProductType).isRequired,
    }),
};

LiveExploreArea.defaultProps = {
    space: 1,
};

export default LiveExploreArea;
