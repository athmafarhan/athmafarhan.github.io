var j=Object.defineProperty,A=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var D=(s,n,t)=>n in s?j(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t,v=(s,n)=>{for(var t in n||(n={}))H.call(n,t)&&D(s,t,n[t]);if(L)for(var t of L(n))O.call(n,t)&&D(s,t,n[t]);return s},N=(s,n)=>A(s,q(n));import{r as f,j as k,I as F,a as R,b as B,c as E,d as G}from"./vendor.2c04849c.js";const K=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))m(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function m(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}};K();function P(s,n){const[t,m]=f.exports.useState(function(){const l=localStorage.getItem(n);return l?JSON.parse(l):s});return f.exports.useEffect(function(){localStorage.setItem(n,JSON.stringify(t))},[t,n]),[t,m]}const e=k.exports.jsx,a=k.exports.jsxs,x=k.exports.Fragment,W=[{id:1,menu:"Originals",description:"Kopi yang diracik dengan suhu dingin dicampur susu dengan manis yang unik",img:"https://images.unsplash.com/photo-1624030609819-e2a4b1d5aebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",price:15e3},{id:2,menu:"Creamy",description:"Kopi yang diracik dengan suhu dingin dicampur susu dengan manis yang creamy",img:"https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",price:15e3},{id:3,menu:"Mocha",description:"Kopi yang diracik dengan suhu dingin dicampur susu dengan hint cokelat",img:"https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",price:15e3},{id:4,menu:"Aren",description:"Kopi yang diracik dengan suhu dingin dicampur susu dengan manis gula aren",img:"https://images.unsplash.com/photo-1658043186384-7add63d278fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",price:15e3}];function _(){const[s,n]=P([],"carts"),[t,m]=f.exports.useState(""),[l,i]=f.exports.useState(""),[d,b]=f.exports.useState(""),g=W,c=s.reduce((r,o)=>r+o.qty,0),y=s.reduce((r,o)=>{const p=o.espressoLevel==="Double shot"?2e3:0;return r+(o.price+p)*o.qty},0);let w=s.reduce((r,o)=>{const p=o.espressoLevel==="Double shot"?2e3:0;return`${r}${o.menu} (Espresso: ${o.espressoLevel}, Sugar: ${o.sugarLevel}) ${o.qty}: Rp. ${new Intl.NumberFormat("id-ID").format((o.price+p)*o.qty)}
`},`Order details:

Nama: ${t}
Alamat: ${l}
Pembayaran: ${d}

`);w+=`Ongkos kirim: Rp. ${new Intl.NumberFormat("id-ID").format(1e4)}

`,w+=`Total Harga (${c} barang): Rp. ${new Intl.NumberFormat("id-ID").format(y+1e4)}`;function I(r){n(o=>{const p=o.find(u=>u.id===r.id&&u.sugarLevel===r.sugarLevel&&u.espressoLevel===r.espressoLevel||u.id===`${r.id},${r.sugarLevel},${r.espressoLevel}`);return console.log(p),console.log(s),p?o.map(u=>u.id===r.id&&u.sugarLevel===r.sugarLevel||u.id===`${r.id},${r.sugarLevel},${r.espressoLevel}`?N(v({},u),{id:`${r.id},${r.sugarLevel},${r.espressoLevel}`,qty:u.qty+1}):u):[...o,N(v({},r),{id:`${r.id},${r.sugarLevel},${r.espressoLevel}`,espressoLevel:r.espressoLevel,sugarLevel:r.sugarLevel,qty:1})]})}function C(){confirm("Apakah anda yakin untuk menghapus keranjang?")&&n([])}function $(r){n(o=>o.filter(p=>p.id!==r))}function S(r,o){n(p=>p.map(h=>{if(console.log(h.id,r.id),h.id===r.id&&h.sugarLevel===r.sugarLevel||h.id===r.id){const M=o==="increase"?h.qty+1:h.qty-1;return N(v({},h),{qty:Math.max(M,0)})}return h}).filter(h=>h.qty>0))}return e("div",{className:"App container pt-4",style:{minHeight:"100vh"},children:a("div",{className:"row",children:[e(T,{children:g.map(r=>e(V,{menu:r,onAddCart:I},r.id))}),a("div",{className:"col-md-4",children:[e(Y,{carts:s,onHandleQtyCart:S,onDeleteCarts:C,onDeleteCart:$,numItems:c,totalPrice:y}),e(z,{carts:s,numItems:c,totalPrice:y,message:w,fullName:t,address:l,payment:d,setFullName:m,setAddress:i,setPayment:b})]})]})})}function T({children:s}){return a("div",{className:"col-md-8",children:[e("h2",{className:"mb-3",children:"Kafeins Menu"}),e("div",{children:s})]})}function V({menu:s,onAddCart:n}){const[t,m]=f.exports.useState(0),[l,i]=f.exports.useState("Single shot"),[d,b]=f.exports.useState("normal");function g(){m(!t)}return e("div",{className:"card mb-3",children:a("div",{className:"card-body p-3",children:[a("div",{className:"d-flex justify-content-between flex-column flex-md-row mb-2 mb-md-0",children:[a("div",{className:"me-0 me-md-3",children:[e("img",{className:"mb-2",style:{maxHeight:"240px"},src:s.img}),e("h2",{className:"fw-medium mb-1 mb-md-2",children:s.menu}),e("p",{className:"text-secondary mb-2",children:s.description}),t?a(x,{children:[a("div",{className:"mb-2",children:[e("div",{className:"form-label",children:"Espresso"}),a("div",{children:[a("label",{className:"form-check",children:[e("input",{className:"form-check-input cursor-pointer",type:"radio",name:`espresso-${s.id}`,value:"Single shot",checked:l==="Single shot",onChange:c=>i(c.target.value)}),e("span",{className:"form-check-label cursor-pointer",children:"Single shot"})]}),a("label",{className:"form-check",children:[e("input",{className:"form-check-input cursor-pointer",type:"radio",name:`espresso-${s.id}`,value:"Double shot",checked:l==="Double shot",onChange:c=>i(c.target.value)}),a("span",{className:"form-check-label cursor-pointer",children:["Double shot ",e("small",{children:"+ Rp. 2000"})]})]})]})]}),a("div",{className:"mb-2",children:[e("div",{className:"form-label",children:"Sugar"}),a("div",{children:[a("label",{className:"form-check",children:[e("input",{className:"form-check-input cursor-pointer",type:"radio",name:`sugar-${s.id}`,value:"normal",checked:d==="normal",onChange:c=>b(c.target.value)}),e("span",{className:"form-check-label cursor-pointer",children:"Normal"})]}),a("label",{className:"form-check",children:[e("input",{className:"form-check-input cursor-pointer",type:"radio",name:`sugar-${s.id}`,value:"half",checked:d==="half",onChange:c=>b(c.target.value)}),e("span",{className:"form-check-label cursor-pointer",children:"Half"})]}),a("label",{className:"form-check",children:[e("input",{className:"form-check-input cursor-pointer",type:"radio",name:`sugar-${s.id}`,value:"less",checked:d==="less",onChange:c=>b(c.target.value)}),e("span",{className:"form-check-label cursor-pointer",children:"Less"})]})]})]})]}):null]}),e("p",{onClick:g,className:"fw-medium text-secondary mb-0 d-flex align-items-center cursor-pointer ",style:{alignSelf:"flex-start"},children:t?e("small",{children:"Show less"}):a(x,{children:[e(F,{className:"icon me-1"}),e("small",{children:"Customize"})]})})]}),a("div",{className:"d-flex justify-content-between align-items-center",children:[a("h2",{className:"fw-medium mb-0 d-none d-md-block",style:{minWidth:"120px"},children:["Rp."," ",new Intl.NumberFormat("id-ID").format(s.price+(l==="Double shot"?2e3:0))]}),a("h3",{className:"fw-medium mb-0 d-block d-md-none",style:{minWidth:"96px"},children:["Rp."," ",new Intl.NumberFormat("id-ID").format(s.price+(l==="Double shot"?2e3:0))]}),a("button",{onClick:()=>n(N(v({},s),{sugarLevel:d,espressoLevel:l})),className:"btn btn-primary",children:[e(R,{className:"icon"}),"Keranjang"]})]})]})})}function Y({carts:s,onHandleQtyCart:n,onDeleteCarts:t,onDeleteCart:m,numItems:l,totalPrice:i}){return a(x,{children:[a("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[e("h2",{className:"mb-0",children:"Keranjang"}),e("p",{className:"text-primary fw-medium cursor-pointer mb-0",onClick:t,children:"Hapus"})]}),e("div",{className:"card mb-3",children:a("div",{className:"card-body p-3",children:[s.map(d=>e(J,{cart:d,onHandleQtyCart:n,onDeleteCart:m},d.id)),a("div",{className:"d-flex justify-content-between flex-row flex-md-column flex-lg-row",children:[a("p",{className:"mb-0",children:["Total Harga (",l," barang)"]}),a("p",{className:"mb-0",children:["Rp. ",new Intl.NumberFormat("id-ID").format(i)]})]}),s.length>0?a(x,{children:[a("div",{className:"d-flex justify-content-between flex-row flex-md-column flex-lg-row",children:[e("p",{className:"mb-0",children:"Ongkos kirim"}),a("p",{className:"mb-0",children:["Rp. ",new Intl.NumberFormat("id-ID").format(1e4)]})]}),a("div",{className:"d-flex justify-content-between flex-row flex-md-column flex-lg-row mt-1",children:[e("p",{className:"fw-bold mb-0",children:"Grand Total"}),a("p",{className:"fw-bold mb-0",children:["Rp."," ",new Intl.NumberFormat("id-ID").format(i+1e4)]})]})]}):null]})})]})}function z({carts:s,message:n,fullName:t,address:m,payment:l,setFullName:i,setAddress:d,setPayment:b}){f.exports.useEffect(()=>{},[t,m,l]);function g(){if(t===""||m===""||l==="")return alert("Silakan lengkapi formulir pesanan terlebih dahulu");window.open(`https://api.whatsapp.com/send/?phone=628112819981&text=${encodeURIComponent(n)}`)}return a(x,{children:[e("h2",{className:"mb-3",children:"Pesan"}),e("div",{className:"card mb-3",children:a("div",{className:"card-body p-3",children:[e("div",{className:"mb-3",children:e("input",{type:"text",className:"form-control",placeholder:"Nama Lengkap...",value:t,onChange:c=>i(c.target.value)})}),e("div",{className:"mb-3",children:e("input",{type:"text",className:"form-control",placeholder:"Alamat...",value:m,onChange:c=>d(c.target.value)})}),e("div",{className:"mb-0",children:e("input",{type:"text",className:"form-control",placeholder:"Metode Pembayaran (ex: Transfer Bank Mandiri)",value:l,onChange:c=>b(c.target.value)})}),s.length>0?a("button",{onClick:g,className:"btn btn-success w-100 mt-3",children:[e(B,{className:"icon"}),"Order via WhatsApp"]}):null]})})]})}function J({cart:s,onHandleQtyCart:n,onDeleteCart:t}){return a("div",{className:"d-flex justify-content-between mb-3",children:[a("div",{className:" ",children:[e("h3",{className:"fw-medium mb-0",children:s.menu}),e("p",{className:"text-capitalize mb-1",children:a("small",{children:["Espresso: ",e("span",{className:"fw-medium",children:s.espressoLevel}),", Sugar: ",e("span",{className:"fw-medium",children:s.sugarLevel})]})}),e("p",{className:"fw-bold mb-0",children:new Intl.NumberFormat("id-ID").format((s.price+(s.espressoLevel==="Double shot"?2e3:0))*s.qty)})]}),e("div",{className:"d-flex align-items-end",children:a("div",{className:"d-flex align-items-center",children:[e("span",{className:"text-secondary border-0 me-3 cursor-pointer",onClick:()=>t(s.id),children:e(E,{size:24})}),e("button",{onClick:()=>n(s,"decrease"),className:"btn btn-sm btn-outline-primary fw-bold",children:"\u2212"}),e("span",{className:"mx-3",children:s.qty}),e("button",{onClick:()=>n(s,"increase"),className:"btn btn-sm btn-outline-primary fw-bold",children:"+"})]})})]})}const Q=document.getElementById("root"),U=G(Q);U.render(e(f.exports.StrictMode,{children:e(_,{})}));
