import{j as e,a as I,F as k}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";import{J as h,K as z,L as P,M as R,N as C,O as b,P as E,Q as S,R as o,S as w,F as N}from"./TextArea-0401bf7a.js";import{r as n}from"./index-b6937ee2.js";import{I as V}from"./Tooltip-fa75cd69.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8c426718.js";import"./index-4d501b15.js";import"./_commonjsHelpers-725317a4.js";const f=[{title:"Default"},{title:"With Value",defaultValue:"Some Content"},{title:"Focus","data-pseudo":"focus"},{title:"Disabled",disabled:!0},{title:"Disabled With Value",disabled:!0,defaultValue:"Some Content"},{title:"Error","data-variant":"error"},{title:"Stretch","data-stretch":!0}],O={title:"Components/Input",component:h,parameters:{variants:f.map(({title:a})=>a),variantWidth:"280px",auxiliaryComponents:[z,P,R],auxiliaryClassNames:[C,b,E],...S}},W=a=>{const t=e(w,{size:o(a)}),i=e(N,{size:o(a)});return[{},{iconAfter:t},{iconBefore:i},{iconBefore:i,iconAfter:t},{suffix:e("span",{children:".com"})},{suffix:e("span",{children:"@tablecheck.com"}),iconBefore:i},{prefix:e("span",{children:"EN"})},{prefix:e("span",{children:"ZH-CN"}),iconAfter:t}]},x=({Input:a})=>e(k,{children:["small","medium","large"].map(t=>I(n.Fragment,{children:[e("h4",{children:t}),W(t).map((i,g)=>e(n.Fragment,{children:f.map(({title:y,...F})=>e(a,{...F,...i,placeholder:"Placeholder","data-size":t},y))},g))]},t))}),r=x.bind({});r.args={Input:h};r.parameters={useEmotion:!0};const s=x.bind({});s.args={Input:V};s.parameters={useEmotion:!1};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
  </>`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,d,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
  </>`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const H=["Emotion","Class"];export{s as Class,r as Emotion,H as __namedExportsOrder,O as default};
//# sourceMappingURL=Input.stories-71bd813a.js.map
