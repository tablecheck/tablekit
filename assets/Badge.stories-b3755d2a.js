import{j as t,a as i,F as z}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";import{B as h,i as f,v as x,F as l}from"./TextArea-c5e6566b.js";import{r as B}from"./index-b6937ee2.js";import{B as y}from"./Tooltip-fb73b045.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8c426718.js";import"./index-4d501b15.js";import"./_commonjsHelpers-725317a4.js";const u=Object.keys(x),C={title:"Components/Badge",component:h,parameters:{...f,variants:u}},v=({Badge:F})=>t(z,{children:["x-large","large","medium","small","x-small"].map(s=>i(B.Fragment,{children:[t("h4",{children:s}),["left","right",!1].map(r=>u.map(n=>i(F,{"data-variant":n,"data-size":s,children:[r==="left"?t(l,{size:s?16:20}):null,"Text",r==="right"?t(l,{size:s?16:20}):null]},n+r)))]},s))}),a=v.bind({});a.args={Badge:h};a.parameters={useEmotion:!0};const e=v.bind({});e.args={Badge:y};e.parameters={useEmotion:!1};var o,m,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`({
  Badge
}) => <>
    {(['x-large', 'large', 'medium', 'small', 'x-small'] as const).map(size => <React.Fragment key={size}>
          <h4>{size}</h4>
          {['left', 'right', false].map(hasIcon => variants.map(variant => <Badge key={variant + hasIcon} data-variant={variant} data-size={size}>
                {hasIcon === 'left' ? <FavoriteFilled size={size ? 16 : 20} /> : null}
                Text
                {hasIcon === 'right' ? <FavoriteFilled size={size ? 16 : 20} /> : null}
              </Badge>))}
        </React.Fragment>)}
  </>`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,g,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`({
  Badge
}) => <>
    {(['x-large', 'large', 'medium', 'small', 'x-small'] as const).map(size => <React.Fragment key={size}>
          <h4>{size}</h4>
          {['left', 'right', false].map(hasIcon => variants.map(variant => <Badge key={variant + hasIcon} data-variant={variant} data-size={size}>
                {hasIcon === 'left' ? <FavoriteFilled size={size ? 16 : 20} /> : null}
                Text
                {hasIcon === 'right' ? <FavoriteFilled size={size ? 16 : 20} /> : null}
              </Badge>))}
        </React.Fragment>)}
  </>`,...(p=(g=e.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const S=["Emotion","Class"];export{e as Class,a as Emotion,S as __namedExportsOrder,C as default};
//# sourceMappingURL=Badge.stories-b3755d2a.js.map
