!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("playkit-js"),require("shaka-player"),require("playkit-js-providers")):"function"==typeof define&&define.amd?define(["playkit-js","shaka-player","playkit-js-providers"],r):"object"==typeof exports?exports.OfflineManager=r(require("playkit-js"),require("shaka-player"),require("playkit-js-providers")):(e.KalturaPlayer=e.KalturaPlayer||{},e.KalturaPlayer.OfflineManager=r(e.KalturaPlayer.core,e.KalturaPlayer.shaka,e.KalturaPlayer.providers))}("undefined"!=typeof self?self:this,function(e,r,t){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=3)}([function(e,r,t){"use strict";function n(e){return e?u.get(e):u}function o(e){return n(e).getLevel()}function a(e,r){n(r).setLevel(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.setLogLevel=r.getLogLevel=r.LogLevel=void 0;var i=t(8),u=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}(i),s={DEBUG:u.DEBUG,INFO:u.INFO,TIME:u.TIME,WARN:u.WARN,ERROR:u.ERROR,OFF:u.OFF};u.useDefaults({defaultLevel:u.ERROR}),r.default=n,r.LogLevel=s,r.getLogLevel=o,r.setLogLevel=a},function(r,t){r.exports=e},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),i=t(7),u=n(i),s=t(0),c=n(s),l=t(1),d="offline-manager",f=function(){function e(r){o(this,e),e._logger.debug("DBManager created"),"indexedDB"in window&&(this.config=r,this.open(d))}return a(e,[{key:"open",value:function(r){this.dbPromise=u.default.open(r,1,function(r){e._logger.debug("open"),r.objectStoreNames.contains("entriesMap")||r.createObjectStore("entriesMap",{keyPath:"entryId"})})}},{key:"add",value:function(r,t,n){var o=this;return this.dbPromise.then(function(a){e._logger.debug("add");var i=a.transaction(r,"readwrite"),u=i.objectStore(r);return o._addConfigToItem(n),n.entryId=t,u.put(n),i.complete}).catch(function(e){Promise.reject(new l.Error(l.Error.Severity.RECOVERABLE,l.Error.Category.STORAGE,l.Error.Code.CANNOT_ADD_ITEM,e))})}},{key:"remove",value:function(r,t){return this.dbPromise.then(function(n){e._logger.debug("remove");var o=n.transaction(r,"readwrite");return o.objectStore(r).delete(t),o.complete}).catch(function(e){Promise.reject(new l.Error(l.Error.Severity.RECOVERABLE,l.Error.Category.STORAGE,l.Error.Code.REQUESTED_ITEM_NOT_FOUND,e))})}},{key:"get",value:function(r,t){return this.dbPromise.then(function(n){return e._logger.debug("get",t),n.transaction(r).objectStore(r).get(t)}).then(function(e){return e}).catch(function(e){Promise.reject(new l.Error(l.Error.Severity.RECOVERABLE,l.Error.Category.STORAGE,l.Error.Code.REQUESTED_ITEM_NOT_FOUND,e))})}},{key:"getAll",value:function(r){return this.dbPromise.then(function(t){return e._logger.debug("getAll"),t.transaction(r).objectStore(r).getAll()}).then(function(e){return e}).catch(function(e){Promise.reject(new l.Error(l.Error.Severity.RECOVERABLE,l.Error.Category.STORAGE,l.Error.Code.REQUESTED_ITEM_NOT_FOUND,e))})}},{key:"removeAll",value:function(e){return e}},{key:"update",value:function(r,t,n){return e._logger.debug("update"),this.add(r,t,n)}},{key:"_addConfigToItem",value:function(e){for(var r in this.config)e[r]=this.config[r]}}]),e}();f._logger=(0,c.default)("DBManager"),r.default=f},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.NAME=r.VERSION=r.OfflineManager=void 0;var n=t(4),o=function(e){return e&&e.__esModule?e:{default:e}}(n);r.default=o.default,r.OfflineManager=o.default,r.VERSION="1.1.0",r.NAME="playkit-js-offline-manager"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function a(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function i(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var u=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),s=t(5),c=t(9),l=t(1),d=t(0),f=n(d),g=t(2),E=n(g),v={DOWNLOADING:"downloading",PAUSED:"paused",RESUMED:"resumed",ENDED:"ended",ERROR:"error"},p=["hls","progressive"],h=function(e){function r(e){o(this,r),e.logLevel&&d.LogLevel[e.logLevel]&&(0,d.setLogLevel)(d.LogLevel[e.logLevel]),r._logger.debug("offline manager created");var t=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return t._downloads?a(t):(t._downloads={},t._config=e,t._eventManager=new l.EventManager,t._dbManager=new E.default({}),t._setOfflineAdapter(),t._isDBSynced=!1,t)}return i(r,e),u(r,null,[{key:"isValid",value:function(){return!0}}]),u(r,[{key:"_setOfflineAdapter",value:function(){var e=this;this._offlineProvider=new s.ShakaOfflineProvider(this._downloads,this._config),this._eventManager.listen(this._offlineProvider,s.PROGRESS_EVENT,function(r){e.dispatchEvent(r)})}},{key:"getMediaConfig",value:function(e){var t=this;return r._logger.debug("get media info started",e.id),new Promise(function(n){return t._downloads[e.id]?n(t._downloads[e.id].sources.dash[0]):new c.Provider(t._config.provider).getMediaConfig(e).then(function(e){if(l.Utils.Object.hasPropertyPath(e,"sources.dash")&&e.sources.dash.length>0){e=t._removeNotRelevantSources(e);var o=e.sources.dash[0];return o.id=e.sources.id,t._downloads[e.sources.id]=e,r._logger.debug("get media info ended"),n(o)}t._onError(new l.Error(l.Error.Severity.RECOVERABLE,l.Error.Category.STORAGE,l.Error.Code.COULD_NOT_GET_INFO_FROM_MEDIA_PROVIDER))})})}},{key:"pause",value:function(e){var t=this;return new Promise(function(n){r._logger.debug("pause start",e);var o=t._downloads[e];if(o)return t._recoverEntry(e),[v.DOWNLOADING,v.RESUMED].includes(o.state)?t._offlineProvider.pause(e).then(function(){return o.state=v.PAUSED,t._dbManager.update("entriesMap",e,t._offlineProvider.prepareItemForStorage(o)).then(function(){r._logger.debug("paused ended",e),n({entryId:e,state:v.PAUSE})})}).catch(function(e){t._onError(new l.Error(l.Error.Severity.RECOVERABLE,l.Error.Category.STORAGE,l.Error.Code.PAUSE_ABORTERD,e))}):n();t._onError(new l.Error(l.Error.Severity.RECOVERABLE,l.Error.Category.STORAGE,l.Error.Code.ENTRY_DOES_NOT_EXIST,e))})}},{key:"resume",value:function(e){var t=this;return r._logger.debug("resume started",e),this._offlineProvider.setSessionData(e).then(function(){var n=t._downloads[e];t._recoverEntry(e),n.state===v.PAUSED&&(n.state=v.RESUMED,t._offlineProvider.resume(e).then(function(o){n.state=[o.downloadStatus,o.ob].includes(v.ENDED)?v.ENDED:v.PAUSED,t._dbManager.update("entriesMap",e,t._offlineProvider.prepareItemForStorage(n)).then(function(){return r._logger.debug("resume ended / paused",e),Promise.resolve({state:n.state,entryId:e})})}))}).catch(function(e){t._onError(new l.Error(l.Error.Severity.RECOVERABLE,l.Error.Category.STORAGE,l.Error.Code.RESUME_REJECTED,e))})}},{key:"renewLicense",value:function(e){var t=this;return r._logger.debug("renew license started",e),new c.Provider(this._config.provider).getMediaConfig({entryId:e}).then(function(n){return!l.Utils.Object.hasPropertyPath(n,"sources.dash")&&n.sources.dash.length>0&&t._onError(new l.Error(l.Error.Severity.RECOVERABLE,l.Error.Category.STORAGE,l.Error.Code.RENEW_LICENSE_FAILED,"not enough data from the media provider")),t._offlineProvider.setSessionData(e,n).then(function(){var n=t._downloads[e];n.state===v.ENDED&&t._offlineProvider.renewLicense(e).then(function(o){t._dbManager.update("entriesMap",e,t._offlineProvider.prepareItemForStorage(n)).then(function(){return r._logger.debug("renew license ended",e),Promise.resolve({state:n.state,entryId:e,expiration:o})})})})}).catch(function(e){t._onError(new l.Error(l.Error.Severity.RECOVERABLE,l.Error.Category.STORAGE,l.Error.Code.RENEW_LICENSE_FAILED,e))})}},{key:"download",value:function(e,t){var n=this;return new Promise(function(o){r._logger.debug("download start",e);var a=n._downloads[e];if(a.state)return void n._onError(new l.Error(l.Error.Severity.RECOVERABLE,l.Error.Category.STORAGE,l.Error.Code.ENTRY_ALREADY_EXISTS,e));n._doesEntryExists(e).then(function(i){if(i)return void n._onError(new l.Error(l.Error.Severity.RECOVERABLE,l.Error.Category.STORAGE,l.Error.Code.ENTRY_ALREADY_EXISTS,e));a.state=v.DOWNLOADING,n._addDownloadParam(e),n._offlineProvider.download(e,t).then(function(){return n._dbManager.update("entriesMap",e,n._offlineProvider.prepareItemForStorage(a))}).then(function(){r._logger.debug("download ended / paused",e),o({state:a.state,entryId:e})}).catch(function(e){n._onError(new l.Error(l.Error.Severity.RECOVERABLE,l.Error.Category.STORAGE,l.Error.Code.DOWNLOAD_ABORTED,e))})})})}},{key:"remove",value:function(e){var t=this;return r._logger.debug("remove start",e),this._offlineProvider.setSessionData(e).then(function(){var n=t._downloads[e];n.state||t._onError(new l.Error(l.Error.Severity.RECOVERABLE,l.Error.Category.STORAGE,l.Error.Code.REQUESTED_ITEM_NOT_FOUND)),t._offlineProvider.remove(e).then(function(){t._dbManager.remove("entriesMap",e).then(function(){return delete t._downloads[e],r._logger.debug("remove ended",e),Promise.resolve({state:n.state,entryId:e})})})}).catch(function(e){t._onError(new l.Error(l.Error.Severity.RECOVERABLE,l.Error.Category.STORAGE,l.Error.Code.REMOVE_REJECTED,e))})}},{key:"removeAll",value:function(){var e=this,r=[];return this.getAllDownloads().then(function(t){return t.forEach(function(t){r.push(e.remove(t.sources.id))}),e._downloads={},Promise.all(r)})}},{key:"pauseAll",value:function(){var e=this,r=[];return this.getAllDownloads().then(function(t){return t.forEach(function(t){r.push(e.pause(t.sources.id))}),Promise.all(r)})}},{key:"getExpiration",value:function(e){return this.getDownloadedMediaConfig(e).then(function(e){return e.expiration})}},{key:"getDownloadedMediaConfig",value:function(e){return r._logger.debug("getDownloadedMediaConfig",e),this._dbManager.get("entriesMap",e)}},{key:"getAllDownloads",value:function(){var e=this;return this._isDBSynced?Promise.resolve(this._getReducedDownloadObjectsData()):this._dbManager.getAll("entriesMap").then(function(r){return e._isDBSynced=!0,r.forEach(function(r){var t=r.sources.id;e._downloads[t]||(e._downloads[t]=r,e._recoverEntry(t))}),Promise.resolve(e._getReducedDownloadObjectsData())})}},{key:"_addDownloadParam",value:function(e){var r=this._downloads[e];r.sources.dash[0].url=r.sources.dash[0].url+"?playbackType=offline"}},{key:"_doesEntryExists",value:function(e){var r=this;return new Promise(function(t){return r.getDownloadedMediaConfig(e).then(function(e){t(e&&e.state)})})}},{key:"_removeNotRelevantSources",value:function(e){for(var r in e.sources){var t=e.sources[r];p.includes(r)?delete e.sources[r]:"dash"===r&&(t=t.slice(1))}return Object.assign({},e)}},{key:"_recoverEntry",value:function(e){var r=this._downloads[e];r&&!r.recovered&&(r.state!==v.DOWNLOADING&&r.state!==v.RESUMED||(r.state=v.PAUSED),r.recovered=!0)}},{key:"_getReducedDownloadObjectsData",value:function(){var e=this;return Object.keys(this._downloads).map(function(r){var t=e._downloads[r];return{id:t.sources.id,metadata:t.sources.metadata,poster:t.sources.poster,expectedSize:t.expectedSize,size:t.size,expiration:t.expiration,state:t.state}})}},{key:"_onError",value:function(e){var r=new l.FakeEvent(l.EventType.ERROR,e);this.dispatchEvent(r)}},{key:"destroy",value:function(){this._eventManager.destroy()}},{key:"reset",value:function(){}}]),r}(l.FakeEventTarget);h._logger=(0,f.default)("OfflineManager"),r.default=h},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function a(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function i(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0}),r.ShakaOfflineProvider=r.PROGRESS_EVENT=void 0;var u=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),s=t(6),c=n(s),l=t(2),d=n(l),f=t(1),g=t(0),E=n(g),v={DOWNLOADING:"downloading",PAUSED:"paused",RESUMED:"resumed",ENDED:"ended"},p=r.PROGRESS_EVENT="progress";(r.ShakaOfflineProvider=function(e){function r(e){o(this,r);var t=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return r._logger.debug("ShakaOfflineProvider created"),t._dtgVideoElement=document.createElement("video"),c.default.polyfill.installAll(),t._dtgShaka=new c.default.Player(t._dtgVideoElement),t._configureShakaPlayer(),t._dtgShaka.addEventListener(f.EventType.ERROR,t._onShakaError),t._dbManager=new d.default({adapterName:"shaka",adapterVersion:"",playerVersion:""}),t._downloads=e,t}return i(r,e),u(r,[{key:"_configureShakaPlayer",value:function(){this._dtgShaka.configure({streaming:{retryParameters:{timeout:0,maxAttempts:100,baseDelay:1e3,backoffFactor:2,fuzzFactor:.5}}})}},{key:"download",value:function(e,t){var n=this;return new Promise(function(o,a){r._logger.debug("download",e);var i=n._downloads[e];n._configureDrmIfNeeded(e),i.storage=n._initStorage(e,t),i.storage.storeManifest(i.sources.dash[0].url,{}).then(function(t){return r._logger.debug("after storage.storeManifest",e),i.state=v.DOWNLOADING,i.recovered=!0,i.sources.dash[0].url=t.offlineUri,i.expiration=t.expiration,i.expectedSize=t.expectedSize,i.size=0,n._dbManager.add("entriesMap",e,n.prepareItemForStorage(i))}).then(function(){return i.storage.download(i.sources.dash[0].url)}).then(function(e){i.size=e.size,i.state=e.downloadStatus,o()}).catch(function(e){a(new f.Error(f.Error.Severity.RECOVERABLE,f.Error.Category.STORAGE,f.Error.Code.DOWNLOAD_ABORTED,e))})})}},{key:"pause",value:function(e){return r._logger.debug("pause",e),this._downloads[e].storage.pause()}},{key:"resume",value:function(e){r._logger.debug("resume",e);var t=this._downloads[e];return t.storage.download(t.sources.dash[0].url)}},{key:"remove",value:function(e){var t=this;r._logger.debug("remove",e);var n=this._downloads[e],o=n.state===v.ENDED?Promise.resolve():this.pause(e),a=n.storePromise||Promise.resolve();return Promise.all([o,a]).then(function(){return n.storage=t._initStorage(e,{action:"remove"}),n.storage.remove(n.sources.dash[0].url)})}},{key:"renewLicense",value:function(e){r._logger.debug("renewLicense",e);var t=this._downloads[e];return this._configureDrmIfNeeded(e),t.storage=this._initStorage(e,{}),t.storage.renewLicense(t.sources.dash[0].url).then(function(e){return t.expiration=e.expiration,Promise.resolve(e.expiration)})}},{key:"getDataByEntry",value:function(e){return this._dbManager.get("entriesMap",e)}},{key:"getAllDownloads",value:function(){return this._dbManager.getAll("entriesMap")}},{key:"_onShakaError",value:function(e){if(e&&e.detail){var t=e.detail;if(t.code===this.VIDEO_ERROR_CODE)return void r._logger.error(t);var n=new f.Error(t.severity,t.category,t.code,t.data);r._logger.error(n),this.dispatchEvent(new f.FakeEvent(f.EventType.ERROR,{detail:n}))}}},{key:"_configureDrmIfNeeded",value:function(e){r._logger.debug("configure drm if needed",e);var t=this._downloads[e],n=t.sources.dash[0].drmData;if(n){var o={};n.forEach(function(e){o[e.scheme]=e.licenseUrl}),this._dtgShaka.configure({drm:{servers:o}})}else this._dtgShaka.configure({})}},{key:"prepareItemForStorage",value:function(e){var r=["storage","url","mimetype","storePromise","recovered"],t=Object.assign({},e);for(var n in t)r.includes(n)&&delete t[n];var o=e.sources.dash[0];return o.localSource=!0,e.sources.dash=[o],t}},{key:"setSessionData",value:function(e,t){var n=this;return r._logger.debug("set session data",e),new Promise(function(r,t){return n._downloads[e]?r():n.getDataByEntry(e).then(function(t){var o=Object.assign({},t);return n._downloads[e]=o,r()}).catch(function(e){t(e)})}).then(function(){var r=n._downloads[e];return r.storage=r.storage?r.storage:n._initStorage(e),n._updateDrmDataIfNeeded(e,t),Promise.resolve()}).catch(function(e){Promise.reject(e)})}},{key:"_updateDrmDataIfNeeded",value:function(e,r){if(r){var t=this._downloads[e];t.sources.dash[0].drmData&&r.sources.dash[0].drmData&&(t.sources.dash[0].drmData=r.sources.dash[0].drmData)}}},{key:"_trackSelectionCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(t){var n=t.filter(function(e){return"text"===e.type}),o=t.filter(function(e){return e.language===r&&"text"!==e.type});return t=o.length>0?o:t,[t.reduce(function(r,t){return Math.abs(t.bandwidth-e)<Math.abs(r.bandwidth-e)?t:r})].concat(n)}}},{key:"_initStorage",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r._logger.debug("init storage",e);var n=new c.default.offline.Storage(this._dtgShaka),o={usePersistentLicense:!0};return(t.bitrate||t.language)&&(o.trackSelectionCallback=this._trackSelectionCallback(t.bitrate,t.language)),t.action&&"remove"===t.action||(o.progressCallback=this._setDownloadProgress(e)),n.configure(o),n}},{key:"_setDownloadProgress",value:function(e){var t=this;return r._logger.debug("set download progress",e),function(r,n){var o=t._downloads[e];o.size=r.size,t._dbManager.update("entriesMap",e,t.prepareItemForStorage(o));var a=new f.FakeEvent(p,{detail:{content:r,progress:100*n,entryId:e},details:{content:r,progress:100*n,entryId:e}});t.dispatchEvent(a)}}}]),r}(f.FakeEventTarget))._logger=(0,E.default)("ShakaOfflineProvider")},function(e,t){e.exports=r},function(e,r,t){"use strict";!function(){function r(e){return Array.prototype.slice.call(e)}function t(e){return new Promise(function(r,t){e.onsuccess=function(){r(e.result)},e.onerror=function(){t(e.error)}})}function n(e,r,n){var o,a=new Promise(function(a,i){o=e[r].apply(e,n),t(o).then(a,i)});return a.request=o,a}function o(e,r,t){var o=n(e,r,t);return o.then(function(e){if(e)return new l(e,o.request)})}function a(e,r,t){t.forEach(function(t){Object.defineProperty(e.prototype,t,{get:function(){return this[r][t]},set:function(e){this[r][t]=e}})})}function i(e,r,t,o){o.forEach(function(o){o in t.prototype&&(e.prototype[o]=function(){return n(this[r],o,arguments)})})}function u(e,r,t,n){n.forEach(function(n){n in t.prototype&&(e.prototype[n]=function(){return this[r][n].apply(this[r],arguments)})})}function s(e,r,t,n){n.forEach(function(n){n in t.prototype&&(e.prototype[n]=function(){return o(this[r],n,arguments)})})}function c(e){this._index=e}function l(e,r){this._cursor=e,this._request=r}function d(e){this._store=e}function f(e){this._tx=e,this.complete=new Promise(function(r,t){e.oncomplete=function(){r()},e.onerror=function(){t(e.error)},e.onabort=function(){t(e.error)}})}function g(e,r,t){this._db=e,this.oldVersion=r,this.transaction=new f(t)}function E(e){this._db=e}a(c,"_index",["name","keyPath","multiEntry","unique"]),i(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),s(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),a(l,"_cursor",["direction","key","primaryKey","value"]),i(l,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(e){e in IDBCursor.prototype&&(l.prototype[e]=function(){var r=this,n=arguments;return Promise.resolve().then(function(){return r._cursor[e].apply(r._cursor,n),t(r._request).then(function(e){if(e)return new l(e,r._request)})})})}),d.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},d.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},a(d,"_store",["name","keyPath","indexNames","autoIncrement"]),i(d,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),s(d,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),u(d,"_store",IDBObjectStore,["deleteIndex"]),f.prototype.objectStore=function(){return new d(this._tx.objectStore.apply(this._tx,arguments))},a(f,"_tx",["objectStoreNames","mode"]),u(f,"_tx",IDBTransaction,["abort"]),g.prototype.createObjectStore=function(){return new d(this._db.createObjectStore.apply(this._db,arguments))},a(g,"_db",["name","version","objectStoreNames"]),u(g,"_db",IDBDatabase,["deleteObjectStore","close"]),E.prototype.transaction=function(){return new f(this._db.transaction.apply(this._db,arguments))},a(E,"_db",["name","version","objectStoreNames"]),u(E,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(e){[d,c].forEach(function(t){t.prototype[e.replace("open","iterate")]=function(){var t=r(arguments),n=t[t.length-1],o=this._store||this._index,a=o[e].apply(o,t.slice(0,-1));a.onsuccess=function(){n(a.result)}}})}),[c,d].forEach(function(e){e.prototype.getAll||(e.prototype.getAll=function(e,r){var t=this,n=[];return new Promise(function(o){t.iterateCursor(e,function(e){return e?(n.push(e.value),void 0!==r&&n.length==r?void o(n):void e.continue()):void o(n)})})})});var v={open:function(e,r,t){var o=n(indexedDB,"open",[e,r]),a=o.request;return a.onupgradeneeded=function(e){t&&t(new g(a.result,e.oldVersion,a.transaction))},o.then(function(e){return new E(e)})},delete:function(e){return n(indexedDB,"deleteDatabase",[e])}};e.exports=v,e.exports.default=e.exports}()},function(e,r,t){var n,o;/*!
 * js-logger - http://github.com/jonnyreeves/js-logger
 * Jonny Reeves, http://jonnyreeves.co.uk/
 * js-logger may be freely distributed under the MIT license.
 */
!function(a){"use strict";var i={};i.VERSION="1.4.1";var u,s={},c=function(e,r){return function(){return r.apply(e,arguments)}},l=function(){var e,r,t=arguments,n=t[0];for(r=1;r<t.length;r++)for(e in t[r])e in n||!t[r].hasOwnProperty(e)||(n[e]=t[r][e]);return n},d=function(e,r){return{value:e,name:r}};i.DEBUG=d(1,"DEBUG"),i.INFO=d(2,"INFO"),i.TIME=d(3,"TIME"),i.WARN=d(4,"WARN"),i.ERROR=d(8,"ERROR"),i.OFF=d(99,"OFF");var f=function(e){this.context=e,this.setLevel(e.filterLevel),this.log=this.info};f.prototype={setLevel:function(e){e&&"value"in e&&(this.context.filterLevel=e)},getLevel:function(){return this.context.filterLevel},enabledFor:function(e){var r=this.context.filterLevel;return e.value>=r.value},debug:function(){this.invoke(i.DEBUG,arguments)},info:function(){this.invoke(i.INFO,arguments)},warn:function(){this.invoke(i.WARN,arguments)},error:function(){this.invoke(i.ERROR,arguments)},time:function(e){"string"==typeof e&&e.length>0&&this.invoke(i.TIME,[e,"start"])},timeEnd:function(e){"string"==typeof e&&e.length>0&&this.invoke(i.TIME,[e,"end"])},invoke:function(e,r){u&&this.enabledFor(e)&&u(r,l({level:e},this.context))}};var g=new f({filterLevel:i.OFF});!function(){var e=i;e.enabledFor=c(g,g.enabledFor),e.debug=c(g,g.debug),e.time=c(g,g.time),e.timeEnd=c(g,g.timeEnd),e.info=c(g,g.info),e.warn=c(g,g.warn),e.error=c(g,g.error),e.log=e.info}(),i.setHandler=function(e){u=e},i.setLevel=function(e){g.setLevel(e);for(var r in s)s.hasOwnProperty(r)&&s[r].setLevel(e)},i.getLevel=function(){return g.getLevel()},i.get=function(e){return s[e]||(s[e]=new f(l({name:e},g.context)))},i.createDefaultHandler=function(e){e=e||{},e.formatter=e.formatter||function(e,r){r.name&&e.unshift("["+r.name+"]")};var r={},t=function(e,r){Function.prototype.apply.call(e,console,r)};return"undefined"==typeof console?function(){}:function(n,o){n=Array.prototype.slice.call(n);var a,u=console.log;o.level===i.TIME?(a=(o.name?"["+o.name+"] ":"")+n[0],"start"===n[1]?console.time?console.time(a):r[a]=(new Date).getTime():console.timeEnd?console.timeEnd(a):t(u,[a+": "+((new Date).getTime()-r[a])+"ms"])):(o.level===i.WARN&&console.warn?u=console.warn:o.level===i.ERROR&&console.error?u=console.error:o.level===i.INFO&&console.info?u=console.info:o.level===i.DEBUG&&console.debug&&(u=console.debug),e.formatter(n,o),t(u,n))}},i.useDefaults=function(e){i.setLevel(e&&e.defaultLevel||i.DEBUG),i.setHandler(i.createDefaultHandler(e))},n=i,void 0!==(o="function"==typeof n?n.call(r,t,r,e):n)&&(e.exports=o)}()},function(e,r){e.exports=t}]).default});
//# sourceMappingURL=playkit-offline-manager.js.map