import {
  SectionHeading,
  Sidebar,
  SidebarSection,
  SidebarWrapper
} from '../layout/sidenav.styles';

export function SideNav() {
  return (
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
              <a href="website/src/design#Accessibility">
                Accessibility at TableCheck
              </a>
            </li>
            <li>
              <a href="website/src/design#Guidelines">Guidelines</a>
            </li>
            <li>
              <a href="website/src/design#Tools">Tools</a>
            </li>
            <li>
              <a href="website/src/design#input">Alternative text for images</a>
            </li>
            <li>
              <a href="website/src/design#Assistive">
                Assistive technology announcements
              </a>
            </li>
            <li>
              <a href="website/src/design#Descriptive">Descriptive buttons</a>
            </li>
            <li>
              <a href="website/src/design#Focus">Focus management</a>
            </li>
            <li>
              <a href="website/src/design#Headings">Headings</a>
            </li>
            <li>
              <a href="website/src/design#Links">Links</a>
            </li>
            <li>
              <a href="website/src/design#Semantic">Semantic HTML</a>
            </li>
            <li>
              <a href="website/src/design#Text">Text resize and respacing</a>
            </li>
            <li>
              <a href="website/src/design#Tooltip">Tooltip alternatives</a>
            </li>
          </ul>
        </SidebarSection>
      </SidebarWrapper>
    </Sidebar>
  );
}
