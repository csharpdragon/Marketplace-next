import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const LevelFilter = ({ onChange, levels }) => {
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(levels);
    }, [list, levels]);

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
        onChange("level", isCheck);
    }, [isCheck, onChange]);

    return (
        <div className="nuron-expo-filter-widget widget-shortby mt--30">
            <div className="inner">
                <h5 className="widget-title">Level</h5>
                <div className="content">
                    <div className="nuron-form-check">
                        <input
                            type="checkbox"
                            name="level"
                            value="all"
                            id="level-check1"
                            onChange={handleSelectAll}
                            checked={isCheckAll}
                        />
                        <label htmlFor="level-check1">All Skill</label>
                    </div>
                    {list?.map((lvl) => (
                        <div className="nuron-form-check" key={lvl}>
                            <input
                                type="checkbox"
                                name="level"
                                value={lvl}
                                id={`level-check-${lvl}`}
                                onChange={handleClick}
                                checked={isCheck.includes(lvl)}
                            />
                            <label htmlFor={`level-check-${lvl}`}>{lvl}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

LevelFilter.propTypes = {
    onChange: PropTypes.func,
    levels: PropTypes.arrayOf(PropTypes.string),
};
export default LevelFilter;
