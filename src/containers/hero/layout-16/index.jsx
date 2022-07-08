import PropTypes from "prop-types";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Button from "@ui/button";
import Anchor from "@ui/anchor";
import FunFact from "@components/funfact/layout-02";
import {
    HeadingType,
    TextType,
    ButtonType,
    ItemType,
    ImageType,
} from "@utils/types";

const HeroArea = ({
    data: { headings, texts, buttons, image, items, clients },
}) => (
    <div className="banner-area banner-16 pt--100 pb--120 pt_md--70 pt_sm--30 pb_md--90 pb_sm--50 bg-color--2">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 order-lg-1 order-md-2 order-sm-2 order-2">
                    <div className="left-banner-16-wrapepr mt_md--100 mt_sm--100">
                        {headings?.[0]?.content && (
                            <h1
                                className="title"
                                dangerouslySetInnerHTML={{
                                    __html: headings[0].content,
                                }}
                            />
                        )}
                        {texts?.[0]?.content && (
                            <p
                                className="disc"
                                dangerouslySetInnerHTML={{
                                    __html: texts[0].content,
                                }}
                            />
                        )}
                        <div className="button-group d-flex flex-wrap">
                            {buttons?.map(({ content, id, ...btn }, i) => (
                                <Button
                                    {...btn}
                                    key={id}
                                    className={
                                        i !== buttons.length - 1 && "mr--30"
                                    }
                                >
                                    {content}
                                </Button>
                            ))}
                        </div>
                        <div className="odometer-area-slide ">
                            {items?.map((item, i) => (
                                <FunFact
                                    data-sal-delay={400 + i * 200}
                                    data-sal="slide-left"
                                    data-sal-duration="800"
                                    key={item.id}
                                    title={item.title}
                                    counter={item.counter}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-md-1 order-sm-1 order-1">
                    <Tilt
                        tiltReverse
                        tiltMaxAngleX={3}
                        tiltMaxAngleY={3}
                        perspective={500}
                        gyroscope
                    >
                        <div className="tilt-image-banner-16">
                            {image?.src && (
                                <Image
                                    className="tilt"
                                    src={image.src}
                                    alt={image?.alt || "Nft-profile"}
                                    width={697}
                                    height={557}
                                    priority
                                />
                            )}
                            <div className="joined-people-wrapper">
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        {clients?.map((client) => (
                                            <Anchor
                                                path={client.path}
                                                className="avatar"
                                                data-tooltip={client.name}
                                            >
                                                {client?.image?.src && (
                                                    <Image
                                                        className="large"
                                                        src={client.image.src}
                                                        alt={
                                                            client.image?.alt ||
                                                            "Nft_Profile"
                                                        }
                                                        width={39}
                                                        height={39}
                                                        priority
                                                    />
                                                )}
                                            </Anchor>
                                        ))}

                                        <Anchor
                                            className="more-author-text"
                                            path="/author"
                                            tabIndex="0"
                                        >
                                            More Then 25K
                                        </Anchor>
                                    </div>
                                </div>
                                {texts?.[1]?.content && (
                                    <p
                                        className="disc"
                                        dangerouslySetInnerHTML={{
                                            __html: texts[1].content,
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    </Tilt>
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
        image: ImageType,
        clients: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                name: PropTypes.string,
                path: PropTypes.string,
                image: ImageType,
            })
        ),
    }),
};
export default HeroArea;
