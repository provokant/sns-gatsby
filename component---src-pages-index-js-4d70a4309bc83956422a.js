(self.webpackChunkgatsby_sns=self.webpackChunkgatsby_sns||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,l,c,u;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(l=s;0!=l--;)if(!o(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!o(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(l=s;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,c[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!o(e[c[l]],a[c[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,c=[];function u(){l=e(c.map((function(e){return e.props}))),d.canUseDOM?t(l):n&&(l=n(l))}var d=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,c=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){c.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(d,"canUseDOM",s),d}}},8237:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return at}});var r=n(6771),i=n(3431),o=n(7294),a=n(6987),s=n(7198),l=function(){return(0,i.tZ)(s.$0,null,(0,i.tZ)(s.W2,null,(0,i.tZ)(s.nv,null,"In den vergangenen drei Semestern wurde das, was Studieren bedeutet, aus den Universitäten gefegt und in WG-Zimmer oder Kinderzimmer gekehrt. Mit teilweise fatalen Folgen: Nebeneinkünfte, die das Studieren häufig erst ermöglichen, brechen weg. Nach wie vor finden Prüfungen in Präsenz statt, es gelten häufig dieselben Fristen und Modalitäten wie vor der Pandemie. Archive, Bibliotheken, Labore oder Werkstätten haben geschlossen. Öffnungsperspektiven, wie es sie für Schulen gibt, fehlen. Wir wollen diese Probleme sichtbar machen und sie in die Öffentlichkeit und auf die Straße tragen. Motto:"),(0,i.tZ)(s.nv,{tw:"font-bold"},"Wir wollen studieren — nicht stagnieren!"),(0,i.tZ)(s.nv,null,"Vor allem wehren wir uns gegen die psychischen Belastungen und die schlechten und niederschmetternden Zukunftsperspektiven des Studiums in der Pandemie! Über die Zahl der Abbrecher*innen, der coronabedingt vertagten Prüfungen oder die schiere Überforderung eines Online-Studiums wird kaum gesprochen. Wir möchten ein Zeichen setzen: ",(0,i.tZ)("span",{tw:"font-bold"},"Ihr seid nicht allein!"),(0,i.tZ)("br",null),"Wir, das sind Studierende aller Akademien, Hochschulen und Universitäten in Stuttgart."),(0,i.tZ)(s.nv,{tw:"font-bold"},"Wir möchten gehört und nicht vergessen werden!",(0,i.tZ)("br",null),(0,i.tZ)("br",null),"Wir zeigen Gesicht — mit Maske.",(0,i.tZ)("br",null),"Wir gehen auf die Straße — mit Abstand.",(0,i.tZ)("br",null),"Wir sind in der Krise solidarisch — ohne Zögern.")))},c=n(1442),u=n(5317);var d={name:"19vlwzg",styles:'*,*::before,*::after{box-sizing:border-box;}:root{-moz-tab-size:4;tab-size:4;}html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}body{font-family:system-ui,-apple-system,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif,\'Apple Color Emoji\',\'Segoe UI Emoji\';}hr{height:0;color:inherit;}abbr[title]{text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,\'Liberation Mono\',Menlo,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}table{text-indent:0;border-color:inherit;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,select{text-transform:none;}button,[type=\'button\'],[type=\'reset\'],[type=\'submit\']{-webkit-appearance:button;}::-moz-focus-inner{border-style:none;padding:0;}:-moz-focusring{outline:1px dotted ButtonText;}:-moz-ui-invalid{box-shadow:none;}legend{padding:0;}progress{vertical-align:baseline;}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto;}[type=\'search\']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item;}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0;}button{background-color:transparent;background-image:none;}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color;}fieldset{margin:0;padding:0;}ol,ul{list-style:none;margin:0;padding:0;}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5;}body{font-family:inherit;line-height:inherit;}*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}hr{border-top-width:1px;}img{border-style:solid;}textarea{resize:vertical;}input::placeholder,textarea::placeholder{color:#9ca3af;}button,[role="button"]{cursor:pointer;}table{border-collapse:collapse;}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;}a{color:inherit;text-decoration:inherit;}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit;}pre,code,kbd,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto;}@keyframes spin{to{transform:rotate(360deg);}}@keyframes ping{75%,100%{transform:scale(2);opacity:0;}}@keyframes pulse{50%{opacity:.5;}}@keyframes bounce{0%,100%{transform:translateY(-25%);animationTimingFunction:cubic-bezier(0.8,0,1,1);}50%{transform:none;animationTimingFunction:cubic-bezier(0,0,0.2,1);}}*{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;}*{--tw-shadow:0 0 #0000;}p{margin-bottom:3rem;}h3{font-size:1.125rem;margin-bottom:1.5rem;}h2{font-size:1.25rem;margin-bottom:2rem;}h1{font-size:1.5rem;margin-bottom:2.5rem;}'},p=function(){return(0,i.tZ)(i.xB,{styles:d})},f={name:"1mr2xv",styles:"padding-top:3rem;padding-bottom:3rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))"},m={name:"7bz3nr",styles:"max-width:80rem;margin-left:auto;margin-right:auto;padding-left:1rem;padding-right:1rem;@media (min-width: 640px){padding-left:1.5rem;padding-right:1.5rem;}@media (min-width: 1024px){padding-left:2rem;padding-right:2rem;}"},h={name:"158f1cv",styles:"@media (min-width: 1024px){text-align:center;}"},g={name:"1insg92",styles:"margin-top:0.5rem;font-size:1.875rem;line-height:2rem;font-weight:800;letter-spacing:-0.025em;--tw-text-opacity:1;color:rgba(17, 24, 39, var(--tw-text-opacity));@media (min-width: 640px){font-size:2.25rem;line-height:2.5rem;}"},b={name:"y8n2z8",styles:"margin-top:2.5rem"},y={name:"gk7tnx",styles:"> :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2.5rem * var(--tw-space-y-reverse));}@media (min-width: 768px){> :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0px * var(--tw-space-y-reverse));}display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));column-gap:2rem;row-gap:2.5rem;}"},w={name:"bjn8wh",styles:"position:relative"},v={name:"1uobhwp",styles:"position:absolute;display:flex;align-items:center;justify-content:center;height:3rem;width:3rem;border-radius:0.375rem;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))"},x={name:"bq473o",styles:"height:1.5rem;width:1.5rem"},k={name:"5rjyd3",styles:"margin-left:4rem;font-size:1.125rem;line-height:1.5rem;font-weight:500;--tw-text-opacity:1;color:rgba(17, 24, 39, var(--tw-text-opacity))"},T=function(){return(0,i.tZ)(o.Fragment,null,(0,i.tZ)(p,null),(0,i.tZ)(s.$0,null,(0,i.tZ)("div",{css:f},(0,i.tZ)("div",{css:m},(0,i.tZ)("div",{css:h},(0,i.tZ)(s.jn,{style:{color:u.themeColor}},"Unsere Forderungen"),(0,i.tZ)("p",{css:g},"Wir fordern vom Ministerium für Wissenschaft, Forschung und Kunst Baden-Württemberg angemessene Studienbedingungen")),(0,i.tZ)("div",{css:b},(0,i.tZ)("dl",{css:y},S.map((function(e){return(0,i.tZ)("div",{key:e.name,css:w},(0,i.tZ)("dt",null,(0,i.tZ)("div",{css:v,style:{backgroundColor:u.themeColor}},(0,i.tZ)(e.icon,{css:x,"aria-hidden":"true"}))),(0,i.tZ)("dd",{css:k},e.claim))}))))))))},S=[{claim:"Wir fordern ein integratives Konzept der universitären Idee für die digitalen Angebote! Die Universität lebt auch außerhalb des Hörsaals und Diskurse lassen sich nur sehr schwer oder überhaupt nicht in Videokonferenzen führen.",icon:c.I_0},{claim:"Wir fordern konkrete Perspektiven — sei es für die Öffnung der Akademien, Hochschulen und Universitäten, für die Eingliederung von Erstsemester im Studium oder Letztsemester auf dem Arbeitsmarkt!",icon:c.fh6},{claim:"Wir fordern die Aussetzung der Gebühren für alle Studierenden, vor allem aber für die, die sich im internationalen oder zweiten Studium befinden!",icon:c.YGl},{claim:"Wir fordern vernünftige, sozial angemessene finanzielle Unterstützung für Studierende!",icon:c.NbN},{claim:"Wir fordern die Anpassung der Prüfungsordnungen auf die besonderen Bedingungen der Pandemie!",icon:c.Q73}],A=n(6156);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,A.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z,Z,j,E,P={name:"19vlwzg",styles:'*,*::before,*::after{box-sizing:border-box;}:root{-moz-tab-size:4;tab-size:4;}html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}body{font-family:system-ui,-apple-system,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif,\'Apple Color Emoji\',\'Segoe UI Emoji\';}hr{height:0;color:inherit;}abbr[title]{text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,\'Liberation Mono\',Menlo,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}table{text-indent:0;border-color:inherit;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,select{text-transform:none;}button,[type=\'button\'],[type=\'reset\'],[type=\'submit\']{-webkit-appearance:button;}::-moz-focus-inner{border-style:none;padding:0;}:-moz-focusring{outline:1px dotted ButtonText;}:-moz-ui-invalid{box-shadow:none;}legend{padding:0;}progress{vertical-align:baseline;}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto;}[type=\'search\']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item;}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0;}button{background-color:transparent;background-image:none;}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color;}fieldset{margin:0;padding:0;}ol,ul{list-style:none;margin:0;padding:0;}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5;}body{font-family:inherit;line-height:inherit;}*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}hr{border-top-width:1px;}img{border-style:solid;}textarea{resize:vertical;}input::placeholder,textarea::placeholder{color:#9ca3af;}button,[role="button"]{cursor:pointer;}table{border-collapse:collapse;}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;}a{color:inherit;text-decoration:inherit;}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit;}pre,code,kbd,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto;}@keyframes spin{to{transform:rotate(360deg);}}@keyframes ping{75%,100%{transform:scale(2);opacity:0;}}@keyframes pulse{50%{opacity:.5;}}@keyframes bounce{0%,100%{transform:translateY(-25%);animationTimingFunction:cubic-bezier(0.8,0,1,1);}50%{transform:none;animationTimingFunction:cubic-bezier(0,0,0.2,1);}}*{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;}*{--tw-shadow:0 0 #0000;}p{margin-bottom:3rem;}h3{font-size:1.125rem;margin-bottom:1.5rem;}h2{font-size:1.25rem;margin-bottom:2rem;}h1{font-size:1.5rem;margin-bottom:2.5rem;}'},I=function(){return(0,i.tZ)(i.xB,{styles:P})},M={name:"d42toc",styles:"@media (min-width: 768px){display:grid;grid-template-columns:repeat(3, minmax(0, 1fr));gap:1.5rem;}"},L={name:"1bdi92w",styles:"@media (min-width: 768px){grid-column:span 1 / span 1;}"},N={name:"1pd8b9c",styles:"padding-left:1rem;padding-right:1rem;@media (min-width: 640px){padding-left:0px;padding-right:0px;}"},F={name:"1pfxeki",styles:"font-size:1.5rem;line-height:2rem;letter-spacing:-0.025em;font-weight:800;--tw-text-opacity:1;color:rgba(17, 24, 39, var(--tw-text-opacity));@media (min-width: 640px){font-size:1.5rem;line-height:2rem;}@media (min-width: 768px){font-size:1.875rem;line-height:2.25rem;}"},U={name:"1kzdm9b",styles:"margin-top:1.25rem;@media (min-width: 768px){grid-column:span 2 / span 2;margin-top:0px;}"},R={name:"120xvy5",styles:"--tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);@media (min-width: 640px){border-radius:0.375rem;overflow:hidden;}"},W={name:"14tkg57",styles:"--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))"},B={name:"bqiii0",styles:"--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);padding:1rem;display:block;width:100%;--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity));:focus{--tw-border-opacity:1;border-color:rgba(107, 114, 128, var(--tw-border-opacity));outline:2px solid transparent;outline-offset:2px;}border-radius:0.375rem;@media (min-width: 640px){font-size:0.875rem;line-height:1.25rem;}"},D={name:"12l018y",styles:"padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;--tw-bg-opacity:1;background-color:rgba(249, 250, 251, var(--tw-bg-opacity));text-align:right;@media (min-width: 640px){padding-left:1.5rem;padding-right:1.5rem;}"},_={name:"3ch7lh",styles:"display:inline-flex;justify-content:center;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;border-width:1px;border-color:transparent;--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);font-size:0.875rem;line-height:1.25rem;font-weight:500;border-radius:0.375rem;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-offset-width:2px;}"},H=function(){var e,t=(0,o.useState)({post:""}),n=t[0],r=t[1],a=(0,o.useState)(!1),l=a[0],c=a[1],d={"entry.513669972":null!==(e=n.post)&&void 0!==e?e:"No message"};return(0,i.tZ)(o.Fragment,null,(0,i.tZ)(I,null),(0,i.tZ)(s.$0,null,(0,i.tZ)(s.W2,null,(0,i.tZ)("div",null,(0,i.tZ)("div",{css:M},(0,i.tZ)("div",{css:L},(0,i.tZ)("div",{css:N},(0,i.tZ)("h3",{css:F},"Open Call"),(0,i.tZ)(s.nv,null,"Und was ist mit dir? Wir als Initiator*innen sind Studierende. Und damit selbst direkt von den verschiedenen Einschränkungen betroffen. Aber was ist mit dir? Was ist deine Geschichte? Wie ging es dir während Corona? Schreib uns deine Geschichte. Anonym. Wir posten Sie hier.",(0,i.tZ)("br",null),(0,i.tZ)("br",null),"Je mehr wir sind, desto lauter hört man unsere Forderungen!"))),(0,i.tZ)("div",{css:U},!l&&(0,i.tZ)("form",null,(0,i.tZ)("div",{css:R},(0,i.tZ)("div",{css:W},(0,i.tZ)("textarea",{name:"post",rows:14,onChange:function(e){var t,i=e.target,o=i.name,a=i.value,s=O(O({},n),{},((t={})[o]=a,t));r(s)},css:B,placeholder:"Deine Story ...",value:n.post||""})),(0,i.tZ)("div",{css:D},(0,i.tZ)("button",{onClick:function(e){e.preventDefault(),console.log(d,n),fetch(u.formUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:JSON.stringify(d)}).then((function(e){return e.json()})).then((function(e){c(!0),console.log("Post sent perfectly",e)})).catch((function(e){return console.log("Something went wrong ... Please, check your internet connection.",e)}))},style:{backgroundColor:u.themeColor},css:_},"Abschicken")))),l&&(0,i.tZ)(s.nv,null,"Danke für deine Bemührungen!")))))))},q=n(5444),Y=n(5697),K=n.n(Y),G=n(4839),V=n.n(G),$=n(2993),J=n.n($),Q=n(6494),X=n.n(Q),ee="bodyAttributes",te="htmlAttributes",ne="titleAttributes",re={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},ie=(Object.keys(re).map((function(e){return re[e]})),"charset"),oe="cssText",ae="href",se="http-equiv",le="innerHTML",ce="itemprop",ue="name",de="property",pe="rel",fe="src",me="target",he={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ge="defaultTitle",be="defer",ye="encodeSpecialCharacters",we="onChangeClientState",ve="titleTemplate",xe=Object.keys(he).reduce((function(e,t){return e[he[t]]=t,e}),{}),ke=[re.NOSCRIPT,re.SCRIPT,re.STYLE],Te="data-react-helmet",Se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ae=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Ce=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ze=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Ze=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},je=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Ee=function(e){var t=Ne(e,re.TITLE),n=Ne(e,ve);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Ne(e,ge);return t||r||void 0},Pe=function(e){return Ne(e,we)||function(){}},Ie=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Oe({},e,t)}),{})},Me=function(e,t){return t.filter((function(e){return void 0!==e[re.BASE]})).map((function(e){return e[re.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Le=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&Be("Helmet: "+e+' should be of type "Array". Instead found type "'+Se(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var s=o[a],l=s.toLowerCase();-1===t.indexOf(l)||n===pe&&"canonical"===e[n].toLowerCase()||l===pe&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(s)||s!==le&&s!==oe&&s!==ce||(n=s)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][c]&&(i[n][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var s=o[a],l=X()({},r[s],i[s]);r[s]=l}return e}),[]).reverse()},Ne=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Fe=(z=Date.now(),function(e){var t=Date.now();t-z>16?(z=t,e(t)):setTimeout((function(){Fe(e)}),0)}),Ue=function(e){return clearTimeout(e)},Re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Fe:n.g.requestAnimationFrame||Fe,We="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Ue:n.g.cancelAnimationFrame||Ue,Be=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},De=null,_e=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,d=e.title,p=e.titleAttributes;Ye(re.BODY,r),Ye(re.HTML,i),qe(d,p);var f={baseTag:Ke(re.BASE,n),linkTags:Ke(re.LINK,o),metaTags:Ke(re.META,a),noscriptTags:Ke(re.NOSCRIPT,s),scriptTags:Ke(re.SCRIPT,c),styleTags:Ke(re.STYLE,u)},m={},h={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=f[e].oldTags)})),t&&t(),l(e,m,h)},He=function(e){return Array.isArray(e)?e.join(""):e},qe=function(e,t){void 0!==e&&document.title!==e&&(document.title=He(e)),Ye(re.TITLE,t)},Ye=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Te),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),s=0;s<a.length;s++){var l=a[s],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),-1===i.indexOf(l)&&i.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);i.length===o.length?n.removeAttribute(Te):n.getAttribute(Te)!==a.join(",")&&n.setAttribute(Te,a.join(","))}},Ke=function(e,t){var n=document.head||document.querySelector(re.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===le)n.innerHTML=t.innerHTML;else if(r===oe)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(Te,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},Ge=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Ve=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[he[n]||n]=e[n],t}),t)},$e=function(e,t,n){switch(e){case re.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[Te]=!0,i=Ve(n,r),[o.createElement(re.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=Ge(n),o=He(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+je(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+je(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case ee:case te:return{toComponent:function(){return Ve(t)},toString:function(){return Ge(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[Te]=!0,r);return Object.keys(t).forEach((function(e){var n=he[e]||e;if(n===le||n===oe){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),o.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===le||e===oe)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+je(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===ke.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},Je=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.scriptTags,c=e.styleTags,u=e.title,d=void 0===u?"":u,p=e.titleAttributes;return{base:$e(re.BASE,t,r),bodyAttributes:$e(ee,n,r),htmlAttributes:$e(te,i,r),link:$e(re.LINK,o,r),meta:$e(re.META,a,r),noscript:$e(re.NOSCRIPT,s,r),script:$e(re.SCRIPT,l,r),style:$e(re.STYLE,c,r),title:$e(re.TITLE,{title:d,titleAttributes:p},r)}},Qe=V()((function(e){return{baseTag:Me([ae,me],e),bodyAttributes:Ie(ee,e),defer:Ne(e,be),encode:Ne(e,ye),htmlAttributes:Ie(te,e),linkTags:Le(re.LINK,[pe,ae],e),metaTags:Le(re.META,[ue,ie,se,de,ce],e),noscriptTags:Le(re.NOSCRIPT,[le],e),onChangeClientState:Pe(e),scriptTags:Le(re.SCRIPT,[fe,le],e),styleTags:Le(re.STYLE,[oe],e),title:Ee(e),titleAttributes:Ie(ne,e)}}),(function(e){De&&We(De),e.defer?De=Re((function(){_e(e,(function(){De=null}))})):(_e(e),De=null)}),Je)((function(){return null})),Xe=(Z=Qe,E=j=function(e){function t(){return Ae(this,t),Ze(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!J()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case re.SCRIPT:case re.NOSCRIPT:return{innerHTML:t};case re.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return Oe({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Oe({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case re.TITLE:return Oe({},i,((t={})[r.type]=a,t.titleAttributes=Oe({},o),t));case re.BODY:return Oe({},i,{bodyAttributes:Oe({},o)});case re.HTML:return Oe({},i,{htmlAttributes:Oe({},o)})}return Oe({},i,((n={})[r.type]=Oe({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Oe({},t);return Object.keys(e).forEach((function(t){var r;n=Oe({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[xe[n]||n]=e[n],t}),t)}(ze(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case re.LINK:case re.META:case re.NOSCRIPT:case re.SCRIPT:case re.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=ze(e,["children"]),r=Oe({},n);return t&&(r=this.mapChildrenToProps(t,r)),o.createElement(Z,r)},Ce(t,null,[{key:"canUseDOM",set:function(e){Z.canUseDOM=e}}]),t}(o.Component),j.propTypes={base:K().object,bodyAttributes:K().object,children:K().oneOfType([K().arrayOf(K().node),K().node]),defaultTitle:K().string,defer:K().bool,encodeSpecialCharacters:K().bool,htmlAttributes:K().object,link:K().arrayOf(K().object),meta:K().arrayOf(K().object),noscript:K().arrayOf(K().object),onChangeClientState:K().func,script:K().arrayOf(K().object),style:K().arrayOf(K().object),title:K().string,titleAttributes:K().object,titleTemplate:K().string},j.defaultProps={defer:!0,encodeSpecialCharacters:!0},j.peek=Z.peek,j.rewind=function(){var e=Z.rewind();return e||(e=Je({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);Xe.renderStatic=Xe.rewind;var et=Xe,tt=function(){var e=u.siteUrl+u.pathPrefix,t=[{"@context":"http://schema.org","@type":"WebSite","@id":e,url:e,name:u.siteTitle,alternateName:null!==u.siteTitleAlt&&void 0!==u.siteTitleAlt?u.siteTitleAlt:""}];return(0,i.tZ)(et,null,(0,i.tZ)("html",{lang:u.siteLanguage}),(0,i.tZ)("title",null,u.siteTitle),(0,i.tZ)("meta",{name:"description",content:u.siteDescription}),(0,i.tZ)("meta",{name:"image",content:u.siteBanner}),(0,i.tZ)("script",{type:"application/ld+json"},JSON.stringify(t)),(0,i.tZ)("meta",{property:"og:locale",content:u.siteLanguage}),(0,i.tZ)("meta",{property:"og:site_name",content:null!==u.siteTitle&&void 0!==u.siteTitle?u.siteTitle:""}),(0,i.tZ)("meta",{property:"og:url",content:e}),(0,i.tZ)("meta",{property:"og:title",content:u.siteTitle}),(0,i.tZ)("meta",{property:"og:description",content:u.siteDescription}),(0,i.tZ)("meta",{property:"og:image",content:u.siteBanner}),(0,i.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.tZ)("meta",{name:"twitter:title",content:u.siteTitle}),(0,i.tZ)("meta",{name:"twitter:url",content:u.siteUrl}),(0,i.tZ)("meta",{name:"twitter:description",content:u.siteDescription}),(0,i.tZ)("meta",{name:"twitter:image",content:u.siteBanner}))},nt=function(){var e=(0,q.useStaticQuery)("1677626568").allInstaNode.nodes,t=e&&e.map((function(e){var t,n=e.id,r=e.caption;return{caption:r,imgPath:e.preview,imageData:e.localFile.childImageSharp.gatsbyImageData,title:r&&r.slice(0,(null===(t=r.match(/[!?.,;]/m))||void 0===t?void 0:t.index)+1),url:"https://www.instagram.com/p/"+n+"/"}}));return(0,i.tZ)(s.$0,null,(0,i.tZ)(s.W2,null,(0,i.tZ)(s.V8,null,t&&t.map((function(e){var t;return(0,i.tZ)(s.YS,{key:e.url},(0,i.tZ)(s.Zb,null,(0,i.tZ)("a",{href:""+e.url,target:"_blank",rel:"nofollow noopener noreferrer"},(0,i.tZ)(s.xu,{style:{maxWidth:"100%"},alt:null!==(t=e.caption)&&void 0!==t?t:"",image:e.imageData,imgStyle:{objectFit:"contain"}}))))})))))};var rt={name:"19vlwzg",styles:'*,*::before,*::after{box-sizing:border-box;}:root{-moz-tab-size:4;tab-size:4;}html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}body{font-family:system-ui,-apple-system,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif,\'Apple Color Emoji\',\'Segoe UI Emoji\';}hr{height:0;color:inherit;}abbr[title]{text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,\'Liberation Mono\',Menlo,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}table{text-indent:0;border-color:inherit;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,select{text-transform:none;}button,[type=\'button\'],[type=\'reset\'],[type=\'submit\']{-webkit-appearance:button;}::-moz-focus-inner{border-style:none;padding:0;}:-moz-focusring{outline:1px dotted ButtonText;}:-moz-ui-invalid{box-shadow:none;}legend{padding:0;}progress{vertical-align:baseline;}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto;}[type=\'search\']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item;}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0;}button{background-color:transparent;background-image:none;}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color;}fieldset{margin:0;padding:0;}ol,ul{list-style:none;margin:0;padding:0;}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5;}body{font-family:inherit;line-height:inherit;}*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}hr{border-top-width:1px;}img{border-style:solid;}textarea{resize:vertical;}input::placeholder,textarea::placeholder{color:#9ca3af;}button,[role="button"]{cursor:pointer;}table{border-collapse:collapse;}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;}a{color:inherit;text-decoration:inherit;}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit;}pre,code,kbd,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto;}@keyframes spin{to{transform:rotate(360deg);}}@keyframes ping{75%,100%{transform:scale(2);opacity:0;}}@keyframes pulse{50%{opacity:.5;}}@keyframes bounce{0%,100%{transform:translateY(-25%);animationTimingFunction:cubic-bezier(0.8,0,1,1);}50%{transform:none;animationTimingFunction:cubic-bezier(0,0,0.2,1);}}*{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;}*{--tw-shadow:0 0 #0000;}p{margin-bottom:3rem;}h3{font-size:1.125rem;margin-bottom:1.5rem;}h2{font-size:1.25rem;margin-bottom:2rem;}h1{font-size:1.5rem;margin-bottom:2.5rem;}'},it=function(){return(0,i.tZ)(i.xB,{styles:rt})},ot=(0,r.Z)(q.Link,{target:"e1bj1gfd0"})({name:"1aqtws9",styles:"padding-top:2rem;padding-bottom:2rem"}),at=function(){return(0,i.tZ)(o.Fragment,null,(0,i.tZ)(tt,null),(0,i.tZ)(it,null),(0,i.tZ)(a.h,null),(0,i.tZ)(l,null),(0,i.tZ)(T,null),(0,i.tZ)(nt,null),(0,i.tZ)(H,null),(0,i.tZ)(s.W2,null,(0,i.tZ)(ot,{to:"/imprint"},"Impressum")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-4d70a4309bc83956422a.js.map