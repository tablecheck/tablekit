import{j as c,a as u,F as y}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";import{m as F,n as z,F as h}from"./TextArea-e94462f7.js";import{r as A}from"./index-b6937ee2.js";import{c as G}from"./Tooltip-1f9249c7.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8c426718.js";import"./index-4d501b15.js";import"./_commonjsHelpers-725317a4.js";const v=["Default","Hover","Focus","Focus Before","Focus After","Active"],E={title:"Components/ButtonGroup",component:F,parameters:{...z,variants:v,chromatic:{viewports:[1500]}}},$=["small","medium","large"],B=({ButtonGroup:b})=>c(y,{children:$.map(o=>u(A.Fragment,{children:[c("h4",{children:o}),[-1,0,1,2].map(n=>v.map(e=>c(b,{"data-size":o,children:["icon","text","icon+text"].map((i,t)=>{let r="default";switch(e){case"Default":case"Hover":case"Active":n===-1&&t===1&&(r=e.toLowerCase());break;case"Focus After":case"Focus Before":case"Focus":{(n!==-1&&(e==="Focus"&&t===n||e==="Focus Before"&&t===n-1||e==="Focus After"&&t===n+1)||n===-1&&(e==="Focus"&&t===1||e==="Focus Before"&&t===0||e==="Focus After"&&t===2))&&(r="focus");break}}return u("button",{type:"button","data-pseudo":r,"data-selected":t===n,children:[["icon","icon+text"].includes(i)?c(h,{size:o==="small"?16:20}):null,["text","icon+text"].includes(i)?"Button":null]},`${n}_${i}_${e}_${t}`)})})))]},o))}),a=B.bind({});a.args={ButtonGroup:F};a.parameters={useEmotion:!0};const s=B.bind({});s.args={ButtonGroup:G};s.parameters={useEmotion:!1};var d,l,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
  </>`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,f,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
  </>`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const D=["Emotion","Class"];export{s as Class,a as Emotion,D as __namedExportsOrder,E as default};
//# sourceMappingURL=ButtonGroup.stories-b61800ce.js.map