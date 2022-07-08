import PropTypes from "prop-types";
import clsx from "clsx";
import Logo from "@components/logo";
import Button from "@ui/button";
import Anchor from "@ui/anchor";

const ForgetPasswordArea = ({ className, space }) => (
    <div
        className={clsx(
            "forget-password-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row justify-content-center g-5">
                <div className="col-xl-4 col-lg-6 col-10">
                    <div className="form-wrapper-one">
                        <Logo
                            logo={[
                                { src: "/images/logo/logo-white.png" },
                                { src: "/images/logo/logo-dark.png" },
                            ]}
                            className="mb--50"
                        />

                        <div className="mb-5">
                            <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                id="exampleInputEmail1"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-5">
                            <input
                                type="checkbox"
                                className="rn-check-box-input"
                                id="exampleCheck1"
                            />
                            <label
                                className="rn-check-box-label"
                                htmlFor="exampleCheck1"
                            >
                                I agree to the{" "}
                                <Anchor path="/privacy-policy">
                                    privacy policy
                                </Anchor>{" "}
                            </label>
                        </div>

                        <div className="mb-5">
                            <Button type="button">Send</Button>
                        </div>

                        <span className="mt--20 notice">
                            Note: We will send a password to your email
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

ForgetPasswordArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};

ForgetPasswordArea.defaultProps = {
    space: 1,
};
export default ForgetPasswordArea;
