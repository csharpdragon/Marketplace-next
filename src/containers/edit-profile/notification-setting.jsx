import Button from "@ui/button";

const NotificationSetting = () => (
    <div className="nuron-information">
        <h5 className="title">Make Sure Your Notification setting </h5>
        <p className="notice-disc">
            Notification Center is where you can find app notifications and
            Quick Settings—which give you quick access to commonly used settings
            and apps. You can change your notification settings at any time from
            the Settings app. Select Start , then select Settings
        </p>
        <hr />
        <div className="notice-parent-wrapper d-flex">
            <div className="notice-child-wrapper">
                <div className="single-notice-setting">
                    <div className="input">
                        <input
                            type="checkbox"
                            id="themeSwitch"
                            name="theme-switch"
                            className="theme-switch__input"
                        />
                        <label
                            htmlFor="themeSwitch"
                            className="theme-switch__label"
                        >
                            <span />
                        </label>
                    </div>
                    <div className="content-text">
                        <p>Order Confirmation Notice</p>
                    </div>
                </div>
                <div className="single-notice-setting mt--15">
                    <div className="input">
                        <input
                            type="checkbox"
                            id="themeSwitchs"
                            name="theme-switch"
                            className="theme-switch__input"
                        />
                        <label
                            htmlFor="themeSwitchs"
                            className="theme-switch__label"
                        >
                            <span />
                        </label>
                    </div>
                    <div className="content-text">
                        <p>New Items Notification</p>
                    </div>
                </div>
                <div className="single-notice-setting mt--15">
                    <div className="input">
                        <input
                            type="checkbox"
                            id="OrderNotice"
                            name="theme-switch"
                            className="theme-switch__input"
                        />
                        <label
                            htmlFor="OrderNotice"
                            className="theme-switch__label"
                        >
                            <span />
                        </label>
                    </div>
                    <div className="content-text">
                        <p>New Bid Notification</p>
                    </div>
                </div>
                <div className="single-notice-setting mt--15">
                    <div className="input">
                        <input
                            type="checkbox"
                            id="newPAy"
                            name="theme-switch"
                            className="theme-switch__input"
                        />
                        <label htmlFor="newPAy" className="theme-switch__label">
                            <span />
                        </label>
                    </div>
                    <div className="content-text">
                        <p>Payment Card Notification</p>
                    </div>
                </div>
                <div className="single-notice-setting mt--15">
                    <div className="input">
                        <input
                            type="checkbox"
                            id="EndBid"
                            name="theme-switch"
                            className="theme-switch__input"
                        />
                        <label htmlFor="EndBid" className="theme-switch__label">
                            <span />
                        </label>
                    </div>
                    <div className="content-text">
                        <p>Ending Bid Notification Before 5 min</p>
                    </div>
                </div>
                <div className="single-notice-setting mt--15">
                    <div className="input">
                        <input
                            type="checkbox"
                            id="Approve"
                            name="theme-switch"
                            className="theme-switch__input"
                        />
                        <label
                            htmlFor="Approve"
                            className="theme-switch__label"
                        >
                            <span />
                        </label>
                    </div>
                    <div className="content-text">
                        <p>Notification for approving product</p>
                    </div>
                </div>
            </div>

            <div className="notice-child-wrapper" />
        </div>
        <Button className="save-btn-edit" size="medium">
            Save
        </Button>
    </div>
);

export default NotificationSetting;
