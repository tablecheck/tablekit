import{a,j as x,F as k}from"./emotion-react-jsx-runtime.browser.esm-171f6fb8.js";import{A as m,a as h,b as C,c as v,d as M,e as $}from"./TextArea-8c932d0e.js";import"./index-d8ade8ea.js";import{A as f}from"./Tooltip-07c5a478.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-04c27282.js";import"./_commonjsHelpers-042e6b4d.js";const u=["success","info","error","warning","neutral"],g=[{key:"icon-title-close",title:"Icon, title, and close button",onClose:()=>{}},{key:"title-close",title:"Title and close button",icon:null,onClose:()=>{}},{key:"icon-title",title:"Icon and title"},{key:"title",title:"Title",icon:null},{key:"icon-close",onClose:()=>{}},{key:"close",icon:null,onClose:()=>{}},{key:"icon"},{key:"text-only",icon:null}],_={title:"Components/Alert",component:m,parameters:{...h,variants:u,auxiliaryClassNames:["alert-icon"],auxiliaryComponents:[C,v,M,$]}},y=({Alert:d})=>a(k,{children:g.map(({key:r,...A})=>u.map(o=>x(d,{"data-variant":o,"data-layout":r,...A,children:[a("p",{children:"More text here"}),a("p",{children:"More text here"}),a("p",{children:"More text here"})]},`${o}-${r}`)))}),e=y.bind({});e.args={Alert:m};e.parameters={useEmotion:!0};const t=y.bind({});t.args={Alert:f};t.parameters={useEmotion:!1};var n,s,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
  </>`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const F=["Emotion","Class"];export{t as Class,e as Emotion,F as __namedExportsOrder,_ as default};
//# sourceMappingURL=Alert.stories-439a85ba.js.map
