import{j as r,a as g,F as R}from"./emotion-react-jsx-runtime.browser.esm-3699e87e.js";import{u as l,w as b,x as v,y as d}from"./TextArea-1dd159cb.js";import{r as z}from"./index-d8ade8ea.js";import{f,g as x}from"./Tooltip-444c03b6.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7e8b2c4e.js";import"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";const h=["Default","Selected","Hover","Focus","Disabled","Active"],L={title:"Components/Chip",component:l,parameters:{...b,auxiliaryClassNames:[v],auxiliaryComponents:[d],variants:h,chromatic:{viewports:[1500]}}},C=({Chip:u,ChipRow:w})=>r(R,{children:["small","medium","large"].map(s=>g(z.Fragment,{children:[r("h4",{children:s}),h.map(t=>r(w,{role:"tablist",children:r(u,{"data-size":s,disabled:t==="Disabled","aria-selected":t==="Selected","data-pseudo":t.toLowerCase(),children:s},t)}))]},s))}),a=C.bind({});a.args={Chip:l,ChipRow:d};a.parameters={useEmotion:!0};const e=C.bind({});e.args={Chip:f,ChipRow:x};e.parameters={useEmotion:!1};var i,o,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`({
  Chip,
  ChipRow
}) => <>
    {(['small', 'medium', 'large'] as const).map(size => <React.Fragment key={size}>
        <h4>{size}</h4>
        {contentVariants.map(variant => <ChipRow role="tablist">
            <Chip key={variant} data-size={size} disabled={variant === 'Disabled'} aria-selected={variant === 'Selected'} data-pseudo={variant.toLowerCase()}>
              {size}
            </Chip>
          </ChipRow>)}
      </React.Fragment>)}
  </>`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var p,m,c;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`({
  Chip,
  ChipRow
}) => <>
    {(['small', 'medium', 'large'] as const).map(size => <React.Fragment key={size}>
        <h4>{size}</h4>
        {contentVariants.map(variant => <ChipRow role="tablist">
            <Chip key={variant} data-size={size} disabled={variant === 'Disabled'} aria-selected={variant === 'Selected'} data-pseudo={variant.toLowerCase()}>
              {size}
            </Chip>
          </ChipRow>)}
      </React.Fragment>)}
  </>`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const V=["Emotion","Class"];export{e as Class,a as Emotion,V as __namedExportsOrder,L as default};
