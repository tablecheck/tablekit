import{r as k,s as m,u as x,b as L,W}from"./MonthArrowButtons-775eacd1.js";import{bp as v}from"./TextArea-e94462f7.js";import{j as r,a as h,F as R}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";function C(a,n){k(2,arguments);var s=m(a),i=m(n);return s.getTime()===i.getTime()}var w=v("div",{target:"ehasww81"})({name:"oldbq4",styles:"user-select:none"}),A=v("h2",{target:"ehasww80"})({name:"lms0ky",styles:"text-align:center;margin-bottom:var(--spacing-l2);font:var(--label)"});function N(a){var n=a.calendarRoleDescription,s=n===void 0?"Calendar":n,i=a.renderWeekdayHeader,d=a.renderMonthHeader,u=a.monthAriaLabel,D=u===void 0?function(e){return"".concat(e.year,"-").concat(e.month+1)}:u,f=a.className,p=a.isDateDisabled,o=x(),y=o.calendars,b=o.setHoveredDate,g=o.setFocusedDate,H=o.domId;return r(R,{children:y.map(function(e){var M="".concat(H,"-").concat(e.year,"-").concat(e.month),l,c=d==null?void 0:d(e);return typeof c=="string"?l=r(A,{"aria-live":"polite",children:c}):l=c||null,h(w,{className:f,children:[l,h("table",{"aria-label":D(e),"aria-roledescription":s,role:"grid",onMouseLeave:function(){return b(void 0)},onBlur:function(){return g(void 0)},children:[r("thead",{children:r(L,{calendar:e,renderDay:i})}),r("tbody",{children:e.weeks.map(function(t){return r(W,{week:t,isDateDisabled:p},(t[0]||t[6]).date.getTime())})})]})]},M)})})}export{N as M,C as i};
//# sourceMappingURL=index-641c3cf7.js.map