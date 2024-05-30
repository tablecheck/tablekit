import{j as s,a as l,F as f}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";import{j as m,k as I,l as C,V as R,C as y}from"./TextArea-6f3d7e7f.js";import{r as F}from"./index-b6937ee2.js";import{b as D}from"./Tooltip-28dd9261.js";import{G as w}from"./bucket-6-5310df75.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8c426718.js";import"./index-4d501b15.js";import"./_commonjsHelpers-725317a4.js";const L=Object.keys(C),S={title:"Components/Buttons",component:m,parameters:{...I,variants:L}},u=({Button:r})=>s(f,{children:["small","medium","large"].map(a=>l(F.Fragment,{children:[s("h4",{children:a}),["Button","Icon Left","Icon Right","Active","Hover","Focus","Loading","Disabled"].map(t=>L.map(i=>l(r,{"aria-busy":t==="Loading",disabled:t==="Disabled","data-variant":i,"data-pseudo":t.toLowerCase(),"data-size":a,children:[t==="Icon Left"?s(w,{size:a==="small"?16:20}):null,t,t==="Icon Right"?s(y,{size:a==="small"?16:20}):null]},i)))]},a))}),e=u.bind({});e.args={Button:m};e.parameters={useEmotion:!0};const n=u.bind({});n.args={Button:({"data-variant":r,...a})=>{if(!r)return s(m,{...a});const t=`${r.substring(0,1).toUpperCase()}${r.substring(1).toLowerCase()}`,i=R[t];return s(i,{...a})}};n.parameters={useEmotion:!0,importName:"VariantButton"};const o=u.bind({});o.args={Button:D};o.parameters={useEmotion:!1};var c,d,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
  </>`,...(B=(h=o.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};const _=["Emotion","EmotionVariants","Class"];export{o as Class,e as Emotion,n as EmotionVariants,_ as __namedExportsOrder,S as default};
//# sourceMappingURL=Button.stories-9c2c6e25.js.map
