import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import { Select, Input, InputStructure } from '@tablecheck/tablekit-react-css';
import * as React from 'react';

const meta: Meta = {
  title: 'Theming/Fonts',
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

export default meta;

const FontWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l4);
  width: 100%;
  max-width: 800px;
`;

const Sample = styled.div`
  padding: var(--spacing-l4);
  border-radius: var(--border-radius-small);
  border: 1px solid var(--border);
  box-shadow: var(--elevation-small);
  background-color: var(--surface);
  width: 100%;
`;

const Controls = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-l3);
  margin-bottom: var(--spacing-l4);
  & label {
    display: block;
    margin-bottom: var(--spacing-l1);
  }
`;

const FontSection = styled.div`
  margin-top: var(--spacing-l4);
  font-size: 18px;
`;

const fontSamples = {
  Default: 'The quick brown fox jumps over the lazy dog',
  Arabic: 'الثعلب البني السريع يقفز فوق الكلب الكسول',
  Thai: 'สุนัขจิ้งจอกสีน้ำตาลเร็วกระโดดข้ามสุนัขขี้เกียจ',
  Hebrew: 'השועל החום המהיר קופץ מעל הכלב העצלן',
  Hindi: 'तेज भूरी लोमड़ी आलसी कुत्ते पर कूदती है',
  Japanese: '速い茶色のキツネは怠け者の犬を飛び越えます',
  Korean: '빠른 갈색 여우가 게으른 개를 뛰어 넘습니다',
  Khmer: 'ចចកពណ៌តោ្នតលឿនលោតលើសុនខដែលខ្ជិល'
};

const countries = [
  { code: 'us', name: 'United States' },
  { code: 'jp', name: 'Japan' },
  { code: 'kr', name: 'Korea' },
  { code: 'th', name: 'Thailand' },
  { code: 'il', name: 'Israel' },
  { code: 'in', name: 'India' },
  { code: 'kh', name: 'Cambodia' },
  { code: 'sa', name: 'Saudi Arabia' }
];

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'Arabic' },
  { code: 'th', name: 'Thai' },
  { code: 'he', name: 'Hebrew' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'km', name: 'Khmer' }
];

export const FontTest: StoryFn = () => {
  // Get current values from HTML document
  const getLanguage = () => document.documentElement.lang || '';
  const getCountry = () =>
    document.documentElement.getAttribute('data-country') || '';

  // Define IDs for form controls
  const languageSelectId = 'language-select';
  const countrySelectId = 'country-select';
  const cssUrlId = 'css-url';

  // Create ref to track the CSS files that have been added
  const addedCssFiles = React.useRef<string[]>([]);
  const cssUrlInputRef = React.useRef<HTMLInputElement>(null);

  // Set initial values
  if (!document.documentElement.lang) {
    document.documentElement.lang = 'en';
  }

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLang = event.target.value;
    if (newLang) {
      document.documentElement.lang = newLang;
    } else {
      document.documentElement.removeAttribute('lang');
    }
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountry = event.target.value;
    if (newCountry) {
      document.documentElement.setAttribute('data-country', newCountry);
    } else {
      document.documentElement.removeAttribute('data-country');
    }
  };

  const handleAddCssFile = () => {
    const cssUrl = cssUrlInputRef.current?.value;

    if (!cssUrl) return;

    // Avoid adding the same CSS file multiple times
    if (addedCssFiles.current.includes(cssUrl)) {
      alert('This CSS file has already been added');
      return;
    }

    // Create a link element to add the CSS file
    const linkEl = document.createElement('link');
    linkEl.rel = 'stylesheet';
    linkEl.href = cssUrl;
    document.head.appendChild(linkEl);

    // Add the URL to our tracking array
    addedCssFiles.current.push(cssUrl);

    // Clear the input
    if (cssUrlInputRef.current) {
      cssUrlInputRef.current.value = '';
    }
  };

  return (
    <FontWrapper>
      <h1>Font Family Test</h1>
      <p>
        Test different font configurations based on language and country
        settings.
      </p>

      <Controls>
        <InputStructure
          name={languageSelectId}
          label="Language (lang attribute)"
          input={
            <Select
              id={languageSelectId}
              defaultValue={getLanguage() || 'en'}
              onChange={handleLanguageChange}
            >
              <option value="">None</option>
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name} ({lang.code})
                </option>
              ))}
            </Select>
          }
        />

        <InputStructure
          name={countrySelectId}
          label="Country (data-country attribute)"
          input={
            <Select
              id={countrySelectId}
              defaultValue={getCountry()}
              onChange={handleCountryChange}
            >
              <option value="">None</option>
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name} ({c.code})
                </option>
              ))}
            </Select>
          }
        />
        <InputStructure
          name={cssUrlId}
          label="Add External CSS File"
          input={
            <Input
              data-stretch
              id={cssUrlId}
              ref={cssUrlInputRef}
              placeholder="https://example.com/fonts/styles.css"
              suffix={<button onClick={handleAddCssFile}>Add CSS</button>}
            />
          }
        />
      </Controls>

      <Sample>
        <h3>Font Display</h3>
        <p>
          Current computed font-family (inspect element to verify):
          <code>
            var(--locale-font-family), var(--country-font-family), [fallbacks]
          </code>
        </p>

        <FontSection>
          <h4>Font Samples</h4>
          {Object.entries(fontSamples).map(([name, text]) => (
            <div key={name}>
              <strong>{name}:</strong> {text}
            </div>
          ))}
        </FontSection>
      </Sample>
    </FontWrapper>
  );
};
FontTest.parameters = { useEmotion: false };
