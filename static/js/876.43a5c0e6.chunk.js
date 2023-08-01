"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[876],{876:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var r,o,a,i,c,d,s,l,p,u,x=t(9434),m=t(168),h=t(5867),b=h.ZP.div(r||(r=(0,m.Z)(["\nborder: none;\nborder-radius: 5px;\nbackground-color: #f2f2f2;\npadding: 20px;\nbox-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n"]))),f=h.ZP.form(o||(o=(0,m.Z)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\ngap: 10px;\n"]))),g=h.ZP.span(a||(a=(0,m.Z)(["\nfont-size: 20px;\nfont-weight: 500;\ntext-align: center;\nmargin-bottom: 5px;\n"]))),Z=h.ZP.label(i||(i=(0,m.Z)(["\ndisplay: flex;\n  flex-direction: column;\n"]))),j=h.ZP.input(c||(c=(0,m.Z)(["\n  max-width: 100%;\n  min-width: 300px;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-sizing: border-box;\n"]))),v=h.ZP.button(d||(d=(0,m.Z)(["\npadding: 10px 20px;\nborder: none;\nborder-radius: 5px;\ncursor: pointer;\ncolor: white;\nfont-weight: 500;\nbackground-color: #1560bd;\ntransition: transform 250ms cubic-bezier(0.56, 0.57, 0.76, 0.76);\n\n&:hover{\n    background-color: #7B68EE;\n    transform: scale(1.1);\n}\n"]))),w=t(6916),y=function(n){return n.contacts.items},P=function(n){return n.filter.filter},k=function(n){return n.contacts.isLoading},C=function(n){return n.contacts.error},z=(0,w.P1)([y,P],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})),_=t(3871),F=t(184);function N(){var n=(0,x.v9)(y),e=(0,x.I0)();return(0,F.jsx)(b,{children:(0,F.jsxs)(f,{onSubmit:function(t){t.preventDefault();var r=t.currentTarget.elements,o=r.contactName.value,a=r.contactNumber.value;n.some((function(n){return n.name.toLowerCase()===o.toLowerCase()}))?alert("".concat(o," is alredy in contacts")):e((0,_.uK)({name:o,number:a})),t.currentTarget.reset()},children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(g,{children:"Name"}),(0,F.jsx)(j,{type:"text",name:"contactName",placeholder:"Contact name...",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(g,{children:"Number"}),(0,F.jsx)(j,{type:"tel",name:"contactNumber",placeholder:"Contact number...",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,F.jsx)(v,{type:"submit",children:"Add contact"})]})})}var A,L,B,D,E,I=h.ZP.ul(s||(s=(0,m.Z)(["\nlist-style: none;\nmargin: 0 auto;\npadding: 0;\n"]))),S=h.ZP.li(l||(l=(0,m.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmargin: 0 auto;\ngap: 20px;\npadding-top: 8px;\npadding-bottom: 8px;\n"]))),T=h.ZP.p(p||(p=(0,m.Z)(["\nmargin: 0;\npadding: 0;\nfont-weight: 500;\n"]))),q=h.ZP.button(u||(u=(0,m.Z)(["\nborder: none ;\nborder-radius: 5px;\npadding: 8px 12px;\nfont-size: 14px;\nfont-weight: 500;\ncolor: #FF0800;\nbackground-color: transparent;\ncursor: pointer;\ntransition: 0.3s;\n\n&:hover{\n    color: white;\n    background-color:#FF0800 ;\n}\n"]))),K=t(2791),G=function(){var n=(0,x.v9)(z),e=(0,x.I0)(),t=(0,x.v9)((function(n){return n.user.userData}));return(0,K.useEffect)((function(){t&&e((0,_.yF)())}),[e,t]),(0,F.jsx)(I,{children:n.map((function(n){var t=n.id,r=n.phone,o=n.name;return(0,F.jsxs)(S,{children:[(0,F.jsxs)(T,{children:[o,": ",r]}),(0,F.jsx)(q,{type:"button",name:"delete",onClick:function(){e((0,_.GK)(t))},children:"Delete"})]},t)}))})},J=h.ZP.div(A||(A=(0,m.Z)(["\nmax-width: 400px;\nmin-width: 300px;\nmargin-top: 25px;\nmargin-bottom: 25px;\nmargin-left: auto;\nmargin-right: auto;\n"]))),M=t(1441),$=h.ZP.div(L||(L=(0,m.Z)(["\nborder: none;\nborder-radius: 5px;\nbackground-color: #f2f2f2;\npadding: 20px;\nbox-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n"]))),H=h.ZP.label(B||(B=(0,m.Z)(["\ndisplay: flex;\n  flex-direction: column;\n"]))),O=h.ZP.span(D||(D=(0,m.Z)(["\nfont-style: italic;\nfont-size: 20px;\nfont-weight: 500;\ntext-align: center;\nmargin-bottom: 5px;\n"]))),Q=h.ZP.input(E||(E=(0,m.Z)(["\n  max-width: 100%;\n  min-width: 300px;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-sizing: border-box;\n"]))),R=t(9844),U=function(){var n=(0,x.I0)(),e=(0,x.v9)(P);return(0,F.jsx)($,{children:(0,F.jsxs)(H,{children:[(0,F.jsx)(O,{children:"Find contacts by name"}),(0,F.jsx)(Q,{type:"text",name:"Search Bar",placeholder:"Search contact...",value:e,onChange:function(e){n((0,R.T)(e.target.value))}})]})})},V=function(){var n=(0,x.v9)(k),e=(0,x.v9)(C);return(0,F.jsxs)(J,{children:[(0,F.jsx)("h1",{children:"Phonebook"}),(0,F.jsx)(N,{}),(0,F.jsx)("h2",{children:"Contacts"}),n&&!e&&(0,F.jsx)(M.Z,{}),(0,F.jsx)(U,{}),e&&e,(0,F.jsx)(G,{})]})}}}]);
//# sourceMappingURL=876.43a5c0e6.chunk.js.map