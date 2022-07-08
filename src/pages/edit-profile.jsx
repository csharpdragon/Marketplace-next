import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import EditProfileArea from "@containers/edit-profile";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const EditProfile = () => (
    <Wrapper>
        <SEO pageTitle="Edit Profile" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Edit Profile" currentPage="Edit Profile" />
            <EditProfileArea />
        </main>
        <Footer />
    </Wrapper>
);

export default EditProfile;
