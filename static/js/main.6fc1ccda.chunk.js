(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{45:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(13),s=n.n(a),r=n(0);var i=function(){return Object(r.jsx)("div",{className:"jumbotron jumbotron-fluid bg-dark",children:Object(r.jsxs)("div",{className:"container text-white",children:[Object(r.jsx)("u",{children:Object(r.jsx)("h1",{className:"display-4 text-center mb-3",children:"Employee Directory"})}),Object(r.jsx)("p",{className:"lead text-center",children:"Search the directory to get any employees info."})]})})},l=n(14),o=n(15),d=n(19),h=n(18),m=n(4);var j=function(e){return Object(r.jsx)("div",{className:"container w-100",children:e.children})},b=n(16),u=n.n(b);var O=function(e){var t=e.employees,n=e.matchSearch,c=Object(m.a)(n).flat();return""===e.value&&(c=Object(m.a)(t)),"Ascending"===e.direction?c.sort((function(e,t){return e.name.last<t.name.last?-1:e.name.last>t.name.last?1:0})):"Descending"===e.direction&&c.sort((function(e,t){return e.name.last>t.name.last?-1:e.name.last<t.name.last?1:0})),Object(r.jsx)(j,{children:Object(r.jsx)("div",{className:"table-responsive",children:Object(r.jsxs)("table",{className:"table table-hover text-center",children:[Object(r.jsx)("thead",{className:"thead-dark",children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"col",children:Object(r.jsx)("button",{className:"btn btn-secondary",children:"Image"})}),Object(r.jsx)("th",{scope:"col",children:Object(r.jsx)("button",{className:"btn btn-danger",onClick:e.reverseOrder,children:"Name"})}),Object(r.jsx)("th",{scope:"col",children:Object(r.jsx)("button",{className:"btn btn-success",onClick:e.reverseOrder,children:"Location"})}),Object(r.jsx)("th",{scope:"col",children:Object(r.jsx)("button",{className:"btn btn-primary",onClick:e.reverseOrder,children:"Phone"})}),Object(r.jsx)("th",{scope:"col",children:Object(r.jsx)("button",{className:"btn btn-warning",onClick:e.reverseOrder,children:"Email"})}),Object(r.jsx)("th",{scope:"col",children:Object(r.jsx)("button",{className:"btn btn-info",onClick:e.reverseOrder,children:"Date of Birth"})})]})}),Object(r.jsx)("tbody",{children:c.map((function(e){var t=e.picture.thumbnail,n=e.name,c=n.first,a=n.last,s="".concat(c," ").concat(a),i=e.location,l=i.city,o=i.state,d="".concat(l,", ").concat(o),h=e.phone,m=e.email,j=u()(e.dob.date).format("MM/DD/YYYY");return Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"row",children:Object(r.jsx)("img",{src:t,alt:"Employee portrait"})}),Object(r.jsx)("td",{className:"align-middle",children:s}),Object(r.jsx)("td",{className:"align-middle",children:d}),Object(r.jsx)("td",{className:"align-middle",children:h}),Object(r.jsx)("td",{className:"align-middle",children:m}),Object(r.jsx)("td",{className:"align-middle",children:j})]},e.login.username)}))})]})})})},p=n(17),x=n.n(p),f={fetchRandomEmployees:function(){return x.a.get("https://randomuser.me/api/?results=100")}};var v=function(e){return Object(r.jsx)("nav",{className:"navbar navbar-light bg-light d-flex justify-content-center mt-3 mb-3",children:Object(r.jsxs)("form",{className:"form-inline",onSubmit:e.handleFormSubmit,children:[Object(r.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:e.handleInputChange}),Object(r.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]})})},y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={employees:[],search:"",matchSearch:[],direction:"Ascending"},e.handleInputChange=function(t){var n=t.target.value;e.setState({search:n}),e.searchEmployees(n.trim())},e.handleFormSubmit=function(t){t.preventDefault(),e.searchEmployees(e.state.search.trim())},e.searchEmployees=function(t){if(t){var n=t.charAt(0).toUpperCase()+t.slice(1),c=[];e.state.employees.filter((function(t){return t.name.first.includes(n)||t.name.last.includes(n)?(c.push(t),e.setState({matchSearch:[c]}),"".concat(t.name.first," ").concat(t.name.last)):"No employees found."}))}},e.reverseOrder=function(t){"Ascending"===e.state.direction?e.setState({direction:"Descending"}):"Descending"===e.state.direction&&e.setState({direction:"Ascending"})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.fetchRandomEmployees().then((function(t){return e.setState({employees:t.data.results,matchSearch:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(v,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(r.jsx)(O,{employees:this.state.employees,matchSearch:this.state.matchSearch,value:this.state.search,direction:this.state.direction,reverseOrder:this.reverseOrder})]})}}]),n}(c.Component);var g=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(i,{}),Object(r.jsx)(y,{})]})};n(44);s.a.render(Object(r.jsx)(g,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.6fc1ccda.chunk.js.map