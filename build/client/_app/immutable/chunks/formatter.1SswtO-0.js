function e(r){return r.toString().toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}function c(r){return Number.isNaN(r)?"":new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(r).replace(",00","")}export{c,e as s};