import{j as e,a as s,F as L}from"./emotion-react-jsx-runtime.browser.esm-3699e87e.js";import{a as y}from"./chunk-WFFRPTHA-a68c42c5.js";import{W as g,X as C,Y as u,Z as k,$ as A,a0 as c,a1 as f,a2 as i,a3 as r}from"./TextArea-eb64305e.js";import"./index-d8ade8ea.js";import{M as E,j as b,k as v}from"./Tooltip-3979159d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7e8b2c4e.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";const q={title:"Components/Menu",component:g,parameters:{...C,auxiliaryClassNames:[u,k],auxiliarySelectors:[`.${u}`,A],auxiliaryComponents:[c,f],variants:["Menu","Menu Items","Selected"]}};function m({components:n,isSelected:t}){return s(L,{children:[e("li",{children:e(n.MenuItem,{"data-selected":t,children:"Item"})}),e("li",{children:e(n.MenuItemLink,{"data-selected":t,href:"#",onMouseDown:z=>{z.preventDefault()},children:"Item as link"})}),e("li",{children:e(n.MenuItem,{"data-selected":t,as:"button",onClick:()=>y("button-click")(),children:"Item as button"})}),e("li",{children:s(n.MenuItem,{"data-selected":t,children:[e(i,{size:r("iconSize")}),"Item"]})}),e("li",{children:s(n.MenuItem,{"data-selected":t,"data-variant":"success",children:[e(i,{size:r("iconSize")}),"Success"]})}),e("li",{children:s(n.MenuItem,{"data-selected":t,"data-variant":"info",children:[e(i,{size:r("iconSize")}),"Info"]})}),e("li",{children:s(n.MenuItem,{"data-selected":t,"data-variant":"error",children:[e(i,{size:r("iconSize")}),"Error"]})}),e("li",{children:s(n.MenuItem,{"data-selected":t,"data-variant":"warning",children:[e(i,{size:r("iconSize")}),"Warn"]})})]})}const x=({components:n})=>s(L,{children:[e(n.Menu,{children:e(n.MenuList,{children:e(m,{components:n})})}),e(n.MenuList,{style:{maxHeight:"none"},children:e(m,{components:n})}),e(n.MenuList,{style:{maxHeight:"none"},children:e(m,{components:n,isSelected:!0})})]}),a=x.bind({});a.args={components:{Menu:g,MenuList:f,MenuItem:c,MenuItemLink:c.withComponent("a",{target:"ebqp1uo0"})}};a.parameters={useEmotion:!0};const o=x.bind({});o.args={components:{Menu:E,MenuList:b,MenuItem:v,MenuItemLink:n=>e("a",{...n,className:"menu-item"})}};o.parameters={useEmotion:!1};var l,M,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
