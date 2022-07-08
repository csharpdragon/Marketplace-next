import PropTypes from "prop-types";
import Image from "next/image";
import Anchor from "@ui/anchor";
import { ImageType } from "@utils/types";

const ClientAvatar = ({ slug, name, image }) => (
    <Anchor path={slug} className="avatar" data-tooltip={name}>
        {image?.src && (
            <Image
                src={image.src}
                alt={image?.alt || name}
                layout="fixed"
                width={image?.width || 30}
                height={image?.height || 30}
            />
        )}
    </Anchor>
);

ClientAvatar.propTypes = {
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: ImageType.isRequired,
};

export default ClientAvatar;
