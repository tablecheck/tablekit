Each image should contain a large (1980px and up), medium (from 1024px) and small (from 320px) URL

### Example

```tsx
import { useState, useRef } from 'react';
import { ThemeProvider } from '@tablecheck/tablekit-theme';
import styled from '@emotion/styled';
import { Button } from '@tablecheck/tablekit-button';

const [isOpen, setIsOpen] = useState(false);
const [isOpen2, setIsOpen2] = useState(false);
const [currentImageRef, setCurrentImageRef] = useState();
const array = Array.from({ length: 5 });
const images = array.map((o, i) => ({
  large: `https://loremflickr.com/g/1920/1080/food?lock=${i}`,
  medium: `https://loremflickr.com/g/1024/768/food?lock=${i}`,
  small: `https://loremflickr.com/g/640/480/food?lock=${i}`,
  caption: 'Food',
  ref: useRef()
}));

const image = [
  {
    large: 'https://loremflickr.com/g/1920/1080/food',
    medium: 'https://loremflickr.com/g/1024/768/food',
    small: 'https://loremflickr.com/g/640/480/food',
    caption: 'Food'
  }
];

const ImageList = styled.ul`
  margin-top: 16px;
  li {
    display: inline-block;
    button {
      cursor: pointer;
    }
    img {
      width: 150px;
      height: 150px;
    }
  }
`;

<ThemeProvider useLocalStyles>
  <div>
    <Button onClick={() => setIsOpen(true)}>Open Gallery</Button>
    <Gallery
      images={images}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      currentImageRef={currentImageRef}
    />
    <Button onClick={() => setIsOpen2(true)} css={{ marginLeft: '10px' }}>
      Open Gallery (single photo)
    </Button>
    <Gallery
      images={image}
      isOpen={isOpen2}
      onClose={() => setIsOpen2(false)}
    />
    <ImageList>
      {images.map((image) => (
        <li key={image.large}>
          <button
            onClick={() => {
              setCurrentImageRef(image.ref);
              setIsOpen(true);
            }}
          >
            <img src={image.small} />
          </button>
        </li>
      ))}
    </ImageList>
  </div>
</ThemeProvider>;
```
