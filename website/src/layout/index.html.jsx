import Footer from './footer/index.html';
import Header from './header/index.html';
import { Content, ContentWithSidebar, MainWrapper } from './styles';

export default function MainLayout({ children, head, title, isHomePage }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{isHomePage ? title : `${title} • TableKit`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://cdn0.tablecheck.com/common/images/favicons/tc/v1.0.0/favicon.ico"
          rel="icon"
        />
        <link
          href="https://cdn0.tablecheck.com/common/images/favicons/tc/v1.0.0/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="https://cdn0.tablecheck.com/common/images/favicons/tc/v1.0.0/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="https://cdn0.tablecheck.com/common/images/favicons/tc/v1.0.0/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/static/site.webmanifest" rel="manifest" />
        <link
          color="#7935d2"
          href="https://cdn0.tablecheck.com/common/images/favicons/tc/v1.0.0/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content="#7935d2" name="msapplication-TileColor" />
        <meta content="#7935D2" name="theme-color" />
        <meta content="TableKit" property="og:title" />
        <meta
          content="TableKit • TableCheck's Design System"
          property="og:description"
        />
        <meta content="/static/img/screenshot.png" property="og:image" />
        <meta content="https://tablekit.tablecheck.com" property="og:url" />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          href="https://cdn0.tablecheck.com/common/fonts/ibmplex/v5.1.3/IBMPlex-Sans/IBMPlexSans-Regular.woff2"
          data-react-helmet="true"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          href="https://cdn0.tablecheck.com/common/fonts/ibmplex/v5.1.3/IBMPlex-Sans/IBMPlexSans-Italic.woff2"
          data-react-helmet="true"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          href="https://cdn0.tablecheck.com/common/fonts/ibmplex/v5.1.3/IBMPlex-Sans/IBMPlexSans-Bold.woff2"
          data-react-helmet="true"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          href="https://cdn0.tablecheck.com/common/fonts/ibmplex/v5.1.3/IBMPlex-Sans/IBMPlexSans-BoldItalic.woff2"
          data-react-helmet="true"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          href="https://cdn0.tablecheck.com/common/fonts/ibmplex/v5.1.3/IBMPlex-Sans/IBMPlexSans-SemiBold.woff2"
          data-react-helmet="true"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          href="https://cdn0.tablecheck.com/common/fonts/ibmplex/v5.1.3/IBMPlex-Sans/IBMPlexSans-SemiBoldItalic.woff2"
          data-react-helmet="true"
        />
        <link href="/static/css/index.css" rel="stylesheet" media="all" />
        <script src="/static/js/index.js" />
        {head && head}
      </head>
      <body>
        <MainWrapper>
          <Header isHomePage={isHomePage} />
          {isHomePage ? (
            <Content>{children}</Content>
          ) : (
            <ContentWithSidebar>{children}</ContentWithSidebar>
          )}
          {isHomePage && <Footer />}
        </MainWrapper>
      </body>
    </html>
  );
}
