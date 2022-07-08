import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Anchor from "@ui/anchor";
import CountdownTimer from "@ui/countdown/layout-02";
import ClientAvatar from "@ui/client-avatar";
import Button from "@ui/button";
import PlaceBidModal from "@components/modals/placebid-modal";
import { ImageType } from "@utils/types";

const SingleSlide = ({
    image,
    title,
    path,
    description,
    authors,
    bitCount,
    auction_date,
    award_image,
}) => {
    const [showBidModal, setShowBidModal] = useState(false);
    const handleBidModal = () => {
        setShowBidModal((prev) => !prev);
    };
    return (
        <>
            {image?.src && (
                <Image
                    src={image.src}
                    alt="Slider BG"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                    className="slider-bg"
                />
            )}

            <div className="rn-banner-wrapper g-5 row">
                <div className="col-xl-4 col-lg-12 col-12 order-3 order-xl-1 order-sm-1">
                    <Anchor path={path}>
                        <h2
                            className="title pl--30"
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                    </Anchor>
                </div>
                <div className="col-xl-6 col-lg-12 col-12 order-2 order-xl-2 order-sm-2">
                    <div className="item-description">
                        <p>{description}</p>
                        <div className="product-share-wrapper">
                            <div className="profile-share">
                                {authors?.map((author) => (
                                    <ClientAvatar
                                        key={author.name}
                                        slug={author.slug}
                                        name={author.name}
                                        image={author.image}
                                    />
                                ))}
                                <Anchor
                                    className="more-author-text"
                                    path={path}
                                >
                                    {bitCount}+ Place Bit.
                                </Anchor>
                            </div>

                            <CountdownTimer date={auction_date} />
                        </div>
                        <Button
                            color="primary-alta"
                            className="mt--35"
                            onClick={handleBidModal}
                        >
                            Place a Bid
                        </Button>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-12 col-12 order-1 order-xl-3 order-sm-3">
                    <div className="img-thumb-award d-flex justify-content-center">
                        {award_image?.src && (
                            <Image
                                src={award_image.src}
                                alt="Nft_Profile"
                                layout="fixed"
                                width={130}
                                height={130}
                            />
                        )}
                    </div>
                </div>
            </div>
            <PlaceBidModal show={showBidModal} handleModal={handleBidModal} />
        </>
    );
};

SingleSlide.propTypes = {
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
};

export default SingleSlide;
