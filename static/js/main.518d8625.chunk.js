(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{34:function(e,t,a){e.exports=a(48)},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),i=a.n(l),o=a(25),s=a(7),c=a(8),u=a(11),m=a(10),g=(a(27),a(33)),p=a(52),h=a(51);function f(){var e=Object(n.useState)(!1),t=Object(g.a)(e,2),a=t[0],l=t[1],i=function(){return l(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{variant:"primary mr-2 mt-2",onClick:function(){return l(!0)}},"How To Use"),r.a.createElement(h.a,{show:a,onHide:i,size:"lg"},r.a.createElement(h.a.Header,{closeButton:!0},r.a.createElement(h.a.Title,null,"Basic Usage")),r.a.createElement(h.a.Body,null,"Reference String: Enter number [0-9] separated with ,",r.a.createElement("br",null),"Frame Number: Enter number [0-9]",r.a.createElement("br",null),"Reset Clock: For NRU, enter number [0-9]",r.a.createElement("br",null),"Generate String: Generate 16 random number",r.a.createElement("br",null),"Show/Hide swapped out memory: Choose to whether show/hide the swapped-out memory illustration",r.a.createElement("br",null),"Turn on/off animation: Toggle to turn on/off animation",r.a.createElement("br",null),"Show/Hide details: Toggle to show to details of every process",r.a.createElement("br",null)),r.a.createElement(h.a.Footer,null,r.a.createElement(p.a,{variant:"secondary",onClick:i},"Close"))))}var d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.handleRefChange,a=e.handleFrameChange,n=e.handleResetTurnsChange,l=e.handleRefStringGenClick,i=e.handleSwapToggle,o=e.handleAnimationToggle,s=e.frameNumber,c=e.referenceInputTextField,u=e.resetTurns,m=e.animationToggle,g=e.swapToggle,p=e.handleDetailToggle,h=e.detailToggle;return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron bg-transparent"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-5"},"Simulation of Virtual Memory Paging"),r.a.createElement("p",{className:"lead"},"Engineered by Jason"))),r.a.createElement("div",{className:"input-group mt-2"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"addon-wrapping","data-toggle":"tooltip","data-placement":"top",title:"Enter reference string 0~9 separated with ','"},"Reference String")),r.a.createElement("input",{type:"text",name:"referenceInputTextField",className:"form-control",placeholder:"Reference string [0-9] separated with ','",value:c,onChange:t.bind(this)})),r.a.createElement("div",{className:"input-group mt-2"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"addon-wrapping","data-toggle":"tooltip","data-placement":"top",title:"Enter number 0~9"},"Frame Number")),r.a.createElement("input",{ref:"frameNumber",type:"number",min:"1",max:"9",className:"form-control",placeholder:"Frame number [0-9]",value:s,onChange:a.bind(this)}),r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"addon-wrapping","data-toggle":"tooltip","data-placement":"top",title:"For NRU, enter reset clock 0~9"},"Reset Clock")),r.a.createElement("input",{ref:"resetTurns",type:"number",min:"1",max:"9",className:"form-control",placeholder:"Number of reset turns for NRU [0-9]",value:u,onChange:n.bind(this)})),r.a.createElement("button",{type:"button",className:"btn btn-danger mt-2 mr-2",onClick:l},"Generate String"),r.a.createElement("button",{type:"button",className:g?"btn btn-outline-secondary mt-2 mr-2":"btn btn-secondary mt-2 mr-2",onClick:i},g?"Hide swapped out memory":"Show swapped out memory"),r.a.createElement("button",{type:"button",className:m?"btn btn-outline-success mt-2 mr-2":"btn btn-success mt-2 mr-2",onClick:o},m?"Turn off animation":"Turn on animation"),r.a.createElement("button",{type:"button",className:h?"btn btn-outline-info mt-2 mr-2":"btn btn-info mt-2 mr-2",onClick:p},h?"Hide details":"Show details"),r.a.createElement(f,null))}}]),a}(n.Component),b=a(18),E=a.n(b),v=a(19),T=a.n(v),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.referenceString,a=e.frameNumber,n=e.algorithmLabel,l=e.algorithm,i=e.colorMap,o=e.resetTurns,s=e.swapToggle,c=e.animationToggle,u=e.detailToggle,m=l(t,a,o),g=m.pageInMemArray,p=m.pageFaults,h=m.pageNotInMemArray,f=m.referenceMapArray,d=E.a.range(0,a,1);return r.a.createElement("div",null,r.a.createElement("label",null,n+":"),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-bordered table-sm table-custom-style"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",null,"Reference:"),t.map((function(e){return c?r.a.createElement(T.a,{right:!0},r.a.createElement("th",{className:"table-cell-align-center"},e)):r.a.createElement("th",{className:"table-cell-align-center"},e)})))),r.a.createElement("tbody",null,d.map((function(e){return r.a.createElement("tr",null,r.a.createElement("th",null),g.map((function(t,a){return c?r.a.createElement(T.a,{right:!0},r.a.createElement("th",{className:i.get(t[e])+" table-cell-align-center"},t[e],u?r.a.createElement("sub",null,r.a.createElement("sub",null,f[a]?f[a].get(t[e]):"")):"")):r.a.createElement("th",{className:i.get(t[e])+" table-cell-align-center"},t[e],u?r.a.createElement("sub",null,r.a.createElement("sub",null,f[a]?f[a].get(t[e]):"")):"")})))})),s?d.map((function(e){return r.a.createElement("tr",{className:"thead-light"},r.a.createElement("th",null),h.map((function(t){return c?r.a.createElement(T.a,{right:!0},r.a.createElement("th",{className:"table-cell-align-center"},t[e])):r.a.createElement("th",{className:"table-cell-align-center"},t[e])})))})):null,r.a.createElement("tr",{className:"thead-dark"},r.a.createElement("th",null,"Page Fault:"),p.map((function(e){return c?r.a.createElement(T.a,{right:!0},r.a.createElement("th",{className:"table-cell-align-center"},e)):r.a.createElement("th",{className:"table-cell-align-center"},e)})))))))}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.referenceString,a=e.frameNumber,n=e.resetTurns,l=e.swapToggle,i=e.animationToggle,o=e.algorithms,s=e.detailToggle,c=new Map;return c.set("0","table-primary"),c.set("1","table-secondary"),c.set("2","table-info"),c.set("3","table-warning"),c.set("4","table-danger"),c.set("5","table-success"),c.set("6","table-add-0"),c.set("7","table-add-1"),c.set("8","table-add-2"),c.set("9","table-add-3"),o.map((function(e){return r.a.createElement(y,{key:e.name,colorMap:c,frameNumber:a,resetTurns:n,swapToggle:l,detailToggle:s,animationToggle:i,referenceString:t,algorithmLabel:e.name,algorithm:e.f})}))}}]),a}(n.Component);function w(e,t){for(var a="",n=0,r=0,l=0;l<e;l++){do{r=Math.floor(Math.random()*t)}while(r===n);a=a+r.toString()+",",n=r}return a=a.substring(0,a.length-1)}var C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.algorithms,a=e.textProperty,n=e.handleListChange,l=e.selectedAlgorithm;return r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement("a",{href:"javascript:void(0);",onClick:function(){return n(e)},className:e.name===l.name?"list-group-item list-group-item-action active":"list-group-item list-group-item-action"},e[a])})))}}]),a}(n.Component);function S(e,t){for(var a=[],n=[],r=[],l=[],i=[],o=0;o<e.length;o++)a.includes(e[o])?n.push(""):(n.push("F"),a.length<t||(l.length>=t&&l.pop(),l.unshift(a.pop())),a.unshift(e[o])),r.push([].concat(a)),i.push([].concat(l));return{pageInMemArray:r,pageFaults:n,pageNotInMemArray:i,referenceMapArray:[]}}function A(e,t){for(var a=[],n=[],r=[],l=[],i=[],o=0;o<e.length;o++)a.includes(e[o])?(n.push(""),a.splice(a.indexOf(e[o]),1),a.unshift(e[o])):(n.push("F"),a.length<t||(l.length>=t&&l.pop(),l.unshift(a.pop())),a.unshift(e[o])),r.push([].concat(a)),i.push([].concat(l));return{pageInMemArray:r,pageFaults:n,pageNotInMemArray:i,referenceMapArray:[]}}function F(e,t,a){var n=[],r=[],l=[],i=new Map,o=[],s=[],c=[];e.forEach((function(e){return i.set(e,0)}));for(var u=0;u<e.length;u++){if(u%a===0&&e.forEach((function(e){return i.set(e,0)})),n.includes(e[u]))r.push(""),i.set(e[u],1);else if(r.push("F"),n.length<t)n.unshift(e[u]);else for(var m=t-1;m>=0;m--){if(1!==i.get(n[m])){o.length>=t&&o.pop(),o.unshift(n.splice(n.indexOf(n[m]),1)[0]),n.unshift(e[u]);break}i.set(n[m],0)}l.push([].concat(n)),s.push([].concat(o)),c.push(new Map(i))}return{pageInMemArray:l,pageFaults:r,pageNotInMemArray:s,referenceMapArray:c}}function M(e,t){var a=[],n=[],r=[],l=new Map,i=[],o=[],s=[],c=!1;e.forEach((function(e){return l.set(e,0)}));for(var u=0;u<e.length;u++){if(a.includes(e[u]))n.push(""),l.set(e[u],1);else if(n.push("F"),a.length<t)a.unshift(e[u]);else{for(var m=t-1;m>=0;m--){if(1!==l.get(a[m])){i.length>=t&&i.pop(),i.unshift(a.splice(a.indexOf(a[m]),1)[0]),a.unshift(e[u]),c=!0;break}l.set(a[m],0)}c||(i.unshift(a.pop()),a.unshift(e[u]))}r.push([].concat(a)),o.push([].concat(i)),s.push(new Map(l))}return{pageInMemArray:r,pageFaults:n,pageNotInMemArray:o,referenceMapArray:s}}function O(e,t){var a=[],n=[],r=[],l=new Map,i=[],o=[],s=[];e.forEach((function(e){return l.set(e,0)}));for(var c=0;c<e.length;c++){if(a.includes(e[c]))n.push(""),l.set(e[c],l.get(e[c])+1);else if(n.push("F"),a.length<t)a.unshift(e[c]);else{for(var u=l.get(a[t-1]),m=a[t-1],g=t-2;g>=0;g--)l.get(a[g])<u&&(u=l.get(a[g]),m=a[g]);i.length>=t&&i.pop(),i.unshift(a.splice(a.indexOf(m),1)[0]),a.unshift(e[c])}s.push(new Map(l)),r.push([].concat(a)),o.push([].concat(i))}return{pageInMemArray:r,pageFaults:n,pageNotInMemArray:o,referenceMapArray:s}}function j(e,t){var a=[],n=[],r=[],l=new Map,i=[],o=[],s=[];e.forEach((function(e){return l.set(e,0)}));for(var c=0;c<e.length;c++){if(a.includes(e[c]))n.push(""),l.forEach((function(e,t){return l.set(t,Object(b.floor)(e/2))})),l.set(e[c],l.get(e[c])+256);else if(n.push("F"),l.forEach((function(e,t){return l.set(t,Object(b.floor)(e/2))})),a.length<t)a.unshift(e[c]);else{for(var u=l.get(a[t-1]),m=a[t-1],g=t-2;g>=0;g--)l.get(a[g])<u&&(u=l.get(a[g]),m=a[g]);i.length>=t&&i.pop(),i.unshift(a.splice(a.indexOf(m),1)[0]),a.unshift(e[c])}s.push(new Map(l)),r.push([].concat(a)),o.push([].concat(i))}return{pageInMemArray:r,pageFaults:n,pageNotInMemArray:o,referenceMapArray:s}}C.defaultProps={textProperty:"name"};var k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={referenceInputTextField:"0,2,3,1,2,1,4,5,6,2,4,5,3,2,3,8,5,7,2,0,6,4,1,9",referenceString:["0","2","3","1","2","1","4","5","6","2","4","5","3","2","3","8","5","7","2","0","6","4","1","9"],frameNumber:4,resetTurns:4,swapToggle:!1,animationToggle:!0,detailToggle:!1,selectedAlgorithm:{name:"Show All"}},e.handleRefChange=function(t){var a=t.target.value;if(a.match(/^$|^[0-9,]+$/)&&!a.match(/,,+,*|[0-9][0-9]+[0-9]*/g)){var n=Object(o.a)(a.split(",")).filter((function(e){return""!==e}));e.setState({referenceInputTextField:a,referenceString:n})}},e.handleFrameChange=function(t){var a=t.target;a.value<10&&e.setState({frameNumber:a.value})},e.handleResetTurnsChange=function(t){var a=t.target;a.value<10&&e.setState({resetTurns:a.value})},e.handleSwapToggle=function(){e.setState({swapToggle:!e.state.swapToggle})},e.handleRefStringGenClick=function(){var t=w(24,9),a=Object(o.a)(t.split(",")).filter((function(e){return""!==e}));e.setState({referenceInputTextField:t,referenceString:a})},e.handleAnimationToggle=function(){e.setState({animationToggle:!e.state.animationToggle})},e.handleDetailToggle=function(){e.setState({detailToggle:!e.state.detailToggle})},e.handleListChange=function(t){e.setState({selectedAlgorithm:t})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.frameNumber,a=e.resetTurns,n=e.referenceString,l=e.referenceInputTextField,i=e.swapToggle,o=e.animationToggle,s=e.detailToggle,c=e.selectedAlgorithm,u=this.handleRefChange,m=this.handleFrameChange,g=this.handleResetTurnsChange,p=this.handleRefStringGenClick,h=this.handleAnimationToggle,f=this.handleSwapToggle,b=this.handleListChange,E=this.handleDetailToggle,v=[{name:"Show All"},{name:"First In First Out",f:S},{name:"Second Chance",f:M},{name:"Least Recently Used",f:A},{name:"Not Recently Used",f:F},{name:"Not Frequently Used",f:O},{name:"Aging (8 bits counter)",f:j}],T=c&&c.f?v.filter((function(e){return e.name===c.name})):v.filter((function(e){return"Show All"!==e.name}));return r.a.createElement("main",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(d,{handleRefChange:u,handleFrameChange:m,handleResetTurnsChange:g,handleRefStringGenClick:p,handleSwapToggle:f,handleAnimationToggle:h,handleDetailToggle:E,detailToggle:s,frameNumber:t,resetTurns:a,referenceInputTextField:l,animationToggle:o,swapToggle:i})),r.a.createElement("div",{className:"col-3 mt-2 list-group-outer-padding"},r.a.createElement(C,{algorithms:v,handleListChange:b,selectedAlgorithm:c}))),r.a.createElement("div",null,r.a.createElement(N,{frameNumber:t,resetTurns:a,referenceString:n,swapToggle:i,animationToggle:o,detailToggle:s,algorithms:T})))}}]),a}(n.Component);a(46),a(47);i.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.518d8625.chunk.js.map