import{a as r,j as i,F as z}from"./emotion-react-jsx-runtime.browser.esm-171f6fb8.js";import{B as h,i as f,v as x}from"./TextArea-8c932d0e.js";import{r as B}from"./index-d8ade8ea.js";import{B as y}from"./Tooltip-07c5a478.js";import{F as o}from"./bucket-5-1bcf3978.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-04c27282.js";import"./_commonjsHelpers-042e6b4d.js";import"./iconPropTypes-201665c4-d9d6f432.js";import"./index-4d501b15.js";const u=Object.keys(x),_={title:"Components/Badge",component:h,parameters:{...f,variants:u}},v=({Badge:F})=>r(z,{children:["x-large","large","medium","small","x-small"].map(s=>i(B.Fragment,{children:[r("h4",{children:s}),["left","right",!1].map(t=>u.map(n=>i(F,{"data-variant":n,"data-size":s,children:[t==="left"?r(o,{size:s?16:20}):null,"Text",t==="right"?r(o,{size:s?16:20}):null]},n+t)))]},s))}),a=v.bind({});a.args={Badge:h};a.parameters={useEmotion:!0};const e=v.bind({});e.args={Badge:y};e.parameters={useEmotion:!1};var l,m,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
  </>`,...(p=(g=e.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const O=["Emotion","Class"];export{e as Class,a as Emotion,O as __namedExportsOrder,_ as default};
//# sourceMappingURL=Badge.stories-53c48b62.js.map
