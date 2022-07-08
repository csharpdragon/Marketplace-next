import PropTypes from "prop-types";
import Image from "next/image";
import Button from "@ui/button";
import Anchor from "@ui/anchor";
import { HeadingType, TextType, ButtonType, ItemType } from "@utils/types";

const HeroArea = ({ data: { headings, texts, buttons, items } }) => (
    <div
        className="slide slide-style-14 slider-video-bg d-flex align-items-center justify-content-center"
        data-black-overlay="8"
    >
        <div className="container">
            <div className="row align-items-center">
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

        {/* <div className="video-background">
            <span>
                <video muted="" autoPlay="">
                    <source src="assets/images/vedio/banner01.mp4" />
                </video>
            </span>
        </div> */}
    </div>
);

HeroArea.propTypes = {
    data: PropTypes.shape({
        headings: HeadingType,
        texts: TextType,
        buttons: PropTypes.arrayOf(ButtonType),
        items: PropTypes.arrayOf(ItemType),
    }),
};

export default HeroArea;
