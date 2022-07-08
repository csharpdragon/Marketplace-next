import PropTypes from "prop-types";
import clsx from "clsx";
import TabContent from "react-bootstrap/TabContent";
import TabContainer from "react-bootstrap/TabContainer";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";
import Product from "@components/product/layout-02";
import NotificationArea from "@containers/notification";
import CreatorArea from "@containers/creator/layout-02";
import {
    ProductType,
    SectionTitleType,
    NotifactionType,
    SellerType,
} from "@utils/types";
import { shuffleArray } from "@utils/methods";

const ProductArea = ({ className, space, data }) => (
    <div
        className={clsx(
            "rn-product-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-8 custom-product-col">
                    {data?.section_title && (
                        <h2 className="text-left mb--50">
                            {data.section_title.title}
                        </h2>
                    )}

                    <TabContainer defaultActiveKey="nav-home">
                        <Nav className="product-tab-nav">
                            <div className="nav">
                                <Nav.Link as="button" eventKey="nav-home">
                                    All Product
                                </Nav.Link>
                                <Nav.Link as="button" eventKey="nav-profile">
                                    Newest Item
                                </Nav.Link>
                                <Nav.Link as="button" eventKey="nav-contact">
                                    Rare Reals
                                </Nav.Link>
                            </div>
                        </Nav>
                        <TabContent>
                            <TabPane
                                eventKey="nav-home"
                                className="lg-product_tab-pane"
                            >
                                {shuffleArray(data?.products)?.map((prod) => (
                                    <Product
                                        key={prod.id}
                                        title={prod.title}
                                        slug={prod.slug}
                                        latestBid={prod.latestBid}
                                        price={prod.price}
                                        likeCount={prod.likeCount}
                                        auction_date={prod.auction_date}
                                        image={prod.images?.[0]}
                                        authors={prod.authors}
                                        bitCount={prod.bitCount}
                                    />
                                ))}
                            </TabPane>
                            <TabPane
                                eventKey="nav-profile"
                                className="lg-product_tab-pane"
                            >
                                {shuffleArray(data?.products)?.map((prod) => (
                                    <Product
                                        key={prod.id}
                                        title={prod.title}
                                        slug={prod.slug}
                                        latestBid={prod.latestBid}
                                        price={prod.price}
                                        likeCount={prod.likeCount}
                                        auction_date={prod.auction_date}
                                        image={prod.images?.[0]}
                                        authors={prod.authors}
                                        bitCount={prod.bitCount}
                                    />
                                ))}
                            </TabPane>
                            <TabPane
                                eventKey="nav-contact"
                                className="lg-product_tab-pane"
                            >
                                {shuffleArray(data?.products)?.map((prod) => (
                                    <Product
                                        key={prod.id}
                                        title={prod.title}
                                        slug={prod.slug}
                                        latestBid={prod.latestBid}
                                        price={prod.price}
                                        likeCount={prod.likeCount}
                                        auction_date={prod.auction_date}
                                        image={prod.images?.[0]}
                                        authors={prod.authors}
                                        bitCount={prod.bitCount}
                                    />
                                ))}
                            </TabPane>
                        </TabContent>
                    </TabContainer>
                </div>
                <div className="col-lg-4 custom-product-col">
                    <div
                        className="header-right-fixed position-sticky product-notify-wrapper rbt-sticky-top-adjust-four mt--95 mt_md--20 mt_sm--15"
                        style={{ top: "90px" }}
                    >
                        <NotificationArea
                            data={{ notifications: data.notifications }}
                        />
                        <CreatorArea data={{ creators: data.creators }} />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

ProductArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        products: PropTypes.arrayOf(ProductType),
        notifications: PropTypes.arrayOf(NotifactionType),
        creators: PropTypes.arrayOf(SellerType),
    }),
};

ProductArea.defaultProps = {
    space: 1,
};

export default ProductArea;
