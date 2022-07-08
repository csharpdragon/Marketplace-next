import PropTypes from "prop-types";
import TopSeller from "@components/top-seller/layout-01";
import { IDType, ImageType } from "@utils/types";

const DetailsTabContent = ({ owner, properties, tags }) => (
    <div className="rn-pd-bd-wrapper mt--20">
        <TopSeller
            name={owner.name}
            total_sale={owner.total_sale}
            slug={owner.slug}
            image={owner.image}
        />
        {properties && (
            <div className="rn-pd-sm-property-wrapper">
                <h6 className="pd-property-title">Property</h6>
                <div className="property-wrapper">
                    {properties.map((property) => (
                        <div key={property.id} className="pd-property-inner">
                            <span className="color-body type">
                                {property.type}
                            </span>
                            <span className="color-white value">
                                {property.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        )}
        {tags && (
            <div className="rn-pd-sm-property-wrapper">
                <h6 className="pd-property-title">Tags</h6>
                <div className="catagory-wrapper">
                    {tags.map((tag) => (
                        <div key={tag.id} className="pd-property-inner">
                            <span className="color-body type">{tag.type}</span>
                            <span className="color-white value">
                                {tag.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
);

DetailsTabContent.propTypes = {
    owner: PropTypes.shape({
        name: PropTypes.string,
        total_sale: PropTypes.number,
        slug: PropTypes.string,
        image: ImageType,
    }),
    properties: PropTypes.arrayOf(
        PropTypes.shape({
            id: IDType,
            type: PropTypes.string,
            value: PropTypes.string,
        })
    ),
    tags: PropTypes.arrayOf(
        PropTypes.shape({
            id: IDType,
            type: PropTypes.string,
            value: PropTypes.string,
        })
    ),
};

export default DetailsTabContent;
