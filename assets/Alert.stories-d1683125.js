import{j as a,a as x,F as k}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";import{A as m,a as h,b as C,c as v,d as M,e as $}from"./TextArea-7563384f.js";import"./index-b6937ee2.js";import{A as f}from"./Tooltip-8c4bfa04.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8c426718.js";import"./index-4d501b15.js";import"./_commonjsHelpers-725317a4.js";const u=["success","info","error","warning","neutral"],g=[{key:"icon-title-close",title:"Icon, title, and close button",onClose:()=>{}},{key:"title-close",title:"Title and close button",icon:null,onClose:()=>{}},{key:"icon-title",title:"Icon and title"},{key:"title",title:"Title",icon:null},{key:"icon-close",onClose:()=>{}},{key:"close",icon:null,onClose:()=>{}},{key:"icon"},{key:"text-only",icon:null}],F={title:"Components/Alert",component:m,parameters:{...h,variants:u,auxiliaryClassNames:["alert-icon"],auxiliaryComponents:[C,v,M,$]}},y=({Alert:d})=>a(k,{children:g.map(({key:r,...A})=>u.map(o=>x(d,{"data-variant":o,"data-layout":r,...A,children:[a("p",{children:"More text here"}),a("p",{children:"More text here"}),a("p",{children:"More text here"})]},`${o}-${r}`)))}),e=y.bind({});e.args={Alert:m};e.parameters={useEmotion:!0};const t=y.bind({});t.args={Alert:f};t.parameters={useEmotion:!1};var n,s,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  Alert
}) => <>
    {layouts.map(({
    key,
    ...layout
  }) => contentVariants.map(variant => <Alert key={\`\${variant}-\${key}\`} data-variant={variant} data-layout={key} {...layout}>
          <p>More text here</p>
          <p>More text here</p>
          <p>More text here</p>
        </Alert>))}
  </>`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var i,c,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`({
  Alert
}) => <>
    {layouts.map(({
    key,
    ...layout
  }) => contentVariants.map(variant => <Alert key={\`\${variant}-\${key}\`} data-variant={variant} data-layout={key} {...layout}>
          <p>More text here</p>
          <p>More text here</p>
          <p>More text here</p>
        </Alert>))}
  </>`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const S=["Emotion","Class"];export{t as Class,e as Emotion,S as __namedExportsOrder,F as default};
//# sourceMappingURL=Alert.stories-d1683125.js.map
