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
          <SectionHeading href="/brand/assets">Assets</SectionHeading>
          <ul>
            <li>
              <a aria-current="page" href="/brand/assets/press-kit">
                Press Kit
              </a>
            </li>
            <li>
              <a href="/brand/assets/logotypes">Logotypes</a>
            </li>
          </ul>
        </SidebarSection>
        <SidebarSection>
          <SectionHeading href="/brand/identity">Identity</SectionHeading>
          <ul>
            <li>
              <a aria-current="page" href="/brand/identity/who-we-are">
                Who we are
              </a>
            </li>
            <li>
              <a href="/brand/identity/our-personality">Our personality</a>
            </li>
            <li>
              <a href="/brand/identity/our-voice">Our voice</a>
            </li>
          </ul>
        </SidebarSection>
      </SidebarWrapper>
    </Sidebar>
  );
}
