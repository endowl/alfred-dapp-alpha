(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[102],{2498:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a.n(n),c=a(32),i=a(16),l=a(25),s=a(20),o=a(21),m=a(0),u=a.n(m),p=a(67),h=a(2193),d=a.n(h),g=a(801),f=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={src:"/assets/images/photo-wide-3.jpg",crop:{aspect:1},img:null},e.handleFileSelect=function(t){var a=t.target.files[0],n=URL.createObjectURL(a);e.setState({src:n})},e.handleCrop=Object(c.a)(r.a.mark((function t(){var a,n,c,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state,n=a.crop,c=a.img){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.getCroppedImg(c,n,"test");case 5:i=t.sent,e.setState({src:URL.createObjectURL(i)});case 7:case"end":return t.stop()}}),t)}))),e.getCroppedImg=function(e,t,a){var n=document.createElement("canvas"),r=e.naturalWidth/e.width,c=e.naturalHeight/e.height;return n.width=t.width,n.height=t.height,n.getContext("2d").drawImage(e,t.x*r,t.y*c,t.width*r,t.height*c,0,0,t.width,t.height),new Promise((function(e,t){n.toBlob((function(t){t.name=a,e(t)}),"image/jpeg",1)}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.src,n=t.crop;return u.a.createElement("div",null,u.a.createElement(p.a,{routeSegments:[{name:"Home",path:"/"},{name:"Extra Kits",path:"/extra-kits"},{name:"Image Cropper"}]}),u.a.createElement("label",{htmlFor:"upload-single-file"},u.a.createElement(g.a,{className:"btn-rounded mr-3 mb-3",as:"span"},u.a.createElement("div",{className:"flex flex-middle"},u.a.createElement("i",{className:"i-Share-on-Cloud"}," "),u.a.createElement("span",null,"Single File")))),u.a.createElement("input",{className:"d-none",onChange:this.handleFileSelect,id:"upload-single-file",type:"file",accept:"image/*"}),u.a.createElement(g.a,{onClick:this.handleCrop,className:"btn-rounded mb-3"},"Crop Image"),u.a.createElement("div",{className:"d-block"},u.a.createElement(d.a,{src:a,crop:n,circularCrop:!0,onImageLoaded:function(t){return e.setState({img:t})},onChange:function(t){e.setState({crop:t})}})))}}]),a}(m.Component);t.default=f}}]);
//# sourceMappingURL=102.71bf5752.chunk.js.map