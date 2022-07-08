import PropTypes from "prop-types";
import Anchor from "@ui/anchor";

const HelpMenu = ({ menu }) => (
    <div className="help-center-area mainmenu-nav mt--30">
        <ul className="mainmenu">
            {menu?.map((nav) => (
                <li key={nav.id} className="nav-item">
                    <Anchor className="nav-link" path={nav.path}>
                        {nav?.icon && <i className={nav.icon} />}
                        {nav.text}
                    </Anchor>
                </li>
            ))}
        </ul>
    </div>
);

HelpMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({})),
};

export default HelpMenu;
