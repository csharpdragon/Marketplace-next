import PropTypes from "prop-types";

const SortWidget = ({ onChange, value }) => {
    const changeHandler = (e) => {
        const { value: currentValue } = e.target;
        onChange(currentValue);
    };
    return (
        <div className="nuron-expo-filter-widget widget-shortby">
            <div className="inner">
                <h5 className="widget-title">Sort By</h5>
                <div className="content">
                    <div className="nuron-form-check">
                        <input
                            type="radio"
                            value="newest"
                            name="sort"
                            id="short-check1"
                            checked={value === "newest"}
                            onChange={changeHandler}
                        />
                        <label htmlFor="short-check1">Newest</label>
                    </div>
                    <div className="nuron-form-check">
                        <input
                            type="radio"
                            value="oldest"
                            name="sort"
                            id="short-check2"
                            checked={value === "oldest"}
                            onChange={changeHandler}
                        />
                        <label htmlFor="short-check2">Oldest</label>
                    </div>
                    <div className="nuron-form-check">
                        <input
                            type="radio"
                            value="most-liked"
                            name="sort"
                            id="short-check3"
                            checked={value === "most-liked"}
                            onChange={changeHandler}
                        />
                        <label htmlFor="short-check3">Most Liked</label>
                    </div>
                    <div className="nuron-form-check">
                        <input
                            type="radio"
                            value="least-liked"
                            name="sort"
                            id="short-check4"
                            checked={value === "least-liked"}
                            onChange={changeHandler}
                        />
                        <label htmlFor="short-check4">Least Liked</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

SortWidget.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
};

export default SortWidget;
