import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";

const AboutCard = ({ className, title, desc, path }) => (
    <div className={clsx("rn-about-card", className)}>
        <div className="inner">
            <h2
                className="title"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="150"
                dangerouslySetInnerHTML={{ __html: title }}
            />
            <p
                className="about-disc"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="150"
            >
                {desc}
            </p>
            {path && (
                <Button
                    path={path}
                    color="primary-alta"
                    className="sal-animate mt--20"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                >
                    See Our Blog
                </Button>
            )}
        </div>
    </div>
);

AboutCard.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    path: PropTypes.string,
};

export default AboutCard;
