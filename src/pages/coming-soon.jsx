import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import CommingSoonArea from "@containers/coming-soon";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const ComingSoon = () => (
    <Wrapper>
        <SEO pageTitle="Coming Soon" />
        <CommingSoonArea />
    </Wrapper>
);

export default ComingSoon;
