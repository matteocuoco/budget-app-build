(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,_){e.exports=_(18)},17:function(e,t,_){},18:function(e,t,_){"use strict";_.r(t);var a=_(0),l=_.n(a),r=_(8),n=_.n(r),s=(_(17),_(2)),c=_(3),o=_(6),i=_(4),m=_(5),u=_(10),d=_(1),E=function(e){function t(e){var _;return Object(s.a)(this,t),(_=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={budget:0,nome:"",spesa:0},_.handleChangeBudget=_.handleChangeBudget.bind(Object(d.a)(Object(d.a)(_))),_.handleSubmitBudget=_.handleSubmitBudget.bind(Object(d.a)(Object(d.a)(_))),_.handleChangeNome=_.handleChangeNome.bind(Object(d.a)(Object(d.a)(_))),_.handleChangeSpesa=_.handleChangeSpesa.bind(Object(d.a)(Object(d.a)(_))),_.handleSubmitSpesa=_.handleSubmitSpesa.bind(Object(d.a)(Object(d.a)(_))),_}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleChangeBudget",value:function(e){this.setState({budget:e.target.value})}},{key:"handleSubmitBudget",value:function(e){localStorage.setItem("budget",this.state.budget)}},{key:"handleChangeNome",value:function(e){this.setState({nome:e.target.value})}},{key:"handleChangeSpesa",value:function(e){this.setState({spesa:e.target.value})}},{key:"handleSubmitSpesa",value:function(e){if(localStorage.getItem("listaSpese")){var t=JSON.parse(localStorage.getItem("listaSpese"));localStorage.setItem("listaSpese",JSON.stringify([].concat(Object(u.a)(t),[this.state.nome,this.state.spesa])))}else localStorage.setItem("listaSpese",JSON.stringify([this.state.nome,this.state.spesa]))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmitBudget},l.a.createElement("h3",null,"Il mio budget"),l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("input",{type:"number",className:"form-control",id:"input-budget",placeholder:"Inserire il budget",value:this.state.value,onChange:this.handleChangeBudget})),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-sm btn-block"},"Invia")))),l.a.createElement("form",{onSubmit:this.handleSubmitSpesa},l.a.createElement("h3",null,"Le mie spese"),l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("input",{type:"text",className:"form-control",id:"input-nome",placeholder:"Inserire la spesa",value:this.state.value,onChange:this.handleChangeNome})),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("input",{type:"number",className:"form-control",id:"input-spesa",placeholder:"Inserire l'importo",value:this.state.value,onChange:this.handleChangeSpesa}))),l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-sm btn-block"},"Invia")))))}}]),t}(a.Component),p=_(9),O=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(p.a,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_coding_react_redux_budget_mio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),D_coding_react_redux_budget_mio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),D_coding_react_redux_budget_mio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),D_coding_react_redux_budget_mio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),D_coding_react_redux_budget_mio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),Output=function(_Component){function Output(){return Object(D_coding_react_redux_budget_mio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Output),Object(D_coding_react_redux_budget_mio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(D_coding_react_redux_budget_mio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Output).apply(this,arguments))}return Object(D_coding_react_redux_budget_mio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Output,_Component),Object(D_coding_react_redux_budget_mio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Output,[{key:"render",value:function render(){if(localStorage.getItem("listaSpese")){for(var nomeHtml="",nomeParagraphs=[],spesaHtml="",spesaParagraphs=[],spesaTotale="",spesaImporti=[],valoreBudget=0,residuo=0,totaleSpese=0,listaSpese=JSON.parse(localStorage.getItem("listaSpese")),i=0;i<listaSpese.length;i+=2)nomeParagraphs.push("<p>".concat(listaSpese[i],"</p>"));for(var _i=1;_i<listaSpese.length;_i+=2)spesaParagraphs.push("<p>".concat(listaSpese[_i],"</p>"));for(var _i2=1;_i2<listaSpese.length;_i2+=2)spesaImporti.push("".concat(listaSpese[_i2]));nomeHtml=nomeParagraphs.join(""),spesaHtml=spesaParagraphs.join(""),spesaTotale=spesaImporti.join("+"),valoreBudget=JSON.parse(localStorage.getItem("budget")),totaleSpese=eval(spesaTotale),residuo=valoreBudget-totaleSpese,console.log(document.getElementById("residuo"))}return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3",null,"Riepilogo"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"container-fluid"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"row justify-content-md-center"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col-sm-4"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5",null,"Spesa"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{dangerouslySetInnerHTML:{__html:nomeHtml}})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col-sm-4"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5",null,"Importo"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{dangerouslySetInnerHTML:{__html:spesaHtml}}))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"row justify-content-md-center"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col-sm-8"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3",null,"Totale"))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"row justify-content-md-center"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col-sm-4"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"card"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5",{className:"card-header"},"Budget"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"card-body"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5",{className:"card-title"},"Il mio patrimonio"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"card-text"},valoreBudget)))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col-sm-4"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"card"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5",{className:"card-header"},"Spese"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"card-body"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5",{className:"card-title"},"Le mie uscite"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"card-text"},totaleSpese)))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col-sm-4"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"card"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5",{className:"card-header"},"Residuo"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"card-body"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5",{className:"card-title"},"I miei risparmi"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"card-text",id:"residuo"},residuo)))))))}}]),Output}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=Output}},[[11,1,2]]]);
//# sourceMappingURL=main.5d0af55b.chunk.js.map