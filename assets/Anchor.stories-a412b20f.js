import{j as o,a as A,F as b}from"./emotion-react-jsx-runtime.browser.esm-3699e87e.js";import{f as r,g as v,h as f}from"./TextArea-7188b12b.js";import"./index-d8ade8ea.js";import{a as B}from"./Tooltip-8e0e55b6.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7e8b2c4e.js";import"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";const s=["Default","Disabled","Hover","Focus","Visited"],j={title:"Components/Anchor",component:r,parameters:{...v,variants:s}},u=({Anchor:e,ButtonAnchor:l})=>A(b,{children:[s.map(t=>o(e,{href:t==="Disabled"?void 0:"#","data-pseudo":t.toLowerCase(),children:"Link text here"})),s.map(t=>o(l,{disabled:t==="Disabled","data-pseudo":t.toLowerCase(),children:"Button text here"}))]}),a=u.bind({});a.args={Anchor:r,ButtonAnchor:r.withComponent("button",{target:"e1l0y1a00"})};const n=u.bind({});n.args={Anchor:B,ButtonAnchor:e=>o("button",{className:f,...e,type:"button"})};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`({
  Anchor,
  ButtonAnchor
}) => <>
    {contentVariants.map(variant => <Anchor href={variant === 'Disabled' ? undefined : '#'} data-pseudo={variant.toLowerCase()}>
        Link text here
      </Anchor>)}
    {contentVariants.map(variant => <ButtonAnchor disabled={variant === 'Disabled'} data-pseudo={variant.toLowerCase()}>
        Button text here
      </ButtonAnchor>)}
  </>`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`({
  Anchor,
  ButtonAnchor
}) => <>
    {contentVariants.map(variant => <Anchor href={variant === 'Disabled' ? undefined : '#'} data-pseudo={variant.toLowerCase()}>
        Link text here
      </Anchor>)}
    {contentVariants.map(variant => <ButtonAnchor disabled={variant === 'Disabled'} data-pseudo={variant.toLowerCase()}>
        Button text here
      </ButtonAnchor>)}
  </>`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const k=["Emotion","Class"];export{n as Class,a as Emotion,k as __namedExportsOrder,j as default};
