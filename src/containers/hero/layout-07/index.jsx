import PropTypes from "prop-types";
import Image from "next/image";
import ClientAvatar from "@ui/client-avatar";
import Anchor from "@ui/anchor";
import { ImageType } from "@utils/types";

const HeroArea = ({ data }) => (
    <div className="rn-banner-area">
        <div className="slider-style-7" data-black-overlay="8">
            {data?.image?.src && (
                <Image
                    src={data.image.src}
                    alt="Slider BG"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                    className="slider-bg"
                />
            )}
            <div className="rn-banner-wrapper row">
                <div className="col-xl-5 col-lg-12 col-12 order-3 order-xl-1">
                    <div className="item-description">
                        <p>{data.description}</p>
                        <div className="product-share-wrapper">
                            <div className="profile-share">
                                {data?.authors?.map((author) => (
                                    <ClientAvatar
                                        key={author.name}
                                        slug={author.slug}
                                        name={author.name}
                                        image={author.image}
                                    />
                                ))}
                                <Anchor
                                    className="more-author-text"
                                    path="/collection"
                                >
                                    {data.bitCount}+ Place Bit.
                                </Anchor>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-12 col-12 order-2 order-xl-2">
                    <h2
                        className="title"
                        dangerouslySetInnerHTML={{ __html: data.title }}
                    />
                </div>
                <div className="col-xl-3 col-lg-12 col-12 order-1 order-xl-3">
                    <div className="img-thumb-award">
                        {data?.award_image?.src && (
                            <Image
                                src={data.award_image.src}
                                alt="Nft_Profile"
                                layout="fixed"
                                width={130}
                                height={130}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

HeroArea.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        award_image: ImageType,
        image: ImageType.isRequired,
        authors: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired,
                image: ImageType.isRequired,
            })
        ),
        bitCount: PropTypes.number,
    }),
};

export default HeroArea;
