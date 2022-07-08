import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";
import Accordion from "@ui/accordion";

const SupportArea = ({ className, space }) => (
    <div
        className={clsx(
            "rn-support-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-6">
                <div className="col-lg-6">
                    <div className="rn-support-read">
                        <div className="read-card">
                            <h4>How to start as a seller?</h4>
                            <div className="content">
                                <p>
                                    All the Lorem Ipsum generators on the
                                    Internet tend to repeat predefined chunks as
                                    necessary, making this the first true
                                    generator on the Internet.
                                </p>
                                <p>
                                    Various versions have evolved over the
                                    years, sometimes by accident, sometimes on
                                    purpose (injected humour and the like).
                                </p>
                            </div>
                        </div>
                        <div className="read-card">
                            <h4>What happens when there are no orders?</h4>
                            <div className="content">
                                <p>
                                    All the Lorem Ipsum generators on the
                                    Internet tend to repeat predefined chunks as
                                    necessary, making this the first true
                                    generator on the Internet.
                                </p>
                                <p>
                                    Various versions have evolved over the
                                    years, sometimes by accident, sometimes on
                                    purpose (injected humour and the like).
                                </p>
                            </div>
                        </div>
                        <div className="read-card">
                            <h4>Why are you getting rejected shares?</h4>
                            <div className="content">
                                <p>
                                    All the Lorem Ipsum generators on the
                                    Internet tend to repeat predefined chunks as
                                    necessary, making this the first true
                                    generator on the Internet. Various versions
                                    have evolved over the years, sometimes by
                                    accident, sometimes on purpose (injected
                                    humour and the like).
                                </p>
                            </div>
                        </div>
                        <Button path="/create" className="mr--15">
                            Create
                        </Button>
                        <Button href="/contact" color="primary-alta">
                            Contact Us
                        </Button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="support-accordion">
                        <Accordion
                            defaultActiveKey={0}
                            items={[
                                {
                                    id: 0,
                                    title: "What is the NFTs reward system?",
                                    description:
                                        "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.",
                                },
                                {
                                    id: 1,
                                    title: "Which servers are available?",
                                    description:
                                        "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.",
                                },
                                {
                                    id: 2,
                                    title: "Which miners are supported?",
                                    description:
                                        "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.",
                                },
                                {
                                    id: 3,
                                    title: "Keep It Short, Simple, and to the Point.",
                                    description:
                                        "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.",
                                },
                                {
                                    id: 4,
                                    title: "How quickly can I get customer support?",
                                    description:
                                        "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.",
                                },
                                {
                                    id: 5,
                                    title: "Okay, I'm afraid to ask but... what is SEO?",
                                    description:
                                        "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.",
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

SupportArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
};
SupportArea.defaultProps = {
    space: 1,
};

export default SupportArea;
