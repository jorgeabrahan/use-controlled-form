var r=require("react");function n(){return n=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)({}).hasOwnProperty.call(e,t)&&(r[t]=e[t])}return r},n.apply(null,arguments)}exports.useControlledForm=function(e){var t=function(){return Object.keys(e).reduce(function(r,n){return r[n]="",r},{})},u=r.useState(e),c=u[0],o=u[1],a=r.useState(function(){return t()}),i=a[0],f=a[1],s=r.useRef(!1),l=function(){f(t()),s.current=!1};return n({},c,{form:n({},Object.keys(c).reduce(function(r,n){return r[n]={id:n,value:c[n],error:i[n]||""},r},{}),{reset:function(){o(e),l()},clearErrors:l,hasErrors:function(){return s.current}}),onInputChange:function(r){var e=r.target,t=e.name,u=e.value,c=e.type,a=e.checked;o(function(r){var e;return n({},r,((e={})[t]="checkbox"===c?a:u,e))})},attachInputError:function(r,n){s.current=s.current||""!==n,f(function(e){var t=e||{};return t[r]=n,t})}})};
//# sourceMappingURL=useControlledForm.js.map
