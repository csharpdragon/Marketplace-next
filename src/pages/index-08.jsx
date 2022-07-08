import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-02";
import Footer from "@layout/footer/footer-02";
import TopBarArea from "@containers/top-bar";
import HeroArea from "@containers/hero/layout-08";
import TopSellerArea from "@containers/top-seller/layout-01";
import LiveExploreArea from "@containers/live-explore/layout-03";
import CollectionArea from "@containers/collection/layout-02";
import ExploreProductArea from "@containers/explore-product/layout-09";
import ServiceArea from "@containers/services/layout-01";
import { normalizedData } from "@utils/methods";

// Demo data
import homepageData from "../data/homepages/home-08.json";
import sellerData from "../data/sellers.json";
import productData from "../data/products-02.json";
import collectionsData from "../data/collections.json";

export async function getStaticProps() {
    return {
        props: {
            className: "home-sticky-pin sidebar-header position-relative",
        },
    };
}

const Home = () => {
    const content = normalizedData(homepageData?.content || []);
    const liveAuctionData = productData
        .filter(
            (prod) =>
                prod?.auction_date && new Date() <= new Date(prod?.auction_date)
        )
        .sort(
            (a, b) =>
                Number(new Date(b.published_at)) -
                Number(new Date(a.published_at))
        )
        .slice(0, 4);
    return (
        <Wrapper>
            <SEO pageTitle="Home Eight" />
            <Header />
            <main
                id="main-content"
                className="rn-nft-mid-wrapper nft-left-sidebar-nav pr--40 pr_sm--15"
            >
                <div className="list-item-1">
                    <TopBarArea />
                    <HeroArea data={content["hero-section"]} />
                </div>
                <TopSellerArea
                    space={3}
                    data={{
                        ...content["top-sller-section"],
                        sellers: sellerData,
                    }}
                />
                <LiveExploreArea
                    id="list-item-2"
                    data={{
                        ...content["live-explore-section"],
                        products: liveAuctionData,
                    }}
                />
                <CollectionArea
                    space={2}
                    data={{
                        ...content["collection-section"],
                        collections: collectionsData.slice(0, 4),
                    }}
                />
                <ExploreProductArea
                    id="list-item-3"
                    space={2}
                    data={{
                        ...content["explore-product-section"],
                        products: productData,
                    }}
                />
                <ServiceArea
                    id="list-item-4"
                    space={2}
                    data={content["service-section"]}
                />
            </main>
            <Footer className="pr--40" />
        </Wrapper>
    );
};

export default Home;
