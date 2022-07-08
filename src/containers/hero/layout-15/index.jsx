import PropTypes from "prop-types";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Button from "@ui/button";
import FunFact from "@components/funfact/layout-02";
import {
    HeadingType,
    TextType,
    ButtonType,
    ItemType,
    ImageType,
} from "@utils/types";

const HeroArea = ({ data: { headings, texts, buttons, images, items } }) => (
    <div className="banner banner-15 ptb--120 bg-color--3">
        <div className="container">
            <div className="row g-5 d-flex align-items-center">
                <div className="col-xxl-7 xl-xl-6 col-lg-6 col-md-12">
                    {headings?.[0]?.content && (
                        <h1
                            className="mb-5 title"
                            dangerouslySetInnerHTML={{
                                __html: headings[0].content,
                            }}
                        />
                    )}
                    {texts?.map((text) => (
                        <p className="disc" key={text.id}>
                            {text.content}
                        </p>
                    ))}
                    <div className="btn-group">
                        {buttons?.map(({ content, id, ...btn }, i) => (
                            <Button
                                {...btn}
                                key={id}
                                className={
                                    i !== buttons.length - 1 &&
                                    "mr--30 mr_sm--10"
                                }
                            >
                                {content}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="col-xxl-5 xl-xl-6 col-lg-6 col-md-12">
                    <Tilt
                        tiltReverse
                        tiltMaxAngleX={3}
                        tiltMaxAngleY={3}
                        perspective={500}
                        gyroscope
                    >
                        <div className="expo-15-wrapper tilt">
                            <div className="thumb-wrapepr">
                                {images?.[0]?.src && (
                                    <div className="main jump">
                                        <Image
                                            className="main jump"
                                            src={images[0]?.src}
                                            alt={
                                                images[0]?.alt || "NFt-Product"
                                            }
                                            width={364}
                                            height={564}
                                            priority
                                        />
                                    </div>
                                )}
                                {images?.[1]?.src && (
                                    <div className="main main-2 jump">
                                        <Image
                                            src={images[1]?.src}
                                            alt={
                                                images[1]?.alt || "NFt-Product"
                                            }
                                            width={364}
                                            height={564}
                                            priority
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="odometer-area-slide jump">
                                {items?.map((item) => (
                                    <FunFact
                                        className=" sal-animate"
                                        key={item.id}
                                        title={item.title}
                                        counter={item.counter}
                                    />
                                ))}
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
        images: PropTypes.arrayOf(ImageType),
    }),
};

export default HeroArea;
