(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{1664:function(e,t,n){"use strict";n.r(t);var a=n(354),s=n(371),i=n.n(s),r=n(364),c=n(797),l=n(355),o=n(360),u=n(349),m=n(432),p=n(798),d=n(675),g=n(356),h=n(0),f=n(374);class b extends a.PureComponent{constructor(){super(...arguments),this.state={openRestart:!1},this.handleOpenRestart=(()=>{this.setState({openRestart:!0})}),this.hanleCloseRestart=(()=>{this.setState({openRestart:!1})}),this.handleRevert=(()=>{Object(d.a)().then(this.props.refreshPending,()=>{})})}render(){const e=this.props.pending,t=e.installing,n=e.updating,s=e.removing;return t.length||n.length||s.length?a.createElement(f.a,{className:"js-pending",display:"banner",variant:"info"},a.createElement("div",{className:"display-flex-center"},a.createElement("span",{className:"little-spacer-right"},a.createElement(m.a,{message:Object(h.l)("marketplace.instance_needs_to_be_restarted_to")})),[{length:t.length,msg:"marketplace.install_x_plugins"},{length:n.length,msg:"marketplace.update_x_plugins"},{length:s.length,msg:"marketplace.uninstall_x_plugins"}].filter(({length:e})=>e>0).map(({length:e,msg:t},n)=>a.createElement("span",{key:t},n>0&&"; ",a.createElement(u.FormattedMessage,{defaultMessage:Object(h.l)(t),id:t,values:{nb:a.createElement("strong",null,e)}}))),a.createElement(g.a,{className:"spacer-left js-restart",onClick:this.handleOpenRestart},Object(h.l)("marketplace.restart")),a.createElement(g.a,{className:"spacer-left js-cancel-all button-red",onClick:this.handleRevert},Object(h.l)("marketplace.revert")),this.state.openRestart&&a.createElement(p.a,{onClose:this.hanleCloseRestart}))):null}}var v=n(361),E=n(714),O=n(377),j=n(663),N=n(381);class k extends a.PureComponent{constructor(){super(...arguments),this.renderExtension=(({key:e,name:t})=>a.createElement("li",{key:e},a.createElement(o.Link,{activeClassName:"active",to:`/admin/extension/${e}`},t)))}isSomethingActive(e){const t=window.location.pathname;return e.some(e=>0===t.indexOf(window.baseUrl+e))}isSecurityActive(){return this.isSomethingActive(["/admin/users","/admin/groups","/admin/permissions","/admin/permission_templates"])}isProjectsActive(){return this.isSomethingActive(["/admin/projects_management","/admin/background_tasks"])}isSystemActive(){return this.isSomethingActive(["/admin/system"])}isMarketplace(){return this.isSomethingActive(["/admin/marketplace"])}renderConfigurationTab(){const e=this.props.organizationsEnabled,t=this.props.extensions.filter(e=>"license/support"!==e.key);return a.createElement(O.b,{overlay:a.createElement("ul",{className:"menu"},a.createElement("li",null,a.createElement(o.IndexLink,{activeClassName:"active",to:"/admin/settings"},Object(h.l)("settings.page"))),a.createElement("li",null,a.createElement(o.IndexLink,{activeClassName:"active",to:"/admin/settings/encryption"},Object(h.l)("property.category.security.encryption"))),a.createElement("li",null,a.createElement(o.IndexLink,{activeClassName:"active",to:"/admin/custom_metrics"},Object(h.l)("custom_metrics.page"))),!e&&a.createElement("li",null,a.createElement(o.IndexLink,{activeClassName:"active",to:"/admin/webhooks"},Object(h.l)("webhooks.page"))),t.map(this.renderExtension)),tagName:"li"},({onToggleClick:e,open:t})=>a.createElement("a",{"aria-expanded":t,"aria-haspopup":"true",className:l("dropdown-toggle",{active:t||!this.isSecurityActive()&&!this.isProjectsActive()&&!this.isSystemActive()&&!this.isSomethingActive(["/admin/extension/license/support"])&&!this.isMarketplace()}),href:"#",id:"settings-navigation-configuration",onClick:e},Object(h.l)("sidebar.project_settings"),a.createElement(N.a,{className:"little-spacer-left"})))}renderProjectsTab(){const e=this.props.organizationsEnabled;return a.createElement(O.b,{overlay:a.createElement("ul",{className:"menu"},!e&&a.createElement("li",null,a.createElement(o.IndexLink,{activeClassName:"active",to:"/admin/projects_management"},Object(h.l)("management"))),a.createElement("li",null,a.createElement(o.IndexLink,{activeClassName:"active",to:"/admin/background_tasks"},Object(h.l)("background_tasks.page")))),tagName:"li"},({onToggleClick:e,open:t})=>a.createElement("a",{"aria-expanded":t,"aria-haspopup":"true",className:l("dropdown-toggle",{active:t||this.isProjectsActive()}),href:"#",onClick:e},Object(h.l)("sidebar.projects"),a.createElement(N.a,{className:"little-spacer-left"})))}renderSecurityTab(){const e=this.props.organizationsEnabled;return a.createElement(O.b,{overlay:a.createElement("ul",{className:"menu"},a.createElement("li",null,a.createElement(o.IndexLink,{activeClassName:"active",to:"/admin/users"},Object(h.l)("users.page"))),!e&&a.createElement("li",null,a.createElement(o.IndexLink,{activeClassName:"active",to:"/admin/groups"},Object(h.l)("user_groups.page"))),!e&&a.createElement("li",null,a.createElement(o.IndexLink,{activeClassName:"active",to:"/admin/permissions"},Object(h.l)("global_permissions.page"))),!e&&a.createElement("li",null,a.createElement(o.IndexLink,{activeClassName:"active",to:"/admin/permission_templates"},Object(h.l)("permission_templates")))),tagName:"li"},({onToggleClick:e,open:t})=>a.createElement("a",{"aria-expanded":t,"aria-haspopup":"true",className:l("dropdown-toggle",{active:t||this.isSecurityActive()}),href:"#",onClick:e},Object(h.l)("sidebar.security"),a.createElement(N.a,{className:"little-spacer-left"})))}render(){const e=this.props,t=e.extensions,n=e.pendingPlugins,s=t.find(e=>"license/support"===e.key);let i;return n.installing.length+n.removing.length+n.updating.length>0&&(i=a.createElement(b,{pending:n,refreshPending:this.props.fetchPendingPlugins})),a.createElement(E.a,{height:i?v.contextNavHeightRaw+30:v.contextNavHeightRaw,id:"context-navigation",notif:i},a.createElement("header",{className:"navbar-context-header"},a.createElement("h1",null,Object(h.l)("layout.settings"))),a.createElement(j.a,null,this.renderConfigurationTab(),this.renderSecurityTab(),this.renderProjectsTab(),a.createElement("li",null,a.createElement(o.IndexLink,{activeClassName:"active",to:"/admin/system"},Object(h.l)("sidebar.system"))),a.createElement("li",null,a.createElement(o.IndexLink,{activeClassName:"active",to:"/admin/marketplace"},Object(h.l)("marketplace.page"))),s&&a.createElement("li",null,a.createElement(o.IndexLink,{activeClassName:"active",to:"/admin/extension/license/support"},Object(h.l)("support")))))}}k.defaultProps={extensions:[]};var y=n(367),x=n(563),P=n(533),S=n(565);const _={setAdminPages:P.d};t.default=Object(r.connect)(e=>({appState:Object(y.getAppState)(e)}),_)(class extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={pendingPlugins:c.b},this.fetchNavigationSettings=(()=>{Object(x.c)().then(e=>this.props.setAdminPages(e.extensions),()=>{})}),this.fetchPendingPlugins=(()=>{Object(d.e)().then(e=>{this.mounted&&this.setState({pendingPlugins:e})},()=>{})})}componentDidMount(){this.mounted=!0,this.props.appState.canAdmin?(this.fetchNavigationSettings(),this.fetchPendingPlugins()):Object(S.a)()}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.appState,t=e.adminPages,n=e.organizationsEnabled;if(!t)return null;const s=Object(h.l)("layout.settings");return a.createElement("div",null,a.createElement(i.a,{defaultTitle:s,titleTemplate:"%s - "+s}),a.createElement(k,{extensions:t,fetchPendingPlugins:this.fetchPendingPlugins,location:this.props.location,organizationsEnabled:n,pendingPlugins:this.state.pendingPlugins}),a.createElement(c.a.Provider,{value:{fetchPendingPlugins:this.fetchPendingPlugins,pendingPlugins:this.state.pendingPlugins}},this.props.children))}})},368:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(354),s=n(400),i=n(355);function r(e){return a.createElement(s,Object.assign({className:i("modal",{"modal-small":"small"===e.size,"modal-medium":"medium"===e.size,"modal-large":"large"===e.size}),isOpen:!0,overlayClassName:i("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}s.setAppElement("#content")},379:function(e,t,n){var a=n(390),s=1/0,i=1.7976931348623157e308;e.exports=function(e){return e?(e=a(e))===s||e===-s?(e<0?-1:1)*i:e==e?e:0:0===e?e:0}},438:function(e,t,n){var a=n(379);e.exports=function(e){var t=a(e),n=t%1;return t==t?n?t-n:t:0}},478:function(e,t){e.exports=function(e,t,n,a){for(var s=e.length,i=n+(a?1:-1);a?i--:++i<s;)if(t(e[i],i,e))return i;return-1}},508:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"h",function(){return r}),n.d(t,"c",function(){return c}),n.d(t,"d",function(){return l}),n.d(t,"e",function(){return o}),n.d(t,"b",function(){return u}),n.d(t,"f",function(){return m}),n.d(t,"g",function(){return g});var a,s=n(4),i=n(372);function r(e){return Object(s.post)("/api/system/change_log_level",{level:e}).catch(i.a)}function c(){return Object(s.getJSON)("/api/system/info").catch(i.a)}function l(){return Object(s.getJSON)("/api/system/status")}function o(){return Object(s.getJSON)("/api/system/upgrades")}function u(){return Object(s.getJSON)("/api/system/db_migration_status")}function m(){return Object(s.postJSON)("/api/system/migrate_db")}!function(e){e.RED="RED",e.YELLOW="YELLOW",e.GREEN="GREEN"}(a||(a={}));const p=2e3;function d(){return new Promise(e=>(function e(t){setTimeout(()=>{l().then(n=>{"UP"===n.status?t():e(t)}).catch(()=>e(t))},p)})(e))}function g(){return Object(s.post)("/api/system/restart").catch(i.a).then(d)}},563:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return c});var a=n(4),s=n(372);function i(e){return Object(a.getJSON)("/api/navigation/component",e).catch(s.a)}function r(){return Object(a.getJSON)("/api/navigation/marketplace").catch(s.a)}function c(){return Object(a.getJSON)("/api/navigation/settings").catch(s.a)}},565:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(421),s=n(454),i=n(533);function r(){const e=Object(a.default)(),t=Object(s.a)(),n=window.location.pathname+window.location.search+window.location.hash;e.dispatch(Object(i.c)()),t.replace({pathname:"/sessions/new",query:{return_to:n}})}},675:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"e",function(){return o}),n.d(t,"c",function(){return p}),n.d(t,"d",function(){return d}),n.d(t,"f",function(){return g}),n.d(t,"g",function(){return h}),n.d(t,"h",function(){return f}),n.d(t,"i",function(){return b}),n.d(t,"a",function(){return v});var a=n(676),s=n.n(a),i=n(4),r=n(372),c=n(518);function l(){return Object(i.getJSON)("/api/plugins/available").catch(r.a)}function o(){return Object(i.getJSON)("/api/plugins/pending").catch(r.a)}function u(e){if(!e)return[];return["COMPATIBLE","REQUIRES_SYSTEM_UPGRADE","DEPS_REQUIRE_SYSTEM_UPGRADE"].map(t=>{const n=s()(e,e=>e.status===t);return n>-1?e[n]:void 0}).filter(c.a)}function m(e,t){if(!t)return e;const n=t.indexOf(e),a=n>0?t.slice(0,n):[];return Object.assign({},e,{previousUpdates:a})}function p(){return Object(i.getJSON)("/api/plugins/installed",{f:"category"}).then(({plugins:e})=>e,r.a)}function d(){return Promise.all([Object(i.getJSON)("/api/plugins/installed",{f:"category"}),Object(i.getJSON)("/api/plugins/updates")]).then(([e,t])=>e.plugins.map(e=>{const n=t.plugins.find(t=>t.key===e.key);return n?Object.assign({},n,e,{updates:u(n.updates).map(e=>m(e,n.updates))}):e})).catch(r.a)}function g(){return Promise.all([Object(i.getJSON)("/api/plugins/updates"),Object(i.getJSON)("/api/plugins/installed")]).then(([e,t])=>e.plugins.map(e=>{const n=u(e.updates).map(t=>m(t,e.updates)),a=t.plugins.find(t=>t.key===e.key);return a?Object.assign({},a,e,{updates:n}):Object.assign({},e,{updates:n})})).catch(r.a)}function h(e){return Object(i.post)("/api/plugins/install",e).catch(r.a)}function f(e){return Object(i.post)("/api/plugins/uninstall",e).catch(r.a)}function b(e){return Object(i.post)("/api/plugins/update",e).catch(r.a)}function v(){return Object(i.post)("/api/plugins/cancel_all").catch(r.a)}},676:function(e,t,n){var a=n(478),s=n(14),i=n(438),r=Math.max,c=Math.min;e.exports=function(e,t,n){var l=null==e?0:e.length;if(!l)return-1;var o=l-1;return void 0!==n&&(o=i(n),o=n<0?r(l+o,0):c(o,l-1)),a(e,s(t,3),o,!0)}},797:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(354);const s={installing:[],removing:[],updating:[]},i=a.createContext({fetchPendingPlugins:()=>{},pendingPlugins:s});t.a=i},798:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(354),s=n(355),i=n(508),r=n(368),c=n(356),l=n(0);class o extends a.PureComponent{constructor(){super(...arguments),this.state={restarting:!1},this.handleFormSubmit=(e=>{e.preventDefault(),this.state.restarting||(this.setState({restarting:!0}),Object(i.g)().then(()=>document.location&&document.location.reload(),()=>this.setState({restarting:!1})))})}render(){const e=this.state.restarting,t=Object(l.l)("system.restart_server");return a.createElement(r.a,{contentLabel:t,onRequestClose:e?void 0:this.props.onClose},a.createElement("form",{id:"restart-form",onSubmit:this.handleFormSubmit},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("div",{className:"modal-body"},a.createElement("p",{className:s("spacer-top spacer-bottom",{"text-center":e})},Object(l.l)(e?"system.is_restarting":"system.are_you_sure_to_restart")),e&&a.createElement("p",{className:"big-spacer-top spacer-bottom text-center"},a.createElement("i",{className:"spinner"}))),!e&&a.createElement("div",{className:"modal-foot"},a.createElement(c.h,{id:"restart-server-submit"},Object(l.l)("restart")),a.createElement(c.g,{className:"js-modal-close",id:"restart-server-cancel",onClick:this.props.onClose},Object(l.l)("cancel")))))}}}}]);
//# sourceMappingURL=299.m.680a79e7.chunk.js.map