(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{368:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n(354),i=n(400),a=n(355);function r(e){return o.createElement(i,Object.assign({className:a("modal",{"modal-small":"small"===e.size,"modal-medium":"medium"===e.size,"modal-large":"large"===e.size}),isOpen:!0,overlayClassName:a("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}i.setAppElement("#content")},382:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n(354),i=n(368),a=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&(n[o[i]]=e[o[i]])}return n};class r extends o.Component{constructor(){super(...arguments),this.mounted=!1,this.state={submitting:!1},this.stopSubmitting=(()=>{this.mounted&&this.setState({submitting:!1})}),this.handleCloseClick=(e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.props.onClose()}),this.handleFormSubmit=(e=>{e.preventDefault(),this.submit()}),this.handleSubmitClick=(e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.submit()}),this.submit=(()=>{const e=this.props.onSubmit();e&&(this.setState({submitting:!0}),e.then(this.stopSubmitting,this.stopSubmitting))})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t=e.children,n=e.header,r=e.onClose,s=(e.onSubmit,a(e,["children","header","onClose","onSubmit"]));return o.createElement(i.a,Object.assign({contentLabel:n,onRequestClose:r},s),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))}}},401:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n(354),i=n(382),a=n(366),r=n(356),s=n(0);class l extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.handleSubmit=(()=>{const e=this.props.onConfirm(this.props.confirmData);return e?e.then(this.props.onClose,()=>{}):void this.props.onClose()}),this.renderModalContent=(({onCloseClick:e,onFormSubmit:t,submitting:n})=>{const i=this.props,l=i.children,c=i.confirmButtonText,d=i.confirmDisable,u=i.header,m=i.headerDescription,h=i.isDestructive,p=i.cancelButtonText,b=void 0===p?Object(s.l)("cancel"):p;return o.createElement("form",{onSubmit:t},o.createElement("header",{className:"modal-head"},o.createElement("h2",null,u),m),o.createElement("div",{className:"modal-body"},l),o.createElement("footer",{className:"modal-foot"},o.createElement(a.a,{className:"spacer-right",loading:n}),o.createElement(r.h,{autoFocus:!0,className:h?"button-red":void 0,disabled:n||d},c),o.createElement(r.g,{disabled:n,onClick:e},b)))})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t={header:e.header,onClose:e.onClose,noBackdrop:e.noBackdrop,size:e.size};return o.createElement(i.a,Object.assign({onSubmit:this.handleSubmit},t),this.renderModalContent)}}},419:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n(354),i=n(401),a=n(420),r=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&(n[o[i]]=e[o[i]])}return n};class s extends o.PureComponent{constructor(){super(...arguments),this.renderConfirmModal=(({onClose:e})=>{const t=this.props,n=(t.children,t.modalBody),a=t.modalHeader,s=t.modalHeaderDescription,l=r(t,["children","modalBody","modalHeader","modalHeaderDescription"]);return o.createElement(i.a,Object.assign({header:a,headerDescription:s,onClose:e},l),n)})}render(){return o.createElement(a.a,{modal:this.renderConfirmModal},this.props.children)}}},420:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n(354);class i extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={modal:!1},this.handleButtonClick=(()=>{this.setState({modal:!0})}),this.handleFormSubmit=(e=>{e&&e.preventDefault(),this.setState({modal:!0})}),this.handleCloseModal=(()=>{this.mounted&&this.setState({modal:!1})})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return o.createElement(o.Fragment,null,this.props.children({onClick:this.handleButtonClick,onFormSubmit:this.handleFormSubmit}),this.state.modal&&this.props.modal({onClose:this.handleCloseModal}))}}},456:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n(421),i=n(416);function a(e){Object(o.default)().dispatch(i.b(e))}},641:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return l});var o=n(443),i=n(549),a=n(416),r=n(0);function s(e,t){return n=>o.l(e,t).then(()=>{n(i.h(e,t)),n(Object(a.b)(Object(r.l)("organization.updated")))})}function l(e){return t=>o.c(e).then(()=>{t(i.c(e))})}},969:function(e,t,n){"use strict";n.r(t),n.d(t,"OrganizationDelete",function(){return b});var o=n(354),i=n(364),a=n(419),r=n(432),s=n(0),l=n(641),c=n(356),d=n(443),u=n(13),m=n(374),h=n(410),p=n(456);class b extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={verify:""},this.fetchOrganizationPlanInfo=(()=>{Object(u.isSonarCloud)()&&Object(d.e)(this.props.organization.key).then(e=>{this.mounted&&this.setState({hasPaidPlan:"inactive"!==e.subscription.status})},()=>{this.mounted&&this.setState({hasPaidPlan:!1})})}),this.handleInput=(e=>{this.setState({verify:e.currentTarget.value})}),this.isVerified=(()=>this.state.verify.toLowerCase()===this.props.organization.name.toLowerCase()),this.onDelete=(()=>{const e=this.props.organization;return this.props.deleteOrganization(e.key).then(()=>{this.state.hasPaidPlan?this.props.router.replace({pathname:"/feedback/downgrade",state:{confirmationMessage:Object(s.m)("organization.deleted_x",e.name),organization:e,title:Object(s.l)("billing.downgrade.reason.title_deleted")}}):(Object(p.a)(Object(s.l)("organization.deleted")),this.props.router.replace("/"))})})}componentDidMount(){this.mounted=!0,this.fetchOrganizationPlanInfo()}componentWillUnmount(){this.mounted=!1}render(){const e=this.state.hasPaidPlan;return o.createElement("div",{className:"boxed-group boxed-group-inner"},o.createElement("h2",{className:"boxed-title"},Object(s.l)("organization.delete")),o.createElement("p",{className:"big-spacer-bottom width-50"},o.createElement(r.a,{message:Object(s.l)("organization.delete.description")})),o.createElement(a.a,{confirmButtonText:Object(s.l)("delete"),confirmDisable:!this.isVerified(),isDestructive:!0,modalBody:o.createElement("div",null,e&&o.createElement(m.a,{variant:"warning"},Object(s.l)("organization.delete.sonarcloud.paid_plan_info")),o.createElement("p",null,Object(s.l)("organization.delete.question")),o.createElement("div",{className:"spacer-top"},o.createElement("label",{htmlFor:"downgrade-organization-name"},Object(s.l)("billing.downgrade.modal.type_to_proceed")),o.createElement("div",{className:"little-spacer-top"},o.createElement("input",{autoFocus:!0,className:"input-super-large",id:"downgrade-organization-name",onChange:this.handleInput,type:"text",value:this.state.verify})))),modalHeader:Object(s.m)("organization.delete_x",this.props.organization.name),onConfirm:this.onDelete},({onClick:e})=>o.createElement(c.a,{className:"js-custom-measure-delete button-red",onClick:e},Object(s.l)("delete"))))}}const f={deleteOrganization:l.a};t.default=Object(h.a)(Object(i.connect)(null,f)(b))}}]);
//# sourceMappingURL=322.m.8f0071eb.chunk.js.map