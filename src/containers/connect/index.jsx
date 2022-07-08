import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import Wallet from "@components/wallet";
import Anchor from "@ui/anchor";

const ConnectArea = ({ className, space }) => (
    <div
        className={clsx(
            "rn-connect-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g mb--50 mb_md--30 mb_sm--30 align-items-center">
                <div
                    className="col-lg-6"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="800"
                >
                    <h3 className="connect-title">Connect your wallet</h3>
                    <p className="connect-td">
                        Connect with one of available wallet providers or create
                        a new wallet.{" "}
                        <Anchor path="/collection">What is a wallet?</Anchor>
                    </p>
                </div>
                <div
                    className="col-lg-6"
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-duration="800"
                >
                    <p className="wallet-bootm-disc">
                        We do not own your private keys and cannot access your
                        funds without your confirmation.
                    </p>
                </div>
            </div>
            <div className="row g-5">
                <div
                    className="col-lg-6"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="500"
                >
                    <div className="connect-thumbnail">
                        <div className="left-image">
                            <Image
                                src="/images/connect/connect-01.jpg"
                                alt="Nft_Profile"
                                width={670}
                                height={576}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row g-5">
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <Wallet
                                title="Bitcollet"
                                description="I throw myself down among the tall."
                                path="/collection"
                                icon="feather-cast"
                            />
                        </div>
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <Wallet
                                title="GrasCash"
                                description="This is a great deals For cash transfer"
                                path="/collection"
                                icon="feather-box"
                                color="purple"
                            />
                        </div>
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <Wallet
                                title="Import"
                                description="Great oppertunity to reach them."
                                path="/collection"
                                icon="feather-award"
                                color="pink"
                            />
                        </div>
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <Wallet
                                title="TiOne"
                                description="Built your bigger offers then me"
                                path="/collection"
                                icon="feather-briefcase"
                                color="yellow"
                            />
                        </div>
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <Wallet
                                title="Bkashes"
                                description="Cash Transfer for easyest way you wast"
                                path="/collection"
                                icon="feather-command"
                                color="green"
                            />
                        </div>
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <Wallet
                                title="Pyynle"
                                description="More then myself down among the Cash."
                                path="/collection"
                                icon="feather-cpu"
                                color="blue"
                            />
                        </div>
                        <div
                            className="col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <Wallet
                                title="YesCash"
                                description="Biggest Bank transfer for best oppertunity"
                                path="/collection"
                                icon="feather-gitlab"
                                color="red"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

ConnectArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};
ConnectArea.defaultProps = {
    space: 1,
};

export default ConnectArea;
