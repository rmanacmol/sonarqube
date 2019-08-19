(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{1221:function(e,t,n){var r=n(1222);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(358)(r,a);r.locals&&(e.exports=r.locals)},1222:function(e,t,n){(e.exports=n(357)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2019 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.placeholder-bar {\n  display: inline-block;\n  vertical-align: middle;\n  height: 8px;\n  background-color: currentColor;\n}\n",""])},1670:function(e,t,n){"use strict";n.r(t);var r=n(354),a=n(360),l=n(364),o=n(901),c=n(367),s=n(392),i=n(462);n(1221);function m({color:e,width:t,height:n}){return r.createElement("span",{className:"placeholder-bar",style:{color:e,width:t,height:n}})}var d=n(0);var u=Object(l.connect)(e=>{const t=Object(c.getGlobalSettingValue)(e,"sonar.prismic.accessToken");return{accessToken:t&&t.value}})(class extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1},this.fetchProductNews=(()=>{const e=this.props,t=e.accessToken,n=e.tag;t&&(this.setState({loading:!0}),Object(o.c)().then(({ref:e})=>Object(o.b)({accessToken:t,ref:e,tag:n})).then(e=>{this.mounted&&this.setState({news:e[0],loading:!1})},()=>{this.mounted&&this.setState({loading:!1})}))})}componentDidMount(){this.mounted=!0,this.fetchProductNews()}componentWillUnmount(){this.mounted=!1}renderPlaceholder(){return r.createElement("a",{className:"rich-item new-loading"},r.createElement("div",{className:"flex-1"},r.createElement("div",{className:"display-inline-flex-center"},r.createElement("h4",null,Object(d.l)("embed_docs.latest_blog")),r.createElement("span",{className:"note spacer-left"},r.createElement(m,{color:"#aaa",width:60}))),r.createElement("p",{className:"little-spacer-bottom"},r.createElement(m,{color:"#aaa",width:84})," ",r.createElement(m,{color:"#aaa",width:48})," ",r.createElement(m,{color:"#aaa",width:24})," ",r.createElement(m,{color:"#aaa",width:72})," ",r.createElement(m,{color:"#aaa",width:24})," ",r.createElement(m,{color:"#aaa",width:48}))),r.createElement(i.a,{className:"flex-0"}))}render(){const e=this.state,t=e.loading,n=e.news;return t?this.renderPlaceholder():n?r.createElement("a",{className:"rich-item",href:"https://blog.sonarsource.com/"+n.uid,rel:"noopener noreferrer",target:"_blank"},r.createElement("div",{className:"flex-1"},r.createElement("div",{className:"display-inline-flex-center"},r.createElement("h4",null,Object(d.l)("embed_docs.latest_blog")),r.createElement(s.a,{date:n.last_publication_date},e=>r.createElement("span",{className:"note spacer-left"},e))),r.createElement("p",{className:"little-spacer-bottom"},n.data.title)),r.createElement(i.a,{className:"flex-0"})):null}}),h=n(403),b=n(362),p=n(13),g=n(377);n.d(t,"default",function(){return E});class E extends r.PureComponent{constructor(){super(...arguments),this.renderSuggestions=(({suggestions:e})=>0===e.length?null:r.createElement(r.Fragment,null,this.renderTitle(Object(d.l)("embed_docs.suggestion")),e.map((e,t)=>r.createElement("li",{key:t},r.createElement(a.Link,{onClick:this.props.onClose,target:"_blank",to:e.link},e.text))),r.createElement("li",{className:"divider"})))}renderTitle(e){return r.createElement("li",{className:"menu-header"},e)}renderIconLink(e,t,n){return r.createElement("a",{href:e,rel:"noopener noreferrer",target:"_blank"},r.createElement("img",{alt:n,className:"spacer-right",height:"18",src:`${Object(b.b)()}/images/${t}`,width:"18"}),n)}renderSonarCloudLinks(){return r.createElement(r.Fragment,null,r.createElement("li",{className:"divider"}),r.createElement("li",null,r.createElement("a",{href:"https://community.sonarsource.com/c/help/sc",rel:"noopener noreferrer",target:"_blank"},Object(d.l)("embed_docs.get_help"))),r.createElement("li",{className:"divider"}),this.renderTitle(Object(d.l)("embed_docs.stay_connected")),r.createElement("li",null,this.renderIconLink("https://twitter.com/sonarcloud","embed-doc/twitter-icon.svg","Twitter")),r.createElement("li",null,this.renderIconLink("https://blog.sonarsource.com/product/SonarCloud","sonarcloud-square-logo.svg",Object(d.l)("embed_docs.blog"))),r.createElement("li",null,r.createElement(u,{tag:"SonarCloud"})))}renderSonarQubeLinks(){return r.createElement(r.Fragment,null,r.createElement("li",{className:"divider"}),r.createElement("li",null,r.createElement("a",{href:"https://community.sonarsource.com/",rel:"noopener noreferrer",target:"_blank"},Object(d.l)("embed_docs.get_help"))),r.createElement("li",{className:"divider"}),this.renderTitle(Object(d.l)("embed_docs.stay_connected")),r.createElement("li",null,this.renderIconLink("https://www.sonarsource.com/resources/product-news/","embed-doc/sq-icon.svg",Object(d.l)("embed_docs.news"))),r.createElement("li",null,this.renderIconLink("https://twitter.com/SonarQube","embed-doc/twitter-icon.svg","Twitter")))}render(){return r.createElement(g.a,null,r.createElement("ul",{className:"menu abs-width-240"},r.createElement(h.a.Consumer,null,this.renderSuggestions),r.createElement("li",null,r.createElement(a.Link,{onClick:this.props.onClose,target:"_blank",to:"/documentation"},Object(d.l)("embed_docs.documentation"))),r.createElement("li",null,r.createElement(a.Link,{onClick:this.props.onClose,to:"/web_api"},Object(d.l)("api_documentation.page"))),Object(p.isSonarCloud)()?this.renderSonarCloudLinks():this.renderSonarQubeLinks()))}}},392:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return s});var r=n(354),a=n(349),l=n(12);const o={year:"numeric",month:"short",day:"2-digit"},c={year:"numeric",month:"long",day:"numeric"};function s({children:e,date:t,long:n}){return r.createElement(a.FormattedDate,Object.assign({value:Object(l.g)(t)},n?c:o),e)}}}]);
//# sourceMappingURL=341.m.f7a3c1ab.chunk.js.map