import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const FunFact = ({ className, counter, title, suffix }) => {
    const [focus, setFocus] = useState(false);
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };
    return (
        <div className={clsx("single-counter-up text-center", className)}>
            <div className="number counter-odomitter-active">
                <CountUp start={focus ? 0 : null} end={counter} duration={5}>
                    {({ countUpRef }) => (
                        <div>
                            <span ref={countUpRef} />
                            <InView
                                as="span"
                                onChange={(inView) =>
                                    visibleChangeHandler(inView)
                                }
                            >
                                <>
                                    <span className="visually-hidden">+</span>
                                    {suffix && <span>{suffix}</span>}
                                </>
                            </InView>
                        </div>
                    )}
                </CountUp>
            </div>
            {title && <div className="botton-title">{title}</div>}
        </div>
    );
};

FunFact.propTypes = {
    className: PropTypes.string,
    counter: PropTypes.number.isRequired,
    title: PropTypes.string,
    suffix: PropTypes.string,
};

export default FunFact;
