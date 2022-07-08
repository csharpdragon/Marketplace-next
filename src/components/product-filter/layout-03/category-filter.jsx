import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CategoryFilter = ({ categories, onChange }) => {
    const [isCheck, setIsCheck] = useState([]);

    const handleClick = (e) => {
        const { value, checked } = e.target;
        setIsCheck([...isCheck, value]);
        if (!checked) {
            setIsCheck(isCheck.filter((item) => item !== value));
        }
    };
    useEffect(() => {
        onChange("categories", isCheck);
    }, [isCheck, onChange]);

    return (
        <div className="nuron-expo-filter-widget widget-category mt--30">
            <div className="inner">
                <h5 className="widget-title">Categories</h5>
                <div className="content">
                    {Object.entries(categories).map(([key, value]) => (
                        <div className="nuron-form-check" key={key}>
                            <input
                                type="checkbox"
                                name="categories"
                                value={key}
                                onChange={handleClick}
                                id={`cat-check-${key}`}
                            />
                            <label
                                htmlFor={`cat-check-${key}`}
                                className="text-capitalize"
                            >
                                {key} <span>({value})</span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

CategoryFilter.propTypes = {
    categories: PropTypes.shape({}),
    onChange: PropTypes.func,
};

export default CategoryFilter;
