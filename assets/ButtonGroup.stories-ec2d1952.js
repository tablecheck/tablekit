import{a as c,j as u,F as y}from"./emotion-react-jsx-runtime.browser.esm-171f6fb8.js";import{p as F,q as z}from"./TextArea-8c932d0e.js";import{r as h}from"./index-d8ade8ea.js";import{c as A}from"./Tooltip-07c5a478.js";import{F as G}from"./bucket-5-1bcf3978.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-04c27282.js";import"./_commonjsHelpers-042e6b4d.js";import"./iconPropTypes-201665c4-d9d6f432.js";import"./index-4d501b15.js";const v=["Default","Hover","Focus","Focus Before","Focus After","Active"],H={title:"Components/ButtonGroup",component:F,parameters:{...z,variants:v,chromatic:{viewports:[1500]}}},$=["small","medium","large"],B=({ButtonGroup:b})=>c(y,{children:$.map(s=>u(h.Fragment,{children:[c("h4",{children:s}),[-1,0,1,2].map(n=>v.map(e=>c(b,{"data-size":s,children:["icon","text","icon+text"].map((i,t)=>{let r="default";switch(e){case"Default":case"Hover":case"Active":n===-1&&t===1&&(r=e.toLowerCase());break;case"Focus After":case"Focus Before":case"Focus":{(n!==-1&&(e==="Focus"&&t===n||e==="Focus Before"&&t===n-1||e==="Focus After"&&t===n+1)||n===-1&&(e==="Focus"&&t===1||e==="Focus Before"&&t===0||e==="Focus After"&&t===2))&&(r="focus");break}}return u("button",{type:"button","data-pseudo":r,"data-selected":t===n,children:[["icon","icon+text"].includes(i)?c(G,{size:s==="small"?16:20}):null,["text","icon+text"].includes(i)?"Button":null]},`${n}_${i}_${e}_${t}`)})})))]},s))}),a=B.bind({});a.args={ButtonGroup:F};a.parameters={useEmotion:!0};const o=B.bind({});o.args={ButtonGroup:A};o.parameters={useEmotion:!1};var d,l,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`({
  ButtonGroup
}) => <>
    {sizes.map(size => <React.Fragment key={size}>
        <h4>{size}</h4>
        {[-1, 0, 1, 2].map(selectedIndex => contentVariants.map(variant => <ButtonGroup data-size={size}>
              {['icon', 'text', 'icon+text'].map((type, index) => {
        let dataPseudo = 'default';
        switch (variant) {
          case 'Default':
          case 'Hover':
          case 'Active':
            if (selectedIndex === -1 && index === 1) {
              dataPseudo = variant.toLowerCase();
            }
            break;
          case 'Focus After':
          case 'Focus Before':
          case 'Focus':
            {
              if (selectedIndex !== -1 && (variant === 'Focus' && index === selectedIndex || variant === 'Focus Before' && index === selectedIndex - 1 || variant === 'Focus After' && index === selectedIndex + 1)) {
                dataPseudo = 'focus';
              } else if (selectedIndex === -1 && (variant === 'Focus' && index === 1 || variant === 'Focus Before' && index === 0 || variant === 'Focus After' && index === 2)) {
                dataPseudo = 'focus';
              }
              break;
            }
        }
        return <button
        /* eslint-disable-next-line react/no-array-index-key */ key={\`\${selectedIndex}_\${type}_\${variant}_\${index}\`} type="button" data-pseudo={dataPseudo} data-selected={index === selectedIndex}>
                    {['icon', 'icon+text'].includes(type) ? <FavoriteFilled size={size === 'small' ? 16 : 20} /> : null}
                    {['text', 'icon+text'].includes(type) ? 'Button' : null}
                  </button>;
      })}
            </ButtonGroup>))}
      </React.Fragment>)}
  </>`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,f,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`({
  ButtonGroup
}) => <>
    {sizes.map(size => <React.Fragment key={size}>
        <h4>{size}</h4>
        {[-1, 0, 1, 2].map(selectedIndex => contentVariants.map(variant => <ButtonGroup data-size={size}>
              {['icon', 'text', 'icon+text'].map((type, index) => {
        let dataPseudo = 'default';
        switch (variant) {
          case 'Default':
          case 'Hover':
          case 'Active':
            if (selectedIndex === -1 && index === 1) {
              dataPseudo = variant.toLowerCase();
            }
            break;
          case 'Focus After':
          case 'Focus Before':
          case 'Focus':
            {
              if (selectedIndex !== -1 && (variant === 'Focus' && index === selectedIndex || variant === 'Focus Before' && index === selectedIndex - 1 || variant === 'Focus After' && index === selectedIndex + 1)) {
                dataPseudo = 'focus';
              } else if (selectedIndex === -1 && (variant === 'Focus' && index === 1 || variant === 'Focus Before' && index === 0 || variant === 'Focus After' && index === 2)) {
                dataPseudo = 'focus';
              }
              break;
            }
        }
        return <button
        /* eslint-disable-next-line react/no-array-index-key */ key={\`\${selectedIndex}_\${type}_\${variant}_\${index}\`} type="button" data-pseudo={dataPseudo} data-selected={index === selectedIndex}>
                    {['icon', 'icon+text'].includes(type) ? <FavoriteFilled size={size === 'small' ? 16 : 20} /> : null}
                    {['text', 'icon+text'].includes(type) ? 'Button' : null}
                  </button>;
      })}
            </ButtonGroup>))}
      </React.Fragment>)}
  </>`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const R=["Emotion","Class"];export{o as Class,a as Emotion,R as __namedExportsOrder,H as default};
//# sourceMappingURL=ButtonGroup.stories-ec2d1952.js.map
