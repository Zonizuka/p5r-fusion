import{k as q,r as b,a8 as J,z as O,aa as X,D as _,E as k,K as y,Q as t,M as x,G as R,ae as Y,ab as Z,ac as ee,af as te,S as U,U as E,a1 as le,F as ae,ad as ne}from"./index-DmD8aF87.js";import{g as re,f as se}from"./tag-3ZRL7NE9.js";import{g as G}from"./persona-DOb9kmsv.js";const ie={class:"persona-page"},oe={class:"characteristic-page"},ce={class:"skill"},ue={class:"fusion-page"},de={key:0},pe=["onClick"],he={key:0},fe={key:1},ge=q({__name:"PersonaPage",setup(ve){const F=b([]),N=b([]),L=b([]),B=b([]),C=J();let w=+Y().params.id;const V=b(3),T=b(10),H=b(window.innerWidth),P=()=>{H.value<500?T.value=5:T.value=10},W=({columnIndex:n,row:a})=>a[0].level===1&&(a[0].colSpan=0,a[1].colSpan=2,n===0)?{display:"none"}:{"text-align":"center"},K=({columnIndex:n})=>{switch(n){case 0:return{"text-align":"center"};case 1:return{"text-align":"center"};case 2:return{"text-align":"center"};case 3:return{"text-align":"center","background-color":"#F7C477"};case 4:return{"text-align":"center","background-color":"#FFA51E"};case 5:return{"text-align":"center","background-color":"#FF8585"};case 6:return{"text-align":"center","background-color":"#96B0FF"};case 7:return{"text-align":"center","background-color":"#EBEC5A"};case 8:return{"text-align":"center","background-color":"#99E849"};case 9:return{"text-align":"center","background-color":"#FFA8FF"};case 10:return{"text-align":"center","background-color":"#96ACEE"};case 11:return{"text-align":"center","background-color":"#FFFFCC"};case 12:return{"text-align":"center","background-color":"#D2D2C6"}}},j=()=>{let n={},a=[];Z().then(e=>{n=e[w-1],ee().then(c=>{a=c,N.value=[{characteristicName:F.value[0].characteristic,characteristicDetail:a[n.characteristic-1].skillDetail}],L.value=(()=>{const r=[],i=n.skill,s=F.value[0].skill;for(let o=0;o<i.length;o++)r.push({skillName:s[o],skillDetail:a[i[o]-1].skillDetail});return r})(),Q()})})},z={},Q=()=>{te().then(n=>{const a=C.personaDetails[w-1],e=a.resultType;V.value=e;const c=[];if(e==1){const r=n[a.arcana-1].arcanaFusion,i=[1,1e3],s=A(a.arcana),o=a.level;for(let l=0;l<s.length;l++)if(s[l].level<o&&s[l].resultType==1)i[0]=s[l].level;else if(s[l].level>o&&s[l].resultType==1){i[1]=o;break}for(let l=0;l<r.length-1;l+=2){const v=r[l],m=r[l+1],d=A(v),p=A(m);for(let h=0;h<d.length;h++){const u=d[h];if(u.fusionType<=3){const D=[(i[0]-1)*2-u.level,(i[1]-1)*2-u.level];for(let S=0;S<p.length;S++){const f=p[S];u.fusionType===2&&f.fusionType===2&&I[u.id]===f.id||u.fusionType===3&&f.fusionType!==3||u.fusionType!==3&&f.fusionType===3||f.level>D[0]&&f.level<=D[1]&&f.fusionType<=3&&c.push([u,f])}}}}const g=s.filter(l=>l.id!==w&&l.fusionType<=2);for(let l=0;l<g.length;l++){const v=g[l];for(let m=l+1;m<g.length;m++){const d=g[m];if(!(v.level<o&&d.level<o)&&I[v.id]!==d.id&&d.level>o){let p=m,h=d.level;for(;p>=0&&g[p].level>o;)p!==l&&p!==m&&g[p].resultType==1&&(h=g[p].level),p--;let u=(v.level+d.level)/2+1,D=h===d.level;u>=o&&u<=h&&D?c.push([v,d]):u>=o&&u<h&&!D&&c.push([v,d])}}}}else if(e==2){const r=a.fusionList;if(r===void 0)throw console.error("未添加合成信息!");let i=[];for(let s=0;s<r.length;s++)i.push(C.personaDetails[r[s]-1]);c.push(i)}else c.push([{id:0,name:a.name,level:0,arcana:0,skill:[],characteristic:0,fusionType:a.fusionType,resultType:0,arcanaName:""}]);B.value=c})},A=n=>n in z?z[n]:C.personaDetails.slice(M[n-1][0],M[n-1][1]),$=n=>{w=n,G().then(a=>{F.value=[a[w-1]],j()})};O(()=>{G().then(n=>{F.value=[n[w-1]],j()}),window.addEventListener("resize",P),P()}),X(()=>{window.removeEventListener("resize",P)});const M=[[0,17],[17,28],[28,37],[37,46],[46,55],[55,62],[62,71],[71,82],[82,91],[91,103],[103,114],[114,124],[124,134],[134,147],[147,156],[156,165],[165,174],[174,183],[183,196],[196,204],[204,213],[213,222],[222,230]],I={25:51,163:164,69:210};return(n,a)=>{const e=se,c=re;return _(),k(R,null,[y("div",ie,[t(c,{data:F.value,border:"",style:{width:"100%"},"header-cell-style":{"text-align":"center"},"cell-style":K},{default:x(()=>[t(e,{label:"名称","min-width":T.value,class:"name"},{default:x(r=>[y("div",null,[y("a",{href:"",onClick:a[0]||(a[0]=U(()=>{},["prevent"]))},E(r.row.name),1)])]),_:1},8,["min-width"]),t(e,{prop:"arcana",label:"阿尔卡纳","min-width":T.value,class:"arcana"},null,8,["min-width"]),t(e,{prop:"level",label:"基础等级","min-width":T.value,class:"level"},null,8,["min-width"]),t(e,{prop:"physics",label:"物","min-width":"4"}),t(e,{prop:"gun",label:"枪","min-width":"4"}),t(e,{prop:"fire",label:"火","min-width":"4"}),t(e,{prop:"ice",label:"冰","min-width":"4"}),t(e,{prop:"electricity",label:"电","min-width":"4"}),t(e,{prop:"wind",label:"风","min-width":"4"}),t(e,{prop:"cognition",label:"念","min-width":"4"}),t(e,{prop:"nuclear",label:"核","min-width":"4"}),t(e,{prop:"bless",label:"祝","min-width":"4"}),t(e,{prop:"curse",label:"咒","min-width":"4"})]),_:1},8,["data"])]),y("div",oe,[t(c,{data:N.value,border:"",style:{width:"100%"},"header-cell-style":W,"cell-style":{"text-align":"center"}},{default:x(()=>[t(e,{prop:"characteristicName",label:"特性","min-width":"29"}),t(e,{prop:"characteristicDetail",label:"特性","min-width":"71"})]),_:1},8,["data"])]),y("div",ce,[t(c,{data:L.value,border:"",style:{width:"100%"},"header-cell-style":W,"cell-style":{"text-align":"center"}},{default:x(()=>[t(e,{prop:"skillName",label:"技能","min-width":"29"}),t(e,{prop:"skillDetail",label:"技能","min-width":"71"})]),_:1},8,["data"])]),y("div",ue,[t(c,{data:B.value,border:"",style:{width:"100%"},"header-cell-style":{"text-align":"center"},"cell-style":{"text-align":"center"}},{default:x(()=>[t(e,{label:"反向合成表"},{default:x(r=>[V.value<=2?(_(),k("span",de,[(_(!0),k(R,null,le(r.row,(i,s)=>(_(),k("span",{key:s},[y("a",{href:"",onClick:U(o=>$(i.id),["prevent"])},E(i.arcanaName+"LV"+i.level+i.name),9,pe),s<r.row.length-1?(_(),k("span",he," + ")):ae("",!0)]))),128))])):(_(),k("span",fe,E(r.row[0].name+(r.row[0].fusionType==3?"为宝魔":"为未解禁面具")+"不可合成"),1))]),_:1})]),_:1},8,["data"])])],64)}}}),_e=ne(ge,[["__scopeId","data-v-82ffc58d"]]);export{_e as default};
