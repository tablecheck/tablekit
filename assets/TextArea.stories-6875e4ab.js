import{j as e,a as F,F as T}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";import{ag as h,ah as k,ai as z,aj as R,ak as P,al as C,am as b,an as w,R as o,S as E,F as S}from"./TextArea-cae9bc42.js";import{r as n}from"./index-b6937ee2.js";import{T as N}from"./Tooltip-4bbad4fb.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8c426718.js";import"./index-4d501b15.js";import"./_commonjsHelpers-725317a4.js";const f=[{title:"Default"},{title:"With Value",defaultValue:`Some Content
On two lines`},{title:"Focus","data-pseudo":"focus"},{title:"Disabled","data-variant":"disabled"},{title:"Error","data-variant":"error"},{title:"Stretch","data-stretch":!0}],I={title:"Components/TextArea",component:h,parameters:{variants:f.map(({title:t})=>t),variantWidth:"280px",...k,auxiliaryComponents:[z,R,P],auxiliaryClassNames:[C,b,w]}},v=t=>{const a=e(E,{size:o(t)}),i=e(S,{size:o(t)});return[{},{iconAfter:a},{iconBefore:i},{iconBefore:i,iconAfter:a},{suffix:e("span",{children:".com"})},{suffix:e("span",{children:"@tablecheck.com"}),iconBefore:i,"data-stretch":!0},{prefix:e("span",{children:"EN"})},{prefix:e("span",{children:"ZH-CN"}),iconAfter:a}]},u=({TextArea:t})=>e(T,{children:["small","medium","large"].map(a=>F(n.Fragment,{children:[e("h4",{children:a}),v(a).map((i,g)=>e(n.Fragment,{children:f.map(({title:A,...y})=>e(t,{...y,...i,placeholder:"Placeholder","data-size":a},A))},g))]},a))}),r=u.bind({});r.args={TextArea:h};r.parameters={useEmotion:!0};const s=u.bind({});s.args={TextArea:N};s.parameters={useEmotion:!1};var c,l,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
  </>`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,d,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
  </>`,...(x=(d=s.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const O=["Emotion","Class"];export{s as Class,r as Emotion,O as __namedExportsOrder,I as default};
//# sourceMappingURL=TextArea.stories-6875e4ab.js.map
