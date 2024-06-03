import{a as m,j as e}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";import{c as de}from"./emotion-styled-base.browser.esm-2b8ca1e6.js";import{_ as se,I as ie,H as ne,aF as f,bt as le,j as V,B as X,o as Y,a6 as oe}from"./TextArea-39b0f887.js";import{R as y}from"./index-b6937ee2.js";import{L as x,b as ee,B as te,C as ae}from"./Tooltip-a6af724a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8c426718.js";import"./index-4d501b15.js";import"./_commonjsHelpers-725317a4.js";var v,C,T,ce=["children","size"],he=y.forwardRef(function(d,t){var a=d.children,s=d.size,r=s===void 0?16:s,b=se(d,ce);return y.createElement(ie,ne({width:r,height:r,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},b),v||(v=y.createElement("circle",{cx:"8",cy:"16",r:"2"})),C||(C=y.createElement("circle",{cx:"16",cy:"16",r:"2"})),T||(T=y.createElement("circle",{cx:"24",cy:"16",r:"2"})),a)});const Se={title:"Components/Table",component:f,parameters:{...le}},re=[{id:"04654ef6-8258-406d-81bc-15ce4bc8a33d",name:"Tyesa Parrino",address:"Scholarships St 2994, Whitinsville, Russia, 350507",birthday:"09.02.1994",status:"warning",email:"bedford_berubeta@tales.at"},{id:"299c6c9b-515b-4557-a432-c54cc9ef4f6d",name:"Rito Talkington",address:"Sony Street 9926, Floyd, Belarus, 404723",birthday:"31.03.2009",status:"success",email:"lenamarie_harney0gu4@spectrum.nx"},{id:"339ab400-fac6-430a-a267-13ce95cd32e2",name:"Savanna Bergmann",address:"Cliff St 30, Winlock, Grenada, 452141",birthday:"22.05.1988",status:"success",email:"jolena_whitcombi27k@bee.nlz"},{id:"3c36f8b5-314b-4051-bd49-3cac2f70a09a",name:"Allegra Wechsler",address:"Cambodia Street 4606, Cecilia, China, 342750",birthday:"01.03.1994",status:"error",email:"zola_addiskaaw@jamie.ls"},{id:"6bac25ac-4344-4299-a04c-7aa295ccf47e",name:"Thary Tripp",address:"Creation Road 4190, Mancos, Christmas Island, 515518",birthday:"03.03.1989",status:"success",email:"kinyata_crosbycqri@pendant.qn"},{id:"8b9f1682-d51a-42e7-9198-7e8d48bfc683",name:"Lyndsy Hail",address:"Besides Road 6677, Zhijiang, Nepal, 912354",birthday:"18.10.2001",status:"success",email:"brando_constantino11@equity.mlh"},{id:"ae6bc11d-b9df-4f85-9566-ba92c31a84eb",name:"Synthia Loring",status:"success",address:"Many St 9032, El Dorado, Nigeria, 181335",birthday:"28.03.2015",email:"stepen_feaginaglq@todd.gj"},{id:"e59569b4-6622-4e4f-a6e7-f4b2233158ae",name:"Pascha Blatt",status:"success",address:"Peaceful St 7705, Jacksons Gap, Iraq, 428957",birthday:"15.06.1982",email:"rahul_leal3f@congress.ev"},{id:"fae0d785-76a9-4c94-9a6e-1366ea451201",name:"Nathania Haslam",address:"Fee Street 8358, Littleriver, Saudi Arabia, 918489",birthday:"06.10.2001",status:"success",email:"reuben_blackmonth@sociology.fh"},{id:"fd490f26-c7a2-4df8-9ad4-21fd60b5d873",name:"Manfred Hartwig",address:"Entity Road 6465, Matoaka, Russia, 834525",birthday:"10.01.1972",status:"info",email:"kirstopher_hassinger2d@counseling.ymp"}],z=de("div",{target:"e1flu6k00"})({name:"zjik7",styles:"display:flex"}),S=({Table:g,isStriped:d})=>m(g,{"data-variant":d?"striped":"default",children:[e("thead",{children:m("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Address"}),e("th",{children:"Birthday"}),e("th",{children:"Email"})]})}),e("tbody",{children:re.map((t,a)=>m("tr",{"data-active":a===3||a===4,children:[e("td",{children:t.name}),e("td",{children:a%2?t.address:e("ul",{children:t.address.split(", ").map(s=>e("li",{children:s},s))})}),e("td",{children:t.birthday}),e("td",{children:t.email})]},t.id))})]}),i=S.bind({});i.args={Table:f};i.parameters={useEmotion:!0};const n=S.bind({});n.args={Table:f,isStriped:!0};n.parameters={useEmotion:!0};const l=S.bind({});l.args={Table:x};l.parameters={useEmotion:!1};const o=S.bind({});o.args={Table:x,isStriped:!0};o.parameters={useEmotion:!1};const B=({Table:g,Button:d,Badge:t,Checkbox:a,isStriped:s})=>m(g,{"data-variant":s?"striped":"default",children:[e("thead",{children:m("tr",{children:[e("th",{children:e(z,{children:e(a,{type:"checkbox"})})}),e("th",{children:"Name"}),e("th",{children:"Status"}),e("th",{children:"Action"})]})}),e("tbody",{children:re.map((r,b)=>m("tr",{"data-active":b===3||b===4,children:[e("td",{children:e(z,{children:e(a,{type:"checkbox"})})}),e("td",{children:b%2?r.address:e("ul",{children:r.address.split(", ").map(k=>e("li",{children:k},k))})}),e("td",{"data-cell-type":"badge",children:e(t,{"data-variant":r.status,"data-size":"small",children:r.status})}),e("td",{"data-cell-type":"button",children:e(d,{"data-variant":"bare","data-size":"small",children:e(he,{size:oe("iconSize")})})})]},r.id))})]}),c=B.bind({});c.args={Table:f,Button:V,Badge:X,Checkbox:Y};c.parameters={useEmotion:!0};const h=B.bind({});h.args={Table:f,Button:V,Badge:X,Checkbox:Y,isStriped:!0};h.parameters={useEmotion:!0};const u=B.bind({});u.args={Table:x,Button:ee,Badge:te,Checkbox:ae};u.parameters={useEmotion:!1};const p=B.bind({});p.args={Table:x,Button:ee,Badge:te,Checkbox:ae,isStriped:!0};p.parameters={useEmotion:!1};var A,E,W;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`({
  Table,
  isStriped
}) => <Table data-variant={isStriped ? 'striped' : 'default'}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Birthday</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((user, index) => <tr key={user.id} data-active={index === 3 || index === 4}>
          <td>{user.name}</td>
          <td>
            {index % 2 ? user.address : <ul>
                {user.address.split(', ').map(line => <li key={line}>{line}</li>)}
              </ul>}
          </td>
          <td>{user.birthday}</td>
          <td>{user.email}</td>
        </tr>)}
    </tbody>
  </Table>`,...(W=(E=i.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var _,w,D;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`({
  Table,
  isStriped
}) => <Table data-variant={isStriped ? 'striped' : 'default'}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Birthday</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((user, index) => <tr key={user.id} data-active={index === 3 || index === 4}>
          <td>{user.name}</td>
          <td>
            {index % 2 ? user.address : <ul>
                {user.address.split(', ').map(line => <li key={line}>{line}</li>)}
              </ul>}
          </td>
          <td>{user.birthday}</td>
          <td>{user.email}</td>
        </tr>)}
    </tbody>
  </Table>`,...(D=(w=n.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var N,j,H;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`({
  Table,
  isStriped
}) => <Table data-variant={isStriped ? 'striped' : 'default'}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Birthday</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((user, index) => <tr key={user.id} data-active={index === 3 || index === 4}>
          <td>{user.name}</td>
          <td>
            {index % 2 ? user.address : <ul>
                {user.address.split(', ').map(line => <li key={line}>{line}</li>)}
              </ul>}
          </td>
          <td>{user.birthday}</td>
          <td>{user.email}</td>
        </tr>)}
    </tbody>
  </Table>`,...(H=(j=l.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var M,R,O;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`({
  Table,
  isStriped
}) => <Table data-variant={isStriped ? 'striped' : 'default'}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Birthday</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((user, index) => <tr key={user.id} data-active={index === 3 || index === 4}>
          <td>{user.name}</td>
          <td>
            {index % 2 ? user.address : <ul>
                {user.address.split(', ').map(line => <li key={line}>{line}</li>)}
              </ul>}
          </td>
          <td>{user.birthday}</td>
          <td>{user.email}</td>
        </tr>)}
    </tbody>
  </Table>`,...(O=(R=o.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var q,$,I;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`({
  Table,
  Button,
  Badge,
  Checkbox,
  isStriped
}) => <Table data-variant={isStriped ? 'striped' : 'default'}>
    <thead>
      <tr>
        <th>
          <ActionWrapper>
            <Checkbox type="checkbox" />
          </ActionWrapper>
        </th>
        <th>Name</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((user, index) => <tr key={user.id} data-active={index === 3 || index === 4}>
          <td>
            <ActionWrapper>
              <Checkbox type="checkbox" />
            </ActionWrapper>
          </td>
          <td>
            {index % 2 ? user.address : <ul>
                {user.address.split(', ').map(line => <li key={line}>{line}</li>)}
              </ul>}
          </td>
          <td data-cell-type="badge">
            <Badge data-variant={user.status} data-size="small">
              {user.status}
            </Badge>
          </td>
          <td data-cell-type="button">
            <Button data-variant="bare" data-size="small">
              <OverflowMenuHorizontal size={getConfigDefault('iconSize')} />
            </Button>
          </td>
        </tr>)}
    </tbody>
  </Table>`,...(I=($=c.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var L,P,F;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`({
  Table,
  Button,
  Badge,
  Checkbox,
  isStriped
}) => <Table data-variant={isStriped ? 'striped' : 'default'}>
    <thead>
      <tr>
        <th>
          <ActionWrapper>
            <Checkbox type="checkbox" />
          </ActionWrapper>
        </th>
        <th>Name</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((user, index) => <tr key={user.id} data-active={index === 3 || index === 4}>
          <td>
            <ActionWrapper>
              <Checkbox type="checkbox" />
            </ActionWrapper>
          </td>
          <td>
            {index % 2 ? user.address : <ul>
                {user.address.split(', ').map(line => <li key={line}>{line}</li>)}
              </ul>}
          </td>
          <td data-cell-type="badge">
            <Badge data-variant={user.status} data-size="small">
              {user.status}
            </Badge>
          </td>
          <td data-cell-type="button">
            <Button data-variant="bare" data-size="small">
              <OverflowMenuHorizontal size={getConfigDefault('iconSize')} />
            </Button>
          </td>
        </tr>)}
    </tbody>
  </Table>`,...(F=(P=h.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var G,J,Z;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`({
  Table,
  Button,
  Badge,
  Checkbox,
  isStriped
}) => <Table data-variant={isStriped ? 'striped' : 'default'}>
    <thead>
      <tr>
        <th>
          <ActionWrapper>
            <Checkbox type="checkbox" />
          </ActionWrapper>
        </th>
        <th>Name</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((user, index) => <tr key={user.id} data-active={index === 3 || index === 4}>
          <td>
            <ActionWrapper>
              <Checkbox type="checkbox" />
            </ActionWrapper>
          </td>
          <td>
            {index % 2 ? user.address : <ul>
                {user.address.split(', ').map(line => <li key={line}>{line}</li>)}
              </ul>}
          </td>
          <td data-cell-type="badge">
            <Badge data-variant={user.status} data-size="small">
              {user.status}
            </Badge>
          </td>
          <td data-cell-type="button">
            <Button data-variant="bare" data-size="small">
              <OverflowMenuHorizontal size={getConfigDefault('iconSize')} />
            </Button>
          </td>
        </tr>)}
    </tbody>
  </Table>`,...(Z=(J=u.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};var K,Q,U;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`({
  Table,
  Button,
  Badge,
  Checkbox,
  isStriped
}) => <Table data-variant={isStriped ? 'striped' : 'default'}>
    <thead>
      <tr>
        <th>
          <ActionWrapper>
            <Checkbox type="checkbox" />
          </ActionWrapper>
        </th>
        <th>Name</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((user, index) => <tr key={user.id} data-active={index === 3 || index === 4}>
          <td>
            <ActionWrapper>
              <Checkbox type="checkbox" />
            </ActionWrapper>
          </td>
          <td>
            {index % 2 ? user.address : <ul>
                {user.address.split(', ').map(line => <li key={line}>{line}</li>)}
              </ul>}
          </td>
          <td data-cell-type="badge">
            <Badge data-variant={user.status} data-size="small">
              {user.status}
            </Badge>
          </td>
          <td data-cell-type="button">
            <Button data-variant="bare" data-size="small">
              <OverflowMenuHorizontal size={getConfigDefault('iconSize')} />
            </Button>
          </td>
        </tr>)}
    </tbody>
  </Table>`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Be=["BasicEmotion","BasicStripedEmotion","BasicClass","BasicStripedClass","WithControlsEmotion","StripedControlsEmotion","WithControlsClass","StripedControlsClass"];export{l as BasicClass,i as BasicEmotion,o as BasicStripedClass,n as BasicStripedEmotion,p as StripedControlsClass,h as StripedControlsEmotion,u as WithControlsClass,c as WithControlsEmotion,Be as __namedExportsOrder,Se as default};
//# sourceMappingURL=Table.stories-77c30197.js.map
