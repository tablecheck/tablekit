import {
  Button,
  Column,
  Content,
  FooterWrapper,
  InnerWrapper,
  Link,
  SecondaryContent,
  SubTitle,
  SvgIcon,
  Title
} from './footer.styles';

export function Footer() {
  return (
    <FooterWrapper>
      <InnerWrapper>
        <Content>
          <Column>
            <Title>Open source</Title>
            <SubTitle>
              TableKit is open-sourced on GitHub. Contributions and feedback are
              welcome!
            </SubTitle>
            <Button href="https://github.com/tablecheck/tablekit" role="button">
              <SvgIcon
                aria-hidden="true"
                height="20"
                role="img"
                viewBox="0 0 16 16"
                width="20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                />
              </SvgIcon>
              <span>Contribute on GitHub</span>
            </Button>
          </Column>
          <Column>
            <Title>Keep in touch</Title>
            <Link href="https://twitter.com/tablecheck">
              <SvgIcon
                aria-hidden="true"
                height="20"
                role="img"
                viewBox="0 0 20 20"
                width="20"
              >
                <path d="M6.28976 18C13.8373 18 17.9648 11.845 17.9648 6.50756C17.9648 6.33274 17.9611 6.1587 17.9532 5.98546C18.7544 5.41531 19.4507 4.70382 20 3.89388C19.2648 4.21557 18.4736 4.43213 17.6436 4.52978C18.4908 4.02972 19.1412 3.23869 19.448 2.2957C18.6552 2.75835 17.7772 3.09461 16.8424 3.27615C16.0936 2.49105 15.0276 2 13.8472 2C11.5812 2 9.74363 3.80889 9.74363 6.03861C9.74363 6.35557 9.77963 6.66387 9.85003 6.9596C6.43968 6.79068 3.41563 5.18341 1.39176 2.73945C1.03936 3.33636 0.836164 4.02974 0.836164 4.76959C0.836164 6.17093 1.56058 7.40804 2.66218 8.13177C1.98897 8.1113 1.35656 7.92938 0.803816 7.62659C0.803212 7.64354 0.80321 7.66006 0.80321 7.67817C0.80321 9.63432 2.21762 11.2675 4.09518 11.6376C3.75038 11.7302 3.38761 11.7798 3.01318 11.7798C2.74918 11.7798 2.49198 11.7542 2.24198 11.7069C2.76438 13.3118 4.2792 14.4797 6.07515 14.5123C4.67074 15.5959 2.90157 16.2413 0.97878 16.2413C0.647979 16.2413 0.321182 16.2228 -1.71715e-06 16.1854C1.81601 17.3312 3.97236 17.9997 6.28998 17.9997" />
              </SvgIcon>
              <span>Follow us on Twitter</span>
            </Link>
            <Link href="https://github.com/tablecheck/tablekit/issues/new">
              <SvgIcon
                aria-hidden="true"
                height="20"
                role="img"
                viewBox="0 0 16 16"
                width="20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                />
              </SvgIcon>
              <span>Share feedback on GitHub</span>
            </Link>
          </Column>
        </Content>
      </InnerWrapper>
      <InnerWrapper>
        <SecondaryContent>
          <span>
            Created and maintained by TableCheck’s Design and Front-end teams
          </span>
          <p>© TableCheck 2022</p>
        </SecondaryContent>
      </InnerWrapper>
    </FooterWrapper>
  );
}
