import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import NiceSelect from "@ui/nice-select";
import TopSeller from "@components/top-seller/layout-01";
import { SellerType } from "@utils/types";
import { slugify } from "@utils/methods";

const CreatorArea = ({ className, space, data }) => {
    const [current, setCurrent] = useState("1 day");
    const [creators, setCreators] = useState([]);
    const changeHandler = (item) => {
        setCurrent(item.value);
    };

    const filterHandler = useCallback(() => {
        const allSellers = data.creators;
        const filterdSellers = allSellers.filter(
            (seller) => slugify(seller.top_since) === slugify(current)
        );
        setCreators(filterdSellers);
    }, [current, data.creators]);

    useEffect(() => {
        filterHandler();
    }, [filterHandler]);
    return (
        <div
            className={clsx(
                "rn-creators-area right-fix-notice creators",
                space === 1 && "mt--30",
                className
            )}
        >
            <div className="h--100">
                <div className="notice-heading">
                    <h4>Top Artists</h4>

                    <NiceSelect
                        options={[
                            { value: "1 day", text: "Today" },
                            { value: "7 Days", text: "7 Days" },
                            { value: "15 Days", text: "15 Days" },
                            { value: "30 Days", text: "30 Days" },
                        ]}
                        defaultCurrent={0}
                        name="sellerSort"
                        onChange={changeHandler}
                    />
                </div>
            </div>
            <div className="rn-notification-wrapper creators">
                {creators?.map((item) => (
                    <TopSeller
                        key={item.id}
                        name={item.name}
                        slug={item.slug}
                        total_sale={item.total_sale}
                        image={item.image}
                        isVarified={item.isVarified}
                        followBtn
                    />
                ))}
            </div>
        </div>
    );
};

CreatorArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        creators: PropTypes.arrayOf(SellerType),
    }),
};

CreatorArea.defaultProps = {
    space: 1,
};

export default CreatorArea;
