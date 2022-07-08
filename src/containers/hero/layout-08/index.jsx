import PropTypes from "prop-types";
import Slider, { SliderItem } from "@ui/slider";
import { IDType, ImageType } from "@utils/types";
import SingleSlide from "./slide";

const HeroArea = ({ data }) => (
    <div className="rn-banner-area">
        {data?.banners && (
            <Slider
                options={{ dots: true }}
                className="slider-activation-banner-4 game-banner-short-slick-wrapper slick-arrow-style-one rn-slick-dot-style"
            >
                {data.banners.map((banner) => (
                    <SliderItem
                        key={banner.id}
                        className="slider-style-7 border-radious-none pt--150 pb--190 pt_sm--70 pb_sm--70"
                        data-black-overlay="6"
                    >
                        <SingleSlide
                            title={banner.title}
                            path={banner.path}
                            description={banner.description}
                            authors={banner.authors}
                            bitCount={banner.bitCount}
                            auction_date={banner.auction_date}
                            image={banner.image}
                            award_image={banner.award_image}
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
                title: PropTypes.string,
                path: PropTypes.string,
                description: PropTypes.string,
                authors: PropTypes.arrayOf(
                    PropTypes.shape({
                        name: PropTypes.string,
                        slug: PropTypes.string,
                        image: ImageType,
                    })
                ),
                bitCount: PropTypes.number,
                auction_date: PropTypes.string,
                image: ImageType,
                award_image: ImageType,
            })
        ).isRequired,
    }).isRequired,
};

export default HeroArea;
