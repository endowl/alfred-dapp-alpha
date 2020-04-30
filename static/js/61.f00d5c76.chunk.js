(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[61],{2492:function(e,a,t){"use strict";t.r(a);var l=t(3),n=t(8),r=t(31),s=t(16),i=t(25),c=t(20),m=t(21),o=t(0),d=t.n(o),u=t(67),f=t(801),p=t(336),v=t(896),b=t(867),g=t(987),h=function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(s.a)(this,t);for(var i=arguments.length,c=new Array(i),m=0;m<i;m++)c[m]=arguments[m];return(e=a.call.apply(a,[this].concat(c))).state={dragClass:"",files:[],statusList:[],queProgress:0},e.handleFileSelect=function(a){var t,l=a.target.files,n=[],s=Object(r.a)(l);try{for(s.s();!(t=s.n()).done;){var i=t.value;n.push({file:i,uploading:!1,error:!1,progress:0})}}catch(c){s.e(c)}finally{s.f()}e.setState({files:[].concat(n)})},e.handleDragOver=function(a){a.preventDefault(),e.setState({dragClass:"drag-shadow"})},e.handleDrop=function(a){a.preventDefault(),a.persist();var t,l=a.dataTransfer.files,n=[],s=Object(r.a)(l);try{for(s.s();!(t=s.n()).done;){var i=t.value;n.push({file:i,uploading:!1,error:!1,progress:0})}}catch(c){s.e(c)}finally{s.f()}return e.setState({dragClass:"",files:[].concat(n)}),!1},e.handleDragStart=function(a){e.setState({dragClass:"drag-shadow"})},e.handleSingleRemove=function(a){var t=Object(n.a)(e.state.files);t.splice(a,1),e.setState({files:Object(n.a)(t)})},e.handleAllRemove=function(){e.setState({files:[],queProgress:0})},e.uploadSingleFile=function(a){var t=Object(n.a)(e.state.files),r=e.state.files[a];t[a]=Object(l.a)({},r,{uploading:!0,error:!1}),e.setState({files:Object(n.a)(t)})},e.uploadAllFile=function(){var a=[];e.state.files.map((function(e){return a.push(Object(l.a)({},e,{uploading:!0,error:!1})),e})),e.setState({files:[].concat(a),queProgress:35})},e.handleSingleCancel=function(a){var t=Object(n.a)(e.state.files),r=e.state.files[a];t[a]=Object(l.a)({},r,{uploading:!1,error:!0}),e.setState({files:Object(n.a)(t)})},e.handleCancelAll=function(){var a=[];e.state.files.map((function(e){return a.push(Object(l.a)({},e,{uploading:!1,error:!0})),e})),e.setState({files:[].concat(a),queProgress:0})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.dragClass,l=a.files,n=a.queProgress,r=0===l.length;return d.a.createElement("div",null,d.a.createElement(u.a,{routeSegments:[{name:"Home",path:"/"},{name:"Extra Kits",path:"/extra-kits"},{name:"Upload"}]}),d.a.createElement(u.h,{title:"File Upload"},d.a.createElement("div",{className:"d-flex flex-wrap mb-4"},d.a.createElement("label",{htmlFor:"upload-single-file"},d.a.createElement(f.a,{className:"btn-rounded",as:"span"},d.a.createElement("div",{className:"flex flex-middle"},d.a.createElement("i",{className:"i-Share-on-Cloud"}," "),d.a.createElement("span",null,"Single File")))),d.a.createElement("input",{className:"d-none",onChange:this.handleFileSelect,id:"upload-single-file",type:"file"}),d.a.createElement("div",{className:"px-3"}),d.a.createElement("label",{htmlFor:"upload-multiple-file"},d.a.createElement(f.a,{className:"btn-rounded",as:"span"},d.a.createElement("div",{className:"flex flex-middle"},d.a.createElement("i",{className:"i-Share-on-Cloud "}," "),d.a.createElement("span",null,"Multiple File")))),d.a.createElement("input",{className:"d-none",onChange:this.handleFileSelect,id:"upload-multiple-file",type:"file",multiple:!0})),d.a.createElement("div",{className:"".concat(t," dropzone mb-4 d-flex justify-content-center align-items-center"),onDragEnter:this.handleDragStart,onDragOver:this.handleDragOver,onDrop:this.handleDrop},r?d.a.createElement("span",null,"Drop your files here"):d.a.createElement("h5",{className:"m-0"},l.length," file",l.length>1?"s":""," selected...")),d.a.createElement(p.a,{className:"mb-4"},d.a.createElement(v.a,{className:"align-items-center p-3"},d.a.createElement(b.a,{lg:4,md:4},"Name"),d.a.createElement(b.a,{lg:1,md:1},"Size"),d.a.createElement(b.a,{lg:2,md:2},"Progress"),d.a.createElement(b.a,{lg:1,md:1},"Status"),d.a.createElement(b.a,{lg:4,md:4},"Actions")),d.a.createElement("hr",{className:"mt-0 mb-3"}),r&&d.a.createElement("p",{className:"p-3 py-0"},"Que is empty"),l.map((function(a,t){var l=a.file,n=a.uploading,r=a.error,s=a.progress;return d.a.createElement(v.a,{className:"align-items-center px-3",key:l.name},d.a.createElement(b.a,{lg:4,md:4,sm:12,xs:12,className:"mb-3"},l.name),d.a.createElement(b.a,{lg:1,md:1,sm:12,xs:12,className:"mb-3"},(l.size/1024/1024).toFixed(1)," MB"),d.a.createElement(b.a,{lg:2,md:2,sm:12,xs:12,className:"mb-3"},d.a.createElement(g.a,{now:s,variant:"success",className:"progress-thin"})),d.a.createElement(b.a,{lg:1,md:1,sm:12,xs:12,className:"mb-3"},r&&d.a.createElement("i",{className:"i-Information text-danger text-18"}," ")),d.a.createElement(b.a,{lg:4,md:4,sm:12,xs:12,className:"mb-3"},d.a.createElement("div",{className:"d-flex"},d.a.createElement(f.a,{disabled:n,onClick:function(){return e.uploadSingleFile(t)}},"Upload"),d.a.createElement(f.a,{className:"mx-8",variant:"warning",disabled:!n,onClick:function(){return e.handleSingleCancel(t)}},"Cancel"),d.a.createElement(f.a,{variant:"danger",onClick:function(){return e.handleSingleRemove(t)}},"Remove"))))}))),d.a.createElement("div",null,d.a.createElement("p",{className:"m-0"},"Queue progress:"),d.a.createElement("div",{className:"py-3"},d.a.createElement(g.a,{now:n,variant:"success",className:"progress-thin"})),d.a.createElement("div",{className:"flex"},d.a.createElement(f.a,{disabled:r,onClick:this.uploadAllFile},"Upload All"),d.a.createElement(f.a,{className:"mx-8",variant:"warning",disabled:r,onClick:this.handleCancelAll},"Cancel All"),!r&&d.a.createElement(f.a,{variant:"danger",onClick:this.handleAllRemove},"Remove All")))))}}]),t}(o.Component);a.default=h},867:function(e,a,t){"use strict";var l=t(4),n=t(10),r=t(5),s=t.n(r),i=t(0),c=t.n(i),m=t(47),o=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.as,d=void 0===i?"div":i,u=Object(n.a)(e,["bsPrefix","className","as"]),f=Object(m.b)(t,"col"),p=[],v=[];return o.forEach((function(e){var a,t,l,n=u[e];if(delete u[e],null!=n&&"object"===typeof n){var r=n.span;a=void 0===r||r,t=n.offset,l=n.order}else a=n;var s="xs"!==e?"-"+e:"";null!=a&&p.push(!0===a?""+f+s:""+f+s+"-"+a),null!=l&&v.push("order"+s+"-"+l),null!=t&&v.push("offset"+s+"-"+t)})),p.length||p.push(f),c.a.createElement(d,Object(l.a)({},u,{ref:a,className:s.a.apply(void 0,[r].concat(p,v))}))}));d.displayName="Col",a.a=d},875:function(e,a,t){"use strict";t.d(a,"b",(function(){return r})),t.d(a,"a",(function(){return s}));var l=t(0),n=t.n(l);function r(e,a){var t=0;return n.a.Children.map(e,(function(e){return n.a.isValidElement(e)?a(e,t++):e}))}function s(e,a){var t=0;n.a.Children.forEach(e,(function(e){n.a.isValidElement(e)&&a(e,t++)}))}},896:function(e,a,t){"use strict";var l=t(4),n=t(10),r=t(5),s=t.n(r),i=t(0),c=t.n(i),m=t(47),o=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.noGutters,d=e.as,u=void 0===d?"div":d,f=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),p=Object(m.b)(t,"row"),v=p+"-cols",b=[];return o.forEach((function(e){var a,t=f[e];delete f[e];var l="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&b.push(""+v+l+"-"+a)})),c.a.createElement(u,Object(l.a)({ref:a},f,{className:s.a.apply(void 0,[r,p,i&&"no-gutters"].concat(b))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.a=d},987:function(e,a,t){"use strict";var l=t(4),n=t(10),r=t(5),s=t.n(r),i=t(0),c=t.n(i),m=t(47),o=t(875);function d(e,a,t){var l=(e-a)/(t-a)*100;return Math.round(1e3*l)/1e3}function u(e,a){var t,r=e.min,i=e.now,m=e.max,o=e.label,u=e.srOnly,f=e.striped,p=e.animated,v=e.className,b=e.style,g=e.variant,h=e.bsPrefix,E=Object(n.a)(e,["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"]);return c.a.createElement("div",Object(l.a)({ref:a},E,{role:"progressbar",className:s()(v,h+"-bar",(t={},t["bg-"+g]=g,t[h+"-bar-animated"]=p,t[h+"-bar-striped"]=p||f,t)),style:Object(l.a)({width:d(i,r,m)+"%"},b),"aria-valuenow":i,"aria-valuemin":r,"aria-valuemax":m}),u?c.a.createElement("span",{className:"sr-only"},o):o)}var f=c.a.forwardRef((function(e,a){var t=e.isChild,r=Object(n.a)(e,["isChild"]);if(r.bsPrefix=Object(m.b)(r.bsPrefix,"progress"),t)return u(r,a);var d=r.min,f=r.now,p=r.max,v=r.label,b=r.srOnly,g=r.striped,h=r.animated,E=r.bsPrefix,N=r.variant,x=r.className,O=r.children,j=Object(n.a)(r,["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"]);return c.a.createElement("div",Object(l.a)({ref:a},j,{className:s()(x,E)}),O?Object(o.b)(O,(function(e){return Object(i.cloneElement)(e,{isChild:!0})})):u({min:d,now:f,max:p,label:v,srOnly:b,striped:g,animated:h,bsPrefix:E,variant:N},a))}));f.displayName="ProgressBar",f.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1},a.a=f}}]);
//# sourceMappingURL=61.f00d5c76.chunk.js.map