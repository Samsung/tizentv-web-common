!function(e,t){for(var o in t)e[o]=t[o]}(this,function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=21)}({21:function(e,t,o){e.exports=o(6)},6:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Display3DModeState=t.Display3DEffectMode=t.getSupported3DEffectModeList=t.is3DModeEnabled=t.get3DEffectMode=void 0;const{tvdisplaycontrol:n}=window.tizen;t.get3DEffectMode=n.get3DEffectMode,t.is3DModeEnabled=n.is3DModeEnabled,t.getSupported3DEffectModeList=n.getSupported3DEffectModeList,function(e){e.OFF="OFF",e.TOP_BOTTOM="TOP_BOTTOM",e.SIDE_BY_SIDE="SIDE_BY_SIDE",e.LINE_BY_LINE="LINE_BY_LINE",e.VERTICAL_STRIPE="VERTICAL_STRIPE",e.FRAME_SEQUENCE="FRAME_SEQUENCE",e.CHECKER_BD="CHECKER_BD",e.FROM_2D_TO_3D="FROM_2D_TO_3D"}(t.Display3DEffectMode||(t.Display3DEffectMode={})),function(e){e.NOT_CONNECTED="NOT_CONNECTED",e.NOT_SUPPORTED="NOT_SUPPORTED",e.READY="READY"}(t.Display3DModeState||(t.Display3DModeState={}))}}));