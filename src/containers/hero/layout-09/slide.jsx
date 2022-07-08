import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Anchor from "@ui/anchor";
import CountdownTimer from "@ui/countdown/layout-02";
import ClientAvatar from "@ui/client-avatar";
import Button from "@ui/button";
import ShareDropdown from "@components/share-dropdown";
import PlaceBidModal from "@components/modals/placebid-modal";
import { IDType, ImageType } from "@utils/types";

const SingleSlide = ({
    title,
    path,
    latestBid,
    price,
    likeCount,
    image,
    auction_date,
    authors,
    bitCount,
    highest_bid,
    categories,
    properties,
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

            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-7">
                        <div className="inner text-left">
                            <div className="top-bid-price d-flex">
                                <span className="latest-bid mr--15">
                                    Highest bid {latestBid}
                                </span>
                                <div className="last-bid color-primary">
                                    {price}
                                </div>
                            </div>
                            <Anchor path={path}>
                                <h1 className="title theme-gradient">
                                    {title}
                                </h1>
                            </Anchor>

                            <div className="product-share-wrapper lg-product-share">
                                <div className="profile-share">
                                    {authors?.map((author) => (
                                        <ClientAvatar
                                            key={author.name}
                                            slug={author.slug}
                                            name={author.name}
                                            image={{
                                                ...author.image,
                                                width: 45,
                                                height: 45,
                                            }}
                                        />
                                    ))}
                                    <Anchor
                                        className="more-author-text"
                                        path={path}
                                    >
                                        {bitCount}+ Place Bit.
                                    </Anchor>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="place-bet-area into-banner mt_md--30 mt_sm--30">
                            <div className="rn-bet-create">
                                <div className="bid-list winning-bid">
                                    <h6 className="title">Winning bit</h6>
                                    <div className="top-seller-inner-one">
                                        <div className="top-seller-wrapper">
                                            <div className="thumbnail">
                                                {highest_bid?.user?.image
                                                    ?.src && (
                                                    <Anchor
                                                        path={
                                                            highest_bid.user
                                                                .path
                                                        }
                                                    >
                                                        <Image
                                                            src={
                                                                highest_bid.user
                                                                    .image.src
                                                            }
                                                            alt="Nft_Profile"
                                                            width={44}
                                                            height={44}
                                                            layout="fixed"
                                                        />
                                                    </Anchor>
                                                )}
                                            </div>
                                            <div className="top-seller-content">
                                                <span className="heighest-bid">
                                                    Heighest bid{" "}
                                                    <Anchor
                                                        path={
                                                            highest_bid.user
                                                                .path
                                                        }
                                                    >
                                                        {highest_bid.user.name}
                                                    </Anchor>
                                                </span>
                                                <span className="count-number">
                                                    {highest_bid.amount}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bid-list left-bid">
                                    <h6 className="title">Auction has ended</h6>
                                    <CountdownTimer
                                        date={auction_date}
                                        className="mt--15"
                                    />
                                </div>
                            </div>
                            <Button className="mt--30" onClick={handleBidModal}>
                                Place a Bid
                            </Button>
                        </div>
                        <div className="property-wrapper-flex d-flex">
                            <div className="rn-pd-sm-property-wrapper into-banner">
                                <h6 className="pd-property-title">Catagory</h6>
                                <div className="catagory-wrapper">
                                    {categories?.map((cat) => (
                                        <div
                                            key={cat.id}
                                            className="pd-property-inner"
                                        >
                                            <span className="color-body type">
                                                {cat.type}
                                            </span>
                                            <span className="color-white value">
                                                {cat.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="rn-pd-sm-property-wrapper into-banner ml--30">
                                <h6 className="pd-property-title">Property</h6>
                                <div className="property-wrapper">
                                    {properties?.map((prop) => (
                                        <div
                                            key={prop.id}
                                            className="pd-property-inner"
                                        >
                                            <span className="color-body type">
                                                {prop.type}
                                            </span>
                                            <span className="color-white value">
                                                {prop.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="tooltip-bottom-wrapper d-flex">
                        <div className="share-react react d-flex">
                            <div className="bid-react-area mr--15">
                                <div className="react-area">
                                    <svg
                                        viewBox="0 0 17 16"
                                        fill="none"
                                        width="16"
                                        height="16"
                                        className="sc-bdnxRM sc-hKFxyN kBvkOu"
                                    >
                                        <path
                                            d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                    <span className="number">{likeCount}</span>
                                </div>
                            </div>

                            <ShareDropdown />
                        </div>
                    </div>
                </div>
            </div>
            <PlaceBidModal show={showBidModal} handleModal={handleBidModal} />
        </>
    );
};

SingleSlide.propTypes = {
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
};

export default SingleSlide;
