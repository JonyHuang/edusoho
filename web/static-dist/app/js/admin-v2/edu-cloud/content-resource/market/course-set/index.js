!function(l){function t(t){for(var e,r,n=t[0],o=t[1],a=t[2],s=0,i=[];s<n.length;s++)r=n[s],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&i.push(u[r][0]),u[r]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(l[e]=o[e]);for(p&&p(t);i.length;)i.shift()();return f.push.apply(f,a||[]),c()}function c(){for(var t,e=0;e<f.length;e++){for(var r=f[e],n=!0,o=1;o<r.length;o++){var a=r[o];0!==u[a]&&(n=!1)}n&&(f.splice(e--,1),t=s(s.s=r[0]))}return t}var r={},u={54:0},f=[];function s(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return l[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=l,s.c=r,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],n=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var p=n;f.push([491,0]),c()}({17:function(t,e){t.exports=jQuery},491:function(t,e,r){"use strict";r.r(e);var n=r(4);$('ul[role="tablist"]').on("click",'li[role="presentation"]',function(){$('li[role="presentation"]').attr("class",""),$(this).attr("class","active"),$(".es-piece").attr("style","display: none; visibility: hidden; ");var t=$(this).attr("id");$('div[data-label="'+t+'"]').attr("style","")}),$("#js-course-select-btn").on("click",function(t){var e=$(this);e.attr("disabled","true"),e.text("处理中..."),$.post($(this).data("chooseUrl"),{courseSetData:$(this).data("courseSet")},function(t){if("repeat"===t.status)Object(n.a)("danger",Translator.trans("已选择过该课程"));else{if("success"!==t.status)return void Object(n.a)("danger",Translator.trans("意外错误，操作失败，请联系管理员处理！"));Object(n.a)("success","已选择，请到“课程管理”查看并进行营销配置")}e.attr("disabled","true"),e.attr("style","width: 130px; background-color: #CCCCCC; border-color: #CCCCCC"),e.text("已选择")}).error(function(){e.text("选择"),e.attr("disabled",!1),Object(n.a)("danger",Translator.trans("网络波动，请重试！"))})})}});