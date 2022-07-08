import PropTypes from "prop-types";
import clsx from "clsx";
import Anchor from "@ui/anchor";

const Wallet = ({ className, title, description, path, icon, color }) => (
    <div className={clsx("wallet-wrapper", className)}>
        <div className="inner">
            <div className="icon">
                <i className={clsx("feather", icon, `color-${color}`)} />
            </div>
            <div className="content">
                <h4 className="title">
                    <Anchor path={path}>{title}</Anchor>
                </h4>
                <p className="description">{description}</p>
            </div>
        </div>
        <Anchor className="over-link visually-hidden" path={path}>
            {title} link
        </Anchor>
    </div>
);

Wallet.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
};
export default Wallet;
