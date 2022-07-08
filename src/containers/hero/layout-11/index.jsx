import PropTypes from "prop-types";
import Tilt from "react-parallax-tilt";
import Button from "@ui/button";
import BannerBadge02 from "@components/banner-ui/banner-badge-02";
import FunFact from "@components/funfact/layout-02";
import Product from "@components/product/layout-01";
import {
    HeadingType,
    TextType,
    ImageType,
    ButtonType,
    ItemType,
    ProductType,
} from "@utils/types";

const HeroArea = ({
    data: { headings, texts, buttons, badge, items, product },
}) => (
    <div className="slider-area">
        <div className="container-fluid padding-contorler-am-slide-11">
            <div className="row d-flex align-items-center">
                <div className="col-lg-12 col-xl-6 order-2 order-xl-1 home-11-slide-padding">
                    {headings[0]?.content && (
                        <h2
                            className="title"
                            data-sal-delay="200"
                            data-sal="slide-up"
                            data-sal-duration="800"
                            dangerouslySetInnerHTML={{
                                __html: headings[0].content,
                            }}
                        />
                    )}
                    {texts?.map((text) => (
                        <p
                            className="slide-disc"
                            data-sal-delay="300"
                            data-sal="slide-up"
                            data-sal-duration="800"
                            key={text.id}
                        >
                            {text.content}
                        </p>
                    ))}
                    {buttons && (
                        <div className="button-group">
                            {buttons.map(({ content, id, ...btn }, i) => (
                                <Button
                                    {...btn}
                                    data-sal-delay={400 + i * 100}
                                    data-sal="slide-up"
                                    data-sal-duration="800"
                                    key={id}
                                >
                                    {content}
                                </Button>
                            ))}
                        </div>
                    )}
                    <div className="odometer-area-slide ">
                        {items?.map((item, i) => (
                            <FunFact
                                key={item.id}
                                title={item.title}
                                counter={item.counter}
                                data-sal-delay={400 + i * 200}
                                data-sal="slide-left"
                                data-sal-duration="800"
                            />
                        ))}
                    </div>
                </div>
                <div className="col-lg-12 col-xl-6 order-1 order-xl-2">
                    <div
                        className="banner-right-feature-product"
                        data-sal-delay="300"
                        data-sal="slide-left"
                        data-sal-duration="800"
                    >
                        <div
                            className="single-slide-product"
                            data-sal-delay="700"
                            data-sal="slide-left"
                            data-sal-duration="800"
                        >
                            <Tilt
                                tiltReverse
                                tiltMaxAngleX={3}
                                tiltMaxAngleY={3}
                                perspective={500}
                                gyroscope
                            >
                                <Product
                                    title={product.title}
                                    slug={product.slug}
                                    latestBid={product.latestBid}
                                    price={product.price}
                                    likeCount={product.likeCount}
                                    auction_date={product.auction_date}
                                    image={product.images?.[0]}
                                    authors={product.authors}
                                    bitCount={product.bitCount}
                                />
                            </Tilt>
                        </div>

                        {badge?.image?.src && (
                            <BannerBadge02 image={badge.image} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

HeroArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(HeadingType),
        texts: PropTypes.arrayOf(TextType),
        images: PropTypes.arrayOf(ImageType),
        buttons: PropTypes.arrayOf(ButtonType),
        badge: PropTypes.shape({
            image: ImageType,
        }),
        items: PropTypes.arrayOf(ItemType),
        product: ProductType,
    }),
};

export default HeroArea;
