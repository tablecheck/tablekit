import{j as n,a as m,F as N}from"./emotion-react-jsx-runtime.browser.esm-3699e87e.js";import{_ as C,I as w,D as z,ao as E,ap as x,P as H,aq as T}from"./TextArea-7188b12b.js";import{e as V,c as _}from"./index-9879b0d6.js";import{R as r}from"./index-d8ade8ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7e8b2c4e.js";import"./index-4d501b15.js";import"./InputStructure-ec4fe6e8.js";import"./Tooltip-a3537cc1.js";import"./ThemeProvider-ab0962b5.js";import"./emotion-react.browser.esm-e172f3ff.js";import"./_commonjsHelpers-042e6b4d.js";var l,p,j=["children","size"],P=r.forwardRef(function(e,i){var o=e.children,c=e.size,d=c===void 0?16:c,y=C(e,j);return r.createElement(w,z({width:d,height:d,ref:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},y),l||(l=r.createElement("path",{d:"M8 18H14V20H8zM8 22H18V24H8z"})),p||(p=r.createElement("path",{d:"M26,4H6A2.0025,2.0025,0,0,0,4,6V26a2.0025,2.0025,0,0,0,2,2H26a2.0025,2.0025,0,0,0,2-2V6A2.0025,2.0025,0,0,0,26,4ZM18,6v4H14V6ZM6,26V6h6v6h8V6h6l.0012,20Z"})),o)});const M=[void 0,"single","dismissed","basic"],S=Object.keys(T),G={title:"Components/Banner",component:E,parameters:{...x}},g=({components:s})=>n(N,{children:M.map(e=>S.map(i=>{const o=e==="dismissed"||e==="basic";return m(s.Banner,{"data-variant":i,children:[e!=="basic"&&n("div",{className:"banner-icon",children:n(P,{size:32})}),n("h4",{className:"banner-title",children:"Tease usefull information"}),o&&n("div",{className:"banner-close",children:n(H,{size:24})}),n("aside",{className:"banner-content",children:"Educate the user on this area, describe what needs to be done and how to approach it."}),!o&&m("div",{className:"banner-actions",children:[e!=="single"&&n(s.Button,{"data-variant":"secondary",children:"Button"}),n(s.Button,{"data-variant":"ghost",children:"Button"})]})]})}))}),a=g.bind({});a.args={components:V};a.parameters={useEmotion:!0};const t=g.bind({});t.args={components:_};t.parameters={useEmotion:!1};var h,u,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`({
  components
}) => <>
    {bannerTypes.map(type => variants.map(variant => {
    const hasCloseBtn = type === 'dismissed' || type === 'basic';
    return <components.Banner data-variant={variant}>
            {type !== 'basic' && <div className="banner-icon">
                <Product size={32} />
              </div>}
            <h4 className="banner-title">Tease usefull information</h4>
            {hasCloseBtn && <div className="banner-close">
                <Close size={24} />
              </div>}
            <aside className="banner-content">
              Educate the user on this area, describe what needs to be done and
              how to approach it.
            </aside>
            {!hasCloseBtn && <div className="banner-actions">
                {type !== 'single' && <components.Button data-variant="secondary">
                    Button
                  </components.Button>}
                <components.Button data-variant="ghost">
                  Button
                </components.Button>
              </div>}
          </components.Banner>;
  }))}
  </>`,...(v=(u=a.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var b,B,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`({
  components
}) => <>
    {bannerTypes.map(type => variants.map(variant => {
    const hasCloseBtn = type === 'dismissed' || type === 'basic';
    return <components.Banner data-variant={variant}>
            {type !== 'basic' && <div className="banner-icon">
                <Product size={32} />
              </div>}
            <h4 className="banner-title">Tease usefull information</h4>
            {hasCloseBtn && <div className="banner-close">
                <Close size={24} />
              </div>}
            <aside className="banner-content">
              Educate the user on this area, describe what needs to be done and
              how to approach it.
            </aside>
            {!hasCloseBtn && <div className="banner-actions">
                {type !== 'single' && <components.Button data-variant="secondary">
                    Button
                  </components.Button>}
                <components.Button data-variant="ghost">
                  Button
                </components.Button>
              </div>}
          </components.Banner>;
  }))}
  </>`,...(f=(B=t.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};const J=["Emotion","Class"];export{t as Class,a as Emotion,J as __namedExportsOrder,G as default};
