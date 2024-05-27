import{a as e,j as s,F as L}from"./emotion-react-jsx-runtime.browser.esm-171f6fb8.js";import{a as z}from"./chunk-NX5DM7EF-168aaf13.js";import{S as g,bd as y,be as u,bf as C,bg as E,T as c,U as f,ap as i}from"./TextArea-8c932d0e.js";import"./index-d8ade8ea.js";import{M as v,v as A,u as S}from"./Tooltip-07c5a478.js";import{E as r}from"./bucket-5-1bcf3978.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-04c27282.js";import"./_commonjsHelpers-042e6b4d.js";import"./iconPropTypes-201665c4-d9d6f432.js";import"./index-4d501b15.js";const q={title:"Components/Menu",component:g,parameters:{...y,auxiliaryClassNames:[u,C],auxiliarySelectors:[`.${u}`,E],auxiliaryComponents:[c,f],variants:["Menu","Menu Items","Selected"]}};function m({components:n,isSelected:t}){return s(L,{children:[e("li",{children:e(n.MenuItem,{"data-selected":t,children:"Item"})}),e("li",{children:e(n.MenuItemLink,{"data-selected":t,href:"#",onMouseDown:b=>{b.preventDefault()},children:"Item as link"})}),e("li",{children:e(n.MenuItem,{"data-selected":t,as:"button",onClick:()=>z("button-click")(),children:"Item as button"})}),e("li",{children:s(n.MenuItem,{"data-selected":t,children:[e(r,{size:i("iconSize")}),"Item"]})}),e("li",{children:s(n.MenuItem,{"data-selected":t,"data-variant":"success",children:[e(r,{size:i("iconSize")}),"Success"]})}),e("li",{children:s(n.MenuItem,{"data-selected":t,"data-variant":"info",children:[e(r,{size:i("iconSize")}),"Info"]})}),e("li",{children:s(n.MenuItem,{"data-selected":t,"data-variant":"error",children:[e(r,{size:i("iconSize")}),"Error"]})}),e("li",{children:s(n.MenuItem,{"data-selected":t,"data-variant":"warning",children:[e(r,{size:i("iconSize")}),"Warn"]})})]})}const x=({components:n})=>s(L,{children:[e(n.Menu,{children:e(n.MenuList,{children:e(m,{components:n})})}),e(n.MenuList,{style:{maxHeight:"none"},children:e(m,{components:n})}),e(n.MenuList,{style:{maxHeight:"none"},children:e(m,{components:n,isSelected:!0})})]}),a=x.bind({});a.args={components:{Menu:g,MenuList:f,MenuItem:c,MenuItemLink:c.withComponent("a",{target:"ebqp1uo0"})}};a.parameters={useEmotion:!0};const o=x.bind({});o.args={components:{Menu:v,MenuList:A,MenuItem:S,MenuItemLink:n=>e("a",{...n,className:"menu-item"})}};o.parameters={useEmotion:!1};var l,M,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`({
  components
}) => <>
    <components.Menu>
      <components.MenuList>
        <AllMenuItems components={components} />
      </components.MenuList>
    </components.Menu>
    <components.MenuList style={{
    maxHeight: 'none'
  }}>
      <AllMenuItems components={components} />
    </components.MenuList>
    <components.MenuList style={{
    maxHeight: 'none'
  }}>
      <AllMenuItems components={components} isSelected />
    </components.MenuList>
  </>`,...(d=(M=a.parameters)==null?void 0:M.docs)==null?void 0:d.source}}};var p,h,I;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`({
  components
}) => <>
    <components.Menu>
      <components.MenuList>
        <AllMenuItems components={components} />
      </components.MenuList>
    </components.Menu>
    <components.MenuList style={{
    maxHeight: 'none'
  }}>
      <AllMenuItems components={components} />
    </components.MenuList>
    <components.MenuList style={{
    maxHeight: 'none'
  }}>
      <AllMenuItems components={components} isSelected />
    </components.MenuList>
  </>`,...(I=(h=o.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};const O=["Emotion","Class"];export{o as Class,a as Emotion,O as __namedExportsOrder,q as default};
//# sourceMappingURL=Menu.stories-9b3c48a3.js.map
