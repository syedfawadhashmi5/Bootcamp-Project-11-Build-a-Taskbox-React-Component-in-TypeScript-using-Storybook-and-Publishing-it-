(this.webpackJsonptaskbox=this.webpackJsonptaskbox||[]).push([[0],{13:function(e,t,a){e.exports=a(27)},18:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(4),l=a.n(s),r=(a(5),a(18),a(2)),i=a(8),m=a(3),o=a(9),u=Object(o.b)({name:"Task",initialState:[{id:"1",title:"Something",state:"TASK_INBOX"},{id:"2",title:"Something more",state:"TASK_INBOX"},{id:"3",title:"Something else",state:"TASK_INBOX"},{id:"4",title:"Something again",state:"TASK_INBOX"}],reducers:{archiveTask:function(e,t){return e.map((function(e){return e.id===t.payload?Object(m.a)(Object(m.a)({},e),{},{state:"TASK_ARCHIVED"}):e}))},pinTask:function(e,t){return e.map((function(e){return e.id===t.payload?Object(m.a)(Object(m.a)({},e),{},{state:"TASK_PINNED"}):e}))}}}),d=Object(o.a)({reducer:u.reducer}),E=u.actions,p=E.archiveTask,N=E.pinTask,v=(u.reducer,function(e){var t=e.task,a=t.id,c=t.title,s=t.state,l=(e.onArchiveTask,e.onPinTask,Object(r.b)());return n.createElement("div",{className:"list-item ".concat(s)},n.createElement("label",{className:"checkbox"},n.createElement("input",{type:"checkbox",defaultChecked:"TASK_ARCHIVED"===s,disabled:!0,name:"checked"}),n.createElement("span",{className:"checkbox-custom",onClick:function(){return l(p(a))}})),n.createElement("div",{className:"title"},n.createElement("input",{type:"text",value:c,readOnly:!0,placeholder:"Input title"})),n.createElement("div",{className:"actions",onClick:function(e){return e.stopPropagation()}},"TASK_ARCHIVED"!==s&&n.createElement("a",{onClick:function(){return l(N(a))}},n.createElement("span",{className:"icon-star"}))))}),k=function(e){var t=e.loading,a=e.tasks,n={onPinTask:e.onPinTask,onArchiveTask:e.onArchiveTask},s=c.a.createElement("div",{className:"loading-item"},c.a.createElement("span",{className:"glow-checkbox"}),c.a.createElement("span",{className:"glow-text"},c.a.createElement("span",null,"Loading"),"  ",c.a.createElement("span",null,"cool")," ",c.a.createElement("span",null,"state")));if(t)return c.a.createElement("div",{className:"list-items"},s,s,s,s,s,s);if(0===(null===a||void 0===a?void 0:a.length))return c.a.createElement("div",{className:"list-items"},c.a.createElement("div",{className:"wrapper-message"},c.a.createElement("span",{className:"icon-check"}),c.a.createElement("div",{className:"title-message"},"You have no tasks"),c.a.createElement("div",{className:"subtitle-message"},"Sit back and relax")));var l=[].concat(Object(i.a)(a.filter((function(e){return"TASK_PINNED"===e.state}))),Object(i.a)(a.filter((function(e){return"TASK_PINNED"!==e.state}))));return c.a.createElement("div",{className:"list-items"},l.map((function(e){return c.a.createElement(v,Object.assign({key:e.id,task:e},n))})))};var g=function(e){var t=e.error,a=Object(r.c)((function(e){return e}));return t?c.a.createElement("div",{className:"page lists-show"},c.a.createElement("div",{className:"wrapper-message"},c.a.createElement("span",{className:"icon-face-sad"}),c.a.createElement("div",{className:"title-message"},"Oh no!"),c.a.createElement("div",{className:"subtitle-message"},"Something went wrong"))):c.a.createElement("div",{className:"page lists-show"},c.a.createElement("nav",null,c.a.createElement("h1",{className:"title-page"},c.a.createElement("span",{className:"title-wrapper"},"Taskbox"))),c.a.createElement(k,{tasks:a,loading:!1}))};var h=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(r.a,{store:d},c.a.createElement(g,null)))},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),s(e),l(e)}))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(r.a,{store:d},c.a.createElement(h,null))),document.getElementById("root")),b()},5:function(e,t,a){}},[[13,1,2]]]);
//# sourceMappingURL=main.54ed5ba0.chunk.js.map