import {
  HeaderWrapper,
  Logo,
  LogoSymbol,
  LogoWording,
  ToggleTheme,
  TopNav
} from './header.styles';

export function Header({ isHomePage }) {
  return (
    <HeaderWrapper isHomePage={isHomePage}>
      <Logo href="/">
        <LogoSymbol src="//cdn0.tablecheck.com/common/images/logos/tc/v1.0.0/logo-symbol.svg" />
        <LogoWording>TableKit</LogoWording>
      </Logo>
      <TopNav>
        <li>
          <a href="/changelog" role="button" data-variant="bare">
            Changelog
          </a>
        </li>
        <li>
          <a href="/brand" role="button" data-variant="bare">
            Brand
          </a>
        </li>
        <li>
          <a href="/design" role="button" data-variant="bare">
            Design
          </a>
        </li>
        <li>
          <a href="/dev" role="button" data-variant="bare">
            Dev
          </a>
        </li>
        <li>
          <a href="/contribute" role="button" data-variant="bare">
            Contribute
          </a>
        </li>
        <li>
          <a href="/about" role="button" data-variant="bare">
            About
          </a>
        </li>
        <li>
          <ToggleTheme
            id="theme-toggle"
            data-variant="bare"
            aria-label="Change Appearance"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="512"
              height="512"
              x="0"
              y="0"
              viewBox="0 0 302.4 302.4"
              xmlSpace="preserve"
              fill="currentColor"
            >
              <g>
                <g xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M204.8,97.6C191.2,84,172,75.2,151.2,75.2s-40,8.4-53.6,22.4c-13.6,13.6-22.4,32.8-22.4,53.6s8.8,40,22.4,53.6    c13.6,13.6,32.8,22.4,53.6,22.4s40-8.4,53.6-22.4c13.6-13.6,22.4-32.8,22.4-53.6S218.8,111.2,204.8,97.6z M190.4,190.4    c-10,10-24,16-39.2,16s-29.2-6-39.2-16s-16-24-16-39.2s6-29.2,16-39.2s24-16,39.2-16s29.2,6,39.2,16s16,24,16,39.2    S200.4,180.4,190.4,190.4z" />
                  </g>
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M292,140.8h-30.8c-5.6,0-10.4,4.8-10.4,10.4c0,5.6,4.8,10.4,10.4,10.4H292c5.6,0,10.4-4.8,10.4-10.4    C302.4,145.6,297.6,140.8,292,140.8z" />
                  </g>
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M151.2,250.8c-5.6,0-10.4,4.8-10.4,10.4V292c0,5.6,4.8,10.4,10.4,10.4c5.6,0,10.4-4.8,10.4-10.4v-30.8    C161.6,255.6,156.8,250.8,151.2,250.8z" />
                  </g>
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M258,243.6l-22-22c-3.6-4-10.4-4-14.4,0s-4,10.4,0,14.4l22,22c4,4,10.4,4,14.4,0S262,247.6,258,243.6z" />
                  </g>
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M151.2,0c-5.6,0-10.4,4.8-10.4,10.4v30.8c0,5.6,4.8,10.4,10.4,10.4c5.6,0,10.4-4.8,10.4-10.4V10.4    C161.6,4.8,156.8,0,151.2,0z" />
                  </g>
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M258.4,44.4c-4-4-10.4-4-14.4,0l-22,22c-4,4-4,10.4,0,14.4c3.6,4,10.4,4,14.4,0l22-22C262.4,54.8,262.4,48.4,258.4,44.4z" />
                  </g>
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M41.2,140.8H10.4c-5.6,0-10.4,4.8-10.4,10.4s4.4,10.4,10.4,10.4h30.8c5.6,0,10.4-4.8,10.4-10.4    C51.6,145.6,46.8,140.8,41.2,140.8z" />
                  </g>
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M80.4,221.6c-3.6-4-10.4-4-14.4,0l-22,22c-4,4-4,10.4,0,14.4s10.4,4,14.4,0l22-22C84.4,232,84.4,225.6,80.4,221.6z" />
                  </g>
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M80.4,66.4l-22-22c-4-4-10.4-4-14.4,0s-4,10.4,0,14.4l22,22c4,4,10.4,4,14.4,0S84.4,70.4,80.4,66.4z" />
                  </g>
                </g>
              </g>
            </svg>
          </ToggleTheme>
        </li>
      </TopNav>
    </HeaderWrapper>
  );
}
