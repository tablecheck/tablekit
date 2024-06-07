import{j as e,a as p,F as B}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";import{W as y,X as L,S as l,R as m,F as c}from"./TextArea-0401bf7a.js";import{r as h}from"./index-b6937ee2.js";import{i as F}from"./Tooltip-fa75cd69.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8c426718.js";import"./index-4d501b15.js";import"./_commonjsHelpers-725317a4.js";const o=[{name:"Default"},{name:"Hover","data-pseudo":"hover"},{name:"Active","data-pseudo":"active"},{name:"Focus","data-pseudo":"focus"},{name:"Disabled","data-variant":"disabled"},{name:"Error","data-variant":"error"},{name:"Stretch","data-stretch":!0}],x={title:"Components/InputLikeButton",component:y,parameters:{variants:o,variantWidth:"280px",...L}},g=({InputLikeButton:r})=>e(B,{children:["small","medium","large"].map(t=>p(h.Fragment,{children:[e("h4",{children:t}),o.map(({name:n,...a})=>e(r,{...a,"data-size":t,children:"Click Me!"},n)),o.map(({name:n,...a})=>p(r,{...a,"data-size":t,children:[e("span",{children:"Click Me!"}),e(l,{size:m("small")})]},n)),o.map(({name:n,...a})=>p(r,{...a,"data-size":t,children:[e(c,{size:m("small")}),e("span",{children:"Click Me!"})]},n)),o.map(({name:n,...a})=>p(r,{...a,"data-size":t,children:[e(c,{size:m("small")}),e("span",{children:"Click Me!"}),e(l,{size:m("small")})]},n))]},t))}),s=g.bind({});s.args={InputLikeButton:y};s.parameters={useEmotion:!0};const i=g.bind({});i.args={InputLikeButton:F};i.parameters={useEmotion:!1};var u,k,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`({
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
  </>`,...(d=(k=s.parameters)==null?void 0:k.docs)==null?void 0:d.source}}};var z,I,C;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`({
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
  </>`,...(C=(I=i.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const R=["Emotion","Class"];export{i as Class,s as Emotion,R as __namedExportsOrder,x as default};
//# sourceMappingURL=InputLikeButton.stories-f5dfef2f.js.map
