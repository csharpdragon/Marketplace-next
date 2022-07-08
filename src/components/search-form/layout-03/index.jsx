import Button from "@ui/button";

const SearchForm = () => (
    <div className="input-group">
        <input
            type="text"
            placeholder="Search Here..."
            className="form-control bg-color--2"
        />
        <div className="input-group-append">
            <Button color="primary-alta" size="small" className="lh-1">
                <i className="feather-search" />
            </Button>
        </div>
    </div>
);

export default SearchForm;
