import{o as Aa,a as Ia,i as Ra,s as N,b as it,e as ze}from"./lifecycle.DVXYv02V.js";import{a3 as Wa,ab as Ba,aU as Da,aV as Na,i as Ya,u as qa,aW as Ua,aX as Re,aY as Oa,q as Ka,aZ as ht,c as rt,f as tt,a as Y,p as Xa,b as Ha,h as l,m as T,ax as O,g as t,d as ut,s as u,e as r,r as i,v as Va,t as It,o as h}from"./utils.I031fIKC.js";import{a as Ga,s as Z}from"./render.CXZIErzm.js";import{i as $}from"./if.UhLp8uqm.js";import{e as Za,i as Ja}from"./each.BWRjh538.js";import{b as $e}from"./this.DSTH8Ssi.js";import{I as m}from"./Icon.D7jBQwJc.js";import{m as xt}from"./config.C3ed3MMg.js";import{I as Qa}from"./zh_TW.0MqjO24q.js";import{i as ti}from"./translation.Bl_Y_I3D.js";import"./props.Hvxcl91v.js";const ei=()=>performance.now(),J={tick:c=>requestAnimationFrame(c),now:()=>ei(),tasks:new Set};function We(){const c=J.now();J.tasks.forEach(n=>{n.c(c)||(J.tasks.delete(n),n.f())}),J.tasks.size!==0&&J.tick(We)}function ai(c){let n;return J.tasks.size===0&&J.tick(We),{promise:new Promise(_=>{J.tasks.add(n={c,f:_})}),abort(){J.tasks.delete(n)}}}function Rt(c,n){Re(()=>{c.dispatchEvent(new CustomEvent(n))})}function ii(c){if(c==="float")return"cssFloat";if(c==="offset")return"cssOffset";if(c.startsWith("--"))return c;const n=c.split("-");return n.length===1?n[0]:n[0]+n.slice(1).map(_=>_[0].toUpperCase()+_.slice(1)).join("")}function Ae(c){const n={},_=c.split(";");for(const M of _){const[P,k]=M.split(":");if(!P||k===void 0)break;const A=ii(P.trim());n[A]=k.trim()}return n}const ri=c=>c;function ni(c,n,_,M){var P=(c&Ua)!==0,k="both",A,K=n.inert,S=n.style.overflow,d,v;function I(){return Re(()=>A??=_()(n,M?.()??{},{direction:k}))}var z={is_global:P,in(){n.inert=K,Rt(n,"introstart"),d=ie(n,I(),v,1,()=>{Rt(n,"introend"),d?.abort(),d=A=void 0,n.style.overflow=S})},out(f){n.inert=!0,Rt(n,"outrostart"),v=ie(n,I(),d,0,()=>{Rt(n,"outroend"),f?.()})},stop:()=>{d?.abort(),v?.abort()}},E=Wa;if((E.transitions??=[]).push(z),Ga){var L=P;if(!L){for(var b=E.parent;b&&(b.f&Ba)!==0;)for(;(b=b.parent)&&(b.f&Da)===0;);L=!b||(b.f&Na)!==0}L&&Ya(()=>{qa(()=>z.in())})}}function ie(c,n,_,M,P){var k=M===1;if(Oa(n)){var A,K=!1;return Ka(()=>{if(!K){var f=n({direction:k?"in":"out"});A=ie(c,f,_,M,P)}}),{abort:()=>{K=!0,A?.abort()},deactivate:()=>A.deactivate(),reset:()=>A.reset(),t:()=>A.t()}}if(_?.deactivate(),!n?.duration)return P(),{abort:ht,deactivate:ht,reset:ht,t:()=>M};const{delay:S=0,css:d,tick:v,easing:I=ri}=n;var z=[];if(k&&_===void 0&&(v&&v(0,1),d)){var E=Ae(d(0,1));z.push(E,E)}var L=()=>1-M,b=c.animate(z,{duration:S,fill:"forwards"});return b.onfinish=()=>{b.cancel();var f=_?.t()??1-M;_?.abort();var x=M-f,B=n.duration*Math.abs(x),vt=[];if(B>0){var et=!1;if(d)for(var R=Math.ceil(B/16.666666666666668),p=0;p<=R;p+=1){var w=f+x*I(p/R),a=Ae(d(w,1-w));vt.push(a),et||=a.overflow==="hidden"}et&&(c.style.overflow="hidden"),L=()=>{var X=b.currentTime;return f+x*I(X/B)},v&&ai(()=>{if(b.playState!=="running")return!1;var X=L();return v(X,1-X),!0})}b=c.animate(vt,{duration:B,fill:"forwards"}),b.onfinish=()=>{L=()=>M,v?.(M,1-M),P()}},{abort:()=>{b&&(b.cancel(),b.effect=null,b.onfinish=ht)},deactivate:()=>{P=ht},reset:()=>{M===0&&v?.(1,0)},t:()=>L()}}function Ie(c){return function(...n){var _=n[0];return _.stopPropagation(),c?.apply(this,n)}}function si(c){const n=c-1;return n*n*n+1}function oi(c,{delay:n=0,duration:_=400,easing:M=si,axis:P="y"}={}){const k=getComputedStyle(c),A=+k.opacity,K=P==="y"?"height":"width",S=parseFloat(k[K]),d=P==="y"?["top","bottom"]:["left","right"],v=d.map(x=>`${x[0].toUpperCase()}${x.slice(1)}`),I=parseFloat(k[`padding${v[0]}`]),z=parseFloat(k[`padding${v[1]}`]),E=parseFloat(k[`margin${v[0]}`]),L=parseFloat(k[`margin${v[1]}`]),b=parseFloat(k[`border${v[0]}Width`]),f=parseFloat(k[`border${v[1]}Width`]);return{delay:n,duration:_,easing:M,css:x=>`overflow: hidden;opacity: ${Math.min(x*20,1)*A};${K}: ${x*S}px;padding-${d[0]}: ${x*I}px;padding-${d[1]}: ${x*z}px;margin-${d[0]}: ${x*E}px;margin-${d[1]}: ${x*L}px;border-${d[0]}-width: ${x*b}px;border-${d[1]}-width: ${x*f}px;min-${K}: 0`}}var li=ut('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),ci=ut('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),di=ut('<span class="text-sm text-[var(--content-meta)]"></span>'),ui=ut('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),vi=ut('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),fi=ut(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -2px;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 48px;
	height: 48px;
}
.music-player {
    max-width: 320px;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 280px;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 320px;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px;
        /*left: 8px !important;*/
        bottom: 8px !important;
        right: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 8px !important;*/
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 8px !important;*/
        right: 8px !important;
        max-width: none;
    }
    .controls {
        gap: 8px;
    }
    .controls button {
        width: 36px;
        height: 36px;
    }
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
    }
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
    }
    .song-title {
        font-size: 14px;
    }
    .song-artist {
        font-size: 12px;
    }
    .controls {
        gap: 6px;
        margin-bottom: 12px;
    }
    .controls button {
        width: 32px;
        height: 32px;
    }
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
    }
    .playlist-item {
        padding: 8px 12px;
    }
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
    }
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
    }
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
    }
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
    border: none;
}</style>`,1);function Li(c,n){Ha(n,!1);const _="/minghui-blog/";let M=xt.mode??"meting",P=xt.meting_api??"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",k=xt.id??"14164869977",A=xt.server??"netease",K=xt.type??"playlist",S=T(!1),d=T(!1),v=T(!1),I=T(!1),z=T(0),E=T(0),L=T(.7),b=T(!1),f=T(!1),x=T(!1),B=T(0),vt=T(""),et=T(!1),R=T({title:"示例歌曲",artist:"示例艺术家",cover:`${_}favicon/favicon-light-192.png`,url:"",duration:0}),p=T([]),w=T(0),a=T(),X=T(),yt=T();const Be=[{id:1,title:"ひとり上手",artist:"Kaya",cover:"assets/music/cover/hitori.jpg",url:"assets/music/url/hitori.mp3",duration:240},{id:2,title:"眩耀夜行",artist:"スリーズブーケ",cover:"assets/music/cover/xryx.jpg",url:"assets/music/url/xryx.mp3",duration:180},{id:3,title:"春雷の頃",artist:"22/7",cover:"assets/music/cover/cl.jpg",url:"assets/music/url/cl.mp3",duration:200}];async function De(){if(!P||!k)return;l(f,!0);const s=P.replace(":server",A).replace(":type",K).replace(":id",k).replace(":auth","").replace(":r",Date.now().toString());try{const C=await fetch(s);if(!C.ok)throw new Error("meting api error");const H=await C.json();l(p,H.map(D=>{let ft=D.name??D.title??"未知歌曲",Tt=D.artist??D.author??"未知艺术家",W=D.duration??0;return W>1e4&&(W=Math.floor(W/1e3)),(!Number.isFinite(W)||W<=0)&&(W=0),{id:D.id,title:ft,artist:Tt,cover:D.pic??"",url:D.url??"",duration:W}})),t(p).length>0&&Bt(t(p)[0]),l(f,!1)}catch{Lt("Meting 歌单获取失败"),l(f,!1)}}function Ne(){!t(a)||!t(R).url||(t(S)?t(a).pause():t(a).play())}function _t(){l(d,!t(d)),t(d)&&(l(I,!1),l(v,!1))}function wt(){l(v,!t(v)),t(v)&&(l(d,!1),l(I,!1))}function re(){l(I,!t(I))}function Ye(){l(x,!t(x))}function qe(){l(B,(t(B)+1)%3)}function Ue(){if(t(p).length<=1)return;const s=t(w)>0?t(w)-1:t(p).length-1;kt(s)}function Wt(){if(t(p).length<=1)return;let s;if(t(x))do s=Math.floor(Math.random()*t(p).length);while(s===t(w)&&t(p).length>1);else s=t(w)<t(p).length-1?t(w)+1:0;kt(s)}function kt(s){if(s<0||s>=t(p).length)return;const C=t(S);l(w,s),t(a)&&t(a).pause(),Bt(t(p)[t(w)]),(C||!t(S))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function Et(s){return s.startsWith("http://")||s.startsWith("https://")||s.startsWith("/")?s:`/${s}`}function Bt(s){!s||!t(a)||(l(R,{...s}),s.url?(l(f,!0),t(a).pause(),O(a,t(a).currentTime=0),l(z,0),l(E,s.duration??0),t(a).removeEventListener("loadeddata",ne),t(a).removeEventListener("error",se),t(a).removeEventListener("loadstart",oe),t(a).addEventListener("loadeddata",ne,{once:!0}),t(a).addEventListener("error",se,{once:!0}),t(a).addEventListener("loadstart",oe,{once:!0}),O(a,t(a).src=Et(s.url)),t(a).load()):l(f,!1))}function ne(){l(f,!1),t(a)?.duration&&t(a).duration>1&&(l(E,Math.floor(t(a).duration)),t(p)[t(w)]&&O(p,t(p)[t(w)].duration=t(E)),O(R,t(R).duration=t(E)))}function se(s){l(f,!1),Lt(`无法播放 "${t(R).title}"，正在尝试下一首...`),t(p).length>1?setTimeout(()=>Wt(),1e3):Lt("播放列表中没有可用的歌曲")}function oe(){}function Lt(s){l(vt,s),l(et,!0),setTimeout(()=>{l(et,!1)},3e3)}function Oe(){l(et,!1)}function Ke(s){if(!t(a)||!t(X))return;const C=t(X).getBoundingClientRect(),D=(s.clientX-C.left)/C.width*t(E);O(a,t(a).currentTime=D),l(z,D)}function Xe(s){if(!t(a)||!t(yt))return;const C=t(yt).getBoundingClientRect(),H=Math.max(0,Math.min(1,(s.clientX-C.left)/C.width));l(L,H),O(a,t(a).volume=t(L)),l(b,t(L)===0)}function le(){t(a)&&(l(b,!t(b)),O(a,t(a).muted=t(b)))}function ce(s){if(!Number.isFinite(s)||s<0)return"0:00";const C=Math.floor(s/60),H=Math.floor(s%60);return`${C}:${H.toString().padStart(2,"0")}`}function He(){t(a)&&(t(a).addEventListener("play",()=>{l(S,!0)}),t(a).addEventListener("pause",()=>{l(S,!1)}),t(a).addEventListener("timeupdate",()=>{l(z,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(B)===1?(O(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(B)===2||t(w)<t(p).length-1||t(x)?Wt():l(S,!1)}),t(a).addEventListener("error",s=>{l(f,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}Aa(()=>{l(a,new Audio),O(a,t(a).volume=t(L)),He(),M==="meting"?De():(l(p,[...Be]),t(p).length>0?Bt(t(p)[0]):Lt("本地播放列表为空"))}),Ia(()=>{t(a)&&(t(a).pause(),O(a,t(a).src=""))}),Ra();var de=rt(),Ve=tt(de);{var Ge=s=>{var C=fi(),H=tt(C);{var D=e=>{var g=li(),y=r(g),j=r(y);m(j,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var F=u(j,2),o=r(F,!0);i(F);var V=u(F,2),ct=r(V);m(ct,{icon:"material-symbols:close",class:"text-lg"}),i(V),i(y),i(g),It(()=>Z(o,t(vt))),h("click",V,Oe),Y(e,g)};$(H,e=>{t(et)&&e(D)})}var ft=u(H,2);let Tt;var W=r(ft);let ue;var Ze=r(W);{var Je=e=>{m(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},Qe=e=>{var g=rt(),y=tt(g);{var j=o=>{var V=ci();Y(o,V)},F=o=>{m(o,{icon:"material-symbols:music-note",class:"text-white text-lg"})};$(y,o=>{t(S)?o(j):o(F,!1)},!0)}Y(e,g)};$(Ze,e=>{t(f)?e(Je):e(Qe,!1)})}i(W);var nt=u(W,2);let ve;var fe=r(nt),Dt=r(fe),Nt=r(Dt);let pe;var me=u(Nt,2),ta=r(me);{var ea=e=>{m(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},aa=e=>{var g=rt(),y=tt(g);{var j=o=>{m(o,{icon:"material-symbols:pause",class:"text-white text-xl"})},F=o=>{m(o,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};$(y,o=>{t(S)?o(j):o(F,!1)},!0)}Y(e,g)};$(ta,e=>{t(f)?e(ea):e(aa,!1)})}i(me),i(Dt);var Yt=u(Dt,2),qt=r(Yt),ia=r(qt,!0);i(qt);var be=u(qt,2),ra=r(be,!0);i(be),i(Yt);var ge=u(Yt,2),Mt=r(ge),na=r(Mt);m(na,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(Mt);var Ut=u(Mt,2),sa=r(Ut);m(sa,{icon:"material-symbols:expand-less",class:"text-lg"}),i(Ut),i(ge),i(fe),i(nt);var St=u(nt,2);let he;var Ot=r(St),Kt=r(Ot),xe=r(Kt);let ye;i(Kt);var Xt=u(Kt,2),Ht=r(Xt),oa=r(Ht,!0);i(Ht);var Vt=u(Ht,2),la=r(Vt,!0);i(Vt);var _e=u(Vt,2),ca=r(_e);i(_e),i(Xt);var we=u(Xt,2),jt=r(we),da=r(jt);m(da,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(jt);var Gt=u(jt,2),ua=r(Gt);m(ua,{icon:"material-symbols:expand-more",class:"text-lg"}),i(Gt),i(we),i(Ot);var Zt=u(Ot,2),st=r(Zt),va=r(st);i(st),$e(st,e=>l(X,e),()=>t(X)),i(Zt);var Jt=u(Zt,2),ot=r(Jt);let ke;var fa=r(ot);m(fa,{icon:"material-symbols:shuffle",class:"text-lg"}),i(ot);var pt=u(ot,2),pa=r(pt);m(pa,{icon:"material-symbols:skip-previous",class:"text-xl"}),i(pt);var lt=u(pt,2);let Ee;var ma=r(lt);{var ba=e=>{m(e,{icon:"eos-icons:loading",class:"text-xl"})},ga=e=>{var g=rt(),y=tt(g);{var j=o=>{m(o,{icon:"material-symbols:pause",class:"text-xl"})},F=o=>{m(o,{icon:"material-symbols:play-arrow",class:"text-xl"})};$(y,o=>{t(S)?o(j):o(F,!1)},!0)}Y(e,g)};$(ma,e=>{t(f)?e(ba):e(ga,!1)})}i(lt);var mt=u(lt,2),ha=r(mt);m(ha,{icon:"material-symbols:skip-next",class:"text-xl"}),i(mt);var Ft=u(mt,2);let Le;var xa=r(Ft);{var ya=e=>{m(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},_a=e=>{var g=rt(),y=tt(g);{var j=o=>{m(o,{icon:"material-symbols:repeat",class:"text-lg"})},F=o=>{m(o,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};$(y,o=>{t(B)===2?o(j):o(F,!1)},!0)}Y(e,g)};$(xa,e=>{t(B)===1?e(ya):e(_a,!1)})}i(Ft),i(Jt);var Te=u(Jt,2),Pt=r(Te),wa=r(Pt);{var ka=e=>{m(e,{icon:"material-symbols:volume-off",class:"text-lg"})},Ea=e=>{var g=rt(),y=tt(g);{var j=o=>{m(o,{icon:"material-symbols:volume-down",class:"text-lg"})},F=o=>{m(o,{icon:"material-symbols:volume-up",class:"text-lg"})};$(y,o=>{t(L)<.5?o(j):o(F,!1)},!0)}Y(e,g)};$(wa,e=>{t(b)||t(L)===0?e(ka):e(Ea,!1)})}i(Pt);var at=u(Pt,2),La=r(at);i(at),$e(at,e=>l(yt,e),()=>t(yt));var Ct=u(at,2);let Me;var Ta=r(Ct);m(Ta,{icon:"material-symbols:queue-music",class:"text-lg"}),i(Ct),i(Te),i(St);var Ma=u(St,2);{var Sa=e=>{var g=vi(),y=r(g),j=r(y),F=r(j,!0);i(j);var o=u(j,2),V=r(o);m(V,{icon:"material-symbols:close",class:"text-lg"}),i(o),i(y);var ct=u(y,2);Za(ct,5,()=>t(p),Ja,(bt,Q,q)=>{var G=ui();let zt;var gt=r(G),ja=r(gt);{var Fa=U=>{m(U,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Pa=U=>{var At=rt(),ee=tt(At);{var ae=dt=>{m(dt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},$a=dt=>{var Ce=di();Ce.textContent=q+1,Y(dt,Ce)};$(ee,dt=>{q===t(w)?dt(ae):dt($a,!1)},!0)}Y(U,At)};$(ja,U=>{q===t(w)&&t(S)?U(Fa):U(Pa,!1)})}i(gt);var Qt=u(gt,2),Se=r(Qt);i(Qt);var je=u(Qt,2),$t=r(je);let Fe;var Ca=r($t,!0);i($t);var te=u($t,2);let Pe;var za=r(te,!0);i(te),i(je),i(G),It((U,At,ee,ae)=>{zt=N(G,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,zt,U),it(G,"aria-label",`播放 ${t(Q).title??""} - ${t(Q).artist??""}`),it(Se,"src",At),it(Se,"alt",t(Q).title),Fe=N($t,1,"font-medium truncate",null,Fe,ee),Z(Ca,t(Q).title),Pe=N(te,1,"text-sm text-[var(--content-meta)] truncate",null,Pe,ae),Z(za,t(Q).artist)},[()=>({"bg-[var(--btn-plain-bg)]":q===t(w),"text-[var(--primary)]":q===t(w)}),()=>Et(t(Q).cover),()=>({"text-[var(--primary)]":q===t(w),"text-90":q!==t(w)}),()=>({"text-[var(--primary)]":q===t(w)})]),h("click",G,()=>kt(q)),h("keydown",G,U=>{(U.key==="Enter"||U.key===" ")&&(U.preventDefault(),kt(q))}),Y(bt,G)}),i(ct),i(g),It(bt=>Z(F,bt),[()=>ti(Qa.playlist)]),h("click",o,re),ni(3,g,()=>oi,()=>({duration:300,axis:"y"})),Y(e,g)};$(Ma,e=>{t(I)&&e(Sa)})}i(ft),Va(2),It((e,g,y,j,F,o,V,ct,bt,Q,q,G,zt,gt)=>{Tt=N(ft,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,Tt,e),ue=N(W,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,ue,g),ve=N(nt,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,ve,y),it(Nt,"src",j),pe=N(Nt,1,"w-full h-full object-cover transition-transform duration-300",null,pe,F),Z(ia,t(R).title),Z(ra,t(R).artist),he=N(St,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,he,o),it(xe,"src",V),ye=N(xe,1,"w-full h-full object-cover transition-transform duration-300",null,ye,ct),Z(oa,t(R).title),Z(la,t(R).artist),Z(ca,`${bt??""} / ${Q??""}`),it(st,"aria-valuenow",t(E)>0?t(z)/t(E)*100:0),ze(va,`width: ${t(E)>0?t(z)/t(E)*100:0}%`),ke=N(ot,1,"w-10 h-10 rounded-lg",null,ke,q),ot.disabled=t(p).length<=1,pt.disabled=t(p).length<=1,Ee=N(lt,1,"btn-regular w-12 h-12 rounded-full",null,Ee,G),lt.disabled=t(f),mt.disabled=t(p).length<=1,Le=N(Ft,1,"w-10 h-10 rounded-lg",null,Le,zt),it(at,"aria-valuenow",t(L)*100),ze(La,`width: ${t(L)*100}%`),Me=N(Ct,1,"btn-plain w-8 h-8 rounded-lg",null,Me,gt)},[()=>({expanded:t(d),"hidden-mode":t(v)}),()=>({"opacity-0":!t(v),"scale-0":!t(v),"pointer-events-none":!t(v)}),()=>({"opacity-0":t(d)||t(v),"scale-95":t(d)||t(v),"pointer-events-none":t(d)||t(v)}),()=>Et(t(R).cover),()=>({spinning:t(S)&&!t(f),"animate-pulse":t(f)}),()=>({"opacity-0":!t(d),"scale-95":!t(d),"pointer-events-none":!t(d)}),()=>Et(t(R).cover),()=>({spinning:t(S)&&!t(f),"animate-pulse":t(f)}),()=>ce(t(z)),()=>ce(t(E)),()=>({"btn-regular":t(x),"btn-plain":!t(x)}),()=>({"opacity-50":t(f)}),()=>({"btn-regular":t(B)>0,"btn-plain":t(B)===0}),()=>({"text-[var(--primary)]":t(I)})]),h("click",W,wt),h("keydown",W,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),wt())}),h("click",Mt,Ie(wt)),h("click",Ut,Ie(_t)),h("click",nt,_t),h("keydown",nt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),_t())}),h("click",jt,wt),h("click",Gt,_t),h("click",st,Ke),h("keydown",st,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(X).getBoundingClientRect();const y=.5*t(E);t(a)&&(O(a,t(a).currentTime=y),l(z,y))}}),h("click",ot,Ye),h("click",pt,Ue),h("click",lt,Ne),h("click",mt,Wt),h("click",Ft,qe),h("click",Pt,le),h("click",at,Xe),h("keydown",at,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&le())}),h("click",Ct,re),Y(s,C)};$(Ve,s=>{s(Ge)})}Y(c,de),Xa()}export{Li as default};
