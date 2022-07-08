/* eslint-disable no-confusing-arrow */
import PropTypes from "prop-types";
import clsx from "clsx";

const Pagination = ({ className, currentPage, numberOfPages, onClick }) => {
    const isFirst = currentPage === 1;
    const isLast = currentPage === numberOfPages;
    const previousPage = currentPage - 1 === 1 ? currentPage : currentPage - 1;
    const nextPage = currentPage + 1;
    return (
        <nav
            className={clsx("pagination-wrapper", className)}
            aria-label="Page navigation example"
        >
            <ul className="pagination">
                {isFirst ? (
                    <li className="page-item">
                        <button
                            type="button"
                            className="disabled"
                            onClick={() => onClick(previousPage)}
                        >
                            Previous
                        </button>
                    </li>
                ) : (
                    <li className="page-item prev">
                        <button
                            type="button"
                            onClick={() => onClick(previousPage)}
                        >
                            Previous
                        </button>
                    </li>
                )}
                {Array.from({ length: numberOfPages }, (_, i) =>
                    currentPage === i + 1 ? (
                        <li className="page-item" key={`page-number-${i + 1}`}>
                            <button
                                type="button"
                                className="active"
                                onClick={() => onClick(i + 1)}
                            >
                                {i + 1}
                            </button>
                        </li>
                    ) : (
                        <li className="page-item" key={`page-number-${i + 1}`}>
                            <button
                                type="button"
                                onClick={() => onClick(i + 1)}
                            >
                                {i + 1}
                            </button>
                        </li>
                    )
                )}
                {isLast ? (
                    <li className="page-item">
                        <button
                            type="button"
                            className="disabled"
                            onClick={() => onClick(nextPage)}
                        >
                            Next
                        </button>
                    </li>
                ) : (
                    <li className="page-item next">
                        <button type="button" onClick={() => onClick(nextPage)}>
                            Next
                        </button>
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
    onClick: PropTypes.func,
};

export default Pagination;
