(window.webpackJsonp=window.webpackJsonp||[]).push([[330,21,359],{1594:function(t,e,n){"use strict";n.r(e);var o=n(354),s=n(364),i=n(519),a=n(445);const r={onFail:n(416).a};e.default=Object(s.connect)(null,r)(function(t){const e=t.params,n=e.extensionKey,s=e.pluginKey,r=t.component,c=r.configuration&&(r.configuration.extensions||[]).find(t=>t.key===`${s}/${n}`);return c?o.createElement(i.a,{extension:c,options:{component:r}}):o.createElement(a.default,{withContainer:!1})})},379:function(t,e,n){var o=n(390),s=1/0,i=1.7976931348623157e308;t.exports=function(t){return t?(t=o(t))===s||t===-s?(t<0?-1:1)*i:t==t?t:0:0===t?t:0}},414:function(t,e){var n=Math.max,o=Math.min;t.exports=function(t,e,s){return t>=o(e,s)&&t<n(e,s)}},428:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return r});var o=n(354),s=n(499),i=n(361),a=n(463);function r({children:t}){return o.createElement("div",{className:"global-container"},o.createElement("div",{className:"page-wrapper",id:"container"},o.createElement(a.a,{className:"navbar-global",height:i.globalNavHeightRaw}),t),o.createElement(s.a,null))}},434:function(t,e,n){var o=n(414),s=n(379),i=n(390);t.exports=function(t,e,n){return e=s(e),void 0===n?(n=e,e=0):n=s(n),t=i(t),o(t,e,n)}},445:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c});var o=n(354),s=n(371),i=n(360),a=n(428),r=n(0);function c({withContainer:t=!0}){const e=t?a.default:o.Fragment;return o.createElement(e,null,o.createElement(s.Helmet,{defaultTitle:Object(r.l)("404_not_found"),defer:!1}),o.createElement("div",{className:"page-wrapper-simple",id:"bd"},o.createElement("div",{className:"page-simple",id:"nonav"},o.createElement("h2",{className:"big-spacer-bottom"},Object(r.l)("page_not_found")),o.createElement("p",{className:"spacer-bottom"},Object(r.l)("address_mistyped_or_page_moved")),o.createElement("p",null,o.createElement(i.Link,{to:"/"},Object(r.l)("go_back_to_homepage"))))))}},519:function(t,e,n){"use strict";var o=n(354),s=n(371),i=n.n(s),a=n(360),r=n(349),c=n(364),l=n(583),p=n(0),u=n(421),m=n(416),h=n(367);const d={onFail:m.a};e.a=Object(r.injectIntl)(Object(a.withRouter)(Object(c.connect)(function(t){return{currentUser:Object(h.getCurrentUser)(t)}},d)(class extends o.PureComponent{constructor(){super(...arguments),this.state={},this.handleStart=(t=>{const e=Object(u.default)(),n=t(Object.assign({store:e,el:this.container,currentUser:this.props.currentUser,intl:this.props.intl,location:this.props.location,router:this.props.router},this.props.options));o.isValidElement(n)?this.setState({extensionElement:n}):this.stop=n}),this.handleFailure=(()=>{this.props.onFail(Object(p.l)("page_extension_failed"))})}componentDidMount(){this.startExtension()}componentDidUpdate(t){t.extension!==this.props.extension?(this.stopExtension(),this.startExtension()):t.location!==this.props.location&&this.startExtension()}componentWillUnmount(){this.stopExtension()}startExtension(){const t=this.props.extension;Object(l.a)(t.key).then(this.handleStart,this.handleFailure)}stopExtension(){this.stop&&(this.stop(),this.stop=void 0)}render(){return o.createElement("div",null,o.createElement(i.a,{title:this.props.extension.name}),this.state.extensionElement?this.state.extensionElement:o.createElement("div",{ref:t=>this.container=t}))}})))}}]);
//# sourceMappingURL=330.m.a863bd27.chunk.js.map