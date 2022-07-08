import Image from "next/image";
import Button from "@ui/button";
import Logo from "@components/logo";

const MaintenanceArea = () => (
    <div className="maintanance-heignt" data-black-overlay="7">
        <Image
            src="/images/bg/bg-image-1.jpg"
            alt="Slider BG"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
        />
        <div className="rn-comeing-soon-area ">
            <div className="container-fluid pt--40 pb--35 maintanance-plr text-center">
                <Logo
                    logo={[
                        { src: "/images/logo/logo-white.png" },
                        { src: "/images/logo/logo-white.png" },
                    ]}
                />
                <div className="maintanance-inner">
                    <div className="wrapper">
                        <p>We&apos;re Back Soon</p>
                        <h2>
                            Website Is Under <span>Maintanance</span>
                        </h2>
                        <Button path="#!" className="mt--30">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default MaintenanceArea;
