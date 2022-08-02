import Footer from './footer/index.html';
import Header from './header/index.html';
import { Body } from './styles';

export default ({ children, head, title }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <script src="/static/js/index.js" />
      <link href="/static/css/index.css" rel="stylesheet" media="all" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {head && head}
    </head>
    <body>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </body>
  </html>
);
