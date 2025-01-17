import{j as s,a as h,F as L}from"./emotion-react-jsx-runtime.browser.esm-3699e87e.js";import{s as k,o as b,p as E,q as v}from"./TextArea-7e707b76.js";import"./index-d8ade8ea.js";import{C as j,d as w}from"./Tooltip-ae270456.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7e8b2c4e.js";import"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";const u="indeterminate",C=["Default","Hover","Focus","Disabled"],g=[!1,!0,u],S=k.find(e=>e.includes("checkbox")),F=e=>e===!0?"☑":e===!1?"☐":"-",q={title:"Components/Checkbox",component:b,parameters:{...E,variants:C,auxiliarySelectors:[S]}},f=({Checkbox:e,LabelComponent:x})=>s(L,{children:g.map(n=>C.map(o=>h(x,{children:[s(e,{"data-pseudo":o.toLowerCase(),disabled:o.toLowerCase()==="disabled",ref:r=>{r&&(n===u?r.indeterminate=!0:r.checked=n)}}),o," ",F(n)]})))}),t=f.bind({});t.args={Checkbox:b,LabelComponent:v};t.parameters={useEmotion:!0};const a=f.bind({});a.args={Checkbox:j,LabelComponent:w};a.parameters={useEmotion:!1};var i,m,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`({
  Checkbox,
  LabelComponent
}) => <>
    {states.map(state => contentVariants.map(variant => <LabelComponent>
          <Checkbox data-pseudo={variant.toLowerCase()} disabled={variant.toLowerCase() === 'disabled'} ref={(ref: undefined | HTMLInputElement) => {
      if (!ref) return;
      if (state === indeterminate) {
        ref.indeterminate = true;
      } else {
        ref.checked = state;
      }
    }} />
          {variant} {textEmoji(state)}
        </LabelComponent>))}
  </>`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,p,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`({
  Checkbox,
  LabelComponent
}) => <>
    {states.map(state => contentVariants.map(variant => <LabelComponent>
          <Checkbox data-pseudo={variant.toLowerCase()} disabled={variant.toLowerCase() === 'disabled'} ref={(ref: undefined | HTMLInputElement) => {
      if (!ref) return;
      if (state === indeterminate) {
        ref.indeterminate = true;
      } else {
        ref.checked = state;
      }
    }} />
          {variant} {textEmoji(state)}
        </LabelComponent>))}
  </>`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const y=["Emotion","Class"];export{a as Class,t as Emotion,y as __namedExportsOrder,q as default};
