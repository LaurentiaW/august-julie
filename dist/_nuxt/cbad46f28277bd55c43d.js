(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{203:function(t,e,o){var content=o(205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("f9e3a094",content,!0,{sourceMap:!1})},204:function(t,e,o){"use strict";var r=o(203);o.n(r).a},205:function(t,e,o){(t.exports=o(9)(!1)).push([t.i,"div[data-v-d711377c]{padding:2rem 0 5rem;text-align:center}div h3[data-v-d711377c]{padding:1rem 0 2rem;width:61%;text-align:right;font-size:1.5rem;color:var(--dark-blue)}div .btn[data-v-d711377c]{font-size:1.25rem;color:var(--white);font-weight:400;margin:1rem 0}",""])},206:function(t,e,o){"use strict";var r={name:"TheCallToAction"},n=(o(204),o(2)),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",[this._v("Meer weten, of zamen werken....")]),this._v(" "),e("nuxt-link",{staticClass:"btn",attrs:{to:"/contact"}},[this._v("\n    Contact Me\n  ")])],1)}),[],!1,null,"d711377c",null);e.a=component.exports},209:function(t,e,o){var content=o(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("a734810a",content,!0,{sourceMap:!1})},218:function(t,e,o){"use strict";var r=o(209);o.n(r).a},219:function(t,e,o){(t.exports=o(9)(!1)).push([t.i,"a.project-list-item[data-v-4f320d58]{display:-webkit-box;display:flex;margin:0 0 1.25rem;padding:0 0 1rem;border-bottom:.25px solid var(--grey)}a.project-list-item img[data-v-4f320d58]{width:50%;max-width:200px;-o-object-fit:cover;object-fit:cover;padding:0 1rem 0 0}a.project-list-item .text-wrapper[data-v-4f320d58]{max-width:500px}a.project-list-item .text-wrapper h3[data-v-4f320d58]{color:var(--grey)}a.project-list-item .text-wrapper p[data-v-4f320d58]{color:var(--dark-blue)}a.project-list-item .text-wrapper p.line-clamp[data-v-4f320d58]{overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;text-align:justify}a.project-list-item .action-text[data-v-4f320d58]{text-transform:uppercase;white-space:nowrap;font-size:.875rem;font-weight:700;text-align:right;cursor:pointer;display:block;color:var(--grey);-webkit-transition:all .3s ease;transition:all .3s ease}a.project-list-item .action-text[data-v-4f320d58]:hover{color:var(--comp-clr)}",""])},229:function(t,e,o){"use strict";o.r(e);var r={name:"ProjectLIstItem",props:{project:Object}},n=(o(218),o(2)),c=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.project?o("div",[o("nuxt-link",{staticClass:"project-list-item",attrs:{to:t.project.id}},[o("img",{attrs:{src:t.project.img}}),t._v(" "),o("div",{staticClass:"text-wrapper"},[o("h3",[t._v(t._s(t.project.brand))]),t._v(" "),o("p",{staticClass:"line-clamp"},[t._v("\n        "+t._s(t.project.description)+"\n      ")]),t._v(" "),o("span",{staticClass:"action-text"},[t._v("Read More")])])])],1):t._e()}),[],!1,null,"4f320d58",null).exports,l=o(40),d=o(206),m={components:{ProjectListItem:c,Star:l.a,TheCallToAction:d.a},data:function(){return{displayImg:!1,selectedImg:null,projects:[{brand:"Nijhof",img:"https://images.pexels.com/photos/2132610/pexels-photo-2132610.jpeg",type:"Etalages",skillset:"Styling",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatem facilis totam quae reiciendis! Rerum obcaecati quia nam laboriosam nemo.",id:"/projects/1",title:"The name that shows when hovering on image"},{brand:"Nijhof",img:"https://images.pexels.com/photos/2132610/pexels-photo-2132610.jpeg",type:"Etalages",skillset:"Styling",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatem facilis totam quae reiciendis! Rerum obcaecati quia nam laboriosam nemo.",id:"/projects/1",title:"The name that shows when hovering on image"}]}}},v=Object(n.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h2",[e("Star"),this._v(" Projects")],1),this._v(" "),e("p",[this._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit dolore, fuga eligendi aperiam mollitia?")]),this._v(" "),this._l(this.projects,(function(t,i){return e("ProjectListItem",{key:i,attrs:{project:t}})})),this._v(" "),e("TheCallToAction")],2)}),[],!1,null,"cf60b9ae",null);e.default=v.exports}}]);