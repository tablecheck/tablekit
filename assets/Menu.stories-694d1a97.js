import{j as e,a as s,F as L}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";import{a as y}from"./chunk-NX5DM7EF-2a2f517f.js";import{Z as g,$ as C,a0 as u,a1 as k,a2 as A,a3 as c,a4 as f,a5 as i,a6 as r}from"./TextArea-cae9bc42.js";import"./index-b6937ee2.js";import{M as E,j as b,k as v}from"./Tooltip-4bbad4fb.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8c426718.js";import"./_commonjsHelpers-725317a4.js";import"./index-4d501b15.js";const F={title:"Components/Menu",component:g,parameters:{...C,auxiliaryClassNames:[u,k],auxiliarySelectors:[`.${u}`,A],auxiliaryComponents:[c,f],variants:["Menu","Menu Items","Selected"]}};function m({components:n,isSelected:t}){return s(L,{children:[e("li",{children:e(n.MenuItem,{"data-selected":t,children:"Item"})}),e("li",{children:e(n.MenuItemLink,{"data-selected":t,href:"#",onMouseDown:z=>{z.preventDefault()},children:"Item as link"})}),e("li",{children:e(n.MenuItem,{"data-selected":t,as:"button",onClick:()=>y("button-click")(),children:"Item as button"})}),e("li",{children:s(n.MenuItem,{"data-selected":t,children:[e(i,{size:r("iconSize")}),"Item"]})}),e("li",{children:s(n.MenuItem,{"data-selected":t,"data-variant":"success",children:[e(i,{size:r("iconSize")}),"Success"]})}),e("li",{children:s(n.MenuItem,{"data-selected":t,"data-variant":"info",children:[e(i,{size:r("iconSize")}),"Info"]})}),e("li",{children:s(n.MenuItem,{"data-selected":t,"data-variant":"error",children:[e(i,{size:r("iconSize")}),"Error"]})}),e("li",{children:s(n.MenuItem,{"data-selected":t,"data-variant":"warning",children:[e(i,{size:r("iconSize")}),"Warn"]})})]})}const x=({components:n})=>s(L,{children:[e(n.Menu,{children:e(n.MenuList,{children:e(m,{components:n})})}),e(n.MenuList,{style:{maxHeight:"none"},children:e(m,{components:n})}),e(n.MenuList,{style:{maxHeight:"none"},children:e(m,{components:n,isSelected:!0})})]}),a=x.bind({});a.args={components:{Menu:g,MenuList:f,MenuItem:c,MenuItemLink:c.withComponent("a",{target:"ebqp1uo0"})}};a.parameters={useEmotion:!0};const o=x.bind({});o.args={components:{Menu:E,MenuList:b,MenuItem:v,MenuItemLink:n=>e("a",{...n,className:"menu-item"})}};o.parameters={useEmotion:!1};var l,M,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
  </>`,...(I=(h=o.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};const q=["Emotion","Class"];export{o as Class,a as Emotion,q as __namedExportsOrder,F as default};
//# sourceMappingURL=Menu.stories-694d1a97.js.map
