import PropTypes from "prop-types";
import Image from "next/image";
import { ImageType } from "@utils/types";

const AuthorProfile = ({ name, image, balance }) => (
    <div className="authore-profile">
        <div className="thumbnail">
            {image?.src && (
                <Image
                    src={image.src}
                    alt={image?.alt || name}
                    width={60}
                    height={60}
                />
            )}
        </div>
        <div className="au-content">
            <p className="name">{name}</p>
            <p className="blc">
                Balance:<span className="value">{balance}</span>
            </p>
        </div>
    </div>
);

AuthorProfile.propTypes = {
    name: PropTypes.string.isRequired,
    image: ImageType.isRequired,
    balance: PropTypes.string.isRequired,
};

export default AuthorProfile;
