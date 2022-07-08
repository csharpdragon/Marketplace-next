import Image from "next/image";
import clsx from "clsx";
import { useTheme } from "next-themes";

const ColorSwitcher = () => {
    const { setTheme } = useTheme();
    return (
        <div className="setColor">
            <button
                type="button"
                className={clsx("light switch-btn")}
                onClick={() => setTheme("light")}
            >
                <Image
                    src="/images/icons/sun-01.svg"
                    alt="Sun images"
                    layout="fixed"
                    width={16}
                    height={16}
                />
            </button>
            <button
                type="button"
                className={clsx("dark switch-btn")}
                onClick={() => setTheme("dark")}
            >
                <Image
                    src="/images/icons/vector.svg"
                    alt="Vector Images"
                    layout="fixed"
                    width={16}
                    height={16}
                />
            </button>
        </div>
    );
};

export default ColorSwitcher;
