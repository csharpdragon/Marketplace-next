import PropTypes from "prop-types";
import Slider, { SliderItem } from "@ui/slider";
import { IDType, ImageType } from "@utils/types";
import SingleSlide from "./slide";

const sliderOptions = {
    dots: false,
    arrows: false,
    adaptiveHeight: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1599,
            settings: {
                dots: true,
                arrows: false,
            },
        },
    ],
};
const HeroArea = ({ data }) => (
    <div className="rn-slider-area fullscreen-slide">
        {data?.banners && (
            <Slider
                options={sliderOptions}
                className="slider-activation-banner-3 game-banner-slick-wrapper slick-arrow-style-one rn-slick-dot-style"
            >
                {data?.banners.map((banner) => (
                    <SliderItem
                        key={banner.id}
                        className="d-flex align-items-center padding-controler-slide-product-2 justify-content-center slide slide-style-2 fullscreen_image-banner position-relative"
                    >
                        <SingleSlide
                            title={banner.title}
                            path={banner.path}
                            latestBid={banner.latestBid}
                            price={banner.price}
                            likeCount={banner.likeCount}
                            image={banner.image}
                            auction_date={banner.auction_date}
                            authors={banner.authors}
                            bitCount={banner.bitCount}
                            highest_bid={banner.highest_bid}
                            categories={banner.categories}
                            properties={banner.properties}
                        />
                    </SliderItem>
                ))}
            </Slider>
        )}
    </div>
);

HeroArea.propTypes = {
    data: PropTypes.shape({
        banners: PropTypes.arrayOf(
            PropTypes.shape({
                id: IDType,
                title: PropTypes.string.isRequired,
                path: PropTypes.string.isRequired,
                latestBid: PropTypes.string.isRequired,
                price: PropTypes.string,
                likeCount: PropTypes.number,
                image: ImageType,
                auction_date: PropTypes.string,
                authors: PropTypes.arrayOf(
                    PropTypes.shape({
                        name: PropTypes.string.isRequired,
                        slug: PropTypes.string.isRequired,
                        image: ImageType,
                    })
                ),
                bitCount: PropTypes.number,
                highest_bid: PropTypes.shape({
                    user: PropTypes.shape({
                        name: PropTypes.string.isRequired,
                        path: PropTypes.string.isRequired,
                        image: ImageType,
                    }),
                    amount: PropTypes.string.isRequired,
                }),
                categories: PropTypes.arrayOf(
                    PropTypes.shape({
                        id: IDType,
                        value: PropTypes.string.isRequired,
                        type: PropTypes.string.isRequired,
                    })
                ),
                properties: PropTypes.arrayOf(
                    PropTypes.shape({
                        id: IDType,
                        value: PropTypes.string.isRequired,
                        type: PropTypes.string.isRequired,
                    })
                ),
            })
        ),
    }),
};

export default HeroArea;
