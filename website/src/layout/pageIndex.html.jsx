import { PageIndexTitle, PageIndexWrapper } from './pageIndex.styles';

export function PageIndex() {
  return (
    <PageIndexWrapper>
      <PageIndexTitle>On this page</PageIndexTitle>
      <ul>
        <li>
          <a href="website/src/design#get-started">Get started</a>
        </li>
        <li>
          <a href="website/src/design#how-to-use-color-for-product-ui">
            How to use color for product UI
          </a>
        </li>
        <li>
          <a href="website/src/design#functional-system-in-action">
            Functional system in action
          </a>
        </li>
        <li>
          <a href="website/src/design##combining-colors">Combining colors</a>
        </li>
        <li>
          <a href="website/src/design#color-outside-the-functional-system">
            Color outside the functional system
          </a>
        </li>
        <li>
          <a href="website/src/design#how-to-use-colors-in-primer-libraries">
            How to use colors in TableKit libraries?
          </a>
        </li>
      </ul>
    </PageIndexWrapper>
  );
}
