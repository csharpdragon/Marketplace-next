import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import Button from "@ui/button";
import { HeadingType, TextType, ButtonType, ImageType } from "@utils/types";

const CTAArea = ({ space, className, data }) => (
    <div
        className={clsx(
            "rn-callto-action",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container-fluid about-fluidimg-cta">
            <div className="row">
                <div className="col-lg-12 position-relative">
                    <div className="about-image">
                        {data?.image?.src && (
                            <Image
                                src={data.image.src}
                                alt={data.image.alt || "cta BG"}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                priority
                            />
                        )}
                    </div>

                    <div className="call-to-action-wrapper">
                        {data?.headings?.map((heading) => (
                            <h3
                                data-sal="slide-up"
                                data-sal-duration="800"
                                data-sal-delay="150"
                                key={heading.id}
                                dangerouslySetInnerHTML={{
                                    __html: heading.content,
                                }}
                            />
                        ))}
                        {data?.texts?.map((text) => (
                            <p
                                data-sal="slide-up"
                                data-sal-duration="800"
                                data-sal-delay="150"
                                key={text.id}
                                dangerouslySetInnerHTML={{
                                    __html: text.content,
                                }}
                            />
                        ))}
                        {data?.buttons && (
                            <div
                                className="callto-action-btn-wrapper"
                                data-sal="slide-up"
                                data-sal-duration="800"
                                data-sal-delay="150"
                            >
                                {data.buttons.map(
                                    ({ id, content, ...rest }) => (
                                        <Button key={id} {...rest}>
                                            {content}
                                        </Button>
                                    )
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

CTAArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        texts: PropTypes.arrayOf(TextType),
        headings: PropTypes.arrayOf(HeadingType),
        buttons: PropTypes.arrayOf(ButtonType),
        image: ImageType,
    }),
};

CTAArea.defaultProps = {
    space: 1,
};

export default CTAArea;
