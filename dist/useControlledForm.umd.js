!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],n):n((e||self).useControlledForm={},e.react)}(this,function(e,n){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},r.apply(null,arguments)}e.useControlledForm=function(e){var t=function(){return Object.keys(e).reduce(function(e,n){return e[n]="",e},{})},u=n.useState(e),o=u[0],c=u[1],f=n.useState(function(){return t()}),i=f[0],a=f[1],s=n.useRef(!1),l=function(){a(t()),s.current=!1};return r({},o,{form:r({},Object.keys(o).reduce(function(e,n){return e[n]={id:n,value:o[n],error:i[n]||""},e},{}),{reset:function(){c(e),l()},clearErrors:l,hasErrors:function(){return s.current}}),onInputChange:function(e){var n=e.target,t=n.name,u=n.value,o=n.type,f=n.checked;c(function(e){var n;return r({},e,((n={})[t]="checkbox"===o?f:u,n))})},attachInputError:function(e,n){s.current=s.current||""!==n,a(function(r){var t=r||{};return t[e]=n,t})}})}});
//# sourceMappingURL=useControlledForm.umd.js.map
