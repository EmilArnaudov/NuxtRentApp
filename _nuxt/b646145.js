(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{273:function(e,t,r){e.exports=r.p+"img/room-big.6d7fae8.jpg"},274:function(e,t,r){e.exports=r.p+"img/room-small.fe3b6b5.jpg"},275:function(e,t,r){var content=r(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(68).default)("53298974",content,!0,{sourceMap:!1})},285:function(e,t,r){"use strict";r(275)},286:function(e,t,r){var n=r(67)(!1);n.push([e.i,".cardHeading[data-v-299d15fe]{margin:8px 0;color:#fff;font-size:21px;font-weight:700;text-align:center}.cardDesc[data-v-299d15fe]{color:#fff;font-size:15px;line-height:20px}.content>p[data-v-299d15fe]{margin-bottom:8px;color:#fff}.content>p>span[data-v-299d15fe]{text-decoration:underline}.cardDesc[data-v-299d15fe]{margin-top:20px}.free[data-v-299d15fe],.size[data-v-299d15fe]{font-weight:700}.card[data-v-299d15fe]{background-color:#d4ad76;padding:8px;border-radius:8px;transition:all .3s ease-in;cursor:pointer;height:400px}.card[data-v-299d15fe]:hover{border:1px solid #fff}.imageContainer>img[data-v-299d15fe]{width:100%;height:220px}.noFreeSpots[data-v-299d15fe]:hover{border:none}.noFreeSpots[data-v-299d15fe]{cursor:default;position:relative;opacity:.5}.green[data-v-299d15fe]{color:green}.red[data-v-299d15fe]{color:red}",""]),e.exports=n},294:function(e,t,r){"use strict";r.r(t);r(69),r(84),r(50),r(13),r(34),r(51),r(35),r(28),r(25),r(52),r(53),r(36);function n(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,d=!0,f=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return d=e.done,e},e:function(e){f=!0,c=e},f:function(){try{d||null==r.return||r.return()}finally{if(f)throw c}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var c={props:["room","i"],data:function(){return{}},computed:{freeSpots:function(){return this.room.deskCapacity-this.room.desksTaken},currentUser:function(){return this.$store.state.currentUser},hasUserRentedDeskInRoom:function(){var e,t=n(this.currentUser.rentedDesks);try{for(t.s();!(e=t.n()).done;){var r=e.value;if(this.room.deskIds.includes(r))return!0}}catch(e){t.e(e)}finally{t.f()}return!1},disableClick:function(){return this.freeSpots||"admin"===this.currentUser.role||this.room.manager===this.currentUser.email||this.hasUserRentedDeskInRoom}},methods:{handleNavigate:function(){this.$router.push("rooms/".concat(this.room._id))}}},d=(r(285),r(33)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._g({staticClass:"card",class:e.disableClick?"":"noFreeSpots"},e.disableClick?{click:e.handleNavigate}:{}),[n("div",{staticClass:"imageContainer"},["Big"===e.room.size?n("img",{attrs:{src:r(273),alt:"bigRoom"}}):n("img",{attrs:{src:r(274),alt:"smallRoom"}})]),e._v(" "),n("div",{staticClass:"content"},[n("h1",{staticClass:"cardHeading"},[e._v(e._s(e.room.name.toUpperCase()))]),e._v(" "),n("p",{staticClass:"size"},[e._v("Size: "),n("span",[e._v(e._s(e.room.size))])]),e._v(" "),n("p",{staticClass:"free"},[e._v("Free spots: "),n("span",{class:e.freeSpots?"green":"red"},[e._v(e._s(e.freeSpots))])]),e._v(" "),n("p",{staticClass:"cardDesc"},[e._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, quia.")])])])}),[],!1,null,"299d15fe",null);t.default=component.exports}}]);