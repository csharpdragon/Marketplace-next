import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import NiceSelect from "@ui/nice-select";
import TopSeller from "@components/top-seller/layout-01";
import Pagination from "@components/pagination-02";
import { SellerType } from "@utils/types";
import { slugify } from "@utils/methods";

const POSTS_PER_PAGE = 16;

const CreatorArea = ({ className, space, data }) => {
    const [current, setCurrent] = useState("1 day");
    const [creators, setCreators] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const numberOfPages = Math.ceil(data.creators.length / POSTS_PER_PAGE);
    const paginationHandler = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const creatorHandler = useCallback(() => {
        const start = (currentPage - 1) * POSTS_PER_PAGE;
        setCreators(data.creators.slice(start, start + POSTS_PER_PAGE));
    }, [currentPage, data.creators]);

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

    useEffect(() => {
        creatorHandler();
    }, [currentPage, creatorHandler]);

    return (
        <div
            className={clsx(
                "rn-creator-title-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <h2 className="title mb--0">Our Best Creators</h2>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                        <div className="shortby-default text-start text-sm-end">
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
                </div>
                <div className="row g-5 mt--30 creator-list-wrapper">
                    {creators?.map((creator) => (
                        <div
                            key={creator.id}
                            className="creator-single col-lg-3 col-md-4 col-sm-6"
                        >
                            <TopSeller
                                className="explore"
                                name={creator.name}
                                slug={creator.slug}
                                total_sale={creator.total_sale}
                                image={{
                                    src: creator.image.src,
                                    width: 74,
                                    height: 74,
                                }}
                                isVarified={creator.isVarified}
                            />
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div
                        className="col-lg-12"
                        data-sal="slide-up"
                        data-sal-delay="950"
                        data-sal-duration="800"
                    >
                        <Pagination
                            currentPage={currentPage}
                            numberOfPages={numberOfPages}
                            onClick={paginationHandler}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

CreatorArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
    data: PropTypes.shape({
        creators: PropTypes.arrayOf(SellerType),
    }),
};

CreatorArea.defaultProps = {
    space: 1,
};

export default CreatorArea;
