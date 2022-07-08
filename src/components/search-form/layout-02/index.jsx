import PropTypes from "prop-types";
import clsx from "clsx";

const SearchForm = ({ isOpen }) => (
    <form
        id="header-search-1"
        action="#"
        method="GET"
        className={clsx("large-mobile-blog-search", isOpen && "active")}
    >
        <div className="rn-search-mobile form-group">
            <button type="submit" className="search-button">
                <i className="feather-search" />
            </button>
            <input type="text" placeholder="Search ..." />
        </div>
    </form>
);

SearchForm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};

export default SearchForm;
