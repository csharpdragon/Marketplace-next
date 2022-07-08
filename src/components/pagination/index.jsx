/* eslint-disable no-confusing-arrow */
import PropTypes from "prop-types";
import clsx from "clsx";
import Anchor from "@ui/anchor";

const Pagination = ({ className, currentPage, numberOfPages, rootPage }) => {
    const isFirst = currentPage === 1;
    const isLast = currentPage === numberOfPages;
    const previousPage =
        currentPage - 1 === 1
            ? rootPage
            : `${rootPage}/page/${(currentPage - 1).toString()}`;
    const nextPage = `${rootPage}/page/${(currentPage + 1).toString()}`;
    return (
        <nav
            className={clsx("pagination-wrapper", className)}
            aria-label="Page navigation example"
        >
            <ul className="pagination">
                {isFirst ? (
                    <li className="page-item">
                        <button type="button" className="disabled">
                            Previous
                        </button>
                    </li>
                ) : (
                    <li className="page-item prev">
                        <Anchor path={previousPage}>Previous</Anchor>
                    </li>
                )}
                {Array.from({ length: numberOfPages }, (_, i) =>
                    currentPage === i + 1 ? (
                        <li className="page-item" key={`page-number-${i + 1}`}>
                            <Anchor
                                className="active"
                                path={`${rootPage}/${
                                    i === 0 ? "" : `page/${i + 1}`
                                }`}
                            >
                                {i + 1}
                            </Anchor>
                        </li>
                    ) : (
                        <li className="page-item" key={`page-number-${i + 1}`}>
                            <Anchor
                                path={`${
                                    i === 0
                                        ? rootPage
                                        : `${rootPage}/page/${i + 1}`
                                }`}
                            >
                                {i + 1}
                            </Anchor>
                        </li>
                    )
                )}
                {isLast ? (
                    <li className="page-item">
                        <button type="button" className="disabled">
                            Next
                        </button>
                    </li>
                ) : (
                    <li className="page-item next">
                        <Anchor path={nextPage}>Next</Anchor>
                    </li>
                )}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    className: PropTypes.string,
    currentPage: PropTypes.number,
    numberOfPages: PropTypes.number,
    rootPage: PropTypes.string,
};

Pagination.defaultProps = {
    rootPage: "/blog",
};

export default Pagination;
