(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(e,t,a){e.exports=a(602)},602:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(40),c=a.n(o),l=a(24),i=a(140),s=a(148),u=a.n(s),m=a(35),d=a(168),h=a(614),p=a(615),g=a(25),b=a(26),E=a(28),f=a(27),y=a(29),v=a(7),j=a(3),O=a.n(j),w=a(21),C=a.n(w),S=a(612),N=a(616),x=a(153),k=a.n(x),A=a(48),I=a.n(A),D=a(149),$=a.n(D),B=a(75),L=a.n(B),R=a(20),P=a.n(R),T=function(e){return r.a.createElement(P.a,e,r.a.createElement("path",{d:"m9,21c0,0.55 0.45,1 1,1l4,0c0.55,0 1,-0.45 1,-1l0,-1l-6,0l0,1zm3,-19c-3.86,0 -7,3.14 -7,7c0,2.38 1.19,4.47 3,5.74l0,2.26c0,0.55 0.45,1 1,1l6,0c0.55,0 1,-0.45 1,-1l0,-2.26c1.81,-1.27 3,-3.36 3,-5.74c0,-3.86 -3.14,-7 -7,-7z"}))},M=function(e){return r.a.createElement(P.a,e,r.a.createElement("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"}))},q=a(36),z=a(103),F=a.n(z),W={props:{MuiButtonBase:{disableRipple:!0}}},Q={dark:Object(v.createMuiTheme)(Object(q.a)({},W,{palette:{type:"dark",primary:{main:"#40a9f3"},background:{default:"#2D2E32",paper:"#333438",contrast:"#242529"}},typography:{useNextVariants:!0}})),light:Object(v.createMuiTheme)(Object(q.a)({},W,{palette:{type:"light",primary:{main:"#2C4FFE"},background:{contrast:F.a[100]}},typography:{useNextVariants:!0}}))},H=r.a.createContext(),U=H.Provider,V=H.Consumer,Z=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(E.a)(this,Object(f.a)(t).call(this,e))).changeTheme=function(e){a.setState({type:e}),window.localStorage.setItem("gh-theme",e)},a.state={type:window.localStorage.getItem("gh-theme")||"dark",changeTheme:a.changeTheme},a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.children,t=this.state.type,a=Q[t]||Q.dark;return r.a.createElement(U,{value:this.state},r.a.createElement(v.MuiThemeProvider,{theme:a},e))}}]),t}(n.Component),J=function(){return r.a.createElement(V,null,function(e){var t=e.type,a=e.changeTheme;return r.a.createElement(L.a,{title:"Toogle dark/light theme"},r.a.createElement($.a,{color:"default",icon:r.a.createElement(M,null),checkedIcon:r.a.createElement(T,null),checked:"dark"===t,onChange:function(e){a("dark"===t?"light":"dark")}}))})},Y=a(30),_=a(151),X=a.n(_),G=a(152),K=a.n(G),ee=a(41),te=a.n(ee),ae=a(150),ne=a.n(ae),re=Object(v.withStyles)(function(e){return{root:{background:e.palette.background.paper,paddingLeft:e.spacing.unit,paddingRight:e.spacing.unit/2,borderRadius:e.shape.borderRadius}}})(function(e){var t=e.classes,a=e.className,n=e.value,o=e.onChange,c=e.placeholder,l=Object(Y.a)(e,["classes","className","value","onChange","placeholder"]);return r.a.createElement(ne.a,Object.assign({className:O()(t.root,a),onChange:o,value:n,placeholder:c,disableUnderline:!0,fullWidth:!0},l))}),oe=Object(v.withStyles)(function(e){return{searchButton:{height:30,width:30,padding:0,color:e.palette.text.secondary}}})(function(e){var t=e.classes,a=Object(Y.a)(e,["classes"]);return r.a.createElement(re,Object.assign({endAdornment:r.a.createElement(X.a,{position:"end"},r.a.createElement(te.a,{disabled:a.disabled,tabIndex:-1,className:t.searchButton,type:"submit"},r.a.createElement(K.a,null)))},a))}),ce=function(e){return r.a.createElement(P.a,e,r.a.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}))},le=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(E.a)(this,Object(f.a)(t).call(this,e))).onSubmitSearch=function(e){e.preventDefault();var t=a.props.history,n=a.input.current.value;t.push("/search?q=".concat(n))},a.input=r.a.createRef(),a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.children;return r.a.createElement("div",null,r.a.createElement(k.a,{elevation:0,className:t.appBar,position:"static"},r.a.createElement(I.a,{className:t.toolbar},r.a.createElement("div",{className:O()(t.toolbarContent,t.centered)},r.a.createElement(S.a,{to:"/"},r.a.createElement(ce,{className:t.logo})),r.a.createElement("div",{className:t.grow}),r.a.createElement("form",{onSubmit:this.onSubmitSearch},r.a.createElement(oe,{fullWidth:!1,placeholder:"Search for repo",inputProps:{ref:this.input,className:t.searchInput}})),r.a.createElement(J,null)))),a)}}]),t}(r.a.Component),ie=C()(N.a,Object(v.withStyles)(function(e){var t=e.palette.background.contrast;return{appBar:{background:t},header:{background:t,color:e.palette.getContrastText(t)},centered:{width:"100%",maxWidth:"900px",margin:"0 auto"},toolbar:{position:"relative",minHeight:60},toolbarContent:{display:"flex",alignItems:"center"},main:{padding:"24px 16px 24px"},logo:{height:32,width:"auto",position:"absolute",top:"50%",left:16,transform:"translateY(-50%)",color:e.palette.text.primary},searchInput:{transition:e.transitions.create("width"),width:130,"&:focus":{width:200}},grow:{flex:1}}}))(le),se=a(617),ue=a(613),me=a(37),de=a(38),he=a.n(de),pe=a(10),ge=a.n(pe),be=a(162),Ee=a.n(be),fe=Object(v.withStyles)(function(e){return{root:{width:"100%",maxWidth:"900px",margin:"0 auto",padding:16}}})(function(e){var t=e.classes,a=e.className,n=e.children;return r.a.createElement("div",{className:O()(t.root,a)},n)}),ye=Object(v.withStyles)(function(e){return{root:{background:e.palette.background.contrast,paddingTop:24,paddingBottom:32,color:e.palette.getContrastText(e.palette.background.contrast)}}})(function(e){var t=e.classes,a=e.children;return r.a.createElement("div",{className:t.root},r.a.createElement(fe,null,a))}),ve=a(159),je=a.n(ve),Oe=a(61),we=a(156),Ce=a.n(we),Se=Object(v.withStyles)(function(e){return{root:{borderRadius:2,height:46,width:46}}})(function(e){var t=e.classes,a=e.className,n=e.src,o=Object(Y.a)(e,["classes","className","src"]);return r.a.createElement(Ce.a,Object.assign({className:O()(t.root,a),src:n},o))}),Ne=Object(Oe.createSkeletonElement)("span"),xe=Object(Oe.createSkeletonElement)(Se),ke=function(e){return"x ".repeat(e/2)},Ae=Oe.createSkeletonElement,Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e.loading},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"skeleton-pending";return Object(Oe.createSkeletonProvider)(e,t,a)},De=a(105),$e=a.n(De),Be=a(157),Le=a.n(Be);$e.a.extend(Le.a);var Re=function(e){var t=e.date;return r.a.createElement("span",null,$e()(t).fromNow())},Pe="OPEN",Te="CLOSED",Me=a(158),qe=a.n(Me),ze=function(e){return r.a.createElement(P.a,e,r.a.createElement("path",{d:"M12,2.22857143 C17.3828571,2.22857143 21.7714286,6.61714286 21.7714286,12 C21.7714286,17.3828571 17.3828571,21.7714286 12,21.7714286 C6.6073024,21.7619925 2.23800749,17.3926976 2.22857143,12 C2.22857143,6.61714286 6.61714286,2.22857143 12,2.22857143 Z M12,0 C5.38285714,0 0,5.38285714 0,12 C0,18.6171429 5.38285714,24 12,24 C18.6171429,24 24,18.6171429 24,12 C24,5.38285714 18.6171429,0 12,0 Z M13.7142857,5.14285714 L10.2857143,5.14285714 L10.2857143,13.7142857 L13.7142857,13.7142857 L13.7142857,5.14285714 Z M13.7142857,15.4285714 L10.2857143,15.4285714 L10.2857143,18.8571429 L13.7142857,18.8571429 L13.7142857,15.4285714 Z"}))},Fe=Object(v.withStyles)(function(e){return{root:{background:"#01D48A",color:"#fff",fontWeight:500},icon:{height:16,width:16,marginLeft:e.spacing.unit,color:e.palette.common.white}}})(function(e){var t=e.classes,a=e.className;e.children;return r.a.createElement(qe.a,{className:O()(t.root,a),icon:r.a.createElement(ze,{color:"inherit",className:t.icon}),label:"Open"})}),We=C()(Ie({title:"xxx ".repeat(15),author:"xxx ".repeat(3),number:null,url:null,state:null,createdAt:null}),Object(v.withStyles)(function(e){return{root:{position:"relative",paddingRight:48},secondary:{color:e.palette.text.secondary},statusChip:{marginRight:e.spacing.unit},openButton:{position:"absolute",top:-8,right:0}}}))(function(e){var t=e.classes,a=e.className,n=(e.children,e.title),o=e.author,c=e.commentsCount,l=e.number,i=e.createdAt,s=e.state,u=e.url,m=i&&r.a.createElement(Re,{date:i}),d=l&&r.a.createElement("span",{className:t.secondary},"#",l),h=s&&r.a.createElement(Fe,{className:t.statusChip,state:s});return r.a.createElement("div",{className:O()(t.root,a)},r.a.createElement(ge.a,{variant:"h5",gutterBottom:!0,className:t.headline},r.a.createElement(Ne,null,n," ",d)),r.a.createElement(ge.a,{variant:"body1",color:"textSecondary",component:"span",className:t.subtitle},h,r.a.createElement(Ne,null," ",r.a.createElement("strong",null,o)," opened this issue ",m," \xb7 ",c," comments")),u&&r.a.createElement(L.a,{title:"Open in github"},r.a.createElement(te.a,{className:t.openButton,href:u},r.a.createElement(je.a,{color:"action"}))))}),Qe=a(104),He=a.n(Qe),Ue=a(160),Ve=a.n(Ue),Ze=a(161),Je=a.n(Ze),Ye={code:Object(v.withStyles)(function(e){return{"@global":{".hljs":{display:"block",overflowX:"auto",padding:"1em",background:e.palette.background.contrast,color:"#DCDCDC",borderRadius:2,fontFamily:"'Roboto Mono', monospace;",fontSize:14},".hljs-keyword, .hljs-literal, .hljs-symbol, .hljs-name":{color:"#569CD6"},".hljs-link":{color:"#569CD6",textDecoration:"underline"},".hljs-built_in, .hljs-type":{color:"#4EC9B0"},".hljs-number, .hljs-class":{color:"#B8D7A3"},".hljs-string, .hljs-meta-string":{color:"#D69D85"},".hljs-regexp, .hljs-template-tag":{color:"#9A5334"},".hljs-subst, .hljs-function, .hljs-title, .hljs-params, .hljs-formula":{color:"#DCDCDC"},".hljs-comment, .hljs-quote":{color:"#57A64A",fontStyle:"italic"},".hljs-doctag":{color:"#608B4E"},".hljs-meta, .hljs-meta-keyword, .hljs-tag":{color:"#9B9B9B"},".hljs-variable, .hljs-template-variable":{color:"#BD63C5"},".hljs-attr, .hljs-attribute, .hljs-builtin-name":{color:"#9CDCFE"},".hljs-section":{color:"gold"},".hljs-emphasis":{fontStyle:"italic"},".hljs-strong":{fontWeight:"bold"},".hljs-bullet, .hljs-selector-tag, .hljs-selector-id, .hljs-selector-class, .hljs-selector-attr, .hljs-selector-pseudo":{color:"#D7BA7D"},".hljs-addition":{backgroundColor:"#144212",display:"inline-block",width:"100%"},".hljs-deletion":{backgroundColor:"#600",display:"inline-block",width:"100%"}},root:{width:"100%",overflow:"auto"}}})(function(e){var t=e.classes,a=e.language,n=e.value;return r.a.createElement(Je.a,{className:O()(t.root,a)},n)}),inlineCode:Object(v.withStyles)(function(e){return{root:{background:e.palette.background.contrast,fontFamily:"'Roboto Mono', monospace;",padding:"1px 2px",fontSize:13,borderRadius:e.shape.borderRadius}}})(function(e){var t=e.classes,a=e.children;return r.a.createElement("code",{className:t.root},a)}),paragraph:function(e){var t=e.children;e.style;return r.a.createElement(ge.a,{variant:"body1"},r.a.createElement(Ne,null,t))}},_e=Object(v.withStyles)(function(e){return{root:Object(q.a)({},e.typography.body1,{color:e.palette.text.primary,"& p":{marginBottom:2*e.spacing.unit},"& img":{width:"100%",height:"auto"}})}})(function(e){var t=e.classes,a=e.className,n=Object(Y.a)(e,["classes","className"]);return r.a.createElement(Ve.a,Object.assign({className:O()(t.root,a),renderers:Ye},n))}),Xe=C()(Ie({author:{login:"xxx ".repeat(5)},body:"xxx ".repeat(130)}),Object(v.withStyles)(function(e){var t=e.spacing.unit;return{root:{position:"relative",paddingLeft:62,marginBottom:3*t},avatar:{position:"absolute",top:0,left:0,marginRight:2*t},content:{padding:"".concat(t,"px ").concat(3*t,"px ").concat(3*t,"px")},toolbar:{minHeight:46},author:{marginRight:e.spacing.unit/2}}}))(function(e){var t=e.classes,a=e.body,n=e.author,o=e.createdAt,c=n||{},l=c.avatarUrl,i=c.login,s=a||"*No description provided*";return r.a.createElement("div",{className:t.root},r.a.createElement(xe,{className:t.avatar,src:l}),r.a.createElement(He.a,{elevation:0},r.a.createElement(I.a,{className:t.toolbar},r.a.createElement(ge.a,{variant:"subtitle2",className:t.author},r.a.createElement(Ne,null,i)),o&&r.a.createElement(ge.a,{variant:"body2",color:"textSecondary"},"commented ",r.a.createElement(Re,{date:o}))),r.a.createElement("div",{className:t.content},r.a.createElement(_e,{source:s}))))}),Ge=a(60);function Ke(){var e=Object(me.a)(["\n  query IssueCommentList($owner: String!, $name: String!, $number: Int!) {\n    repository(owner: $owner, name: $name) {\n      issue(number: $number) {\n        id\n        comments(first: 30) {\n          edges {\n            node {\n              id\n              author { login, avatarUrl }\n              body\n              createdAt\n            }  \n          }\n        }\n      }\n    }\n  }\n"]);return Ke=function(){return e},e}var et=he()(Ke()),tt=function(e){var t=e.owner,a=e.name,n=e.number,o=e.placeholderCount;return r.a.createElement(l.Query,{query:et,variables:{owner:t,name:a,number:n}},function(e){var t=e.data,a=e.loading;return e.error?"Error":a?Object(Ge.a)(Array(o).keys()).map(function(e){return r.a.createElement(Xe,{key:e,loading:!0})}):t.repository.issue.comments.edges.map(function(e){var t=e.node;return r.a.createElement(Xe,{key:t.id,body:t.body,createdAt:t.createdAt,author:t.author})})})};function at(){var e=Object(me.a)(["\n  query IssueQuery($owner: String!, $name: String!, $number: Int!) {\n    repository(owner: $owner, name: $name) {\n      issue(number: $number) {\n        id\n        number\n        title\n        author { login, avatarUrl }\n        createdAt\n        comments { totalCount }\n        state\n        body\n        url\n      }\n    }\n  }\n"]);return at=function(){return e},e}var nt=he()(at()),rt=function(e){function t(){return Object(g.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.match,n=a.params,o=n.owner,c=n.name,i=Number(a.params.number);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Query,{query:nt,variables:{owner:o,name:c,number:i}},function(e){var a=e.data,n=e.loading;if(e.error)return"Error";var l=(a.repository||{}).issue,s=void 0===l?{}:l,u=s.author,m=void 0===u?{}:u,d=s.comments,h=void 0===d?{}:d;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ye,null,r.a.createElement("div",{className:t.breadcrumb},r.a.createElement(S.a,{to:"/".concat(o,"/").concat(c)},r.a.createElement(te.a,null,r.a.createElement(Ee.a,{color:"action"}))),r.a.createElement(ge.a,{variant:"h6"},o," / ",c," ")),r.a.createElement(We,{className:t.issueHeader,loading:n,title:s.title,number:s.number,createdAt:s.createdAt,state:s.state,author:m?m.login:null,commentsCount:h.totalCount,url:s.url})),r.a.createElement(fe,null,r.a.createElement(Xe,{loading:n,author:s.author,body:s.body,createdAt:s.createdAt}),!n&&r.a.createElement(tt,{owner:o,name:c,number:i,placeholderCount:Math.min(h.totalCount,3)})))}))}}]),t}(n.Component),ot=Object(v.withStyles)({breadcrumb:{display:"flex",alignItems:"center"},issueHeader:{marginTop:24,paddingLeft:62}})(rt),ct=a(78),lt=a.n(ct),it=a(81),st=a.n(it),ut=a(163),mt=a.n(ut),dt=a(79),ht=a.n(dt),pt=a(80),gt=a.n(pt),bt=a(59),Et=a.n(bt),ft=Ae(mt.a),yt=C()(Ie({title:ke(14),description:ke(90)}),Object(v.withStyles)(function(e){return{root:{"&.loading":{pointerEvents:"none"}},title:{fontWeight:500},starIcon:{height:18,width:18,marginRight:4},starCount:{lineHeight:"18px"}}}))(function(e){var t,a=e.classes,n=e.className,o=e.title,c=e.description,l=e.starCount,i=e.loading;return r.a.createElement(ht.a,{className:O()(a.root,n,{loading:i}),button:!0},r.a.createElement(gt.a,{disableTypography:!0,primary:r.a.createElement(ge.a,{className:a.title,color:"primary",variant:"subtitle1",noWrap:!0},r.a.createElement(Ne,null,o)),secondary:r.a.createElement(ge.a,{color:"textSecondary"},r.a.createElement(Ne,null,c))}),r.a.createElement(Et.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(ft,{color:"action",className:a.starIcon}),r.a.createElement(ge.a,{color:"textSecondary",className:a.starCount},(t=l)?t>999?Number((t/1e3).toFixed(1))+"k":t:null))))});function vt(){var e=Object(me.a)(["\n  query SearchRepo($query: String!) {\n    search(query: $query, type: REPOSITORY, first: 10) {\n      edges {\n        node {\n          ...on Repository {\n            id\n            name\n            nameWithOwner\n            owner { login }\n            description\n            stargazers {\n              totalCount\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return vt=function(){return e},e}var jt=he()(vt()),Ot=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(yt,{loading:!0}),r.a.createElement(yt,{loading:!0}),r.a.createElement(yt,{loading:!0}),r.a.createElement(yt,{loading:!0}))},wt=Object(v.withStyles)(function(e){return{root:{},title:Object(q.a)({},e.mixins.gutters())}})(function(e){var t=e.classes,a=(e.children,e.location),n=lt.a.parse(a.search);return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,{className:t.root},r.a.createElement(ge.a,{className:t.title,variant:"h6",gutterBottom:!0},"Search Repositories"),r.a.createElement(l.Query,{query:jt,variables:{query:n.q||"stars:>1000"}},function(e){var t=e.data,a=e.loading,n=e.error;if(a)return r.a.createElement(Ot,null);if(n)return"error...";var o=t.search.edges;return r.a.createElement(st.a,null,o.map(function(e){var t=e.node;return r.a.createElement(S.a,{key:t.id,to:"/".concat(t.owner.login,"/").concat(t.name)},r.a.createElement(yt,{title:t.nameWithOwner,description:t.description,starCount:t.stargazers.totalCount}))}))})))}),Ct=a(164),St=a.n(Ct),Nt=Object(v.withStyles)(function(e){return{icon:{height:18,width:18,color:"#01D48A","&.closed":{color:e.palette.error.main}}}})(function(e){var t=e.classes,a=e.className,n=e.state===Te;return r.a.createElement(ze,{className:O()(t.icon,a,{closed:n})})}),xt=Ae(St.a),kt=Ae(Nt),At=function(e){var t=e.classes,a=e.title,n=e.number,o=e.createdAt,c=e.state,l=e.author,i=e.commentCount,s=e.loading,u=Object(Y.a)(e,["classes","title","number","createdAt","state","author","commentCount","loading"]);return r.a.createElement(ht.a,Object.assign({className:O()(t.root,{loading:s}),button:!0},u),r.a.createElement(Et.a,null,r.a.createElement(kt,{state:c})),r.a.createElement(gt.a,{disableTypography:!0,primary:r.a.createElement(ge.a,{variant:"subtitle1",noWrap:!0,className:t.title},r.a.createElement(Ne,null,a)),secondary:r.a.createElement(ge.a,{variant:"caption",noWrap:!0,color:"textSecondary"},r.a.createElement(Ne,null,"#",n," opened ",r.a.createElement(Re,{date:o})," by ",l))}),(s||i>0)&&r.a.createElement(Et.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(xt,{className:t.commentIcon}),r.a.createElement(ge.a,{variant:"caption"},i))))};At.defaultProps={author:"unknown"};var It=C()(Ie({title:ke(50),author:ke(10),state:null}),Object(v.withStyles)(function(e){return{commentIcon:{height:18,width:18,color:e.palette.text.secondary,marginRight:e.spacing.unit/2},root:{"&.loading":{pointerEvents:"none"}},title:{fontWeight:500}}}))(At);function Dt(){var e=Object(me.a)(["\n  query IssuesList($owner: String!, $name: String!, $state: [IssueState!], $cursor: String, $pageSize: Int) {\n    repository(owner: $owner, name: $name) {\n      issues(\n          first: $pageSize,\n          states: $state,\n          orderBy: { field: UPDATED_AT, direction: DESC },\n          after: $cursor\n        ) {\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n        edges {\n          cursor\n          node {\n            id\n            number\n            title\n            author { login }\n            state\n            createdAt\n            comments { totalCount }\n          }\n        }\n      }\n    }\n  }\n"]);return Dt=function(){return e},e}var $t=he()(Dt()),Bt=function(e){var t=e.children,a={owner:e.owner,name:e.name,state:[e.state],pageSize:e.pageSize};return r.a.createElement(l.Query,{query:$t,variables:a},function(e){var n=e.loading,r=e.data,o=e.error,c=e.fetchMore,l=r.repository,i=void 0===l?{}:l,s=i.issues||{},u=s.pageInfo,m=void 0===u?{}:u,d=s.edges;return t({loading:n,error:o,issues:(void 0===d?[]:d).map(function(e){return e.node}),hasNextPage:m.hasNextPage,onLoadMore:function(){return c({query:$t,variables:Object(q.a)({},a,{cursor:i.issues.pageInfo.endCursor}),updateQuery:function(e,t){var a=t.fetchMoreResult;return a?{repository:Object(q.a)({},e.repository,{issues:Object(q.a)({},e.repository.issues,{pageInfo:a.repository.issues.pageInfo,edges:Object(Ge.a)(e.repository.issues.edges).concat(Object(Ge.a)(a.repository.issues.edges))})})}:e}})}})})};Bt.defaultProps={pageSize:10};var Lt=Bt,Rt=a(165),Pt=a.n(Rt),Tt=Object(v.withStyles)(function(e){return{root:{justifyContent:"center"}}})(function(e){var t=e.classes,a=(e.children,e.onLoadMore),n=e.hasNextPage;return r.a.createElement(I.a,{className:t.root},r.a.createElement(Pt.a,{disabled:!n,onClick:a,color:"primary"},"Load more"))}),Mt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(It,{loading:!0}),r.a.createElement(It,{loading:!0}),r.a.createElement(It,{loading:!0}),r.a.createElement(It,{loading:!0}))},qt=function(e){function t(){return Object(g.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.owner,a=e.name,n=e.state;return r.a.createElement(Lt,{owner:t,name:a,state:n},function(e){var n=e.loading,o=e.issues,c=e.hasNextPage,l=e.onLoadMore;return n?r.a.createElement(Mt,null):r.a.createElement("div",null,r.a.createElement(st.a,null,o.map(function(e){return r.a.createElement(S.a,{key:e.id,to:"/".concat(t,"/").concat(a,"/issues/").concat(e.number)},r.a.createElement(It,{number:e.number,title:e.title,author:e.author?e.author.login:void 0,createdAt:e.createdAt,commentCount:e.comments.totalCount,state:e.state,tabIndex:-1}))})),r.a.createElement(Tt,{onLoadMore:l,hasNextPage:c}))})}}]),t}(n.Component);qt.defaultProps={state:Pe};var zt=qt,Ft=a(166),Wt=a.n(Ft),Qt=a(106),Ht=a.n(Qt),Ut=C()(Object(v.withStyles)(function(e){return{root:{}}}),Ie())(function(e){e.classes;var t=e.state,a=e.onChange,n=e.openedCount,o=e.closedCount,c=Object(Y.a)(e,["classes","state","onChange","openedCount","closedCount"]);return r.a.createElement(Wt.a,Object.assign({value:t,onChange:a,indicatorColor:"primary"},c),r.a.createElement(Ht.a,{value:"OPEN",label:n?"".concat(n," OPEN"):"OPEN"}),r.a.createElement(Ht.a,{value:"CLOSED",label:o?"".concat(o," CLOSED"):"CLOSED"}))}),Vt=C()(Ie({repository:{owner:{login:ke(15)},name:ke(15),description:ke(160)}},function(e){return!e.repository}),Object(v.withStyles)(function(e){return{root:{}}}))(function(e){var t=e.classes,a=(e.children,e.repository),n=a.name,o=a.owner,c=a.description;return r.a.createElement("div",{className:t.root},r.a.createElement(ge.a,{variant:"h6"},r.a.createElement(Ne,null,o.login," / ",n)),r.a.createElement(ge.a,{variant:"subtitle1",color:"textSecondary"},r.a.createElement(Ne,null,c)))});function Zt(){var e=Object(me.a)(["\nquery Repo($owner: String!, $name: String!) {\n  repository(owner: $owner, name: $name) {\n    name\n    owner { login }\n    description\n    openedIssues: issues(states: OPEN ) {\n      totalCount\n    }\n    closedIssues: issues(states: CLOSED) {\n      totalCount\n    }\n  }\n}\n"]);return Zt=function(){return e},e}var Jt=he()(Zt()),Yt=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleChangeState=function(e,t){a.props.history.push({search:"?state=".concat(t)})},a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.match,o=t.location,c=n.params,i=c.owner,s=c.name,u=lt.a.parse(o.search).state,m=void 0===u?Pe:u;return r.a.createElement(l.Query,{query:Jt,variables:{owner:i,name:s}},function(t){var n=t.data.repository,o=n||{},c=o.openedIssues,l=void 0===c?{}:c,u=o.closedIssues,d=void 0===u?{}:u;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ye,null,r.a.createElement(Vt,{repository:n})),r.a.createElement(fe,{className:a.content},r.a.createElement(Ut,{className:a.filters,state:m,openedCount:l.totalCount,closedCount:d.totalCount,onChange:e.handleChangeState}),r.a.createElement(zt,{owner:i,name:s,state:m})))})}}]),t}(n.Component),_t=Object(v.withStyles)({content:{paddingTop:0},filters:{marginBottom:16}})(Yt),Xt=Object(v.withStyles)({content:{paddingTop:120,textAlign:"center"}})(function(e){var t=e.classes;return r.a.createElement(fe,{className:t.content},r.a.createElement(ge.a,{variant:"h3"},"404 Not found"))}),Gt=function(){return r.a.createElement(se.a,null,r.a.createElement(ue.a,{path:"/",exact:!0,component:wt}),r.a.createElement(ue.a,{path:"/search",component:wt}),r.a.createElement(ue.a,{path:"/:owner/:name",exact:!0,component:_t}),r.a.createElement(ue.a,{path:"/:owner/:name/issues/:number",exact:!0,component:ot}),r.a.createElement(ue.a,{component:Xt}))},Kt=function(e){function t(){return Object(g.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(ie,null,r.a.createElement(Gt,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ea=a(1),ta=a.n(ea),aa=a(46),na=function(e){return e.children};na.propTypes={children:ta.a.node};var ra=Object(v.withStyles)(function(e){var t=Object(aa.emphasize)(e.palette.background.paper,.1);return{"@global":{html:{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},"*, *::before, *::after":{boxSizing:"inherit"},body:{margin:0,backgroundColor:e.palette.background.default,color:e.palette.text.primary,"@media print":{backgroundColor:e.palette.common.white}},a:{textDecoration:"none",color:e.palette.primary.main},strong:{fontWeight:500},"@keyframes pending-animation":{"0%":{opacity:.8},"50%":{opacity:.4},"100%":{opacity:.8}},".skeleton-pending":{color:"".concat(t," !important"),background:"".concat(t," !important"),userSelect:"none",animationName:"pending-animation",animationDuration:"1.5s",animationIterationCount:"infinite",animationTimingFunction:"linear"}}}})(na),oa=Object(d.a)({uri:"https://api.github.com/graphql",headers:{authorization:"Bearer ".concat("01dfb0fb9fc43487dd57d479d0cdc8add2b7ea42")}}),ca=new i.a({link:m.ApolloLink.from([u.a,oa]),cache:new h.a});c.a.render(r.a.createElement(p.a,null,r.a.createElement(l.ApolloProvider,{client:ca},r.a.createElement(Z,null,r.a.createElement(ra,null,r.a.createElement(Kt,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[170,2,1]]]);
//# sourceMappingURL=main.6f19a3ab.chunk.js.map