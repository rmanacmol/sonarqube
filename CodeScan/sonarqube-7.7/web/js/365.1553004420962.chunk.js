(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{1853:function(e,t,n){"use strict";n.r(t);var s,a=n(592),i=n(587),r=n(701),o=n(599),l=n(788),c=n(17),d=n(600),m=n(612),p=(s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={identityProviders:[],loading:!0},t.fetchIdentityProviders=function(){t.setState({loading:!0}),Object(r.d)().then(function(e){var n=e.identityProviders;t.mounted&&t.setState({identityProviders:n,loading:!1})},function(){t.mounted&&t.setState({loading:!1})})},t.renderIdentityProvier=function(e,n){var s=t.state.identityProviders.find(function(t){return t.key===e});return s?a.createElement("div",{className:"identity-provider",style:{backgroundColor:s.backgroundColor,color:Object(l.a)(s.backgroundColor,o.secondFontColor)}},a.createElement("img",{alt:s.name,className:"little-spacer-right",height:"14",src:Object(d.b)()+s.iconPath,width:"14"}),n):a.createElement("div",null,"sonarqube"!==e&&e," ",n)},t}return p(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchIdentityProviders()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.location.query;return a.createElement("div",{className:"page-wrapper-simple",id:"bd"},a.createElement("div",{className:"page-simple",id:"nonav"},a.createElement("div",{className:"big-spacer-bottom js-existing-account"},a.createElement("p",{className:"little-spacer-bottom"},a.createElement(i.FormattedMessage,{defaultMessage:Object(c.l)("sessions.email_already_exists.1"),id:"sessions.email_already_exists.1",values:{email:a.createElement("strong",null,e.email)}})),this.renderIdentityProvier(e.existingProvider,e.existingLogin)),a.createElement("div",{className:"big-spacer-bottom js-new-account"},a.createElement("p",{className:"little-spacer-bottom"},Object(c.l)("sessions.email_already_exists.2")),this.renderIdentityProvier(e.provider,e.login)),a.createElement(m.a,{variant:"warning"},Object(c.l)("sessions.email_already_exists.3"),a.createElement("ul",{className:"list-styled"},a.createElement("li",{className:"spacer-top"},Object(c.l)("sessions.email_already_exists.4")),a.createElement("li",{className:"spacer-top"},Object(c.l)("sessions.email_already_exists.5")),a.createElement("li",{className:"spacer-top"},Object(c.l)("sessions.email_already_exists.6")))),a.createElement("div",{className:"big-spacer-top text-right"},a.createElement("a",{className:"button js-continue",href:Object(d.b)()+"/sessions/init/"+e.provider+"?allowEmailShift=true"},Object(c.l)("continue")),a.createElement("a",{className:"big-spacer-left js-cancel",href:Object(d.b)()+"/"},Object(c.l)("cancel")))))},t}(a.PureComponent);t.default=u}}]);
//# sourceMappingURL=365.1553004420962.chunk.js.map