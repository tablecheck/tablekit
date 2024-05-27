import{j as o,a}from"./emotion-react-jsx-runtime.browser.esm-171f6fb8.js";import{c as k}from"./emotion-styled-base.browser.esm-9ebd6774.js";import{a as J}from"./chunk-NX5DM7EF-168aaf13.js";import{r as U}from"./index-d8ade8ea.js";import{u as I,P as N,N as Y,a as B,b as K,R as S}from"./MonthArrowButtons-29912bda.js";import{r as X,t as Z,a as G,b,M as f,i as M}from"./index-8599227e.js";import{aX as g,aO as O,aP as c,aC as Q}from"./TextArea-8c932d0e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-04c27282.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-react.browser.esm-05addc11.js";var $=g("div",{target:"e1o9rs5f0"})({name:"1is668e",styles:"display:flex;justify-content:space-between;align-items:center;gap:var(--spacing-l1);position:relative"}),V=g("h2",{target:"erdsfeb1"})({name:"5gle2f",styles:"font:var(--label);text-align:center"}),_=g("div",{target:"erdsfeb0"})({name:"uil9qi",styles:"display:flex;flex:1 1 100%;justify-content:space-around;position:absolute;left:0;right:0;pointer-events:none"});function z(e){var n=e.formatTitle,t=e.nextMonthAriaLabel,r=e.previousMonthAriaLabel,i=I(),s=i.calendars;return O($,{children:[c(N,{"aria-label":r}),c(_,{children:s.map(function(d){var h=d.month,l=d.year;return c(V,{"aria-live":"polite",children:n({month:h,year:l})},"".concat(h,"-").concat(l))})}),c(Y,{"aria-label":t})]})}function ee(e,n){return re(e)||ne(e,n)||ae(e,n)||te()}function te(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ae(e,n){if(e){if(typeof e=="string")return T(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return T(e,n)}}function T(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ne(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,i,s,d,h=[],l=!0,p=!1;try{if(s=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=s.call(t)).done)&&(h.push(r.value),h.length!==n);l=!0);}catch(y){p=!0,i=y}finally{try{if(!l&&t.return!=null&&(d=t.return(),Object(d)!==d))return}finally{if(p)throw i}}return h}}function re(e){if(Array.isArray(e))return e}var W=g(Q.Base,{target:"ex181f00"})({name:"1i19mkl",styles:"min-width:var(--tk-date-select-width);max-width:var(--tk-date-select-width);width:var(--tk-date-select-width);background-image:none!important;text-align:center;padding:calc(var(--tk-input-vertical-padding) - var(--tk-input-border-width)) var(--tk-input-horizontal-padding)"}),oe=[0,1,2,3,4,5,6,7,8,9,10,11];function ie(e){var n=e.value,t=e.onChange,r=e.formatMonth;return c(W,{"data-size":"small",value:n,onChange:t,style:{"--tk-date-select-width":"117px"},children:oe.map(function(i){return c("option",{value:i,children:r(i)},i)})})}function se(e){var n=e.value,t=e.onChange,r=e.yearRange,i=ee(r,2),s=i[0],d=i[1],h=U.useMemo(function(){for(var l=[],p=s;p<d;p+=1)l.push(p);return l},[s,d]);return c(W,{"data-size":"small",value:n,onChange:t,style:{"--tk-date-select-width":"71px"},children:h.map(function(l){return c("option",{value:l,children:l},l)})})}function le(e){var n=e.formatMonth,t=e.yearRange,r=e.nextMonthAriaLabel,i=e.previousMonthAriaLabel,s=I(),d=s.calendars,h=B(),l=K(),p=d[0],y=p.month,H=p.year;return O($,{children:[c(N,{"aria-label":i}),c(ie,{value:y,formatMonth:n,onChange:function(x){h(parseInt(x.currentTarget.value,10))}}),c(se,{value:H,yearRange:t,onChange:function(x){l(parseInt(x.currentTarget.value,10))}}),c(Y,{"aria-label":r})]})}var D=g("div",{target:"e19c2ua0"})({name:"hwzkq9",styles:"display:flex;flex-direction:column;gap:var(--spacing-l2);padding:var(--spacing-l4) var(--spacing-l2);box-shadow:var(--elevation-small);border:1px solid var(--border);border-radius:var(--border-radius-small);background:var(--surface)"});function de(e,n){X(2,arguments);var t=Z(e),r=G(n);if(isNaN(r))return new Date(NaN);if(!r)return t;var i=t.getDate(),s=new Date(t.getTime());s.setMonth(t.getMonth()+r+1,0);var d=s.getDate();return i>=d?s:(t.setFullYear(s.getFullYear(),s.getMonth(),i),t)}const ce=k("div",{target:"e10hz4r21"})({name:"1525at2",styles:"font:var(--body-1);margin:20px auto 0;display:flex;flex-direction:column;width:94%!important;p,ul{padding:10px 0;span{line-height:1;margin:0 2px;padding:3px 5px;white-space:nowrap;border-radius:3px;font-size:13px;border:1px solid #eeeeee;color:rgba(51, 51, 51, 0.9);background-color:#f8f8f8;}}ul{list-style:disc;li{padding-bottom:var(--spacing-l2);}}"}),he=k("table",{target:"e10hz4r20"})({name:"fvmc47",styles:"margin-top:0px;border-collapse:collapse;color:var(--text);font:var(--body-2);margin-bottom:var(--spacing-l5);th{font-weight:bold;text-align:start;border-bottom:1px solid var(--border);}td{padding:var(--spacing-l2) var(--spacing-l4) var(--spacing-l2) 0px;line-height:1.5;}"}),Ae={title:"Components/Date Picker",component:S,parameters:{layout:"fullscreen",showStarImport:!0,packageName:"@tablecheck/tablekit-react-datepicker",controls:{exclude:["data-testid"]}}},E=J("onDateSelected"),w=[{name:"January",value:0},{name:"February",value:1},{name:"March",value:2},{name:"April",value:3},{name:"May",value:4},{name:"June",value:5},{name:"July",value:6},{name:"August",value:7},{name:"September",value:8},{name:"October",value:9},{name:"November",value:10},{name:"December",value:11}],u=new Date("2023-03-14T16:47:18.502Z"),pe=de(u,2),F=b(u,1),ue=e=>o(S,{...e,onDateSelected:n=>E(n),children:[a(z,{formatTitle:({month:n,year:t})=>{var r;return`${(r=w.find(({value:i})=>i===n))==null?void 0:r.name} ${t}`},nextMonthAriaLabel:"Next Month",previousMonthAriaLabel:"Previous Month"}),a("div",{style:{display:"flex",gap:"var(--spacing-l2)"},children:a(f,{...e})})]}),m=ue.bind({});m.args={monthsToDisplay:2,selected:[F],showOutsideDays:!0,minDate:u};m.storyName="2 Month Range";const me=k("div",{target:"e13298a80"})({name:"3cj6j1",styles:"display:flex;flex-direction:row;gap:var(--spacing-l5);&>div{--inner-padding:var(--spacing-l4);display:flex;flex-direction:column;justify-content:space-between;border:1px solid var(--info);border-radius:var(--border-radius-large);padding:var(--inner-padding);gap:var(--inner-padding);&>h4{border-top-right-radius:var(--border-radius-large);border-top-left-radius:var(--border-radius-large);margin:calc(-1 * var(--inner-padding));margin-bottom:0;padding:var(--spacing-l2);color:var(--info-text);background-color:var(--info-surface);justify-self:flex-start;border-bottom:1px solid var(--info);text-align:center;}}"}),ve=e=>{const{minDate:n}=e;return a(S,{...e,id:"template",onDateSelected:t=>E(t),children:o(ce,{children:[o("p",{children:["The ",a("span",{children:"Date Picker"})," package is a set of wrappers and utilities around the ",a("span",{children:"dayzed"})," library. The basic exports are:"]}),o("ul",{children:[o("li",{children:[a("span",{children:"Root"})," which must wrap everything and provides a context"]}),o("li",{children:[a("span",{children:"Months"})," which renders the calendar grid (see Months stories for more options)"]}),o("li",{children:[a("span",{children:"useMonthChange"})," - returns a function that can be passed the new month number (0 based) to viewed calendar"]}),o("li",{children:[a("span",{children:"useYearChange"})," - returns a function that can be passed the new full year number to change the viewed calendar"]}),o("li",{children:[a("span",{children:"useDatePickerContext"})," - returns the context from Root including all dayzed variables and relevant settings"]})]}),o("p",{children:["Though we do export the internals of the ",a("span",{children:"Months"})," component if you want to override them it is not recommended as the internals are quite sensitive for a11y and keyboard interaction.",a("br",{}),"Supported customisation of the Months component is available through use of",a("span",{children:"isDateDisabled"})," prop, which is used to disable the day after tomorrow in the below examples."]}),a("p",{children:"You can add any markup you desire within the Root, in this case press tab and try out keyboard navigation."}),o(he,{children:[a("thead",{children:o("tr",{children:[a("th",{children:"Key Press"}),a("th",{children:"Action"})]})}),o("tbody",{children:[o("tr",{children:[a("td",{width:"200",children:"Space / Enter"}),a("td",{children:"Select current date"})]}),o("tr",{children:[a("td",{children:"Arrow keys"}),a("td",{children:"Move to neigbouring date"})]}),o("tr",{children:[a("td",{children:"Home / End"}),a("td",{children:"Move to first/last day of week"})]}),o("tr",{children:[a("td",{children:"Page-up / Page-down"}),a("td",{children:"Move to next/previous month. Hold shift to go to next/previous year."})]})]})]}),o(me,{children:[o("div",{children:[a("h4",{children:"Undecorated"}),a(D,{children:a(f,{isDateDisabled:t=>M(t,b(u,2))})})]}),o("div",{children:[a("h4",{children:"Static Title"}),o(D,{children:[a(z,{formatTitle:({month:t,year:r})=>{var i;return`${(i=w.find(({value:s})=>s===t))==null?void 0:i.name} ${r}`},nextMonthAriaLabel:"Next Month",previousMonthAriaLabel:"Previous Month"}),a(f,{isDateDisabled:t=>M(t,b(u,2))})]})]}),o("div",{children:[a("h4",{children:"Selectable Title"}),o(D,{children:[a(le,{formatMonth:t=>w.find(({value:r})=>r===t).name,yearRange:[n.getFullYear(),n.getFullYear()+4],nextMonthAriaLabel:"Next Month",previousMonthAriaLabel:"Previous Month"}),a(f,{isDateDisabled:t=>M(t,b(u,2))})]})]})]})]})})},v=ve.bind({});v.args={selected:F,minDate:u,maxDate:pe};var A,P,C;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`(args: any) => <Root {...args} onDateSelected={dateObject => onDateSelected(dateObject)}>
    <StaticTitle formatTitle={({
    month,
    year
  }) => \`\${months.find(({
    value
  }) => value === month)?.name} \${year}\`} nextMonthAriaLabel="Next Month" previousMonthAriaLabel="Previous Month" />
    <div style={{
    display: 'flex',
    gap: 'var(--spacing-l2)'
  }}>
      <Months {...args} />
    </div>
  </Root>`,...(C=(P=m.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var R,L,j;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const {
    minDate
  } = args;
  return <Root {...args} id="template" onDateSelected={dateObject => onDateSelected(dateObject)}>
      <InfoWrapper>
        <p>
          The <span>Date Picker</span> package is a set of wrappers and
          utilities around the <span>dayzed</span> library. The basic exports
          are:
        </p>
        <ul>
          <li>
            <span>Root</span> which must wrap everything and provides a context
          </li>
          <li>
            <span>Months</span> which renders the calendar grid (see Months
            stories for more options)
          </li>
          <li>
            <span>useMonthChange</span> - returns a function that can be passed
            the new month number (0 based) to viewed calendar
          </li>
          <li>
            <span>useYearChange</span> - returns a function that can be passed
            the new full year number to change the viewed calendar
          </li>
          <li>
            <span>useDatePickerContext</span> - returns the context from Root
            including all dayzed variables and relevant settings
          </li>
        </ul>
        <p>
          Though we do export the internals of the <span>Months</span> component
          if you want to override them it is not recommended as the internals
          are quite sensitive for a11y and keyboard interaction.
          <br />
          Supported customisation of the Months component is available through
          use of
          <span>isDateDisabled</span> prop, which is used to disable the day
          after tomorrow in the below examples.
        </p>
        <p>
          You can add any markup you desire within the Root, in this case press
          tab and try out keyboard navigation.
        </p>
        <Table>
          <thead>
            <tr>
              <th>Key Press</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="200">Space / Enter</td>
              <td>Select current date</td>
            </tr>
            <tr>
              <td>Arrow keys</td>
              <td>Move to neigbouring date</td>
            </tr>
            <tr>
              <td>Home / End</td>
              <td>Move to first/last day of week</td>
            </tr>
            <tr>
              <td>Page-up / Page-down</td>
              <td>
                Move to next/previous month. Hold shift to go to next/previous
                year.
              </td>
            </tr>
          </tbody>
        </Table>
        <DemoRow>
          <div>
            <h4>Undecorated</h4>
            <DatePickerWrapper>
              <Months isDateDisabled={(date: Date) => isSameDay(date, addDays(today, 2))} />
            </DatePickerWrapper>
          </div>
          <div>
            <h4>Static Title</h4>
            <DatePickerWrapper>
              <StaticTitle formatTitle={({
              month,
              year
            }) => \`\${months.find(({
              value
            }) => value === month)?.name} \${year}\`} nextMonthAriaLabel="Next Month" previousMonthAriaLabel="Previous Month" />
              <Months isDateDisabled={(date: Date) => isSameDay(date, addDays(today, 2))} />
            </DatePickerWrapper>
          </div>
          <div>
            <h4>Selectable Title</h4>
            <DatePickerWrapper>
              <SelectableTitle formatMonth={month => months.find(({
              value
            }) => value === month)!.name} yearRange={[minDate.getFullYear(), minDate.getFullYear() + 4]} nextMonthAriaLabel="Next Month" previousMonthAriaLabel="Previous Month" />
              <Months isDateDisabled={(date: Date) => isSameDay(date, addDays(today, 2))} />
            </DatePickerWrapper>
          </div>
        </DemoRow>
      </InfoWrapper>
    </Root>;
}`,...(j=(L=v.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};const Pe=["MonthRange2","Information"];export{v as Information,m as MonthRange2,Pe as __namedExportsOrder,Ae as default};
//# sourceMappingURL=Calendar.stories-d45f3290.js.map
