import{d as f,r as h,m as v,f as d,o as y,c as g,a as l,b as e,w as o,g as a,p as w,h as b,i as x,j,k,s as B,_ as E}from"./index-53aef2fe.js";import{s,a as N}from"./column.esm-e5324406.js";import{s as V}from"./confirmdialog.esm-ead02f73.js";import"./index.esm-8c608036.js";import"./index.esm-a3817dcd.js";const $=t=>(w("data-v-cd0b65a9"),t=t(),b(),t),I={class:"profile-management"},P=$(()=>l("div",{class:"bar-style-top"},[l("div",{class:"ml-3"},"Profile")],-1)),S={class:"edit-section"},T={class:"flex align-items-end justify-content-end gap-4 mr-4"},C={class:"p-card mt-5"},M=f({__name:"profile-teacher",setup(t){const i=h("");v({year:"",academic:"",semester:"",subject:""});const m=[{no:1,fullname:"SEAK LENG",gender:"F",email:"lengseak@example.com",id:"P20201250",major:"DB"},{no:2,fullname:"NOP PHEARUM",gender:"M",email:"phearumnop@example.com",id:"P20200061",major:"WEB/DB"},{no:3,fullname:"HOT TIN",gender:"M",email:"hottin@example.com",id:"P20202008",major:"WEB"}];function p(c){console.log("Viewing user:",c)}return(c,n)=>{const u=d("router-link"),_=d("Toast");return y(),g("div",I,[P,l("div",S,[l("div",T,[e(a(k),null,{default:o(()=>[e(a(x),{class:"pi pi-search"}),e(a(j),{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=r=>i.value=r),class:"font",placeholder:"Search"},null,8,["modelValue"])]),_:1})]),l("div",C,[e(a(N),{value:m,class:"p-datatable-gridlines",scrollable:"",scrollHeight:"400px",tableStyle:"min-width: 50rem"},{default:o(()=>[e(a(s),{field:"no",header:"No",style:{width:"4rem"},class:"id-column"}),e(a(s),{field:"fullname",header:"Full Name",style:{width:"15rem"},class:"fullname-column"}),e(a(s),{field:"id",header:"ID",style:{width:"10rem"},class:"id-column"}),e(a(s),{field:"gender",header:"Gender",style:{width:"6rem"},class:"gender-column"}),e(a(s),{field:"major",header:"Major",style:{width:"6rem"},class:"major-column"}),e(a(s),{field:"email",header:"Email",style:{width:"20rem"},class:"email-column"}),e(a(s),{header:"Action",style:{width:"15rem"}},{body:o(({rowData:r})=>[e(u,{to:"/apps/parent/profile-teacher-detail"},{default:o(()=>[e(a(B),{icon:"pi pi-eye",class:"p-button-rounded p-button-info p-mr-2 ml-4","aria-label":"View",onClick:A=>p(r)},null,8,["onClick"])]),_:2},1024)]),_:1})]),_:1})])]),e(_),e(a(V))])}}});const O=E(M,[["__scopeId","data-v-cd0b65a9"]]);export{O as default};
