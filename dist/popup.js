(()=>{var e,t,n,r={917:(e,t,n)=>{"use strict";n.d(t,{F4:()=>a,iv:()=>s}),n(7294),n(6751),n(8679);var r=n(6797);function s(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.O)(t)}n(7278);var a=function(){var e=s.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},7278:(e,t,n)=>{"use strict";var r;n.d(t,{L:()=>o});var s=n(7294),a=!!(r||(r=n.t(s,2))).useInsertionEffect&&(r||(r=n.t(s,2))).useInsertionEffect,o=a||function(e){return e()};a||s.useLayoutEffect},3205:(e,t,n)=>{"use strict";var r=n(4836);t.Z=void 0;var s=r(n(4938)),a=n(5893),o=(0,s.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddCircle");t.Z=o},6176:(e,t,n)=>{"use strict";var r=n(4836);t.Z=void 0;var s=r(n(4938)),a=n(5893),o=(0,s.default)((0,a.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");t.Z=o},336:(e,t,n)=>{"use strict";var r=n(4836);t.Z=void 0;var s=r(n(4938)),a=n(5893),o=(0,s.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"}),"RemoveCircle");t.Z=o},6307:(e,t,n)=>{"use strict";var r=n(4836);t.Z=void 0;var s=r(n(4938)),a=n(5893),o=(0,s.default)((0,a.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.Z=o},3839:(e,t,n)=>{"use strict";var r=n(4836);t.Z=void 0;var s=r(n(4938)),a=n(5893),o=(0,s.default)((0,a.jsx)("path",{d:"M14.59 7.41 18.17 11H6v2h12.17l-3.59 3.59L16 18l6-6-6-6-1.41 1.41zM2 6v12h2V6H2z"}),"Start");t.Z=o},948:(e,t,n)=>{"use strict";n.d(t,{FO:()=>a,ZP:()=>o});var r=n(2360),s=n(8794);const a=e=>(0,r.x9)(e)&&"classes"!==e,o=(0,r.ZP)({defaultTheme:s.Z,rootShouldForwardProp:a})},1796:(e,t,n)=>{"use strict";n.d(t,{$n:()=>d,Fq:()=>u,_j:()=>c,mi:()=>l});var r=n(1387);function s(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function a(e){if(e.type)return e;if("#"===e.charAt(0))return a(function(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&1===n[0].length&&(n=n.map((e=>e+e))),n?`rgb${4===n.length?"a":""}(${n.map(((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3)).join(", ")})`:""}(e));const t=e.indexOf("("),n=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(n))throw new Error((0,r.Z)(9,e));let s,o=e.substring(t+1,e.length-1);if("color"===n){if(o=o.split(" "),s=o.shift(),4===o.length&&"/"===o[3].charAt(0)&&(o[3]=o[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(s))throw new Error((0,r.Z)(10,s))}else o=o.split(",");return o=o.map((e=>parseFloat(e))),{type:n,values:o,colorSpace:s}}function o(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return-1!==t.indexOf("rgb")?r=r.map(((e,t)=>t<3?parseInt(e,10):e)):-1!==t.indexOf("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),r=-1!==t.indexOf("color")?`${n} ${r.join(" ")}`:`${r.join(", ")}`,`${t}(${r})`}function i(e){let t="hsl"===(e=a(e)).type||"hsla"===e.type?a(function(e){e=a(e);const{values:t}=e,n=t[0],r=t[1]/100,s=t[2]/100,i=r*Math.min(s,1-s),l=(e,t=(e+n/30)%12)=>s-i*Math.max(Math.min(t-3,9-t,1),-1);let u="rgb";const c=[Math.round(255*l(0)),Math.round(255*l(8)),Math.round(255*l(4))];return"hsla"===e.type&&(u+="a",c.push(t[3])),o({type:u,values:c})}(e)).values:e.values;return t=t.map((t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4))),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function l(e,t){const n=i(e),r=i(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function u(e,t){return e=a(e),t=s(t),"rgb"!==e.type&&"hsl"!==e.type||(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,o(e)}function c(e,t){if(e=a(e),t=s(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]*=1-t;return o(e)}function d(e,t){if(e=a(e),t=s(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return o(e)}},2255:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3645),s=n.n(r)()((function(e){return e[1]}));s.push([e.id,".name-input {\n  width: 70%;\n  padding: 15px 10px;\n  border-radius: 10px;\n  border: 3px solid rgb(50, 50, 50);\n  transition: border-color 0.3s;\n  text-transform: uppercase;\n}\n\n.name-input:focus {\n  outline: none;\n  border-color: yellow;\n}\n\n/* .error-border {\n  border-color: red;\n} */\n",""]);const a=s},6363:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3645),s=n.n(r)()((function(e){return e[1]}));s.push([e.id,".task-input {\n  width: 70%;\n  padding: 10px 5px;\n  border-radius: 5px;\n  font-family: Arial;\n  resize: vertical;\n}\n\n.task-input:focus,\n.hours-input:focus {\n  outline: none;\n}\n\n.hours-input {\n  width: 25%;\n  text-align: center;\n  border-radius: 5px;\n  font-family: Arial;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n",""]);const a=s},6699:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3645),s=n.n(r)()((function(e){return e[1]}));s.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n",""]);const a=s},6700:(e,t,n)=>{var r={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":864,"./da.js":864,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":6997,"./en-ca.js":6997,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":2088,"./es-do.js":2088,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8886,"./gl.js":8886,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5606,"./ss.js":5606,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":5057,"./zh-cn.js":5057,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function s(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id=6700},3935:(e,t,n)=>{"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=n(4448)},5578:(e,t,n)=>{"use strict";var r=n(7294),s=n(3935),a=n(3379),o=n.n(a),i=n(6699);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var l=n(2255);o()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;var u=n(6176),c=n(3839);const d=function(e){return r.createElement("div",{style:{width:"350px",height:"250px",backgroundColor:"rgb(50, 50, 50)",color:"whitesmoke",textAlign:"center"}},r.createElement("h1",{style:{paddingTop:"20px"}},e.heading),r.createElement("h2",{style:{marginTop:"45px",marginBottom:"20px"}},e.subHeading),r.createElement("form",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center"}},r.createElement("input",{className:"name-input",type:e.inputType,placeholder:"Enter your name",required:!0,ref:e.inputRef,style:{width:"time"===e.inputType&&"50%"}}),r.createElement("button",{type:"submit",style:{color:"yellow",backgroundColor:"inherit",border:"none",cursor:"pointer"},onClick:e.onSave},"time"===e.inputType?r.createElement(c.Z,null):r.createElement(u.Z,null))))};var p=n(6363);o()(p.Z,{insert:"head",singleton:!1}),p.Z.locals;var m=n(3205),f=n(336),h=n(6914),j=n(6307),v=n(948),g=n(25),y=n(381),b=n.n(y);const x=(e,t,n,r)=>{return s=void 0,a=void 0,i=function*(){return yield fetch(`https://weekly-report-manager-default-rtdb.firebaseio.com/${e}/${k()}/${r||b()().format("YYYY-MM-DD")}.json`,{method:"PUT",body:JSON.stringify({tasks:t,hours:n}),headers:{"Content-Type":"application/json"}})},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{l(i.next(e))}catch(e){t(e)}}function r(e){try{l(i.throw(e))}catch(e){t(e)}}function l(t){var s;t.done?e(t.value):(s=t.value,s instanceof o?s:new o((function(e){e(s)}))).then(n,r)}l((i=i.apply(s,a||[])).next())}));var s,a,o,i},k=()=>{const e=b()();return`${e.day(e.day()>=5?5:-2).format("YYYY-MM-DD")}_${e.add((4-e.day()+7)%7,"days").format("YYYY-MM-DD")}`};var O=n(9062);const E=(0,v.ZP)(h.Z)((({theme:e})=>({color:e.palette.getContrastText(g.Z[500]),backgroundColor:g.Z[500],"&:hover":{backgroundColor:g.Z[700]},"&:disabled":{backgroundColor:g.Z[300]}}))),w=function(e){const[t,n]=(0,r.useState)([""]),[s,a]=(0,r.useState)(!1),[o,i]=(0,r.useState)(0);(0,r.useEffect)((()=>{chrome.storage.local.get((e=>{var t;i(e.hours||0),n((null===(t=e.entries)||void 0===t?void 0:t.length)>0?e.entries:[""])}))}),[]);const l=e=>chrome.storage.local.set({hours:o,entries:t.filter((e=>e.trim().length))});return r.createElement("div",{style:{width:"350px",minHeight:"250px",backgroundColor:"rgb(50, 50, 50)",color:"whitesmoke",textAlign:"center",padding:"20px",paddingBottom:"50px"}},r.createElement("h1",{style:{marginBottom:"30px"}},"What did you do today?"),t.map(((e,s)=>r.createElement("div",{key:s,style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",marginBottom:"10px"}},s==t.length-1?r.createElement(m.Z,{onClick:()=>n((e=>[...e,""])),style:{margin:"5px 0px",cursor:"pointer"}}):r.createElement("div",{style:{backgroundColor:"white",color:"black",width:"20px",height:"20px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",margin:"5px 0px"}},s+1),r.createElement("textarea",{rows:2,className:"task-input",placeholder:`Task ${s+1}`,value:e,onChange:e=>((e,r)=>{const s=[...t];s[r]=e.target.value,n(s)})(e,s),onBlur:l}),1!=t.length&&r.createElement(f.Z,{onClick:()=>n((e=>e.filter(((e,t)=>t!=s)))),style:{margin:"5px 0px",cursor:"pointer"}})))),r.createElement("div",null,r.createElement("label",{style:{fontSize:"15px",marginRight:"15px"}},"Hours"),r.createElement("input",{type:"number",className:"hours-input",min:0,max:24,value:o,onChange:e=>i(+e.target.value),onBlur:l})),r.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",bottom:"5px",right:"3px",zIndex:1}},s?r.createElement(O.Z,null):r.createElement(E,{variant:"contained",endIcon:r.createElement(j.Z,null),onClick:()=>{return r=this,s=void 0,u=function*(){a(!0),200===(yield x(e.username,t.filter((e=>e.trim().length)),o)).status&&(n([""]),i(0),chrome.storage.local.set({hours:null,entries:null})),a(!1)},new((l=void 0)||(l=Promise))((function(e,t){function n(e){try{o(u.next(e))}catch(e){t(e)}}function a(e){try{o(u.throw(e))}catch(e){t(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof l?r:new l((function(e){e(r)}))).then(n,a)}o((u=u.apply(r,s||[])).next())}));var r,s,l,u},disabled:0==t.filter((e=>e.trim().length)).length||o<0||o>24||s},"Send")))},_=document.createElement("div");document.body.appendChild(_),s.render(r.createElement((function(){const e=(0,r.useRef)(),t=(0,r.useRef)(),[n,s]=(0,r.useState)(!1),[a,o]=(0,r.useState)(!1),[i,l]=(0,r.useState)("");return(0,r.useEffect)((()=>{chrome.storage.local.get((e=>{e.username&&e.timeToRemind&&(l(e.username),o(!0))}))})),r.createElement("div",null,a?r.createElement(w,{username:i}):n?r.createElement(d,{heading:`Hi ${e.current.value}`,subHeading:"When you want me to remind?",inputRef:t,inputType:"time",onSave:e=>{e.preventDefault(),t.current.value&&chrome.storage.local.set({timeToRemind:t.current.value},(()=>{chrome.runtime.sendMessage({time:t.current.value}),o(!0)}))}}):r.createElement(d,{heading:"Let's get started!",subHeading:"Hey Buddy, what should I call you?",inputRef:e,inputType:"text",onSave:t=>{t.preventDefault(),e.current.value=e.current.value.trim().toUpperCase(),e.current.value&&chrome.storage.local.set({username:e.current.value},(()=>{s(!0)}))}}))}),null),_)}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=r,e=[],a.O=(t,n,r,s)=>{if(!n){var o=1/0;for(c=0;c<e.length;c++){for(var[n,r,s]=e[c],i=!0,l=0;l<n.length;l++)(!1&s||o>=s)&&Object.keys(a.O).every((e=>a.O[e](n[l])))?n.splice(l--,1):(i=!1,s<o&&(o=s));if(i){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,r,s]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var s=Object.create(null);a.r(s);var o={};t=t||[null,n({}),n([]),n(n)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,a.d(s,o),s},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={42:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,s,[o,i,l]=n,u=0;if(o.some((t=>0!==e[t]))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var c=l(a)}for(t&&t(n);u<o.length;u++)s=o[u],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(c)},n=self.webpackChunkweekly_report_extension=self.webpackChunkweekly_report_extension||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),a.nc=void 0;var o=a.O(void 0,[4],(()=>a(5578)));o=a.O(o)})();