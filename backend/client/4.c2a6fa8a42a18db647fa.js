(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Yj9t:function(t,n,e){"use strict";e.r(n),e.d(n,"AuthModule",(function(){return J}));var i=e("ofXK"),a=e("3Pt+"),r=e("rhD1"),o=e("tyNb"),s=e("fXoL"),c=e("qXBG"),u=e("Wp6s"),m=e("Xa2L"),b=e("kmnG"),l=e("qFsG"),f=e("bTqV");function d(t,n){1&t&&s.Lb(0,"mat-spinner")}function g(t,n){1&t&&(s.Pb(0,"mat-error"),s.uc(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email."),s.Ob())}function p(t,n){1&t&&(s.Pb(0,"mat-error"),s.uc(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c."),s.Ob())}function h(t,n){1&t&&(s.Pb(0,"button",9),s.uc(1,"\u0412\u043e\u0439\u0442\u0438"),s.Ob())}function P(t,n){if(1&t){const t=s.Qb();s.Pb(0,"form",2,3),s.Wb("submit",(function(){s.lc(t);const n=s.jc(1);return s.ac().onLogin(n)})),s.Pb(2,"mat-form-field"),s.Lb(3,"input",4,5),s.tc(5,g,2,0,"mat-error",0),s.Ob(),s.Pb(6,"mat-form-field"),s.Lb(7,"input",6,7),s.tc(9,p,2,0,"mat-error",0),s.Ob(),s.tc(10,h,2,0,"button",8),s.Ob()}if(2&t){const t=s.jc(4),n=s.jc(8),e=s.ac();s.zb(5),s.fc("ngIf",t.invalid),s.zb(4),s.fc("ngIf",n.invalid),s.zb(1),s.fc("ngIf",!e.isLoading)}}let O=(()=>{class t{constructor(t){this.authService=t,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(t=>{this.isLoading=!1})}onLogin(t){t.invalid||(this.isLoading=!0,this.authService.login(t.value.email,t.value.password))}ngOnDestroy(){this.authStatusSub.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(s.Kb(c.a))},t.\u0275cmp=s.Eb({type:t,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["loginForm","ngForm"],["matInput","","name","email","ngModel","","type","email","placeholder","E-Mail","required","","email",""],["emailInput","ngModel"],["type","password","name","password","ngModel","","matInput","","placeholder","\u041f\u0430\u0440\u043e\u043b\u044c","required",""],["passwordInput","ngModel"],["mat-raised-button","","color","accent","type","submit",4,"ngIf"],["mat-raised-button","","color","accent","type","submit"]],template:function(t,n){1&t&&(s.Pb(0,"mat-card"),s.tc(1,d,1,0,"mat-spinner",0),s.tc(2,P,11,3,"form",1),s.Ob()),2&t&&(s.zb(1),s.fc("ngIf",n.isLoading),s.zb(1),s.fc("ngIf",!n.isLoading))},directives:[u.a,i.k,m.b,a.q,a.k,a.l,b.c,l.a,a.a,a.j,a.m,a.o,a.b,b.b,f.b],styles:["mat-card[_ngcontent-%COMP%]{width:400px;margin:auto}mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}button[_ngcontent-%COMP%]{margin-top:10px}"]}),t})();function I(t,n){1&t&&s.Lb(0,"mat-spinner")}function M(t,n){1&t&&(s.Pb(0,"mat-error"),s.uc(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email."),s.Ob())}function v(t,n){1&t&&(s.Pb(0,"button",7),s.uc(1,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),s.Ob())}function w(t,n){if(1&t){const t=s.Qb();s.Pb(0,"form",2,3),s.Wb("submit",(function(){s.lc(t);const n=s.jc(1);return s.ac().onReset(n)})),s.Pb(2,"mat-form-field"),s.Lb(3,"input",4,5),s.tc(5,M,2,0,"mat-error",0),s.Ob(),s.tc(6,v,2,0,"button",6),s.Ob()}if(2&t){const t=s.jc(4),n=s.ac();s.zb(5),s.fc("ngIf",t.invalid),s.zb(1),s.fc("ngIf",!n.isLoading)}}let L=(()=>{class t{constructor(t){this.authService=t,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(t=>{this.isLoading=!1})}onReset(t){t.invalid||(this.isLoading=!0,this.authService.reset(t.value.email))}ngOnDestroy(){this.authStatusSub.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(s.Kb(c.a))},t.\u0275cmp=s.Eb({type:t,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["signupForm","ngForm"],["matInput","","name","email","ngModel","","type","email","placeholder","E-Mail","required","","email",""],["emailInput","ngModel"],["mat-raised-button","","color","accent","type","submit",4,"ngIf"],["mat-raised-button","","color","accent","type","submit"]],template:function(t,n){1&t&&(s.Pb(0,"mat-card"),s.tc(1,I,1,0,"mat-spinner",0),s.tc(2,w,7,2,"form",1),s.Ob()),2&t&&(s.zb(1),s.fc("ngIf",n.isLoading),s.zb(1),s.fc("ngIf",!n.isLoading))},directives:[u.a,i.k,m.b,a.q,a.k,a.l,b.c,l.a,a.a,a.j,a.m,a.o,a.b,b.b,f.b],styles:["mat-card[_ngcontent-%COMP%]{width:400px;margin:auto}mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}button[_ngcontent-%COMP%]{margin-top:10px}"]}),t})(),S=(()=>{class t{constructor(){this.mustMatch=[]}validate(t){return(n=this.mustMatch[0],e=this.mustMatch[1],t=>{const i=t.controls[n],a=t.controls[e];return i&&a?a.errors&&!a.errors.mustMatch?null:void a.setErrors(i.value!==a.value?{mustMatch:!0}:null):null})(t);var n,e}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=s.Fb({type:t,selectors:[["","mustMatch",""]],inputs:{mustMatch:"mustMatch"},features:[s.yb([{provide:a.h,useExisting:t,multi:!0}])]}),t})();function y(t,n){1&t&&s.Lb(0,"mat-spinner")}function z(t,n){1&t&&(s.Pb(0,"mat-error"),s.uc(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email."),s.Ob())}function C(t,n){1&t&&(s.Pb(0,"mat-error"),s.uc(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c."),s.Ob())}function j(t,n){1&t&&(s.Pb(0,"mat-error"),s.uc(1,"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c."),s.Ob())}function _(t,n){1&t&&(s.Pb(0,"mat-error"),s.uc(1,"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442."),s.Ob())}function q(t,n){1&t&&(s.Pb(0,"button",11),s.uc(1,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),s.Ob())}const k=function(){return["password","confirmPassword"]};function E(t,n){if(1&t){const t=s.Qb();s.Pb(0,"form",2,3),s.Wb("submit",(function(){s.lc(t);const n=s.jc(1);return s.ac().onPasswordChange(n)})),s.Pb(2,"mat-form-field"),s.Lb(3,"input",4,5),s.tc(5,z,2,0,"mat-error",0),s.Ob(),s.Pb(6,"mat-form-field"),s.Lb(7,"input",6,7),s.tc(9,C,2,0,"mat-error",0),s.Ob(),s.Pb(10,"mat-form-field"),s.Lb(11,"input",8,9),s.tc(13,j,2,0,"mat-error",0),s.tc(14,_,2,0,"mat-error",0),s.Ob(),s.tc(15,q,2,0,"button",10),s.Ob()}if(2&t){const t=s.jc(4),n=s.jc(8),e=s.jc(12),i=s.ac();s.fc("mustMatch",s.gc(6,k)),s.zb(5),s.fc("ngIf",t.invalid),s.zb(4),s.fc("ngIf",n.invalid),s.zb(4),s.fc("ngIf",e.invalid&&!e.errors.mustMatch),s.zb(1),s.fc("ngIf",null==e.errors?null:e.errors.mustMatch),s.zb(1),s.fc("ngIf",!i.isLoading)}}function F(t,n){1&t&&s.Lb(0,"mat-spinner")}function x(t,n){1&t&&(s.Pb(0,"mat-error"),s.uc(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c."),s.Ob())}function A(t,n){1&t&&(s.Pb(0,"mat-error"),s.uc(1,"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c."),s.Ob())}function D(t,n){1&t&&(s.Pb(0,"mat-error"),s.uc(1,"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442."),s.Ob())}function K(t,n){1&t&&(s.Pb(0,"button",9),s.uc(1,"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"),s.Ob())}const W=function(){return["password","confirmPassword"]};function Q(t,n){if(1&t){const t=s.Qb();s.Pb(0,"form",2,3),s.Wb("submit",(function(){s.lc(t);const n=s.jc(1);return s.ac().onPasswordChange(n)})),s.Pb(2,"mat-form-field"),s.Lb(3,"input",4,5),s.tc(5,x,2,0,"mat-error",0),s.Ob(),s.Pb(6,"mat-form-field"),s.Lb(7,"input",6,7),s.tc(9,A,2,0,"mat-error",0),s.tc(10,D,2,0,"mat-error",0),s.Ob(),s.tc(11,K,2,0,"button",8),s.Ob()}if(2&t){const t=s.jc(4),n=s.jc(8),e=s.ac();s.fc("mustMatch",s.gc(5,W)),s.zb(5),s.fc("ngIf",t.invalid),s.zb(4),s.fc("ngIf",n.invalid&&!n.errors.mustMatch),s.zb(1),s.fc("ngIf",null==n.errors?null:n.errors.mustMatch),s.zb(1),s.fc("ngIf",!e.isLoading)}}const X=[{path:"login",component:O},{path:"signup",component:(()=>{class t{constructor(t){this.authService=t,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(t=>{this.isLoading=!1})}onSignup(t){t.invalid||(this.isLoading=!0,this.authService.createUser(t.value.email,t.value.password))}ngOnDestroy(){this.authStatusSub.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(s.Kb(c.a))},t.\u0275cmp=s.Eb({type:t,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"mustMatch","submit",4,"ngIf"],[3,"mustMatch","submit"],["signupForm","ngForm"],["matInput","","name","email","ngModel","","type","email","placeholder","E-Mail","required","","email",""],["emailInput","ngModel"],["type","password","name","password","ngModel","","matInput","","placeholder","\u041d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c","required",""],["passwordInput","ngModel"],["type","password","name","confirmPassword","ngModel","","matInput","","placeholder","\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c","required",""],["confirmPassword","ngModel"],["mat-raised-button","","color","accent","type","submit",4,"ngIf"],["mat-raised-button","","color","accent","type","submit"]],template:function(t,n){1&t&&(s.Pb(0,"mat-card"),s.tc(1,y,1,0,"mat-spinner",0),s.tc(2,E,16,7,"form",1),s.Ob()),2&t&&(s.zb(1),s.fc("ngIf",n.isLoading),s.zb(1),s.fc("ngIf",!n.isLoading))},directives:[u.a,i.k,m.b,a.q,a.k,a.l,S,b.c,l.a,a.a,a.j,a.m,a.o,a.b,b.b,f.b],styles:["mat-card[_ngcontent-%COMP%]{width:400px;margin:auto}mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}button[_ngcontent-%COMP%]{margin-top:10px}"]}),t})()},{path:"reset",component:L},{path:"change",component:(()=>{class t{constructor(t){this.authService=t,this.model={},this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(t=>{this.isLoading=!1})}onSubmit(){alert("SUCCESS!! :-)\n\n"+JSON.stringify(this.model,null,4))}onPasswordChange(t){t.invalid||(this.isLoading=!0,this.authService.change(t.value.email,t.value.password),this.authStatusSub=this.authService.getAuthStatusListener().subscribe(t=>{this.isLoading=!1}))}ngOnDestroy(){this.authStatusSub.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(s.Kb(c.a))},t.\u0275cmp=s.Eb({type:t,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"mustMatch","submit",4,"ngIf"],[3,"mustMatch","submit"],["signupForm","ngForm"],["type","password","name","password","ngModel","","matInput","","placeholder","\u041d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c","required",""],["passwordInput","ngModel"],["type","password","name","confirmPassword","ngModel","","matInput","","placeholder","\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c","required",""],["confirmPassword","ngModel"],["mat-raised-button","","color","accent","type","submit",4,"ngIf"],["mat-raised-button","","color","accent","type","submit"]],template:function(t,n){1&t&&(s.Pb(0,"mat-card"),s.tc(1,F,1,0,"mat-spinner",0),s.tc(2,Q,12,6,"form",1),s.Ob()),2&t&&(s.zb(1),s.fc("ngIf",n.isLoading),s.zb(1),s.fc("ngIf",!n.isLoading))},directives:[u.a,i.k,m.b,a.q,a.k,a.l,S,b.c,a.a,l.a,a.j,a.m,a.o,b.b,f.b],styles:["mat-card[_ngcontent-%COMP%]{width:400px;margin:auto}mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}button[_ngcontent-%COMP%]{margin-top:10px}"]}),t})()}];let G=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(n){return new(n||t)},imports:[[o.e.forChild(X)],o.e]}),t})(),J=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(n){return new(n||t)},imports:[[i.c,r.a,a.g,G]]}),t})()}}]);