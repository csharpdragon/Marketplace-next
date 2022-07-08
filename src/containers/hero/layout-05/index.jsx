import PropTypes from "prop-types";
import Button from "@ui/button";
import Product from "@components/product/layout-01";
import { ButtonType, ProductType } from "@utils/types";

const HeroArea = ({ data }) => (
    <div className="slider-style-5 rn-section-gapTop">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 order-2 order-lg-1 mt_md--30 mt_sm--30">
                    <div className="banner-left-content">
                        {data?.badge && (
                            <span
                                className="title-badge"
                                data-sal="slide-up"
                                data-sal-delay="150"
                                data-sal-duration="800"
                            >
                                {data.badge}
                            </span>
                        )}

                        <h2
                            className="title"
                            data-sal="slide-up"
                            data-sal-delay="200"
                            data-sal-duration="800"
                            dangerouslySetInnerHTML={{ __html: data?.title }}
                        />
                        <p
                            className="banner-disc-one"
                            data-sal="slide-up"
                            data-sal-delay="250"
                            data-sal-duration="800"
                            dangerouslySetInnerHTML={{
                                __html: data?.description,
                            }}
                        />
                        {data?.buttons && (
                            <div className="button-group">
                                {data.buttons.map(({ id, content, ...btn }) => (
                                    <Button
                                        key={id}
                                        data-sal="slide-up"
                                        data-sal-delay="300"
                                        data-sal-duration="800"
                                        {...btn}
                                    >
                                        {content}
                                    </Button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                    <div className="row g-5">
                        {data?.products?.map((prod) => (
                            <div className="col-lg-6 col-md-6" key={prod.id}>
                                <Product
                                    overlay
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
        </div>
    </div>
);

HeroArea.propTypes = {
    data: PropTypes.shape({
        badge: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        buttons: PropTypes.arrayOf(ButtonType),
        products: PropTypes.arrayOf(ProductType),
    }),
};
export default HeroArea;
