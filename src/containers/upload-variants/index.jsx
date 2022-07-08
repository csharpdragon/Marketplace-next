import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import Button from "@ui/button";

const UploadVariants = ({ className, space }) => (
    <div
        className={clsx(
            "rn-upload-variant-area varient",
            space === 1 && "rn-section-gap",
            className
        )}
    >
        <div className="container">
            <div className="row">
                <div className="upload-variant-title-wrapper">
                    <h3 className="title text-center">Upload Variants</h3>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ducimus inventore, officiis. Alias aspernatur
                        laboriosam ratione! Doloremque ipsa nesciunt sed!
                    </p>
                </div>
            </div>
            <div className="row g-5 mt--40">
                <div className="offset-lg-3 col-lg-3 col-md-6 col-12">
                    <div className="upload-variant-wrapper">
                        <div className="variant-preview">
                            <Image
                                src="/images/upload-variants/single.jpg"
                                alt="nuron-single"
                                width={495}
                                height={417}
                                layout="responsive"
                            />
                        </div>
                        <Button
                            path="/create"
                            size="medium"
                            fullwidth
                            className="mt--20"
                        >
                            Create Single
                        </Button>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="upload-variant-wrapper">
                        <div className="variant-preview">
                            <Image
                                src="/images/upload-variants/multiple.jpg"
                                alt="nuron-single"
                                width={495}
                                height={417}
                                layout="responsive"
                            />
                        </div>
                        <Button
                            path="/create"
                            size="medium"
                            fullwidth
                            className="mt--20"
                        >
                            Create Multiple
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

UploadVariants.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};

UploadVariants.defaultProps = {
    space: 1,
};

export default UploadVariants;
