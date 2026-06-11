import{o as za,a as $a,i as Aa,s as N,b as it,e as Ce}from"./lifecycle.DVXYv02V.js";import{a3 as Ia,ab as Ra,aU as Wa,aV as Ba,i as Da,u as Na,aW as Ya,aX as Ie,aY as qa,q as Ua,aZ as gt,c as nt,f as tt,a as Y,p as Oa,b as Xa,h as l,m as L,ax as O,g as t,d as ut,s as u,e as i,r,v as Ha,t as zt,o as g}from"./utils.I031fIKC.js";import{a as Ka,s as G}from"./render.CXZIErzm.js";import{i as I}from"./if.UhLp8uqm.js";import{e as Va,i as Ga}from"./each.BWRjh538.js";import{b as ze}from"./this.DSTH8Ssi.js";import{I as f}from"./Icon.D7jBQwJc.js";import{m as $t}from"./config.LUhM0N6T.js";import{I as Za}from"./zh_TW.0MqjO24q.js";import{i as Ja}from"./translation.r_Sx-INO.js";import"./props.Hvxcl91v.js";const Qa=()=>performance.now(),Z={tick:d=>requestAnimationFrame(d),now:()=>Qa(),tasks:new Set};function Re(){const d=Z.now();Z.tasks.forEach(n=>{n.c(d)||(Z.tasks.delete(n),n.f())}),Z.tasks.size!==0&&Z.tick(Re)}function tr(d){let n;return Z.tasks.size===0&&Z.tick(Re),{promise:new Promise(w=>{Z.tasks.add(n={c:d,f:w})}),abort(){Z.tasks.delete(n)}}}function At(d,n){Ie(()=>{d.dispatchEvent(new CustomEvent(n))})}function er(d){if(d==="float")return"cssFloat";if(d==="offset")return"cssOffset";if(d.startsWith("--"))return d;const n=d.split("-");return n.length===1?n[0]:n[0]+n.slice(1).map(w=>w[0].toUpperCase()+w.slice(1)).join("")}function $e(d){const n={},w=d.split(";");for(const k of w){const[j,T]=k.split(":");if(!j||T===void 0)break;const R=er(j.trim());n[R]=T.trim()}return n}const ar=d=>d;function rr(d,n,w,k){var j=(d&Ya)!==0,T="both",R,x=n.inert,S=n.style.overflow,v,m;function A(){return Ie(()=>R??=w()(n,k?.()??{},{direction:T}))}var E={is_global:j,in(){n.inert=x,At(n,"introstart"),v=ee(n,A(),m,1,()=>{At(n,"introend"),v?.abort(),v=R=void 0,n.style.overflow=S})},out(z){n.inert=!0,At(n,"outrostart"),m=ee(n,A(),v,0,()=>{At(n,"outroend"),z?.()})},stop:()=>{v?.abort(),m?.abort()}},P=Ia;if((P.transitions??=[]).push(E),Ka){var C=j;if(!C){for(var c=P.parent;c&&(c.f&Ra)!==0;)for(;(c=c.parent)&&(c.f&Wa)===0;);C=!c||(c.f&Ba)!==0}C&&Da(()=>{Na(()=>E.in())})}}function ee(d,n,w,k,j){var T=k===1;if(qa(n)){var R,x=!1;return Ua(()=>{if(!x){var z=n({direction:T?"in":"out"});R=ee(d,z,w,k,j)}}),{abort:()=>{x=!0,R?.abort()},deactivate:()=>R.deactivate(),reset:()=>R.reset(),t:()=>R.t()}}if(w?.deactivate(),!n?.duration)return j(),{abort:gt,deactivate:gt,reset:gt,t:()=>k};const{delay:S=0,css:v,tick:m,easing:A=ar}=n;var E=[];if(T&&w===void 0&&(m&&m(0,1),v)){var P=$e(v(0,1));E.push(P,P)}var C=()=>1-k,c=d.animate(E,{duration:S,fill:"forwards"});return c.onfinish=()=>{c.cancel();var z=w?.t()??1-k;w?.abort();var b=k-z,et=n.duration*Math.abs(b),at=[];if(et>0){var W=!1;if(v)for(var h=Math.ceil(et/16.666666666666668),y=0;y<=h;y+=1){var a=z+b*A(y/h),J=$e(v(a,1-a));at.push(J),W||=J.overflow==="hidden"}W&&(d.style.overflow="hidden"),C=()=>{var X=c.currentTime;return z+b*A(X/et)},m&&tr(()=>{if(c.playState!=="running")return!1;var X=C();return m(X,1-X),!0})}c=d.animate(at,{duration:et,fill:"forwards"}),c.onfinish=()=>{C=()=>k,m?.(k,1-k),j()}},{abort:()=>{c&&(c.cancel(),c.effect=null,c.onfinish=gt)},deactivate:()=>{j=gt},reset:()=>{k===0&&m?.(1,0)},t:()=>C()}}function Ae(d){return function(...n){var w=n[0];return w.stopPropagation(),d?.apply(this,n)}}function ir(d){const n=d-1;return n*n*n+1}function nr(d,{delay:n=0,duration:w=400,easing:k=ir,axis:j="y"}={}){const T=getComputedStyle(d),R=+T.opacity,x=j==="y"?"height":"width",S=parseFloat(T[x]),v=j==="y"?["top","bottom"]:["left","right"],m=v.map(b=>`${b[0].toUpperCase()}${b.slice(1)}`),A=parseFloat(T[`padding${m[0]}`]),E=parseFloat(T[`padding${m[1]}`]),P=parseFloat(T[`margin${m[0]}`]),C=parseFloat(T[`margin${m[1]}`]),c=parseFloat(T[`border${m[0]}Width`]),z=parseFloat(T[`border${m[1]}Width`]);return{delay:n,duration:w,easing:k,css:b=>`overflow: hidden;opacity: ${Math.min(b*20,1)*R};${x}: ${b*S}px;padding-${v[0]}: ${b*A}px;padding-${v[1]}: ${b*E}px;margin-${v[0]}: ${b*P}px;margin-${v[1]}: ${b*C}px;border-${v[0]}-width: ${b*c}px;border-${v[1]}-width: ${b*z}px;min-${x}: 0`}}var sr=ut('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),or=ut('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),lr=ut('<span class="text-sm text-[var(--content-meta)]"></span>'),cr=ut('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),dr=ut('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),vr=ut(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
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
}</style>`,1);function kr(d,n){Xa(n,!1);const w="/minghui-blog/";let k=$t.meting_api??"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",j=$t.id,T=$t.server,R=$t.type,x=L(!1),S=L(!1),v=L(!1),m=L(!1),A=L(0),E=L(0),P=L(.7),C=L(!1),c=L(!1),z=L(!1),b=L(0),et=L(""),at=L(!1),W=L({title:"示例歌曲",artist:"示例艺术家",cover:`${w}favicon/favicon-light-192.png`,url:"",duration:0}),h=L([]),y=L(0),a=L(),J=L(),X=L();async function We(){if(!k||!j)return;l(c,!0);const s=k.replace(":server",T).replace(":type",R).replace(":id",j).replace(":auth","").replace(":r",Date.now().toString());try{const $=await fetch(s);if(!$.ok)throw new Error("meting api error");const H=await $.json();l(h,H.map(D=>{let ft=D.name??D.title??"未知歌曲",kt=D.artist??D.author??"未知艺术家",B=D.duration??0;return B>1e4&&(B=Math.floor(B/1e3)),(!Number.isFinite(B)||B<=0)&&(B=0),{id:D.id,title:ft,artist:kt,cover:D.pic??"",url:D.url??"",duration:B}})),t(h).length>0&&re(t(h)[0]),l(c,!1)}catch{Rt("Meting 歌单获取失败"),l(c,!1)}}function Be(){!t(a)||!t(W).url||(t(x)?t(a).pause():t(a).play())}function xt(){l(S,!t(S)),t(S)&&(l(m,!1),l(v,!1))}function yt(){l(v,!t(v)),t(v)&&(l(S,!1),l(m,!1))}function ae(){l(m,!t(m))}function De(){l(z,!t(z))}function Ne(){l(b,(t(b)+1)%3)}function Ye(){if(t(h).length<=1)return;const s=t(y)>0?t(y)-1:t(h).length-1;_t(s)}function It(){if(t(h).length<=1)return;let s;if(t(z))do s=Math.floor(Math.random()*t(h).length);while(s===t(y)&&t(h).length>1);else s=t(y)<t(h).length-1?t(y)+1:0;_t(s)}function _t(s){if(s<0||s>=t(h).length)return;const $=t(x);l(y,s),t(a)&&t(a).pause(),re(t(h)[t(y)]),($||!t(x))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function wt(s){return s.startsWith("http://")||s.startsWith("https://")||s.startsWith("/")?s:`/${s}`}function re(s){!s||!t(a)||(l(W,{...s}),s.url?(l(c,!0),t(a).pause(),O(a,t(a).currentTime=0),l(A,0),l(E,s.duration??0),t(a).removeEventListener("loadeddata",ie),t(a).removeEventListener("error",ne),t(a).removeEventListener("loadstart",se),t(a).addEventListener("loadeddata",ie,{once:!0}),t(a).addEventListener("error",ne,{once:!0}),t(a).addEventListener("loadstart",se,{once:!0}),O(a,t(a).src=wt(s.url)),t(a).load()):l(c,!1))}function ie(){l(c,!1),t(a)?.duration&&t(a).duration>1&&(l(E,Math.floor(t(a).duration)),t(h)[t(y)]&&O(h,t(h)[t(y)].duration=t(E)),O(W,t(W).duration=t(E)))}function ne(s){l(c,!1),Rt(`无法播放 "${t(W).title}"，正在尝试下一首...`),t(h).length>1?setTimeout(()=>It(),1e3):Rt("播放列表中没有可用的歌曲")}function se(){}function Rt(s){l(et,s),l(at,!0),setTimeout(()=>{l(at,!1)},3e3)}function qe(){l(at,!1)}function Ue(s){if(!t(a)||!t(J))return;const $=t(J).getBoundingClientRect(),D=(s.clientX-$.left)/$.width*t(E);O(a,t(a).currentTime=D),l(A,D)}function Oe(s){if(!t(a)||!t(X))return;const $=t(X).getBoundingClientRect(),H=Math.max(0,Math.min(1,(s.clientX-$.left)/$.width));l(P,H),O(a,t(a).volume=t(P)),l(C,t(P)===0)}function oe(){t(a)&&(l(C,!t(C)),O(a,t(a).muted=t(C)))}function le(s){if(!Number.isFinite(s)||s<0)return"0:00";const $=Math.floor(s/60),H=Math.floor(s%60);return`${$}:${H.toString().padStart(2,"0")}`}function Xe(){t(a)&&(t(a).addEventListener("play",()=>{l(x,!0)}),t(a).addEventListener("pause",()=>{l(x,!1)}),t(a).addEventListener("timeupdate",()=>{l(A,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(b)===1?(O(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(b)===2||t(y)<t(h).length-1||t(z)?It():l(x,!1)}),t(a).addEventListener("error",s=>{l(c,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}za(()=>{l(a,new Audio),O(a,t(a).volume=t(P)),Xe(),We()}),$a(()=>{t(a)&&(t(a).pause(),O(a,t(a).src=""))}),Aa();var ce=nt(),He=tt(ce);{var Ke=s=>{var $=vr(),H=tt($);{var D=e=>{var p=sr(),_=i(p),M=i(_);f(M,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var F=u(M,2),o=i(F,!0);r(F);var K=u(F,2),dt=i(K);f(dt,{icon:"material-symbols:close",class:"text-lg"}),r(K),r(_),r(p),zt(()=>G(o,t(et))),g("click",K,qe),Y(e,p)};I(H,e=>{t(at)&&e(D)})}var ft=u(H,2);let kt;var B=i(ft);let de;var Ve=i(B);{var Ge=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},Ze=e=>{var p=nt(),_=tt(p);{var M=o=>{var K=or();Y(o,K)},F=o=>{f(o,{icon:"material-symbols:music-note",class:"text-white text-lg"})};I(_,o=>{t(x)?o(M):o(F,!1)},!0)}Y(e,p)};I(Ve,e=>{t(c)?e(Ge):e(Ze,!1)})}r(B);var st=u(B,2);let ve;var ue=i(st),Wt=i(ue),Bt=i(Wt);let fe;var pe=u(Bt,2),Je=i(pe);{var Qe=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},ta=e=>{var p=nt(),_=tt(p);{var M=o=>{f(o,{icon:"material-symbols:pause",class:"text-white text-xl"})},F=o=>{f(o,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};I(_,o=>{t(x)?o(M):o(F,!1)},!0)}Y(e,p)};I(Je,e=>{t(c)?e(Qe):e(ta,!1)})}r(pe),r(Wt);var Dt=u(Wt,2),Nt=i(Dt),ea=i(Nt,!0);r(Nt);var me=u(Nt,2),aa=i(me,!0);r(me),r(Dt);var be=u(Dt,2),Et=i(be),ra=i(Et);f(ra,{icon:"material-symbols:visibility-off",class:"text-lg"}),r(Et);var Yt=u(Et,2),ia=i(Yt);f(ia,{icon:"material-symbols:expand-less",class:"text-lg"}),r(Yt),r(be),r(ue),r(st);var Lt=u(st,2);let he;var qt=i(Lt),Ut=i(qt),ge=i(Ut);let xe;r(Ut);var Ot=u(Ut,2),Xt=i(Ot),na=i(Xt,!0);r(Xt);var Ht=u(Xt,2),sa=i(Ht,!0);r(Ht);var ye=u(Ht,2),oa=i(ye);r(ye),r(Ot);var _e=u(Ot,2),Tt=i(_e),la=i(Tt);f(la,{icon:"material-symbols:visibility-off",class:"text-lg"}),r(Tt);var Kt=u(Tt,2),ca=i(Kt);f(ca,{icon:"material-symbols:expand-more",class:"text-lg"}),r(Kt),r(_e),r(qt);var Vt=u(qt,2),ot=i(Vt),da=i(ot);r(ot),ze(ot,e=>l(J,e),()=>t(J)),r(Vt);var Gt=u(Vt,2),lt=i(Gt);let we;var va=i(lt);f(va,{icon:"material-symbols:shuffle",class:"text-lg"}),r(lt);var pt=u(lt,2),ua=i(pt);f(ua,{icon:"material-symbols:skip-previous",class:"text-xl"}),r(pt);var ct=u(pt,2);let ke;var fa=i(ct);{var pa=e=>{f(e,{icon:"eos-icons:loading",class:"text-xl"})},ma=e=>{var p=nt(),_=tt(p);{var M=o=>{f(o,{icon:"material-symbols:pause",class:"text-xl"})},F=o=>{f(o,{icon:"material-symbols:play-arrow",class:"text-xl"})};I(_,o=>{t(x)?o(M):o(F,!1)},!0)}Y(e,p)};I(fa,e=>{t(c)?e(pa):e(ma,!1)})}r(ct);var mt=u(ct,2),ba=i(mt);f(ba,{icon:"material-symbols:skip-next",class:"text-xl"}),r(mt);var Mt=u(mt,2);let Ee;var ha=i(Mt);{var ga=e=>{f(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},xa=e=>{var p=nt(),_=tt(p);{var M=o=>{f(o,{icon:"material-symbols:repeat",class:"text-lg"})},F=o=>{f(o,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};I(_,o=>{t(b)===2?o(M):o(F,!1)},!0)}Y(e,p)};I(ha,e=>{t(b)===1?e(ga):e(xa,!1)})}r(Mt),r(Gt);var Le=u(Gt,2),St=i(Le),ya=i(St);{var _a=e=>{f(e,{icon:"material-symbols:volume-off",class:"text-lg"})},wa=e=>{var p=nt(),_=tt(p);{var M=o=>{f(o,{icon:"material-symbols:volume-down",class:"text-lg"})},F=o=>{f(o,{icon:"material-symbols:volume-up",class:"text-lg"})};I(_,o=>{t(P)<.5?o(M):o(F,!1)},!0)}Y(e,p)};I(ya,e=>{t(C)||t(P)===0?e(_a):e(wa,!1)})}r(St);var rt=u(St,2),ka=i(rt);r(rt),ze(rt,e=>l(X,e),()=>t(X));var Ft=u(rt,2);let Te;var Ea=i(Ft);f(Ea,{icon:"material-symbols:queue-music",class:"text-lg"}),r(Ft),r(Le),r(Lt);var La=u(Lt,2);{var Ta=e=>{var p=dr(),_=i(p),M=i(_),F=i(M,!0);r(M);var o=u(M,2),K=i(o);f(K,{icon:"material-symbols:close",class:"text-lg"}),r(o),r(_);var dt=u(_,2);Va(dt,5,()=>t(h),Ga,(bt,Q,q)=>{var V=cr();let jt;var ht=i(V),Ma=i(ht);{var Sa=U=>{f(U,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Fa=U=>{var Ct=nt(),Qt=tt(Ct);{var te=vt=>{f(vt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Ca=vt=>{var Pe=lr();Pe.textContent=q+1,Y(vt,Pe)};I(Qt,vt=>{q===t(y)?vt(te):vt(Ca,!1)},!0)}Y(U,Ct)};I(Ma,U=>{q===t(y)&&t(x)?U(Sa):U(Fa,!1)})}r(ht);var Zt=u(ht,2),Me=i(Zt);r(Zt);var Se=u(Zt,2),Pt=i(Se);let Fe;var ja=i(Pt,!0);r(Pt);var Jt=u(Pt,2);let je;var Pa=i(Jt,!0);r(Jt),r(Se),r(V),zt((U,Ct,Qt,te)=>{jt=N(V,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,jt,U),it(V,"aria-label",`播放 ${t(Q).title??""} - ${t(Q).artist??""}`),it(Me,"src",Ct),it(Me,"alt",t(Q).title),Fe=N(Pt,1,"font-medium truncate",null,Fe,Qt),G(ja,t(Q).title),je=N(Jt,1,"text-sm text-[var(--content-meta)] truncate",null,je,te),G(Pa,t(Q).artist)},[()=>({"bg-[var(--btn-plain-bg)]":q===t(y),"text-[var(--primary)]":q===t(y)}),()=>wt(t(Q).cover),()=>({"text-[var(--primary)]":q===t(y),"text-90":q!==t(y)}),()=>({"text-[var(--primary)]":q===t(y)})]),g("click",V,()=>_t(q)),g("keydown",V,U=>{(U.key==="Enter"||U.key===" ")&&(U.preventDefault(),_t(q))}),Y(bt,V)}),r(dt),r(p),zt(bt=>G(F,bt),[()=>Ja(Za.playlist)]),g("click",o,ae),rr(3,p,()=>nr,()=>({duration:300,axis:"y"})),Y(e,p)};I(La,e=>{t(m)&&e(Ta)})}r(ft),Ha(2),zt((e,p,_,M,F,o,K,dt,bt,Q,q,V,jt,ht)=>{kt=N(ft,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,kt,e),de=N(B,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,de,p),ve=N(st,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,ve,_),it(Bt,"src",M),fe=N(Bt,1,"w-full h-full object-cover transition-transform duration-300",null,fe,F),G(ea,t(W).title),G(aa,t(W).artist),he=N(Lt,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,he,o),it(ge,"src",K),xe=N(ge,1,"w-full h-full object-cover transition-transform duration-300",null,xe,dt),G(na,t(W).title),G(sa,t(W).artist),G(oa,`${bt??""} / ${Q??""}`),it(ot,"aria-valuenow",t(E)>0?t(A)/t(E)*100:0),Ce(da,`width: ${t(E)>0?t(A)/t(E)*100:0}%`),we=N(lt,1,"w-10 h-10 rounded-lg",null,we,q),lt.disabled=t(h).length<=1,pt.disabled=t(h).length<=1,ke=N(ct,1,"btn-regular w-12 h-12 rounded-full",null,ke,V),ct.disabled=t(c),mt.disabled=t(h).length<=1,Ee=N(Mt,1,"w-10 h-10 rounded-lg",null,Ee,jt),it(rt,"aria-valuenow",t(P)*100),Ce(ka,`width: ${t(P)*100}%`),Te=N(Ft,1,"btn-plain w-8 h-8 rounded-lg",null,Te,ht)},[()=>({expanded:t(S),"hidden-mode":t(v)}),()=>({"opacity-0":!t(v),"scale-0":!t(v),"pointer-events-none":!t(v)}),()=>({"opacity-0":t(S)||t(v),"scale-95":t(S)||t(v),"pointer-events-none":t(S)||t(v)}),()=>wt(t(W).cover),()=>({spinning:t(x)&&!t(c),"animate-pulse":t(c)}),()=>({"opacity-0":!t(S),"scale-95":!t(S),"pointer-events-none":!t(S)}),()=>wt(t(W).cover),()=>({spinning:t(x)&&!t(c),"animate-pulse":t(c)}),()=>le(t(A)),()=>le(t(E)),()=>({"btn-regular":t(z),"btn-plain":!t(z)}),()=>({"opacity-50":t(c)}),()=>({"btn-regular":t(b)>0,"btn-plain":t(b)===0}),()=>({"text-[var(--primary)]":t(m)})]),g("click",B,yt),g("keydown",B,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),yt())}),g("click",Et,Ae(yt)),g("click",Yt,Ae(xt)),g("click",st,xt),g("keydown",st,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),xt())}),g("click",Tt,yt),g("click",Kt,xt),g("click",ot,Ue),g("keydown",ot,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(J).getBoundingClientRect();const _=.5*t(E);t(a)&&(O(a,t(a).currentTime=_),l(A,_))}}),g("click",lt,De),g("click",pt,Ye),g("click",ct,Be),g("click",mt,It),g("click",Mt,Ne),g("click",St,oe),g("click",rt,Oe),g("keydown",rt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&oe())}),g("click",Ft,ae),Y(s,$)};I(He,s=>{s(Ke)})}Y(d,ce),Oa()}export{kr as default};
