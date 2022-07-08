import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import NiceSelect from "@ui/nice-select";
import NoticeCard from "@components/notice-card";
import { IDType, ImageType } from "@utils/types";

const NotificationArea = ({ data }) => {
    const [current, setCurrent] = useState("newest");
    const [notifications, setNotifications] = useState([]);
    const changeHandler = (item) => {
        setCurrent(item.value);
    };

    const filterHandler = useCallback(() => {
        const allNotifications = data.notifications;
        const filterdSellers = allNotifications.filter(
            (noti) => noti.type === current
        );
        setNotifications(filterdSellers);
    }, [current, data.notifications]);

    useEffect(() => {
        filterHandler();
    }, [filterHandler]);
    return (
        <div className="rn-notification-area right-fix-notice">
            <div className="h--100">
                <div className="notice-heading">
                    <h4>Notification</h4>
                    <NiceSelect
                        options={[
                            { value: "newest", text: "Newest" },
                            { value: "tranding", text: "Tranding" },
                            { value: "saved", text: "Saved" },
                            { value: "delated", text: "Delated" },
                        ]}
                        defaultCurrent={0}
                        name="sellerSort"
                        onChange={changeHandler}
                    />
                </div>
            </div>
            <div className="rn-notification-wrapper">
                {notifications?.map((noti) => (
                    <NoticeCard
                        key={noti.id}
                        title={noti.title}
                        path={noti.path}
                        description={noti.description}
                        date={noti.date}
                        time={noti.time}
                        image={noti.image}
                    />
                ))}
            </div>
        </div>
    );
};
NotificationArea.propTypes = {
    data: PropTypes.shape({
        notifications: PropTypes.arrayOf(
            PropTypes.shape({
                id: IDType,
                title: PropTypes.string,
                description: PropTypes.string,
                path: PropTypes.string,
                date: PropTypes.string,
                time: PropTypes.string,
                image: ImageType,
            })
        ),
    }),
};

export default NotificationArea;
