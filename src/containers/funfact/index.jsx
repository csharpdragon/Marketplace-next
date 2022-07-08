import PropTypes from "prop-types";
import clsx from "clsx";
import FunFact from "@components/funfact/layout-01";
import { SectionTitleType } from "@utils/types";

const FunfactArea = ({ space, className, data }) => (
    <div
        className={clsx(
            "rn-statistick-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row mb--30">
                <div className="col-12 text-center">
                    {data?.section_title && <h3>{data.section_title.title}</h3>}
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="row g-5">
                        {data?.funfacts?.map((funfact) => (
                            <div key={funfact.id} className="col-md-6">
                                <FunFact
                                    counter={funfact.counter}
                                    title={funfact.title}
                                    suffix={funfact.suffix}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

FunfactArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        funfacts: PropTypes.arrayOf(
            PropTypes.shape({
                counter: PropTypes.number.isRequired,
                title: PropTypes.string,
                suffix: PropTypes.string,
            })
        ),
    }),
};

FunfactArea.defaultProps = {
    space: 1,
};

export default FunfactArea;
