import{s as q,e as p,b as S,d as c,f as A,r as T,i as w,h as K,j as t,k as R,l as s,v as B,y as N,K as V,n as H,A as j}from"../chunks/scheduler.CcfLnVM_.js";import{S as z,i as F}from"../chunks/index.B-0vqY2A.js";import{g as G}from"../chunks/entry.BEL7CgLR.js";function J(f){let e,l,C='<h4 class="text-2xl font-medium">Ubah Kata Sandi</h4> <p class="text-sm">Masukkan Kata Sandi baru untuk merubah Kata Sandi Anda.</p>',_,a,i,o,x="Kata Sandi Baru",b,n,E,L,h,m,O="Konfirmasi Kata Sandi Baru",I,r,M,v,P="Ubah Kata Sandi",U,D;return{c(){e=p("form"),l=p("header"),l.innerHTML=C,_=S(),a=p("section"),i=p("div"),o=p("label"),o.textContent=x,b=S(),n=p("input"),L=S(),h=p("div"),m=p("label"),m.textContent=O,I=S(),r=p("input"),M=S(),v=p("button"),v.textContent=P,this.h()},l(u){e=c(u,"FORM",{class:!0});var d=A(e);l=c(d,"HEADER",{class:!0,"data-svelte-h":!0}),T(l)!=="svelte-11nk759"&&(l.innerHTML=C),_=w(d),a=c(d,"SECTION",{class:!0});var y=A(a);i=c(y,"DIV",{class:!0});var g=A(i);o=c(g,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(o)!=="svelte-1u44sht"&&(o.textContent=x),b=w(g),n=c(g,"INPUT",{name:!0,class:!0,type:!0,placeholder:!0}),g.forEach(K),L=w(y),h=c(y,"DIV",{class:!0});var k=A(h);m=c(k,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(m)!=="svelte-ddnrfx"&&(m.textContent=O),I=w(k),r=c(k,"INPUT",{name:!0,class:!0,type:!0,placeholder:!0}),k.forEach(K),M=w(y),v=c(y,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),T(v)!=="svelte-9q1zgm"&&(v.textContent=P),y.forEach(K),d.forEach(K),this.h()},h(){t(l,"class","space-y-1.5 text-center md:text-left"),t(o,"for","password"),t(o,"class","input-label"),t(n,"name","password"),t(n,"class",E=f[0].theme.input),t(n,"type","password"),t(n,"placeholder","Masukkan Kata Sandi Anda"),t(i,"class","input-group w-full"),t(m,"for","confirm-password"),t(m,"class","input-label"),t(r,"name","confirm-password"),t(r,"class","data.theme.input"),t(r,"type","password"),t(r,"placeholder","Konfirmasi Kata Sandi Baru Anda"),t(h,"class","input-group w-full"),t(v,"class","btn btn-primary w-full"),t(v,"type","submit"),t(a,"class","space-y-4"),t(e,"class","space-y-6")},m(u,d){R(u,e,d),s(e,l),s(e,_),s(e,a),s(a,i),s(i,o),s(i,b),s(i,n),B(n,f[1]),s(a,L),s(a,h),s(h,m),s(h,I),s(h,r),B(r,f[2]),s(a,M),s(a,v),U||(D=[N(n,"input",f[4]),N(r,"input",f[5]),N(e,"submit",V(f[3]))],U=!0)},p(u,[d]){d&1&&E!==(E=u[0].theme.input)&&t(n,"class",E),d&2&&n.value!==u[1]&&B(n,u[1]),d&4&&r.value!==u[2]&&B(r,u[2])},i:H,o:H,d(u){u&&K(e),U=!1,j(D)}}}function Q(f,e,l){let{data:C}=e,_,a;async function i(){G("/dashboard")}function o(){_=this.value,l(1,_)}function x(){a=this.value,l(2,a)}return f.$$set=b=>{"data"in b&&l(0,C=b.data)},[C,_,a,i,o,x]}class Z extends z{constructor(e){super(),F(this,e,Q,J,q,{data:0})}}export{Z as component};