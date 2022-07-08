import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import { containsObject } from "@utils/methods";

const CategoryWidget = ({ categories, rootPage }) => {
    const cats = [];
    categories?.forEach((cat) => {
        const obj = {
            ...cat,
            count: 1,
        };
        const objIndex = containsObject(obj, cats);
        if (objIndex !== -1) {
            const prevCount = cats[objIndex].count;
            cats[objIndex] = {
                title: cat.title,
                slug: cat.slug,
                count: prevCount + 1,
            };
        } else {
            cats.push(obj);
        }
    });
    return (
        <div className="rbt-single-widget widget_categories">
            <h3 className="title">Categories</h3>
            <div className="inner">
                <ul className="category-list">
                    {cats?.map((cat) => (
                        <li key={cat.slug}>
                            <Anchor path={`${rootPage}/category/${cat.slug}`}>
                                <span className="left-content">
                                    {cat.title}
                                </span>
                                <span className="count-text">{cat.count}</span>
                            </Anchor>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

CategoryWidget.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({})),
    rootPage: PropTypes.string,
};

CategoryWidget.defaultProps = {
    rootPage: "/blog",
};

export default CategoryWidget;
