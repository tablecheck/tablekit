import{j as e,F as A}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";import{T as m,U as I}from"./TextArea-572623e6.js";import"./index-b6937ee2.js";import{h as g}from"./Tooltip-ea270642.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8c426718.js";import"./index-4d501b15.js";import"./_commonjsHelpers-725317a4.js";const c=[{id:"1","data-variant":"info",children:"Info"},{id:"2","data-variant":"warning",children:"Warning"},{id:"3","data-variant":"error",children:"Error"},{id:"4","data-variant":"bare",children:"Bare"},{id:"5","data-variant":"disabled",children:"Disabled"}].map(r=>({...r,children:`${r.children} - This very, very long text should correctly show if the columns and wrapping are working correctly`})),x={title:"Components/InputAlert",component:m,parameters:{variants:c.map(r=>r["data-variant"]),...I}},l=({InputAlert:r})=>e(A,{children:c.map(({id:u,...h})=>e(r,{...h},u))}),t=l.bind({});t.args={InputAlert:m};t.parameters={useEmotion:!0};const a=l.bind({});a.args={InputAlert:g};a.parameters={useEmotion:!1};var n,o,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
  InputAlert
}) => <>
    {contentVariants.map(({
    id: key,
    ...props
  }) => <InputAlert key={key} {...props} />)}
  </>`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,p,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`({
  InputAlert
}) => <>
    {contentVariants.map(({
    id: key,
    ...props
  }) => <InputAlert key={key} {...props} />)}
  </>`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const C=["Emotion","Class"];export{a as Class,t as Emotion,C as __namedExportsOrder,x as default};
//# sourceMappingURL=InputAlert.stories-a9296f1a.js.map
