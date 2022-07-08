import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import CreatorArea from "@containers/creator/layout-03";

// demo data
import creatorData from "../data/sellers.json";

const Creator = () => (
    <Wrapper>
        <SEO pageTitle="Creator" />
        <Header />
        <main id="main-content">
            <CreatorArea data={{ creators: creatorData }} />
        </main>
        <Footer />
    </Wrapper>
);

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

export default Creator;
