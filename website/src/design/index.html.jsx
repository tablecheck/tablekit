import Layout from '../layout/index.html';
import {
  Body,
  IntroText,
  PageContent,
  PageIndex,
  PageIndexTitle,
  PageWrapper,
  SectionHeading,
  Sidebar,
  SidebarSection,
  SidebarWrapper
} from './styles';

export default function () {
  return (
    <Layout title="Design">
      <PageWrapper>
        <Sidebar>
          <SidebarWrapper>
            <SidebarSection>
              <SectionHeading href="/design/foundations">
                Foundations
              </SectionHeading>
              <ul>
                <li>
                  <a aria-current="page" href="/design/foundations/color">
                    Color
                  </a>
                </li>
                <li>
                  <a href="/design/foundations/typography">Typography</a>
                </li>
                <li>
                  <a href="/design/foundations/content">Content</a>
                </li>
              </ul>
            </SidebarSection>
            <SidebarSection>
              <SectionHeading href="/design/foundations">
                Accessibility
              </SectionHeading>
              <ul>
                <li>
                  <a href="">Accessibility at TableCheck</a>
                </li>
                <li>
                  <a href="">Guidelines</a>
                </li>
                <li>
                  <a href="">Tools</a>
                </li>
                <li>
                  <a href="">Alternative text for images</a>
                </li>
                <li>
                  <a href="">Assistive technology announcements</a>
                </li>
                <li>
                  <a href="">Descriptive buttons</a>
                </li>
                <li>
                  <a href="">Focus management</a>
                </li>
                <li>
                  <a href="">Headings</a>
                </li>
                <li>
                  <a href="">Links</a>
                </li>
                <li>
                  <a href="">Semantic HTML</a>
                </li>
                <li>
                  <a href="">Text resize and respacing</a>
                </li>
                <li>
                  <a href="">Tooltip alternatives</a>
                </li>
              </ul>
            </SidebarSection>
          </SidebarWrapper>
        </Sidebar>
        <Body>
          <PageContent>
            <h1>Color</h1>
            <IntroText>
              Color is a fundamental piece in TableKit's visual language. In
              this guide you will learn about the principles, patterns, and
              abstractions that make TableKit’s color system.
            </IntroText>
            <h2>
              <a href="#get-started" aria-label="Get started permalink">
                Get started
              </a>
            </h2>
            <img
              width="960"
              alt="Image showing the two different types of color modes: light mode and dark mode"
              src="https://user-images.githubusercontent.com/6951037/146927448-cb518377-114a-4ab8-a37e-1eeffc8732c7.png"
            />
          </PageContent>
          <PageIndex>
            <PageIndexTitle>On this page</PageIndexTitle>
            <ul>
              <li>
                <a href="#get-started">Get started</a>
              </li>
              <li>
                <a href="#how-to-use-color-for-product-ui">
                  How to use color for product UI
                </a>
              </li>
              <li>
                <a href="#functional-system-in-action">
                  Functional system in action
                </a>
              </li>
              <li>
                <a href="##combining-colors">Combining colors</a>
              </li>
              <li>
                <a href="#color-outside-the-functional-system">
                  Color outside the functional system
                </a>
              </li>
              <li>
                <a href="#how-to-use-colors-in-primer-libraries">
                  How to use colors in TableKit libraries?
                </a>
              </li>
            </ul>
          </PageIndex>
        </Body>
      </PageWrapper>
    </Layout>
  );
}
