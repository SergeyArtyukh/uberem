(self["webpackChunkpandatest"]=self["webpackChunkpandatest"]||[]).push([[443],{302:function(t,s,i){"use strict";i.r(s),i.d(s,{default:function(){return D}});var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"main-page-wrapper"},[i("nav",[i("navbar",{staticClass:"navbar"})],1),i("header",[i("headerPage")],1),i("main",[i("cardComponent"),i("howWeClean",{staticClass:"img"})],1)])},a=[],n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{ref:"header",staticClass:"navbar-wrapper"},[i("div",{staticClass:"logotype-switcher"},[i("div",{staticClass:"logotype-container"},[i("span",{staticClass:"logotype"},[t._v(t._s(t.logotypeName))])]),t._m(0)]),i("div",{staticClass:"nav-links"},t._l(t.navLinks,(function(s){return i("div",{key:s.id},[i("span",{staticClass:"nav-link"},[t._v(" "+t._s(s.title)+" ")])])})),0),i("div",{staticClass:"number-burger"},[i("div",{staticClass:"number-hours"},[i("span",[t._v(t._s(t.number))]),i("span",{staticClass:"mlr-15"},[t._v("|")]),i("span",[t._v(t._s(t.workHours))])]),i("div",{staticClass:"burger-menu-container"},[i("span",{class:{active:t.isActive},on:{click:function(s){t.isActive=!t.isActive}}}),i("div",{staticClass:"burger-menu"},[i("transition",{attrs:{name:"burger"}},[t.isActive?i("ul",t._l(t.burgerItems,(function(s){return i("li",{key:s.id},[t._v(t._s(s.title))])})),0):t._e()])],1)])])])},r=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"switcher-container"},[i("span",{staticClass:"active"},[t._v("Дом")]),i("span",{staticClass:"non-active"},[t._v("Офис")])])}],o={mounted(){window.onscroll=()=>this.stickyHeader()},methods:{stickyHeader(){const t=this.$refs.header,s=t.offsetTop;window.pageYOffset>s?t.classList.add("sticky"):t.classList.remove("sticky")}},data(){return{logotypeName:"уберем.",number:"+380 67 401 69 77",workHours:"24/7",isActive:!1,navLinks:[{title:"После ремонта",id:Math.random()},{title:"Генеральная уборка",id:Math.random()},{title:"Регулярная уборка",id:Math.random()},{title:"Мойка окон",id:Math.random()}],burgerItems:[{title:"После ремонта",id:1},{title:"Генеральная уборка",id:2},{title:"Регулярная уборка",id:3},{title:"Мойка окон",id:4},{title:"+380 67 401 69 77",id:5},{title:"Работаем 24/7",id:5}]}}},c=o,l=i(1),p=(0,l.Z)(c,n,r,!1,null,"551632b2",null),u=p.exports,d=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"header-wrapper"},[i("div",{staticClass:"img-container v-width-1-2"},[i("div",{staticClass:"img-background"})]),i("div",{staticClass:"v-width-1-2"},[i("div",{staticClass:"title-container"},[i("div",{staticClass:"h1-container"},[i("h1",[t._v("Уборка квартир в Киеве")])]),i("span",{staticClass:"desc"},[t._v("Мы уберем у вас дома или в офисе. Наведем чистоту после ремонта и проведем генеральную уборку.")])])])])}],g={},m=g,h=(0,l.Z)(m,d,v,!1,null,"123271cb",null),C=h.exports,f=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card-wrapper"},[e("transition-group",{staticClass:"flex",attrs:{appear:""},on:{enter:t.enter}},t._l(t.cards,(function(s,a){return e("div",{key:s.id,staticClass:"card-list v-width-1-4",class:s.class,attrs:{"data-index":a},on:{mouseover:function(s){return t.mouseOver(a)},mouseout:function(s){return t.mouseOut(a)}}},[e("div",{staticClass:"card-container"},[e("p",{staticClass:"card-title"},[t._v(t._s(s.title))]),e("div",{staticClass:"img-container"},[e("img",{attrs:{src:i(682)("./"+s.url),alt:"#"}})])]),e("div",{staticClass:"title-container"},[e("p",[t._v(t._s(s.hoverTitle))])])])})),0)],1)},b=[],A={data(){return{isHoveting:!1,cards:[{title:"Тщательно отобранный персонал",hoverTitle:"Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведение собеседований, про- верку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.",url:"img1.png",class:"mr-40",id:Math.random(),onHover:!1},{title:"Качественная эко-химия",hoverTitle:"Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведение собеседований, про- верку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.",url:"img2.png",class:"mr-40",id:Math.random(),onHover:!1},{title:"Контролируем качество",hoverTitle:"Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведениесобеседований, про- верку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.",url:"img3.png",class:"mr-40",id:Math.random(),onHover:!1},{title:"Работаем круглосуточно",hoverTitle:"Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведение собеседований, про- верку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.",url:"img4.png",id:Math.random(),onHover:!1}]}},mounted(){},methods:{mouseOver(t){this.cards[t].onHover=!0,this.gsap.to(this.cards[t],{duration:2.5,ease:"power2.out"})},mouseOut(t){this.cards[t].onHover=!1},enter(t){this.gsap.to(t,{scrollTrigger:{trigger:this.$refs.img,toggleActions:"restart none none none"},y:-100,duration:1,delay:.3*t.dataset.index})}}},_=A,w=(0,l.Z)(_,f,b,!1,null,"133153b6",null),x=w.exports,k=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"how-we-clean-wrapper"},[e("transition-group",{staticClass:"tra-group-class",attrs:{appear:"",tag:"div"},on:{enter:t.enter,"after-enter":t.aEnter}},[e("bigButton",{key:"big",ref:"bigButton",staticClass:"b"}),e("div",{key:"first-el",ref:"title",staticClass:"title-container"},[e("h1",{staticClass:"v-width-1-2 v-width-1-3"},[t._v(t._s(t.title))]),e("p",{staticClass:"v-width-1-2 v-width-2-3"},[t._v(t._s(t.desc))])]),e("div",{key:"second-el",ref:"aniCon",staticClass:"animation-container"},[e("div",{ref:"menuCon",staticClass:"menu-container"},[e("h6",[t._v(t._s(t.title))]),e("ul",[e("transition-group",{attrs:{appear:""},on:{enter:t.enterList}},t._l(t.items,(function(s,i){return e("li",{key:s.id,staticClass:"list-item",attrs:{"data-index":i},on:{click:function(s){return t.changeImg(i)}}},[s.isActiveList?e("span",{ref:"listItem",refInFor:!0,staticClass:"arrow",class:{"is-active-hover":s.isActiveList}},[t._v("→")]):t._e(),t._v(" "+t._s(s.title)+" ")])})),0)],1)]),e("div",{ref:"imgsCon",staticClass:"imgs-container"},[e("div",{staticClass:"img-container"},[e("img",{ref:"img",staticClass:"first-img",attrs:{src:i(837)("./"+t.url1),alt:"#"}}),e("img",{ref:"img2",class:{active:t.isActive2,"not-active":!t.isActive2},attrs:{src:i(837)("./"+t.url2),alt:"#"}}),e("img",{ref:"img2",class:{active:t.isActive3,"not-active":!t.isActive3},attrs:{src:i(837)("./"+t.url1),alt:"#"}}),e("img",{ref:"img2",class:{active:t.isActive4,"not-active":!t.isActive4},attrs:{src:i(837)("./"+t.url2),alt:"#"}}),t.imgActive1?e("div",{ref:"gridTemplate1",staticClass:"grid-template",class:{"grid-active":t.imgActive1}},[e("div",{staticClass:"box1"},[e("div",{staticClass:"popup-container"},[e("span",{staticClass:"plus-container",class:{"plus-clicked":t.isPlused},on:{click:t.plusClicked}},[t.isPlused?e("span",{staticClass:"popup-to-plus"},[t._v("Чистим фасад вытяжки")]):t._e(),e("span",{staticClass:"plus"})])])]),e("div",{staticClass:"box2"}),e("div",{staticClass:"box3"}),e("div",{staticClass:"box4"},[e("div",{staticClass:"popup-container"},[e("span",{staticClass:"plus-container"},[e("span",{staticClass:"plus"})])])]),e("div",{staticClass:"box5"},[e("div",{staticClass:"popup-container"},[e("span",{staticClass:"plus-container"},[e("span",{staticClass:"plus"})])])]),e("div",{staticClass:"box6"},[e("div",{staticClass:"popup-container"},[e("span",{staticClass:"plus-container"},[e("span",{staticClass:"plus"})])])]),e("div",{staticClass:"box7"},[e("div",{staticClass:"popup-container"},[e("span",{staticClass:"plus-container"},[e("span",{staticClass:"plus"})])])]),e("div",{staticClass:"box8"},[e("div",{staticClass:"popup-container"},[e("span",{staticClass:"plus-container"},[e("span",{staticClass:"plus"})])])]),e("div",{staticClass:"box9"},[e("div",{staticClass:"popup-container"},[e("span",{staticClass:"plus-container"},[e("span",{staticClass:"plus"})])])])]):t._e(),t.imgActive2?e("div",{ref:"gridTemplate2",staticClass:"grid-template2",class:{"grid-active":t.imgActive2}},[e("div",{staticClass:"box1"}),e("div",{staticClass:"box2"}),e("div",{staticClass:"box3"}),e("div",{staticClass:"box4"},[e("div",{staticClass:"popup-container"},[e("span",{staticClass:"plus-container"},[e("span",{staticClass:"plus"})])])]),e("div",{staticClass:"box5"}),e("div",{staticClass:"box6"},[e("div",{staticClass:"popup-container"},[e("span",{staticClass:"plus-container"},[e("span",{staticClass:"plus"})])])]),e("div",{staticClass:"box7"},[e("div",{staticClass:"popup-container"},[e("span",{staticClass:"plus-container",class:{"plus-clicked":t.isPlused},on:{click:t.plusClicked}},[t.isPlused?e("span",{staticClass:"popup-to-plus"},[t._v("Чистим фасад вытяжки")]):t._e(),e("span",{staticClass:"plus"})])])]),e("div",{staticClass:"box8"},[e("div",{staticClass:"popup-container"},[e("span",{staticClass:"plus-container"},[e("span",{staticClass:"plus"})])])]),e("div",{staticClass:"box9"},[e("div",{staticClass:"popup-container"},[e("span",{staticClass:"plus-container"},[e("span",{staticClass:"plus"})])])])]):t._e()])])])],1)],1)},y=[],T=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{ref:"bigButtonContainer",staticClass:"big-button-border-container",on:{mousemove:t.mouseMove,mouseout:t.mouseOut}},[i("div",{staticClass:"big-button-container"},[i("span",{staticClass:"title"},[t._v(t._s(t.title))])])])},L=[],$={data(){return{title:"заказать уборку"}},mounted(){this.defaultPosition(),this.buttonAnimatio()},methods:{buttonAnimatio(){this.gsap.to(".title",{rotate:360,duration:30,repeat:-1})},defaultPosition(){let t=this.$refs.bigButtonContainer;t.style.left=window.innerWidth/2.3+"px",t.style.top=window.innerHeight/1.3+"px"},mouseOut(){let t=this.$refs.bigButtonContainer;t.style.left=window.innerWidth/2.3+"px",t.style.top=window.innerHeight/1.3+"px"},mouseMove(t){let s=this.$refs.bigButtonContainer;const{clientWidth:i,clientHeight:e}=s;let a=t.clientX-i/2,n=t.clientY-e/2;s.style.left=a+"px",s.style.top=n+"px",(a<640||n<200)&&(s.style.left=window.innerWidth/2.3+"px",s.style.top=window.innerHeight/1.3+"px")}}},E=$,H=(0,l.Z)(E,T,L,!1,null,"df36c64e",null),O=H.exports,P={components:{bigButton:O},mounted(){this.scrollAnimation()},data(){return{title:"Как мы убираем",desc:"Клинер приезжает в назначенное время со всем необходимым и сразу приступает к делу. Вам остаётся только оценить результат.",url1:"img1.png",url2:"bathroom.png",isActive:!1,isActive2:!1,isActive3:!1,isActive4:!1,isPlused:!1,imgActive1:!0,imgActive2:!1,scrollPosition:null,items:[{title:"Кухня",isActive:!1,id:1,url:"Placeholder.png",isActiveList:!0},{title:"Комнаты",isActive:!1,id:2,url:"bathroom.png",isActiveList:!1},{title:"Ванная",isActive:!1,id:3,url:"Placeholder.png",isActiveList:!1},{title:"Прихожая",isActive:!1,id:4,url:"bathroom.png",isActiveList:!1}]}},methods:{scrollAnimation(){this.gsap.to(".b",{scrollTrigger:{trigger:".title-container",start:"top top",end:"bottom top",scrub:!0},scale:.8,duration:.2}),this.gsap.to(".b",{scrollTrigger:{trigger:".first-img",start:"center center",end:"bottom bottom",scrub:!0},scale:0,duration:2})},plusClicked(){this.isPlused=!this.isPlused},changeImg(t){1==this.items[t].id?(this.isActive=!0,this.isActive2=!1,this.isActive3=!1,this.isActive4=!1,this.imgActive1=!0,this.imgActive2=!1,this.items.forEach((s=>{1==s.id?this.items[t].isActiveList=!0:s.isActiveList=!1}))):2==this.items[t].id?(this.isActive=!1,this.isActive2=!0,this.isActive3=!1,this.isActive4=!1,this.imgActive1=!1,this.imgActive2=!0,this.items.forEach((s=>{2==s.id?this.items[t].isActiveList=!0:s.isActiveList=!1}))):3==this.items[t].id?(this.isActive=!1,this.isActive2=!1,this.isActive3=!0,this.isActive4=!1,this.imgActive1=!0,this.imgActive2=!1,this.items.forEach((s=>{3==s.id?this.items[t].isActiveList=!0:s.isActiveList=!1}))):4==this.items[t].id?(this.isActive=!1,this.isActive2=!1,this.isActive3=!1,this.isActive4=!0,this.imgActive1=!1,this.imgActive2=!0,this.items.forEach((s=>{4==s.id?this.items[t].isActiveList=!0:s.isActiveList=!1}))):console.log("ошибка")},enterList(t){this.gsap.to(t,{scrollTrigger:{trigger:this.$refs.menuConBlue,toggleActions:"restart none none none",start:"top top",end:"center center"},duration:2,ease:"power2.out",x:50,delay:.2*t.dataset.index})},enter(t){this.gsap.to(t,{scrollTrigger:{trigger:this.$refs.menuCon,toggleActions:"restart none none none"},ease:"power2.out",duration:1,delay:1*t.dataset.index})},aEnter(){this.gsap.to(this.$refs.menuCon,{scrollTrigger:{trigger:this.$refs.img,toggleActions:"restart none none none",start:"top 20%",end:"center center",scrub:!0},duration:4,ease:"power2.inOut",display:"block",x:0}),this.gsap.to(this.$refs.title,{scrollTrigger:{trigger:this.$refs.img,toggleActions:"restart none none none",start:"top 20%",end:"top 20%",scrub:!0},y:-100,ease:"power2.out",duration:4}),this.gsap.to(this.$refs.gridTemplate1,{scrollTrigger:{trigger:this.$refs.img,toggleActions:"restart none none none",start:"center center",end:"center center",scrub:!0},opacity:1,ease:"power2.out",duration:4}),this.gsap.to(".imgs-container",{scrollTrigger:{trigger:this.$refs.img,toggleActions:"restart none none none",start:"top 20%",end:"center bottom",scrub:!0},ease:"power2.inOut",x:0,duration:4})}}},M=P,B=(0,l.Z)(M,k,y,!1,null,"e44d8688",null),I=B.exports,N={components:{navbar:u,headerPage:C,cardComponent:x,howWeClean:I},mounted(){this.scrollAnimationToHeader()},methods:{scrollAnimationToHeader(){this.gsap.timeline({scrollTrigger:{trigger:".img",start:"top top",end:"top top",scrub:!0}}).to(".navbar",{opacity:0})}}},W=N,Z=(0,l.Z)(W,e,a,!1,null,"1f342203",null),D=Z.exports},682:function(t,s,i){var e={"./img1.png":715,"./img2.png":293,"./img3.png":681,"./img4.png":737};function a(t){var s=n(t);return i(s)}function n(t){if(!i.o(e,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e[t]}a.keys=function(){return Object.keys(e)},a.resolve=n,t.exports=a,a.id=682},837:function(t,s,i){var e={"./bathroom.png":501,"./img1.png":671};function a(t){var s=n(t);return i(s)}function n(t){if(!i.o(e,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e[t]}a.keys=function(){return Object.keys(e)},a.resolve=n,t.exports=a,a.id=837},715:function(t,s,i){"use strict";t.exports=i.p+"img/img1.2bfd6a77.png"},293:function(t,s,i){"use strict";t.exports=i.p+"img/img2.38fd7fa6.png"},681:function(t,s,i){"use strict";t.exports=i.p+"img/img3.20ee6d03.png"},737:function(t,s,i){"use strict";t.exports=i.p+"img/img4.682bb68d.png"},501:function(t,s,i){"use strict";t.exports=i.p+"img/bathroom.ec0926f3.png"},671:function(t,s,i){"use strict";t.exports=i.p+"img/img1.97bda67e.png"}}]);
//# sourceMappingURL=about.b2f2cb7e.js.map