import{j as i,a as g,F as R}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";import{u as l,w as b,x as v,y as d}from"./TextArea-6f3d7e7f.js";import{r as z}from"./index-b6937ee2.js";import{f,g as x}from"./Tooltip-28dd9261.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8c426718.js";import"./index-4d501b15.js";import"./_commonjsHelpers-725317a4.js";const h=["Default","Selected","Hover","Focus","Disabled","Active"],L={title:"Components/Chip",component:l,parameters:{...b,auxiliaryClassNames:[v],auxiliaryComponents:[d],variants:h,chromatic:{viewports:[1500]}}},C=({Chip:u,ChipRow:w})=>i(R,{children:["small","medium","large"].map(s=>g(z.Fragment,{children:[i("h4",{children:s}),h.map(t=>i(w,{role:"tablist",children:i(u,{"data-size":s,disabled:t==="Disabled","aria-selected":t==="Selected","data-pseudo":t.toLowerCase(),children:s},t)}))]},s))}),a=C.bind({});a.args={Chip:l,ChipRow:d};a.parameters={useEmotion:!0};const e=C.bind({});e.args={Chip:f,ChipRow:x};e.parameters={useEmotion:!1};var r,o,p;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
  </>`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const V=["Emotion","Class"];export{e as Class,a as Emotion,V as __namedExportsOrder,L as default};
//# sourceMappingURL=Chip.stories-89e306cf.js.map
