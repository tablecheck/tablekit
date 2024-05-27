import{a as s,j as l,F as f}from"./emotion-react-jsx-runtime.browser.esm-171f6fb8.js";import{m,n as I,o as C,V as R}from"./TextArea-8c932d0e.js";import{r as y}from"./index-d8ade8ea.js";import{b as F}from"./Tooltip-07c5a478.js";import{G as D}from"./bucket-6-e60a0e64.js";import{a as w}from"./bucket-2-37a73cbd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-04c27282.js";import"./_commonjsHelpers-042e6b4d.js";import"./iconPropTypes-201665c4-d9d6f432.js";import"./index-4d501b15.js";const L=Object.keys(C),$={title:"Components/Buttons",component:m,parameters:{...I,variants:L}},u=({Button:r})=>s(f,{children:["small","medium","large"].map(a=>l(y.Fragment,{children:[s("h4",{children:a}),["Button","Icon Left","Icon Right","Active","Hover","Focus","Loading","Disabled"].map(t=>L.map(i=>l(r,{"aria-busy":t==="Loading",disabled:t==="Disabled","data-variant":i,"data-pseudo":t.toLowerCase(),"data-size":a,children:[t==="Icon Left"?s(D,{size:a==="small"?16:20}):null,t,t==="Icon Right"?s(w,{size:a==="small"?16:20}):null]},i)))]},a))}),e=u.bind({});e.args={Button:m};e.parameters={useEmotion:!0};const n=u.bind({});n.args={Button:({"data-variant":r,...a})=>{if(!r)return s(m,{...a});const t=`${r.substring(0,1).toUpperCase()}${r.substring(1).toLowerCase()}`,i=R[t];return s(i,{...a})}};n.parameters={useEmotion:!0,importName:"VariantButton"};const o=u.bind({});o.args={Button:F};o.parameters={useEmotion:!1};var c,d,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`({
  Button
}) => <>
    {(['small', 'medium', 'large'] as const).map(size => <React.Fragment key={size}>
        <h4>{size}</h4>
        {(['Button', 'Icon Left', 'Icon Right', 'Active', 'Hover', 'Focus', 'Loading', 'Disabled'] as const).map(status => variants.map(variant => <Button key={variant} aria-busy={status === 'Loading'} disabled={status === 'Disabled'} data-variant={variant} data-pseudo={status.toLowerCase()} data-size={size}>
              {status === 'Icon Left' ? <Globe size={size === 'small' ? 16 : 20} /> : null}
              {status}
              {status === 'Icon Right' ? <ChevronDown size={size === 'small' ? 16 : 20} /> : null}
            </Button>))}
      </React.Fragment>)}
  </>`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,b,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`({
  Button
}) => <>
    {(['small', 'medium', 'large'] as const).map(size => <React.Fragment key={size}>
        <h4>{size}</h4>
        {(['Button', 'Icon Left', 'Icon Right', 'Active', 'Hover', 'Focus', 'Loading', 'Disabled'] as const).map(status => variants.map(variant => <Button key={variant} aria-busy={status === 'Loading'} disabled={status === 'Disabled'} data-variant={variant} data-pseudo={status.toLowerCase()} data-size={size}>
              {status === 'Icon Left' ? <Globe size={size === 'small' ? 16 : 20} /> : null}
              {status}
              {status === 'Icon Right' ? <ChevronDown size={size === 'small' ? 16 : 20} /> : null}
            </Button>))}
      </React.Fragment>)}
  </>`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var z,h,B;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`({
  Button
}) => <>
    {(['small', 'medium', 'large'] as const).map(size => <React.Fragment key={size}>
        <h4>{size}</h4>
        {(['Button', 'Icon Left', 'Icon Right', 'Active', 'Hover', 'Focus', 'Loading', 'Disabled'] as const).map(status => variants.map(variant => <Button key={variant} aria-busy={status === 'Loading'} disabled={status === 'Disabled'} data-variant={variant} data-pseudo={status.toLowerCase()} data-size={size}>
              {status === 'Icon Left' ? <Globe size={size === 'small' ? 16 : 20} /> : null}
              {status}
              {status === 'Icon Right' ? <ChevronDown size={size === 'small' ? 16 : 20} /> : null}
            </Button>))}
      </React.Fragment>)}
  </>`,...(B=(h=o.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};const O=["Emotion","EmotionVariants","Class"];export{o as Class,e as Emotion,n as EmotionVariants,O as __namedExportsOrder,$ as default};
//# sourceMappingURL=Button.stories-1b4f3a87.js.map
