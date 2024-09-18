import{s as rt,n as st,r as it,c as ot,o as ut}from"../chunks/8.D6-lxqIh.js";import{S as ct,i as pt,e as s,s as d,t as dt,c as l,a as P,u as M,f as h,d as A,b as ht,p as t,g as ft,h as e,v as q,w as O,x as mt}from"../chunks/index.qVoW8Mvc.js";import{s as lt}from"../chunks/client.CN_4ipSk.js";import{p as vt}from"../chunks/stores.B1svfFKv.js";import{t as W}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.BXZOnz8F.js";import{g as nt}from"../chunks/entry.CvHxuCWh.js";function gt(f){let r,i,H='<h4 class="text-2xl font-medium">Masuk</h4> <p class="text-sm">Masuk dengan akun yang telah Anda daftarkan.</p>',g,a,o,B='<svg role="img" viewBox="0 0 24 24" width="18" height="18" fill="white" xmlns="http://www.w3.org/2000/svg"><title>Google</title><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path></svg> <span>Masuk dengan Google</span>',S,m,x="Atau masuk dengan Email",I,_,b,X="Email",V,u,j,E,C,w,Y="Kata Sandi",z,c,G,T,Z='<a href="/auth/forgot-password" class="text-xs hover:underline">Lupa kata sandi?</a>',K,k,R,F,L,$="Belum punya akun?",J,y,tt="Daftar Sekarang",Q,et;return{c(){r=s("form"),i=s("header"),i.innerHTML=H,g=d(),a=s("section"),o=s("button"),o.innerHTML=B,S=d(),m=s("p"),m.textContent=x,I=d(),_=s("div"),b=s("label"),b.textContent=X,V=d(),u=s("input"),j=d(),E=s("div"),C=s("div"),w=s("label"),w.textContent=Y,z=d(),c=s("input"),G=d(),T=s("div"),T.innerHTML=Z,K=d(),k=s("button"),R=dt("Masuk"),F=d(),L=s("p"),L.textContent=$,J=d(),y=s("a"),y.textContent=tt,this.h()},l(p){r=l(p,"FORM",{class:!0});var v=P(r);i=l(v,"HEADER",{class:!0,"data-svelte-h":!0}),M(i)!=="svelte-1eerfhe"&&(i.innerHTML=H),g=h(v),a=l(v,"SECTION",{class:!0});var n=P(a);o=l(n,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),M(o)!=="svelte-1smtlu7"&&(o.innerHTML=B),S=h(n),m=l(n,"P",{class:!0,"data-svelte-h":!0}),M(m)!=="svelte-6mw3m9"&&(m.textContent=x),I=h(n),_=l(n,"DIV",{class:!0});var D=P(_);b=l(D,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),M(b)!=="svelte-rx7s2m"&&(b.textContent=X),V=h(D),u=l(D,"INPUT",{name:!0,class:!0,type:!0,placeholder:!0}),D.forEach(A),j=h(n),E=l(n,"DIV",{});var N=P(E);C=l(N,"DIV",{class:!0});var U=P(C);w=l(U,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),M(w)!=="svelte-cnbmpl"&&(w.textContent=Y),z=h(U),c=l(U,"INPUT",{name:!0,class:!0,type:!0,placeholder:!0}),U.forEach(A),G=h(N),T=l(N,"DIV",{class:!0,"data-svelte-h":!0}),M(T)!=="svelte-qvd5q0"&&(T.innerHTML=Z),N.forEach(A),K=h(n),k=l(n,"BUTTON",{type:!0,class:!0});var at=P(k);R=ht(at,"Masuk"),at.forEach(A),F=h(n),L=l(n,"P",{class:!0,"data-svelte-h":!0}),M(L)!=="svelte-gz8pao"&&(L.textContent=$),J=h(n),y=l(n,"A",{href:!0,class:!0,"data-svelte-h":!0}),M(y)!=="svelte-un0ahl"&&(y.textContent=tt),n.forEach(A),v.forEach(A),this.h()},h(){t(i,"class","space-y-1.5 text-center md:text-left"),t(o,"type","button"),t(o,"class","btn w-full space-x-2"),t(m,"class","text-center text-xs text-neutral-300"),t(b,"for","email"),t(b,"class","input-label"),t(u,"name","email"),t(u,"class","input"),t(u,"type","email"),t(u,"placeholder","Masukkan Email Anda"),t(_,"class","input-group w-full"),t(w,"for","password"),t(w,"class","input-label"),t(c,"name","password"),t(c,"class","input"),t(c,"type","password"),t(c,"placeholder","Masukkan Kata Sandi Anda"),t(C,"class","input-group w-full"),t(T,"class","flex justify-end mt-2"),t(k,"type","submit"),t(k,"class","btn btn-primary w-full"),k.disabled=xt,t(L,"class","text-center text-xs text-neutral-300"),t(y,"href","/auth/register"),t(y,"class","btn btn-outline"),t(a,"class","space-y-4"),t(r,"class","space-y-6")},m(p,v){ft(p,r,v),e(r,i),e(r,g),e(r,a),e(a,o),e(a,S),e(a,m),e(a,I),e(a,_),e(_,b),e(_,V),e(_,u),q(u,f[0]),e(a,j),e(a,E),e(E,C),e(C,w),e(C,z),e(C,c),q(c,f[1]),e(E,G),e(E,T),e(a,K),e(a,k),e(k,R),e(a,F),e(a,L),e(a,J),e(a,y),Q||(et=[O(o,"click",f[3]),O(u,"input",f[4]),O(c,"input",f[5]),O(r,"submit",mt(f[2]))],Q=!0)},p(p,[v]){v&1&&u.value!==p[0]&&q(u,p[0]),v&2&&c.value!==p[1]&&q(c,p[1])},i:st,o:st,d(p){p&&A(r),Q=!1,it(et)}}}let xt=!1;function _t(f,r,i){let H;ot(f,vt,x=>i(6,H=x));let g,a;ut(()=>{const x=H.url.searchParams.get("error"),I=H.url.searchParams.get("code");x=="CredentialsSignin"?(I=="credentials"?W.push("User tidak ditemukan atau password salah!"):I=="bad-request"&&W.push("Email dan password harus diisi!"),nt("/auth/login")):x=="Configuration"&&(W.push("Terjadi kesalahan!"),nt("/auth/login"))});async function o(x){await lt("credentials",{email:g,password:a})}const B=()=>lt("google");function S(){g=this.value,i(0,g)}function m(){a=this.value,i(1,a)}return[g,a,o,B,S,m]}class Et extends ct{constructor(r){super(),pt(this,r,_t,gt,rt,{})}}export{Et as component};
