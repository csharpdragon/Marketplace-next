import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ExploreProductArea from "@containers/explore-product/layout-03";

// Demo data
import productData from "../data/products.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home02 = () => (
    <Wrapper>
        <SEO pageTitle="Place Bid With Filter" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Place Bid With Filter"
                currentPage="Place Bid With Filter"
            />
            <ExploreProductArea
                data={{
                    section_title: {
                        title: "Explore Product",
                    },
                    products: productData.slice(0, 10),
                    placeBid: true,
                }}
            />
        </main>
        <Footer />
    </Wrapper>
);

export default Home02;
