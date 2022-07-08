import PropTypes from "prop-types";
import BannerBadge from "@components/banner-ui/banner-badge";
import Button from "@ui/button";
import BannerGallery from "@components/banner-ui/banner-gallery";
import { HeadingType, TextType, ImageType, ButtonType } from "@utils/types";

const HeroArea = ({ data }) => (
    <div className="slider-area ptb--60">
        <div className="container-fluid padding-contorler-am-slide">
            <div className="row d-flex align-items-center">
                <div className="col-lg-12 col-xl-6 order-2 order-xl-1 padding-contorler-am-slide-right">
                    <div className="banner-top-rating sal-animate">
                        {data?.badges?.[0] && (
                            <BannerBadge
                                data-sal-delay="300"
                                data-sal="slide-up"
                                data-sal-duration="500"
                                title={data.badges[0]?.title}
                                image={{
                                    src: data.badges[0]?.image.src,
                                    width: 85,
                                    height: 14,
                                }}
                            />
                        )}
                        {data?.badges?.[1] && (
                            <BannerBadge
                                data-sal-delay="500"
                                data-sal="slide-up"
                                data-sal-duration="500"
                                title={data.badges[1]?.title}
                                image={{
                                    src: data.badges[1]?.image.src,
                                    width: 17,
                                    height: 19,
                                }}
                            />
                        )}
                    </div>
                    {data?.headings[0]?.content && (
                        <h1
                            className="title large-height theme-color"
                            data-sal-delay="200"
                            data-sal="slide-up"
                            data-sal-duration="800"
                            dangerouslySetInnerHTML={{
                                __html: data.headings[0].content,
                            }}
                        />
                    )}
                    {data?.texts?.map((text) => (
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
                    {data?.buttons && (
                        <div className="button-group">
                            {data.buttons.map(({ content, id, ...btn }, i) => (
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
                </div>
                <div className="col-lg-12 col-xl-6 order-1 order-xl-2">
                    {data?.images && <BannerGallery images={data.images} />}
                </div>
            </div>
        </div>
    </div>
);

HeroArea.propTypes = {
    data: PropTypes.shape({
        badges: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                image: ImageType.isRequired,
            })
        ),
        headings: HeadingType,
        texts: TextType,
        images: PropTypes.arrayOf(ImageType),
        buttons: PropTypes.arrayOf(ButtonType),
    }),
};

export default HeroArea;
