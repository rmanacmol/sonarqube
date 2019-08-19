(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{1654:function(e,t,n){"use strict";n.r(t);var r=n(354),a=n(371),s=n.n(a),l=n(366),i=n(382),o=n(356),c=n(0);class m extends r.PureComponent{constructor(){super(...arguments),this.state={name:"",url:""},this.handleSubmit=(()=>this.props.onSubmit(this.state.name,this.state.url).then(this.props.onClose)),this.handleNameChange=(e=>{this.setState({name:e.currentTarget.value})}),this.handleUrlChange=(e=>{this.setState({url:e.currentTarget.value})})}render(){const e=Object(c.l)("project_links.create_new_project_link");return r.createElement(i.a,{header:e,onClose:this.props.onClose,onSubmit:this.handleSubmit,size:"small"},({onCloseClick:t,onFormSubmit:n,submitting:a})=>r.createElement("form",{onSubmit:n},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,e)),r.createElement("div",{className:"modal-body"},r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"create-link-name"},Object(c.l)("project_links.name"),r.createElement("em",{className:"mandatory"},"*")),r.createElement("input",{autoFocus:!0,id:"create-link-name",maxLength:128,name:"name",onChange:this.handleNameChange,required:!0,type:"text",value:this.state.name})),r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"create-link-url"},Object(c.l)("project_links.url"),r.createElement("em",{className:"mandatory"},"*")),r.createElement("input",{id:"create-link-url",maxLength:128,name:"url",onChange:this.handleUrlChange,required:!0,type:"text",value:this.state.url}))),r.createElement("footer",{className:"modal-foot"},r.createElement(l.a,{className:"spacer-right",loading:a}),r.createElement(o.h,{disabled:a,id:"create-link-confirm"},Object(c.l)("create")),r.createElement(o.g,{disabled:a,onClick:t},Object(c.l)("cancel")))))}}class u extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={creationModal:!1},this.handleCreateClick=(()=>{this.setState({creationModal:!0})}),this.handleCreationModalClose=(()=>{this.mounted&&this.setState({creationModal:!1})})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return r.createElement(r.Fragment,null,r.createElement("header",{className:"page-header"},r.createElement("h1",{className:"page-title"},Object(c.l)("project_links.page")),r.createElement("div",{className:"page-actions"},r.createElement(o.a,{id:"create-project-link",onClick:this.handleCreateClick},Object(c.l)("create"))),r.createElement("div",{className:"page-description"},Object(c.l)("project_links.page.description"))),this.state.creationModal&&r.createElement(m,{onClose:this.handleCreationModalClose,onSubmit:this.props.onCreate}))}}var d=n(674),h=n(419),p=n(705),f=n(795);class b extends r.PureComponent{constructor(){super(...arguments),this.renderNameForProvided=(e=>r.createElement("div",{className:"display-inline-block text-top"},r.createElement("div",null,r.createElement("span",{className:"js-name"},Object(d.a)(e))),r.createElement("div",{className:"note little-spacer-top"},r.createElement("span",{className:"js-type"},`sonar.links.${e.type}`)))),this.renderName=(e=>r.createElement("div",null,r.createElement(p.a,{className:"little-spacer-right",type:e.type}),Object(d.b)(e)?this.renderNameForProvided(e):r.createElement("div",{className:"display-inline-block text-top"},r.createElement("span",{className:"js-name"},e.name)))),this.renderDeleteButton=(e=>Object(d.b)(e)?null:r.createElement(h.a,{confirmButtonText:Object(c.l)("delete"),confirmData:e.id,isDestructive:!0,modalBody:Object(c.m)("project_links.are_you_sure_to_delete_x_link",e.name),modalHeader:Object(c.l)("project_links.delete_project_link"),onConfirm:this.props.onDelete},({onClick:e})=>r.createElement(o.a,{className:"button-red js-delete-button",onClick:e},Object(c.l)("delete"))))}render(){const e=this.props.link;return r.createElement("tr",{"data-name":e.name},r.createElement("td",{className:"nowrap"},this.renderName(e)),r.createElement("td",{className:"nowrap js-url"},Object(f.a)(e.url)?r.createElement("a",{href:e.url,rel:"nofollow noreferrer noopener",target:"_blank"},e.url):e.url),r.createElement("td",{className:"thin nowrap"},this.renderDeleteButton(e)))}}class E extends r.PureComponent{renderHeader(){return r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{className:"nowrap"},Object(c.l)("project_links.name")),r.createElement("th",{className:"nowrap width-100"},Object(c.l)("project_links.url")),r.createElement("th",{className:"thin"}," ")))}render(){if(!this.props.links.length)return r.createElement("div",{className:"note"},Object(c.l)("no_results"));const e=Object(d.c)(this.props.links).map(e=>r.createElement(b,{key:e.id,link:e,onDelete:this.props.onDelete}));return r.createElement("div",{className:"boxed-group boxed-group-inner"},r.createElement("table",{className:"data zebra",id:"project-links"},this.renderHeader(),r.createElement("tbody",null,e)))}}var C=n(796);n.d(t,"default",function(){return g});class g extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0},this.fetchLinks=(()=>{this.setState({loading:!0}),Object(C.c)(this.props.component.key).then(e=>{this.mounted&&this.setState({links:e,loading:!1})},()=>{this.mounted&&this.setState({loading:!1})})}),this.handleCreateLink=((e,t)=>Object(C.a)({name:e,projectKey:this.props.component.key,url:t}).then(e=>{this.mounted&&this.setState(({links:t=[]})=>({links:[...t,e]}))})),this.handleDeleteLink=(e=>Object(C.b)(e).then(()=>{this.mounted&&this.setState(({links:t=[]})=>({links:t.filter(t=>t.id!==e)}))}))}componentDidMount(){this.mounted=!0,this.fetchLinks()}componentDidUpdate(e){e.component.key!==this.props.component.key&&this.fetchLinks()}componentWillUnmount(){this.mounted=!1}render(){return r.createElement("div",{className:"page page-limited"},r.createElement(s.a,{title:Object(c.l)("project_links.page")}),r.createElement(u,{onCreate:this.handleCreateLink}),r.createElement(l.a,{loading:this.state.loading},this.state.links&&r.createElement(E,{links:this.state.links,onDelete:this.handleDeleteLink})))}}},368:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(354),a=n(400),s=n(355);function l(e){return r.createElement(a,Object.assign({className:s("modal",{"modal-small":"small"===e.size,"modal-medium":"medium"===e.size,"modal-large":"large"===e.size}),isOpen:!0,overlayClassName:s("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}a.setAppElement("#content")},382:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(354),a=n(368),s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};class l extends r.Component{constructor(){super(...arguments),this.mounted=!1,this.state={submitting:!1},this.stopSubmitting=(()=>{this.mounted&&this.setState({submitting:!1})}),this.handleCloseClick=(e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.props.onClose()}),this.handleFormSubmit=(e=>{e.preventDefault(),this.submit()}),this.handleSubmitClick=(e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.submit()}),this.submit=(()=>{const e=this.props.onSubmit();e&&(this.setState({submitting:!0}),e.then(this.stopSubmitting,this.stopSubmitting))})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t=e.children,n=e.header,l=e.onClose,i=(e.onSubmit,s(e,["children","header","onClose","onSubmit"]));return r.createElement(a.a,Object.assign({contentLabel:n,onRequestClose:l},i),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))}}},401:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(354),a=n(382),s=n(366),l=n(356),i=n(0);class o extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.handleSubmit=(()=>{const e=this.props.onConfirm(this.props.confirmData);return e?e.then(this.props.onClose,()=>{}):void this.props.onClose()}),this.renderModalContent=(({onCloseClick:e,onFormSubmit:t,submitting:n})=>{const a=this.props,o=a.children,c=a.confirmButtonText,m=a.confirmDisable,u=a.header,d=a.headerDescription,h=a.isDestructive,p=a.cancelButtonText,f=void 0===p?Object(i.l)("cancel"):p;return r.createElement("form",{onSubmit:t},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,u),d),r.createElement("div",{className:"modal-body"},o),r.createElement("footer",{className:"modal-foot"},r.createElement(s.a,{className:"spacer-right",loading:n}),r.createElement(l.h,{autoFocus:!0,className:h?"button-red":void 0,disabled:n||m},c),r.createElement(l.g,{disabled:n,onClick:e},f)))})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t={header:e.header,onClose:e.onClose,noBackdrop:e.noBackdrop,size:e.size};return r.createElement(a.a,Object.assign({onSubmit:this.handleSubmit},t),this.renderModalContent)}}},419:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(354),a=n(401),s=n(420),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};class i extends r.PureComponent{constructor(){super(...arguments),this.renderConfirmModal=(({onClose:e})=>{const t=this.props,n=(t.children,t.modalBody),s=t.modalHeader,i=t.modalHeaderDescription,o=l(t,["children","modalBody","modalHeader","modalHeaderDescription"]);return r.createElement(a.a,Object.assign({header:s,headerDescription:i,onClose:e},o),n)})}render(){return r.createElement(s.a,{modal:this.renderConfirmModal},this.props.children)}}},420:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(354);class a extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={modal:!1},this.handleButtonClick=(()=>{this.setState({modal:!0})}),this.handleFormSubmit=(e=>{e&&e.preventDefault(),this.setState({modal:!0})}),this.handleCloseModal=(()=>{this.mounted&&this.setState({modal:!1})})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return r.createElement(r.Fragment,null,this.props.children({onClick:this.handleButtonClick,onFormSubmit:this.handleFormSubmit}),this.state.modal&&this.props.modal({onClose:this.handleCloseModal}))}}},488:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(354),a=n(359);function s({className:e,fill:t="currentColor",size:n}){return r.createElement(a.a,{className:e,size:n},r.createElement("path",{d:"M12 9.25v2.5A2.25 2.25 0 0 1 9.75 14h-6.5A2.25 2.25 0 0 1 1 11.75v-6.5A2.25 2.25 0 0 1 3.25 3h5.5c.14 0 .25.11.25.25v.5c0 .14-.11.25-.25.25h-5.5C2.562 4 2 4.563 2 5.25v6.5c0 .688.563 1.25 1.25 1.25h6.5c.688 0 1.25-.563 1.25-1.25v-2.5c0-.14.11-.25.25-.25h.5c.14 0 .25.11.25.25zm3-6.75v4c0 .273-.227.5-.5.5a.497.497 0 0 1-.352-.148l-1.375-1.375L7.68 10.57a.27.27 0 0 1-.18.078.27.27 0 0 1-.18-.078l-.89-.89a.27.27 0 0 1-.078-.18.27.27 0 0 1 .078-.18l5.093-5.093-1.375-1.375A.497.497 0 0 1 10 2.5c0-.273.227-.5.5-.5h4c.273 0 .5.227.5.5z",style:{fill:t}}))}},522:function(e,t,n){var r=n(449)(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]});e.exports=r},591:function(e,t,n){(function(e){!function(e){"use strict";e.exports.is_uri=n,e.exports.is_http_uri=r,e.exports.is_https_uri=a,e.exports.is_web_uri=s,e.exports.isUri=n,e.exports.isHttpUri=r,e.exports.isHttpsUri=a,e.exports.isWebUri=s;var t=function(e){return e.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/)};function n(e){if(e&&!/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(e)&&!/%[^0-9a-f]/i.test(e)&&!/%[0-9a-f](:?[^0-9a-f]|$)/i.test(e)){var n,r,a,s,l,i="",o="";if(i=(n=t(e))[1],r=n[2],a=n[3],s=n[4],l=n[5],i&&i.length&&a.length>=0){if(r&&r.length){if(0!==a.length&&!/^\//.test(a))return}else if(/^\/\//.test(a))return;if(/^[a-z][a-z0-9\+\-\.]*$/.test(i.toLowerCase()))return o+=i+":",r&&r.length&&(o+="//"+r),o+=a,s&&s.length&&(o+="?"+s),l&&l.length&&(o+="#"+l),o}}}function r(e,r){if(n(e)){var a,s,l,i,o="",c="",m="",u="";if(o=(a=t(e))[1],c=a[2],s=a[3],l=a[4],i=a[5],o){if(r){if("https"!=o.toLowerCase())return}else if("http"!=o.toLowerCase())return;if(c)return/:(\d+)$/.test(c)&&(m=c.match(/:(\d+)$/)[0],c=c.replace(/:\d+$/,"")),u+=o+":",u+="//"+c,m&&(u+=m),u+=s,l&&l.length&&(u+="?"+l),i&&i.length&&(u+="#"+i),u}}}function a(e){return r(e,!0)}function s(e){return r(e)||a(e)}}(e)}).call(this,n(17)(e))},674:function(e,t,n){"use strict";n.d(t,"b",function(){return m}),n.d(t,"c",function(){return u}),n.d(t,"a",function(){return d});var r=n(370),a=n.n(r),s=n(522),l=n.n(s),i=n(0);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,s=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,s=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const c=["homepage","ci","issue","scm","scm_dev"];function m(e){return c.includes(e.type)}function u(e){const t=o(l()(e,m),2),n=t[0],r=t[1];return[...a()(n,e=>c.indexOf(e.type)),...a()(r,e=>e.name.toLowerCase())]}function d(e){return m(e)?Object(i.l)("project_links",e.type):e.name}},705:function(e,t,n){"use strict";var r=n(354),a=n(359);function s({className:e,fill:t="currentColor",size:n}){return r.createElement(a.a,{className:e,size:n},r.createElement("path",{d:"M13.5 9.5c1.003.033 1.466 1.952 0 2h-2.618L9.685 9.107 8 14.162 6.096 8.45l-.832 3.05-2.829-.002c-.984-.097-1.369-1.951.065-1.998h1.236l2.168-7.95L8 7.838l1.315-3.945L12.118 9.5H13.5z",style:{fill:t}}))}function l({className:e,fill:t="currentColor",size:n}){return r.createElement(a.a,{className:e,size:n},r.createElement("path",{d:"M13.002 8.848v4.168a.56.56 0 0 1-.556.555H9.11v-3.334H6.89v3.334H3.554a.56.56 0 0 1-.556-.555V8.848c0-.018.01-.035.01-.052L8 4.68l4.993 4.116c.009.017.009.034.009.052zm1.936-.6l-.538.643a.289.289 0 0 1-.183.096h-.026a.273.273 0 0 1-.182-.061L8 3.916l-6.009 5.01a.297.297 0 0 1-.208.06.289.289 0 0 1-.183-.095l-.538-.642a.285.285 0 0 1 .035-.391L7.34 2.656a1.07 1.07 0 0 1 1.32 0l2.119 1.772V2.735c0-.157.121-.278.278-.278h1.667c.156 0 .278.121.278.278v3.542l1.901 1.58c.113.096.13.279.035.392z",style:{fill:t}}))}function i({className:e,fill:t="currentColor",size:n}){return r.createElement(a.a,{className:e,size:n},r.createElement("path",{d:"M13.805 9.25c0 .016 0 .04-.008.055C13.133 12.07 10.852 14 7.969 14c-1.524 0-3-.602-4.11-1.656l-1.007 1.008a.497.497 0 0 1-.352.148.504.504 0 0 1-.5-.5V9.5c0-.273.227-.5.5-.5H6c.273 0 .5.227.5.5a.497.497 0 0 1-.148.352l-1.07 1.07a3.988 3.988 0 0 0 6.125-.828c.187-.305.28-.602.413-.914.04-.11.117-.18.235-.18h1.5c.14 0 .25.117.25.25zM14 3v3.5c0 .273-.227.5-.5.5H10a.504.504 0 0 1-.5-.5c0-.133.055-.258.148-.352l1.079-1.078A4.019 4.019 0 0 0 8 4c-1.39 0-2.68.719-3.406 1.906-.188.305-.282.602-.414.914-.04.11-.117.18-.235.18H2.391a.252.252 0 0 1-.25-.25v-.055C2.812 3.922 5.117 2 8 2c1.531 0 3.023.61 4.133 1.656l1.015-1.008A.497.497 0 0 1 13.5 2.5c.273 0 .5.227.5.5z",style:{fill:t}}))}function o({className:e,fill:t="currentColor",size:n}){return r.createElement(a.a,{className:e,size:n},r.createElement("path",{d:"M12.557 4.545c.241.247.443.743.443 1.098v7.714c0 .355-.28.643-.625.643h-8.75A.634.634 0 0 1 3 13.357V2.643C3 2.288 3.28 2 3.625 2h5.833c.345 0 .827.208 1.068.455l2.031 2.09zM9.667 2.91v2.518h2.448a.86.86 0 0 0-.144-.275L9.934 3.058a.823.823 0 0 0-.267-.147zm2.5 10.232V6.286H9.458a.634.634 0 0 1-.625-.643V2.857h-5v10.286h8.334z",style:{fill:t}}))}var c=n(488);n.d(t,"a",function(){return u});var m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function u(e){var t=e.type,n=m(e,["type"]);switch(t){case"issue":return r.createElement(s,Object.assign({},n));case"homepage":return r.createElement(l,Object.assign({},n));case"ci":return r.createElement(i,Object.assign({},n));case"scm":return r.createElement(o,Object.assign({},n));default:return r.createElement(c.a,Object.assign({},n))}}},795:function(e,t,n){"use strict";var r=n(591);t.a=function(e){return/^(\/|scm:)/.test(e)||!!Object(r.isWebUri)(e)}},796:function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"b",function(){return l}),n.d(t,"a",function(){return i});var r=n(372),a=n(4);function s(e){return Object(a.getJSON)("/api/project_links/search",{projectKey:e}).then(e=>e.links,r.a)}function l(e){return Object(a.post)("/api/project_links/delete",{id:e}).catch(r.a)}function i(e){return Object(a.postJSON)("/api/project_links/create",e).then(e=>e.link,r.a)}}}]);
//# sourceMappingURL=297.m.750fce5f.chunk.js.map