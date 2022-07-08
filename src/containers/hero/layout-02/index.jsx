import PropTypes from "prop-types";
import Slider, { SliderItem } from "@ui/slider";
import Portfolio from "@components/portfolio/layout-01";
import { FeatureProductsType } from "@utils/types";

const SliderOptions = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 1124,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 868,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            },
        },
    ],
};

const HeroArea = ({ data }) => (
    <div className="banner-area pt--25">
        <div className="container-fluid">
            <div className="row">
                {data?.items && (
                    <Slider
                        options={SliderOptions}
                        className="slider-style-2 slick-activation-01 slick-arrow-style-one slick-arrow-between"
                    >
                        {data.items.map((prod) => (
                            <SliderItem key={prod.id} className="single-slide">
                                <Portfolio
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
    </div>
);

HeroArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(FeatureProductsType),
    }),
};

export default HeroArea;
