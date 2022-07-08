import PropTypes from "prop-types";
import Button from "@ui/button";
import Slider, { SliderItem } from "@ui/slider";
import Portfolio from "@components/portfolio/layout-02";
import { ButtonType, IDType, ImageType } from "@utils/types";

const SliderOptions = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    cssEase: "linear",
    adaptiveHeight: true,
};

const HeroArea = ({ data }) => (
    <div className="banner-style-4 rn-section-gapTop">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-12 order-2 order-lg-1 mt_md--40 mt_sm--40">
                    <div className="sldier-content">
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
                <div className="col-xl-6 col-lg-6 col-md-12 order-1 order-lg-2">
                    {data?.banners && (
                        <Slider
                            options={SliderOptions}
                            className="slider slick-activation-04"
                        >
                            {data.banners.map((banner) => (
                                <SliderItem key={banner.id}>
                                    <Portfolio
                                        title={banner.title}
                                        client={banner.client}
                                        path={banner.path}
                                        image={{
                                            src: banner.image.src,
                                            width: 667,
                                            height: 667,
                                        }}
                                    />
                                </SliderItem>
                            ))}
                        </Slider>
                    )}
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
        banners: PropTypes.arrayOf(
            PropTypes.shape({
                id: IDType,
                title: PropTypes.string.isRequired,
                client: PropTypes.string.isRequired,
                path: PropTypes.string.isRequired,
                image: ImageType,
            })
        ),
    }),
};

export default HeroArea;
