import{j as e,a as F,F as k}from"./emotion-react-jsx-runtime.browser.esm-3699e87e.js";import{ae as h,af as T,ag as z,ah as P,ai as R,aj as C,ak as b,al as w,O as i,P as E,F as N}from"./TextArea-7e707b76.js";import{r as o}from"./index-d8ade8ea.js";import{T as S}from"./Tooltip-ae270456.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7e8b2c4e.js";import"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";const f=[{title:"Default"},{title:"With Value",defaultValue:`Some Content
On two lines`},{title:"Focus","data-pseudo":"focus"},{title:"Disabled","data-variant":"disabled"},{title:"Error","data-variant":"error"},{title:"Stretch","data-stretch":!0}],I={title:"Components/TextArea",component:h,parameters:{variants:f.map(({title:t})=>t),variantWidth:"280px",...T,auxiliaryComponents:[z,P,R],auxiliaryClassNames:[C,b,w]}},v=t=>{const a=e(E,{size:i(t)}),n=e(N,{size:i(t)});return[{},{iconAfter:a},{iconBefore:n},{iconBefore:n,iconAfter:a},{suffix:e("span",{children:".com"})},{suffix:e("span",{children:"@tablecheck.com"}),iconBefore:n,"data-stretch":!0},{prefix:e("span",{children:"EN"})},{prefix:e("span",{children:"ZH-CN"}),iconAfter:a}]},u=({TextArea:t})=>e(k,{children:["small","medium","large"].map(a=>F(o.Fragment,{children:[e("h4",{children:a}),v(a).map((n,g)=>e(o.Fragment,{children:f.map(({title:y,...A})=>e(t,{...A,...n,placeholder:"Placeholder","data-size":a},y))},g))]},a))}),r=u.bind({});r.args={TextArea:h};r.parameters={useEmotion:!0};const s=u.bind({});s.args={TextArea:S};s.parameters={useEmotion:!1};var c,l,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
  </>`,...(x=(d=s.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const _=["Emotion","Class"];export{s as Class,r as Emotion,_ as __namedExportsOrder,I as default};
