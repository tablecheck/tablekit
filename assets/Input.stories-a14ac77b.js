import{a as e,j as I,F as b}from"./emotion-react-jsx-runtime.browser.esm-171f6fb8.js";import{K as f,P as k,Q as z,R as C,b5 as P,b6 as R,b7 as E,b8 as w,ao as o}from"./TextArea-8c932d0e.js";import{r as n}from"./index-d8ade8ea.js";import{n as S}from"./Tooltip-07c5a478.js";import{C as V}from"./bucket-2-37a73cbd.js";import{F as v}from"./bucket-5-1bcf3978.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-04c27282.js";import"./_commonjsHelpers-042e6b4d.js";import"./iconPropTypes-201665c4-d9d6f432.js";import"./index-4d501b15.js";const h=[{title:"Default"},{title:"With Value",defaultValue:"Some Content"},{title:"Focus","data-pseudo":"focus"},{title:"Disabled","data-variant":"disabled"},{title:"Disabled With Value","data-variant":"disabled",defaultValue:"Some Content"},{title:"Error","data-variant":"error"},{title:"Stretch","data-stretch":!0}],Q={title:"Components/Input",component:f,parameters:{variants:h.map(({title:t})=>t),variantWidth:"280px",auxiliaryComponents:[k,z,C],auxiliaryClassNames:[P,R,E],...w}},N=t=>{const a=e(V,{size:o(t)}),i=e(v,{size:o(t)});return[{},{iconAfter:a},{iconBefore:i},{iconBefore:i,iconAfter:a},{suffix:e("span",{children:".com"})},{suffix:e("span",{children:"@tablecheck.com"}),iconBefore:i},{prefix:e("span",{children:"EN"})},{prefix:e("span",{children:"ZH-CN"}),iconAfter:a}]},x=({Input:t})=>e(b,{children:["small","medium","large"].map(a=>I(n.Fragment,{children:[e("h4",{children:a}),N(a).map((i,g)=>e(n.Fragment,{children:h.map(({title:y,...F})=>e(t,{...F,...i,placeholder:"Placeholder","data-size":a},y))},g))]},a))}),r=x.bind({});r.args={Input:f};r.parameters={useEmotion:!0};const s=x.bind({});s.args={Input:S};s.parameters={useEmotion:!1};var p,l,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`({
  Input
}) => <>
    {(['small', 'medium', 'large'] as const).map(size => <React.Fragment key={size}>
        <h4>{size}</h4>
        {getPropRows(size).map((withProps, index) =>
    // eslint-disable-next-line react/no-array-index-key
    <React.Fragment key={index}>
            {contentVariants.map(({
        title: key,
        ...props
      }) => <Input key={key} {...props} {...withProps} // suffix, prefix, iconBefore, iconAfter
      placeholder="Placeholder" data-size={size} />)}
          </React.Fragment>)}
      </React.Fragment>)}
  </>`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,d,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`({
  Input
}) => <>
    {(['small', 'medium', 'large'] as const).map(size => <React.Fragment key={size}>
        <h4>{size}</h4>
        {getPropRows(size).map((withProps, index) =>
    // eslint-disable-next-line react/no-array-index-key
    <React.Fragment key={index}>
            {contentVariants.map(({
        title: key,
        ...props
      }) => <Input key={key} {...props} {...withProps} // suffix, prefix, iconBefore, iconAfter
      placeholder="Placeholder" data-size={size} />)}
          </React.Fragment>)}
      </React.Fragment>)}
  </>`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const T=["Emotion","Class"];export{s as Class,r as Emotion,T as __namedExportsOrder,Q as default};
//# sourceMappingURL=Input.stories-a14ac77b.js.map
