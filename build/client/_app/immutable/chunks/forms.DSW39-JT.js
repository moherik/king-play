import{p as x,i as T,a as H}from"./entry.MILWr-Un.js";function M(a){const r=JSON.parse(a);return r.data&&(r.data=x(r.data)),r}function l(a){return HTMLElement.prototype.cloneNode.call(a)}function F(a,r=()=>{}){const u=async({action:e,result:c,reset:i=!0,invalidateAll:n=!0})=>{c.type==="success"&&(i&&HTMLFormElement.prototype.reset.call(a),n&&await T()),(location.origin+location.pathname===e.origin+e.pathname||c.type==="redirect"||c.type==="error")&&H(c)};async function m(e){var b,y,h,w,A;if(((b=e.submitter)!=null&&b.hasAttribute("formmethod")?e.submitter.formMethod:l(a).method)!=="post")return;e.preventDefault();const i=new URL((y=e.submitter)!=null&&y.hasAttribute("formaction")?e.submitter.formAction:l(a).action),n=(h=e.submitter)!=null&&h.hasAttribute("formenctype")?e.submitter.formEnctype:l(a).enctype,s=new FormData(a),d=(w=e.submitter)==null?void 0:w.getAttribute("name");d&&s.append(d,((A=e.submitter)==null?void 0:A.getAttribute("value"))??"");const p=new AbortController;let f=!1;const L=await r({action:i,cancel:()=>f=!0,controller:p,formData:s,formElement:a,submitter:e.submitter})??u;if(f)return;let o;try{const t=new Headers({accept:"application/json","x-sveltekit-action":"true"});n!=="multipart/form-data"&&t.set("Content-Type",/^(:?application\/x-www-form-urlencoded|text\/plain)$/.test(n)?n:"application/x-www-form-urlencoded");const g=n==="multipart/form-data"?s:new URLSearchParams(s),E=await fetch(i,{method:"POST",headers:t,cache:"no-store",body:g,signal:p.signal});o=M(await E.text()),o.type==="error"&&(o.status=E.status)}catch(t){if((t==null?void 0:t.name)==="AbortError")return;o={type:"error",error:t}}L({action:i,formData:s,formElement:a,update:t=>u({action:i,result:o,reset:t==null?void 0:t.reset,invalidateAll:t==null?void 0:t.invalidateAll}),result:o})}return HTMLFormElement.prototype.addEventListener.call(a,"submit",m),{destroy(){HTMLFormElement.prototype.removeEventListener.call(a,"submit",m)}}}export{M as d,F as e};
