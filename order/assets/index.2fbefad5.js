var F=Object.defineProperty,O=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var I=(n,a,s)=>a in n?F(n,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[a]=s,f=(n,a)=>{for(var s in a||(a={}))M.call(a,s)&&I(n,s,a[s]);if(C)for(var s of C(a))R.call(a,s)&&I(n,s,a[s]);return n},b=(n,a)=>O(n,A(a));import{j as x,r as u,I as D,a as L,b as P,c as K}from"./vendor.386e6fc1.js";const E=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}};E();const e=x.exports.jsx,r=x.exports.jsxs,k=x.exports.Fragment,H=[{id:1,menu:"Originals",description:"Kopi yang diracik dengan suhu dingin dicampur susu dengan manis yang unik",price:15e3},{id:2,menu:"Creamy",description:"Kopi yang diracik dengan suhu dingin dicampur susu dengan manis yang creamy",price:15e3},{id:3,menu:"Mocha",description:"Kopi yang diracik dengan suhu dingin dicampur susu dengan hint cokelat",price:15e3},{id:4,menu:"Aren",description:"Kopi yang diracik dengan suhu dingin dicampur susu dengan manis gula aren",price:15e3}];function T(){const[n,a]=u.exports.useState([]),[s,o]=u.exports.useState(""),[t,i]=u.exports.useState(""),[c,g]=u.exports.useState(""),N=H,m=n.reduce((d,l)=>d+l.qty,0),y=n.reduce((d,l)=>d+l.price*l.qty,0);let v=n.reduce((d,l)=>`${d}${l.menu} (${l.qty}x): Rp. ${new Intl.NumberFormat("id-ID").format(l.price*l.qty)}
`,`Order details:

Nama: ${s}
Alamat: ${t}
Pembayaran: ${c}

`);v+=`Ongkos kirim: Rp. ${new Intl.NumberFormat("id-ID").format(1e4)}

`,v+=`Total Harga (${m} barang): Rp. ${new Intl.NumberFormat("id-ID").format(y+1e4)}`;function j(d){a(l=>l.find(p=>p.id===d.id)?l.map(p=>p.id===d.id?b(f({},p),{qty:p.qty+1}):p):[...l,b(f({},d),{qty:1})])}function $(){a([])}function q(d,l){a(w=>w.map(h=>{if(h.id===d.id){const S=l==="increase"?h.qty+1:h.qty-1;return b(f({},h),{qty:Math.max(S,0)})}return h}).filter(h=>h.qty>0))}return e("div",{className:"App container mt-4",children:r("div",{className:"row",children:[e(W,{children:N.map(d=>e(z,{menu:d,onAddCart:j},d.id))}),r("div",{className:"col-md-4",children:[e(B,{carts:n,onHandleQtyCart:q,onDeleteCart:$,numItems:m,totalPrice:y}),e(Q,{carts:n,numItems:m,totalPrice:y,message:v,fullName:s,address:t,payment:c,setFullName:o,setAddress:i,setPayment:g})]})]})})}function W({children:n}){return r("div",{className:"col-md-8",children:[e("h2",{className:"mb-3",children:"Kafeins Menu"}),e("div",{children:n})]})}function z({menu:n,onAddCart:a}){const[s,o]=u.exports.useState(!1),[t,i]=u.exports.useState("normal");return e("div",{className:"card mb-3",children:r("div",{className:"card-body p-3",children:[r("div",{className:"d-flex justify-content-between flex-column flex-md-row",children:[r("div",{className:"me-0 me-md-3",children:[e("h2",{className:"fw-medium mb-1 mb-md-2",children:n.menu}),e("p",{className:"text-secondary mb-2",children:n.description}),s&&r("div",{class:"mb-2",children:[e("div",{className:"form-label",children:"Sugar"}),r("div",{children:[r("label",{className:"form-check cursor-pointer",children:[e("input",{className:"form-check-input",type:"radio",name:`sugar-${n.id}`,value:"normal",checked:t==="normal",onChange:c=>i(c.target.value)}),e("span",{className:"form-check-label",children:"Normal"})]}),r("label",{className:"form-check cursor-pointer",children:[e("input",{className:"form-check-input",type:"radio",name:`sugar-${n.id}`,value:"half",checked:t==="half",onChange:c=>i(c.target.value)}),e("span",{className:"form-check-label",children:"Half"})]}),r("label",{className:"form-check cursor-pointer",children:[e("input",{className:"form-check-input",type:"radio",name:`sugar-${n.id}`,value:"less",checked:t==="less",onChange:c=>i(c.target.value)}),e("span",{className:"form-check-label",children:"Less"})]})]})]})]}),e("p",{onClick:()=>o(c=>!c),className:"fw-medium text-secondary mb-0 d-flex align-items-center cursor-pointer ",style:{alignSelf:"flex-start"},children:s?e("small",{children:"Show less"}):r(k,{children:[e(D,{className:"icon me-1"}),e("small",{children:"Customize"})]})})]}),r("div",{className:"d-flex justify-content-between align-items-center",children:[r("h2",{className:"fw-medium mb-0 d-none d-md-block",style:{minWidth:"120px"},children:["Rp. ",new Intl.NumberFormat("id-ID").format(n.price)]}),r("h3",{className:"fw-medium mb-0 d-block d-md-none",style:{minWidth:"96px"},children:["Rp. ",new Intl.NumberFormat("id-ID").format(n.price)]}),r("button",{onClick:()=>a(n),className:"btn btn-primary",children:[e(L,{className:"icon"}),"Keranjang"]})]})]})})}function B({carts:n,onHandleQtyCart:a,onDeleteCart:s,numItems:o,totalPrice:t}){return r(k,{children:[r("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[e("h2",{className:"mb-0",children:"Keranjang"}),e("p",{className:"text-primary fw-medium cursor-pointer mb-0",onClick:s,children:"Hapus"})]}),e("div",{className:"card mb-3",children:r("div",{className:"card-body p-3",children:[n.map(i=>e(U,{cart:i,onHandleQtyCart:a},i.id)),r("div",{className:"d-flex justify-content-between flex-row flex-md-column flex-lg-row",children:[r("p",{className:"mb-0",children:["Total Harga (",o," barang)"]}),r("p",{className:"mb-0",children:["Rp. ",new Intl.NumberFormat("id-ID").format(t)]})]})]})})]})}function Q({carts:n,message:a,fullName:s,address:o,payment:t,setFullName:i,setAddress:c,setPayment:g}){u.exports.useEffect(()=>{},[s,o,t]);function N(){if(s===""||o===""||t==="")return alert("Silakan lengkapi formulir pesanan terlebih dahulu");window.open(`https://api.whatsapp.com/send/?phone=628112819981&text=${encodeURIComponent(a)}`)}return r(k,{children:[e("h2",{className:"mb-3",children:"Pesan"}),e("div",{className:"card mb-3",children:r("div",{className:"card-body p-3",children:[e("div",{className:"mb-3",children:e("input",{type:"text",className:"form-control",placeholder:"Nama Lengkap...",value:s,onChange:m=>i(m.target.value)})}),e("div",{className:"mb-3",children:e("input",{type:"text",className:"form-control",placeholder:"Alamat...",value:o,onChange:m=>c(m.target.value)})}),e("div",{className:"mb-0",children:e("input",{type:"text",className:"form-control",placeholder:"Metode Pembayaran (ex: Transfer Bank Mandiri)",value:t,onChange:m=>g(m.target.value)})}),n.length>0?r("button",{onClick:N,className:"btn btn-success w-100 mt-3",children:[e(P,{className:"icon"}),"Order via WhatsApp"]}):null]})})]})}function U({cart:n,onHandleQtyCart:a}){return r("div",{className:"d-flex justify-content-between mb-3",children:[r("div",{className:" ",children:[e("h2",{className:"fw-medium mb-1",children:n.menu}),r("p",{className:"mb-0",children:["Rp. ",new Intl.NumberFormat("id-ID").format(n.price)]})]}),r("div",{className:"d-flex align-items-center",children:[e("button",{onClick:()=>a(n,"decrease"),className:"btn btn-sm btn-primary",children:"\u2212"}),e("span",{className:"mx-3",children:n.qty}),e("button",{onClick:()=>a(n,"increase"),className:"btn btn-sm btn-primary",children:"+"})]})]})}const _=document.getElementById("root"),G=K(_);G.render(e(u.exports.StrictMode,{children:e(T,{})}));
