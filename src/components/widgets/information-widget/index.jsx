import PropTypes from "prop-types";
import Anchor from "@ui/anchor";

const InformationWidget = ({ data }) => (
    <div className="footer-widget widget-information">
        <h6 className="widget-title">{data.title}</h6>
        {data?.menu && (
            <ul className="footer-list-one">
                {data.menu.map((nav) => (
                    <li key={nav.id} className="single-list">
                        <Anchor path={nav.path}>{nav.text}</Anchor>
                    </li>
                ))}
            </ul>
        )}
    </div>
);

InformationWidget.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        menu: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                    .isRequired,
                text: PropTypes.string.isRequired,
                path: PropTypes.string.isRequired,
            })
        ),
    }),
};
export default InformationWidget;
