import Header from './layout/header/index.html.jsx';
import { Main } from './layout/styles';

export default ({ data, environment }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>TableKit</title>
      <script src="/static/js/index.js"></script>
      <link href="/static/css/index.css" rel="stylesheet" media="all" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </head>
    <body>
      <Header />
      <Main>
        <h1>Hello World!</h1>
      </Main>
    </body>
  </html>
);
