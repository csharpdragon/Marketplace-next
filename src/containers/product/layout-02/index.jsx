import PropTypes from "prop-types";
import clsx from "clsx";
import TabContent from "react-bootstrap/TabContent";
import TabContainer from "react-bootstrap/TabContainer";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";
import Product from "@components/product/layout-03";
import { ProductType, SectionTitleType } from "@utils/types";
import { shuffleArray } from "@utils/methods";

const ProductArea = ({ space, className, data }) => (
    <div
        className={clsx(
            "rn-product-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {data?.section_title && (
                        <h2 className="text-center mb--50">
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
                                className="lg-product_tab-pane lg-product-col-2"
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
                                className="lg-product_tab-pane lg-product-col-2"
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
                                className="lg-product_tab-pane lg-product-col-2"
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
            </div>
        </div>
    </div>
);

ProductArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        products: PropTypes.arrayOf(ProductType),
    }),
};

ProductArea.defaultProps = {
    space: 1,
};

export default ProductArea;
