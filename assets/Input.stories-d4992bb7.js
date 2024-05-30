import{j as e,a as I,F as k}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";import{D as h,E as z,G as C,H as P,J as R,K as b,L as E,M as w,N as n,O as N,F as S}from"./TextArea-6f3d7e7f.js";import{r as o}from"./index-b6937ee2.js";import{I as V}from"./Tooltip-28dd9261.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8c426718.js";import"./index-4d501b15.js";import"./_commonjsHelpers-725317a4.js";const f=[{title:"Default"},{title:"With Value",defaultValue:"Some Content"},{title:"Focus","data-pseudo":"focus"},{title:"Disabled","data-variant":"disabled"},{title:"Disabled With Value","data-variant":"disabled",defaultValue:"Some Content"},{title:"Error","data-variant":"error"},{title:"Stretch","data-stretch":!0}],H={title:"Components/Input",component:h,parameters:{variants:f.map(({title:t})=>t),variantWidth:"280px",auxiliaryComponents:[z,C,P],auxiliaryClassNames:[R,b,E],...w}},v=t=>{const a=e(N,{size:n(t)}),i=e(S,{size:n(t)});return[{},{iconAfter:a},{iconBefore:i},{iconBefore:i,iconAfter:a},{suffix:e("span",{children:".com"})},{suffix:e("span",{children:"@tablecheck.com"}),iconBefore:i},{prefix:e("span",{children:"EN"})},{prefix:e("span",{children:"ZH-CN"}),iconAfter:a}]},x=({Input:t})=>e(k,{children:["small","medium","large"].map(a=>I(o.Fragment,{children:[e("h4",{children:a}),v(a).map((i,g)=>e(o.Fragment,{children:f.map(({title:y,...F})=>e(t,{...F,...i,placeholder:"Placeholder","data-size":a},y))},g))]},a))}),r=x.bind({});r.args={Input:h};r.parameters={useEmotion:!0};const s=x.bind({});s.args={Input:V};s.parameters={useEmotion:!1};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
  </>`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const O=["Emotion","Class"];export{s as Class,r as Emotion,O as __namedExportsOrder,H as default};
//# sourceMappingURL=Input.stories-d4992bb7.js.map
