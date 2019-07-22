(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(22)},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=a.n(l),c=a(10),i=a(6),s=a.n(i),u=a(13),h=a(8),d=a(1),m=a(2),p=a(4),f=a(3),b=a(5),E=function(){var e=Object(h.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mate-academy.github.io/react_people-table/api/people.json",e.next=3,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),v=a(7),g=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;console.log(r),a.setState(Object(v.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state),a.setState({id:"",name:"",born:"",died:"",sex:"f",mother:"",father:"",children:[]})},a.state={id:a.props.people.length+1,name:"",born:"",died:"",sex:"f",mother:"",father:"",children:[]},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.people,a=this.state,n=a.mother,l=a.father;return r.a.createElement("div",{className:"form"},r.a.createElement("from",null,r.a.createElement("input",{type:"text",value:this.state.name,placeholder:"Enter your name",onChange:this.handleChange,name:"name"}),r.a.createElement("input",{type:"number",placeholder:"Enter only year of born",onChange:this.handleChange,name:"born"}),r.a.createElement("input",{type:"number",placeholder:"Enter only year of died",onChange:this.handleChange,name:"died",max:"4"}),r.a.createElement("select",{id:"form-select",className:"form-field_input",name:"mother",value:n,onChange:this.handleChange},r.a.createElement("option",{value:""},"Select mother"),t.map(function(e){return r.a.createElement("option",{value:e.mother,key:e.mother},e.mother)})),r.a.createElement("select",{id:"form-select",className:"form-field_input",name:"father",value:l,onChange:this.handleChange},r.a.createElement("option",{value:""},"Select father"),t.map(function(e){return r.a.createElement("option",{value:e.father,key:e.father},e.father)})),r.a.createElement("button",{type:"button",onClick:function(){return e.props.onSubmit(e.state)}},"Submit")))}}]),t}(r.a.Component),y=a(9),C=a.n(y),S=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={selectedPersonId:null},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.handleClickSortBy,n=t.people,l=this.state.selectedPersonId;return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:function(){return a("id")}},"ID"),r.a.createElement("th",{onClick:function(){return a("name")}},"Name"),r.a.createElement("th",null,"Sex"),r.a.createElement("th",{onClick:function(){return a("born")}},"Born"),r.a.createElement("th",{onClick:function(){return a("died")}},"Died"),r.a.createElement("th",null,"Mother"),r.a.createElement("th",null,"Father"),r.a.createElement("th",{onClick:function(){return a("age")}},"Age"),r.a.createElement("th",null,"Century"),r.a.createElement("th",null,"Children"))),r.a.createElement("tbody",null,n.map(function(t){return r.a.createElement("tr",{className:C()({PeopleTable__row:!0,"PeopleTable__row--selected":t.id===l,"person--father":"m"===t.sex&&t.children.length>0,"person--female":"f"===t.sex}),onClick:function(){return e.setState({selectedPersonId:t.id})}},r.a.createElement("td",null,t.id),r.a.createElement("td",{className:C()({persBornBefore:t.born<1650,persDiedAfter:t.died>1800})},t.name),r.a.createElement("td",null,t.sex),r.a.createElement("td",null,t.born),r.a.createElement("td",null,t.died),r.a.createElement("td",null,t.mother),r.a.createElement("td",null,t.father),r.a.createElement("td",{className:t.age>65?"ageMore":""},t.age),r.a.createElement("td",null,t.century),r.a.createElement("td",null,t.children.join(", ")))})))}}]),t}(r.a.Component),j=(a(21),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={people:[],visiblePeople:[],filtredSheet:[],isLoaded:!1,isLoading:!1,direction:1,search:""},a.LoadData=Object(h.a)(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoading:!0}),e.next=3,E();case 3:t=e.sent,n=t.map(function(e,a){return Object(u.a)({},e,{id:a+1,age:e.died-e.born,century:Math.ceil(e.died/100),children:t.filter(function(t){return t.father===e.name||t.mother===e.name}).map(function(e){return e.name})})}),a.setState({people:n,visiblePeople:n,isLoaded:!0,isLoading:!1});case 6:case"end":return e.stop()}},e)})),a.getSortBy=function(e){return function(t,n){var r=a.state.direction;switch(typeof t[e]){case"string":return r*t[e].localeCompare(n[e]);case"number":case"boolean":return r*t[e]-n[e];default:return 0}}},a.handleClickSortBy=function(e){a.setState(function(t){return{direction:1===t.direction?-1:1,visiblePeople:Object(c.a)(t.people).sort(a.getSortBy(e))}})},a.updateSearch=function(e){a.setState({search:e.target.value.slice(0)})},a.addPerson=function(e){a.setState(function(t){return{visiblePeople:[].concat(Object(c.a)(t.visiblePeople),[e])}})},a.handleChangeFilter=function(){a.setState({filtredSheet:a.state.visiblePeople.filter(function(e){return[e.name,e.mother,e.father].join("").toLowerCase().includes(a.state.search.toLowerCase())})})},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state.visiblePeople.filter(function(t){return[t.name,t.mother,t.father].join("").toLowerCase().includes(e.state.search.toLowerCase())});return this.state.isLoaded?r.a.createElement("div",null,r.a.createElement(g,{onSubmit:this.addPerson,people:t}),r.a.createElement(k,{search:this.state.search,updateSearch:this.updateSearch}),r.a.createElement(S,{people:t,handleClickSortBy:this.handleClickSortBy})):r.a.createElement("div",null,r.a.createElement("div",{className:"button_load"},r.a.createElement("button",{className:"button",onClick:this.LoadData,type:"button",disabled:this.state.isLoading}," ",this.state.isLoading?"Loading...":"Load")))}}]),t}(r.a.Component)),k=function(e){var t=e.search,a=e.updateSearch;return r.a.createElement("div",{className:"search_list"},r.a.createElement("input",{className:"search_field",type:"text",value:t,onChange:a,placeholder:"Search"}))},O=j;o.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ccc2d716.chunk.js.map