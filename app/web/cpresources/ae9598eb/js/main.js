!function(e){function n(n){for(var s,l,c=n[0],i=n[1],a=n[2],d=0,f=[];d<c.length;d++)l=c[d],o[l]&&f.push(o[l][0]),o[l]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);for(u&&u(n);f.length;)f.shift()();return r.push.apply(r,a||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],s=!0,c=1;c<t.length;c++){var i=t[c];0!==o[i]&&(s=!1)}s&&(r.splice(n--,1),e=l(l.s=t[0]))}return e}var s={},o={main:0},r=[];function l(n){if(s[n])return s[n].exports;var t=s[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=s,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)l.d(t,s,function(n){return e[n]}.bind(null,s));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=n,c=c.slice();for(var a=0;a<c.length;a++)n(c[a]);var u=i;r.push([0,"vendor"]),t()}({"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./resources/scss/field.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js!./resources/scss/field.scss ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,n,t){},"./resources/js/RelatedEntryTypesField.ts":
/*!************************************************!*\
  !*** ./resources/js/RelatedEntryTypesField.ts ***!
  \************************************************/
/*! exports provided: default */function(e,n,t){"use strict";t.r(n);var s=t(/*! ./components/ChannelGroup */"./resources/js/components/ChannelGroup.ts"),o=function(){return function(){this.fieldContainer=document.querySelector("#types-unionco-relatedentrytypes-fields-RelatedEntryType-sources-field");var e=document.querySelector("[data-related-entry-types-channels]");e&&(this.channelGroup=new s.default(e)),this.fieldContainer.addEventListener("channelChange",function(e){console.log(e.detail)}),console.log(this)}}();n.default=o,new o},"./resources/js/components/Channel.ts":
/*!********************************************!*\
  !*** ./resources/js/components/Channel.ts ***!
  \********************************************/
/*! exports provided: default */function(e,n,t){"use strict";t.r(n);var s=function(){function e(e){this.checkbox=e,this.name=this.checkbox.value;var n=document.querySelector('label[for="'+this.checkbox.id+'"]');console.log(n),n&&(this.label=n.innerText),console.log(this),this.checkboxChangeHandler=this.checkboxChangeHandler.bind(this),this.checkbox.addEventListener("change",this.checkboxChangeHandler)}return e.prototype.checkboxChangeHandler=function(e){var n=new CustomEvent("channelChange",{detail:{channel:{name:this.name,label:this.label,id:this.id}}});return this.checkbox.dispatchEvent(n)},e}();n.default=s},"./resources/js/components/ChannelGroup.ts":
/*!*************************************************!*\
  !*** ./resources/js/components/ChannelGroup.ts ***!
  \*************************************************/
/*! exports provided: default */function(e,n,t){"use strict";t.r(n);var s=t(/*! ./Channel */"./resources/js/components/Channel.ts"),o=function(){function e(e){this.node=e;var n=e.querySelectorAll('input[type="checkbox"]');this.channels=Array.from(n).map(function(e){return new s.default(e)}),console.log(this)}return e.prototype.getChannels=function(){return[]},e}();n.default=o},"./resources/scss/field.scss":
/*!***********************************!*\
  !*** ./resources/scss/field.scss ***!
  \***********************************/
/*! no static exports found */function(e,n,t){var s=t(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js!./field.scss */"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./resources/scss/field.scss");"string"==typeof s&&(s=[[e.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(/*! ../../node_modules/style-loader/lib/addStyles.js */"./node_modules/style-loader/lib/addStyles.js")(s,o);s.locals&&(e.exports=s.locals)},0:
/*!**********************************************************************************!*\
  !*** multi ./resources/js/RelatedEntryTypesField.ts ./resources/scss/field.scss ***!
  \**********************************************************************************/
/*! no static exports found */function(e,n,t){t(/*! /Users/abryrath/Union/Library/relatedentrytypes/resources/js/RelatedEntryTypesField.ts */"./resources/js/RelatedEntryTypesField.ts"),e.exports=t(/*! /Users/abryrath/Union/Library/relatedentrytypes/resources/scss/field.scss */"./resources/scss/field.scss")}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL1JlbGF0ZWRFbnRyeVR5cGVzRmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ2hhbm5lbC50cyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9DaGFubmVsR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Njc3MvZmllbGQuc2NzcyJdLCJuYW1lcyI6WyJ3ZWJwYWNrSnNvbnBDYWxsYmFjayIsImRhdGEiLCJtb2R1bGVJZCIsImNodW5rSWQiLCJjaHVua0lkcyIsIm1vcmVNb2R1bGVzIiwiZXhlY3V0ZU1vZHVsZXMiLCJpIiwicmVzb2x2ZXMiLCJsZW5ndGgiLCJpbnN0YWxsZWRDaHVua3MiLCJwdXNoIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibW9kdWxlcyIsInBhcmVudEpzb25wRnVuY3Rpb24iLCJzaGlmdCIsImRlZmVycmVkTW9kdWxlcyIsImFwcGx5IiwiY2hlY2tEZWZlcnJlZE1vZHVsZXMiLCJyZXN1bHQiLCJkZWZlcnJlZE1vZHVsZSIsImZ1bGZpbGxlZCIsImoiLCJkZXBJZCIsInNwbGljZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIm1haW4iLCJleHBvcnRzIiwibW9kdWxlIiwibCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwIiwianNvbnBBcnJheSIsIndpbmRvdyIsIm9sZEpzb25wRnVuY3Rpb24iLCJzbGljZSIsIl9fd2VicGFja19leHBvcnRzX18iLCJfY29tcG9uZW50c19DaGFubmVsR3JvdXBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsIlJlbGF0ZWRFbnRyeVR5cGVzRmllbGQiLCJ0aGlzIiwiZmllbGRDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGFubmVsR3JvdXBDb250YWluZXIiLCJjaGFubmVsR3JvdXAiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJDaGFubmVsIiwibm9kZSIsImNoZWNrYm94IiwibGFiZWwiLCJpZCIsImlubmVyVGV4dCIsImNoZWNrYm94Q2hhbmdlSGFuZGxlciIsImNoYW5nZUV2ZW50IiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImNoYW5uZWwiLCJkaXNwYXRjaEV2ZW50IiwiX0NoYW5uZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsIkNoYW5uZWxHcm91cCIsImNoZWNrYm94ZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hhbm5lbHMiLCJBcnJheSIsImZyb20iLCJtYXAiLCJnZXRDaGFubmVscyIsImNvbnRlbnQiLCJvcHRpb25zIiwiaG1yIiwidHJhbnNmb3JtIiwiaW5zZXJ0SW50byIsInVuZGVmaW5lZCIsImxvY2FscyJdLCJtYXBwaW5ncyI6ImFBQ0EsU0FBQUEsRUFBQUMsR0FRQSxJQVBBLElBTUFDLEVBQUFDLEVBTkFDLEVBQUFILEVBQUEsR0FDQUksRUFBQUosRUFBQSxHQUNBSyxFQUFBTCxFQUFBLEdBSUFNLEVBQUEsRUFBQUMsRUFBQSxHQUNRRCxFQUFBSCxFQUFBSyxPQUFvQkYsSUFDNUJKLEVBQUFDLEVBQUFHLEdBQ0FHLEVBQUFQLElBQ0FLLEVBQUFHLEtBQUFELEVBQUFQLEdBQUEsSUFFQU8sRUFBQVAsR0FBQSxFQUVBLElBQUFELEtBQUFHLEVBQ0FPLE9BQUFDLFVBQUFDLGVBQUFDLEtBQUFWLEVBQUFILEtBQ0FjLEVBQUFkLEdBQUFHLEVBQUFILElBS0EsSUFGQWUsS0FBQWhCLEdBRUFPLEVBQUFDLFFBQ0FELEVBQUFVLE9BQUFWLEdBT0EsT0FIQVcsRUFBQVIsS0FBQVMsTUFBQUQsRUFBQWIsR0FBQSxJQUdBZSxJQUVBLFNBQUFBLElBRUEsSUFEQSxJQUFBQyxFQUNBZixFQUFBLEVBQWlCQSxFQUFBWSxFQUFBVixPQUE0QkYsSUFBQSxDQUc3QyxJQUZBLElBQUFnQixFQUFBSixFQUFBWixHQUNBaUIsR0FBQSxFQUNBQyxFQUFBLEVBQWtCQSxFQUFBRixFQUFBZCxPQUEyQmdCLElBQUEsQ0FDN0MsSUFBQUMsRUFBQUgsRUFBQUUsR0FDQSxJQUFBZixFQUFBZ0IsS0FBQUYsR0FBQSxHQUVBQSxJQUNBTCxFQUFBUSxPQUFBcEIsSUFBQSxHQUNBZSxFQUFBTSxJQUFBQyxFQUFBTixFQUFBLEtBR0EsT0FBQUQsRUFJQSxJQUFBUSxFQUFBLEdBS0FwQixFQUFBLENBQ0FxQixLQUFBLEdBR0FaLEVBQUEsR0FHQSxTQUFBUyxFQUFBMUIsR0FHQSxHQUFBNEIsRUFBQTVCLEdBQ0EsT0FBQTRCLEVBQUE1QixHQUFBOEIsUUFHQSxJQUFBQyxFQUFBSCxFQUFBNUIsR0FBQSxDQUNBSyxFQUFBTCxFQUNBZ0MsR0FBQSxFQUNBRixRQUFBLElBVUEsT0FOQWhCLEVBQUFkLEdBQUFhLEtBQUFrQixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBSixHQUdBSyxFQUFBQyxHQUFBLEVBR0FELEVBQUFELFFBS0FKLEVBQUFPLEVBQUFuQixFQUdBWSxFQUFBUSxFQUFBTixFQUdBRixFQUFBUyxFQUFBLFNBQUFMLEVBQUFNLEVBQUFDLEdBQ0FYLEVBQUFZLEVBQUFSLEVBQUFNLElBQ0ExQixPQUFBNkIsZUFBQVQsRUFBQU0sRUFBQSxDQUEwQ0ksWUFBQSxFQUFBQyxJQUFBSixLQUsxQ1gsRUFBQWdCLEVBQUEsU0FBQVosR0FDQSxvQkFBQWEsZUFBQUMsYUFDQWxDLE9BQUE2QixlQUFBVCxFQUFBYSxPQUFBQyxZQUFBLENBQXdEQyxNQUFBLFdBRXhEbkMsT0FBQTZCLGVBQUFULEVBQUEsY0FBaURlLE9BQUEsS0FRakRuQixFQUFBb0IsRUFBQSxTQUFBRCxFQUFBRSxHQUVBLEdBREEsRUFBQUEsSUFBQUYsRUFBQW5CLEVBQUFtQixJQUNBLEVBQUFFLEVBQUEsT0FBQUYsRUFDQSxLQUFBRSxHQUFBLGlCQUFBRixRQUFBRyxXQUFBLE9BQUFILEVBQ0EsSUFBQUksRUFBQXZDLE9BQUF3QyxPQUFBLE1BR0EsR0FGQXhCLEVBQUFnQixFQUFBTyxHQUNBdkMsT0FBQTZCLGVBQUFVLEVBQUEsV0FBeUNULFlBQUEsRUFBQUssVUFDekMsRUFBQUUsR0FBQSxpQkFBQUYsRUFBQSxRQUFBTSxLQUFBTixFQUFBbkIsRUFBQVMsRUFBQWMsRUFBQUUsRUFBQSxTQUFBQSxHQUFnSCxPQUFBTixFQUFBTSxJQUFxQkMsS0FBQSxLQUFBRCxJQUNySSxPQUFBRixHQUlBdkIsRUFBQTJCLEVBQUEsU0FBQXRCLEdBQ0EsSUFBQU0sRUFBQU4sS0FBQWlCLFdBQ0EsV0FBMkIsT0FBQWpCLEVBQUEsU0FDM0IsV0FBaUMsT0FBQUEsR0FFakMsT0FEQUwsRUFBQVMsRUFBQUUsRUFBQSxJQUFBQSxHQUNBQSxHQUlBWCxFQUFBWSxFQUFBLFNBQUFnQixFQUFBQyxHQUFzRCxPQUFBN0MsT0FBQUMsVUFBQUMsZUFBQUMsS0FBQXlDLEVBQUFDLElBR3REN0IsRUFBQThCLEVBQUEsR0FFQSxJQUFBQyxFQUFBQyxPQUFBLGFBQUFBLE9BQUEsaUJBQ0FDLEVBQUFGLEVBQUFoRCxLQUFBMkMsS0FBQUssR0FDQUEsRUFBQWhELEtBQUFYLEVBQ0EyRCxJQUFBRyxRQUNBLFFBQUF2RCxFQUFBLEVBQWdCQSxFQUFBb0QsRUFBQWxELE9BQXVCRixJQUFBUCxFQUFBMkQsRUFBQXBELElBQ3ZDLElBQUFVLEVBQUE0QyxFQUlBMUMsRUFBQVIsS0FBQSxjQUVBVTs7Ozs7Ozs7NkRDckpBTyxFQUFBZ0IsRUFBQW1CLEdBQUEsSUFBQUMsRUFBQXBDLGtDQUFBLDZDQUVBcUMsRUFBQSxXQWdCQSxPQVpJLFdBQ0lDLEtBQUtDLGVBQWlCQyxTQUFTQyxjQUFjLDBFQUM3QyxJQUFNQyxFQUF3Q0YsU0FBU0MsY0FBYyx1Q0FDakVDLElBQ0FKLEtBQUtLLGFBQWUsSUFBSVAsRUFBQSxRQUFhTSxJQUV6Q0osS0FBS0MsZUFBZUssaUJBQWlCLGdCQUFpQixTQUFDQyxHQUNuREMsUUFBUUMsSUFBSUYsRUFBRUcsVUFHbEJGLFFBQVFDLElBQUlULE9BZHBCLGVBa0JBLElBQUlEOzs7OzZEQ25CSnJDLEVBQUFnQixFQUFBbUIsR0FBQSxJQUFBYyxFQUFBLFdBTUksU0FBQUEsRUFBWUMsR0FDUlosS0FBS2EsU0FBV0QsRUFDaEJaLEtBQUs1QixLQUFPNEIsS0FBS2EsU0FBU2hDLE1BQzFCLElBQU1pQyxFQUEwQlosU0FBU0MsY0FBYyxjQUFjSCxLQUFLYSxTQUFTRSxHQUFFLE1BQ3JGUCxRQUFRQyxJQUFJSyxHQUNSQSxJQUNBZCxLQUFLYyxNQUFRQSxFQUFNRSxXQUV2QlIsUUFBUUMsSUFBSVQsTUFFWkEsS0FBS2lCLHNCQUF3QmpCLEtBQUtpQixzQkFBc0I3QixLQUFLWSxNQUM3REEsS0FBS2EsU0FBU1AsaUJBQWlCLFNBQVVOLEtBQUtpQix1QkFnQnRELE9BYklOLEVBQUFoRSxVQUFBc0Usc0JBQUEsU0FBc0JDLEdBQ2xCLElBQU1DLEVBQVEsSUFBSUMsWUFBWSxnQkFBaUIsQ0FDM0NWLE9BQVEsQ0FDSlcsUUFBUyxDQUNMakQsS0FBTTRCLEtBQUs1QixLQUNYMEMsTUFBT2QsS0FBS2MsTUFDWkMsR0FBSWYsS0FBS2UsT0FLckIsT0FBT2YsS0FBS2EsU0FBU1MsY0FBY0gsSUFFM0NSLEVBakNBOzs7OzZEQ0FBakQsRUFBQWdCLEVBQUFtQixHQUFBLElBQUEwQixFQUFBN0Qsa0JBQUEsd0NBRUE4RCxFQUFBLFdBSUksU0FBQUEsRUFBWVosR0FDUlosS0FBS1ksS0FBT0EsRUFDWixJQUFNYSxFQUEyQ2IsRUFBS2MsaUJBQWlCLDBCQUN2RTFCLEtBQUsyQixTQUFXQyxNQUFNQyxLQUFLSixHQUFZSyxJQUFJLFNBQUNqQixHQUErQixXQUFJVSxFQUFBLFFBQVFWLEtBQ3ZGTCxRQUFRQyxJQUFJVCxNQU1wQixPQUhXd0IsRUFBQTdFLFVBQUFvRixZQUFQLFdBQ0ksTUFBTyxJQUVmUCxFQWRBOzs7OzhDQ0hBLElBQUFRLEVBQWN0RSwyTUFBUSw2TUFFdEIsaUJBQUFzRSxNQUFBLEVBQTRDakUsRUFBQTFCLEVBQVMyRixFQUFBLE1BT3JELElBQUFDLEVBQUEsQ0FBZUMsS0FBQSxFQUVmQyxlQVBBQSxFQVFBQyxnQkFBQUMsR0FFYTNFLHlEQUFRLCtDQUFSQSxDQUEyRHNFLEVBQUFDLEdBRXhFRCxFQUFBTSxTQUFBdkUsRUFBQUQsUUFBQWtFLEVBQUFNIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBJQ2hhbm5lbEdyb3VwIGZyb20gJy4vaW50ZXJmYWNlcy9JQ2hhbm5lbEdyb3VwJztcbmltcG9ydCBDaGFubmVsR3JvdXAgZnJvbSAnLi9jb21wb25lbnRzL0NoYW5uZWxHcm91cCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGF0ZWRFbnRyeVR5cGVzRmllbGQge1xuICAgIHB1YmxpYyBjaGFubmVsR3JvdXA6IElDaGFubmVsR3JvdXA7XG4gICAgcHVibGljIGZpZWxkQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGVzLXVuaW9uY28tcmVsYXRlZGVudHJ5dHlwZXMtZmllbGRzLVJlbGF0ZWRFbnRyeVR5cGUtc291cmNlcy1maWVsZCcpO1xuICAgICAgICBjb25zdCBjaGFubmVsR3JvdXBDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcmVsYXRlZC1lbnRyeS10eXBlcy1jaGFubmVsc10nKTtcbiAgICAgICAgaWYgKGNoYW5uZWxHcm91cENvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsR3JvdXAgPSBuZXcgQ2hhbm5lbEdyb3VwKGNoYW5uZWxHcm91cENvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWVsZENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFubmVsQ2hhbmdlJywgKGU6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLmRldGFpbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIH1cbn0gXG5cbm5ldyBSZWxhdGVkRW50cnlUeXBlc0ZpZWxkKCk7XG5cbi8vIGNvbnN0IGFqYXhPcHRzID0ge1xuLy8gICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuLy8gICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxuLy8gICAgIH1cbi8vIH07XG5cbi8vIGNsYXNzIEVudHJ5VHlwZSB7XG4vLyAgICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgICAgIHRoaXMuZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZXMtdW5pb25jby1yZWxhdGVkZW50cnl0eXBlcy1maWVsZHMtRW50cnlUeXBlLXNvdXJjZXMtZmllbGQnKTtcbi8vICAgICAgICAgaWYgKHRoaXMuZmllbGRDb250YWluZXIpIHtcbi8vICAgICAgICAgICAgIHRoaXMuc2VjdGlvbkNoZWNrYm94ZXMgPSB0aGlzLmZpZWxkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWN0aW9uQ2hlY2tib3hlcyk7XG4vLyAgICAgICAgICAgICBpZiAodGhpcy5zZWN0aW9uQ2hlY2tib3hlcykge1xuLy8gICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbkNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZVNvdXJjZXNDaGFuZ2UuYmluZCh0aGlzKSkpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgdGhpcy5lbnRyeVR5cGVzU2VsZWN0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVudHJ5LXR5cGVzLXNlbGVjdC1hcmVhXScpO1xuLy8gICAgICAgICB0aGlzLmdldFNlbGVjdGVkU2VjdGlvbnMgPSB0aGlzLmdldFNlbGVjdGVkU2VjdGlvbnMuYmluZCh0aGlzKTtcbi8vICAgICB9XG5cbi8vICAgICBnZXRTZWxlY3RlZFNlY3Rpb25zKCkge1xuLy8gICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHRoaXMuc2VjdGlvbkNoZWNrYm94ZXMsIGNoZWNrYm94ID0+IHtcbi8vICAgICAgICAgICAgIC8vY29uc29sZS5sb2coY2hlY2tib3gpO1xuLy8gICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94LmNoZWNrZWQgfHwgZmFsc2U7XG4vLyAgICAgICAgIH0pLm1hcChjaGVja2JveCA9PiB7XG4vLyAgICAgICAgICAgICByZXR1cm4gY2hlY2tib3gudmFsdWU7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH1cblxuLy8gICAgIGdldFNlbGVjdGVkRW50cnlUeXBlcygpIHtcbi8vICAgICAgICAgY29uc3QgZW50cnlUeXBlc1NlY3Rpb24gPSB0aGlzLmVudHJ5VHlwZXNTZWxlY3RBcmVhLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuLy8gICAgICAgICBpZiAoZW50cnlUeXBlc1NlY3Rpb24pIHtcbi8vICAgICAgICAgICAgIGNvbnN0IGVudHJ5VHlwZUNoZWNrYm94ZXMgPSBlbnRyeVR5cGVzU2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVudHJ5VHlwZUNoZWNrYm94ZXMpO1xuLy8gICAgICAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlbnRyeVR5cGVDaGVja2JveGVzLCBjaGVja2JveCA9PiB7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94LmNoZWNrZWQ7XG4vLyAgICAgICAgICAgICB9KS5tYXAoY2hlY2tib3ggPT4ge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiBjaGVja2JveC52YWx1ZTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgcmV0dXJuIG51bGw7XG4vLyAgICAgfVxuXG4vLyAgICAgaGFuZGxlU291cmNlc0NoYW5nZShlKSB7XG4vLyAgICAgICAgIGNvbnN0IHNlbGVjdGVkU2VjdGlvbnMgPSB0aGlzLmdldFNlbGVjdGVkU2VjdGlvbnMoKTtcbi8vICAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbnRyeVR5cGVzID0gdGhpcy5nZXRTZWxlY3RlZEVudHJ5VHlwZXMoKTtcblxuLy8gICAgICAgICBpZiAoc2VsZWN0ZWRTZWN0aW9ucy5sZW5ndGggPCAxKSB7XG4vLyAgICAgICAgICAgICB0aGlzLmVudHJ5VHlwZXNTZWxlY3RBcmVhLmlubmVySFRNTCA9ICcnO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIEFwaUNsaWVudC5nZXRUZW1wbGF0ZShzZWxlY3RlZFNlY3Rpb25zLCBzZWxlY3RlZEVudHJ5VHlwZXMpXG4vLyAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbi8vICAgICAgICAgICAgICAgICB0aGlzLmVudHJ5VHlwZXNTZWxlY3RBcmVhLmlubmVySFRNTCA9IGRhdGE7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICB9XG4vLyB9XG5cbi8vIGNsYXNzIEFwaUNsaWVudCB7XG4vLyAgICAgc3RhdGljIGdldFRlbXBsYXRlKHNlY3Rpb25VaWRzLCBlbnRyeVR5cGVzKSB7XG4vLyAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4vLyAgICAgICAgICAgICBsZXQgb3B0cyA9IHtcbi8vICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbi8vICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0Jyxcbi8vICAgICAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuLy8gICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbi8vICAgICAgICAgICAgICAgICAgICAgXCJzZWN0aW9uVWlkc1wiOiBzZWN0aW9uVWlkcyxcbi8vICAgICAgICAgICAgICAgICAgICAgXCJlbnRyeVR5cGVzXCI6IGVudHJ5VHlwZXNcbi8vICAgICAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgfTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wdHMpO1xuLy8gICAgICAgICAgICAgZmV0Y2goJy9hZG1pbi9yZWxhdGVkLWVudHJ5LXR5cGVzL3R5cGVzJywgb3B0cylcbi8vICAgICAgICAgICAgICAgICAudGhlbihyZXNwID0+IHJlc3AudGV4dCgpKVxuLy8gICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gcmVzb2x2ZShkYXRhKSk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gKGZ1bmN0aW9uICgkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuLy8gICAgIHZhciBwbHVnaW5OYW1lID0gXCJSZWxhdGVkRW50cnlUeXBlc1wiLFxuLy8gICAgICAgICBkZWZhdWx0cyA9IHt9O1xuXG4vLyAgICAgLy8gUGx1Z2luIGNvbnN0cnVjdG9yXG4vLyAgICAgZnVuY3Rpb24gUGx1Z2luKGVsZW1lbnQsIG9wdGlvbnMpIHtcbi8vICAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuLy8gICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4vLyAgICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG4vLyAgICAgICAgIHRoaXMuX25hbWUgPSBwbHVnaW5OYW1lO1xuXG4vLyAgICAgICAgIHRoaXMuaW5pdCgpO1xuLy8gICAgIH1cblxuLy8gICAgIFBsdWdpbi5wcm90b3R5cGUgPSB7XG5cbi8vICAgICAgICAgaW5pdDogZnVuY3Rpb24gKGlkKSB7XG4vLyAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4vLyAgICAgICAgICAgICAkKGZ1bmN0aW9uICgpIHtcblxuLy8gICAgICAgICAgICAgICAgIC8qIC0tIF90aGlzLm9wdGlvbnMgZ2l2ZXMgdXMgYWNjZXNzIHRvIHRoZSAkanNvblZhcnMgdGhhdCBvdXIgRmllbGRUeXBlIHBhc3NlZCBkb3duIHRvIHVzICovXG5cbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4vLyAgICAgfTtcblxuLy8gICAgIC8vIEEgcmVhbGx5IGxpZ2h0d2VpZ2h0IHBsdWdpbiB3cmFwcGVyIGFyb3VuZCB0aGUgY29uc3RydWN0b3IsXG4vLyAgICAgLy8gcHJldmVudGluZyBhZ2FpbnN0IG11bHRpcGxlIGluc3RhbnRpYXRpb25zXG4vLyAgICAgJC5mbltwbHVnaW5OYW1lXSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4vLyAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICAgICAgaWYgKCEkLmRhdGEodGhpcywgXCJwbHVnaW5fXCIgKyBwbHVnaW5OYW1lKSkge1xuLy8gICAgICAgICAgICAgICAgICQuZGF0YSh0aGlzLCBcInBsdWdpbl9cIiArIHBsdWdpbk5hbWUsXG4vLyAgICAgICAgICAgICAgICAgICAgIG5ldyBQbHVnaW4odGhpcywgb3B0aW9ucykpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KTtcbi8vICAgICB9O1xuXG4vLyB9KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vLyB3aW5kb3cuUmVsYXRlZEVudHJ5VHlwZXNGaWVsZCA9IFJlbGF0ZWRFbnRyeVR5cGVzRmllbGQ7IiwiaW1wb3J0IElDaGFubmVsIGZyb20gXCIuLi9pbnRlcmZhY2VzL0lDaGFubmVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5uZWwgaW1wbGVtZW50cyBJQ2hhbm5lbCB7XG4gICAgcHJpdmF0ZSBjaGVja2JveDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3Iobm9kZTogSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICB0aGlzLmNoZWNrYm94ID0gbm9kZTtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5jaGVja2JveC52YWx1ZTtcbiAgICAgICAgY29uc3QgbGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke3RoaXMuY2hlY2tib3guaWR9XCJdYCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGxhYmVsKTtcbiAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWwuaW5uZXJUZXh0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2hlY2tib3hDaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGVja2JveENoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoZWNrYm94Q2hhbmdlSGFuZGxlcik7XG4gICAgfVxuXG4gICAgY2hlY2tib3hDaGFuZ2VIYW5kbGVyKGNoYW5nZUV2ZW50OiBFdmVudCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY2hhbm5lbENoYW5nZScsIHtcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrYm94LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cbn0iLCJpbXBvcnQgSUNoYW5uZWxHcm91cCBmcm9tICcuLi9pbnRlcmZhY2VzL0lDaGFubmVsR3JvdXAnO1xuaW1wb3J0IElDaGFubmVsIGZyb20gJy4uL2ludGVyZmFjZXMvSUNoYW5uZWwnO1xuaW1wb3J0IENoYW5uZWwgZnJvbSAnLi9DaGFubmVsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbm5lbEdyb3VwIGltcGxlbWVudHMgSUNoYW5uZWxHcm91cCB7XG4gICAgcHJpdmF0ZSBjaGFubmVsczogSUNoYW5uZWxbXTtcbiAgICBwcml2YXRlIG5vZGU6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3Iobm9kZTogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgY29uc3QgY2hlY2tib3hlczogTm9kZUxpc3RPZjxIVE1MSW5wdXRFbGVtZW50PiA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSBBcnJheS5mcm9tKGNoZWNrYm94ZXMpLm1hcCgoY2hlY2tib3g6IEhUTUxJbnB1dEVsZW1lbnQpID0+IG5ldyBDaGFubmVsKGNoZWNrYm94KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDaGFubmVscygpOiBJQ2hhbm5lbFtdIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P2VtYmVkZGVkIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZmllbGQuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P2VtYmVkZGVkIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZmllbGQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9lbWJlZGRlZCEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2ZpZWxkLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9