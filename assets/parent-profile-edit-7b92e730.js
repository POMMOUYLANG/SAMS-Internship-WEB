import{d as c,m as u,f,o as h,c as v,a as e,b as g,w as b,t as w,z as y,n as l,y as i,p as N,h as P,_ as U}from"./index-53aef2fe.js";const d=a=>(N("data-v-481e9017"),a=a(),P(),a),x={class:"profile-management"},V={class:"bar-style-top"},I=d(()=>e("div",{class:"ml-3"},"Profile",-1)),D={class:"edit-section"},B={class:"body"},C={class:"form-row-body"},k={class:"profile-pic-container"},E=["src"],S=d(()=>e("br",null,null,-1)),F={for:"profilePic",class:"upload"},T={class:"form-col-body"},j={class:"form-row"},A={class:"form-group"},G=d(()=>e("label",{for:"firstName"},"First Name",-1)),L={class:"form-group"},M=d(()=>e("label",{for:"lastName"},"Last Name",-1)),O={class:"form-group"},R=d(()=>e("label",{for:"gender"},"Gender",-1)),z={class:"form-group"},H=d(()=>e("label",{for:"dob"},"Date of Birth",-1)),q={class:"form-row"},J={class:"form-group"},K=d(()=>e("label",{for:"id"},"ID",-1)),Q={class:"form-group"},W=d(()=>e("label",{for:"position"},"Position",-1)),X={class:"form-group"},Y=d(()=>e("label",{for:"department"},"Department",-1)),Z={class:"form-row"},$={class:"form-group"},ee=d(()=>e("label",{for:"telephone"},"Telephone",-1)),oe={class:"form-group"},te=d(()=>e("label",{for:"email"},"Email",-1)),se={class:"form-row"},de={class:"form-group"},le=d(()=>e("label",{for:"username"},"Username",-1)),ie={class:"form-group"},ae=d(()=>e("label",{for:"password"},"Password",-1)),ne={class:"form-row"},re={class:"form-group"},pe=d(()=>e("label",{for:"address"},"Address",-1)),me=c({__name:"parent-profile-edit",setup(a){const t=u({firstName:"DIN",lastName:"PICH",gender:"M",dateOfBirth:"2003-08-01",id:"e20201250",position:"Software Engineering",department:"GIC",username:"admin",password:"12345678",telephone:"086 318 261",email:"e20201250@itc.edu.kh",address:"Phnom Penh",pic:"https://cdn.pixabay.com/photo/2023/01/21/15/16/ai-generated-7734340_1280.jpg"}),r=()=>{console.log("Profile saved:",t)},_=p=>{const o=p.target;if(o.files&&o.files[0]){const n=new FileReader;n.onload=s=>{var m;t.pic=(m=s.target)==null?void 0:m.result},n.readAsDataURL(o.files[0])}};return(p,o)=>{const n=f("router-link");return h(),v("div",x,[e("div",V,[I,g(n,{to:"/apps/parent/parent-profile-view"},{default:b(()=>[e("button",{type:"submit",class:"add-button",onClick:r}," Save ")]),_:1})]),e("div",D,[e("div",B,[e("form",{onSubmit:w(r,["prevent"])},[e("div",C,[e("div",k,[e("img",{src:t.pic||"https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/7b06a6982a31403eacc7c9d5826731fd~tplv-tej9nj120t-origin.webp",alt:"Profile Picture"},null,8,E),S,e("label",F,[y(" Upload Picture "),e("input",{type:"file",id:"profilePic",onChange:_},null,32)])]),e("div",T,[e("div",j,[e("div",A,[G,l(e("input",{type:"text",id:"firstName","onUpdate:modelValue":o[0]||(o[0]=s=>t.firstName=s),placeholder:"First Name"},null,512),[[i,t.firstName]])]),e("div",L,[M,l(e("input",{type:"text",id:"lastName","onUpdate:modelValue":o[1]||(o[1]=s=>t.lastName=s),placeholder:"Last Name"},null,512),[[i,t.lastName]])]),e("div",O,[R,l(e("input",{type:"text",id:"gender","onUpdate:modelValue":o[2]||(o[2]=s=>t.gender=s),placeholder:"Gender"},null,512),[[i,t.gender]])]),e("div",z,[H,l(e("input",{type:"date",id:"dob","onUpdate:modelValue":o[3]||(o[3]=s=>t.dateOfBirth=s)},null,512),[[i,t.dateOfBirth]])])]),e("div",q,[e("div",J,[K,l(e("input",{type:"text",id:"id","onUpdate:modelValue":o[4]||(o[4]=s=>t.id=s),placeholder:"ID"},null,512),[[i,t.id]])]),e("div",Q,[W,l(e("input",{type:"text",id:"position","onUpdate:modelValue":o[5]||(o[5]=s=>t.position=s),placeholder:"Position"},null,512),[[i,t.position]])]),e("div",X,[Y,l(e("input",{type:"text",id:"department","onUpdate:modelValue":o[6]||(o[6]=s=>t.department=s),placeholder:"Department"},null,512),[[i,t.department]])])]),e("div",Z,[e("div",$,[ee,l(e("input",{type:"tel",id:"telephone","onUpdate:modelValue":o[7]||(o[7]=s=>t.telephone=s),placeholder:"Telephone"},null,512),[[i,t.telephone]])]),e("div",oe,[te,l(e("input",{type:"email",id:"email","onUpdate:modelValue":o[8]||(o[8]=s=>t.email=s),placeholder:"Email"},null,512),[[i,t.email]])])]),e("div",se,[e("div",de,[le,l(e("input",{type:"text",id:"username","onUpdate:modelValue":o[9]||(o[9]=s=>t.username=s),placeholder:"Username"},null,512),[[i,t.username]])]),e("div",ie,[ae,l(e("input",{type:"password",id:"password","onUpdate:modelValue":o[10]||(o[10]=s=>t.password=s),placeholder:"Password"},null,512),[[i,t.password]])])]),e("div",ne,[e("div",re,[pe,l(e("input",{type:"text",id:"address","onUpdate:modelValue":o[11]||(o[11]=s=>t.address=s),placeholder:"Address"},null,512),[[i,t.address]])])])])])],32)])])])}}});const ce=U(me,[["__scopeId","data-v-481e9017"]]);export{ce as default};
