import{o as Ra,a as Ba,i as Na}from"./lifecycle.OxZKTpi0.js";import{$ as Wa,a7 as Da,aJ as Oa,aK as Ya,aL as Re,u as Be,aM as Ua,ac as Ne,aN as qa,U as We,aO as gt,a5 as Ka,aP as Ha,c as it,f as tt,a as D,p as Xa,b as Ga,s as c,m as M,ak as q,g as t,d as ut,h as u,e as n,r as i,n as Ja,t as $t}from"./template.BjuiTig8.js";import{a as Va,s as J}from"./render.BmKFLAcy.js";import{i as I}from"./if.D5h-4qKe.js";import{e as Qa,i as Za}from"./each.DZqPV-mU.js";import{a as O,s as nt,c as Ce}from"./props.CCwlc0S8.js";import{e as y}from"./utils.D-kq7FMU.js";import{I as f}from"./Icon.CVSAqIrG.js";import{m as zt}from"./config.CavSKj-_.js";import{I as tr}from"./zh_TW.0MqjO24q.js";import{i as er}from"./translation.CwonVH_H.js";const ar=()=>performance.now(),V={tick:o=>requestAnimationFrame(o),now:()=>ar(),tasks:new Set};function De(){const o=V.now();V.tasks.forEach(r=>{r.c(o)||(V.tasks.delete(r),r.f())}),V.tasks.size!==0&&V.tick(De)}function rr(o){let r;return V.tasks.size===0&&V.tick(De),{promise:new Promise(b=>{V.tasks.add(r={c:o,f:b})}),abort(){V.tasks.delete(r)}}}function At(o,r){Ne(()=>{o.dispatchEvent(new CustomEvent(r))})}function ir(o){if(o==="float")return"cssFloat";if(o==="offset")return"cssOffset";if(o.startsWith("--"))return o;const r=o.split("-");return r.length===1?r[0]:r[0]+r.slice(1).map(b=>b[0].toUpperCase()+b.slice(1)).join("")}function $e(o){const r={},b=o.split(";");for(const L of b){const[_,p]=L.split(":");if(!_||p===void 0)break;const R=ir(_.trim());r[R]=p.trim()}return r}const nr=o=>o;function sr(o,r,b,L){var _=(o&Ua)!==0,p="both",R,w=r.inert,F=r.style.overflow,v,h;function A(){return Ne(()=>R??=b()(r,L?.()??{},{direction:p}))}var T={is_global:_,in(){r.inert=w,At(r,"introstart"),v=ee(r,A(),h,1,()=>{At(r,"introend"),v?.abort(),v=R=void 0,r.style.overflow=F})},out($){r.inert=!0,At(r,"outrostart"),h=ee(r,A(),v,0,()=>{At(r,"outroend"),$?.()})},stop:()=>{v?.abort(),h?.abort()}},j=Wa;if((j.transitions??=[]).push(T),Va){var C=_;if(!C){for(var d=j.parent;d&&(d.f&Da)!==0;)for(;(d=d.parent)&&(d.f&Oa)===0;);C=!d||(d.f&Ya)!==0}C&&Re(()=>{Be(()=>T.in())})}}function ee(o,r,b,L,_){var p=L===1;if(qa(r)){var R,w=!1;return We(()=>{if(!w){var $=r({direction:p?"in":"out"});R=ee(o,$,b,L,_)}}),{abort:()=>{w=!0,R?.abort()},deactivate:()=>R.deactivate(),reset:()=>R.reset(),t:()=>R.t()}}if(b?.deactivate(),!r?.duration)return _(),{abort:gt,deactivate:gt,reset:gt,t:()=>L};const{delay:F=0,css:v,tick:h,easing:A=nr}=r;var T=[];if(p&&b===void 0&&(h&&h(0,1),v)){var j=$e(v(0,1));T.push(j,j)}var C=()=>1-L,d=o.animate(T,{duration:F,fill:"forwards"});return d.onfinish=()=>{d.cancel();var $=b?.t()??1-L;b?.abort();var g=L-$,et=r.duration*Math.abs(g),at=[];if(et>0){var B=!1;if(v)for(var x=Math.ceil(et/16.666666666666668),k=0;k<=x;k+=1){var a=$+g*A(k/x),Q=$e(v(a,1-a));at.push(Q),B||=Q.overflow==="hidden"}B&&(o.style.overflow="hidden"),C=()=>{var K=d.currentTime;return $+g*A(K/et)},h&&rr(()=>{if(d.playState!=="running")return!1;var K=C();return h(K,1-K),!0})}d=o.animate(at,{duration:et,fill:"forwards"}),d.onfinish=()=>{C=()=>L,h?.(L,1-L),_()}},{abort:()=>{d&&(d.cancel(),d.effect=null,d.onfinish=gt)},deactivate:()=>{_=gt},reset:()=>{L===0&&h?.(1,0)},t:()=>C()}}function ze(o,r){return o===r||o?.[Ha]===r}function Ae(o={},r,b,L){return Re(()=>{var _,p;return Ka(()=>{_=p,p=[],Be(()=>{o!==b(...p)&&(r(o,...p),_&&ze(b(..._),o)&&r(null,..._))})}),()=>{We(()=>{p&&ze(b(...p),o)&&r(null,...p)})}}),o}function Ie(o){return function(...r){var b=r[0];return b.stopPropagation(),o?.apply(this,r)}}function lr(o){const r=o-1;return r*r*r+1}function or(o,{delay:r=0,duration:b=400,easing:L=lr,axis:_="y"}={}){const p=getComputedStyle(o),R=+p.opacity,w=_==="y"?"height":"width",F=parseFloat(p[w]),v=_==="y"?["top","bottom"]:["left","right"],h=v.map(g=>`${g[0].toUpperCase()}${g.slice(1)}`),A=parseFloat(p[`padding${h[0]}`]),T=parseFloat(p[`padding${h[1]}`]),j=parseFloat(p[`margin${h[0]}`]),C=parseFloat(p[`margin${h[1]}`]),d=parseFloat(p[`border${h[0]}Width`]),$=parseFloat(p[`border${h[1]}Width`]);return{delay:r,duration:b,easing:L,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*R};${w}: ${g*F}px;padding-${v[0]}: ${g*A}px;padding-${v[1]}: ${g*T}px;margin-${v[0]}: ${g*j}px;margin-${v[1]}: ${g*C}px;border-${v[0]}-width: ${g*d}px;border-${v[1]}-width: ${g*$}px;min-${w}: 0`}}var cr=ut('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),dr=ut('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),vr=ut('<span class="text-sm text-[var(--content-meta)]"></span>'),ur=ut('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),fr=ut('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),pr=ut(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
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
}</style>`,1);function Tr(o,r){Ga(r,!1);const b="/minghui-blog/";let L=zt.meting_api??"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",_=zt.id,p=zt.server,R=zt.type,w=M(!1),F=M(!1),v=M(!1),h=M(!1),A=M(0),T=M(0),j=M(.7),C=M(!1),d=M(!1),$=M(!1),g=M(0),et=M(""),at=M(!1),B=M({title:"示例歌曲",artist:"示例艺术家",cover:`${b}favicon/favicon-light-192.png`,url:"",duration:0}),x=M([]),k=M(0),a=M(),Q=M(),K=M();async function Oe(){if(!L||!_)return;c(d,!0);const s=L.replace(":server",p).replace(":type",R).replace(":id",_).replace(":auth","").replace(":r",Date.now().toString());try{const z=await fetch(s);if(!z.ok)throw new Error("meting api error");const H=await z.json();c(x,H.map(W=>{let ft=W.name??W.title??"未知歌曲",kt=W.artist??W.author??"未知艺术家",N=W.duration??0;return N>1e4&&(N=Math.floor(N/1e3)),(!Number.isFinite(N)||N<=0)&&(N=0),{id:W.id,title:ft,artist:kt,cover:W.pic??"",url:W.url??"",duration:N}})),t(x).length>0&&re(t(x)[0]),c(d,!1)}catch{Rt("Meting 歌单获取失败"),c(d,!1)}}function Ye(){!t(a)||!t(B).url||(t(w)?t(a).pause():t(a).play())}function xt(){c(F,!t(F)),t(F)&&(c(h,!1),c(v,!1))}function yt(){c(v,!t(v)),t(v)&&(c(F,!1),c(h,!1))}function ae(){c(h,!t(h))}function Ue(){c($,!t($))}function qe(){c(g,(t(g)+1)%3)}function Ke(){if(t(x).length<=1)return;const s=t(k)>0?t(k)-1:t(x).length-1;_t(s)}function It(){if(t(x).length<=1)return;let s;if(t($))do s=Math.floor(Math.random()*t(x).length);while(s===t(k)&&t(x).length>1);else s=t(k)<t(x).length-1?t(k)+1:0;_t(s)}function _t(s){if(s<0||s>=t(x).length)return;const z=t(w);c(k,s),t(a)&&t(a).pause(),re(t(x)[t(k)]),(z||!t(w))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function wt(s){return s.startsWith("http://")||s.startsWith("https://")||s.startsWith("/")?s:`/${s}`}function re(s){!s||!t(a)||(c(B,{...s}),s.url?(c(d,!0),t(a).pause(),q(a,t(a).currentTime=0),c(A,0),c(T,s.duration??0),t(a).removeEventListener("loadeddata",ie),t(a).removeEventListener("error",ne),t(a).removeEventListener("loadstart",se),t(a).addEventListener("loadeddata",ie,{once:!0}),t(a).addEventListener("error",ne,{once:!0}),t(a).addEventListener("loadstart",se,{once:!0}),q(a,t(a).src=wt(s.url)),t(a).load()):c(d,!1))}function ie(){c(d,!1),t(a)?.duration&&t(a).duration>1&&(c(T,Math.floor(t(a).duration)),t(x)[t(k)]&&q(x,t(x)[t(k)].duration=t(T)),q(B,t(B).duration=t(T)))}function ne(s){c(d,!1),Rt(`无法播放 "${t(B).title}"，正在尝试下一首...`),t(x).length>1?setTimeout(()=>It(),1e3):Rt("播放列表中没有可用的歌曲")}function se(){}function Rt(s){c(et,s),c(at,!0),setTimeout(()=>{c(at,!1)},3e3)}function He(){c(at,!1)}function Xe(s){if(!t(a)||!t(Q))return;const z=t(Q).getBoundingClientRect(),W=(s.clientX-z.left)/z.width*t(T);q(a,t(a).currentTime=W),c(A,W)}function Ge(s){if(!t(a)||!t(K))return;const z=t(K).getBoundingClientRect(),H=Math.max(0,Math.min(1,(s.clientX-z.left)/z.width));c(j,H),q(a,t(a).volume=t(j)),c(C,t(j)===0)}function le(){t(a)&&(c(C,!t(C)),q(a,t(a).muted=t(C)))}function oe(s){if(!Number.isFinite(s)||s<0)return"0:00";const z=Math.floor(s/60),H=Math.floor(s%60);return`${z}:${H.toString().padStart(2,"0")}`}function Je(){t(a)&&(t(a).addEventListener("play",()=>{c(w,!0)}),t(a).addEventListener("pause",()=>{c(w,!1)}),t(a).addEventListener("timeupdate",()=>{c(A,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(g)===1?(q(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(g)===2||t(k)<t(x).length-1||t($)?It():c(w,!1)}),t(a).addEventListener("error",s=>{c(d,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}Ra(()=>{c(a,new Audio),q(a,t(a).volume=t(j)),Je(),Oe()}),Ba(()=>{t(a)&&(t(a).pause(),q(a,t(a).src=""))}),Na();var ce=it(),Ve=tt(ce);{var Qe=s=>{var z=pr(),H=tt(z);{var W=e=>{var m=cr(),E=n(m),S=n(E);f(S,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var P=u(S,2),l=n(P,!0);i(P);var X=u(P,2),dt=n(X);f(dt,{icon:"material-symbols:close",class:"text-lg"}),i(X),i(E),i(m),$t(()=>J(l,t(et))),y("click",X,He),D(e,m)};I(H,e=>{t(at)&&e(W)})}var ft=u(H,2);let kt;var N=n(ft);let de;var Ze=n(N);{var ta=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},ea=e=>{var m=it(),E=tt(m);{var S=l=>{var X=dr();D(l,X)},P=l=>{f(l,{icon:"material-symbols:music-note",class:"text-white text-lg"})};I(E,l=>{t(w)?l(S):l(P,!1)},!0)}D(e,m)};I(Ze,e=>{t(d)?e(ta):e(ea,!1)})}i(N);var st=u(N,2);let ve;var ue=n(st),Bt=n(ue),Nt=n(Bt);let fe;var pe=u(Nt,2),aa=n(pe);{var ra=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},ia=e=>{var m=it(),E=tt(m);{var S=l=>{f(l,{icon:"material-symbols:pause",class:"text-white text-xl"})},P=l=>{f(l,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};I(E,l=>{t(w)?l(S):l(P,!1)},!0)}D(e,m)};I(aa,e=>{t(d)?e(ra):e(ia,!1)})}i(pe),i(Bt);var Wt=u(Bt,2),Dt=n(Wt),na=n(Dt,!0);i(Dt);var me=u(Dt,2),sa=n(me,!0);i(me),i(Wt);var be=u(Wt,2),Et=n(be),la=n(Et);f(la,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(Et);var Ot=u(Et,2),oa=n(Ot);f(oa,{icon:"material-symbols:expand-less",class:"text-lg"}),i(Ot),i(be),i(ue),i(st);var Lt=u(st,2);let he;var Yt=n(Lt),Ut=n(Yt),ge=n(Ut);let xe;i(Ut);var qt=u(Ut,2),Kt=n(qt),ca=n(Kt,!0);i(Kt);var Ht=u(Kt,2),da=n(Ht,!0);i(Ht);var ye=u(Ht,2),va=n(ye);i(ye),i(qt);var _e=u(qt,2),Tt=n(_e),ua=n(Tt);f(ua,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(Tt);var Xt=u(Tt,2),fa=n(Xt);f(fa,{icon:"material-symbols:expand-more",class:"text-lg"}),i(Xt),i(_e),i(Yt);var Gt=u(Yt,2),lt=n(Gt),pa=n(lt);i(lt),Ae(lt,e=>c(Q,e),()=>t(Q)),i(Gt);var Jt=u(Gt,2),ot=n(Jt);let we;var ma=n(ot);f(ma,{icon:"material-symbols:shuffle",class:"text-lg"}),i(ot);var pt=u(ot,2),ba=n(pt);f(ba,{icon:"material-symbols:skip-previous",class:"text-xl"}),i(pt);var ct=u(pt,2);let ke;var ha=n(ct);{var ga=e=>{f(e,{icon:"eos-icons:loading",class:"text-xl"})},xa=e=>{var m=it(),E=tt(m);{var S=l=>{f(l,{icon:"material-symbols:pause",class:"text-xl"})},P=l=>{f(l,{icon:"material-symbols:play-arrow",class:"text-xl"})};I(E,l=>{t(w)?l(S):l(P,!1)},!0)}D(e,m)};I(ha,e=>{t(d)?e(ga):e(xa,!1)})}i(ct);var mt=u(ct,2),ya=n(mt);f(ya,{icon:"material-symbols:skip-next",class:"text-xl"}),i(mt);var Mt=u(mt,2);let Ee;var _a=n(Mt);{var wa=e=>{f(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},ka=e=>{var m=it(),E=tt(m);{var S=l=>{f(l,{icon:"material-symbols:repeat",class:"text-lg"})},P=l=>{f(l,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};I(E,l=>{t(g)===2?l(S):l(P,!1)},!0)}D(e,m)};I(_a,e=>{t(g)===1?e(wa):e(ka,!1)})}i(Mt),i(Jt);var Le=u(Jt,2),St=n(Le),Ea=n(St);{var La=e=>{f(e,{icon:"material-symbols:volume-off",class:"text-lg"})},Ta=e=>{var m=it(),E=tt(m);{var S=l=>{f(l,{icon:"material-symbols:volume-down",class:"text-lg"})},P=l=>{f(l,{icon:"material-symbols:volume-up",class:"text-lg"})};I(E,l=>{t(j)<.5?l(S):l(P,!1)},!0)}D(e,m)};I(Ea,e=>{t(C)||t(j)===0?e(La):e(Ta,!1)})}i(St);var rt=u(St,2),Ma=n(rt);i(rt),Ae(rt,e=>c(K,e),()=>t(K));var Ft=u(rt,2);let Te;var Sa=n(Ft);f(Sa,{icon:"material-symbols:queue-music",class:"text-lg"}),i(Ft),i(Le),i(Lt);var Fa=u(Lt,2);{var Pa=e=>{var m=fr(),E=n(m),S=n(E),P=n(S,!0);i(S);var l=u(S,2),X=n(l);f(X,{icon:"material-symbols:close",class:"text-lg"}),i(l),i(E);var dt=u(E,2);Qa(dt,5,()=>t(x),Za,(bt,Z,Y)=>{var G=ur();let Pt;var ht=n(G),ja=n(ht);{var Ca=U=>{f(U,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},$a=U=>{var Ct=it(),Zt=tt(Ct);{var te=vt=>{f(vt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Ia=vt=>{var je=vr();je.textContent=Y+1,D(vt,je)};I(Zt,vt=>{Y===t(k)?vt(te):vt(Ia,!1)},!0)}D(U,Ct)};I(ja,U=>{Y===t(k)&&t(w)?U(Ca):U($a,!1)})}i(ht);var Vt=u(ht,2),Me=n(Vt);i(Vt);var Se=u(Vt,2),jt=n(Se);let Fe;var za=n(jt,!0);i(jt);var Qt=u(jt,2);let Pe;var Aa=n(Qt,!0);i(Qt),i(Se),i(G),$t((U,Ct,Zt,te)=>{Pt=O(G,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,Pt,U),nt(G,"aria-label",`播放 ${t(Z).title??""} - ${t(Z).artist??""}`),nt(Me,"src",Ct),nt(Me,"alt",t(Z).title),Fe=O(jt,1,"font-medium truncate",null,Fe,Zt),J(za,t(Z).title),Pe=O(Qt,1,"text-sm text-[var(--content-meta)] truncate",null,Pe,te),J(Aa,t(Z).artist)},[()=>({"bg-[var(--btn-plain-bg)]":Y===t(k),"text-[var(--primary)]":Y===t(k)}),()=>wt(t(Z).cover),()=>({"text-[var(--primary)]":Y===t(k),"text-90":Y!==t(k)}),()=>({"text-[var(--primary)]":Y===t(k)})]),y("click",G,()=>_t(Y)),y("keydown",G,U=>{(U.key==="Enter"||U.key===" ")&&(U.preventDefault(),_t(Y))}),D(bt,G)}),i(dt),i(m),$t(bt=>J(P,bt),[()=>er(tr.playlist)]),y("click",l,ae),sr(3,m,()=>or,()=>({duration:300,axis:"y"})),D(e,m)};I(Fa,e=>{t(h)&&e(Pa)})}i(ft),Ja(2),$t((e,m,E,S,P,l,X,dt,bt,Z,Y,G,Pt,ht)=>{kt=O(ft,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,kt,e),de=O(N,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,de,m),ve=O(st,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,ve,E),nt(Nt,"src",S),fe=O(Nt,1,"w-full h-full object-cover transition-transform duration-300",null,fe,P),J(na,t(B).title),J(sa,t(B).artist),he=O(Lt,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,he,l),nt(ge,"src",X),xe=O(ge,1,"w-full h-full object-cover transition-transform duration-300",null,xe,dt),J(ca,t(B).title),J(da,t(B).artist),J(va,`${bt??""} / ${Z??""}`),nt(lt,"aria-valuenow",t(T)>0?t(A)/t(T)*100:0),Ce(pa,`width: ${t(T)>0?t(A)/t(T)*100:0}%`),we=O(ot,1,"w-10 h-10 rounded-lg",null,we,Y),ot.disabled=t(x).length<=1,pt.disabled=t(x).length<=1,ke=O(ct,1,"btn-regular w-12 h-12 rounded-full",null,ke,G),ct.disabled=t(d),mt.disabled=t(x).length<=1,Ee=O(Mt,1,"w-10 h-10 rounded-lg",null,Ee,Pt),nt(rt,"aria-valuenow",t(j)*100),Ce(Ma,`width: ${t(j)*100}%`),Te=O(Ft,1,"btn-plain w-8 h-8 rounded-lg",null,Te,ht)},[()=>({expanded:t(F),"hidden-mode":t(v)}),()=>({"opacity-0":!t(v),"scale-0":!t(v),"pointer-events-none":!t(v)}),()=>({"opacity-0":t(F)||t(v),"scale-95":t(F)||t(v),"pointer-events-none":t(F)||t(v)}),()=>wt(t(B).cover),()=>({spinning:t(w)&&!t(d),"animate-pulse":t(d)}),()=>({"opacity-0":!t(F),"scale-95":!t(F),"pointer-events-none":!t(F)}),()=>wt(t(B).cover),()=>({spinning:t(w)&&!t(d),"animate-pulse":t(d)}),()=>oe(t(A)),()=>oe(t(T)),()=>({"btn-regular":t($),"btn-plain":!t($)}),()=>({"opacity-50":t(d)}),()=>({"btn-regular":t(g)>0,"btn-plain":t(g)===0}),()=>({"text-[var(--primary)]":t(h)})]),y("click",N,yt),y("keydown",N,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),yt())}),y("click",Et,Ie(yt)),y("click",Ot,Ie(xt)),y("click",st,xt),y("keydown",st,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),xt())}),y("click",Tt,yt),y("click",Xt,xt),y("click",lt,Xe),y("keydown",lt,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(Q).getBoundingClientRect();const E=.5*t(T);t(a)&&(q(a,t(a).currentTime=E),c(A,E))}}),y("click",ot,Ue),y("click",pt,Ke),y("click",ct,Ye),y("click",mt,It),y("click",Mt,qe),y("click",St,le),y("click",rt,Ge),y("keydown",rt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&le())}),y("click",Ft,ae),D(s,z)};I(Ve,s=>{s(Qe)})}D(o,ce),Xa()}export{Tr as default};
