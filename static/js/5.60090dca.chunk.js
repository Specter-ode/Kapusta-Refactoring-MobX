"use strict";(self.webpackChunkkapustamobx=self.webpackChunkkapustamobx||[]).push([[5],{7628:function(e,n,t){t.d(n,{r:function(){return u}});var a,r,s=t(2791),c=["title","titleId"];function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function o(e,n){var t=e.title,o=e.titleId,u=l(e,c);return s.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",ref:n,"aria-labelledby":o},u),t?s.createElement("title",{id:o},t):null,a||(a=s.createElement("g",{clipPath:"url(#clip0_11_747)"},s.createElement("path",{fill:"#FF751D",d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"}))),r||(r=s.createElement("defs",null,s.createElement("clipPath",{id:"clip0_11_747"},s.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"})))))}var u=s.forwardRef(o);t.p},5698:function(e,n,t){t.d(n,{Z:function(){return g}});var a,r=t(885),s="Modal_modal__DJDMv",c="Modal_active__-p53x Modal_modal__DJDMv",i="Modal_partOfModal__yZSNf",l="Modal_text__KJZTz",o=t(2791),u=["title","titleId"];function d(){return d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},d.apply(this,arguments)}function _(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function m(e,n){var t=e.title,r=e.titleId,s=_(e,u);return o.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",style:{enableBackground:"new 0 0 16 16"},xmlSpace:"preserve",ref:n,"aria-labelledby":r},s),t?o.createElement("title",{id:r},t):null,a||(a=o.createElement("path",{d:"M8 3 0 13h16z"})))}var p=o.forwardRef(m),h=(t.p,t(184)),v=function(e){var n=e.handleToggle,t=e.active;e.setActive;return(0,h.jsxs)("div",{className:"".concat(t?c:s," "),onClick:function(e){e.target===e.currentTarget&&n()},children:[(0,h.jsx)("p",{children:"Hello! To get started, enter the current balance of your account!"}),(0,h.jsx)("p",{className:l,children:"You can't spend money until you have it :)"}),(0,h.jsx)(p,{width:"25px",className:i})]})},f=t(32),x=t(6871),b={container:"Balance_container__qL3d1",balance:"Balance_balance__41oSS",wrap:"Balance_wrap__-7-60",input:"Balance_input__5zeug",spinner:"Balance_spinner__y8L42",confirmBtn:"Balance_confirmBtn__ctfY4",amount:"Balance_amount__PZJn2"},j=t(3152),g=(0,f.Pi)((function(){var e=(0,o.useState)(!1),n=(0,r.Z)(e,2),t=n[0],a=n[1],s=j.M.userData.transactions,c=(0,x.TH)().pathname,i=j.M.userData.balance,l=(0,o.useState)(i),u=(0,r.Z)(l,2),d=u[0],_=u[1],m=(0,o.useState)("".concat(i.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ")," UAH")),p=(0,r.Z)(m,2),f=p[0],g=p[1],y=s.length>0;(0,o.useEffect)((function(){g("".concat(i.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ")," UAH"))}),[i]),(0,o.useEffect)((function(){"/transactions/expenses"!==c||0!==s.length||0!==i||a(!0)}),[c,s,i]);return(0,h.jsxs)("div",{className:b.container,children:[(0,h.jsx)("span",{className:b.balance,children:"Balance:"}),(0,h.jsxs)("form",{className:b.wrap,onSubmit:function(e){e.preventDefault();var n=Number(d).toFixed(2);j.M.updateUserBalance(Number(n)),e.target.balance.blur()},children:[(0,h.jsx)("div",{className:b.amount,children:(0,h.jsx)("input",{className:b.input,name:"balance",value:f,onChange:function(e){var n=e.target.value;!Number(n)&&n||(g(n),_(n))},onFocus:function(){g("")},onBlur:function(){g("".concat(i.toFixed(2)," UAH"))},disabled:y})}),(0,h.jsx)("button",{className:b.confirmBtn,type:"submit",disabled:y,children:"CONFIRM"}),t&&(0,h.jsx)(v,{className:b.modal,handleToggle:function(){a(!t)},active:t,setActive:a})]})]})}))},8005:function(e,n,t){t.r(n),t.d(n,{default:function(){return ze}});var a,r,s=t(885),c="TransactionsPage_main__XB168",i="TransactionsPage_meta__XhHZj",l="TransactionsPage_container__hW7yI",o="TransactionsPage_wrap__S5Fc3",u="TransactionsPage_reportsBtn__2I+bo",d="TransactionsPage_reports__1Sq5I",_="TransactionsPage_icon__kXk+3",m="TransactionsPage_absCalendar__-n7Vo",p=t(2791),h=["title","titleId"];function v(){return v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},v.apply(this,arguments)}function f(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function x(e,n){var t=e.title,s=e.titleId,c=f(e,h);return p.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",ref:n,"aria-labelledby":s},c),t?p.createElement("title",{id:s},t):null,a||(a=p.createElement("g",{clipPath:"url(#clip0_19402_517)"},p.createElement("path",{d:"M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"}))),r||(r=p.createElement("defs",null,p.createElement("clipPath",{id:"clip0_19402_517"},p.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"})))))}var b=p.forwardRef(x),j=(t.p,t(5698)),g={},y=t(6871),N=t(5861),w=t(4687),O=t.n(w),E={tableContainer:"TransactionDetailsMobile_tableContainer__MwzI0",title:"TransactionDetailsMobile_title__ve3nk",list__item:"TransactionDetailsMobile_list__item__kd1zb",text__container:"TransactionDetailsMobile_text__container__gsHwm",item__text:"TransactionDetailsMobile_item__text__dkknX",divSumAndButtonFlex:"TransactionDetailsMobile_divSumAndButtonFlex__ebExB",btnDelete:"TransactionDetailsMobile_btnDelete__4qwV4",plus:"TransactionDetailsMobile_plus__ZQrTn",minus:"TransactionDetailsMobile_minus__u7kvK"},k=t(9365),M=t(32),T=t(3152),D=t(184),S=(0,M.Pi)((function(){var e=(0,p.useState)(!1),n=(0,s.Z)(e,2),t=n[0],a=n[1],r=(0,p.useState)(""),c=(0,s.Z)(r,2),i=c[0],l=c[1],o=T.M.deleteTransactionMob,u=T.M.userData,d=function(){var e=(0,N.Z)(O().mark((function e(n){return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!1),e.prev=1,e.next=4,o(n);case 4:e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}(),_=function(e,n){return"".concat(e)+n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ")+" \u0433\u0440\u043d."},m=u.transactions.map((function(e){var n="\u0417/\u041f"===e.category||"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434"===e.category;return(0,D.jsxs)("li",{className:E.list__item,children:[(0,D.jsxs)("div",{className:E.item__container,children:[(0,D.jsx)("h2",{className:E.title,children:e.description}),(0,D.jsxs)("div",{className:E.text__container,children:[(0,D.jsx)("p",{className:E.item__text,children:e.date}),(0,D.jsx)("p",{className:E.item__text,children:e.category})]})]}),(0,D.jsxs)("div",{className:E.divSumAndButtonFlex,children:[n?(0,D.jsx)("p",{className:E.plus,children:_("+",e.amount)}):(0,D.jsx)("p",{className:E.minus,children:_("-",e.amount)}),(0,D.jsx)("button",{onClick:function(){return n=e._id,a(!0),void l(n);var n},type:"button",className:E.btnDelete})]})]},e._id)}));return(0,D.jsxs)("div",{className:E.tableContainer,children:[(0,D.jsx)("ul",{className:E.list,children:m.reverse()}),t&&(0,D.jsx)(k.t,{title:"Are you sure?",onClickYes:function(){return d(i)},onClickNo:function(){return a(!1)}})]})})),A=t(3504),I={container:"ExpensesAndIncome_container__VzR9B",thumbs:"ExpensesAndIncome_thumbs__A-7FH",form:"ExpensesAndIncome_form__mTRS9",input:"ExpensesAndIncome_input__eyApu",select:"ExpensesAndIncome_select__l3klf",price:"ExpensesAndIncome_price__bRDBN",background_icon:"ExpensesAndIncome_background_icon__ycQ0a",icon_cal:"ExpensesAndIncome_icon_cal__8oIj+",wrapper_input_cal:"ExpensesAndIncome_wrapper_input_cal__g69cH",btn:"ExpensesAndIncome_btn__I4lWn",wrapper_button:"ExpensesAndIncome_wrapper_button__WtfSp",icon_second_cal:"ExpensesAndIncome_icon_second_cal__i57ii",blok_input:"ExpensesAndIncome_blok_input__6Cd+S",block:"ExpensesAndIncome_block__3cU2C",backArrow:"ExpensesAndIncome_backArrow__vCA0W",button__container:"ExpensesAndIncome_button__container__fd6Bw",wrapper_nav:"ExpensesAndIncome_wrapper_nav__LXTMa",link:"ExpensesAndIncome_link__TMsTg",icon_back:"ExpensesAndIncome_icon_back__x+EKg",activeLink:"ExpensesAndIncome_activeLink__zWY4i ExpensesAndIncome_link__TMsTg"},z=function(e){var n=e.onClickSubmit,t=e.onClickReset;return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("button",{className:I.btn,type:"submit",onClick:n,children:"INPUT"}),(0,D.jsx)("button",{className:I.btn,type:"submit",onClick:t,children:"CLEAR"})]})},H=function(e){return e.isActive?I.activeLink:I.link},C=function(){return(0,D.jsx)("div",{className:I.button__container,children:(0,D.jsxs)("ul",{className:I.wrapper_nav,children:[(0,D.jsx)("li",{className:I.item,children:(0,D.jsx)(A.OL,{className:H,to:"/transactions/expenses",children:"Expenses"})}),(0,D.jsx)("li",{className:I.item,children:(0,D.jsx)(A.OL,{className:H,to:"/transactions/incomes",children:"Income"})})]})})};function P(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function B(){var e=(0,p.useState)(P()),n=(0,s.Z)(e,2),t=n[0],a=n[1];return(0,p.useEffect)((function(){function e(){a(P())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}var Z,F,R=function(){var e=(0,y.TH)(),n=B().width,t="/transactions"===e.pathname&&Boolean(n)<768;return(0,D.jsx)("div",{className:g.container,children:"/transactions"===e.pathname&&(0,D.jsxs)("div",{className:g.wrap,children:[(0,D.jsx)(S,{}),t&&(0,D.jsx)(C,{})]})})},L=t(9085),V="Calendar_container__zNs0t",W="Calendar_calendar__vKx+D",U="Calendar_icon__AiXLB",Y=t(9513),J=t.n(Y),X=["title","titleId"];function $(){return $=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},$.apply(this,arguments)}function q(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function K(e,n){var t=e.title,a=e.titleId,r=q(e,X);return p.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",ref:n,"aria-labelledby":a},r),t?p.createElement("title",{id:a},t):null,Z||(Z=p.createElement("path",{fill:"#52555F",d:"M17.475 2.067h-1.312v-.32a.586.586 0 1 0-1.171 0v.32h-1.617v-.32a.586.586 0 0 0-1.172 0v.32h-1.617v-.32a.586.586 0 1 0-1.172 0v.32H7.797v-.32a.586.586 0 0 0-1.172 0v.32H5.008v-.32a.586.586 0 0 0-1.171 0v.32H2.525A2.527 2.527 0 0 0 0 4.592v11.724a2.527 2.527 0 0 0 2.525 2.524h14.95A2.527 2.527 0 0 0 20 16.316V4.592a2.527 2.527 0 0 0-2.525-2.525zm1.353 14.249c0 .746-.607 1.352-1.353 1.352H2.525a1.354 1.354 0 0 1-1.353-1.352V6.733h17.656v9.583zm0-10.755H1.172v-.97c0-.745.607-1.352 1.353-1.352h1.312v.227a.586.586 0 0 0 1.171 0v-.227h1.617v.227a.586.586 0 0 0 1.172 0v-.227h1.617v.227a.586.586 0 0 0 1.172 0v-.227h1.617v.227a.586.586 0 0 0 1.172 0v-.227h1.617v.227a.586.586 0 1 0 1.171 0v-.227h1.312c.746 0 1.353.607 1.353 1.353v.969z"})),F||(F=p.createElement("path",{fill:"#52555F",d:"M6.532 7.981H4.22a.586.586 0 0 0-.586.586v2.393c0 .323.262.585.586.585h2.312a.586.586 0 0 0 .586-.585V8.567a.586.586 0 0 0-.586-.586zm-.586 2.393h-1.14v-1.22h1.14v1.22zM11.156 7.981H8.844a.586.586 0 0 0-.586.586v2.393c0 .323.262.585.586.585h2.312a.586.586 0 0 0 .586-.585V8.567a.586.586 0 0 0-.586-.586zm-.586 2.393H9.43v-1.22h1.14v1.22zM15.78 7.981h-2.312a.586.586 0 0 0-.586.586v2.393c0 .323.263.585.586.585h2.312a.586.586 0 0 0 .586-.585V8.567a.586.586 0 0 0-.586-.586zm-.586 2.393h-1.14v-1.22h1.14v1.22zM6.532 12.526H4.22a.586.586 0 0 0-.586.586v2.392c0 .324.262.586.586.586h2.312a.586.586 0 0 0 .586-.586v-2.392a.586.586 0 0 0-.586-.586zm-.586 2.392h-1.14v-1.22h1.14v1.22zM11.156 12.526H8.844a.586.586 0 0 0-.586.586v2.392c0 .324.262.586.586.586h2.312a.586.586 0 0 0 .586-.586v-2.392a.586.586 0 0 0-.586-.586zm-.586 2.392H9.43v-1.22h1.14v1.22zM15.78 12.526h-2.312a.586.586 0 0 0-.586.586v2.392c0 .324.263.586.586.586h2.312a.586.586 0 0 0 .586-.586v-2.392a.586.586 0 0 0-.586-.586zm-.586 2.392h-1.14v-1.22h1.14v1.22z"})))}var G,Q,ee=p.forwardRef(K),ne=(t.p,t(8639),function(e){var n=e.date,t=e.setDate;return(0,D.jsxs)("div",{className:V,children:[(0,D.jsx)(ee,{className:U}),(0,D.jsx)(J(),{className:W,dateFormat:"dd/MM/yyyy",maxDate:new Date,selected:n,onChange:function(e){return t(e)}})]})}),te="Summary_summary__N6WqZ",ae="Summary_month__8pRdL",re="Summary_title__jaC+J",se="Summary_text__8p6lE",ce="Summary_note__M-nyl",ie=(0,M.Pi)((function(e){var n,t,a=e.params,r=void 0===a?"":a,c=null===Object||void 0===Object?void 0:Object.values(r)[0],i=(0,p.useState)(!1),l=(0,s.Z)(i,2),o=l[0],u=l[1],d=(0,p.useState)(!0),_=(0,s.Z)(d,2),m=_[0],h=_[1],v=T.l.incomeStats,f=T.l.expenseStats,x=T.l.expenseTransactions,b=void 0===x?[]:x,j=T.l.incomeTransactions,g=void 0===j?[]:j;(0,p.useEffect)((function(){if("expenses"===c)return h(!0),void u(!1);"incomes"===c&&(u(!0),h(!1))}),[c]);var y=function(e){return e.filter((function(e){return"number"===typeof e[1]})).map((function(e){return(0,D.jsxs)("div",{className:ae,children:[(0,D.jsx)("span",{className:se,children:e[0]}),(0,D.jsx)("span",{className:se,children:e[1].toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ")})]},e[0])})).reverse()},N=(null===b||void 0===b||null===(n=b.expenses)||void 0===n?void 0:n.length)>0,w=(null===g||void 0===g||null===(t=g.incomes)||void 0===t?void 0:t.length)>0;return(0,D.jsxs)("div",{className:te,children:[(0,D.jsx)("h2",{className:re,children:"SUMMARY"}),m&&N&&y(Object.entries(f).map((function(e){return Object.assign({},e)}))),m&&!N&&(0,D.jsx)("div",{className:ae,children:(0,D.jsx)("p",{className:"".concat(se," ").concat(ce),children:"You don't have expense transactions"})}),o&&w&&y(Object.entries(v).map((function(e){return Object.assign({},e)}))),o&&!w&&(0,D.jsx)("div",{className:ae,children:(0,D.jsx)("p",{className:"".concat(se," ").concat(ce),children:"You don't have income transactions"})})]})})),le="TransactionDetails_scrollTable__D0L7h",oe="TransactionDetails_scrollTableBody__gCYBA",ue="TransactionDetails_tableHead__82mZ0",de="TransactionDetails_table__head__empty__WJNnA",_e="TransactionDetails_body__empty__No4mR",me="TransactionDetails_table__head__date__Nim+4",pe="TransactionDetails_table__head__text__EmaRA",he="TransactionDetails_table__head__category__P2gCX",ve="TransactionDetails_table__head__sum__7Z+6J",fe="TransactionDetails_table__head__delete__bjI+x",xe="TransactionDetails_body__8gCsI",be="TransactionDetails_body__date__pl8jk",je="TransactionDetails_body__description__6vghR",ge="TransactionDetails_body__category__6fuP0",ye="TransactionDetails_minus__XmGjy",Ne="TransactionDetails_plus__5gB6v",we="TransactionDetails_body__delete__oMzJJ",Oe="TransactionDetails_btnDelete__YA2q5",Ee=(0,M.Pi)((function(){var e,n=(0,p.useState)(!1),t=(0,s.Z)(n,2),a=t[0],r=t[1],c=(0,p.useState)(""),i=(0,s.Z)(c,2),l=i[0],o=i[1],u=(0,y.TH)(),d=T.l.deleteTransaction,_=T.l.income,m=T.l.expense,h=T.l.changeExpenseMonthStats,v=T.l.changeIncomeMonthStats,f="/transactions/expenses"===u.pathname?m:_,x=function(){var e=(0,N.Z)(O().mark((function e(n){var t,a,s,c,i,l;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!1),e.prev=1,e.next=4,d(n);case 4:"/transactions/expenses"===u.pathname?(t=m.find((function(e){return e._id===n})),a=new Date(t.date).toLocaleString("ru-Ru",{year:"numeric",month:"long"}).split(" ")[0],s=a.charAt(0).toUpperCase()+a.slice(1),h(s,-t.amount)):(c=_.find((function(e){return e._id===n})),i=new Date(c.date).toLocaleString("ru-Ru",{year:"numeric",month:"long"}).split(" ")[0],l=i.charAt(0).toUpperCase()+i.slice(1),v(l,-c.amount)),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}(),b=function(e){return"/transactions/expenses"===u.pathname?"- "+e.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ")+" \u0433\u0440\u043d.":"+ "+e.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ")+" \u0433\u0440\u043d."},j="/transactions/expenses"===u.pathname?ye:Ne;return(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)("div",{className:le,children:[(0,D.jsx)("table",{children:(0,D.jsx)("thead",{className:ue,children:(0,D.jsxs)("tr",{children:[(0,D.jsx)("th",{className:de}),(0,D.jsx)("th",{className:me,children:"DATE"}),(0,D.jsx)("th",{className:pe,children:"DESCRIPTION"}),(0,D.jsx)("th",{className:he,children:"CATEGORY"}),(0,D.jsx)("th",{className:ve,children:"SUM"}),(0,D.jsx)("th",{className:fe})]})})}),(0,D.jsx)("div",{className:oe,children:(0,D.jsx)("table",{children:(0,D.jsx)("tbody",{children:null===f||void 0===f||null===(e=f.map((function(e){var n=e.date,t=e.description,a=e.category,s=e.amount,c=e._id,i=new Date(n).toLocaleDateString("en-GB");return(0,D.jsxs)("tr",{className:xe,children:[(0,D.jsx)("td",{className:_e}),(0,D.jsx)("td",{className:be,children:i}),(0,D.jsx)("td",{className:je,children:t}),(0,D.jsx)("td",{className:ge,children:a}),(0,D.jsx)("td",{className:j,children:b(s)}),(0,D.jsx)("td",{className:we,children:(0,D.jsx)("button",{onClick:function(){return e=c,r(!0),void o(e);var e},type:"button",className:Oe})})]},c)})))||void 0===e?void 0:e.reverse()})})}),a&&(0,D.jsx)(k.t,{title:"Are you sure?",onClickYes:function(){return x(l)},onClickNo:function(){return r(!1)}})]})})})),ke=t(7628),Me=["title","titleId"];function Te(){return Te=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Te.apply(this,arguments)}function De(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function Se(e,n){var t=e.title,a=e.titleId,r=De(e,Me);return p.createElement("svg",Te({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",ref:n,"aria-labelledby":a},r),t?p.createElement("title",{id:a},t):null,G||(G=p.createElement("path",{fill:"#52555F",d:"M17.031 0H2.97A1.76 1.76 0 0 0 1.21 1.758v16.484c0 .97.788 1.758 1.758 1.758H17.03a1.76 1.76 0 0 0 1.758-1.758V1.758A1.76 1.76 0 0 0 17.031 0zm.586 18.242a.587.587 0 0 1-.586.586H2.97a.587.587 0 0 1-.586-.586V1.758c0-.323.263-.586.586-.586H17.03c.323 0 .586.263.586.586v16.484z"})),Q||(Q=p.createElement("path",{fill:"#52555F",d:"M15.86 2.344H4.14a.586.586 0 0 0-.585.586v4.765c0 .324.262.586.586.586h11.718a.586.586 0 0 0 .586-.586V2.93a.586.586 0 0 0-.586-.586zm-.587 4.765H4.727V3.516h10.546v3.593zM6.484 9.453H4.141a.586.586 0 0 0-.586.586v2.344c0 .323.262.586.586.586h2.343a.586.586 0 0 0 .586-.586v-2.344a.586.586 0 0 0-.586-.586zm-.586 2.344H4.727v-1.172h1.171v1.172zM6.484 14.14H4.141a.586.586 0 0 0-.586.587v2.343c0 .324.262.586.586.586h2.343a.586.586 0 0 0 .586-.586v-2.343a.586.586 0 0 0-.586-.586zm-.586 2.344H4.727v-1.172h1.171v1.172zM11.172 9.453H8.828a.586.586 0 0 0-.586.586v2.344c0 .323.263.586.586.586h2.344a.586.586 0 0 0 .586-.586v-2.344a.586.586 0 0 0-.586-.586zm-.586 2.344H9.414v-1.172h1.172v1.172zM11.172 14.14H8.828a.586.586 0 0 0-.586.587v2.343c0 .324.263.586.586.586h2.344a.586.586 0 0 0 .586-.586v-2.343a.586.586 0 0 0-.586-.586zm-.586 2.344H9.414v-1.172h1.172v1.172zM15.86 9.453h-2.344a.586.586 0 0 0-.586.586v7.031c0 .324.262.586.586.586h2.343a.586.586 0 0 0 .586-.586v-7.03a.586.586 0 0 0-.586-.587zm-.587 7.031h-1.171v-5.859h1.171v5.86z"})))}var Ae=p.forwardRef(Se),Ie=(t.p,(0,M.Pi)((function(e){var n=e.date,t=e.setDate,a=(0,y.UO)(),r=(0,p.useState)(""),c=(0,s.Z)(r,2),i=c[0],l=c[1],o=(0,p.useState)(""),u=(0,s.Z)(o,2),d=u[0],_=u[1],m=(0,p.useState)(""),h=(0,s.Z)(m,2),v=h[0],f=h[1],x=T.l.expenseCategories,b=T.l.incomeCategories,j=T.l.addExpense,g=T.l.addIncome,N=T.l.changeIncomeMonthStats,w=T.l.changeExpenseMonthStats,O=T.M.addExpenseMob,E=T.M.addIncomeMob,k=(0,y.TH)(),M=n.toJSON().slice(0,10),S=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"description":l(a);break;case"price":f(a);break;case"category":_(a);break;default:return}},H=i.length>0&&v.length>0&&d.length>0&&"Product category"!==d,P=B().width;return(0,D.jsxs)(D.Fragment,{children:[Boolean(P>768)&&(0,D.jsx)(C,{}),(0,D.jsxs)("div",{className:I.container,children:[(0,D.jsxs)("div",{className:I.block,children:[(0,D.jsxs)("div",{className:I.thumbs,children:[(0,D.jsx)(A.OL,{to:"/",className:I.icon_back,children:(0,D.jsx)(ke.r,{className:I.backArrow})}),(0,D.jsx)(ne,{date:n,setDate:t}),(0,D.jsxs)("form",{className:I.form,children:[(0,D.jsxs)("div",{className:I.blok_input,children:[(0,D.jsx)("input",{className:I.input,name:"description",value:i,type:"text",onChange:S,placeholder:"Product description"}),(0,D.jsxs)("select",{className:I.select,placeholder:"Product category",name:"category",value:d,autoComplete:"off",autoCorrect:"off",onChange:S,children:[(0,D.jsx)("option",{defaultValue:!0,children:"Product category"}),"/transactions/expenses"===k.pathname?x&&x.map((function(e){return(0,D.jsx)("option",{value:e,children:e},e)})):b&&b.map((function(e){return(0,D.jsx)("option",{value:e,children:e},e)}))]}),(0,D.jsxs)("div",{className:I.wrapper_input_cal,children:[(0,D.jsx)("input",{className:I.price,name:"price",value:v,placeholder:"00.00",onChange:S}),(0,D.jsx)("div",{className:I.background_icon,children:(0,D.jsx)(Ae,{className:I.icon_cal})}),(0,D.jsx)(Ae,{className:I.icon_second_cal})]})]}),(0,D.jsx)("div",{className:I.wrapper_button,children:(0,D.jsx)(z,{className:I.btn,type:"submit",onClickSubmit:function(e){e.preventDefault();var t=n.toLocaleString("ru-Ru",{year:"numeric",month:"long"}).split(" ")[0],a=t.charAt(0).toUpperCase()+t.slice(1);if(H){var r={description:i,amount:Number(v),date:M,category:d};"/transactions/expenses"===k.pathname?window.innerWidth>767?(j(r),w(a,Number(v))):O(r):window.innerWidth>767?(g(r),N(a,Number(v))):E(r),l(""),_(""),f("")}else L.Am.error("Fill in all the fields")},onClickReset:function(e){e.preventDefault(),l(""),_(""),f("")}})})]})]}),(0,D.jsx)(Ee,{})]}),(0,D.jsx)(ie,{params:a})]})]})}))),ze=(0,M.Pi)((function(){var e=(0,y.TH)().pathname,n=window.innerWidth>767||"/transactions"===e,t=window.innerWidth<768&&"/transactions"===e,a=(0,p.useState)((function(){return new Date})),r=(0,s.Z)(a,2),h=r[0],v=r[1];return(0,D.jsxs)("main",{className:i,children:[(0,D.jsx)("div",{className:l}),(0,D.jsxs)("div",{className:c,children:[n&&(0,D.jsxs)("div",{className:o,children:[(0,D.jsxs)(A.rU,{className:u,to:"/reports",children:[(0,D.jsx)("span",{className:d,children:"Reports"}),(0,D.jsx)(b,{className:_})]}),(0,D.jsx)(j.Z,{})]}),t&&(0,D.jsx)("div",{className:m,children:(0,D.jsx)(ne,{date:h,setDate:v})}),(0,D.jsx)(R,{date:h,setDate:v}),(0,D.jsxs)(y.Z5,{children:[(0,D.jsx)(y.AW,{path:"expenses",element:(0,D.jsx)(Ie,{date:h,setDate:v})}),(0,D.jsx)(y.AW,{path:"incomes",element:(0,D.jsx)(Ie,{date:h,setDate:v})})]})]})]})}))}}]);
//# sourceMappingURL=5.60090dca.chunk.js.map