(window.webpackJsonp=window.webpackJsonp||[]).push([[24,4],{282:function(t,e,r){t.exports=r.p+"img/user.f409262.jpg"},287:function(t,e,r){var content=r(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(68).default)("a7d81338",content,!0,{sourceMap:!1})},306:function(t,e,r){"use strict";r(287)},307:function(t,e,r){var o=r(67)(!1);o.push([t.i,".button[data-v-550e9b0c]{font-weight:500;border:1px solid #fff;color:#fff;background-color:transparent;cursor:pointer;padding:4px 8px}.red[data-v-550e9b0c]{color:red;border-color:red}.promote[data-v-550e9b0c]{display:flex;flex-direction:column;grid-gap:6px;gap:6px}.ch[data-v-550e9b0c]{color:#fff;font-weight:500}.imageDiv[data-v-550e9b0c],.imageDiv>img[data-v-550e9b0c]{width:110px;height:110x}.cardDesk[data-v-550e9b0c]{display:flex;border:1px solid #26261e;border-radius:4px;grid-gap:20px;gap:20px;align-items:center}.deskImageContainer[data-v-550e9b0c]{width:20%}.deskImageContainer>img[data-v-550e9b0c]{width:100%}",""]),t.exports=o},321:function(t,e,r){var content=r(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(68).default)("627c4e85",content,!0,{sourceMap:!1})},330:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"imageDiv"},[e("img",{attrs:{src:r(282),alt:""}})])}];r(21),r(13),r(111),r(50),r(34),r(51),r(35),r(28),r(25),r(52),r(53),r(36);function n(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,d=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return d=t.done,t},e:function(t){l=!0,n=t},f:function(){try{d||null==r.return||r.return()}finally{if(l)throw n}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var d={props:["user"],data:function(){return{promoteActive:!1,roomId:""}},computed:{roomsWithoutManager:function(){return this.$store.state.rooms.rooms.filter((function(t){return"admin"===t.manager}))}},methods:{promote:function(){this.$store.commit("rooms/changeRoomManager",[this.roomId,this.user.email]),this.$store.commit("promoteToManager",this.user.email),this.$store.commit("addManagedRoom",[this.roomId,this.user.email]),this.promoteActive=!1,this.roomId=""},demote:function(){this.$store.commit("rooms/demoteRoomManager",this.user.roomsManaged[0]),this.$store.commit("demoteManager",this.user.email),this.$store.commit("removeManagedRoom",[this.roomId,this.user.email])},ban:function(){var t=this;if(this.user.roomsManaged[0]&&this.demote(),this.user.rentedDesks.length){var e,r=n(this.user.rentedDesks);try{var o=function(){var r=e.value,o=t.$store.state.desks.desks.find((function(t){return t._id===r}));t.$store.commit("desks/freeDesk",r),t.$store.commit("rooms/freeDesk",[o.roomId,r])};for(r.s();!(e=r.n()).done;)o()}catch(t){r.e(t)}finally{r.f()}}this.$store.commit("banUser",this.user.email)}}},l=(r(306),r(33)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cardDesk"},[t._m(0),t._v(" "),r("p",{staticClass:"ch"},[t._v(" "+t._s(t.user.fullName))]),t._v(" "),r("p",{staticClass:"ch"},[r("span",{staticClass:"ct"},[t._v(t._s(t.user.email)+" ")])]),t._v(" "),r("p",{staticClass:"ch"},[r("span",{staticClass:"ct"},[t._v(t._s(t.user.role)+t._s(t.user.roomsManaged.length>0?": "+t.user.roomsManaged[0]:""))])]),t._v(" "),r("p",{staticClass:"ch"},[t._v("Rented desks: "),r("span",{staticClass:"ct"},[t._v(t._s(t.user.rentedDesks.length))])]),t._v(" "),"client"===t.user.role?r("div",[t.promoteActive?t._e():r("button",{staticClass:"button",on:{click:function(e){t.promoteActive=!0}}},[t._v("Promote")]),t._v(" "),t.promoteActive?r("div",{staticClass:"promote"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.roomId,expression:"roomId"}],attrs:{name:"",id:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.roomId=e.target.multiple?r:r[0]}}},[r("option",{attrs:{disabled:"",selected:"",value:""}},[t._v("Room ID")]),t._v(" "),t._l(t.roomsWithoutManager,(function(e){return r("option",{domProps:{value:e._id}},[t._v("Room "+t._s(e._id))])}))],2),t._v(" "),r("button",{staticClass:"button",attrs:{disabled:!t.roomId},on:{click:t.promote}},[t._v("Promote")])]):t._e()]):t._e(),t._v(" "),"RoomManager"===t.user.role?r("div",[r("button",{staticClass:"button red",on:{click:t.demote}},[t._v("Demote")])]):t._e(),t._v(" "),"admin"!==t.user.role?r("button",{staticClass:"button red",on:{click:t.ban}},[t._v("Ban")]):t._e()])}),o,!1,null,"550e9b0c",null);e.default=component.exports},345:function(t,e,r){"use strict";r(321)},346:function(t,e,r){var o=r(67)(!1);o.push([t.i,"h1[data-v-a8fd8a04]{color:#fff;font-weight:500;font-size:18px;text-align:center}.card[data-v-a8fd8a04]{max-width:800px;margin:0 auto;background-color:#d4ad76;padding:15px;border-radius:4px;display:flex;flex-direction:column;grid-gap:15px;gap:15px}.wrapper[data-v-a8fd8a04]{padding:30px 60px 60px}.bg[data-v-a8fd8a04],.wrapper[data-v-a8fd8a04]{background:#26261e}.bg[data-v-a8fd8a04]{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-100}",""]),t.exports=o},362:function(t,e,r){"use strict";r.r(e);var o={middleware:["auth","isAdmin"],computed:{users:function(){return this.$store.state.users}}},n=(r(345),r(33)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("div",{staticClass:"card"},[r("h1",[t._v("Admin Panel - Users")]),t._v(" "),t._l(t.users,(function(t){return r("div",[r("AdminUser",{attrs:{user:t}})],1)}))],2),t._v(" "),r("div",{staticClass:"bg"})])}),[],!1,null,"a8fd8a04",null);e.default=component.exports;installComponents(component,{AdminUser:r(330).default})}}]);