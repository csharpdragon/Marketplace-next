import Anchor from "@ui/anchor";
import Sticky from "@ui/sticky";
import TabContent from "react-bootstrap/TabContent";
import TabContainer from "react-bootstrap/TabContainer";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";
import EditProfileImage from "./edit-profile-image";
import PersonalInformation from "./personal-information";
import ChangePassword from "./change-password";
import NotificationSetting from "./notification-setting";

const EditProfile = () => (
    <div className="edit-profile-area rn-section-gapTop">
        <div className="container">
            <div className="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
                <div className="col-12 d-flex justify-content-between mb--30 align-items-center">
                    <h4 className="title-left">Edit Your Profile</h4>
                    <Anchor path="/author" className="btn btn-primary ml--10">
                        <i className="feather-eye mr--5" /> Preview
                    </Anchor>
                </div>
            </div>
            <TabContainer defaultActiveKey="nav-home">
                <div className="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <Sticky>
                            <nav className="left-nav rbt-sticky-top-adjust-five">
                                <Nav className="nav nav-tabs">
                                    <Nav.Link eventKey="nav-home" as="button">
                                        <i className="feather-edit" />
                                        Edit Profile Image
                                    </Nav.Link>
                                    <Nav.Link eventKey="nav-homes" as="button">
                                        <i className="feather-user" />
                                        Personal Information
                                    </Nav.Link>
                                    <Nav.Link
                                        eventKey="nav-profile"
                                        as="button"
                                    >
                                        <i className="feather-unlock" />
                                        Change Password
                                    </Nav.Link>
                                    <Nav.Link
                                        eventKey="nav-contact"
                                        as="button"
                                    >
                                        <i className="feather-bell" />
                                        Notification Setting
                                    </Nav.Link>
                                </Nav>
                            </nav>
                        </Sticky>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 mt_sm--30">
                        <TabContent className="tab-content-edit-wrapepr">
                            <TabPane eventKey="nav-home">
                                <EditProfileImage />
                            </TabPane>
                            <TabPane eventKey="nav-homes">
                                <PersonalInformation />
                            </TabPane>
                            <TabPane eventKey="nav-profile">
                                <ChangePassword />
                            </TabPane>
                            <TabPane eventKey="nav-contact">
                                <NotificationSetting />
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </TabContainer>
        </div>
    </div>
);

export default EditProfile;
