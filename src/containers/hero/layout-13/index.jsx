import PropTypes from "prop-types";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import PlaceBet from "@components/product-details/place-bet";
import ProductProperty from "@components/product-details/product-property";
import { ImageType, HeadingType, IDType } from "@utils/types";

const HeroArea = ({
    data: {
        image,
        headings,
        highest_bid,
        auction_date,
        categories,
        properties,
    },
}) => (
    <div
        className="banner-area banner_xii with-down-shadow bg_image"
        style={{ backgroundImage: `url("/images/bg/bg-image-24.jpg")` }}
    >
        <div className="container">
            <div className="row g-5 d-flex align-items-center flex-wrap">
                {image?.src && (
                    <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12">
                        <Tilt
                            tiltReverse
                            tiltMaxAngleX={3}
                            tiltMaxAngleY={3}
                            perspective={500}
                            gyroscope
                        >
                            <div className="left-thumbnail-image">
                                <Image
                                    src={image.src}
                                    alt={image?.alt || "banner"}
                                    width={886}
                                    height={886}
                                    priority
                                />
                            </div>
                        </Tilt>
                    </div>
                )}
                <div className="col-xxl-5 col-xl-6 col-lg-12 col-md-12">
                    {headings?.[0]?.content && (
                        <h1 className="title mb--30">{headings[0].content}</h1>
                    )}
                    <PlaceBet
                        highest_bid={highest_bid}
                        auction_date={auction_date}
                        className="into-banner mt_md--30 mt_sm--30"
                        btnColor="primary"
                    />
                    <div className="d-flex">
                        <div className="rn-pd-sm-property-wrapper into-banner">
                            <h6 className="pd-property-title">Catagory</h6>
                            <div className="catagory-wrapper">
                                {categories?.map((cat) => (
                                    <ProductProperty
                                        key={cat.id}
                                        type={cat.type}
                                        value={cat.value}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="rn-pd-sm-property-wrapper into-banner ml--30">
                            <h6 className="pd-property-title">Property</h6>
                            <div className="property-wrapper">
                                {properties?.map((prop) => (
                                    <ProductProperty
                                        key={prop.id}
                                        type={prop.type}
                                        value={prop.value}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

HeroArea.propTypes = {
    data: PropTypes.shape({
        image: ImageType.isRequired,
        headings: PropTypes.arrayOf(HeadingType),
        highest_bid: PropTypes.shape({
            amount: PropTypes.string,
            bidder: PropTypes.shape({
                name: PropTypes.string,
                image: ImageType,
                slug: PropTypes.string,
            }),
        }),
        auction_date: PropTypes.string,
        properties: PropTypes.arrayOf(
            PropTypes.shape({
                id: IDType,
                type: PropTypes.string,
                value: PropTypes.string,
            })
        ),
        categories: PropTypes.arrayOf(
            PropTypes.shape({
                id: IDType,
                type: PropTypes.string,
                value: PropTypes.string,
            })
        ),
    }),
};

export default HeroArea;
