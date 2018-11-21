window.__require=function e(t,o,n){function c(r,a){if(!o[r]){if(!t[r]){var s=r.split("/");if(s=s[s.length-1],!t[s]){var u="function"==typeof __require&&__require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+r+"'")}}var l=o[r]={exports:{}};t[r][0].call(l.exports,function(e){return c(t[r][1][e]||e)},l,l.exports,e,t,o,n)}return o[r].exports}for(var i="function"==typeof __require&&__require,r=0;r<n.length;r++)c(n[r]);return c}({AutoBind:[function(e,t,o){"use strict";cc._RF.push(t,"4c0dcU5MllEs4eLpxMEeO89","AutoBind"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("../Tools");o.autoBind=function(e){return function(t,o){n.log(e+", , "+t+", "+o),t.setAutoBind(!0),t._autoBindKey||(t._autoBindKey={}),t._autoBindKey[o]=e}},cc._RF.pop()},{"../Tools":"Tools"}],BaseComponent:[function(e,t,o){"use strict";cc._RF.push(t,"392ae9rtz1BgLDf/u8dLm9a","BaseComponent"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("./Tools"),c=e("../GameManager"),i=cc._decorator,r=i.ccclass,a=(i.property,function(e){function t(){var t=e.call(this)||this;return t.init(),t}return __extends(t,e),t.prototype.getAutoBind=function(){return this._isAutoBind},t.prototype.setAutoBind=function(e){this._isAutoBind=e},t.prototype.__preload=function(){this._isAutoBind&&(n.logTime("autoBind ==>"+this.name),this.autoBind(this.node,this),n.logTime("autoBind ==>"+this.name,!0))},t.prototype.autoBind=function(e,t){var o=this;e.children.forEach(function(e){var n=e.name,c=o._autoBindKey&&o._autoBindKey[n];c&&(c===cc.Node?t[n]=e:t[n]=e.getComponent(c)),o.autoBind(e,t)})},t.prototype.init=function(){},t.prototype.getChild=function(e){if(e)return cc.find(e,this.node);n.errlog("getChild "+e+" not found")},t.prototype.getComp=function(e,t){var o=this.getChild(e);if(o){var c=o.getComponent(t);if(c)return c;n.errlog("getComp "+e+" not found componment")}},t.prototype.getEasy=function(e,t){if(e){var o=cc.find(e,this.node);return t&&o?o.getComponent(t):o}n.errlog("getChild "+e+" not found")},t.prototype.bindTouch=function(e,t,o){void 0===o&&(o=cc.Node.EventType.TOUCH_END);var n=e instanceof cc.Node?e:e.node;return n&&n.on(o,t,this),e},t.prototype.send=function(e,t,o){return new Promise(function(n,i){c.Net.send(e,t,function(e){o&&o(e),n(e)})})},t.prototype.regMsg=function(e,t){return new Promise(function(o,n){c.Net.regMsg(e,function(e){t&&t(e),o(e)})})},t=__decorate([r],t)}(cc.Component));o.default=a,cc._RF.pop()},{"../GameManager":"GameManager","./Tools":"Tools"}],BaseCtrl:[function(e,t,o){"use strict";cc._RF.push(t,"1e8d3gNF/RMuKWaE26cCMld","BaseCtrl"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("./BaseComponent"),c=cc._decorator,i=c.ccclass,r=(c.property,function(e){function t(){return e.call(this)||this}return __extends(t,e),t=__decorate([i],t)}(n.default));o.default=r,cc._RF.pop()},{"./BaseComponent":"BaseComponent"}],BaseData:[function(e,t,o){"use strict";cc._RF.push(t,"abfecA95QVHKZ8nvC7lmYyc","BaseData"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("./Tools"),c=function(){function e(){this._events=[]}return e.prototype.on=function(e,t){this._events[e]||(this._events[e]=[]),this._events[e].push(t)},e.prototype.emit=function(e,t){var o=this;if(this._events[e]){var c=this._events[e].slice();c.reverse().forEach(function(i,r){try{i?i(t):(n.errlog("\u89e6\u53d1\u56de\u8c03\u4e8b\u4ef6\u5f02\u5e38"),o._events[e].splice(c.length-1-r,1))}catch(t){n.errlog("\u89e6\u53d1\u56de\u8c03\u4e8b\u4ef6\u5f02\u5e38:"+t),o._events[e].splice(c.length-1-r,1)}})}},e}();o.default=c,cc._RF.pop()},{"./Tools":"Tools"}],BaseScene:[function(e,t,o){"use strict";cc._RF.push(t,"aa7b5TMeTtMjbQkrXxBj/m0","BaseScene"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("./BaseComponent"),c=cc._decorator,i=c.ccclass,r=(c.property,function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.onLoad=function(){},t=__decorate([i],t)}(n.default));o.default=r,cc._RF.pop()},{"./BaseComponent":"BaseComponent"}],BattleScene:[function(e,t,o){"use strict";cc._RF.push(t,"40b771hoV9H3ZD1lxzDA272","BattleScene"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("../core/BaseScene"),c=e("../component/JoyStickCmp"),i=e("../core/Tools"),r=e("../core/decorator/AutoBind"),a=e("../util/Utils"),s=cc._decorator,u=s.ccclass,l=s.property,p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.preloadPrefab=[],t}return __extends(t,e),t.prototype.onLoad=function(){var e=this;this.bindTouch(this.fireBtn,function(){return e.onFire(1)}),this.bindTouch(this.fireBtn2,function(){return e.onFire(2)}),this.joyStick.setChangeListener(this.joyEvent.bind(this)),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.keyBoardEvent,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.keyBoardEvent,this),this.loadHero()},t.prototype.loadHero=function(){var e=this;a.default.insPrefab("prefab/battle/HeroPrefab").then(function(t){e.bgLayer.addChild(t),e.hero=t.getComponent("HeroCtrl")})},t.prototype.onFire=function(e){this.hero&&this.hero.attack(e)},t.prototype.keyBoardEvent=function(e){if("keydown"===e.type)switch(e.keyCode){case cc.macro.KEY.a:case cc.macro.KEY.left:this.joyEvent(180);break;case cc.macro.KEY.d:case cc.macro.KEY.right:this.joyEvent(0);break;case cc.macro.KEY.s:case cc.macro.KEY.down:this.joyEvent(270);break;case cc.macro.KEY.w:case cc.macro.KEY.up:this.joyEvent(90)}else this.joyEvent(null)},t.prototype.joyEvent=function(e){i.log(e),this.hero&&this.hero.heroMove(e)},__decorate([l([cc.Prefab])],t.prototype,"preloadPrefab",void 0),__decorate([r.autoBind(cc.Button)],t.prototype,"fireBtn",void 0),__decorate([r.autoBind(cc.Button)],t.prototype,"fireBtn2",void 0),__decorate([r.autoBind(c.default)],t.prototype,"joyStick",void 0),__decorate([r.autoBind(cc.Node)],t.prototype,"bgLayer",void 0),t=__decorate([u],t)}(n.default);o.default=p,cc._RF.pop()},{"../component/JoyStickCmp":"JoyStickCmp","../core/BaseScene":"BaseScene","../core/Tools":"Tools","../core/decorator/AutoBind":"AutoBind","../util/Utils":"Utils"}],GameConfig:[function(e,t,o){"use strict";cc._RF.push(t,"91b89WjakpOGK7NvircpgeR","GameConfig"),Object.defineProperty(o,"__esModule",{value:!0}),o.ServerUrl="http://193.112.105.97:5555",o.Msg={REQ_LOGIN:1001,REQ_JOINHOUSE:1002,REQ_BATTLE:1003,RES_LOGIN:2001},cc._RF.pop()},{}],GameDataManager:[function(e,t,o){"use strict";cc._RF.push(t,"393b2QnMc5DeIocuc5n8DMq","GameDataManager"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("./PlayerData"),c=function(){function e(){this._player=new n.default}return Object.defineProperty(e.prototype,"player",{get:function(){return this._player},enumerable:!0,configurable:!0}),e.prototype.regMsg=function(){},e}();o.default=c,cc._RF.pop()},{"./PlayerData":"PlayerData"}],GameManager:[function(e,t,o){"use strict";cc._RF.push(t,"39921CEWRpMCpDBfAQ+wu79","GameManager"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("./core/UIManager"),c=e("./core/NetManager"),i=e("./data/GameDataManager"),r=cc._decorator,a=r.ccclass,s=(r.property,function(){function e(){this.gameSize=new cc.Size(1334,750)}var t;return t=e,Object.defineProperty(e,"Ins",{get:function(){return t._gameManager||(t._gameManager=new t,t._gameManager.init()),t._gameManager},enumerable:!0,configurable:!0}),e.prototype.init=function(){cc.debug.setDisplayStats(!1),this.uiManager=new n.default,this.netMgr=new c.default,this.dataMgr=new i.default},e=t=__decorate([a],e)}());o.default=s,o.Game=s.Ins,o.UIMgr=o.Game.uiManager,o.Net=o.Game.netMgr,o.Data=o.Game.dataMgr,cc._RF.pop()},{"./core/NetManager":"NetManager","./core/UIManager":"UIManager","./data/GameDataManager":"GameDataManager"}],HeroCtrl:[function(e,t,o){"use strict";cc._RF.push(t,"285e2mb0wJKFJBX1Rsz5aSm","HeroCtrl"),Object.defineProperty(o,"__esModule",{value:!0});var n,c=e("../../core/BaseCtrl"),i=e("../../core/decorator/AutoBind"),r=e("../../core/Tools"),a=cc._decorator,s=a.ccclass;a.property;(function(e){e[e.Idle=0]="Idle",e[e.Run=1]="Run",e[e.Attack=2]="Attack"})(n=o.HeroState||(o.HeroState={}));var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.speed=300,t.offset=cc.v2(0,0),t.curState=n.Idle,t}return __extends(t,e),t.prototype.onLoad=function(){this.clockAction()},t.prototype.clockAction=function(){this.clockSprite.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5,1.2),cc.scaleTo(.5,1))))},t.prototype.heroMove=function(e){if(null!==e){var t=r.changeAngle(Math.PI/180*(e+90),0,Math.PI/180*90);this.stoneKing.node.setRotation(t.qw,t.qx,t.qy,t.qz),this.offset=0===e||180===e||90===e?cc.v2(Math.floor(Math.cos(Math.PI/180*e)),Math.floor(Math.sin(Math.PI/180*e))):270===e?cc.v2(Math.ceil(Math.cos(Math.PI/180*e)),Math.floor(Math.sin(Math.PI/180*e))):cc.v2(Math.cos(Math.PI/180*e),Math.sin(Math.PI/180*e))}else this.offset=cc.v2(0,0)},t.prototype.update=function(e){var t=1;this.curState!==n.Attack?0===this.offset.x&&0===this.offset.y?this.idle():this.run():t=.05;var o=this.node.x+this.offset.x*this.speed*e*t,c=this.node.y+this.offset.y*this.speed*e*t;this.node.setPosition(o,c)},t.prototype.attack=function(e){var t=this;this.curState!==n.Attack&&(this.curState=n.Attack,this.scheduleOnce(function(){t.idle()},.2))},t.prototype.idle=function(){this.curState!==n.Idle&&(this.curState=n.Idle)},t.prototype.run=function(){this.curState!==n.Run&&(this.curState=n.Run)},__decorate([i.autoBind(cc.SkeletonAnimation)],t.prototype,"stoneKing",void 0),__decorate([i.autoBind(cc.Sprite)],t.prototype,"clockSprite",void 0),__decorate([i.autoBind(cc.Label)],t.prototype,"nameLabel",void 0),t=__decorate([s],t)}(c.default);o.default=u,cc._RF.pop()},{"../../core/BaseCtrl":"BaseCtrl","../../core/Tools":"Tools","../../core/decorator/AutoBind":"AutoBind"}],HomeScene:[function(e,t,o){"use strict";cc._RF.push(t,"555d7DXO5VIi78Q/8tH2UJ7","HomeScene"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("../core/BaseScene"),c=e("../core/decorator/AutoBind"),i=e("../util/Utils"),r=e("../GameManager"),a=e("../core/I18nManager"),s=e("../GameConfig"),u=cc._decorator,l=u.ccclass,p=(u.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.onLoad=function(){this.bindTouch(this.fightBtn,this.enterHouse),this.bindTouch(this.activityFightBtn,function(){i.default.tip(a.i18n("\u975e\u5e38\u62b1\u6b49!\u53ea\u6709\u5c0a\u8d35\u7684VIP\u624d\u6709\u8d44\u683c\u8fdb\u5165."))}),this.onRegMessage()},t.prototype.onRegMessage=function(){},t.prototype.enterHouse=function(){var e=this;this.send(s.Msg.REQ_JOINHOUSE,{roleType:1}).then(function(t){t.result&&e.enterBattleScene()})},t.prototype.enterBattleScene=function(){i.default.loading(),r.UIMgr.pushScenePre("scene/BattleScene",function(){i.default.hideLoading()})},__decorate([c.autoBind(cc.Button)],t.prototype,"fightBtn",void 0),__decorate([c.autoBind(cc.Button)],t.prototype,"activityFightBtn",void 0),t=__decorate([l],t)}(n.default));o.default=p,cc._RF.pop()},{"../GameConfig":"GameConfig","../GameManager":"GameManager","../core/BaseScene":"BaseScene","../core/I18nManager":"I18nManager","../core/decorator/AutoBind":"AutoBind","../util/Utils":"Utils"}],I18nManager:[function(e,t,o){"use strict";cc._RF.push(t,"a5a23uqC1RJ0o7krwI5fd1S","I18nManager"),Object.defineProperty(o,"__esModule",{value:!0}),o.i18n=function(e){return e},cc._RF.pop()},{}],JoyStickCmp:[function(e,t,o){"use strict";cc._RF.push(t,"8a024emck1PNrav2yF226Us","JoyStickCmp"),Object.defineProperty(o,"__esModule",{value:!0});var n,c,i,r=e("../core/BaseComponent"),a=e("../core/Tools"),s=cc._decorator,u=s.ccclass,l=s.property;(function(e){e[e.DEFAULT=0]="DEFAULT",e[e.FOLLOW=1]="FOLLOW"})(n||(n={})),function(e){e[e.FOUR=0]="FOUR",e[e.EIGHT=1]="EIGHT",e[e.ALL=2]="ALL"}(c||(c={})),function(e){e[e.Center=null]="Center",e[e.Up=90]="Up",e[e.Down=270]="Down",e[e.Left=180]="Left",e[e.Right=0]="Right",e[e.LeftUp=135]="LeftUp",e[e.LeftDown=225]="LeftDown",e[e.RightUp=45]="RightUp",e[e.RightDown=315]="RightDown"}(i=o.Dir||(o.Dir={}));var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.stickBar=null,t.stickBg=null,t.radius=0,t.touchType=n.DEFAULT,t.directionType=c.ALL,t.defaultOpacity=200,t.touchArea=null,t.curAngle=0,t.distance=0,t.threshold=10,t.isTrigger=!1,t}return __extends(t,e),t.prototype.onLoad=function(){if(this.node.opacity=this.defaultOpacity,this.initPos=this.node.position,0===this.radius&&(this.radius=this.stickBg.width*this.stickBg.scale/2),!this.touchArea){var e=cc.find("Canvas");e?this.touchArea=e:(this.touchArea=new cc.Node,this.touchArea.parent=this.node.parent,this.touchArea.setContentSize(2e3,2e3))}this.registerTouch()},t.prototype.setChangeListener=function(e){this.changeCallback=e},t.prototype.registerTouch=function(){var e=this;this.touchArea.on(cc.Node.EventType.TOUCH_START,function(t){e.onTouchStart(t)},this),this.touchArea.on(cc.Node.EventType.TOUCH_MOVE,function(t){e.onTouchMove(t)},this),this.touchArea.on(cc.Node.EventType.TOUCH_END,function(t){e.onTouchEnd(t)},this),this.touchArea.on(cc.Node.EventType.TOUCH_CANCEL,function(t){e.onTouchCancel(t)},this)},t.prototype.onTouchStart=function(e){if(this.touchType==n.FOLLOW){var t=this.node.parent.convertToNodeSpaceAR(e.touch.getLocation());return this.node.setPosition(t),void(this.isTrigger=!0)}var o=(t=this.node.convertToNodeSpaceAR(e.touch.getLocation())).sub(cc.v2(0,0)).mag();if(o<this.radius&&o>this.threshold)return this.node.opacity=255,this.stickBar.setPosition(t),this.updateAngle(t),void(this.isTrigger=!0);this.isTrigger=!1},t.prototype.onTouchMove=function(e){if(this.isTrigger){var t=this.node.convertToNodeSpaceAR(e.touch.getLocation()),o=t.sub(cc.v2(0,0)).mag();if(this.radius>=o)o>this.threshold?(this.node.opacity=255,this.stickBar.setPosition(t),this.updateAngle(t)):(this.node.opacity=this.defaultOpacity,this.stickBar.setPosition(cc.v2(0,0)),this.curAngle=null,this.emitAngle(this.curAngle));else{var n=Math.cos(this.calcuRadian(t))*this.radius,c=Math.sin(this.calcuRadian(t))*this.radius;t.y<0&&(c*=-1),this.stickBar.setPosition(cc.v2(n,c)),this.updateAngle(t)}}},t.prototype.onTouchEnd=function(e){this.isTrigger&&(this.isTrigger=!1,this.resetStick())},t.prototype.onTouchCancel=function(e){this.resetStick()},t.prototype.updateAngle=function(e){this.curAngle=Math.floor(180*this.calcuRadian(e)/Math.PI),e.x>0&&e.y<0||e.x<0&&e.y<0?this.curAngle=360-this.curAngle:e.x<0&&0==e.y?this.curAngle=180:e.x>0&&0==e.y?this.curAngle=0:0==e.x&&e.y>0?this.curAngle=90:0==e.x&&e.y<0&&(this.curAngle=270),this.formatAngle()},t.prototype.formatAngle=function(){switch(this.directionType){case c.FOUR:this.curAngle=this.fourDirections();break;case c.EIGHT:this.curAngle=this.eightDirections();break;case c.ALL:this.curAngle=this.curAngle;break;default:this.curAngle=null}this.emitAngle(this.curAngle)},t.prototype.fourDirections=function(){return this.curAngle>=45&&this.curAngle<=135?i.Up:this.curAngle>=225&&this.curAngle<=315?i.Down:this.curAngle<=225&&this.curAngle>=180||this.curAngle>=135&&this.curAngle<=180?i.Left:this.curAngle<=360&&this.curAngle>=315||this.curAngle>=0&&this.curAngle<=45?i.Right:void 0},t.prototype.eightDirections=function(){return this.curAngle>=67.5&&this.curAngle<=112.5?i.Up:this.curAngle>=247.5&&this.curAngle<=292.5?i.Down:this.curAngle<=202.5&&this.curAngle>=180||this.curAngle>=157.5&&this.curAngle<=180?i.Left:this.curAngle<=360&&this.curAngle>=337.5||this.curAngle>=0&&this.curAngle<=22.5?i.Right:this.curAngle>=112.5&&this.curAngle<=157.5?i.LeftUp:this.curAngle>=22.5&&this.curAngle<=67.5?i.RightUp:this.curAngle>=202.5&&this.curAngle<=247.5?i.LeftDown:this.curAngle>=292.5&&this.curAngle<=337.5?i.RightDown:void 0},t.prototype.emitAngle=function(e){if(this.changeCallback)try{this.changeCallback(e)}catch(e){a.errlog(e)}},t.prototype.resetStick=function(){this.node.opacity=this.defaultOpacity,this.touchType==n.FOLLOW&&(this.node.position=this.initPos),this.stickBar.setPosition(cc.v2(0,0)),this.curAngle=null,this.emitAngle(this.curAngle)},t.prototype.calcuRadian=function(e){var t=Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2));return 0===t?0:Math.acos(e.x/t)},t.prototype.onDestroy=function(){this.changeCallback=null},__decorate([l(cc.Node)],t.prototype,"stickBar",void 0),__decorate([l(cc.Node)],t.prototype,"stickBg",void 0),__decorate([l(cc.Float)],t.prototype,"radius",void 0),__decorate([l({type:cc.Enum(n)})],t.prototype,"touchType",void 0),__decorate([l({type:cc.Enum(c)})],t.prototype,"directionType",void 0),__decorate([l(cc.Integer)],t.prototype,"defaultOpacity",void 0),__decorate([l(cc.Node)],t.prototype,"touchArea",void 0),t=__decorate([u],t)}(r.default);o.default=p,cc._RF.pop()},{"../core/BaseComponent":"BaseComponent","../core/Tools":"Tools"}],KeyBoardControlCmp:[function(e,t,o){"use strict";cc._RF.push(t,"40bfcTXaUZGYJpH8VxQJQ/s","KeyBoardControlCmp"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("../core/BaseComponent"),c=cc._decorator,i=c.ccclass,r=(c.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t=__decorate([i],t)}(n.default));o.default=r,cc._RF.pop()},{"../core/BaseComponent":"BaseComponent"}],LanchScene:[function(e,t,o){"use strict";cc._RF.push(t,"2222fAzIghIcYqxMGL2+mnl","LanchScene"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("../core/BaseScene"),c=e("../core/decorator/AutoBind"),i=e("../GameManager"),r=e("../core/I18nManager"),a=e("../util/Utils"),s=e("../GameConfig"),u=cc._decorator,l=u.ccclass,p=u.property,h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.preloadPrefab=[],t}return __extends(t,e),t.prototype.onLoad=function(){this.bindTouch(this.startButton,this.connectServer),this.bindTouch(this.helpButton,function(){a.default.tip([r.i18n("\u6ca1\u94b1\u8bf7\u5ba2\u670d"),r.i18n("\u4f60\u8981\u6295\u8d44\u5417")])}),this.onRegMessage()},t.prototype.onRegMessage=function(){i.Net.regMsg(s.Msg.RES_LOGIN,function(e){i.Data.player.updateSelfPlayer(e)})},t.prototype.connectServer=function(){i.Net.connect(s.ServerUrl,this.enterHomeScene.bind(this))},t.prototype.enterHomeScene=function(){a.default.loading(),i.UIMgr.pushScenePre("scene/HomeScene",function(){a.default.hideLoading()})},__decorate([p([cc.Prefab])],t.prototype,"preloadPrefab",void 0),__decorate([c.autoBind(cc.Button)],t.prototype,"startButton",void 0),__decorate([c.autoBind(cc.Button)],t.prototype,"helpButton",void 0),t=__decorate([l],t)}(n.default);o.default=h,cc._RF.pop()},{"../GameConfig":"GameConfig","../GameManager":"GameManager","../core/BaseScene":"BaseScene","../core/I18nManager":"I18nManager","../core/decorator/AutoBind":"AutoBind","../util/Utils":"Utils"}],NetManager:[function(e,t,o){"use strict";cc._RF.push(t,"066cbnroPhKhbbHfNKTYW5Q","NetManager"),Object.defineProperty(o,"__esModule",{value:!0});var n,c=e("./Tools");(function(e){e[e.Connect=0]="Connect",e[e.Disconnect=1]="Disconnect"})(n=o.SocketState||(o.SocketState={}));var i=function(){function e(){this.listener=new Map}return e.prototype.connect=function(e,t){this.connectCallFunc=t,this.socket=io.connect(e,{"force new connection":!0}),this.socket.on("connect",this.onConnect.bind(this)),this.socket.on("message",this.onMessage.bind(this)),this.socket.on("disconnect",this.onDisconnect.bind(this)),this.socket.on("error",this.onError.bind(this))},e.prototype.onConnect=function(e){this.state=n.Connect,this.connectCallFunc&&"function"==typeof this.connectCallFunc&&this.connectCallFunc()},e.prototype.onMessage=function(e){try{var t=JSON.parse(e);this.pubMsg(t.id,t.content),c.log(t.id,t.content)}catch(e){c.log(e)}},e.prototype.onDisconnect=function(){this.state=n.Disconnect,c.log("socket disconnect")},e.prototype.onError=function(){c.log("socket error")},e.prototype.send=function(e,t,o){c.log("send",e,t),o&&"function"==typeof o&&this.regMsg(e,o);var n={};n.id=e,t&&(n.content=t),this.socket.emit(n.id,JSON.stringify(n))},e.prototype.regMsg=function(e,t){"function"==typeof t?(!1===this.listener.has(e)&&this.listener.set(e,new Map),this.listener.get(e).set(t,!0)):c.log("regMsg "+e+" callback isn't function")},e.prototype.unRegMsg=function(e,t){var o=this.listener.get(e);o&&(t?o.has(t)&&o.delete(t):this.listener.delete(e))},e.prototype.pubMsg=function(e,t){(c.log("recv",e,t),!1!==this.listener.has(e))&&this.listener.get(e).forEach(function(e,o,n){o(t)})},e}();o.default=i,cc._RF.pop()},{"./Tools":"Tools"}],PlayerData:[function(e,t,o){"use strict";cc._RF.push(t,"30b3fk+yLVK+rxQV9yBQSCC","PlayerData"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("../core/BaseData"),c=e("./model/PlayerModel"),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.updateSelfPlayer=function(e){this.selfPlayer=(new c.default).update(e.player)},t}(n.default);o.default=i,cc._RF.pop()},{"../core/BaseData":"BaseData","./model/PlayerModel":"PlayerModel"}],PlayerModel:[function(e,t,o){"use strict";cc._RF.push(t,"dbe76gDHCRMrK5Vj85VByhc","PlayerModel"),Object.defineProperty(o,"__esModule",{value:!0}),function(e){e[e.Self=1]="Self",e[e.Enemy=2]="Enemy"}(o.playerType||(o.playerType={})),function(e){e[e.Normal=0]="Normal",e[e.Luck=1]="Luck"}(o.playerState||(o.playerState={}));var n=function(){function e(){}return e.prototype.update=function(e){this.playerId=e.playerId,this.dir=e.dir,this.pos=e.pos,this.playerType=e.playerType,this.roleType=e.roleType,this.time=e.time,this.state=e.state},e}();o.default=n,cc._RF.pop()},{}],ToastCtrl:[function(e,t,o){"use strict";cc._RF.push(t,"68abcCUdllNwpixRzw3YL81","ToastCtrl"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("../core/BaseCtrl"),c=e("../core/decorator/AutoBind"),i=cc._decorator,r=i.ccclass,a=(i.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.showTime=.5,t}return __extends(t,e),t.prototype.onLoad=function(){},t.prototype.show=function(e){if(Array.isArray(e)){var t=e.join("\n");this.tipLabel.string=t}else this.tipLabel.string=e;this.action()},t.prototype.action=function(){var e=this;this.node.runAction(cc.spawn(cc.moveBy(1,cc.v2(0,100)),cc.sequence(cc.fadeIn(.25),cc.delayTime(this.showTime),cc.fadeOut(.25),cc.callFunc(function(){e.removeIt()}))))},t.prototype.removeIt=function(){this.node.removeFromParent()},__decorate([c.autoBind(cc.Label)],t.prototype,"tipLabel",void 0),t=__decorate([r],t)}(n.default));o.default=a,cc._RF.pop()},{"../core/BaseCtrl":"BaseCtrl","../core/decorator/AutoBind":"AutoBind"}],Tools:[function(e,t,o){"use strict";cc._RF.push(t,"e136bmbF2dEJ5ecW3ApHPz2","Tools"),Object.defineProperty(o,"__esModule",{value:!0}),o.logState=!1,o.log=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];o.logState&&console.log.apply(console,[e].concat(t))},o.errlog=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];o.logState&&console.log.apply(console,["ERROR: "+e].concat(t))},o.logTime=function(e,t){o.logState&&(t?console.timeEnd(e):console.time(e))},o.showInScene=function(e){var t=cc.director.getScene();if(t){var o=cc.director.getScene().getChildByName("logLabelNode");o||((o=new cc.Node).addComponent(cc.Label),o.name="logLabelNode",o.setAnchorPoint(0,0),t.addChild(o)),o.getComponent(cc.Label).string=e||""}},o.changeAngle=function(e,t,o){var n,c,i,r,a,s;return n=Math.cos(.5*o),c=Math.sin(.5*o),a=Math.cos(.5*t),{qx:n*(s=Math.sin(.5*t))*(i=Math.cos(.5*e))+c*a*(r=Math.sin(.5*e)),qy:n*a*r-c*s*i,qz:c*a*i-n*s*r,qw:n*a*i+c*s*r}},cc._RF.pop()},{}],UIManager:[function(e,t,o){"use strict";cc._RF.push(t,"5a3b30zEjdNb5uByEYiR1r7","UIManager"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("./Tools"),c=function(){function e(){}return e.prototype.pushScene=function(e){cc.director.runScene(e)},e.prototype.pushScenePre=function(e,t){this.curSceneName=e,this.loadCallfunc=t,cc.director.preloadScene(e,this.sceneLoaded.bind(this))},e.prototype.sceneLoaded=function(e,t){e?n.log("pushScenePre "+this.curSceneName+" faild"):(this.loadCallfunc&&this.loadCallfunc(),cc.director.runScene(t.scene))},e}();o.default=c,cc._RF.pop()},{"./Tools":"Tools"}],Utils:[function(e,t,o){"use strict";cc._RF.push(t,"577bevfmxRBIY63XEHYVQxb","Utils"),Object.defineProperty(o,"__esModule",{value:!0});var n,c=e("../core/Tools"),i=e("../ctrl/ToastCtrl");(function(e){e[e.Msg=1e3]="Msg",e[e.Mask=900]="Mask"})(n=o.UIlevel||(o.UIlevel={}));var r=function(){function e(){}return e.tip=function(t){e.insPrefab("prefab/common/ToastPrefab").then(function(o){var c=o.getComponent(i.default);e.getSceneCanvas().addChild(o,n.Msg),c.show(t)})},e.loading=function(){e.insPrefab("prefab/common/LoadingPrefab").then(function(t){t.name="loadingNode",e.getSceneCanvas().addChild(t,n.Mask)})},e.hideLoading=function(){var t=e.getSceneCanvas().getChildByName("loadingNode");t&&t.removeFromParent()},e.insPrefab=function(e,t){return new Promise(function(o,n){cc.loader.loadRes(e,function(i,r){if(i&&(c.log(i,e),n()),t&&t>0){for(var a=[],s=0;s<t;s++){(u=cc.instantiate(r))||n(),a.push(u)}o(a)}else{var u;(u=cc.instantiate(r))||n(),o(u)}})})},e.getSceneCanvas=function(){return cc.Canvas.instance.node},e}();o.default=r,cc._RF.pop()},{"../core/Tools":"Tools","../ctrl/ToastCtrl":"ToastCtrl"}],zh_cn:[function(e,t,o){"use strict";cc._RF.push(t,"879eekGUNtCSKA2c2LBI660","zh_cn"),window.i18n||(window.i18n={}),window.i18n.languages||(window.i18n.languages={}),window.i18n.languages.zh_cn={},cc._RF.pop()},{}]},{},["zh_cn","GameConfig","GameManager","JoyStickCmp","KeyBoardControlCmp","BaseComponent","BaseCtrl","BaseData","BaseScene","I18nManager","NetManager","Tools","UIManager","AutoBind","ToastCtrl","HeroCtrl","GameDataManager","PlayerData","PlayerModel","BattleScene","HomeScene","LanchScene","Utils"]);