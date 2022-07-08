import PropTypes from "prop-types";
import PortfolioLarge from "@components/portfolio/layout-02";
import PortfolioSmall from "@components/portfolio/layout-03";
import Slider, { SliderItem } from "@ui/slider";
import { FeatureProductsType } from "@utils/types";

const SliderOptions = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    cssEase: "linear",
    adaptiveHeight: false,
};

const HeroArea = ({ data }) => (
    <div className="banner-three slider-style-3 pt--70">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-5">
                    <div className="wrapper">
                        {data?.largeProducts && (
                            <Slider
                                options={SliderOptions}
                                className="slider slider-activation-banner-3"
                            >
                                {data.largeProducts.map((prod) => (
                                    <SliderItem
                                        key={prod.id}
                                        className="single-slide"
                                    >
                                        <PortfolioLarge
                                            title={prod.title}
                                            path={prod.slug}
                                            author={{
                                                name: prod.author.name,
                                            }}
                                            image={prod.image}
                                        />
                                    </SliderItem>
                                ))}
                            </Slider>
                        )}
                    </div>
                </div>

                <div className="col-lg-7">
                    {data?.smallProducts && (
                        <div className="row g-4">
                            {data.smallProducts.map((prod) => (
                                <SliderItem
                                    key={prod.id}
                                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                                >
                                    <PortfolioSmall
                                        title={prod.title}
                                        path={prod.slug}
                                        author={{
                                            name: prod.author.name,
                                        }}
                                        image={prod.image}
                                    />
                                </SliderItem>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
);

HeroArea.propTypes = {
    data: PropTypes.shape({
        largeProducts: PropTypes.arrayOf(FeatureProductsType),
        smallProducts: PropTypes.arrayOf(FeatureProductsType),
    }),
};

export default HeroArea;
