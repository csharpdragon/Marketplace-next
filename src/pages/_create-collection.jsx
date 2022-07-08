import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
// import Breadcrumb from "@components/breadcrumb";
// import CreateCollectionArea from "@containers/create-collection";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const CreateCollection = () => (
    <Wrapper>
        <SEO pageTitle="Contact" />
        <Header />
        <main id="main-content">
            {/* <Breadcrumb
                pageTitle="Create Collection"
                currentPage="Create Collection"
            /> */}
            {/* <CreateCollectionArea /> */}
        </main>
        <Footer />
    </Wrapper>
);

export default CreateCollection;
