import{j as e,a as I,F as k}from"./emotion-react-jsx-runtime.browser.esm-3699e87e.js";import{E as h,G as z,H as P,J as C,K as R,L as b,M as E,N as w,O as i,P as N,F as S}from"./TextArea-eb64305e.js";import{r as o}from"./index-d8ade8ea.js";import{I as V}from"./Tooltip-3979159d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7e8b2c4e.js";import"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";const f=[{title:"Default"},{title:"With Value",defaultValue:"Some Content"},{title:"Focus","data-pseudo":"focus"},{title:"Disabled",disabled:!0},{title:"Disabled With Value",disabled:!0,defaultValue:"Some Content"},{title:"Error","data-variant":"error"},{title:"Stretch","data-stretch":!0}],O={title:"Components/Input",component:h,parameters:{variants:f.map(({title:t})=>t),variantWidth:"280px",auxiliaryComponents:[z,P,C],auxiliaryClassNames:[R,b,E],...w}},W=t=>{const a=e(N,{size:i(t)}),s=e(S,{size:i(t)});return[{},{iconAfter:a},{iconBefore:s},{iconBefore:s,iconAfter:a},{suffix:e("span",{children:".com"})},{suffix:e("span",{children:"@tablecheck.com"}),iconBefore:s},{prefix:e("span",{children:"EN"})},{prefix:e("span",{children:"ZH-CN"}),iconAfter:a}]},x=({Input:t})=>e(k,{children:["small","medium","large"].map(a=>I(o.Fragment,{children:[e("h4",{children:a}),W(a).map((s,g)=>e(o.Fragment,{children:f.map(({title:y,...F})=>e(t,{...F,...s,placeholder:"Placeholder","data-size":a},y))},g))]},a))}),n=x.bind({});n.args={Input:h};n.parameters={useEmotion:!0};const r=x.bind({});r.args={Input:V};r.parameters={useEmotion:!1};var p,l,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
  </>`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
  </>`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const _=["Emotion","Class"];export{r as Class,n as Emotion,_ as __namedExportsOrder,O as default};
