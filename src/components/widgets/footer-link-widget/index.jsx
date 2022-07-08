import PropTypes from "prop-types";
import Anchor from "@ui/anchor";

const FooterLinkWidget = ({ data }) => (
    <ul className="privacy">
        {data?.menu?.map((nav) => (
            <li key={nav.id}>
                <Anchor path={nav.path}>{nav.text}</Anchor>
            </li>
        ))}
    </ul>
);

FooterLinkWidget.propTypes = {
    data: PropTypes.shape({
        menu: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                    .isRequired,
                text: PropTypes.string.isRequired,
                path: PropTypes.string.isRequired,
            })
        ),
    }),
};

export default FooterLinkWidget;
