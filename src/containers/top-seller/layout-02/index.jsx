import PropTypes from "prop-types";
import clsx from "clsx";
import Slider, { SliderItem } from "@ui/slider";
import TopSeller from "@components/top-seller/layout-01";
import { SellerType } from "@utils/types";

const SliderOptions = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1399,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 993,
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
            },
        },
    ],
};

const TopSellerArea = ({ space, className, data }) => (
    <div
        className={clsx(
            "rn-top-seller-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            {data?.sellers && (
                <Slider
                    options={SliderOptions}
                    className="top-seller-slick-activation creator-list-wrapper slick-gutter-15 slick-arrow-style-one rn-slick-dot-style"
                >
                    {data.sellers.map((seller) => (
                        <SliderItem key={seller} className="creator-single">
                            <TopSeller
                                className="explore"
                                name={seller.name}
                                total_sale={seller.total_sale}
                                slug={seller.slug}
                                image={{
                                    src: seller.image.src,
                                    alt: seller.name,
                                    width: 74,
                                    height: 74,
                                }}
                                isVarified={seller.isVarified}
                            />
                        </SliderItem>
                    ))}
                </Slider>
            )}
        </div>
    </div>
);

TopSellerArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        sellers: PropTypes.arrayOf(SellerType),
    }),
};

export default TopSellerArea;
