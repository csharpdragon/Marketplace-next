import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const LanguageFilter = ({ onChange, languages }) => {
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(languages);
    }, [list, languages]);

    const handleSelectAll = () => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(list.map((li) => li));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    const handleClick = (e) => {
        const { value, checked } = e.target;
        setIsCheck([...isCheck, value]);
        if (!checked) {
            setIsCheck(isCheck.filter((item) => item !== value));
        }
    };

    useEffect(() => {
        onChange("language", isCheck);
    }, [isCheck, onChange]);
    return (
        <div className="nuron-expo-filter-widget widget-shortby mt--30">
            <div className="inner">
                <h5 className="widget-title">Language</h5>
                <div className="content">
                    <div className="nuron-form-check">
                        <input
                            type="checkbox"
                            name="level"
                            value="all"
                            id="lang-check1"
                            onChange={handleSelectAll}
                            checked={isCheckAll}
                        />
                        <label htmlFor="lang-check1">All Language</label>
                    </div>
                    {list?.map((lng) => (
                        <div className="nuron-form-check" key={lng}>
                            <input
                                type="checkbox"
                                name="language"
                                value={lng}
                                id={`lang-check-${lng}`}
                                onChange={handleClick}
                                checked={isCheck.includes(lng)}
                            />
                            <label htmlFor={`lang-check-${lng}`}>{lng}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

LanguageFilter.propTypes = {
    onChange: PropTypes.func,
    languages: PropTypes.arrayOf(PropTypes.string),
};

export default LanguageFilter;
