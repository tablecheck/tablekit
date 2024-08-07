import{a as b,j as e}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";import{c as ce}from"./emotion-styled-base.browser.esm-9b8a28de.js";import{_ as ue,I as he,z as be,aA as B,br as pe,aB as k,aC as v,j as ae,B as te,o as re,a2 as me}from"./TextArea-6dc2794c.js";import{R as m}from"./index-b6937ee2.js";import{G as g,b as de,B as se,C as ie,H as ne,J as le}from"./Tooltip-c094622b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8c426718.js";import"./index-4d501b15.js";import"./_commonjsHelpers-725317a4.js";var A,E,W,Be=["children","size"],ye=m.forwardRef(function(r,a){var t=r.children,d=r.size,C=d===void 0?16:d,x=ue(r,Be);return m.createElement(he,be({width:C,height:C,ref:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},x),A||(A=m.createElement("circle",{cx:"8",cy:"16",r:"2"})),E||(E=m.createElement("circle",{cx:"16",cy:"16",r:"2"})),W||(W=m.createElement("circle",{cx:"24",cy:"16",r:"2"})),t)});const ze={title:"Components/Table",component:B,parameters:{...pe,auxiliaryComponents:[k,v]}},oe=[{id:"04654ef6-8258-406d-81bc-15ce4bc8a33d",name:"Tyesa Parrino",address:"Scholarships St 2994, Whitinsville, Russia, 350507",birthday:"09.02.1994",status:"warning",email:"bedford_berubeta@tales.at"},{id:"299c6c9b-515b-4557-a432-c54cc9ef4f6d",name:"Rito Talkington",address:"Sony Street 9926, Floyd, Belarus, 404723",birthday:"31.03.2009",status:"success",email:"lenamarie_harney0gu4@spectrum.nx"},{id:"339ab400-fac6-430a-a267-13ce95cd32e2",name:"Savanna Bergmann",address:"Cliff St 30, Winlock, Grenada, 452141",birthday:"22.05.1988",status:"success",email:"jolena_whitcombi27k@bee.nlz"},{id:"3c36f8b5-314b-4051-bd49-3cac2f70a09a",name:"Allegra Wechsler",address:"Cambodia Street 4606, Cecilia, China, 342750",birthday:"01.03.1994",status:"error",email:"zola_addiskaaw@jamie.ls"},{id:"6bac25ac-4344-4299-a04c-7aa295ccf47e",name:"Thary Tripp",address:"Creation Road 4190, Mancos, Christmas Island, 515518",birthday:"03.03.1989",status:"success",email:"kinyata_crosbycqri@pendant.qn"},{id:"8b9f1682-d51a-42e7-9198-7e8d48bfc683",name:"Lyndsy Hail",address:"Besides Road 6677, Zhijiang, Nepal, 912354",birthday:"18.10.2001",status:"success",email:"brando_constantino11@equity.mlh"},{id:"ae6bc11d-b9df-4f85-9566-ba92c31a84eb",name:"Synthia Loring",status:"success",address:"Many St 9032, El Dorado, Nigeria, 181335",birthday:"28.03.2015",email:"stepen_feaginaglq@todd.gj"},{id:"e59569b4-6622-4e4f-a6e7-f4b2233158ae",name:"Pascha Blatt",status:"success",address:"Peaceful St 7705, Jacksons Gap, Iraq, 428957",birthday:"15.06.1982",email:"rahul_leal3f@congress.ev"},{id:"fae0d785-76a9-4c94-9a6e-1366ea451201",name:"Nathania Haslam",address:"Fee Street 8358, Littleriver, Saudi Arabia, 918489",birthday:"06.10.2001",status:"success",email:"reuben_blackmonth@sociology.fh"},{id:"fd490f26-c7a2-4df8-9ad4-21fd60b5d873",name:"Manfred Hartwig",address:"Entity Road 6465, Matoaka, Russia, 834525",birthday:"10.01.1972",status:"info",email:"kirstopher_hassinger2d@counseling.ymp"}],_=ce("div",{target:"e1flu6k00"})({name:"zjik7",styles:"display:flex"}),T=({Table:y,isStriped:r})=>b(y,{"data-variant":r?"striped":"default",children:[e("thead",{children:b("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Address"}),e("th",{children:"Birthday"}),e("th",{children:"Email"})]})}),e("tbody",{children:oe.map((a,t)=>b("tr",{"data-active":t===3||t===4,children:[e("td",{children:a.name}),e("td",{children:t%2?a.address:e("ul",{children:a.address.split(", ").map(d=>e("li",{children:d},d))})}),e("td",{children:a.birthday}),e("td",{children:a.email})]},a.id))})]}),s=T.bind({});s.args={Table:B};s.parameters={useEmotion:!0};const i=T.bind({});i.args={Table:B,isStriped:!0};i.parameters={useEmotion:!0};const n=T.bind({});n.args={Table:g};n.parameters={useEmotion:!1};const l=T.bind({});l.args={Table:g,isStriped:!0};l.parameters={useEmotion:!1};const f=({Table:y,Button:r,Badge:a,Checkbox:t,TableBadgeCell:d,TableButtonCell:C,isStriped:x})=>b(y,{"data-variant":x?"striped":"default",children:[e("thead",{children:b("tr",{children:[e("th",{children:e(_,{children:e(t,{type:"checkbox"})})}),e("th",{children:"Name"}),e("th",{children:"Status"}),e("th",{children:"Action"})]})}),e("tbody",{children:oe.map((p,S)=>b("tr",{"data-active":S===3||S===4,children:[e("td",{children:e(_,{children:e(t,{type:"checkbox"})})}),e("td",{children:S%2?p.address:e("ul",{children:p.address.split(", ").map(z=>e("li",{children:z},z))})}),e(d,{children:e(a,{"data-variant":p.status,"data-size":"small",children:p.status})}),e(C,{children:e(r,{"data-variant":"bare","data-size":"small",children:e(ye,{size:me("iconSize")})})})]},p.id))})]}),o=f.bind({});o.args={Table:B,Button:ae,Badge:te,Checkbox:re,TableBadgeCell:k,TableButtonCell:v};o.parameters={useEmotion:!0};const c=f.bind({});c.args={Table:B,Button:ae,Badge:te,Checkbox:re,TableBadgeCell:k,TableButtonCell:v,isStriped:!0};c.parameters={useEmotion:!0};const u=f.bind({});u.args={Table:g,Button:de,Badge:se,Checkbox:ie,TableBadgeCell:ne,TableButtonCell:le};u.parameters={useEmotion:!1};const h=f.bind({});h.args={Table:g,Button:de,Badge:se,Checkbox:ie,TableBadgeCell:ne,TableButtonCell:le,isStriped:!0};h.parameters={useEmotion:!1};var w,D,N;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`({
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
  </Table>`,...(N=(D=s.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var j,H,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`({
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
  </Table>`,...(M=(H=i.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var R,O,$;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`({
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
  </Table>`,...($=(O=n.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var q,I,P;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`({
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
  </Table>`,...(P=(I=l.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var G,L,F;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`({
  Table,
  Button,
  Badge,
  Checkbox,
  TableBadgeCell,
  TableButtonCell,
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
          <TableBadgeCell>
            <Badge data-variant={user.status} data-size="small">
              {user.status}
            </Badge>
          </TableBadgeCell>
          <TableButtonCell>
            <Button data-variant="bare" data-size="small">
              <OverflowMenuHorizontal size={getConfigDefault('iconSize')} />
            </Button>
          </TableButtonCell>
        </tr>)}
    </tbody>
  </Table>`,...(F=(L=o.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var J,Z,K;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`({
  Table,
  Button,
  Badge,
  Checkbox,
  TableBadgeCell,
  TableButtonCell,
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
          <TableBadgeCell>
            <Badge data-variant={user.status} data-size="small">
              {user.status}
            </Badge>
          </TableBadgeCell>
          <TableButtonCell>
            <Button data-variant="bare" data-size="small">
              <OverflowMenuHorizontal size={getConfigDefault('iconSize')} />
            </Button>
          </TableButtonCell>
        </tr>)}
    </tbody>
  </Table>`,...(K=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var Q,U,V;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`({
  Table,
  Button,
  Badge,
  Checkbox,
  TableBadgeCell,
  TableButtonCell,
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
          <TableBadgeCell>
            <Badge data-variant={user.status} data-size="small">
              {user.status}
            </Badge>
          </TableBadgeCell>
          <TableButtonCell>
            <Button data-variant="bare" data-size="small">
              <OverflowMenuHorizontal size={getConfigDefault('iconSize')} />
            </Button>
          </TableButtonCell>
        </tr>)}
    </tbody>
  </Table>`,...(V=(U=u.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,ee;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`({
  Table,
  Button,
  Badge,
  Checkbox,
  TableBadgeCell,
  TableButtonCell,
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
          <TableBadgeCell>
            <Badge data-variant={user.status} data-size="small">
              {user.status}
            </Badge>
          </TableBadgeCell>
          <TableButtonCell>
            <Button data-variant="bare" data-size="small">
              <OverflowMenuHorizontal size={getConfigDefault('iconSize')} />
            </Button>
          </TableButtonCell>
        </tr>)}
    </tbody>
  </Table>`,...(ee=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};const Ae=["BasicEmotion","BasicStripedEmotion","BasicClass","BasicStripedClass","WithControlsEmotion","StripedControlsEmotion","WithControlsClass","StripedControlsClass"];export{n as BasicClass,s as BasicEmotion,l as BasicStripedClass,i as BasicStripedEmotion,h as StripedControlsClass,c as StripedControlsEmotion,u as WithControlsClass,o as WithControlsEmotion,Ae as __namedExportsOrder,ze as default};
//# sourceMappingURL=Table.stories-37d5ba72.js.map
