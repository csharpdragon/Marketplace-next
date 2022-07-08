import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import clsx from "clsx";
import Anchor from "@ui/anchor";
import ClientAvatar from "@ui/client-avatar";
import Button from "@ui/button";
import ShareDropdown from "@components/share-dropdown";
import PlaceBidModal from "@components/modals/placebid-modal";
import { ImageType } from "@utils/types";

const Product = ({
    title,
    slug,
    price,
    latestBid,
    image,
    authors,
    bitCount,
    likeCount,
    className,
}) => {
    const [showBidModal, setShowBidModal] = useState(false);
    const handleBidModal = () => {
        setShowBidModal((prev) => !prev);
    };
    return (
        <>
            <div className={clsx("lg-product-wrapper", className)}>
                <div className="inner">
                    <div className="lg-left-content">
                        {image?.src && (
                            <Anchor
                                path={`/product/${slug}`}
                                className="thumbnail"
                            >
                                <Image
                                    src={image.src}
                                    alt={image?.alt || "NFT_portfolio"}
                                    width={image?.width ? image.width : 430}
                                    height={image?.height ? image.height : 430}
                                />
                            </Anchor>
                        )}
                        <div className="read-content">
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
                                        path={`/product/${slug}`}
                                    >
                                        {bitCount}+ Place Bit.
                                    </Anchor>
                                </div>
                                <div className="last-bid">
                                    {price.amount}
                                    {price.currency}
                                </div>
                            </div>
                            <Anchor path={`/product/${slug}`}>
                                <h6 className="title">{title}</h6>
                            </Anchor>
                            <span className="latest-bid">
                                Highest bid {latestBid}
                            </span>
                            <div className="share-wrapper d-flex">
                                <div className="react-area mr--15">
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
                                <ShareDropdown />
                            </div>
                        </div>
                    </div>
                    <Button
                        color="primary-alta"
                        size="medium"
                        className="mr--30 bid-btn"
                        onClick={handleBidModal}
                    >
                        Place a Bid
                    </Button>
                </div>
            </div>
            <PlaceBidModal show={showBidModal} handleModal={handleBidModal} />
        </>
    );
};

Product.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    price: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
    latestBid: PropTypes.string.isRequired,
    image: ImageType.isRequired,
    authors: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            image: ImageType.isRequired,
        })
    ),
    bitCount: PropTypes.number,
    likeCount: PropTypes.number,
};

Product.defaultProps = {
    likeCount: 0,
};

export default Product;
