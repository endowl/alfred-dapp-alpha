(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[122],{2527:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(25),l=a(20),s=a(21),c=a(0),i=a.n(c),u=a(842),o=a(801),m=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={variantList:["primary","secondary","success","danger","warning","info","light","dark"],showCustomAlert:!0},e.handleClose=function(t){var a=e.state.variantList.filter((function(e,a){return a!==t}));e.setState({variantList:a})},e.closeCustomAlert=function(){e.setState({showCustomAlert:!1})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.variantList,n=t.showCustomAlert;return i.a.createElement(c.Fragment,null,n&&i.a.createElement(u.a,{className:"text-center alert-card",variant:"warning",dismissible:!0,onClose:this.closeCustomAlert},"Gull makes developent life easier!",i.a.createElement(o.a,{variant:"warning",className:"btn-rounded ml-3"},"Buy Now")),a.map((function(t,a){return i.a.createElement(u.a,{key:a,variant:t,dismissible:!0,onClose:function(){return e.handleClose(a)}},"This is a ",t," alert\u2014check it out!")})))}}]),a}(c.Component),d=a(13),h=function(){var e=Object(c.useState)(!0),t=Object(d.a)(e,2),a=t[0],n=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{show:a,variant:"success"},i.a.createElement(u.a.Heading,null,"How's it going?!"),i.a.createElement("p",null,"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum."),i.a.createElement("hr",{className:"my-3"}),i.a.createElement("div",{className:"d-flex justify-content-end"},i.a.createElement(o.a,{onClick:function(){return n(!1)},variant:"outline-success"},"Close me ya'll!"))),!a&&i.a.createElement(o.a,{onClick:function(){return n(!0)}},"Show Alert"))},v=function(){var e=i.a.useState(!0),t=Object(d.a)(e,2),a=t[0],n=t[1];return i.a.createElement(c.Fragment,null,a&&i.a.createElement(u.a,{variant:"danger",dismissible:!0,onClose:function(){return n(!1)}},i.a.createElement(u.a.Heading,null,"Oh snap! You got an error!"),i.a.createElement("p",null,"Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.")),!a&&i.a.createElement(o.a,{variant:"success",onClick:function(){return n(!0)}},"Show Alert"))},f=a(67),E=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(f.a,{routeSegments:[{name:"UI Kits",path:"/uikits"},{name:"Alerts"}]}),i.a.createElement("div",{className:"mb-4"},i.a.createElement(m,null)),i.a.createElement("div",{className:"mb-4"},i.a.createElement("h4",{className:"mb-3"},"Success Alert"),i.a.createElement(h,null)),i.a.createElement("div",{className:"mb-4"},i.a.createElement("h4",{className:"mb-3"},"Danger Alert"),i.a.createElement(v,null)))}}]),a}(c.Component);t.default=E}}]);
//# sourceMappingURL=122.4e7a6a1e.chunk.js.map