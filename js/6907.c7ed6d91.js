"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[6907,9468,2218],{82292:function(e,n,t){t.a(e,(async function(e,o){try{t(58293);var i=t(45542),l=(t(94310),t(61446)),r=t(66252),a=t(2262),u=t(42218),c=t(91980),s=e([c]);c=(s.then?(await s)():s)[0];const d=(e=>((0,r.dD)("data-v-ea0aa8b4"),e=e(),(0,r.Cn)(),e))((()=>(0,r._)("a",{class:"text-blue-500",target:"_blank",href:"https://github.com/buqiyuan/vite-vue3-admin/blob/main/src/views/demos/form/rule-form/index.vue"}," 查看源码 ",-1))),p=(0,r.aZ)({name:"DemosFormRuleForm"});n.Z=(0,r.aZ)({...p,setup(e){const n=(0,a.iH)(),t={schemas:u.schemas,labelWidth:120,actionColOptions:{span:24}};function o(){var e;null===(e=n.value)||void 0===e||e.validate().then((()=>l.ZP.success("验证通过！")))}return(e,l)=>{const u=(0,r.up)("a-card");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)((0,a.SU)(i.Z),{message:"验证表单",description:"动态验证表单",type:"info","show-icon":"",style:{"margin-bottom":"12px"}},{description:(0,r.w5)((()=>[d])),_:1}),(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)((0,a.SU)(c.SchemaForm),(0,r.dG)({ref_key:"dynamicForm",ref:n},t,{onSubmit:o}),null,16)])),_:1})])}}}),o()}catch(e){o(e)}}))},85713:function(e,n,t){t.d(n,{G:function(){return d}});var o,i,l=t(66252),r=t(2262);!function(e){e.XS="XS",e.SM="SM",e.MD="MD",e.LG="LG",e.XL="XL",e.XXL="XXL"}(o||(o={})),function(e){e[e.XS=480]="XS",e[e.SM=576]="SM",e[e.MD=768]="MD",e[e.LG=992]="LG",e[e.XL=1200]="XL",e[e.XXL=1600]="XXL"}(i||(i={}));const a=new Map;let u,c,s;function d(){return{screenRef:(0,l.Fl)((()=>(0,r.SU)(u))),widthRef:c,screenEnum:i,realWidthRef:s}}a.set(o.XS,i.XS),a.set(o.SM,i.SM),a.set(o.MD,i.MD),a.set(o.LG,i.LG),a.set(o.XL,i.XL),a.set(o.XXL,i.XXL)},54278:function(e,n,t){t.d(n,{GP:function(){return i}});var o=t(27484);const i=t.n(o)()},98243:function(e,n,t){t.d(n,{GR:function(){return l},IS:function(){return i},RH:function(){return r},nz:function(){return a}});var o=t(71377);function i(e){var n;if(!e)return"file-type-unknown";const t=null===(n=/[.]/.exec(o=e)?null===(i=/[^.]+$/.exec(o))||void 0===i?void 0:i[0]:void 0)||void 0===n?void 0:n.toLowerCase();var o,i;return t?["png","jpg","jpeg","ico","gif","bmp","webp"].includes(t)?"file-type-img":["markdown","md","txt"].includes(t)?"file-type-txt":["docx","doc","docm","dot","dotx"].includes(t)?"file-type-docx":["csv","xls","xlsb","xlsm","xlsx","xltx"].includes(t)?"file-type-excel":"pdf"===t?"file-type-pdf":["pptx","ppt","pptm"].includes(t)?"file-type-ppt":["zip","rar","7z","tar","gz","tgz","tar.gz","tar.xz"].includes(t)?"file-type-zip":["mp4","avi","wmv","rmvb","3gp","mov","m4v","flv","mkv"].includes(t)?"file-type-video":["mp3","wav"].includes(t)?"file-type-music":["vue","js","go","java","ts","css","html","php","c","cpp","swift","kt"].includes(t)?"file-type-code":"file-type-unknown":"file-type-unknown"}function l(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";const t=1024,o=n<0?0:n,i=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],l=Math.floor(Math.log(e)/Math.log(t));return`${parseFloat((e/Math.pow(t,l)).toFixed(o))} ${i[l]}`}function r(){let e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(e in t)n[e]=(0,o.Kn)(n[e])?r(n[e],t[e]):n[e]=t[e];return n}const a=(e,n)=>{const t=e;return t.install=o=>{o.component(t.name||t.displayName,e),n&&(o.config.globalProperties[n]=e)},e}},74703:function(e,n,t){t.d(n,{i:function(){return o}});const o=(0,t(72007).Dl)({func:void 0,bool:void 0,string:void 0,number:void 0,object:void 0,integer:void 0});o.extend([{name:"style",getter:!0,type:[String,Object],default:void 0},{name:"VNodeChild",getter:!0,type:void 0}])},42218:function(e,n,t){t.r(n),t.d(n,{schemas:function(){return o}});const o=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",vShow:!1},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"字段33",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa",type:"array"}]},{field:"field441",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:async(e,n)=>n?"1"===n?Promise.reject("值不能为1"):Promise.resolve():Promise.reject("值不能为空"),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]},{field:"field8",component:"Input",label:"后端异步验证",colProps:{span:8},helpMessage:["本字段演示异步验证","本地规则：必须填写","后端规则：不能包含admin"],rules:[{required:!0,message:"请输入数据"},{validator(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise(((e,t)=>{setTimeout((()=>{n.includes("admin")?t("该字段不能包含admin关键字"):e()}),100)}))}}]}]},93748:function(e,n,t){t.d(n,{z:function(){return i}});t(81299);var o=t(71377);function i(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",t=arguments.length>2?arguments[2]:void 0;if(!e||!Reflect.has(e,n))return null;if(!(0,o.mf)(e[n]))return null;const i=e[n];return i?i(t):null}},29468:function(e,n,t){t.a(e,(async function(e,o){try{t.r(n);var i=t(804),l=(t(62513),t(83744)),r=e([i]);i=(r.then?(await r)():r)[0];const a=(0,l.Z)(i.Z,[["__scopeId","data-v-ea0aa8b4"]]);n.default=a,o()}catch(e){o(e)}}))},804:function(e,n,t){t.a(e,(async function(e,o){try{t.d(n,{Z:function(){return i.Z}});var i=t(82292),l=e([i]);i=(l.then?(await l)():l)[0],o()}catch(e){o(e)}}))},62513:function(){}}]);