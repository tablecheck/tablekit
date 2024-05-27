import{a as i,j as w,F as R}from"./emotion-react-jsx-runtime.browser.esm-171f6fb8.js";import{x as l,y as b,z as v,D as d}from"./TextArea-8c932d0e.js";import{r as z}from"./index-d8ade8ea.js";import{f,g as x}from"./Tooltip-07c5a478.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-04c27282.js";import"./_commonjsHelpers-042e6b4d.js";const h=["Default","Selected","Hover","Focus","Disabled","Active"],j={title:"Components/Chip",component:l,parameters:{...b,auxiliaryClassNames:[v],auxiliaryComponents:[d],variants:h,chromatic:{viewports:[1500]}}},C=({Chip:u,ChipRow:g})=>i(R,{children:["small","medium","large"].map(s=>w(z.Fragment,{children:[i("h4",{children:s}),h.map(t=>i(g,{role:"tablist",children:i(u,{"data-size":s,disabled:t==="Disabled","aria-selected":t==="Selected","data-pseudo":t.toLowerCase(),children:s},t)}))]},s))}),a=C.bind({});a.args={Chip:l,ChipRow:d};a.parameters={useEmotion:!0};const e=C.bind({});e.args={Chip:f,ChipRow:x};e.parameters={useEmotion:!1};var r,o,p;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
  </>`,...(p=(o=a.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var m,n,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
  </>`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const L=["Emotion","Class"];export{e as Class,a as Emotion,L as __namedExportsOrder,j as default};
//# sourceMappingURL=Chip.stories-22de617f.js.map
