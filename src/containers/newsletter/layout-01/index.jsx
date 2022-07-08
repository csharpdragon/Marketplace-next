import PropTypes from "prop-types";
import clsx from "clsx";
import NewsletterForm from "@components/newsletter-form";

const NewsletterArea = ({ className, space, data: { section_title } }) => (
    <div
        className={clsx(
            "nu-subscribe-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
        data-sal-delay="200"
        data-sal="slide-up"
        data-sal-duration="800"
    >
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="subscribe-wrapper_1 text-center">
                        {section_title?.title && (
                            <h3 className="title mb--10">
                                {section_title.title}
                            </h3>
                        )}
                        {section_title?.subtitle && (
                            <p className="subtitle">{section_title.subtitle}</p>
                        )}
                        <NewsletterForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

NewsletterArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            title: PropTypes.string,
            subtitle: PropTypes.string,
        }),
    }),
};

NewsletterArea.defaultProps = {
    space: 1,
};

export default NewsletterArea;
