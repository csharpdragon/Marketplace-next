import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout-02";
import NiceSelect from "@ui/nice-select";
import TopSeller from "@components/top-seller/layout-01";
import { SectionTitleType, SellerType } from "@utils/types";
import { slugify } from "@utils/methods";

const CreatorArea = ({ className, space, id, data }) => {
    const [current, setCurrent] = useState("1 day");
    const [sellers, setSellers] = useState([]);
    const changeHandler = (item) => {
        setCurrent(item.value);
    };

    const filterHandler = useCallback(() => {
        const allSellers = data.creators;
        const filterdSellers = allSellers.filter(
            (seller) => slugify(seller.top_since) === slugify(current)
        );
        setSellers(filterdSellers);
    }, [current, data.creators]);

    useEffect(() => {
        filterHandler();
    }, [filterHandler]);
    return (
        <div
            className={clsx(
                "rn-creator-title-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
            id={id}
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        {data?.section_title && (
                            <SectionTitle
                                {...data.section_title}
                                className="mb--0"
                                disableAnimation
                            />
                        )}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                        <div className="shortby-default text-start text-sm-end">
                            <span className="filter-leble">SHOT BY:</span>
                            <NiceSelect
                                options={[
                                    { value: "1 day", text: "1 day" },
                                    { value: "7 Day's", text: "7 Day's" },
                                    { value: "15 Day's", text: "15 Day's" },
                                    { value: "30 Day's", text: "30 Day's" },
                                ]}
                                defaultCurrent={0}
                                name="sellerSort"
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--30 creator-list-wrapper">
                    {sellers.slice(0, 8).map((seller) => (
                        <div
                            key={seller.id}
                            className="creator-single col-lg-3 col-md-4 col-sm-6"
                        >
                            <TopSeller
                                className="explore"
                                name={seller.name}
                                total_sale={seller.total_sale}
                                slug={seller.slug}
                                image={{
                                    src: seller.image.src,
                                    width: 74,
                                    height: 74,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

CreatorArea.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        creators: PropTypes.arrayOf(SellerType),
    }),
};

CreatorArea.defaultProps = {
    space: 1,
};

export default CreatorArea;
