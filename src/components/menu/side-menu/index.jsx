import PropTypes from "prop-types";
import { Link } from "react-scroll";

const SideMenu = ({ menu }) => (
    <nav className="mainmenu-nav">
        <ul className="mainmenu list-group">
            {menu?.map((nav) => (
                <li key={nav.id} className="nav-item">
                    <Link
                        activeClass="active"
                        className="nav-link smoth-animation"
                        href={`#${nav.path}`}
                        to={nav.path}
                        spy
                        smooth
                        offset={-50}
                        duration={500}
                    >
                        {nav?.icon && <i className={nav.icon} />}
                        {nav.text}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);

SideMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({})),
};

export default SideMenu;
