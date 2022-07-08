import Logo from "@components/logo";
import SideMenu from "@components/menu/side-menu";
import HelpMenu from "@components/menu/help-menu";
import AuthorProfile from "@components/author-profile";

// Demo Data

import headerData from "../../../data/general/header-02.json";
import sideMenuData from "../../../data/general/menu-02.json";
import helpMenuData from "../../../data/general/menu-03.json";

const Header = () => (
    <div className="d-none d-lg-block">
        <div className="header-area left-header-style d-flex">
            <Logo logo={headerData.logo} />
            <div className="sidebar-nav-wrapper">
                <SideMenu menu={sideMenuData} />
                <HelpMenu menu={helpMenuData} />
            </div>
            {headerData?.author && (
                <AuthorProfile
                    name={headerData.author.name}
                    image={headerData.author.image}
                    balance={headerData.author.balance}
                />
            )}
        </div>
    </div>
);

export default Header;
