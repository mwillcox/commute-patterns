(this["webpackJsonpcommute-patterns"]=this["webpackJsonpcommute-patterns"]||[]).push([[0],{17:function(e,t,a){e.exports=a(26)},22:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),o=a.n(r),c=(a(22),a(23),a(6)),u=a(7),m=a(13),i=a(8),s=a(14),d=a(28),E=a(15),h=(a(24),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={data:[],isLoaded:!1,error:null},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://data.bayareametro.gov/resource/a3ij-q9vc.json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,data:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.data;return t?l.a.createElement("div",null,"Error in loading data"):a?l.a.createElement(d.a,{responsive:!0,striped:!0,bordered:!0,hover:!0,size:"sm",variant:"dark"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"County of Residence"),l.a.createElement("th",null,"County for Work"),l.a.createElement("th",null,"Total"),l.a.createElement("th",null,"Drove Alone"),l.a.createElement("th",null,"2 Person Carpool"),l.a.createElement("th",null,"3 Person Carpool"),l.a.createElement("th",null,"4 Person Carpool"),l.a.createElement("th",null,"5 or 6 Person Carpool"),l.a.createElement("th",null,"7 or More Person Carpool"),l.a.createElement("th",null,"Bus"),l.a.createElement("th",null,"Streetcar or Trolley"),l.a.createElement("th",null,"Subway"),l.a.createElement("th",null,"Railroad"),l.a.createElement("th",null,"Bicycle"),l.a.createElement("th",null,"Taxi"),l.a.createElement("th",null,"Motorcycle"),l.a.createElement("th",null,"Other"),l.a.createElement("th",null,"Worked at Home"))),l.a.createElement("tbody",null,n.map((function(e){return l.a.createElement("tr",{key:Object(E.a)(e)},l.a.createElement("td",null,e.res_geo_short),l.a.createElement("td",null,e.work_geo_short),l.a.createElement("td",null,e.total),l.a.createElement("td",null,e.drove_alone),l.a.createElement("td",null,e._2_person_carpool),l.a.createElement("td",null,e._3_person_carpool),l.a.createElement("td",null,e._4_person_carpool),l.a.createElement("td",null,e._5_or_6_person_carpool),l.a.createElement("td",null,e._7_or_more_person_carpool),l.a.createElement("td",null,e.bus),l.a.createElement("td",null,e.streetcar_or_trolley),l.a.createElement("td",null,e.subway),l.a.createElement("td",null,e.railroad),l.a.createElement("td",null,e.bicycle),l.a.createElement("td",null,e.taxi),l.a.createElement("td",null,e.motorcycle),l.a.createElement("td",null,e.other),l.a.createElement("td",null,e.worked_at_home))})))):l.a.createElement("div",null,"Loading ...")}}]),t}(l.a.Component));a(25);var p=function(){return l.a.createElement("div",{className:"app container"},l.a.createElement("header",null,l.a.createElement("h1",null,"Bay Area Commute Patterns"),l.a.createElement("h3",null,"How and where do people commute in the Bay Area?"),l.a.createElement("p",null," Commute patterns, more commonly referred to as county-to-county commute flows, reflect the number of individuals traveling within and between various counties for commuting purposes. DATA SOURCE: U.S. Census Transportation Planning Package 2010")),l.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.979949af.chunk.js.map