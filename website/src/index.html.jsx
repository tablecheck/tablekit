import {
  Content,
  Hero,
  Image,
  InnerWrapper,
  Intro,
  SubTitle,
  Title
} from './index.styles';
import Layout from './layout/index.html';

export default function HomePage() {
  return (
    <Layout title="TableKit" isHomePage editPageRoute="index.html.jsx">
      <Hero>
        <InnerWrapper>
          <Content>
            <Title>TableKit</Title>
            <SubTitle>
              Design, build, and create with TableCheck’s design system
            </SubTitle>
            <Intro>
              TableKit was created for TableCheck by TableCheck. We love it so
              much, we chose to{' '}
              <a href="https://github.com/tablecheck/tablekit">open-source</a>{' '}
              it to allow the community to design and build their own projects
              with TableKit.
            </Intro>
          </Content>
          <Image src="https://cdn3.tablecheck.com/common/images/tablekit/v1.0.0/hero.svg" />
        </InnerWrapper>
      </Hero>
    </Layout>
  );
}
