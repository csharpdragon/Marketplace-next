import PropTypes from "prop-types";
import TopSeller from "@components/top-seller/layout-02";
import { IDType, ImageType } from "@utils/types";

const BidsTabContent = ({ bids }) => (
    <div>
        {bids?.map((bid) => (
            <TopSeller
                key={bid.id}
                name={bid.user.name}
                eth={bid.amount}
                path={bid.user.slug}
                time={bid.bidAt}
                image={{ src: bid.user.image.src, width: 44, height: 44 }}
            />
        ))}
    </div>
);

BidsTabContent.propTypes = {
    bids: PropTypes.arrayOf(
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

export default BidsTabContent;
