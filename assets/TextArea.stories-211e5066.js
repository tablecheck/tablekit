import{a as e,j as F,F as T}from"./emotion-react-jsx-runtime.browser.esm-171f6fb8.js";import{a3 as f,bB as k,a5 as b,a6 as z,a7 as C,bC as P,bD as R,bE as E,ao as i}from"./TextArea-8c932d0e.js";import{r as n}from"./index-d8ade8ea.js";import{G as w}from"./Tooltip-07c5a478.js";import{C as N}from"./bucket-2-37a73cbd.js";import{F as S}from"./bucket-5-1bcf3978.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-04c27282.js";import"./_commonjsHelpers-042e6b4d.js";import"./iconPropTypes-201665c4-d9d6f432.js";import"./index-4d501b15.js";const h=[{title:"Default"},{title:"With Value",defaultValue:`Some Content
On two lines`},{title:"Focus","data-pseudo":"focus"},{title:"Disabled","data-variant":"disabled"},{title:"Error","data-variant":"error"},{title:"Stretch","data-stretch":!0}],H={title:"Components/TextArea",component:f,parameters:{variants:h.map(({title:t})=>t),variantWidth:"280px",...k,auxiliaryComponents:[b,z,C],auxiliaryClassNames:[P,R,E]}},v=t=>{const a=e(N,{size:i(t)}),o=e(S,{size:i(t)});return[{},{iconAfter:a},{iconBefore:o},{iconBefore:o,iconAfter:a},{suffix:e("span",{children:".com"})},{suffix:e("span",{children:"@tablecheck.com"}),iconBefore:o,"data-stretch":!0},{prefix:e("span",{children:"EN"})},{prefix:e("span",{children:"ZH-CN"}),iconAfter:a}]},u=({TextArea:t})=>e(T,{children:["small","medium","large"].map(a=>F(n.Fragment,{children:[e("h4",{children:a}),v(a).map((o,g)=>e(n.Fragment,{children:h.map(({title:A,...y})=>e(t,{...y,...o,placeholder:"Placeholder","data-size":a},A))},g))]},a))}),r=u.bind({});r.args={TextArea:f};r.parameters={useEmotion:!0};const s=u.bind({});s.args={TextArea:w};s.parameters={useEmotion:!1};var m,c,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`({
  TextArea
}) => <>
    {(['small', 'medium', 'large'] as const).map(size => <React.Fragment key={size}>
        <h4>{size}</h4>
        {getPropRows(size).map((withProps, index) =>
    // eslint-disable-next-line react/no-array-index-key
    <React.Fragment key={index}>
            {contentVariants.map(({
        title: key,
        ...props
      }) => <TextArea key={key} {...props} {...withProps} // suffix, prefix, iconBefore, iconAfter
      placeholder="Placeholder" data-size={size} />)}
          </React.Fragment>)}
      </React.Fragment>)}
  </>`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,d,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`({
  TextArea
}) => <>
    {(['small', 'medium', 'large'] as const).map(size => <React.Fragment key={size}>
        <h4>{size}</h4>
        {getPropRows(size).map((withProps, index) =>
    // eslint-disable-next-line react/no-array-index-key
    <React.Fragment key={index}>
            {contentVariants.map(({
        title: key,
        ...props
      }) => <TextArea key={key} {...props} {...withProps} // suffix, prefix, iconBefore, iconAfter
      placeholder="Placeholder" data-size={size} />)}
          </React.Fragment>)}
      </React.Fragment>)}
  </>`,...(x=(d=s.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const Z=["Emotion","Class"];export{s as Class,r as Emotion,Z as __namedExportsOrder,H as default};
//# sourceMappingURL=TextArea.stories-211e5066.js.map
