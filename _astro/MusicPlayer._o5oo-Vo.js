import{o as za,a as $a,i as Aa}from"./lifecycle.OxZKTpi0.js";import{$ as Ia,a7 as Ra,aJ as Ba,aK as Wa,aL as Ae,u as Ie,aM as Na,ac as Re,aN as Oa,U as Be,aO as mt,a5 as Da,aP as Ya,c as tt,f as G,a as I,p as qa,b as Ua,s as v,m as S,ak as O,g as t,d as ct,h as p,e as n,r as i,n as Ka,t as Ft}from"./template.BjuiTig8.js";import{a as Ha,s as U}from"./render.BmKFLAcy.js";import{i as z}from"./if.D5h-4qKe.js";import{e as Xa,i as Ga}from"./each.DZqPV-mU.js";import{a as R,s as et,c as Pe}from"./props.CCwlc0S8.js";import{e as _}from"./utils.D-kq7FMU.js";import{I as b}from"./Icon.CVSAqIrG.js";import"./config.CWnQQcYg.js";import{I as Ja}from"./zh_TW.0MqjO24q.js";import{i as Va}from"./translation._haqG1LB.js";const Qa=()=>performance.now(),K={tick:l=>requestAnimationFrame(l),now:()=>Qa(),tasks:new Set};function We(){const l=K.now();K.tasks.forEach(r=>{r.c(l)||(K.tasks.delete(r),r.f())}),K.tasks.size!==0&&K.tick(We)}function Za(l){let r;return K.tasks.size===0&&K.tick(We),{promise:new Promise(g=>{K.tasks.add(r={c:l,f:g})}),abort(){K.tasks.delete(r)}}}function Pt(l,r){Re(()=>{l.dispatchEvent(new CustomEvent(r))})}function tr(l){if(l==="float")return"cssFloat";if(l==="offset")return"cssOffset";if(l.startsWith("--"))return l;const r=l.split("-");return r.length===1?r[0]:r[0]+r.slice(1).map(g=>g[0].toUpperCase()+g.slice(1)).join("")}function je(l){const r={},g=l.split(";");for(const u of g){const[f,c]=u.split(":");if(!f||c===void 0)break;const T=tr(f.trim());r[T]=c.trim()}return r}const er=l=>l;function ar(l,r,g,u){var f=(l&Na)!==0,c="both",T,j=r.inert,F=r.style.overflow,m,y;function w(){return Re(()=>T??=g()(r,u?.()??{},{direction:c}))}var $={is_global:f,in(){r.inert=j,Pt(r,"introstart"),m=Qt(r,w(),y,1,()=>{Pt(r,"introend"),m?.abort(),m=T=void 0,r.style.overflow=F})},out(E){r.inert=!0,Pt(r,"outrostart"),y=Qt(r,w(),m,0,()=>{Pt(r,"outroend"),E?.()})},stop:()=>{m?.abort(),y?.abort()}},C=Ia;if((C.transitions??=[]).push($),Ha){var A=f;if(!A){for(var x=C.parent;x&&(x.f&Ra)!==0;)for(;(x=x.parent)&&(x.f&Ba)===0;);A=!x||(x.f&Wa)!==0}A&&Ae(()=>{Ie(()=>$.in())})}}function Qt(l,r,g,u,f){var c=u===1;if(Oa(r)){var T,j=!1;return Be(()=>{if(!j){var E=r({direction:c?"in":"out"});T=Qt(l,E,g,u,f)}}),{abort:()=>{j=!0,T?.abort()},deactivate:()=>T.deactivate(),reset:()=>T.reset(),t:()=>T.t()}}if(g?.deactivate(),!r?.duration)return f(),{abort:mt,deactivate:mt,reset:mt,t:()=>u};const{delay:F=0,css:m,tick:y,easing:w=er}=r;var $=[];if(c&&g===void 0&&(y&&y(0,1),m)){var C=je(m(0,1));$.push(C,C)}var A=()=>1-u,x=l.animate($,{duration:F,fill:"forwards"});return x.onfinish=()=>{x.cancel();var E=g?.t()??1-u;g?.abort();var d=u-E,k=r.duration*Math.abs(d),a=[];if(k>0){var H=!1;if(m)for(var J=Math.ceil(k/16.666666666666668),dt=0;dt<=J;dt+=1){var bt=E+d*w(dt/J),V=je(m(bt,1-bt));a.push(V),H||=V.overflow==="hidden"}H&&(l.style.overflow="hidden"),A=()=>{var D=x.currentTime;return E+d*w(D/k)},y&&Za(()=>{if(x.playState!=="running")return!1;var D=A();return y(D,1-D),!0})}x=l.animate(a,{duration:k,fill:"forwards"}),x.onfinish=()=>{A=()=>u,y?.(u,1-u),f()}},{abort:()=>{x&&(x.cancel(),x.effect=null,x.onfinish=mt)},deactivate:()=>{f=mt},reset:()=>{u===0&&y?.(1,0)},t:()=>A()}}function Ce(l,r){return l===r||l?.[Ya]===r}function ze(l={},r,g,u){return Ae(()=>{var f,c;return Da(()=>{f=c,c=[],Ie(()=>{l!==g(...c)&&(r(l,...c),f&&Ce(g(...f),l)&&r(null,...f))})}),()=>{Be(()=>{c&&Ce(g(...c),l)&&r(null,...c)})}}),l}function $e(l){return function(...r){var g=r[0];return g.stopPropagation(),l?.apply(this,r)}}function rr(l){const r=l-1;return r*r*r+1}function ir(l,{delay:r=0,duration:g=400,easing:u=rr,axis:f="y"}={}){const c=getComputedStyle(l),T=+c.opacity,j=f==="y"?"height":"width",F=parseFloat(c[j]),m=f==="y"?["top","bottom"]:["left","right"],y=m.map(d=>`${d[0].toUpperCase()}${d.slice(1)}`),w=parseFloat(c[`padding${y[0]}`]),$=parseFloat(c[`padding${y[1]}`]),C=parseFloat(c[`margin${y[0]}`]),A=parseFloat(c[`margin${y[1]}`]),x=parseFloat(c[`border${y[0]}Width`]),E=parseFloat(c[`border${y[1]}Width`]);return{delay:r,duration:g,easing:u,css:d=>`overflow: hidden;opacity: ${Math.min(d*20,1)*T};${j}: ${d*F}px;padding-${m[0]}: ${d*w}px;padding-${m[1]}: ${d*$}px;margin-${m[0]}: ${d*C}px;margin-${m[1]}: ${d*A}px;border-${m[0]}-width: ${d*x}px;border-${m[1]}-width: ${d*E}px;min-${j}: 0`}}var nr=ct('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),sr=ct('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),or=ct('<span class="text-sm text-[var(--content-meta)]"></span>'),lr=ct('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),cr=ct('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),dr=ct(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
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
}</style>`,1);function wr(l,r){Ua(r,!1);const g="/minghui-blog/";let u=S(!1),f=S(!1),c=S(!1),T=S(!1),j=S(0),F=S(0),m=S(.7),y=S(!1),w=S(!1),$=S(!1),C=S(0),A=S(""),x=S(!1),E=S({title:"示例歌曲",artist:"示例艺术家",cover:`${g}favicon/favicon-light-192.png`,url:"",duration:0}),d=S([]),k=S(0),a=S(),H=S(),J=S();const dt=[{id:1,title:"幸せの記憶",artist:"未知艺术家",cover:"assets/music/cover/hitori.jpg",url:"assets/music/url/幸せの記憶.mp3",duration:240}];function bt(){!t(a)||!t(E).url||(t(u)?t(a).pause():t(a).play())}function V(){v(f,!t(f)),t(f)&&(v(T,!1),v(c,!1))}function D(){v(c,!t(c)),t(c)&&(v(f,!1),v(T,!1))}function Zt(){v(T,!t(T))}function Ne(){v($,!t($))}function Oe(){v(C,(t(C)+1)%3)}function De(){if(t(d).length<=1)return;const s=t(k)>0?t(k)-1:t(d).length-1;gt(s)}function jt(){if(t(d).length<=1)return;let s;if(t($))do s=Math.floor(Math.random()*t(d).length);while(s===t(k)&&t(d).length>1);else s=t(k)<t(d).length-1?t(k)+1:0;gt(s)}function gt(s){if(s<0||s>=t(d).length)return;const B=t(u);v(k,s),t(a)&&t(a).pause(),te(t(d)[t(k)]),(B||!t(u))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function ht(s){return s.startsWith("http://")||s.startsWith("https://")?s:s.startsWith("/")?g+s.slice(1):g+s}function te(s){!s||!t(a)||(v(E,{...s}),s.url?(v(w,!0),t(a).pause(),O(a,t(a).currentTime=0),v(j,0),v(F,s.duration??0),t(a).removeEventListener("loadeddata",ee),t(a).removeEventListener("error",ae),t(a).removeEventListener("loadstart",re),t(a).addEventListener("loadeddata",ee,{once:!0}),t(a).addEventListener("error",ae,{once:!0}),t(a).addEventListener("loadstart",re,{once:!0}),O(a,t(a).src=ht(s.url)),t(a).load()):v(w,!1))}let Ct=!1;function ee(){v(w,!1),t(a)?.duration&&t(a).duration>1&&(v(F,Math.floor(t(a).duration)),t(d)[t(k)]&&O(d,t(d)[t(k)].duration=t(F)),O(E,t(E).duration=t(F))),Ct&&(Ct=!1,t(a).play().catch(()=>{const s=()=>{t(a).play().catch(()=>{}),document.removeEventListener("click",s),document.removeEventListener("touchstart",s)};document.addEventListener("click",s,{once:!0}),document.addEventListener("touchstart",s,{once:!0})}))}function ae(s){v(w,!1),zt(`无法播放 "${t(E).title}"，正在尝试下一首...`),t(d).length>1?setTimeout(()=>jt(),1e3):zt("播放列表中没有可用的歌曲")}function re(){}function zt(s){v(A,s),v(x,!0),setTimeout(()=>{v(x,!1)},3e3)}function Ye(){v(x,!1)}function qe(s){if(!t(a)||!t(H))return;const B=t(H).getBoundingClientRect(),xt=(s.clientX-B.left)/B.width*t(F);O(a,t(a).currentTime=xt),v(j,xt)}function Ue(s){if(!t(a)||!t(J))return;const B=t(J).getBoundingClientRect(),Q=Math.max(0,Math.min(1,(s.clientX-B.left)/B.width));v(m,Q),O(a,t(a).volume=t(m)),v(y,t(m)===0)}function ie(){t(a)&&(v(y,!t(y)),O(a,t(a).muted=t(y)))}function ne(s){if(!Number.isFinite(s)||s<0)return"0:00";const B=Math.floor(s/60),Q=Math.floor(s%60);return`${B}:${Q.toString().padStart(2,"0")}`}function Ke(){t(a)&&(t(a).addEventListener("play",()=>{v(u,!0)}),t(a).addEventListener("pause",()=>{v(u,!1)}),t(a).addEventListener("timeupdate",()=>{v(j,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(C)===1?(O(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(C)===2||t(k)<t(d).length-1||t($)?jt():v(u,!1)}),t(a).addEventListener("error",s=>{v(w,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}za(()=>{v(a,new Audio),O(a,t(a).volume=t(m)),Ke(),v(d,[...dt]),t(d).length>0?(Ct=!0,te(t(d)[0])):zt("本地播放列表为空")}),$a(()=>{t(a)&&(t(a).pause(),O(a,t(a).src=""))}),Aa();var se=tt(),He=G(se);{var Xe=s=>{var B=dr(),Q=G(B);{var xt=e=>{var h=nr(),L=n(h),M=n(L);b(M,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var P=p(M,2),o=n(P,!0);i(P);var Y=p(P,2),ot=n(Y);b(ot,{icon:"material-symbols:close",class:"text-lg"}),i(Y),i(L),i(h),Ft(()=>U(o,t(A))),_("click",Y,Ye),I(e,h)};z(Q,e=>{t(x)&&e(xt)})}var $t=p(Q,2);let oe;var at=n($t);let le;var Ge=n(at);{var Je=e=>{b(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},Ve=e=>{var h=tt(),L=G(h);{var M=o=>{var Y=sr();I(o,Y)},P=o=>{b(o,{icon:"material-symbols:music-note",class:"text-white text-lg"})};z(L,o=>{t(u)?o(M):o(P,!1)},!0)}I(e,h)};z(Ge,e=>{t(w)?e(Je):e(Ve,!1)})}i(at);var rt=p(at,2);let ce;var de=n(rt),At=n(de),It=n(At);let ve;var ue=p(It,2),Qe=n(ue);{var Ze=e=>{b(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},ta=e=>{var h=tt(),L=G(h);{var M=o=>{b(o,{icon:"material-symbols:pause",class:"text-white text-xl"})},P=o=>{b(o,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};z(L,o=>{t(u)?o(M):o(P,!1)},!0)}I(e,h)};z(Qe,e=>{t(w)?e(Ze):e(ta,!1)})}i(ue),i(At);var Rt=p(At,2),Bt=n(Rt),ea=n(Bt,!0);i(Bt);var fe=p(Bt,2),aa=n(fe,!0);i(fe),i(Rt);var pe=p(Rt,2),yt=n(pe),ra=n(yt);b(ra,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(yt);var Wt=p(yt,2),ia=n(Wt);b(ia,{icon:"material-symbols:expand-less",class:"text-lg"}),i(Wt),i(pe),i(de),i(rt);var _t=p(rt,2);let me;var Nt=n(_t),Ot=n(Nt),be=n(Ot);let ge;i(Ot);var Dt=p(Ot,2),Yt=n(Dt),na=n(Yt,!0);i(Yt);var qt=p(Yt,2),sa=n(qt,!0);i(qt);var he=p(qt,2),oa=n(he);i(he),i(Dt);var xe=p(Dt,2),wt=n(xe),la=n(wt);b(la,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(wt);var Ut=p(wt,2),ca=n(Ut);b(ca,{icon:"material-symbols:expand-more",class:"text-lg"}),i(Ut),i(xe),i(Nt);var Kt=p(Nt,2),it=n(Kt),da=n(it);i(it),ze(it,e=>v(H,e),()=>t(H)),i(Kt);var Ht=p(Kt,2),nt=n(Ht);let ye;var va=n(nt);b(va,{icon:"material-symbols:shuffle",class:"text-lg"}),i(nt);var vt=p(nt,2),ua=n(vt);b(ua,{icon:"material-symbols:skip-previous",class:"text-xl"}),i(vt);var st=p(vt,2);let _e;var fa=n(st);{var pa=e=>{b(e,{icon:"eos-icons:loading",class:"text-xl"})},ma=e=>{var h=tt(),L=G(h);{var M=o=>{b(o,{icon:"material-symbols:pause",class:"text-xl"})},P=o=>{b(o,{icon:"material-symbols:play-arrow",class:"text-xl"})};z(L,o=>{t(u)?o(M):o(P,!1)},!0)}I(e,h)};z(fa,e=>{t(w)?e(pa):e(ma,!1)})}i(st);var ut=p(st,2),ba=n(ut);b(ba,{icon:"material-symbols:skip-next",class:"text-xl"}),i(ut);var kt=p(ut,2);let we;var ga=n(kt);{var ha=e=>{b(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},xa=e=>{var h=tt(),L=G(h);{var M=o=>{b(o,{icon:"material-symbols:repeat",class:"text-lg"})},P=o=>{b(o,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};z(L,o=>{t(C)===2?o(M):o(P,!1)},!0)}I(e,h)};z(ga,e=>{t(C)===1?e(ha):e(xa,!1)})}i(kt),i(Ht);var ke=p(Ht,2),Et=n(ke),ya=n(Et);{var _a=e=>{b(e,{icon:"material-symbols:volume-off",class:"text-lg"})},wa=e=>{var h=tt(),L=G(h);{var M=o=>{b(o,{icon:"material-symbols:volume-down",class:"text-lg"})},P=o=>{b(o,{icon:"material-symbols:volume-up",class:"text-lg"})};z(L,o=>{t(m)<.5?o(M):o(P,!1)},!0)}I(e,h)};z(ya,e=>{t(y)||t(m)===0?e(_a):e(wa,!1)})}i(Et);var Z=p(Et,2),ka=n(Z);i(Z),ze(Z,e=>v(J,e),()=>t(J));var Lt=p(Z,2);let Ee;var Ea=n(Lt);b(Ea,{icon:"material-symbols:queue-music",class:"text-lg"}),i(Lt),i(ke),i(_t);var La=p(_t,2);{var Ta=e=>{var h=cr(),L=n(h),M=n(L),P=n(M,!0);i(M);var o=p(M,2),Y=n(o);b(Y,{icon:"material-symbols:close",class:"text-lg"}),i(o),i(L);var ot=p(L,2);Xa(ot,5,()=>t(d),Ga,(ft,X,W)=>{var q=lr();let Tt;var pt=n(q),Sa=n(pt);{var Ma=N=>{b(N,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Fa=N=>{var Mt=tt(),Jt=G(Mt);{var Vt=lt=>{b(lt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Ca=lt=>{var Fe=or();Fe.textContent=W+1,I(lt,Fe)};z(Jt,lt=>{W===t(k)?lt(Vt):lt(Ca,!1)},!0)}I(N,Mt)};z(Sa,N=>{W===t(k)&&t(u)?N(Ma):N(Fa,!1)})}i(pt);var Xt=p(pt,2),Le=n(Xt);i(Xt);var Te=p(Xt,2),St=n(Te);let Se;var Pa=n(St,!0);i(St);var Gt=p(St,2);let Me;var ja=n(Gt,!0);i(Gt),i(Te),i(q),Ft((N,Mt,Jt,Vt)=>{Tt=R(q,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,Tt,N),et(q,"aria-label",`播放 ${t(X).title??""} - ${t(X).artist??""}`),et(Le,"src",Mt),et(Le,"alt",t(X).title),Se=R(St,1,"font-medium truncate",null,Se,Jt),U(Pa,t(X).title),Me=R(Gt,1,"text-sm text-[var(--content-meta)] truncate",null,Me,Vt),U(ja,t(X).artist)},[()=>({"bg-[var(--btn-plain-bg)]":W===t(k),"text-[var(--primary)]":W===t(k)}),()=>ht(t(X).cover),()=>({"text-[var(--primary)]":W===t(k),"text-90":W!==t(k)}),()=>({"text-[var(--primary)]":W===t(k)})]),_("click",q,()=>gt(W)),_("keydown",q,N=>{(N.key==="Enter"||N.key===" ")&&(N.preventDefault(),gt(W))}),I(ft,q)}),i(ot),i(h),Ft(ft=>U(P,ft),[()=>Va(Ja.playlist)]),_("click",o,Zt),ar(3,h,()=>ir,()=>({duration:300,axis:"y"})),I(e,h)};z(La,e=>{t(T)&&e(Ta)})}i($t),Ka(2),Ft((e,h,L,M,P,o,Y,ot,ft,X,W,q,Tt,pt)=>{oe=R($t,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,oe,e),le=R(at,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,le,h),ce=R(rt,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,ce,L),et(It,"src",M),ve=R(It,1,"w-full h-full object-cover transition-transform duration-300",null,ve,P),U(ea,t(E).title),U(aa,t(E).artist),me=R(_t,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,me,o),et(be,"src",Y),ge=R(be,1,"w-full h-full object-cover transition-transform duration-300",null,ge,ot),U(na,t(E).title),U(sa,t(E).artist),U(oa,`${ft??""} / ${X??""}`),et(it,"aria-valuenow",t(F)>0?t(j)/t(F)*100:0),Pe(da,`width: ${t(F)>0?t(j)/t(F)*100:0}%`),ye=R(nt,1,"w-10 h-10 rounded-lg",null,ye,W),nt.disabled=t(d).length<=1,vt.disabled=t(d).length<=1,_e=R(st,1,"btn-regular w-12 h-12 rounded-full",null,_e,q),st.disabled=t(w),ut.disabled=t(d).length<=1,we=R(kt,1,"w-10 h-10 rounded-lg",null,we,Tt),et(Z,"aria-valuenow",t(m)*100),Pe(ka,`width: ${t(m)*100}%`),Ee=R(Lt,1,"btn-plain w-8 h-8 rounded-lg",null,Ee,pt)},[()=>({expanded:t(f),"hidden-mode":t(c)}),()=>({"opacity-0":!t(c),"scale-0":!t(c),"pointer-events-none":!t(c)}),()=>({"opacity-0":t(f)||t(c),"scale-95":t(f)||t(c),"pointer-events-none":t(f)||t(c)}),()=>ht(t(E).cover),()=>({spinning:t(u)&&!t(w),"animate-pulse":t(w)}),()=>({"opacity-0":!t(f),"scale-95":!t(f),"pointer-events-none":!t(f)}),()=>ht(t(E).cover),()=>({spinning:t(u)&&!t(w),"animate-pulse":t(w)}),()=>ne(t(j)),()=>ne(t(F)),()=>({"btn-regular":t($),"btn-plain":!t($)}),()=>({"opacity-50":t(w)}),()=>({"btn-regular":t(C)>0,"btn-plain":t(C)===0}),()=>({"text-[var(--primary)]":t(T)})]),_("click",at,D),_("keydown",at,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),D())}),_("click",yt,$e(D)),_("click",Wt,$e(V)),_("click",rt,V),_("keydown",rt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),V())}),_("click",wt,D),_("click",Ut,V),_("click",it,qe),_("keydown",it,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(H).getBoundingClientRect();const L=.5*t(F);t(a)&&(O(a,t(a).currentTime=L),v(j,L))}}),_("click",nt,Ne),_("click",vt,De),_("click",st,bt),_("click",ut,jt),_("click",kt,Oe),_("click",Et,ie),_("click",Z,Ue),_("keydown",Z,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&ie())}),_("click",Lt,Zt),I(s,B)};z(He,s=>{s(Xe)})}I(l,se),qa()}export{wr as default};
