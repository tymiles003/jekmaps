!function o(t,n,e){function r(a,c){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!c&&s)return s(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var p=n[a]={exports:{}};t[a][0].call(p.exports,function(o){var n=t[a][1][o];return r(n?n:o)},p,p.exports,o,t,n,e)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<e.length;a++)r(e[a]);return r}({1:[function(o,t,n){function e(o){var t={lat:o.lat,lng:o.lng};c.emit("location",t)}function r(o,t){var n=null;return t.forEach(function(t,e,r){t.data.driverName==o.driverName&&t.data.driverNoTelp==o.driverNoTelp&&(n=t)}),n}var i,a,c=(o("./lib/bouncemarker"),o("./lib/usermarker"),io()),s=!1,l=!0,p=[];L.mapbox.accessToken="pk.eyJ1IjoibWFwYm94IiwiYSI6IlhHVkZmaW8ifQ.hAMX5hSW-QnTeRCMAy9A8Q";var u=L.mapbox.map("map",null,{attributionControl:!1}).setView([-6.886831823908739,107.61399149894714],16).addControl(L.mapbox.geocoderControl("mapbox.places"));L.control.layers({"Mapbox OSM Bright 2":L.mapbox.tileLayer("mapbox.osm-bright").addTo(u),"Mapbox Streets":L.mapbox.tileLayer("mapbox.streets"),"Mapbox Streets Satellite":L.mapbox.tileLayer("mapbox.streets-satellite"),"Mapbox Satellite":L.mapbox.tileLayer("mapbox.satellite"),"Mapbox Light":L.mapbox.tileLayer("mapbox.light"),"Mapbox Dark":L.mapbox.tileLayer("mapbox.dark"),"Mapbox Pirates":L.mapbox.tileLayer("mapbox.pirates"),"Mapbox Comic":L.mapbox.tileLayer("mapbox.comic"),"Mapbox Wheatpaste":L.mapbox.tileLayer("mapbox.wheatpaste"),OpenStreetMap:L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png"),"Stamen Toner":L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"),"Stamen Watercolor":L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png")}).addTo(u),L.easyButton("fa-location-arrow",function(o,t){t.setView(i,16)}).addTo(u),u.on("moveend",function(o){e(u.getCenter())}),u.on("zoomend",function(o){e(u.getCenter())}),u.on("popupopen",function(o){s=!0}),u.on("popupclose",function(o){s=!1}),c.on("drivers",function(o){if(0!=p.length)for(var t=0;t<o.length;++t){var n=r(o[t],p);if(null!=n){var e=o[t].driverLatLong.split(",")[0],i=o[t].driverLatLong.split(",")[1],a=new L.LatLng(e,i);n.setLatLng(a),n.data=o[t]}else{var e=o[t].driverLatLong.split(",")[0],i=o[t].driverLatLong.split(",")[1],c=L.marker([e,i],{icon:L.mapbox.marker.icon({"marker-size":"large","marker-symbol":"scooter","marker-color":"#009900"}),bounceOnAdd:!0,bounceOnAddOptions:{duration:500,height:100}});c.bindPopup('<h3 class="popup-header">'+o[t].driverName+'</h3><p class="popup-text">'+o[t].driverNoTelp+'</p><p class="popup-text">'+o[t].driverTypeName+"</p>"),c.addTo(u),c.data=o[t],p.push(c)}}else for(var t=0;t<o.length;++t){var e=o[t].driverLatLong.split(",")[0],i=o[t].driverLatLong.split(",")[1],c=L.marker([e,i],{icon:L.mapbox.marker.icon({"marker-size":"large","marker-symbol":"scooter","marker-color":"#009900"}),bounceOnAdd:!0,bounceOnAddOptions:{duration:500,height:100}});c.bindPopup('<h3 class="popup-header">'+o[t].driverName+'</h3><p class="popup-text">'+o[t].driverNoTelp+'</p><p class="popup-text">'+o[t].driverTypeName+"</p>"),c.addTo(u),c.data=o[t],p.push(c)}}),e(u.getCenter()),$("#welcomeModal").modal({backdrop:"static",keyboard:!1}),$("#welcomeModal").on("hidden.bs.modal",function(){u.locate({watch:!0,enableHighAccuracy:!0})}),u.on("locationfound",function(o){i=o.latlng,l&&(a=L.userMarker(i,{pulsing:!0,smallIcon:!0}),a.addTo(u),u.panTo(i),l=!1),a.setLatLng(i)}),"undefined"==typeof console||"function"!=typeof console.log||window.test||console.log("\r\n%c                     *      .--.\r\n%c                           / /  `\r\n%c          +               | |\r\n%c                 '         \\ \\__,\r\n%c             *          +   '--'  *\r\n%c                 +   /\\\r\n%c    +              .'  '.   *\r\n%c           *      /======\\      +\r\n%c                 ;:.  _   ;\r\n%c                 |:. (_)  |\r\n%c                 |:.  _   |\r\n%c       +         |:. (_)  |          *\r\n%c                 ;:.      ;\r\n%c               .' \\:.    / `.\r\n%c              / .-'':._.'`-. \\\r\n%c              |/    /||\\    \\|\r\n%c            _..--\"\"\"````\"\"\"--.._\r\n%c      _.-'``                    ``'-._\r\n%c    -'         %cAnjinglah maneh%c        '-\r\n%c","color:#D0E3F1","color:#D0E3F1","color:#C0DAEC","color:#C0DAEC","color:#B0D1E8","color:#B0D1E8","color:#A1C7E3","color:#A1C7E3","color:#91BEDE","color:#91BEDE","color:#81B5D9","color:#81B5D9","color:#72ABD5","color:#72ABD5","color:#62A2D0","color:#62A2D0","color:#5299CB","color:#5299CB","color:#4390C7","color:#4390C7","color:#4390C7","color: #000000")},{"./lib/bouncemarker":2,"./lib/usermarker":3}],2:[function(o,t,n){!function(){var o=L.Marker.prototype.onAdd,t=L.Marker.prototype.onRemove;L.Marker.mergeOptions({bounceOnAdd:!1,bounceOnAddOptions:{duration:1e3,height:-1},bounceOnAddCallback:function(){}}),L.Marker.include({_toPoint:function(o){return this._map.latLngToContainerPoint(o)},_toLatLng:function(o){return this._map.containerPointToLatLng(o)},_motionStep:function(o){var t=this,n=new Date;t._intervalId=setInterval(function(){var e=new Date-n,r=e/o.duration;r>1&&(r=1);var i=o.delta(r);o.step(i),1===r&&(o.end(),clearInterval(t._intervalId))},o.delay||10)},_bounceMotion:function(o,t,n){var e=L.latLng(this._origLatlng),r=this._dropPoint.y,i=this._dropPoint.x,a=this._point.y-r,c=this;this._motionStep({delay:10,duration:t||1e3,delta:o,step:function(o){c._dropPoint.y=r+a*o-(c._map.project(c._map.getCenter()).y-c._origMapCenter.y),c._dropPoint.x=i-(c._map.project(c._map.getCenter()).x-c._origMapCenter.x),c.setLatLng(c._toLatLng(c._dropPoint))},end:function(){c.setLatLng(e),"function"==typeof n&&n()}})},_easeOutBounce:function(o){return 1/2.75>o?7.5625*o*o:2/2.75>o?7.5625*(o-=1.5/2.75)*o+.75:2.5/2.75>o?7.5625*(o-=2.25/2.75)*o+.9375:7.5625*(o-=2.625/2.75)*o+.984375},bounce:function(o,t){this._origLatlng=this.getLatLng(),this._bounce(o,t)},_bounce:function(o,t){"function"==typeof o&&(t=o,o=null),o=o||{duration:1e3,height:-1},"number"==typeof o&&(o.duration=arguments[0],o.height=arguments[1]),this._origMapCenter=this._map.project(this._map.getCenter()),this._dropPoint=this._getDropPoint(o.height),this._bounceMotion(this._easeOutBounce,o.duration,t)},_getDropPoint:function(o){this._point=this._toPoint(this._origLatlng);var t;return t=void 0===o||0>o?this._toPoint(this._map.getBounds()._northEast).y:this._point.y-o,new L.Point(this._point.x,t)},onAdd:function(t){this._map=t,this._origLatlng=this._latlng,this.options.bounceOnAdd===!0&&("undefined"!=typeof this.options.bounceOnAddDuration&&(this.options.bounceOnAddOptions.duration=this.options.bounceOnAddDuration),"undefined"!=typeof this.options.bounceOnAddHeight&&(this.options.bounceOnAddOptions.height=this.options.bounceOnAddHeight),this._dropPoint=this._getDropPoint(this.options.bounceOnAddOptions.height),this.setLatLng(this._toLatLng(this._dropPoint))),o.call(this,t),this.options.bounceOnAdd===!0&&this._bounce(this.options.bounceOnAddOptions,this.options.bounceOnAddCallback)},onRemove:function(o){clearInterval(this._intervalId),t.call(this,o)}})}()},{}],3:[function(o,t,n){!function(o){var t=L.divIcon({className:"leaflet-usermarker",iconSize:[34,34],iconAnchor:[17,17],popupAnchor:[0,-20],labelAnchor:[11,-3],html:""}),n=L.divIcon({className:"leaflet-usermarker",iconSize:[34,34],iconAnchor:[17,17],popupAnchor:[0,-20],labelAnchor:[11,-3],html:'<i class="pulse"></i>'}),e=L.divIcon({className:"leaflet-usermarker-small",iconSize:[17,17],iconAnchor:[9,9],popupAnchor:[0,-10],labelAnchor:[3,-4],html:""}),r=L.divIcon({className:"leaflet-usermarker-small",iconSize:[17,17],iconAnchor:[9,9],popupAnchor:[0,-10],labelAnchor:[3,-4],html:'<i class="pulse"></i>'}),i={stroke:!0,color:"#03f",weight:3,opacity:.5,fillOpacity:.15,fillColor:"#03f",clickable:!1};L.UserMarker=L.Marker.extend({options:{pulsing:!1,smallIcon:!1,accuracy:0,circleOpts:i},initialize:function(o,t){t=L.Util.setOptions(this,t),this.setPulsing(this.options.pulsing),this._accMarker=L.circle(o,this.options.accuracy,this.options.circleOpts),L.Marker.prototype.initialize.call(this,o,this.options),this.on("move",function(){this._accMarker.setLatLng(this.getLatLng())}).on("remove",function(){this._map.removeLayer(this._accMarker)})},setPulsing:function(o){this._pulsing=o,this.setIcon(this.options.smallIcon?this._pulsing?r:e:this._pulsing?n:t)},setAccuracy:function(o){this._accuracy=o,this._accMarker?this._accMarker.setRadius(o):this._accMarker=L.circle(this._latlng,o,this.options.circleOpts).addTo(this._map)},onAdd:function(o){L.Marker.prototype.onAdd.call(this,o),this._accMarker.addTo(o)}}),L.userMarker=function(o,t){return new L.UserMarker(o,t)}}(window)},{}]},{},[1]);