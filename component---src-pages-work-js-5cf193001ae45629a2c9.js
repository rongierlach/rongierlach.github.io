webpackJsonp([23899280101116],{337:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=a(41),n=s(i),r=a(57),o=s(r),l=a(56),d=s(l),c=a(132),u=s(c),p=a(131),f=s(p),m=a(1),h=s(m),g=a(6),y=s(g),b=function(e){var t=(0,f.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},v={},w=function(e){var t=b(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!v[a]||(v[a]=!0,!1)},k=void 0,S=[];"undefined"!=typeof window&&window.IntersectionObserver&&(k=new window.IntersectionObserver(function(e){e.forEach(function(e){S.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"}));var E=function(e,t){k.observe(e),S.push([e,t])},L=null,z=function(){if(null!==L)return L;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return L=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},I=function(e){var t=e.opacity,a=e.onLoad,s=e.transitionDelay,i=void 0===s?"":s,n=(0,u.default)(e,["opacity","onLoad","transitionDelay"]);return h.default.createElement("img",(0,f.default)({},n,{onLoad:a,style:{position:"absolute",top:0,left:0,transition:"opacity 0.5s",transitionDelay:i,opacity:t,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}))};I.propTypes={opacity:y.default.number,transitionDelay:y.default.string,onLoad:y.default.func};var x=function(e){function t(a){(0,n.default)(this,t);var s=(0,o.default)(this,e.call(this,a)),i=!0,r=!0,l=!1,d=w(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!1,l=!0),"undefined"==typeof window&&(i=!1,r=!1),s.state={isVisible:i,imgLoaded:r,IOSupported:l},s.handleRef=s.handleRef.bind(s),s}return(0,d.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&E(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=b(this.props),a=t.title,s=t.alt,i=t.className,n=t.outerWrapperClassName,r=t.style,o=void 0===r?{}:r,l=t.sizes,d=t.resolutions,c=t.backgroundColor,u=void 0;if(u="boolean"==typeof c?"lightgray":c,l){var p=l;return p.srcWebp&&p.srcSetWebp&&z()&&(p.src=p.srcWebp,p.srcSet=p.srcSetWebp),h.default.createElement("div",{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===o.position?"initial":"relative"}},h.default.createElement("div",{className:(i?i:"")+" gatsby-image-wrapper",style:(0,f.default)({position:"relative",overflow:"hidden",zIndex:1},o),ref:this.handleRef},h.default.createElement("div",{style:{width:"100%",paddingBottom:100/p.aspectRatio+"%"}}),p.base64&&h.default.createElement(I,{alt:s,title:a,src:p.base64,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),p.tracedSVG&&h.default.createElement(I,{alt:s,title:a,src:p.tracedSVG,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),u&&h.default.createElement("div",{title:a,style:{backgroundColor:u,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&h.default.createElement(I,{alt:s,title:a,srcSet:p.srcSet,src:p.src,sizes:p.sizes,opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}})))}if(d){var m=d,g=(0,f.default)({position:"relative",overflow:"hidden",display:"inline-block",zIndex:1,width:m.width,height:m.height},o);return"inherit"===o.display&&delete g.display,m.srcWebp&&m.srcSetWebp&&z()&&(m.src=m.srcWebp,m.srcSet=m.srcSetWebp),h.default.createElement("div",{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===o.position?"initial":"relative"}},h.default.createElement("div",{className:(i?i:"")+" gatsby-image-wrapper",style:g,ref:this.handleRef},m.base64&&h.default.createElement(I,{alt:s,title:a,src:m.base64,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s"}),m.tracedSVG&&h.default.createElement(I,{alt:s,title:a,src:m.tracedSVG,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),u&&h.default.createElement("div",{title:a,style:{backgroundColor:u,width:m.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:m.height}}),this.state.isVisible&&h.default.createElement(I,{alt:s,title:a,width:m.width,height:m.height,srcSet:m.srcSet,src:m.src,opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}})))}return null},t}(h.default.Component);x.defaultProps={fadeIn:!0,alt:""},x.propTypes={responsiveResolution:y.default.object,responsiveSizes:y.default.object,resolutions:y.default.object,sizes:y.default.object,fadeIn:y.default.bool,title:y.default.string,alt:y.default.string,className:y.default.oneOfType([y.default.string,y.default.object]),outerWrapperClassName:y.default.oneOfType([y.default.string,y.default.object]),style:y.default.object,position:y.default.string,backgroundColor:y.default.oneOfType([y.default.string,y.default.bool]),onLoad:y.default.func},t.default=x},219:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=a(1),n=s(i),r=a(337),o=s(r),l=function(e){var t=e.title,a=e.url,s=e.description,i=e.sizes,r=e.index;return n.default.createElement("li",{className:"flex flex-column flex-row-ns mb3 b--black-20 "+(r?"bt pt4":"pt3")},n.default.createElement("div",{className:"pr3-ns mb0 w-100 w-third-ns"},n.default.createElement("a",{href:a,target:"_blank",className:"link near-white hover-gold w-100 dt sans-serif"},n.default.createElement(o.default,{className:"db",title:t,alt:t,sizes:i}),n.default.createElement("h3",{className:"f4 f5-ns lh-title tc tr-ns"},n.default.createElement("span",{className:"bg-near-black lh-copy pa1 tracked-tight"},t)))),n.default.createElement("div",{className:"w-100 w-two-thirds-ns pl3-ns pt0 f6 f5-l lh-copy near-black georgia",dangerouslySetInnerHTML:{__html:s}}))};t.default=l,e.exports=t.default},229:function(e,t){"use strict";t.__esModule=!0,t.default={head:{title:"Work",meta:[{name:"description",content:"This is some work."}],links:[{rel:"canonical",href:"https://youfoundron.com/work"}]},body:{projects:[{key:"icostats",title:"ICO Stats: Track ICO Performance",url:"https://icostats.com/",description:"\n          <h3 class='mt0 sans-serif tracked-tight'>Full-Stack Development</h3>\n          <p>A frequently trafficked webapp for purchasing tokens and analyzing ICO statistics. Utilizes <em>React</em>, <em>Redux</em>, <em>Docker</em>, <em>GraphQL</em>, <em>Web3</em>, and the <em>ShapeShift API</em>.</p>\n          <p>\n            Referenced in <a class='sans-serif link fw9 black hover-gold' href='https://www.forbes.com/sites/chancebarnett/2017/09/23/inside-the-meteoric-rise-of-icos/'>Forbes</a>.\n            <br/>\n            Shared frequently on <a class='sans-serif link fw9 black hover-gold' href='https://www.reddit.com/r/icocrypto/comments/6ednmu/ico_stats_httpsicostatscom/'>Reddit</a>.\n          </p>\n        "},{key:"porsche",title:"Porsche: Only A Sports Car",url:"https://onlyasportscar.com",description:"\n          <h3 class='mt0 sans-serif tracked-tight'>Front-End Development</h3>\n          <p>An animation and analytics heavy micro-site promoting Porsche's spring sportscar lineup, overseen by Cramer-Krasselt and The Uprising Creative. Utilizes <em>React</em>, <em>React Router</em>, <em>Redux Sagas</em>, <em>PostCSS</em>, and <em>GreenSock</em>.</p>\n        "},{key:"sonos",title:"Sonos + Spotify: Playlist Potluck",url:"https://playlistpotluck.sonos.com/",description:"\n          <h3 class='mt0 sans-serif tracked-tight'>Full-Stack Development</h3>\n          <p>A webapp for starting and sharing collaborative playlists with friends overseen by Cornerstone and The Uprising Creative. Utilizes <em>Node</em>, <em>MongoDB</em>, <em>React</em>, <em>Redux</em>, <em>SCSS</em>, and the <em>Spotify API</em>.</p>\n          <p>Featured in <a class='sans-serif link fw9 black hover-gold' href='https://techcrunch.com/2016/11/16/spotifys-playlist-potluck-is-a-collaborative-playlist-for-your-parties/'>TechCrunch</a>.</p>\n        "},{key:"nike",title:"Nike: Techknit Interactive Timeline",url:"http://www.niketechknit.com/",description:"\n          <h3 class='mt0 sans-serif tracked-tight'>Full-Stack Development</h3>\n          <p>A blog-embedded interactive piece that allows a user to scrub through over a thousand photos tied to time-stamped biometric data. Overseen by Studio 424 and The Uprising Creative. Utilizes <em>jQuery</em>, <em>SASS</em>, and the <em>FitBit API</em>.</p>\n          <p>Featured in <a class='sans-serif link fw9 black hover-gold' target='_blank' href='http://news.nike.com/news/nike-tech-knit-nike-sportswear-s-latest-innovation'>Nike News</a>.</p>\n        "},{key:"modestmouse",title:"Modest Mouse: Linguistic Remix Generator",url:"http://strangers.modestmouse.com/",description:"\n          <h3 class='mt0 sans-serif tracked-tight'>Back-End Development</h3>\n          <p>A conceptual interactive webapp for algorithmically generating music. Overseen by The Uprising Creative. Utilizes <em>Node</em>, <em>MongoDB</em>, <em>Ampersand</em>, <em>Web Audio</em>, <em>Canvas</em>, and the <em>Twitter API</em>.</p>\n          <p>\n            Featured in\n            <a class='sans-serif link fw9 black hover-gold' target='_blank' href='http://pitchfork.com/news/58885-modest-mouse-launch-strangers-to-ourselves-linguistic-remix-generator/'>Pitchfork</a>\n            and\n            <a class='sans-serif link fw9 black hover-gold' target='_blank' href='http://www.stereogum.com/1788295/modest-mouse-launch-a-strangers-to-ourselves-linguistic-remix-generator/news/'>Stereogum</a>.\n          </p>\n        "}]}},e.exports=t.default},235:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var a={};for(var s in e)t.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(e,s)&&(a[s]=e[s]);return a}t.__esModule=!0,t.pageQuery=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},r=a(1),o=s(r),l=a(229),d=a(55),c=s(d),u=a(21),p=s(u),f=a(219),m=s(f),h=a(27),g=s(h),y=function(e){var t=e.data;return o.default.createElement(p.default,null,o.default.createElement(c.default,l.head),o.default.createElement(g.default,null,o.default.createElement("section",{className:"pv5 georgia mw7 center"},o.default.createElement("h1",{className:"sans-serif"},"Work"),o.default.createElement("hr",null),o.default.createElement("ol",{className:"list pl0"},l.body.projects.map(function(e,a){var s=e.key,r=i(e,["key"]);return o.default.createElement(m.default,n({key:s,index:a,sizes:t[s].sizes},r))})))))};t.default=y;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-work-js-5cf193001ae45629a2c9.js.map