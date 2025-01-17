import{j as o,a as i,F as g}from"./emotion-react-jsx-runtime.browser.esm-3699e87e.js";import{a8 as d,a9 as S}from"./TextArea-7e707b76.js";import{r as C}from"./index-d8ade8ea.js";import{m as L}from"./Tooltip-ae270456.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7e8b2c4e.js";import"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";const O=["Default","Hover","Focus","Error","Disabled"],x={title:"Components/Select",component:d,parameters:{variants:O,...S}},u=({Select:h})=>o(g,{children:["small","medium","large"].map(a=>i(C.Fragment,{children:[o("h4",{children:a}),O.map(n=>i(h,{"data-variant":n.toLocaleLowerCase(),"data-pseudo":n.toLowerCase(),disabled:n.toLowerCase()==="disabled","data-size":a,children:[o("option",{children:"Option 1"}),o("option",{children:"Option 2"}),o("option",{children:"Option 3"}),o("option",{children:"Option 4"}),o("option",{children:"Option 5"}),o("option",{children:"Option 6"})]}))]},a))}),t=u.bind({});t.args={Select:d};t.parameters={useEmotion:!0};const e=u.bind({});e.args={Select:L};e.parameters={useEmotion:!1};var r,s,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
  Select
}) => <>
    {(['small', 'medium', 'large'] as const).map(size => <React.Fragment key={size}>
        <h4>{size}</h4>
        {contentVariants.map(variant => <Select data-variant={variant.toLocaleLowerCase()} data-pseudo={variant.toLowerCase()} disabled={variant.toLowerCase() === 'disabled'} data-size={size}>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
            <option>Option 6</option>
          </Select>)}
      </React.Fragment>)}
  </>`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,m,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`({
  Select
}) => <>
    {(['small', 'medium', 'large'] as const).map(size => <React.Fragment key={size}>
        <h4>{size}</h4>
        {contentVariants.map(variant => <Select data-variant={variant.toLocaleLowerCase()} data-pseudo={variant.toLowerCase()} disabled={variant.toLowerCase() === 'disabled'} data-size={size}>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
            <option>Option 6</option>
          </Select>)}
      </React.Fragment>)}
  </>`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const R=["Emotion","Class"];export{e as Class,t as Emotion,R as __namedExportsOrder,x as default};
