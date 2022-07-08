import PropTypes from "prop-types";
import Image from "next/image";
import Button from "@ui/button";
import Anchor from "@ui/anchor";
import {
    HeadingType,
    TextType,
    ButtonType,
    ItemType,
    ImageType,
} from "@utils/types";

const HeroArea = ({ data: { headings, texts, buttons, items, image } }) => (
    <div className="banner-area banner-12 bg_image--23 bg_image with-down-shadow">
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
            <div className="row">
                <div className="col-lg-12">
                    <div className="banner-xii-wrapper">
                        <div className="banner-content-wrapper">
                            {headings?.[0]?.content && (
                                <p className="pre-title">
                                    {headings[0].content}
                                </p>
                            )}
                            {headings?.[1]?.content && (
                                <h1 className="title">{headings[1].content}</h1>
                            )}
                            {texts?.map((text) => (
                                <p className="post-title" key={text.id}>
                                    {text.content}
                                </p>
                            ))}
                            {buttons?.map(({ content, id, ...btn }) => (
                                <Button {...btn} key={id}>
                                    {content}
                                </Button>
                            ))}

                            <div className="wallet-image-wrapper">
                                {items?.map(
                                    ({ id, title, path, image: walletImg }) => (
                                        <Anchor
                                            key={id}
                                            path={path}
                                            className="avatar"
                                            data-tooltip={title}
                                        >
                                            {walletImg?.src && (
                                                <Image
                                                    src={walletImg.src}
                                                    alt={
                                                        walletImg?.alt ||
                                                        "wallet_image"
                                                    }
                                                    width={38}
                                                    height={38}
                                                    priority
                                                />
                                            )}
                                        </Anchor>
                                    )
                                )}
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
        headings: HeadingType,
        texts: TextType,
        buttons: PropTypes.arrayOf(ButtonType),
        items: PropTypes.arrayOf(ItemType),
        image: ImageType.isRequired,
    }),
};

export default HeroArea;
