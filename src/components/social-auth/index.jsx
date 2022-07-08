import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";

const SocialAuth = ({ className, title }) => (
    <div className={clsx("social-share-media form-wrapper-one", className)}>
        <h6>{title}</h6>
        <p>Lorem ipsum dolor sit, amet sectetur adipisicing elit.cumque.</p>
        <button type="button" className="another-login login-facebook">
            <span className="small-image">
                <Image
                    src="/images/icons/google.png"
                    alt="google login"
                    width={26}
                    height={27}
                    layout="fixed"
                />
            </span>
            <span>Log in with Google</span>
        </button>
        <button type="button" className="another-login login-facebook">
            <span className="small-image">
                <Image
                    src="/images/icons/facebook.png"
                    alt="facebook login"
                    width={26}
                    height={27}
                    layout="fixed"
                />
            </span>
            <span>Log in with Facebook</span>
        </button>
        <button type="button" className="another-login login-twitter">
            <span className="small-image">
                <Image
                    src="/images/icons/tweeter.png"
                    alt="tweeter login"
                    width={26}
                    height={27}
                    layout="fixed"
                />
            </span>
            <span>Log in with Twitter</span>
        </button>
        <button type="button" className="another-login login-linkedin">
            <span className="small-image">
                <Image
                    src="/images/icons/linkedin.png"
                    alt="linkedin login"
                    width={26}
                    height={27}
                    layout="fixed"
                />
            </span>
            <span>Log in with linkedin</span>
        </button>
    </div>
);

SocialAuth.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
};
export default SocialAuth;
