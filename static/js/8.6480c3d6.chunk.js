"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[8],{3008:function(n,e,t){t.r(e),t.d(e,{default:function(){return en}});var r,o,i,a,c,u,l=t(9434),s=t(168),p=t(5867),d=p.ZP.div(r||(r=(0,s.Z)(["\nborder: none;\nborder-radius: 5px;\nbackground-color: #f2f2f2;\npadding: 20px;\nbox-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n"]))),f=p.ZP.form(o||(o=(0,s.Z)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\ngap: 10px;\n"]))),x=p.ZP.span(i||(i=(0,s.Z)(["\nfont-size: 20px;\nfont-weight: 500;\ntext-align: center;\nmargin-bottom: 5px;\n"]))),h=p.ZP.label(a||(a=(0,s.Z)(["\ndisplay: flex;\n  flex-direction: column;\n"]))),m=p.ZP.input(c||(c=(0,s.Z)(["\n  max-width: 100%;\n  min-width: 300px;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-sizing: border-box;\n"]))),g=p.ZP.button(u||(u=(0,s.Z)(["\npadding: 10px 20px;\nborder: none;\nborder-radius: 5px;\ncursor: pointer;\ncolor: white;\nfont-weight: 500;\nbackground-color: #1560bd;\ntransition: transform 250ms cubic-bezier(0.56, 0.57, 0.76, 0.76);\n\n&:hover{\n    background-color: #7B68EE;\n    transform: scale(1.1);\n}\n"]))),b="NOT_FOUND";var v=function(n,e){return n===e};function y(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?v:r,i=t.maxSize,a=void 0===i?1:i,c=t.resultEqualityCheck,u=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),l=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:b},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(u):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return b}return{get:r,put:function(e,o){r(e)===b&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,u);function s(){var e=l.get(arguments);if(e===b){if(e=n.apply(null,arguments),c){var t=l.getEntries(),r=t.find((function(n){return c(n.value,e)}));r&&(e=r.value)}l.put(arguments,e)}return e}return s.clearCache=function(){return l.clear()},s}function Z(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function j(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,a=0,c={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(c=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=c,s=l.memoizeOptions,p=void 0===s?t:s,d=Array.isArray(p)?p:[p],f=Z(r),x=n.apply(void 0,[function(){return a++,u.apply(null,arguments)}].concat(d)),h=n((function(){for(var n=[],e=f.length,t=0;t<e;t++)n.push(f[t].apply(null,arguments));return i=x.apply(null,n)}));return Object.assign(h,{resultFunc:u,memoizedResultFunc:x,dependencies:f,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),h};return o}var w,k,P,C,z=j(y),A=function(n){return n.contacts.items},F=function(n){return n.filter.filter},E=function(n){return n.contacts.isLoading},N=function(n){return n.contacts.error},_=z([A,F],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})),S=t(3871),q=t(184);function O(){var n=(0,l.v9)(A),e=(0,l.I0)();return(0,q.jsx)(d,{children:(0,q.jsxs)(f,{onSubmit:function(t){t.preventDefault();var r=t.currentTarget.elements,o=r.contactName.value,i=r.contactNumber.value;n.some((function(n){return n.name.toLowerCase()===o.toLowerCase()}))?alert("".concat(o," is alredy in contacts")):e((0,S.uK)({name:o,number:i})),t.currentTarget.reset()},children:[(0,q.jsxs)(h,{children:[(0,q.jsx)(x,{children:"Name"}),(0,q.jsx)(m,{type:"text",name:"contactName",placeholder:"Contact name...",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,q.jsxs)(h,{children:[(0,q.jsx)(x,{children:"Number"}),(0,q.jsx)(m,{type:"tel",name:"contactNumber",placeholder:"Contact number...",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,q.jsx)(g,{type:"submit",children:"Add contact"})]})})}var D,I,L,T,B,R=p.ZP.ul(w||(w=(0,s.Z)(["\nlist-style: none;\nmargin: 0 auto;\npadding: 0;\n"]))),K=p.ZP.li(k||(k=(0,s.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmargin: 0 auto;\ngap: 20px;\npadding-top: 8px;\npadding-bottom: 8px;\n"]))),G=p.ZP.p(P||(P=(0,s.Z)(["\nmargin: 0;\npadding: 0;\nfont-weight: 500;\n"]))),J=p.ZP.button(C||(C=(0,s.Z)(["\nborder: none ;\nborder-radius: 5px;\npadding: 8px 12px;\nfont-size: 14px;\nfont-weight: 500;\ncolor: #FF0800;\nbackground-color: transparent;\ncursor: pointer;\ntransition: 0.3s;\n\n&:hover{\n    color: white;\n    background-color:#FF0800 ;\n}\n"]))),M=t(2791),U=function(){var n=(0,l.v9)(_),e=(0,l.I0)(),t=(0,l.v9)((function(n){return n.user.userData}));return(0,M.useEffect)((function(){t&&e((0,S.yF)())}),[e,t]),(0,q.jsx)(R,{children:n.map((function(n){var t=n.id,r=n.phone,o=n.name;return(0,q.jsxs)(K,{children:[(0,q.jsxs)(G,{children:[o,": ",r]}),(0,q.jsx)(J,{type:"button",name:"delete",onClick:function(){e((0,S.GK)(t))},children:"Delete"})]},t)}))})},$=p.ZP.div(D||(D=(0,s.Z)(["\nmax-width: 400px;\nmin-width: 300px;\nmargin-top: 25px;\nmargin-bottom: 25px;\nmargin-left: auto;\nmargin-right: auto;\n"]))),H=t(1441),Q=p.ZP.div(I||(I=(0,s.Z)(["\nborder: none;\nborder-radius: 5px;\nbackground-color: #f2f2f2;\npadding: 20px;\nbox-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n"]))),V=p.ZP.label(L||(L=(0,s.Z)(["\ndisplay: flex;\n  flex-direction: column;\n"]))),W=p.ZP.span(T||(T=(0,s.Z)(["\nfont-style: italic;\nfont-size: 20px;\nfont-weight: 500;\ntext-align: center;\nmargin-bottom: 5px;\n"]))),X=p.ZP.input(B||(B=(0,s.Z)(["\n  max-width: 100%;\n  min-width: 300px;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-sizing: border-box;\n"]))),Y=t(9844),nn=function(){var n=(0,l.I0)(),e=(0,l.v9)(F);return(0,q.jsx)(Q,{children:(0,q.jsxs)(V,{children:[(0,q.jsx)(W,{children:"Find contacts by name"}),(0,q.jsx)(X,{type:"text",name:"Search Bar",placeholder:"Search contact...",value:e,onChange:function(e){n((0,Y.T)(e.target.value))}})]})})},en=function(){var n=(0,l.v9)(E),e=(0,l.v9)(N);return(0,q.jsxs)($,{children:[(0,q.jsx)("h1",{children:"Phonebook"}),(0,q.jsx)(O,{}),(0,q.jsx)("h2",{children:"Contacts"}),n&&!e&&(0,q.jsx)(H.Z,{}),(0,q.jsx)(nn,{}),e&&e,(0,q.jsx)(U,{})]})}}}]);
//# sourceMappingURL=8.6480c3d6.chunk.js.map