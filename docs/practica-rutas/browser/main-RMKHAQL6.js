import{a,b as s,c as m,d as o,e as r,f as n,g as p,h as C,i as b,j as v,k as M,l as h,m as y,n as u,o as A,p as x}from"./chunk-7QBC3323.js";var S=[{path:"agents",loadChildren:()=>import("./chunk-MFSGN2DH.js").then(e=>e.PersonajesModule)},{path:"**",redirectTo:"agents"}],c=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=m({type:e});static \u0275inj=a({imports:[u.forRoot(S),u]})};var l=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=s({type:e,selectors:[["shared-sidebar"]],decls:8,vars:0,consts:[[1,"text-white"],[1,"border","border-white","border-2","opacity-50"],[1,"list-group"],["routerLink","agents/personajes","routerLinkActive","active",1,"list-group-item"],["routerLink","agents/armas","routerLinkActive","active",1,"list-group-item"]],template:function(t,N){t&1&&(o(0,"h2",0),p(1,"Valorant"),r(),n(2,"hr",1),o(3,"ul",2)(4,"li",3),p(5," Personajes "),r(),o(6,"li",4),p(7," Armas "),r()())},dependencies:[h,y]})};var d=class e{title="PracticaRutas";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=s({type:e,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-3"],[1,"col-3"],[1,"col"]],template:function(t,N){t&1&&(o(0,"div",0)(1,"div",1),n(2,"shared-sidebar"),r(),o(3,"div",2),n(4,"router-outlet"),r()())},dependencies:[M,l]})};var f=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=m({type:e,bootstrap:[d]});static \u0275inj=a({providers:[C()],imports:[v,c,A,x]})};b().bootstrapModule(f,{ngZoneEventCoalescing:!0}).catch(e=>console.error(e));
