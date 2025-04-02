import{j as e,a as A,F}from"./emotion-react-jsx-runtime.browser.esm-3699e87e.js";import{ae as u,af as L,ag as k,ah as z,ai as P,aj as C,ak as R,al as S,O as o,P as b,F as E}from"./TextArea-36ecd356.js";import{r as i}from"./index-d8ade8ea.js";import{T as V}from"./Tooltip-82ee743f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7e8b2c4e.js";import"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";const h=[{title:"Default"},{title:"With Value",defaultValue:`Some Content
On two lines`},{title:"Focus","data-pseudo":"focus"},{title:"Disabled","data-variant":"disabled"},{title:"Error","data-variant":"error"},{title:"Stretch","data-stretch":!0}],D={title:"Components/TextArea",component:u,parameters:{variants:h.map(({title:t})=>t),variantWidth:"280px",...L,auxiliaryComponents:[k,z,P],auxiliaryClassNames:[C,R,S]}},W=t=>{const a=e(b,{size:o(t)}),r=e(E,{size:o(t)});return[{},{iconAfter:a},{iconBefore:r},{iconBefore:r,iconAfter:a},{suffix:e("span",{children:".com"})},{suffix:e("span",{children:"@tablecheck.com"}),iconBefore:r,"data-stretch":!0},{prefix:e("span",{children:"EN"})},{prefix:e("span",{children:"ZH-CN"}),iconAfter:a},{suffix:e("span",{children:".com"}),defaultValue:"LongLongLongLongTextWithoutSpaces"},{suffix:e("span",{children:"@tablecheck.com"}),iconBefore:r,"data-stretch":!0,defaultValue:"LongLongLongLongTextWithoutSpaces"},{prefix:e("span",{children:"EN"}),defaultValue:"LongLongLongLongTextWithoutSpaces"},{prefix:e("span",{children:"ZH-CN"}),iconAfter:a,defaultValue:"LongLongLongLongTextWithoutSpaces"}]},f=({TextArea:t})=>e(F,{children:["small","medium","large"].map(a=>A(i.Fragment,{children:[e("h4",{children:a}),W(a).map((r,g)=>e(i.Fragment,{children:h.map(({title:T,...y})=>e(t,{...y,...r,placeholder:"Placeholder","data-size":a},T))},g))]},a))}),n=f.bind({});n.args={TextArea:u};n.parameters={useEmotion:!0};const s=f.bind({});s.args={TextArea:V};s.parameters={useEmotion:!1};var c,l,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
  </>`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,d,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
  </>`,...(x=(d=s.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const H=["Emotion","Class"];export{s as Class,n as Emotion,H as __namedExportsOrder,D as default};
