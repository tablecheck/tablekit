import{j as e,a as p,F as B}from"./emotion-react-jsx-runtime.browser.esm-3699e87e.js";import{S as y,T as L,P as l,O as m,F as c}from"./TextArea-7188b12b.js";import{r as h}from"./index-d8ade8ea.js";import{i as F}from"./Tooltip-a3537cc1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7e8b2c4e.js";import"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";const o=[{name:"Default"},{name:"Hover","data-pseudo":"hover"},{name:"Active","data-pseudo":"active"},{name:"Focus","data-pseudo":"focus"},{name:"Disabled","data-variant":"disabled"},{name:"Error","data-variant":"error"},{name:"Stretch","data-stretch":!0}],x={title:"Components/InputLikeButton",component:y,parameters:{variants:o,variantWidth:"280px",...L}},g=({InputLikeButton:r})=>e(B,{children:["small","medium","large"].map(t=>p(h.Fragment,{children:[e("h4",{children:t}),o.map(({name:n,...a})=>e(r,{...a,"data-size":t,children:"Click Me!"},n)),o.map(({name:n,...a})=>p(r,{...a,"data-size":t,children:[e("span",{children:"Click Me!"}),e(l,{size:m("small")})]},n)),o.map(({name:n,...a})=>p(r,{...a,"data-size":t,children:[e(c,{size:m("small")}),e("span",{children:"Click Me!"})]},n)),o.map(({name:n,...a})=>p(r,{...a,"data-size":t,children:[e(c,{size:m("small")}),e("span",{children:"Click Me!"}),e(l,{size:m("small")})]},n))]},t))}),s=g.bind({});s.args={InputLikeButton:y};s.parameters={useEmotion:!0};const i=g.bind({});i.args={InputLikeButton:F};i.parameters={useEmotion:!1};var u,k,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`({
  InputLikeButton
}) => <>
    {(['small', 'medium', 'large'] as const).map(size => <React.Fragment key={size}>
        <h4>{size}</h4>
        {contentVariants.map(({
      name: key,
      ...props
    }) => <InputLikeButton key={key} {...props} data-size={size}>
            Click Me!
          </InputLikeButton>)}
        {contentVariants.map(({
      name: key,
      ...props
    }) => <InputLikeButton key={key} {...props} data-size={size}>
            <span>Click Me!</span>
            <Close size={getCarbonIconSize('small')} />
          </InputLikeButton>)}
        {contentVariants.map(({
      name: key,
      ...props
    }) => <InputLikeButton key={key} {...props} data-size={size}>
            <FavoriteFilled size={getCarbonIconSize('small')} />
            <span>Click Me!</span>
          </InputLikeButton>)}
        {contentVariants.map(({
      name: key,
      ...props
    }) => <InputLikeButton key={key} {...props} data-size={size}>
            <FavoriteFilled size={getCarbonIconSize('small')} />
            <span>Click Me!</span>
            <Close size={getCarbonIconSize('small')} />
          </InputLikeButton>)}
      </React.Fragment>)}
  </>`,...(d=(k=s.parameters)==null?void 0:k.docs)==null?void 0:d.source}}};var z,C,I;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`({
  InputLikeButton
}) => <>
    {(['small', 'medium', 'large'] as const).map(size => <React.Fragment key={size}>
        <h4>{size}</h4>
        {contentVariants.map(({
      name: key,
      ...props
    }) => <InputLikeButton key={key} {...props} data-size={size}>
            Click Me!
          </InputLikeButton>)}
        {contentVariants.map(({
      name: key,
      ...props
    }) => <InputLikeButton key={key} {...props} data-size={size}>
            <span>Click Me!</span>
            <Close size={getCarbonIconSize('small')} />
          </InputLikeButton>)}
        {contentVariants.map(({
      name: key,
      ...props
    }) => <InputLikeButton key={key} {...props} data-size={size}>
            <FavoriteFilled size={getCarbonIconSize('small')} />
            <span>Click Me!</span>
          </InputLikeButton>)}
        {contentVariants.map(({
      name: key,
      ...props
    }) => <InputLikeButton key={key} {...props} data-size={size}>
            <FavoriteFilled size={getCarbonIconSize('small')} />
            <span>Click Me!</span>
            <Close size={getCarbonIconSize('small')} />
          </InputLikeButton>)}
      </React.Fragment>)}
  </>`,...(I=(C=i.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const R=["Emotion","Class"];export{i as Class,s as Emotion,R as __namedExportsOrder,x as default};
