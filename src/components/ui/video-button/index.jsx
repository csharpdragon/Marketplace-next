import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import dynamic from "next/dynamic";
import { Portal } from "react-portal";

const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const VideoButton = ({ label, className, videoId, channel }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <button
                type="button"
                aria-label={label}
                className={clsx(
                    "video-play-button btn-large with-animation",
                    className
                )}
                onClick={() => setOpen(true)}
            >
                <span />
            </button>
            {isOpen && (
                <Portal>
                    <ModalVideo
                        isOpen={isOpen}
                        videoId={videoId}
                        channel={channel}
                        onClose={() => setOpen(false)}
                    />
                </Portal>
            )}
        </>
    );
};

VideoButton.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    channel: PropTypes.string,
    videoId: PropTypes.string.isRequired,
};

VideoButton.defaultProps = {
    channel: "youtube",
    label: "Play video",
};

export default VideoButton;
