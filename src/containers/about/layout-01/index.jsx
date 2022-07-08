import PropTypes from "prop-types";
import clsx from "clsx";

const AboutArea = ({ className, space, data }) => (
    <div
        className={clsx(
            "about-market-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="about-wrapper text-center">
                        {data?.title && <h2>{data.title}</h2>}
                        {data?.description && (
                            <p className="discription">{data.description}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

AboutArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
    }),
};

AboutArea.defaultProps = {
    space: 1,
};

export default AboutArea;
