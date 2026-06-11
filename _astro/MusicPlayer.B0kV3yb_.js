import{o as Ca,a as za,i as $a}from"./lifecycle.OxZKTpi0.js";import{$ as Aa,a7 as Ia,aJ as Ra,aK as Ba,aL as $e,u as Ae,aM as Wa,ac as Ie,aN as Na,U as Re,aO as mt,a5 as Da,aP as Oa,c as tt,f as G,a as I,p as Ya,b as qa,s as v,m as S,ak as D,g as t,d as ct,h as p,e as n,r as i,n as Ua,t as Ft}from"./template.BjuiTig8.js";import{a as Ka,s as U}from"./render.BmKFLAcy.js";import{i as z}from"./if.D5h-4qKe.js";import{e as Ha,i as Xa}from"./each.DZqPV-mU.js";import{a as R,s as et,c as Fe}from"./props.CCwlc0S8.js";import{e as _}from"./utils.D-kq7FMU.js";import{I as b}from"./Icon.CVSAqIrG.js";import"./config.C13E5Vbi.js";import{I as Ga}from"./zh_TW.0MqjO24q.js";import{i as Ja}from"./translation.Q9XrNavM.js";const Va=()=>performance.now(),K={tick:o=>requestAnimationFrame(o),now:()=>Va(),tasks:new Set};function Be(){const o=K.now();K.tasks.forEach(r=>{r.c(o)||(K.tasks.delete(r),r.f())}),K.tasks.size!==0&&K.tick(Be)}function Qa(o){let r;return K.tasks.size===0&&K.tick(Be),{promise:new Promise(g=>{K.tasks.add(r={c:o,f:g})}),abort(){K.tasks.delete(r)}}}function jt(o,r){Ie(()=>{o.dispatchEvent(new CustomEvent(r))})}function Za(o){if(o==="float")return"cssFloat";if(o==="offset")return"cssOffset";if(o.startsWith("--"))return o;const r=o.split("-");return r.length===1?r[0]:r[0]+r.slice(1).map(g=>g[0].toUpperCase()+g.slice(1)).join("")}function je(o){const r={},g=o.split(";");for(const u of g){const[f,c]=u.split(":");if(!f||c===void 0)break;const T=Za(f.trim());r[T]=c.trim()}return r}const tr=o=>o;function er(o,r,g,u){var f=(o&Wa)!==0,c="both",T,P=r.inert,F=r.style.overflow,m,y;function w(){return Ie(()=>T??=g()(r,u?.()??{},{direction:c}))}var $={is_global:f,in(){r.inert=P,jt(r,"introstart"),m=Vt(r,w(),y,1,()=>{jt(r,"introend"),m?.abort(),m=T=void 0,r.style.overflow=F})},out(E){r.inert=!0,jt(r,"outrostart"),y=Vt(r,w(),m,0,()=>{jt(r,"outroend"),E?.()})},stop:()=>{m?.abort(),y?.abort()}},C=Aa;if((C.transitions??=[]).push($),Ka){var A=f;if(!A){for(var x=C.parent;x&&(x.f&Ia)!==0;)for(;(x=x.parent)&&(x.f&Ra)===0;);A=!x||(x.f&Ba)!==0}A&&$e(()=>{Ae(()=>$.in())})}}function Vt(o,r,g,u,f){var c=u===1;if(Na(r)){var T,P=!1;return Re(()=>{if(!P){var E=r({direction:c?"in":"out"});T=Vt(o,E,g,u,f)}}),{abort:()=>{P=!0,T?.abort()},deactivate:()=>T.deactivate(),reset:()=>T.reset(),t:()=>T.t()}}if(g?.deactivate(),!r?.duration)return f(),{abort:mt,deactivate:mt,reset:mt,t:()=>u};const{delay:F=0,css:m,tick:y,easing:w=tr}=r;var $=[];if(c&&g===void 0&&(y&&y(0,1),m)){var C=je(m(0,1));$.push(C,C)}var A=()=>1-u,x=o.animate($,{duration:F,fill:"forwards"});return x.onfinish=()=>{x.cancel();var E=g?.t()??1-u;g?.abort();var d=u-E,k=r.duration*Math.abs(d),a=[];if(k>0){var H=!1;if(m)for(var J=Math.ceil(k/16.666666666666668),dt=0;dt<=J;dt+=1){var bt=E+d*w(dt/J),V=je(m(bt,1-bt));a.push(V),H||=V.overflow==="hidden"}H&&(o.style.overflow="hidden"),A=()=>{var O=x.currentTime;return E+d*w(O/k)},y&&Qa(()=>{if(x.playState!=="running")return!1;var O=A();return y(O,1-O),!0})}x=o.animate(a,{duration:k,fill:"forwards"}),x.onfinish=()=>{A=()=>u,y?.(u,1-u),f()}},{abort:()=>{x&&(x.cancel(),x.effect=null,x.onfinish=mt)},deactivate:()=>{f=mt},reset:()=>{u===0&&y?.(1,0)},t:()=>A()}}function Pe(o,r){return o===r||o?.[Oa]===r}function Ce(o={},r,g,u){return $e(()=>{var f,c;return Da(()=>{f=c,c=[],Ae(()=>{o!==g(...c)&&(r(o,...c),f&&Pe(g(...f),o)&&r(null,...f))})}),()=>{Re(()=>{c&&Pe(g(...c),o)&&r(null,...c)})}}),o}function ze(o){return function(...r){var g=r[0];return g.stopPropagation(),o?.apply(this,r)}}function ar(o){const r=o-1;return r*r*r+1}function rr(o,{delay:r=0,duration:g=400,easing:u=ar,axis:f="y"}={}){const c=getComputedStyle(o),T=+c.opacity,P=f==="y"?"height":"width",F=parseFloat(c[P]),m=f==="y"?["top","bottom"]:["left","right"],y=m.map(d=>`${d[0].toUpperCase()}${d.slice(1)}`),w=parseFloat(c[`padding${y[0]}`]),$=parseFloat(c[`padding${y[1]}`]),C=parseFloat(c[`margin${y[0]}`]),A=parseFloat(c[`margin${y[1]}`]),x=parseFloat(c[`border${y[0]}Width`]),E=parseFloat(c[`border${y[1]}Width`]);return{delay:r,duration:g,easing:u,css:d=>`overflow: hidden;opacity: ${Math.min(d*20,1)*T};${P}: ${d*F}px;padding-${m[0]}: ${d*w}px;padding-${m[1]}: ${d*$}px;margin-${m[0]}: ${d*C}px;margin-${m[1]}: ${d*A}px;border-${m[0]}-width: ${d*x}px;border-${m[1]}-width: ${d*E}px;min-${P}: 0`}}var ir=ct('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),nr=ct('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),sr=ct('<span class="text-sm text-[var(--content-meta)]"></span>'),or=ct('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),lr=ct('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),cr=ct(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
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
}</style>`,1);function _r(o,r){qa(r,!1);const g="/minghui-blog/";let u=S(!1),f=S(!1),c=S(!1),T=S(!1),P=S(0),F=S(0),m=S(.7),y=S(!1),w=S(!1),$=S(!1),C=S(0),A=S(""),x=S(!1),E=S({title:"示例歌曲",artist:"示例艺术家",cover:`${g}favicon/favicon-light-192.png`,url:"",duration:0}),d=S([]),k=S(0),a=S(),H=S(),J=S();const dt=[{id:1,title:"幸せの記憶",artist:"未知艺术家",cover:"assets/music/cover/hitori.jpg",url:"assets/music/url/幸せの記憶.mp3",duration:240}];function bt(){!t(a)||!t(E).url||(t(u)?t(a).pause():t(a).play())}function V(){v(f,!t(f)),t(f)&&(v(T,!1),v(c,!1))}function O(){v(c,!t(c)),t(c)&&(v(f,!1),v(T,!1))}function Qt(){v(T,!t(T))}function We(){v($,!t($))}function Ne(){v(C,(t(C)+1)%3)}function De(){if(t(d).length<=1)return;const l=t(k)>0?t(k)-1:t(d).length-1;gt(l)}function Pt(){if(t(d).length<=1)return;let l;if(t($))do l=Math.floor(Math.random()*t(d).length);while(l===t(k)&&t(d).length>1);else l=t(k)<t(d).length-1?t(k)+1:0;gt(l)}function gt(l){if(l<0||l>=t(d).length)return;const B=t(u);v(k,l),t(a)&&t(a).pause(),Zt(t(d)[t(k)]),(B||!t(u))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function ht(l){return l.startsWith("http://")||l.startsWith("https://")?l:l.startsWith("/")?g+l.slice(1):g+l}function Zt(l){!l||!t(a)||(v(E,{...l}),l.url?(v(w,!0),t(a).pause(),D(a,t(a).currentTime=0),v(P,0),v(F,l.duration??0),t(a).removeEventListener("loadeddata",te),t(a).removeEventListener("error",ee),t(a).removeEventListener("loadstart",ae),t(a).addEventListener("loadeddata",te,{once:!0}),t(a).addEventListener("error",ee,{once:!0}),t(a).addEventListener("loadstart",ae,{once:!0}),D(a,t(a).src=ht(l.url)),t(a).load()):v(w,!1))}function te(){v(w,!1),t(a)?.duration&&t(a).duration>1&&(v(F,Math.floor(t(a).duration)),t(d)[t(k)]&&D(d,t(d)[t(k)].duration=t(F)),D(E,t(E).duration=t(F)))}function ee(l){v(w,!1),Ct(`无法播放 "${t(E).title}"，正在尝试下一首...`),t(d).length>1?setTimeout(()=>Pt(),1e3):Ct("播放列表中没有可用的歌曲")}function ae(){}function Ct(l){v(A,l),v(x,!0),setTimeout(()=>{v(x,!1)},3e3)}function Oe(){v(x,!1)}function Ye(l){if(!t(a)||!t(H))return;const B=t(H).getBoundingClientRect(),xt=(l.clientX-B.left)/B.width*t(F);D(a,t(a).currentTime=xt),v(P,xt)}function qe(l){if(!t(a)||!t(J))return;const B=t(J).getBoundingClientRect(),Q=Math.max(0,Math.min(1,(l.clientX-B.left)/B.width));v(m,Q),D(a,t(a).volume=t(m)),v(y,t(m)===0)}function re(){t(a)&&(v(y,!t(y)),D(a,t(a).muted=t(y)))}function ie(l){if(!Number.isFinite(l)||l<0)return"0:00";const B=Math.floor(l/60),Q=Math.floor(l%60);return`${B}:${Q.toString().padStart(2,"0")}`}function Ue(){t(a)&&(t(a).addEventListener("play",()=>{v(u,!0)}),t(a).addEventListener("pause",()=>{v(u,!1)}),t(a).addEventListener("timeupdate",()=>{v(P,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(C)===1?(D(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(C)===2||t(k)<t(d).length-1||t($)?Pt():v(u,!1)}),t(a).addEventListener("error",l=>{v(w,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}Ca(()=>{v(a,new Audio),D(a,t(a).volume=t(m)),Ue(),v(d,[...dt]),t(d).length>0?Zt(t(d)[0]):Ct("本地播放列表为空")}),za(()=>{t(a)&&(t(a).pause(),D(a,t(a).src=""))}),$a();var ne=tt(),Ke=G(ne);{var He=l=>{var B=cr(),Q=G(B);{var xt=e=>{var h=ir(),L=n(h),M=n(L);b(M,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var j=p(M,2),s=n(j,!0);i(j);var Y=p(j,2),ot=n(Y);b(ot,{icon:"material-symbols:close",class:"text-lg"}),i(Y),i(L),i(h),Ft(()=>U(s,t(A))),_("click",Y,Oe),I(e,h)};z(Q,e=>{t(x)&&e(xt)})}var zt=p(Q,2);let se;var at=n(zt);let oe;var Xe=n(at);{var Ge=e=>{b(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},Je=e=>{var h=tt(),L=G(h);{var M=s=>{var Y=nr();I(s,Y)},j=s=>{b(s,{icon:"material-symbols:music-note",class:"text-white text-lg"})};z(L,s=>{t(u)?s(M):s(j,!1)},!0)}I(e,h)};z(Xe,e=>{t(w)?e(Ge):e(Je,!1)})}i(at);var rt=p(at,2);let le;var ce=n(rt),$t=n(ce),At=n($t);let de;var ve=p(At,2),Ve=n(ve);{var Qe=e=>{b(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},Ze=e=>{var h=tt(),L=G(h);{var M=s=>{b(s,{icon:"material-symbols:pause",class:"text-white text-xl"})},j=s=>{b(s,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};z(L,s=>{t(u)?s(M):s(j,!1)},!0)}I(e,h)};z(Ve,e=>{t(w)?e(Qe):e(Ze,!1)})}i(ve),i($t);var It=p($t,2),Rt=n(It),ta=n(Rt,!0);i(Rt);var ue=p(Rt,2),ea=n(ue,!0);i(ue),i(It);var fe=p(It,2),yt=n(fe),aa=n(yt);b(aa,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(yt);var Bt=p(yt,2),ra=n(Bt);b(ra,{icon:"material-symbols:expand-less",class:"text-lg"}),i(Bt),i(fe),i(ce),i(rt);var _t=p(rt,2);let pe;var Wt=n(_t),Nt=n(Wt),me=n(Nt);let be;i(Nt);var Dt=p(Nt,2),Ot=n(Dt),ia=n(Ot,!0);i(Ot);var Yt=p(Ot,2),na=n(Yt,!0);i(Yt);var ge=p(Yt,2),sa=n(ge);i(ge),i(Dt);var he=p(Dt,2),wt=n(he),oa=n(wt);b(oa,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(wt);var qt=p(wt,2),la=n(qt);b(la,{icon:"material-symbols:expand-more",class:"text-lg"}),i(qt),i(he),i(Wt);var Ut=p(Wt,2),it=n(Ut),ca=n(it);i(it),Ce(it,e=>v(H,e),()=>t(H)),i(Ut);var Kt=p(Ut,2),nt=n(Kt);let xe;var da=n(nt);b(da,{icon:"material-symbols:shuffle",class:"text-lg"}),i(nt);var vt=p(nt,2),va=n(vt);b(va,{icon:"material-symbols:skip-previous",class:"text-xl"}),i(vt);var st=p(vt,2);let ye;var ua=n(st);{var fa=e=>{b(e,{icon:"eos-icons:loading",class:"text-xl"})},pa=e=>{var h=tt(),L=G(h);{var M=s=>{b(s,{icon:"material-symbols:pause",class:"text-xl"})},j=s=>{b(s,{icon:"material-symbols:play-arrow",class:"text-xl"})};z(L,s=>{t(u)?s(M):s(j,!1)},!0)}I(e,h)};z(ua,e=>{t(w)?e(fa):e(pa,!1)})}i(st);var ut=p(st,2),ma=n(ut);b(ma,{icon:"material-symbols:skip-next",class:"text-xl"}),i(ut);var kt=p(ut,2);let _e;var ba=n(kt);{var ga=e=>{b(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},ha=e=>{var h=tt(),L=G(h);{var M=s=>{b(s,{icon:"material-symbols:repeat",class:"text-lg"})},j=s=>{b(s,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};z(L,s=>{t(C)===2?s(M):s(j,!1)},!0)}I(e,h)};z(ba,e=>{t(C)===1?e(ga):e(ha,!1)})}i(kt),i(Kt);var we=p(Kt,2),Et=n(we),xa=n(Et);{var ya=e=>{b(e,{icon:"material-symbols:volume-off",class:"text-lg"})},_a=e=>{var h=tt(),L=G(h);{var M=s=>{b(s,{icon:"material-symbols:volume-down",class:"text-lg"})},j=s=>{b(s,{icon:"material-symbols:volume-up",class:"text-lg"})};z(L,s=>{t(m)<.5?s(M):s(j,!1)},!0)}I(e,h)};z(xa,e=>{t(y)||t(m)===0?e(ya):e(_a,!1)})}i(Et);var Z=p(Et,2),wa=n(Z);i(Z),Ce(Z,e=>v(J,e),()=>t(J));var Lt=p(Z,2);let ke;var ka=n(Lt);b(ka,{icon:"material-symbols:queue-music",class:"text-lg"}),i(Lt),i(we),i(_t);var Ea=p(_t,2);{var La=e=>{var h=lr(),L=n(h),M=n(L),j=n(M,!0);i(M);var s=p(M,2),Y=n(s);b(Y,{icon:"material-symbols:close",class:"text-lg"}),i(s),i(L);var ot=p(L,2);Ha(ot,5,()=>t(d),Xa,(ft,X,W)=>{var q=or();let Tt;var pt=n(q),Ta=n(pt);{var Sa=N=>{b(N,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Ma=N=>{var Mt=tt(),Gt=G(Mt);{var Jt=lt=>{b(lt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Pa=lt=>{var Me=sr();Me.textContent=W+1,I(lt,Me)};z(Gt,lt=>{W===t(k)?lt(Jt):lt(Pa,!1)},!0)}I(N,Mt)};z(Ta,N=>{W===t(k)&&t(u)?N(Sa):N(Ma,!1)})}i(pt);var Ht=p(pt,2),Ee=n(Ht);i(Ht);var Le=p(Ht,2),St=n(Le);let Te;var Fa=n(St,!0);i(St);var Xt=p(St,2);let Se;var ja=n(Xt,!0);i(Xt),i(Le),i(q),Ft((N,Mt,Gt,Jt)=>{Tt=R(q,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,Tt,N),et(q,"aria-label",`播放 ${t(X).title??""} - ${t(X).artist??""}`),et(Ee,"src",Mt),et(Ee,"alt",t(X).title),Te=R(St,1,"font-medium truncate",null,Te,Gt),U(Fa,t(X).title),Se=R(Xt,1,"text-sm text-[var(--content-meta)] truncate",null,Se,Jt),U(ja,t(X).artist)},[()=>({"bg-[var(--btn-plain-bg)]":W===t(k),"text-[var(--primary)]":W===t(k)}),()=>ht(t(X).cover),()=>({"text-[var(--primary)]":W===t(k),"text-90":W!==t(k)}),()=>({"text-[var(--primary)]":W===t(k)})]),_("click",q,()=>gt(W)),_("keydown",q,N=>{(N.key==="Enter"||N.key===" ")&&(N.preventDefault(),gt(W))}),I(ft,q)}),i(ot),i(h),Ft(ft=>U(j,ft),[()=>Ja(Ga.playlist)]),_("click",s,Qt),er(3,h,()=>rr,()=>({duration:300,axis:"y"})),I(e,h)};z(Ea,e=>{t(T)&&e(La)})}i(zt),Ua(2),Ft((e,h,L,M,j,s,Y,ot,ft,X,W,q,Tt,pt)=>{se=R(zt,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,se,e),oe=R(at,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,oe,h),le=R(rt,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,le,L),et(At,"src",M),de=R(At,1,"w-full h-full object-cover transition-transform duration-300",null,de,j),U(ta,t(E).title),U(ea,t(E).artist),pe=R(_t,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,pe,s),et(me,"src",Y),be=R(me,1,"w-full h-full object-cover transition-transform duration-300",null,be,ot),U(ia,t(E).title),U(na,t(E).artist),U(sa,`${ft??""} / ${X??""}`),et(it,"aria-valuenow",t(F)>0?t(P)/t(F)*100:0),Fe(ca,`width: ${t(F)>0?t(P)/t(F)*100:0}%`),xe=R(nt,1,"w-10 h-10 rounded-lg",null,xe,W),nt.disabled=t(d).length<=1,vt.disabled=t(d).length<=1,ye=R(st,1,"btn-regular w-12 h-12 rounded-full",null,ye,q),st.disabled=t(w),ut.disabled=t(d).length<=1,_e=R(kt,1,"w-10 h-10 rounded-lg",null,_e,Tt),et(Z,"aria-valuenow",t(m)*100),Fe(wa,`width: ${t(m)*100}%`),ke=R(Lt,1,"btn-plain w-8 h-8 rounded-lg",null,ke,pt)},[()=>({expanded:t(f),"hidden-mode":t(c)}),()=>({"opacity-0":!t(c),"scale-0":!t(c),"pointer-events-none":!t(c)}),()=>({"opacity-0":t(f)||t(c),"scale-95":t(f)||t(c),"pointer-events-none":t(f)||t(c)}),()=>ht(t(E).cover),()=>({spinning:t(u)&&!t(w),"animate-pulse":t(w)}),()=>({"opacity-0":!t(f),"scale-95":!t(f),"pointer-events-none":!t(f)}),()=>ht(t(E).cover),()=>({spinning:t(u)&&!t(w),"animate-pulse":t(w)}),()=>ie(t(P)),()=>ie(t(F)),()=>({"btn-regular":t($),"btn-plain":!t($)}),()=>({"opacity-50":t(w)}),()=>({"btn-regular":t(C)>0,"btn-plain":t(C)===0}),()=>({"text-[var(--primary)]":t(T)})]),_("click",at,O),_("keydown",at,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),O())}),_("click",yt,ze(O)),_("click",Bt,ze(V)),_("click",rt,V),_("keydown",rt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),V())}),_("click",wt,O),_("click",qt,V),_("click",it,Ye),_("keydown",it,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(H).getBoundingClientRect();const L=.5*t(F);t(a)&&(D(a,t(a).currentTime=L),v(P,L))}}),_("click",nt,We),_("click",vt,De),_("click",st,bt),_("click",ut,Pt),_("click",kt,Ne),_("click",Et,re),_("click",Z,qe),_("keydown",Z,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&re())}),_("click",Lt,Qt),I(l,B)};z(Ke,l=>{l(He)})}I(o,ne),Ya()}export{_r as default};
