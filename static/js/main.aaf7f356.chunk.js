(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),s=(a(16),a(4)),i=a(5),d=a(9),o=a(6),u=a(1),p=a(8),m=(a(17),function(e){var t=e.gridSpecs,a=t.gridSize,n=t.selectedIndex,r={gridTemplateRows:"repeat(".concat(a[0],", 1fr)"),gridTemplateColumns:"repeat(".concat(a[1],", 1fr)")};return l.a.createElement("div",{className:"grid-display",style:r},function(){for(var e=a[0]*a[1],t=[],r=0;r<e;r++)r+1===n?t.push(l.a.createElement("div",{key:r,className:"grid-item selected-true"},l.a.createElement("p",{className:"grid-item-index"},r+1))):t.push(l.a.createElement("div",{key:r,className:"grid-item selected-false"},l.a.createElement("p",{className:"grid-item-index"},r+1)));return t}())}),b=function(e){var t=e.setType,a=e.selectedType,n=function(e){return function(){return t(e)}};return l.a.createElement("div",{id:"grid-type-select"},l.a.createElement("button",{className:"type-selector-button button-selected-".concat("add_subplot"===a),onClick:n("add_subplot")},".add_subplot"),l.a.createElement("button",{className:"type-selector-button button-selected-".concat("subplot2Grid"===a),onClick:n("subplot2Grid")},".subplot2grid"))},g=function(e,t,a){return isNaN(e)||e<=t?t:e>=a?a:e},f=function(e){var t=e.setAddSubplot,a=e.gridSpecs.gridSize,n=a[0]*a[1];return l.a.createElement("div",{id:"AddSubplotInterface",className:"interface"},l.a.createElement("form",{id:"interface-form",onChange:function(){var e=g(parseInt(document.getElementById("grid-rows").value),1,12),a=g(parseInt(document.getElementById("grid-columns").value),1,12),l=g(parseInt(document.getElementById("grid-selected-index").value),1,n);t([e,a],l)}},".add_subplot(",l.a.createElement("input",{id:"grid-rows",type:"number",defaultValue:"1",min:"1",max:"12"}),",",l.a.createElement("input",{id:"grid-columns",type:"number",defaultValue:"1",min:"1",max:"12"}),",",l.a.createElement("input",{id:"grid-selected-index",type:"number",defaultValue:"1",min:"1",max:"".concat(n)}),")"))},E=function(e){var t=e.set2Grid,a=e.gridSpecs,n=a.shape,r=a.loc,c=a.rowspan,s=a.colspan,i=Math.max(r[0]+1,r[0]+c),d=Math.max(r[1]+1,r[1]+s),o=n[0]-c,u=n[1]-s,p=n[0]-r[0],m=n[1]-r[1];return l.a.createElement("div",{id:"subplot-2-grid-interface",className:"interface"},l.a.createElement("form",{onChange:function(){var e=g(parseInt(document.getElementById("shape-1").value),1,9),a=g(parseInt(document.getElementById("shape-2").value),1,9),n=g(parseInt(document.getElementById("loc-1").value),0,o),l=g(parseInt(document.getElementById("loc-2").value),0,u),r=g(parseInt(document.getElementById("rowspan").value),1,p),c=g(parseInt(document.getElementById("colspan").value),1,m);t([e,a],[n,l],r,c)}},".subplot2grid( (",l.a.createElement("input",{id:"shape-1",type:"number",defaultValue:"1",min:i,max:"9"}),",",l.a.createElement("input",{id:"shape-2",type:"number",defaultValue:"1",min:d,max:"9"}),"), (",l.a.createElement("input",{id:"loc-1",type:"number",defaultValue:"0",min:"0",max:n[0]-c}),",",l.a.createElement("input",{id:"loc-2",type:"number",defaultValue:"0",min:"0",max:n[1]-s}),"),",l.a.createElement("br",null),"rowspan=",l.a.createElement("input",{id:"rowspan",type:"number",defaultValue:"1",min:"1",max:n[0]-r[0]}),", colspan=",l.a.createElement("input",{id:"colspan",type:"number",defaultValue:"1",min:"1",max:n[1]-r[1]}),", )"))},y=a(7),h=function(e){var t=e.gridSpecs,a=t.shape,n=t.loc,r=t.rowspan,c=t.colspan,s={gridTemplateRows:"repeat(".concat(a[0],", 1fr)"),gridTemplateColumns:"repeat(".concat(a[1],", 1fr)")};return l.a.createElement("div",{className:"grid-display",style:s},function(){var e=function(){for(var e=[],t=function(e){for(var t=[],a=0;t.length<e[0];){for(var n=[];n.length<e[1];)n.push(a),a+=1;t.push(n)}return t}(a),l=n[0];l<n[0]+r;l++)e.push.apply(e,Object(y.a)(t[l].slice(n[1],n[1]+c)));return e}();if(!e)return l.a.createElement("div",null,l.a.createElement("p",null,"Invalid Plot"));for(var t=[],s=0,i=0;i<a[0];i++)for(var d=0;d<a[1];d++)e.includes(s)?t.push(l.a.createElement("div",{key:"".concat(i,"x").concat(d),className:"grid-item selected-true"},l.a.createElement("p",null,"".concat(i,",").concat(d)))):t.push(l.a.createElement("div",{key:"".concat(i,"x").concat(d),className:"grid-item selected-false"},l.a.createElement("p",null,"".concat(i,",").concat(d)))),s+=1;return t}())},v=function(e){var t=e.type,a=e.gridSpec;return l.a.createElement("div",{className:"code-display"},"add_subplot"===t?l.a.createElement("div",null,"fig.add_subplot(".concat(a.gridSize[0],", ").concat(a.gridSize[1],", ").concat(a.selectedIndex,")")):l.a.createElement("div",null,"plt.subplot2grid((".concat(a.shape[0],", ").concat(a.shape[1],"), (").concat(a.loc[0],", ").concat(a.loc[1],"), rowspan=").concat(a.rowspan,", colspan=").concat(a.colspan,")")))},S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(o.a)(t).call(this,e))).resetState=function(){a.setState({type:"add_subplot",addSubplot:{gridSize:[1,1],selectedIndex:1},subplot2Grid:{shape:[1,1],loc:[0,0],rowspan:1,colspan:1}})},a.setType=function(e){a.resetState(),a.setState({type:e})},a.setAddSubplot=function(e,t){a.setState({addSubplot:{gridSize:e,selectedIndex:t}})},a.set2Grid=function(e,t,n,l){a.setState({subplot2Grid:{shape:e,loc:t,rowspan:n,colspan:l}})},a.state={type:"add_subplot",addSubplot:{gridSize:[1,1],selectedIndex:1},subplot2Grid:{shape:[1,1],loc:[0,0],rowspan:1,colspan:1}},a.setType=a.setType.bind(Object(u.a)(a)),a.setAddSubplot=a.setAddSubplot.bind(Object(u.a)(a)),a.set2Grid=a.set2Grid.bind(Object(u.a)(a)),a.resetState=a.resetState.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",{className:"title"},l.a.createElement("em",null,"Plot Planner")),l.a.createElement("p",{className:"description"},l.a.createElement("em",null,"A simple tool to help you visualize and plan your subplots in matplotlib.")),l.a.createElement(b,{selectedType:this.state.type,setType:this.setType}),"add_subplot"===this.state.type&&l.a.createElement("div",null,l.a.createElement(f,{setAddSubplot:this.setAddSubplot,gridSpecs:this.state.addSubplot}),l.a.createElement(v,{gridSpec:this.state.addSubplot,type:this.state.type}),l.a.createElement(m,{gridSpecs:this.state.addSubplot})),"subplot2Grid"===this.state.type&&l.a.createElement("div",null,l.a.createElement(E,{set2Grid:this.set2Grid,gridSpecs:this.state.subplot2Grid}),l.a.createElement(v,{gridSpec:this.state.subplot2Grid,type:this.state.type}),l.a.createElement(h,{gridSpecs:this.state.subplot2Grid})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.aaf7f356.chunk.js.map