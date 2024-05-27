import{j as a,a as e,F as d}from"./emotion-react-jsx-runtime.browser.esm-171f6fb8.js";import{c as s}from"./emotion-styled-base.browser.esm-9ebd6774.js";import{a as g}from"./chunk-NX5DM7EF-168aaf13.js";import"./index-d8ade8ea.js";import{R as h}from"./MonthArrowButtons-29912bda.js";import{M as m,i as D,b as x}from"./index-8599227e.js";import"./TextArea-8c932d0e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-04c27282.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-react.browser.esm-05addc11.js";const O={title:"Components/DatePicker/Months",component:m,parameters:{chromatic:{disableSnapshot:!0},packageName:"@tablecheck/tablekit-react-datepicker",controls:{exclude:["data-testid","description"]}},argTypes:{renderMonthHeader:{control:!1},monthAriaLabel:{control:!1}}},w=new Date("2023-03-14T16:47:18.502Z"),y=s("div",{target:"e1cya4qv2"})({name:"kba6s4",styles:"margin:0 auto;display:flex;flex-direction:column;width:94%;p{padding-bottom:10px;span{line-height:1;margin:0 2px;padding:3px 5px;white-space:nowrap;border-radius:3px;font-size:13px;border:1px solid #eeeeee;color:rgba(51, 51, 51, 0.9);background-color:#f8f8f8;}}"}),u=s("div",{target:"e1cya4qv1"})({name:"zl1inp",styles:"display:flex;justify-content:center"}),b=s(m,{target:"e1cya4qv0"})({name:"13ubd8d",styles:"margin:10px"}),f=g("onDateSelected"),o=({...t})=>a(y,{children:[t.description,e(h,{...t,id:"template",onDateSelected:n=>f(n),children:e(u,{children:e(b,{...t})})})]}),T=({...t})=>a(y,{children:[t.description,e(h,{id:"template",onDateSelected:n=>f(n),composeDateAria:n=>{const r=n.getDate();return r===1?"1st":r===2?"2nd":r===3?"3rd":`${r}th`},children:e(u,{children:e(b,{...t})})})]}),i=()=>a(d,{children:[e(o,{description:a(d,{children:[a("p",{children:["The ",e("span",{children:"Months"})," export of the date picker supports rendering the multiple months, it expects the same properties that"," ",e("span",{children:"useDayzed"})," will return."]}),a("p",{children:["The one extra addition that is of the ",e("span",{children:"isDateDisabled"})," ","prop which can be used to disable a particular date"]}),a("p",{children:["Note that the className passed to Months is applied to all the Month children as there is no top level wrapper, see"," ",e("span",{children:"renderMonthHeader"})," for an example."]})]}),isDateDisabled:t=>D(t,x(w,2))}),e(T,{description:e("p",{children:"There are several props available for i18n/a11y purposes as outlined below, it is recommended you correctly implement these according to your application. Try turning your screen reader on and tabbing/clicking into the following examples to see the differences between them."})}),e(o,{calendarRoleDescription:"A Nice Calendar",monthAriaLabel:t=>`${t.year}-${t.month+1}`,description:a("p",{children:["For ",e("span",{children:"monthAriaLabel"})," is used for a11y compatibility, it is used to indicate to the user which month and year is currently being displayed. The default is to display the year and month numerically but it is highly recommended this is localised in the application to assist users."]})}),e(o,{renderMonthHeader:t=>{const{year:n}=t,{month:r}=t;return`${n}-${r+1}`},renderWeekdayHeader:t=>`Day ${t+1}`,monthsToDisplay:2,description:e("p",{children:"Optionally month and week header can be customosed to give visual aid to multiple calendars."})})]});var l,p,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`() => <>
    <Template description={<>
          <p>
            The <span>Months</span> export of the date picker supports rendering
            the multiple months, it expects the same properties that{' '}
            <span>useDayzed</span> will return.
          </p>
          <p>
            The one extra addition that is of the <span>isDateDisabled</span>{' '}
            prop which can be used to disable a particular date
          </p>
          <p>
            Note that the className passed to Months is applied to all the Month
            children as there is no top level wrapper, see{' '}
            <span>renderMonthHeader</span> for an example.
          </p>
        </>} isDateDisabled={(date: Date) => isSameDay(date, addDays(today, 2))} />
    <Template2 description={<p>
          There are several props available for i18n/a11y purposes as outlined
          below, it is recommended you correctly implement these according to
          your application. Try turning your screen reader on and
          tabbing/clicking into the following examples to see the differences
          between them.
        </p>} />
    <Template calendarRoleDescription="A Nice Calendar" monthAriaLabel={(calendar: Calendar) => \`\${calendar.year}-\${calendar.month + 1}\`} description={<p>
          For <span>monthAriaLabel</span> is used for a11y compatibility, it is
          used to indicate to the user which month and year is currently being
          displayed. The default is to display the year and month numerically
          but it is highly recommended this is localised in the application to
          assist users.
        </p>} />
    <Template renderMonthHeader={(calendar: Calendar) => {
    const {
      year
    } = calendar;
    const {
      month
    } = calendar;
    return \`\${year}-\${month + 1}\`;
  }} renderWeekdayHeader={(dayOfWeek: number) => \`Day \${dayOfWeek + 1}\`} monthsToDisplay={2} description={<p>
          Optionally month and week header can be customosed to give visual aid
          to multiple calendars.
        </p>} />
  </>`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const j=["Variants"];export{i as Variants,j as __namedExportsOrder,O as default};
//# sourceMappingURL=Month.stories-15b47a04.js.map
