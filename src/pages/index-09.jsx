import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import HeroArea from "@containers/hero/layout-09";
import TopSellerArea from "@containers/top-seller/layout-02";
import AboutArea from "@containers/about/layout-01";
import LiveExploreArea from "@containers/live-explore/layout-01";
import ProductArea from "@containers/product/layout-01";
import ProductAreaTwo from "@containers/product/layout-02";
import ServiceArea from "@containers/services/layout-01";
import CollectionArea from "@containers/collection/layout-01";
import { normalizedData } from "@utils/methods";

// Demo data
import homepageData from "../data/homepages/home-09.json";
import sellerData from "../data/sellers.json";
import productData from "../data/products-02.json";
import collectionsData from "../data/collections.json";
import notificationData from "../data/notifications.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home09 = () => {
    const content = normalizedData(homepageData?.content || []);
    const liveAuctionData = productData.filter(
        (prod) =>
            prod?.auction_date && new Date() <= new Date(prod?.auction_date)
    );
    return (
        <Wrapper>
            <SEO pageTitle="Home Nine" />
            <Header />
            <main id="main-content">
                <HeroArea data={content["hero-section"]} />
                <TopSellerArea data={{ sellers: sellerData.slice(0, 6) }} />
                <AboutArea data={content["about-section"]} />
                <LiveExploreArea
                    data={{
                        ...content["live-explore-section"],
                        products: liveAuctionData,
                    }}
                />
                <ProductArea
                    data={{
                        ...content["product-section"],
                        products: productData,
                        notifications: notificationData,
                        creators: sellerData,
                    }}
                />
                <ProductAreaTwo
                    data={{
                        ...content["product-section"],
                        products: productData,
                    }}
                />
                <ServiceArea data={content["service-section"]} />
                <CollectionArea
                    data={{
                        ...content["collection-section"],
                        collections: collectionsData.slice(0, 4),
                    }}
                />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home09;
