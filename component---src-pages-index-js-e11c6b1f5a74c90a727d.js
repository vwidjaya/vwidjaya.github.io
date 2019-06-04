(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{149:function(A,t,a){"use strict";a.r(t);var e=a(35),o=a.n(e),g=a(7),B=a.n(g),Q=a(0),i=a.n(Q),E=a(152),l=a(4),n=a.n(l),q=a(162),D=a.n(q),G=function(A){return i.a.createElement("header",{id:"header",style:A.timeout?{display:"none"}:{}},i.a.createElement("div",{id:"vw-logo"},i.a.createElement("img",{src:D.a,alt:"logo"})),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"inner"},i.a.createElement("h1",null,"Vincent Widjaya"),i.a.createElement("p",null,"Software engineering student studying ",i.a.createElement("br",null)," Informatics at the University of Washington."))),i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(){A.onOpenArticle("about")}},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(){A.onOpenArticle("projects")}},"Projects")),i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(){A.onOpenArticle("resume")}},"Resume")))))};G.propTypes={onOpenArticle:n.a.func,timeout:n.a.bool};var r=G,c=a(163),N=a.n(c),R=a(164),s=a.n(R),C=function(A){function t(){return A.apply(this,arguments)||this}return B()(t,A),t.prototype.render=function(){var A=this,t=i.a.createElement("div",{className:"close",onClick:function(){A.props.onCloseArticle()}});return i.a.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},i.a.createElement("article",{id:"about",className:("about"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.a.createElement("h2",{className:"major"},"About Me"),i.a.createElement("p",null,"Hi! My name is Vincent, and I'm an Informatics major at the University of Washington (Seattle), graduating June 2020. My concentration is in Data Science but I am also heavily into software development. I take various computer science courses at UW to supplement my career pursuit in both domains."),i.a.createElement("p",null,"In the summer of 2017, I interned at ",i.a.createElement("strong",null,"Uber")," as a data scientist. In 2018, I interned at a small startup that develops software for other companies, for internal and/or external operations."),i.a.createElement("p",null,"This summer, I am interning as a Full Stack Engineer at"," ",i.a.createElement("strong",null,"GO-JEK"),", Indonesia's ride-hailing service which has has become Southeast Asia's second and Indonesia's first decacorn, hosting a multitude of microservices and startups."),t),i.a.createElement("article",{id:"projects",className:("projects"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.a.createElement("h2",{className:"major"},"Projects"),i.a.createElement("span",{className:"image main"},i.a.createElement("img",{src:N.a,alt:""})),i.a.createElement("p",null,"Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices."),i.a.createElement("p",null,"Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus."),t),i.a.createElement("article",{id:"resume",className:("resume"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.a.createElement("div",{id:"resume-wrapper"},i.a.createElement("object",{data:s.a,type:"application/pdf"})),t))},t}(i.a.Component);C.propTypes={route:n.a.object,article:n.a.string,articleTimeout:n.a.bool,onCloseArticle:n.a.func,timeout:n.a.bool,setWrapperRef:n.a.func.isRequired};var b=C,U=function(A){return i.a.createElement("footer",{id:"footer",style:A.timeout?{display:"none"}:{}},i.a.createElement("ul",{className:"icons"},i.a.createElement("li",null,i.a.createElement("a",{href:"mailto:vrwidjaya@gmail.com",className:"icon fa-envelope",target:"_blank"},i.a.createElement("span",{className:"label"},"Email"))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.facebook.com/V9.98R",className:"icon fa-facebook",target:"_blank"},i.a.createElement("span",{className:"label"},"Facebook"))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.instagram.com/vincentrw/",className:"icon fa-instagram",target:"_blank"},i.a.createElement("span",{className:"label"},"Instagram"))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/vwidjaya/",className:"icon fa-github",target:"_blank"},i.a.createElement("span",{className:"label"},"GitHub")))))};U.propTypes={timeout:n.a.bool};var I=U,u=function(){return i.a.createElement("div",{className:"bg"},i.a.createElement("div",{className:"bg_skewed"},i.a.createElement("div",{className:"unskewed"})))},V=function(A){function t(t){var a;return(a=A.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(o()(a)),a.handleCloseArticle=a.handleCloseArticle.bind(o()(a)),a.setWrapperRef=a.setWrapperRef.bind(o()(a)),a.handleClickOutside=a.handleClickOutside.bind(o()(a)),a}B()(t,A);var a=t.prototype;return a.componentDidMount=function(){var A=this;this.timeoutId=setTimeout(function(){A.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(A){this.wrapperRef=A},a.handleOpenArticle=function(A){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:A}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},a.handleCloseArticle=function(){var A=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){A.setState({timeout:!A.state.timeout})},325),setTimeout(function(){A.setState({isArticleVisible:!A.state.isArticleVisible,article:""})},350)},a.handleClickOutside=function(A){this.wrapperRef&&!this.wrapperRef.contains(A.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.render=function(){return i.a.createElement(E.a,{location:this.props.location},i.a.createElement(u,null),i.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},i.a.createElement("div",{id:"wrapper"},i.a.createElement(r,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),i.a.createElement(b,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),i.a.createElement(I,{timeout:this.state.timeout}))))},t}(i.a.Component);t.default=V},150:function(A,t,a){var e;A.exports=(e=a(154))&&e.default||e},151:function(A,t,a){"use strict";a.d(t,"b",function(){return l});var e=a(0),o=a.n(e),g=a(4),B=a.n(g),Q=a(33),i=a.n(Q);a.d(t,"a",function(){return i.a});a(150);var E=o.a.createContext({}),l=function(A){return o.a.createElement(E.Consumer,null,function(t){return A.data||t[A.query]&&t[A.query].data?(A.render||A.children)(A.data?A.data.data:t[A.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:B.a.object,query:B.a.string.isRequired,render:B.a.func,children:B.a.func}},152:function(A,t,a){"use strict";var e=a(153),o=a(0),g=a.n(o),B=a(4),Q=a.n(B),i=a(155),E=a.n(i),l=a(151),n=(a(144),function(A){var t,a=A.children,o=A.location;return t=o&&"/"===o.pathname?g.a.createElement("div",null,a):g.a.createElement("div",{id:"wrapper",className:"page"},g.a.createElement("div",null,a)),g.a.createElement(l.b,{query:"2994927498",render:function(A){return g.a.createElement(g.a.Fragment,null,g.a.createElement(E.a,{title:A.site.siteMetadata.title,meta:[{name:"description",content:"Portfolio"},{name:"keywords",content:"vincent, widjaya, portfolio, personal, website"}]},g.a.createElement("html",{lang:"en"})),t)},data:e})});n.propTypes={children:Q.a.node.isRequired},t.a=n},153:function(A){A.exports={data:{site:{siteMetadata:{title:"Vincent Widjaya"}}}}},154:function(A,t,a){"use strict";a.r(t);a(34);var e=a(0),o=a.n(e),g=a(4),B=a.n(g),Q=a(55),i=a(2),E=function(A){var t=A.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?o.a.createElement(Q.a,Object.assign({location:t,pageResources:a},a.json)):null};E.propTypes={location:B.a.shape({pathname:B.a.string.isRequired}).isRequired},t.default=E},162:function(A,t,a){A.exports=a.p+"static/vwlogo2-636f35d6c8af5b7fe10c01d96e325942.png"},163:function(A,t){A.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABLAAD/4QNvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6QTYwRDg3NDg5MkFGRTYxMTk4OENDQkQ3ODNFMzUzRTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUY4OEE5MkRCMjBDMTFFNkJFOUJFN0ZBODg5MkQ4QjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUY4OEE5MkNCMjBDMTFFNkJFOUJFN0ZBODg5MkQ4QjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxODJCOTA3RTBCQjJFNjExQjY1QkUzQzhBQzNDMTU5NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNjBEODc0ODkyQUZFNjExOTg4Q0NCRDc4M0UzNTNFNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6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"},164:function(A,t,a){A.exports=a.p+"static/RESUME - Vincent Widjaya-aeabffc54f4c3aa2ac3199ffe36e192f.pdf"}}]);
//# sourceMappingURL=component---src-pages-index-js-e11c6b1f5a74c90a727d.js.map