import{j as e,a as m,F as N}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";import{_ as C,I as w,z,am as E,an as _,O as x,ao as H}from"./TextArea-6f3d7e7f.js";import{e as T,c as V}from"./index-5b9d7c4d.js";import{R as r}from"./index-b6937ee2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8c426718.js";import"./index-4d501b15.js";import"./InputStructure-d16e97c6.js";import"./Tooltip-28dd9261.js";import"./ThemeProvider-7f121e23.js";import"./emotion-react.browser.esm-d6bfad6b.js";import"./_commonjsHelpers-725317a4.js";var l,p,j=["children","size"],M=r.forwardRef(function(a,i){var o=a.children,c=a.size,d=c===void 0?16:c,y=C(a,j);return r.createElement(w,z({width:d,height:d,ref:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},y),l||(l=r.createElement("path",{d:"M8 18H14V20H8zM8 22H18V24H8z"})),p||(p=r.createElement("path",{d:"M26,4H6A2.0025,2.0025,0,0,0,4,6V26a2.0025,2.0025,0,0,0,2,2H26a2.0025,2.0025,0,0,0,2-2V6A2.0025,2.0025,0,0,0,26,4ZM18,6v4H14V6ZM6,26V6h6v6h8V6h6l.0012,20Z"})),o)});const P=[void 0,"single","dismissed","basic"],S=Object.keys(H),G={title:"Components/Banner",component:E,parameters:{..._}},g=({components:s})=>e(N,{children:P.map(a=>S.map(i=>{const o=a==="dismissed"||a==="basic";return m(s.Banner,{"data-variant":i,children:[a!=="basic"&&e("div",{className:"banner-icon",children:e(M,{size:32})}),e("h4",{className:"banner-title",children:"Tease usefull information"}),o&&e("div",{className:"banner-close",children:e(x,{size:24})}),e("aside",{className:"banner-content",children:"Educate the user on this area, describe what needs to be done and how to approach it."}),!o&&m("div",{className:"banner-actions",children:[a!=="single"&&e(s.Button,{"data-variant":"secondary",children:"Button"}),e(s.Button,{"data-variant":"ghost",children:"Button"})]})]})}))}),n=g.bind({});n.args={components:T};n.parameters={useEmotion:!0};const t=g.bind({});t.args={components:V};t.parameters={useEmotion:!1};var h,u,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
  </>`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var b,B,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`({
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
  </>`,...(f=(B=t.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};const J=["Emotion","Class"];export{t as Class,n as Emotion,J as __namedExportsOrder,G as default};
//# sourceMappingURL=Banner.stories-bc81f78c.js.map
