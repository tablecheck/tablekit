import{j as r,a as x,F as h}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";import{A as m,a as k,b as C,c as v,d as M,e as g}from"./TextArea-18216739.js";import"./index-b6937ee2.js";import{A as $}from"./Tooltip-c1347577.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8c426718.js";import"./index-4d501b15.js";import"./_commonjsHelpers-725317a4.js";const u=["tertiary","ghost","success","info","error","warning","neutral"],f=[{key:"icon-title-close",title:"Icon, title, and close button",onClose:()=>{}},{key:"title-close",title:"Title and close button",icon:null,onClose:()=>{}},{key:"icon-title",title:"Icon and title"},{key:"title",title:"Title",icon:null},{key:"icon-close",onClose:()=>{}},{key:"close",icon:null,onClose:()=>{}},{key:"icon"},{key:"text-only",icon:null}],F={title:"Components/Alert",component:m,parameters:{...k,variants:u,auxiliaryClassNames:["alert-icon"],auxiliaryComponents:[C,v,M,g]}},y=({Alert:d})=>r(h,{children:f.map(({key:a,...A})=>u.map(o=>x(d,{"data-variant":o,"data-layout":a,...A,children:[r("p",{children:"More text here"}),r("p",{children:"More text here"}),r("p",{children:"More text here"})]},`${o}-${a}`)))}),e=y.bind({});e.args={Alert:m};e.parameters={useEmotion:!0};const t=y.bind({});t.args={Alert:$};t.parameters={useEmotion:!1};var n,s,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
//# sourceMappingURL=Alert.stories-507d898b.js.map
