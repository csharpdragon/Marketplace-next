import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout-02";
import { TextType, SectionTitleType } from "@utils/types";

const QuoteArea = ({ space, className, data }) => (
    <div
        className={clsx(
            "rn-about-Quote-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-5 d-flex align-items-center">
                <div className="col-lg-6">
                    <div className="rn-about-title-wrapper">
                        {data?.section_title && (
                            <SectionTitle {...data.section_title} />
                        )}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div
                        className="rn-about-wrapper"
                        data-sal="slide-up"
                        data-sal-duration="800"
                        data-sal-delay="150"
                    >
                        {data?.texts?.map((text) => (
                            <p key={text.id}>{text.content}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

QuoteArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

QuoteArea.defaultProps = {
    space: 1,
};

export default QuoteArea;
