import PropTypes from "prop-types";
import Acc from "react-bootstrap/Accordion";

const Accordion = ({ items, defaultActiveKey }) => (
    <Acc defaultActiveKey={defaultActiveKey}>
        {items?.map((item) => (
            <Acc.Item key={item.id} eventKey={item.id}>
                <Acc.Header>
                    {item.title} <i className="feather-chevron-up" />
                </Acc.Header>
                <Acc.Body
                    dangerouslySetInnerHTML={{ __html: item.description }}
                />
            </Acc.Item>
        ))}
    </Acc>
);

Accordion.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ),
    defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
};

export default Accordion;
