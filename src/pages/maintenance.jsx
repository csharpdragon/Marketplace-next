import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import MaintenanceArea from "@containers/maintenance";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const ComingSoon = () => (
    <Wrapper>
        <SEO pageTitle="Coming Soon" />
        <MaintenanceArea />
    </Wrapper>
);

export default ComingSoon;
