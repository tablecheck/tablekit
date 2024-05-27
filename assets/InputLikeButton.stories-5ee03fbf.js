import{a as e,j as p,F as B}from"./emotion-react-jsx-runtime.browser.esm-171f6fb8.js";import{O as y,ba as L,ao as m}from"./TextArea-8c932d0e.js";import{r as h}from"./index-d8ade8ea.js";import{q as F}from"./Tooltip-07c5a478.js";import{C as l}from"./bucket-2-37a73cbd.js";import{F as c}from"./bucket-5-1bcf3978.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-04c27282.js";import"./_commonjsHelpers-042e6b4d.js";import"./iconPropTypes-201665c4-d9d6f432.js";import"./index-4d501b15.js";const o=[{name:"Default"},{name:"Hover","data-pseudo":"hover"},{name:"Active","data-pseudo":"active"},{name:"Focus","data-pseudo":"focus"},{name:"Disabled","data-variant":"disabled"},{name:"Error","data-variant":"error"},{name:"Stretch","data-stretch":!0}],_={title:"Components/InputLikeButton",component:y,parameters:{variants:o,variantWidth:"280px",...L}},g=({InputLikeButton:r})=>e(B,{children:["small","medium","large"].map(t=>p(h.Fragment,{children:[e("h4",{children:t}),o.map(({name:n,...a})=>e(r,{...a,"data-size":t,children:"Click Me!"},n)),o.map(({name:n,...a})=>p(r,{...a,"data-size":t,children:[e("span",{children:"Click Me!"}),e(l,{size:m("small")})]},n)),o.map(({name:n,...a})=>p(r,{...a,"data-size":t,children:[e(c,{size:m("small")}),e("span",{children:"Click Me!"})]},n)),o.map(({name:n,...a})=>p(r,{...a,"data-size":t,children:[e(c,{size:m("small")}),e("span",{children:"Click Me!"}),e(l,{size:m("small")})]},n))]},t))}),s=g.bind({});s.args={InputLikeButton:y};s.parameters={useEmotion:!0};const i=g.bind({});i.args={InputLikeButton:F};i.parameters={useEmotion:!1};var u,k,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`({
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
  </>`,...(I=(C=i.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const D=["Emotion","Class"];export{i as Class,s as Emotion,D as __namedExportsOrder,_ as default};
//# sourceMappingURL=InputLikeButton.stories-5ee03fbf.js.map
