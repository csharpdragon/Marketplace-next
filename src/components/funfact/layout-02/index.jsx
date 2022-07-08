import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const FunFact = ({ className, counter, title, suffix, ...rest }) => {
    const [focus, setFocus] = useState(false);
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };
    return (
        <div className={clsx("single-odometer", className)} {...rest}>
            <h3 className="number counter-odomitter-active">
                <CountUp start={focus ? 0 : null} end={counter} duration={5}>
                    {({ countUpRef }) => (
                        <div>
                            <span className="odometer" ref={countUpRef} />
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
                {title && <span className="counter-label">{title}</span>}
            </h3>
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
