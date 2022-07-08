import PropTypes from "prop-types";
import TopSeller from "@components/top-seller/layout-02";
import { IDType, ImageType } from "@utils/types";

const HistoryTabContent = ({ history }) => (
    <div>
        {history?.map((item) => (
            <TopSeller
                key={item.id}
                name={item.user.name}
                eth={item.amount}
                path={item.user.slug}
                time={item.bidAt}
                image={item.user.image}
            />
        ))}
    </div>
);

HistoryTabContent.propTypes = {
    history: PropTypes.arrayOf(
        PropTypes.shape({
            id: IDType.isRequired,
            user: PropTypes.shape({
                name: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired,
                image: ImageType.isRequired,
            }),
            amount: PropTypes.string.isRequired,
            bidAt: PropTypes.string.isRequired,
        })
    ),
};

export default HistoryTabContent;
