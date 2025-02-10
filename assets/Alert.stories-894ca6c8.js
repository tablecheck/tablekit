import{j as a,a as x,F as h}from"./emotion-react-jsx-runtime.browser.esm-3699e87e.js";import{A as m,a as k,b as C,c as v,d as M,e as g}from"./TextArea-ab224c86.js";import"./index-d8ade8ea.js";import{A as $}from"./Tooltip-8f61c5b7.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7e8b2c4e.js";import"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";const u=["tertiary","ghost","success","info","error","warning","neutral"],f=[{key:"icon-title-close",title:"Icon, title, and close button",onClose:()=>{}},{key:"title-close",title:"Title and close button",icon:null,onClose:()=>{}},{key:"icon-title",title:"Icon and title"},{key:"title",title:"Title",icon:null},{key:"icon-close",onClose:()=>{}},{key:"close",icon:null,onClose:()=>{}},{key:"icon"},{key:"text-only",icon:null}],S={title:"Components/Alert",component:m,parameters:{...k,variants:u,auxiliaryClassNames:["alert-icon"],auxiliaryComponents:[C,v,M,g]}},y=({Alert:d})=>a(h,{children:f.map(({key:r,...A})=>u.map(o=>x(d,{"data-variant":o,"data-layout":r,...A,children:[a("p",{children:"More text here"}),a("p",{children:"More text here"}),a("p",{children:"More text here"})]},`${o}-${r}`)))}),e=y.bind({});e.args={Alert:m};e.parameters={useEmotion:!0};const t=y.bind({});t.args={Alert:$};t.parameters={useEmotion:!1};var n,s,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
  </>`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const _=["Emotion","Class"];export{t as Class,e as Emotion,_ as __namedExportsOrder,S as default};
