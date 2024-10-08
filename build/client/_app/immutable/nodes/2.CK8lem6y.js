import{s as nt,c as ft,f as I,d as h,C as H,J as jl,O as ct,j as u,k as z,h as _,i as d,p as me,D as G,l as i,P as Ul,m as M,n,q as Ol,v as Te,u as ut,g as ht,a as _t,x as dt,B as mt,r as ot,z as oe,A as vt,I as $e,H as kl}from"../chunks/scheduler.DDK_FMqP.js";import{S as pt,i as gt,c as Ge,b as Ke,m as Ne,a as W,f as Se,t as D,d as je,j as bt,h as ql,g as He}from"../chunks/index.CLy-O5qq.js";import{e as Bl}from"../chunks/each.CMQ7KCsU.js";import{s as kt,f as Fl}from"../chunks/index.CwlbleiT.js";import{r as Et}from"../chunks/swiper-element-bundle.DIkDjTNm.js";import{s as wt}from"../chunks/general.LFs18mWw.js";import{S as Ct,X as It}from"../chunks/x.BDa-gqVZ.js";import{C as El}from"../chunks/crown.CytOudWl.js";function Zl(o,e,l){const s=o.slice();return s[13]=e[l],s}function zt(o){let e,l=o[0].store.name+"",s;return{c(){e=h("span"),s=H(l),this.h()},l(r){e=_(r,"SPAN",{class:!0});var t=d(e);s=G(t,l),t.forEach(u),this.h()},h(){i(e,"class","font-semibold text-lg")},m(r,t){M(r,e,t),n(e,s)},p(r,t){t&1&&l!==(l=r[0].store.name+"")&&kl(s,l)},i:oe,o:oe,d(r){r&&u(e)}}}function yt(o){let e,l,s;return{c(){e=h("img"),this.h()},l(r){e=_(r,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){$e(e.src,l=o[0].store.logo)||i(e,"src",l),i(e,"class","h-10"),i(e,"alt",s=o[0].store.name)},m(r,t){M(r,e,t)},p(r,t){t&1&&!$e(e.src,l=r[0].store.logo)&&i(e,"src",l),t&1&&s!==(s=r[0].store.name)&&i(e,"alt",s)},i:oe,o:oe,d(r){r&&u(e)}}}function Mt(o){let e,l,s,r,t,a,f,m;return e=new El({props:{size:30}}),{c(){Ge(e.$$.fragment),l=I(),s=h("span"),r=H("King"),t=h("span"),a=H("Play"),this.h()},l(g){Ke(e.$$.fragment,g),l=z(g),s=_(g,"SPAN",{class:!0});var b=d(s);r=G(b,"King"),t=_(b,"SPAN",{class:!0});var w=d(t);a=G(w,"Play"),w.forEach(u),b.forEach(u),this.h()},h(){i(t,"class",f="text-"+o[0].color+"-500"),i(s,"class","font-semibold text-lg")},m(g,b){Ne(e,g,b),M(g,l,b),M(g,s,b),n(s,r),n(s,t),n(t,a),m=!0},p(g,b){(!m||b&1&&f!==(f="text-"+g[0].color+"-500"))&&i(t,"class",f)},i(g){m||(D(e.$$.fragment,g),m=!0)},o(g){W(e.$$.fragment,g),m=!1},d(g){g&&(u(l),u(s)),je(e,g)}}}function Wl(o){let e,l,s,r,t;return l=new It({props:{size:18,class:o[0].theme.bgColor}}),{c(){e=h("button"),Ge(l.$$.fragment)},l(a){e=_(a,"BUTTON",{});var f=d(e);Ke(l.$$.fragment,f),f.forEach(u)},m(a,f){M(a,e,f),Ne(l,e,null),s=!0,r||(t=Te(e,"click",o[9]),r=!0)},p(a,f){const m={};f&1&&(m.class=a[0].theme.bgColor),l.$set(m)},i(a){s||(D(l.$$.fragment,a),s=!0)},o(a){W(l.$$.fragment,a),s=!1},d(a){a&&u(e),je(l),r=!1,t()}}}function Jl(o){let e,l,s,r,t,a,f,m;function g(v,y){return v[1].length>0?Dt:Lt}let b=g(o),w=b(o),C=Bl(o[3]),p=[];for(let v=0;v<C.length;v+=1)p[v]=Rl(Zl(o,C,v));return{c(){e=h("div"),l=h("div"),s=h("div"),r=h("h4"),w.c(),t=I(),a=h("div");for(let v=0;v<p.length;v+=1)p[v].c();this.h()},l(v){e=_(v,"DIV",{class:!0});var y=d(e);l=_(y,"DIV",{class:!0});var E=d(l);s=_(E,"DIV",{class:!0});var L=d(s);r=_(L,"H4",{class:!0});var le=d(r);w.l(le),le.forEach(u),t=z(L),a=_(L,"DIV",{class:!0});var K=d(a);for(let T=0;T<p.length;T+=1)p[T].l(K);K.forEach(u),L.forEach(u),E.forEach(u),y.forEach(u),this.h()},h(){i(r,"class","font-semibold text-sm"),i(a,"class","grid grid-cols-2 gap-2"),i(s,"class","space-y-4"),i(l,"class","p-4 space-y-4"),i(e,"class",f="absolute h-[200px] w-full mt-2 shadow rounded-lg overflow-y-auto "+o[0].theme.bgColorSecondary+" "+o[0].theme.border)},m(v,y){M(v,e,y),n(e,l),n(l,s),n(s,r),w.m(r,null),n(s,t),n(s,a);for(let E=0;E<p.length;E+=1)p[E]&&p[E].m(a,null)},p(v,y){if(b===(b=g(v))&&w?w.p(v,y):(w.d(1),w=b(v),w&&(w.c(),w.m(r,null))),y&13){C=Bl(v[3]);let E;for(E=0;E<C.length;E+=1){const L=Zl(v,C,E);p[E]?p[E].p(L,y):(p[E]=Rl(L),p[E].c(),p[E].m(a,null))}for(;E<p.length;E+=1)p[E].d(1);p.length=C.length}y&1&&f!==(f="absolute h-[200px] w-full mt-2 shadow rounded-lg overflow-y-auto "+v[0].theme.bgColorSecondary+" "+v[0].theme.border)&&i(e,"class",f)},i(v){v&&(m||ot(()=>{m=bt(e,kt,{delay:100}),m.start()}))},o:oe,d(v){v&&u(e),w.d(),vt(p,v)}}}function Lt(o){let e;return{c(){e=H("Games Populer")},l(l){e=G(l,"Games Populer")},m(l,s){M(l,e,s)},p:oe,d(l){l&&u(e)}}}function Dt(o){let e,l,s;return{c(){e=H("Pencarian Games: "),l=h("span"),s=H(o[1]),this.h()},l(r){e=G(r,"Pencarian Games: "),l=_(r,"SPAN",{class:!0});var t=d(l);s=G(t,o[1]),t.forEach(u),this.h()},h(){i(l,"class","italic")},m(r,t){M(r,e,t),M(r,l,t),n(l,s)},p(r,t){t&2&&kl(s,r[1])},d(r){r&&(u(e),u(l))}}}function Rl(o){let e,l,s,r,t,a,f,m,g=o[13].name+"",b,w,C,p="Topup Game",v,y,E,L,le;return{c(){e=h("a"),l=h("div"),s=h("img"),a=I(),f=h("div"),m=h("div"),b=H(g),w=I(),C=h("div"),C.textContent=p,y=I(),this.h()},l(K){e=_(K,"A",{href:!0});var T=d(e);l=_(T,"DIV",{class:!0});var ne=d(l);s=_(ne,"IMG",{src:!0,class:!0,alt:!0}),a=z(ne),f=_(ne,"DIV",{});var ae=d(f);m=_(ae,"DIV",{class:!0});var Ie=d(m);b=G(Ie,g),Ie.forEach(u),w=z(ae),C=_(ae,"DIV",{class:!0,"data-svelte-h":!0}),me(C)!=="svelte-13kh1i6"&&(C.textContent=p),ae.forEach(u),ne.forEach(u),y=z(T),T.forEach(u),this.h()},h(){$e(s.src,r=o[13].image)||i(s,"src",r),i(s,"class","rounded-lg w-10"),i(s,"alt",t=o[13].name),i(m,"class","line-clamp-1 text-sm font-medium"),i(C,"class","text-xs italic"),i(l,"class",v="flex items-center space-x-2 p-2 rounded-lg "+o[0].theme.bgColor),i(e,"href",E="/"+o[13].slug)},m(K,T){M(K,e,T),n(e,l),n(l,s),n(l,a),n(l,f),n(f,m),n(m,b),n(f,w),n(f,C),n(e,y),L||(le=Te(e,"click",o[10]),L=!0)},p(K,T){T&8&&!$e(s.src,r=K[13].image)&&i(s,"src",r),T&8&&t!==(t=K[13].name)&&i(s,"alt",t),T&8&&g!==(g=K[13].name+"")&&kl(b,g),T&1&&v!==(v="flex items-center space-x-2 p-2 rounded-lg "+K[0].theme.bgColor)&&i(l,"class",v),T&8&&E!==(E="/"+K[13].slug)&&i(e,"href",E)},d(K){K&&u(e),L=!1,le()}}}function Xl(o){let e,l,s,r,t;return{c(){e=h("div"),this.h()},l(a){e=_(a,"DIV",{class:!0}),d(e).forEach(u),this.h()},h(){i(e,"class","fixed h-[300vh] md:h-[100vh] w-[100vw] top-0 right-0 block bg-neutral-900/75 z-40")},m(a,f){M(a,e,f),s=!0,r||(t=Te(e,"click",o[12]),r=!0)},p:oe,i(a){s||(a&&ot(()=>{s&&(l||(l=ql(e,Fl,{duration:50},!0)),l.run(1))}),s=!0)},o(a){a&&(l||(l=ql(e,Fl,{duration:50},!1)),l.run(0)),s=!1},d(a){a&&u(e),a&&l&&l.end(),r=!1,t()}}}function Ql(o){let e,l,s,r,t;return l=new El({props:{class:"pr-2"}}),{c(){e=h("a"),Ge(l.$$.fragment),s=H(" Member"),this.h()},l(a){e=_(a,"A",{href:!0,class:!0});var f=d(e);Ke(l.$$.fragment,f),s=G(f," Member"),f.forEach(u),this.h()},h(){i(e,"href","/auth/login"),i(e,"class",r="btn btn-"+o[0].color)},m(a,f){M(a,e,f),Ne(l,e,null),n(e,s),t=!0},p(a,f){(!t||f&1&&r!==(r="btn btn-"+a[0].color))&&i(e,"class",r)},i(a){t||(D(l.$$.fragment,a),t=!0)},o(a){W(l.$$.fragment,a),t=!1},d(a){a&&u(e),je(l)}}}function Vt(o){let e,l,s,r;return{c(){e=h("a"),l=h("img"),this.h()},l(t){e=_(t,"A",{href:!0,class:!0});var a=d(e);l=_(a,"IMG",{src:!0,class:!0,alt:!0}),a.forEach(u),this.h()},h(){$e(l.src,s=o[0].store.logo)||i(l,"src",s),i(l,"class","h-10"),i(l,"alt",r=o[0].store.name),i(e,"href","/"),i(e,"class","flex space-x-2 svelte-1ogpyz6")},m(t,a){M(t,e,a),n(e,l)},p(t,a){a&1&&!$e(l.src,s=t[0].store.logo)&&i(l,"src",s),a&1&&r!==(r=t[0].store.name)&&i(l,"alt",r)},i:oe,o:oe,d(t){t&&u(e)}}}function Tt(o){let e,l,s,r,t,a,f,m,g,b,w="<div>© 2024 - KingPlay Teams, All rights reserved.</div>",C;return l=new El({props:{size:30}}),{c(){e=h("a"),Ge(l.$$.fragment),s=I(),r=h("span"),t=H("King"),a=h("span"),f=H("Play"),g=I(),b=h("div"),b.innerHTML=w,this.h()},l(p){e=_(p,"A",{href:!0,class:!0});var v=d(e);Ke(l.$$.fragment,v),s=z(v),r=_(v,"SPAN",{class:!0});var y=d(r);t=G(y,"King"),a=_(y,"SPAN",{class:!0});var E=d(a);f=G(E,"Play"),E.forEach(u),y.forEach(u),v.forEach(u),g=z(p),b=_(p,"DIV",{"data-svelte-h":!0}),me(b)!=="svelte-1lwahsu"&&(b.innerHTML=w),this.h()},h(){i(a,"class",m="text-"+o[0].color+"-500"),i(r,"class","font-semibold text-lg"),i(e,"href","/"),i(e,"class","flex space-x-2 svelte-1ogpyz6")},m(p,v){M(p,e,v),Ne(l,e,null),n(e,s),n(e,r),n(r,t),n(r,a),n(a,f),M(p,g,v),M(p,b,v),C=!0},p(p,v){(!C||v&1&&m!==(m="text-"+p[0].color+"-500"))&&i(a,"class",m)},i(p){C||(D(l.$$.fragment,p),C=!0)},o(p){W(l.$$.fragment,p),C=!1},d(p){p&&(u(e),u(g),u(b)),je(l)}}}function Yl(o){let e,l='<a href="/about-us" class="svelte-1ogpyz6">Tentang Kami</a>';return{c(){e=h("li"),e.innerHTML=l,this.h()},l(s){e=_(s,"LI",{class:!0,"data-svelte-h":!0}),me(e)!=="svelte-ehzdsp"&&(e.innerHTML=l),this.h()},h(){i(e,"class","svelte-1ogpyz6")},m(s,r){M(s,e,r)},d(s){s&&u(e)}}}function xl(o){let e,l,s,r,t,a,f='<li class="svelte-1ogpyz6"><a href="/auth/register" class="svelte-1ogpyz6">Daftar Member</a></li> <li class="svelte-1ogpyz6"><a href="/dashboard" class="svelte-1ogpyz6">Dashboard</a></li>';return{c(){e=h("div"),l=h("div"),s=H("Member"),t=I(),a=h("ul"),a.innerHTML=f,this.h()},l(m){e=_(m,"DIV",{class:!0});var g=d(e);l=_(g,"DIV",{class:!0});var b=d(l);s=G(b,"Member"),b.forEach(u),t=z(g),a=_(g,"UL",{"data-svelte-h":!0}),me(a)!=="svelte-lr8iml"&&(a.innerHTML=f),g.forEach(u),this.h()},h(){i(l,"class",r="text-"+o[0].color+"-500 font-medium"),i(e,"class","space-y-2")},m(m,g){M(m,e,g),n(e,l),n(l,s),n(e,t),n(e,a)},p(m,g){g&1&&r!==(r="text-"+m[0].color+"-500 font-medium")&&i(l,"class",r)},d(m){m&&u(e)}}}function et(o){let e,l,s,r;return{c(){e=h("li"),l=h("a"),s=H("WhatsApp"),this.h()},l(t){e=_(t,"LI",{class:!0});var a=d(e);l=_(a,"A",{href:!0,target:!0,class:!0});var f=d(l);s=G(f,"WhatsApp"),f.forEach(u),a.forEach(u),this.h()},h(){i(l,"href",r="https://wa.me/"+o[0].store.phone),i(l,"target","_blank"),i(l,"class","svelte-1ogpyz6"),i(e,"class","svelte-1ogpyz6")},m(t,a){M(t,e,a),n(e,l),n(l,s)},p(t,a){a&1&&r!==(r="https://wa.me/"+t[0].store.phone)&&i(l,"href",r)},d(t){t&&u(e)}}}function lt(o){let e,l,s,r;return{c(){e=h("li"),l=h("a"),s=H("Email"),this.h()},l(t){e=_(t,"LI",{class:!0});var a=d(e);l=_(a,"A",{href:!0,target:!0,class:!0});var f=d(l);s=G(f,"Email"),f.forEach(u),a.forEach(u),this.h()},h(){i(l,"href",r="mailto:"+o[0].store.email),i(l,"target","_blank"),i(l,"class","svelte-1ogpyz6"),i(e,"class","svelte-1ogpyz6")},m(t,a){M(t,e,a),n(e,l),n(l,s)},p(t,a){a&1&&r!==(r="mailto:"+t[0].store.email)&&i(l,"href",r)},d(t){t&&u(e)}}}function tt(o){let e,l,s,r;return{c(){e=h("li"),l=h("a"),s=H("Facebook"),this.h()},l(t){e=_(t,"LI",{class:!0});var a=d(e);l=_(a,"A",{href:!0,target:!0,class:!0});var f=d(l);s=G(f,"Facebook"),f.forEach(u),a.forEach(u),this.h()},h(){var t;i(l,"href",r=(t=o[0].store.info)==null?void 0:t.fb),i(l,"target","_blank"),i(l,"class","svelte-1ogpyz6"),i(e,"class","svelte-1ogpyz6")},m(t,a){M(t,e,a),n(e,l),n(l,s)},p(t,a){var f;a&1&&r!==(r=(f=t[0].store.info)==null?void 0:f.fb)&&i(l,"href",r)},d(t){t&&u(e)}}}function st(o){let e,l,s,r;return{c(){e=h("li"),l=h("a"),s=H("Tiktok"),this.h()},l(t){e=_(t,"LI",{class:!0});var a=d(e);l=_(a,"A",{href:!0,target:!0,class:!0});var f=d(l);s=G(f,"Tiktok"),f.forEach(u),a.forEach(u),this.h()},h(){var t;i(l,"href",r=(t=o[0].store.info)==null?void 0:t.tiktok),i(l,"target","_blank"),i(l,"class","svelte-1ogpyz6"),i(e,"class","svelte-1ogpyz6")},m(t,a){M(t,e,a),n(e,l),n(l,s)},p(t,a){var f;a&1&&r!==(r=(f=t[0].store.info)==null?void 0:f.tiktok)&&i(l,"href",r)},d(t){t&&u(e)}}}function at(o){let e,l,s,r;return{c(){e=h("li"),l=h("a"),s=H("Instagram"),this.h()},l(t){e=_(t,"LI",{class:!0});var a=d(e);l=_(a,"A",{href:!0,target:!0,class:!0});var f=d(l);s=G(f,"Instagram"),f.forEach(u),a.forEach(u),this.h()},h(){var t;i(l,"href",r=(t=o[0].store.info)==null?void 0:t.ig),i(l,"target","_blank"),i(l,"class","svelte-1ogpyz6"),i(e,"class","svelte-1ogpyz6")},m(t,a){M(t,e,a),n(e,l),n(l,s)},p(t,a){var f;a&1&&r!==(r=(f=t[0].store.info)==null?void 0:f.ig)&&i(l,"href",r)},d(t){t&&u(e)}}}function rt(o){let e,l,s,r;return{c(){e=h("li"),l=h("a"),s=H("x.com"),this.h()},l(t){e=_(t,"LI",{class:!0});var a=d(e);l=_(a,"A",{href:!0,target:!0,class:!0});var f=d(l);s=G(f,"x.com"),f.forEach(u),a.forEach(u),this.h()},h(){var t;i(l,"href",r=(t=o[0].store.info)==null?void 0:t.twitter),i(l,"target","_blank"),i(l,"class","svelte-1ogpyz6"),i(e,"class","svelte-1ogpyz6")},m(t,a){M(t,e,a),n(e,l),n(l,s)},p(t,a){var f;a&1&&r!==(r=(f=t[0].store.info)==null?void 0:f.twitter)&&i(l,"href",r)},d(t){t&&u(e)}}}function it(o){let e,l='<div class="p-5 rounded-lg bg-neutral-50 text-slate-800 shadow-sm flex items-center space-x-4"><div role="status"><svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg> <span class="sr-only">Loading...</span></div> <p>Mohon tunggu...</p></div>';return{c(){e=h("div"),e.innerHTML=l,this.h()},l(s){e=_(s,"DIV",{class:!0,"data-svelte-h":!0}),me(e)!=="svelte-10scswt"&&(e.innerHTML=l),this.h()},h(){i(e,"class","fixed top-0 left-0 w-full h-screen bg-slate-900/75 z-50 backdrop-blur-sm flex items-center justify-center")},m(s,r){M(s,e,r)},d(s){s&&u(e)}}}function $t(o){var Vl,Tl,$l,Al;let e,l,s,r,t,a,f,m,g,b,w,C,p,v,y,E,L,le,K,T,ne,ae,Ie,Ue,il,Oe,ol,ze,nl,ve,ye,Q,re,Y,x,qe,te,Be,pe,wl='<a href="/privacy-policy" class="svelte-1ogpyz6">Kebijakan Privasi</a>',fl,ge,Cl='<a href="/terms" class="svelte-1ogpyz6">Syarat &amp; Ketentuan</a>',cl,Fe,ul,ie,fe,be,hl,Ze,_l,Me,Il='<li class="svelte-1ogpyz6"><a href="/" class="svelte-1ogpyz6">Topup Game</a></li> <li class="svelte-1ogpyz6"><a href="/transactions" class="svelte-1ogpyz6">Cek Transaksi</a></li>',dl,ml,ce,ke,vl,We,pl,V,Je,Re,Xe,Qe,Ye,xe,el,ll,Le,N,gl,zl;document.title=e=o[0].store.name+" - Topup Game";const yl=[Mt,yt,zt],ue=[];function Ml(c,k){return c[0].isMaster?0:c[0].store.logo?1:2}f=Ml(o),m=ue[f]=yl[f](o),y=new Ct({props:{size:18,class:o[0].theme.bgColor}});let $=o[1].length>0&&Wl(o),S=o[2]&&Jl(o),A=o[2]&&Xl(o),P=o[0].isMaster&&Ql(o);const bl=o[6].default,X=ft(bl,o,o[5],null),Ll=[Tt,Vt],he=[];function Dl(c,k){return c[0].isMaster?0:1}Y=Dl(o),x=he[Y]=Ll[Y](o);let J=o[0].isMaster&&Yl(),j=o[0].isMaster&&xl(o),U=o[0].store.phone&&et(o),O=o[0].store.email&&lt(o),q=((Vl=o[0].store.info)==null?void 0:Vl.fb)&&tt(o),B=((Tl=o[0].store.info)==null?void 0:Tl.tiktok)&&st(o),F=(($l=o[0].store.info)==null?void 0:$l.ig)&&at(o),Z=((Al=o[0].store.info)==null?void 0:Al.twitter)&&rt(o),R=o[4]&&it();return{c(){l=I(),s=h("div"),r=h("div"),t=h("nav"),a=h("a"),m.c(),g=I(),b=h("div"),w=h("div"),C=h("div"),p=h("div"),v=h("div"),Ge(y.$$.fragment),E=I(),L=h("input"),K=I(),$&&$.c(),ne=I(),S&&S.c(),Ie=I(),A&&A.c(),il=I(),P&&P.c(),ol=I(),ze=h("main"),X&&X.c(),nl=I(),ve=h("footer"),ye=h("div"),Q=h("section"),re=h("div"),x.c(),qe=I(),te=h("ul"),J&&J.c(),Be=I(),pe=h("li"),pe.innerHTML=wl,fl=I(),ge=h("li"),ge.innerHTML=Cl,cl=I(),Fe=h("div"),ul=I(),ie=h("div"),fe=h("div"),be=h("div"),hl=H("Sitemap"),_l=I(),Me=h("ul"),Me.innerHTML=Il,dl=I(),j&&j.c(),ml=I(),ce=h("div"),ke=h("div"),vl=H("Kontak Kami"),pl=I(),V=h("ul"),U&&U.c(),Je=I(),O&&O.c(),Re=I(),q&&q.c(),Xe=I(),B&&B.c(),Qe=I(),F&&F.c(),Ye=I(),Z&&Z.c(),ll=I(),R&&R.c(),Le=jl(),this.h()},l(c){ct("svelte-zqinoj",document.head).forEach(u),l=z(c),s=_(c,"DIV",{class:!0});var se=d(s);r=_(se,"DIV",{class:!0});var Ae=d(r);t=_(Ae,"NAV",{class:!0});var _e=d(t);a=_(_e,"A",{href:!0,class:!0});var Pe=d(a);m.l(Pe),Pe.forEach(u),g=z(_e),b=_(_e,"DIV",{class:!0});var Ee=d(b);w=_(Ee,"DIV",{class:!0});var we=d(w);C=_(we,"DIV",{class:!0});var Ce=d(C);p=_(Ce,"DIV",{class:!0});var De=d(p);v=_(De,"DIV",{class:!0});var Pl=d(v);Ke(y.$$.fragment,Pl),Pl.forEach(u),E=z(De),L=_(De,"INPUT",{type:!0,class:!0,placeholder:!0}),K=z(De),$&&$.l(De),De.forEach(u),ne=z(Ce),S&&S.l(Ce),Ce.forEach(u),Ie=z(we),A&&A.l(we),we.forEach(u),il=z(Ee),P&&P.l(Ee),Ee.forEach(u),_e.forEach(u),Ae.forEach(u),ol=z(se),ze=_(se,"MAIN",{class:!0});var Sl=d(ze);X&&X.l(Sl),Sl.forEach(u),nl=z(se),ve=_(se,"FOOTER",{class:!0});var Hl=d(ve);ye=_(Hl,"DIV",{class:!0});var Gl=d(ye);Q=_(Gl,"SECTION",{class:!0});var de=d(Q);re=_(de,"DIV",{class:!0});var tl=d(re);x.l(tl),qe=z(tl),te=_(tl,"UL",{});var Ve=d(te);J&&J.l(Ve),Be=z(Ve),pe=_(Ve,"LI",{class:!0,"data-svelte-h":!0}),me(pe)!=="svelte-2rb26z"&&(pe.innerHTML=wl),fl=z(Ve),ge=_(Ve,"LI",{class:!0,"data-svelte-h":!0}),me(ge)!=="svelte-1kk8nxg"&&(ge.innerHTML=Cl),Ve.forEach(u),tl.forEach(u),cl=z(de),Fe=_(de,"DIV",{}),d(Fe).forEach(u),ul=z(de),ie=_(de,"DIV",{class:!0});var sl=d(ie);fe=_(sl,"DIV",{class:!0});var al=d(fe);be=_(al,"DIV",{class:!0});var Kl=d(be);hl=G(Kl,"Sitemap"),Kl.forEach(u),_l=z(al),Me=_(al,"UL",{"data-svelte-h":!0}),me(Me)!=="svelte-e3ak0s"&&(Me.innerHTML=Il),al.forEach(u),dl=z(sl),j&&j.l(sl),sl.forEach(u),ml=z(de),ce=_(de,"DIV",{class:!0});var rl=d(ce);ke=_(rl,"DIV",{class:!0});var Nl=d(ke);vl=G(Nl,"Kontak Kami"),Nl.forEach(u),pl=z(rl),V=_(rl,"UL",{});var ee=d(V);U&&U.l(ee),Je=z(ee),O&&O.l(ee),Re=z(ee),q&&q.l(ee),Xe=z(ee),B&&B.l(ee),Qe=z(ee),F&&F.l(ee),Ye=z(ee),Z&&Z.l(ee),ee.forEach(u),rl.forEach(u),de.forEach(u),Gl.forEach(u),Hl.forEach(u),se.forEach(u),ll=z(c),R&&R.l(c),Le=jl(),this.h()},h(){i(a,"href","/"),i(a,"class","flex items-center space-x-2 flex-1"),i(v,"class","flex-1"),i(L,"type","text"),i(L,"class","bg-transparent outline-none h-10 w-full"),i(L,"placeholder",le=o[2]?"Ketik untuk mencari":"Pencarian Game..."),i(p,"class",T=o[0].theme.bgColor+" border "+o[0].theme.border+" rounded-lg overflow-hidden flex items-center space-x-2 px-3"),i(C,"class",ae=(o[2]?"md:w-[400px]":"max-w-11 md:max-w-[200px]")+" transition-all relative z-50"),i(w,"class",Ue=o[2]?"fixed left-5 right-5 md:relative":""),i(b,"class","flex items-center justify-end space-x-2"),i(t,"class","flex items-center justify-between p-4 mx-auto md:max-w-[1024px] space-x-2"),i(r,"class",Oe=o[0].theme.nav+" sticky top-0 z-20"),i(ze,"class","mx-auto md:max-w-[1024px] p-4 md:my-10"),i(pe,"class","svelte-1ogpyz6"),i(ge,"class","svelte-1ogpyz6"),i(re,"class","space-y-4 flex-1"),i(be,"class",Ze="text-"+o[0].color+"-500 font-medium"),i(fe,"class","space-y-2"),i(ie,"class","space-y-4 flex-1"),i(ke,"class",We="text-"+o[0].color+"-500 font-medium"),i(ce,"class","space-y-2 flex-1"),i(Q,"class","flex md:grid md:grid-cols-4 gap-4 text-sm"),i(ye,"class","mx-auto space-y-4 md:space-y-8 md:max-w-[1024px] p-4 py-10"),i(ve,"class",xe=Ul(o[0].theme.footer)+" svelte-1ogpyz6"),i(s,"class",el="min-h-screen "+o[0].theme.main)},m(c,k){M(c,l,k),M(c,s,k),n(s,r),n(r,t),n(t,a),ue[f].m(a,null),n(t,g),n(t,b),n(b,w),n(w,C),n(C,p),n(p,v),Ne(y,v,null),n(p,E),n(p,L),Ol(L,o[1]),n(p,K),$&&$.m(p,null),n(C,ne),S&&S.m(C,null),n(w,Ie),A&&A.m(w,null),n(b,il),P&&P.m(b,null),n(s,ol),n(s,ze),X&&X.m(ze,null),n(s,nl),n(s,ve),n(ve,ye),n(ye,Q),n(Q,re),he[Y].m(re,null),n(re,qe),n(re,te),J&&J.m(te,null),n(te,Be),n(te,pe),n(te,fl),n(te,ge),n(Q,cl),n(Q,Fe),n(Q,ul),n(Q,ie),n(ie,fe),n(fe,be),n(be,hl),n(fe,_l),n(fe,Me),n(ie,dl),j&&j.m(ie,null),n(Q,ml),n(Q,ce),n(ce,ke),n(ke,vl),n(ce,pl),n(ce,V),U&&U.m(V,null),n(V,Je),O&&O.m(V,null),n(V,Re),q&&q.m(V,null),n(V,Xe),B&&B.m(V,null),n(V,Qe),F&&F.m(V,null),n(V,Ye),Z&&Z.m(V,null),M(c,ll,k),R&&R.m(c,k),M(c,Le,k),N=!0,gl||(zl=[Te(L,"input",o[7]),Te(L,"click",o[8]),Te(C,"click",o[11])],gl=!0)},p(c,[k]){var Pe,Ee,we,Ce;(!N||k&1)&&e!==(e=c[0].store.name+" - Topup Game")&&(document.title=e);let se=f;f=Ml(c),f===se?ue[f].p(c,k):(He(),W(ue[se],1,1,()=>{ue[se]=null}),Se(),m=ue[f],m?m.p(c,k):(m=ue[f]=yl[f](c),m.c()),D(m,1),m.m(a,null));const Ae={};k&1&&(Ae.class=c[0].theme.bgColor),y.$set(Ae),(!N||k&4&&le!==(le=c[2]?"Ketik untuk mencari":"Pencarian Game..."))&&i(L,"placeholder",le),k&2&&L.value!==c[1]&&Ol(L,c[1]),c[1].length>0?$?($.p(c,k),k&2&&D($,1)):($=Wl(c),$.c(),D($,1),$.m(p,null)):$&&(He(),W($,1,1,()=>{$=null}),Se()),(!N||k&1&&T!==(T=c[0].theme.bgColor+" border "+c[0].theme.border+" rounded-lg overflow-hidden flex items-center space-x-2 px-3"))&&i(p,"class",T),c[2]?S?(S.p(c,k),k&4&&D(S,1)):(S=Jl(c),S.c(),D(S,1),S.m(C,null)):S&&(S.d(1),S=null),(!N||k&4&&ae!==(ae=(c[2]?"md:w-[400px]":"max-w-11 md:max-w-[200px]")+" transition-all relative z-50"))&&i(C,"class",ae),c[2]?A?(A.p(c,k),k&4&&D(A,1)):(A=Xl(c),A.c(),D(A,1),A.m(w,null)):A&&(He(),W(A,1,1,()=>{A=null}),Se()),(!N||k&4&&Ue!==(Ue=c[2]?"fixed left-5 right-5 md:relative":""))&&i(w,"class",Ue),c[0].isMaster?P?(P.p(c,k),k&1&&D(P,1)):(P=Ql(c),P.c(),D(P,1),P.m(b,null)):P&&(He(),W(P,1,1,()=>{P=null}),Se()),(!N||k&1&&Oe!==(Oe=c[0].theme.nav+" sticky top-0 z-20"))&&i(r,"class",Oe),X&&X.p&&(!N||k&32)&&ut(X,bl,c,c[5],N?_t(bl,c[5],k,null):ht(c[5]),null);let _e=Y;Y=Dl(c),Y===_e?he[Y].p(c,k):(He(),W(he[_e],1,1,()=>{he[_e]=null}),Se(),x=he[Y],x?x.p(c,k):(x=he[Y]=Ll[Y](c),x.c()),D(x,1),x.m(re,qe)),c[0].isMaster?J||(J=Yl(),J.c(),J.m(te,Be)):J&&(J.d(1),J=null),(!N||k&1&&Ze!==(Ze="text-"+c[0].color+"-500 font-medium"))&&i(be,"class",Ze),c[0].isMaster?j?j.p(c,k):(j=xl(c),j.c(),j.m(ie,null)):j&&(j.d(1),j=null),(!N||k&1&&We!==(We="text-"+c[0].color+"-500 font-medium"))&&i(ke,"class",We),c[0].store.phone?U?U.p(c,k):(U=et(c),U.c(),U.m(V,Je)):U&&(U.d(1),U=null),c[0].store.email?O?O.p(c,k):(O=lt(c),O.c(),O.m(V,Re)):O&&(O.d(1),O=null),(Pe=c[0].store.info)!=null&&Pe.fb?q?q.p(c,k):(q=tt(c),q.c(),q.m(V,Xe)):q&&(q.d(1),q=null),(Ee=c[0].store.info)!=null&&Ee.tiktok?B?B.p(c,k):(B=st(c),B.c(),B.m(V,Qe)):B&&(B.d(1),B=null),(we=c[0].store.info)!=null&&we.ig?F?F.p(c,k):(F=at(c),F.c(),F.m(V,Ye)):F&&(F.d(1),F=null),(Ce=c[0].store.info)!=null&&Ce.twitter?Z?Z.p(c,k):(Z=rt(c),Z.c(),Z.m(V,null)):Z&&(Z.d(1),Z=null),(!N||k&1&&xe!==(xe=Ul(c[0].theme.footer)+" svelte-1ogpyz6"))&&i(ve,"class",xe),(!N||k&1&&el!==(el="min-h-screen "+c[0].theme.main))&&i(s,"class",el),c[4]?R||(R=it(),R.c(),R.m(Le.parentNode,Le)):R&&(R.d(1),R=null)},i(c){N||(D(m),D(y.$$.fragment,c),D($),D(S),D(A),D(P),D(X,c),D(x),N=!0)},o(c){W(m),W(y.$$.fragment,c),W($),W(A),W(P),W(X,c),W(x),N=!1},d(c){c&&(u(l),u(s),u(ll),u(Le)),ue[f].d(),je(y),$&&$.d(),S&&S.d(),A&&A.d(),P&&P.d(),X&&X.d(c),he[Y].d(),J&&J.d(),j&&j.d(),U&&U.d(),O&&O.d(),q&&q.d(),B&&B.d(),F&&F.d(),Z&&Z.d(),R&&R.d(c),gl=!1,dt(zl)}}}function At(o,e,l){let s,r;mt(o,wt,E=>l(4,r=E));let{$$slots:t={},$$scope:a}=e,{data:f}=e,m="",g=!1;Et();function b(){m=this.value,l(1,m)}const w=()=>l(2,g=!0),C=()=>l(1,m=""),p=()=>l(2,g=!1),v=()=>l(2,g=!0),y=()=>l(2,g=!1);return o.$$set=E=>{"data"in E&&l(0,f=E.data),"$$scope"in E&&l(5,a=E.$$scope)},o.$$.update=()=>{o.$$.dirty&3&&l(3,s=m.length>0?f.games.filter(E=>{var L;return(L=E.name)==null?void 0:L.toLowerCase().includes(m.toLowerCase())}):f.popularGames)},[f,m,g,s,r,a,t,b,w,C,p,v,y]}class Ot extends pt{constructor(e){super(),gt(this,e,At,$t,nt,{data:0})}}export{Ot as component};