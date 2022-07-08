import { useMoralis } from "react-moralis";
import SearchForm from "@components/search-form/layout-03";
import Anchor from "@ui/anchor";
import Button from "@ui/button";
import ColorSwitcher from "@components/color-switcher";
import BurgerButton from "@ui/burger-button";
import FlyoutSearchForm from "@components/search-form/layout-02";
import MobileMenu from "@components/menu/mobile-menu-02";
import UserDropdown from "@components/user-dropdown";
import { useOffcanvas, useFlyoutSearch } from "@hooks";

// Demo Data
import sideMenuData from "../../data/general/menu-02.json";

const TopBarArea = () => {
    const { search, searchHandler } = useFlyoutSearch();
    const { offcanvas, offcanvasHandler } = useOffcanvas();
    const { authenticate, isAuthenticated } = useMoralis();
    return (
        <>
            <div className="rn-top-bar-area">
                <div className="d-none d-lg-block">
                    <SearchForm />
                </div>

                <div className="contact-area">
                    <div className="rn-icon-list setting-option d-block d-lg-none">
                        <div className="icon-box search-mobile-icon">
                            <button
                                type="button"
                                aria-label="Click here to open search form"
                                onClick={searchHandler}
                            >
                                <i className="feather-search" />
                            </button>
                        </div>
                        <FlyoutSearchForm isOpen={search} />
                    </div>
                    <div className="setting-option">
                        <div className="icon-box">
                            <Anchor title="Contact With Us" path="/contact">
                                <i className="feather-phone" />
                            </Anchor>
                        </div>
                    </div>
                    <div className="setting-option">
                        <div className="icon-box">
                            <Anchor title="Message" path="/contact">
                                <i className="feather-message-circle" />
                            </Anchor>
                        </div>
                    </div>
                    <div className="setting-option rn-icon-list notification-badge">
                        <div className="icon-box">
                            <Anchor path="/activity">
                                <i className="feather-bell" />
                                <span className="badge">2</span>
                            </Anchor>
                        </div>
                    </div>
                    {/* <div className="setting-option header-btn">
                        <div className="icon-box">
                            <Button
                                size="small"
                                color="primary-alta"
                                path="/create"
                            >
                                Create
                            </Button>
                        </div>
                    </div> */}

                    {!isAuthenticated && (
                        <div className="setting-option">
                            <div className="icon-box">
                                <Button
                                    size="small"
                                    color="primary-alta"
                                    onClick={() => authenticate()}
                                >
                                    Wallet connect
                                </Button>
                            </div>
                        </div>
                    )}
                    {isAuthenticated && (
                        <div className="setting-option rn-icon-list user-account">
                            <UserDropdown />
                        </div>
                    )}
                    <div className="setting-option mobile-menu-bar ml--5 d-block d-lg-none">
                        <div className="hamberger icon-box">
                            <BurgerButton onClick={offcanvasHandler} />
                        </div>
                    </div>
                    <div
                        id="my_switcher"
                        className="my_switcher setting-option"
                    >
                        <ColorSwitcher />
                    </div>
                </div>
            </div>
            <MobileMenu
                menu={sideMenuData}
                isOpen={offcanvas}
                onClick={offcanvasHandler}
                logo={[
                    { src: "/images/logo/logo-white.png" },
                    { src: "/images/logo/logo-dark.png" },
                ]}
            />
        </>
    );
};

export default TopBarArea;
