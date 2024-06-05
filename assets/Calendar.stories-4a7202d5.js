import{a as r,j as t}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";import{c as D}from"./emotion-styled-base.browser.esm-817ec7e1.js";import{a as F}from"./chunk-NX5DM7EF-2a2f517f.js";import{r as q}from"./index-b6937ee2.js";import{u as j,P as I,N as Y,c as J,d as U,R as k,e as _,a as g}from"./MonthArrowButtons-343c3337.js";import{M as b,i as x}from"./index-68e7fd89.js";import{bp as v,b7 as B}from"./TextArea-cae9bc42.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8c426718.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-react.browser.esm-d6bfad6b.js";import"./index-4d501b15.js";var $=v("div",{target:"e1o9rs5f0"})({name:"1is668e",styles:"display:flex;justify-content:space-between;align-items:center;gap:var(--spacing-l1);position:relative"}),K=v("h2",{target:"erdsfeb1"})({name:"5gle2f",styles:"font:var(--label);text-align:center"}),Z=v("div",{target:"erdsfeb0"})({name:"uil9qi",styles:"display:flex;flex:1 1 100%;justify-content:space-around;position:absolute;left:0;right:0;pointer-events:none"});function z(e){var n=e.formatTitle,a=e.nextMonthAriaLabel,o=e.previousMonthAriaLabel,i=j(),s=i.calendars;return r($,{children:[t(I,{"aria-label":o}),t(Z,{children:s.map(function(d){var c=d.month,l=d.year;return t(K,{"aria-live":"polite",children:n({month:c,year:l})},"".concat(c,"-").concat(l))})}),t(Y,{"aria-label":a})]})}function G(e,n){return ee(e)||X(e,n)||V(e,n)||Q()}function Q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V(e,n){if(e){if(typeof e=="string")return S(e,n);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?S(e,n):void 0}}function S(e,n){(n==null||n>e.length)&&(n=e.length);for(var a=0,o=Array(n);a<n;a++)o[a]=e[a];return o}function X(e,n){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var o,i,s,d,c=[],l=!0,h=!1;try{if(s=(a=a.call(e)).next,n===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(o=s.call(a)).done)&&(c.push(o.value),c.length!==n);l=!0);}catch(y){h=!0,i=y}finally{try{if(!l&&a.return!=null&&(d=a.return(),Object(d)!==d))return}finally{if(h)throw i}}return c}}function ee(e){if(Array.isArray(e))return e}var N=v(B.Base,{target:"ex181f00"})({name:"1i19mkl",styles:"min-width:var(--tk-date-select-width);max-width:var(--tk-date-select-width);width:var(--tk-date-select-width);background-image:none!important;text-align:center;padding:calc(var(--tk-input-vertical-padding) - var(--tk-input-border-width)) var(--tk-input-horizontal-padding)"}),te=[0,1,2,3,4,5,6,7,8,9,10,11];function ae(e){var n=e.value,a=e.onChange,o=e.formatMonth;return t(N,{"data-size":"small",value:n,onChange:a,style:{"--tk-date-select-width":"117px"},children:te.map(function(i){return t("option",{value:i,children:o(i)},i)})})}function ne(e){var n=e.value,a=e.onChange,o=e.yearRange,i=G(o,2),s=i[0],d=i[1],c=q.useMemo(function(){for(var l=[],h=s;h<d;h+=1)l.push(h);return l},[s,d]);return t(N,{"data-size":"small",value:n,onChange:a,style:{"--tk-date-select-width":"71px"},children:c.map(function(l){return t("option",{value:l,children:l},l)})})}function re(e){var n=e.formatMonth,a=e.yearRange,o=e.nextMonthAriaLabel,i=e.previousMonthAriaLabel,s=j(),d=s.calendars,c=J(),l=U(),h=d[0],y=h.month,E=h.year;return r($,{children:[t(I,{"aria-label":i}),t(ae,{value:y,formatMonth:n,onChange:function(f){c(parseInt(f.currentTarget.value,10))}}),t(ne,{value:E,yearRange:a,onChange:function(f){l(parseInt(f.currentTarget.value,10))}}),t(Y,{"aria-label":o})]})}var M=v("div",{target:"e19c2ua0"})({name:"hwzkq9",styles:"display:flex;flex-direction:column;gap:var(--spacing-l2);padding:var(--spacing-l4) var(--spacing-l2);box-shadow:var(--elevation-small);border:1px solid var(--border);border-radius:var(--border-radius-small);background:var(--surface)"});const oe=D("div",{target:"e10hz4r21"})({name:"1525at2",styles:"font:var(--body-1);margin:20px auto 0;display:flex;flex-direction:column;width:94%!important;p,ul{padding:10px 0;span{line-height:1;margin:0 2px;padding:3px 5px;white-space:nowrap;border-radius:3px;font-size:13px;border:1px solid #eeeeee;color:rgba(51, 51, 51, 0.9);background-color:#f8f8f8;}}ul{list-style:disc;li{padding-bottom:var(--spacing-l2);}}"}),ie=D("table",{target:"e10hz4r20"})({name:"fvmc47",styles:"margin-top:0px;border-collapse:collapse;color:var(--text);font:var(--body-2);margin-bottom:var(--spacing-l5);th{font-weight:bold;text-align:start;border-bottom:1px solid var(--border);}td{padding:var(--spacing-l2) var(--spacing-l4) var(--spacing-l2) 0px;line-height:1.5;}"}),we={title:"Components/Date Picker",component:k,parameters:{layout:"fullscreen",showStarImport:!0,packageName:"@tablecheck/tablekit-react-datepicker",controls:{exclude:["data-testid"]}}},W=F("onDateSelected"),w=[{name:"January",value:0},{name:"February",value:1},{name:"March",value:2},{name:"April",value:3},{name:"May",value:4},{name:"June",value:5},{name:"July",value:6},{name:"August",value:7},{name:"September",value:8},{name:"October",value:9},{name:"November",value:10},{name:"December",value:11}],p=new Date("2023-03-14T16:47:18.502Z"),le=_(p,2),O=g(p,1),se=e=>r(k,{...e,onDateSelected:n=>W(n),children:[t(z,{formatTitle:({month:n,year:a})=>{var o;return`${(o=w.find(({value:i})=>i===n))==null?void 0:o.name} ${a}`},nextMonthAriaLabel:"Next Month",previousMonthAriaLabel:"Previous Month"}),t("div",{style:{display:"flex",gap:"var(--spacing-l2)"},children:t(b,{...e})})]}),u=se.bind({});u.args={monthsToDisplay:2,selected:[O],showOutsideDays:!0,minDate:p};u.storyName="2 Month Range";const de=D("div",{target:"e13298a80"})({name:"3cj6j1",styles:"display:flex;flex-direction:row;gap:var(--spacing-l5);&>div{--inner-padding:var(--spacing-l4);display:flex;flex-direction:column;justify-content:space-between;border:1px solid var(--info);border-radius:var(--border-radius-large);padding:var(--inner-padding);gap:var(--inner-padding);&>h4{border-top-right-radius:var(--border-radius-large);border-top-left-radius:var(--border-radius-large);margin:calc(-1 * var(--inner-padding));margin-bottom:0;padding:var(--spacing-l2);color:var(--info-text);background-color:var(--info-surface);justify-self:flex-start;border-bottom:1px solid var(--info);text-align:center;}}"}),ce=e=>{const{minDate:n}=e;return t(k,{...e,id:"template",onDateSelected:a=>W(a),children:r(oe,{children:[r("p",{children:["The ",t("span",{children:"Date Picker"})," package is a set of wrappers and utilities around the ",t("span",{children:"dayzed"})," library. The basic exports are:"]}),r("ul",{children:[r("li",{children:[t("span",{children:"Root"})," which must wrap everything and provides a context"]}),r("li",{children:[t("span",{children:"Months"})," which renders the calendar grid (see Months stories for more options)"]}),r("li",{children:[t("span",{children:"useMonthChange"})," - returns a function that can be passed the new month number (0 based) to viewed calendar"]}),r("li",{children:[t("span",{children:"useYearChange"})," - returns a function that can be passed the new full year number to change the viewed calendar"]}),r("li",{children:[t("span",{children:"useDatePickerContext"})," - returns the context from Root including all dayzed variables and relevant settings"]})]}),r("p",{children:["Though we do export the internals of the ",t("span",{children:"Months"})," component if you want to override them it is not recommended as the internals are quite sensitive for a11y and keyboard interaction.",t("br",{}),"Supported customisation of the Months component is available through use of",t("span",{children:"isDateDisabled"})," prop, which is used to disable the day after tomorrow in the below examples."]}),t("p",{children:"You can add any markup you desire within the Root, in this case press tab and try out keyboard navigation."}),r(ie,{children:[t("thead",{children:r("tr",{children:[t("th",{children:"Key Press"}),t("th",{children:"Action"})]})}),r("tbody",{children:[r("tr",{children:[t("td",{width:"200",children:"Space / Enter"}),t("td",{children:"Select current date"})]}),r("tr",{children:[t("td",{children:"Arrow keys"}),t("td",{children:"Move to neigbouring date"})]}),r("tr",{children:[t("td",{children:"Home / End"}),t("td",{children:"Move to first/last day of week"})]}),r("tr",{children:[t("td",{children:"Page-up / Page-down"}),t("td",{children:"Move to next/previous month. Hold shift to go to next/previous year."})]})]})]}),r(de,{children:[r("div",{children:[t("h4",{children:"Undecorated"}),t(M,{children:t(b,{isDateDisabled:a=>x(a,g(p,2))})})]}),r("div",{children:[t("h4",{children:"Static Title"}),r(M,{children:[t(z,{formatTitle:({month:a,year:o})=>{var i;return`${(i=w.find(({value:s})=>s===a))==null?void 0:i.name} ${o}`},nextMonthAriaLabel:"Next Month",previousMonthAriaLabel:"Previous Month"}),t(b,{isDateDisabled:a=>x(a,g(p,2))})]})]}),r("div",{children:[t("h4",{children:"Selectable Title"}),r(M,{children:[t(re,{formatMonth:a=>w.find(({value:o})=>o===a).name,yearRange:[n.getFullYear(),n.getFullYear()+4],nextMonthAriaLabel:"Next Month",previousMonthAriaLabel:"Previous Month"}),t(b,{isDateDisabled:a=>x(a,g(p,2))})]})]})]})]})})},m=ce.bind({});m.args={selected:O,minDate:p,maxDate:le};var T,A,P;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`(args: any) => <Root {...args} onDateSelected={dateObject => onDateSelected(dateObject)}>
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
  </Root>`,...(P=(A=u.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var R,C,L;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
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
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const De=["MonthRange2","Information"];export{m as Information,u as MonthRange2,De as __namedExportsOrder,we as default};
//# sourceMappingURL=Calendar.stories-4a7202d5.js.map
