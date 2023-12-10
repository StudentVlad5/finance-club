"use strict";(self.webpackChunkfinance_club=self.webpackChunkfinance_club||[]).push([[571],{5867:(n,e,t)=>{t.d(e,{CD:()=>Z,Fg:()=>C,Tv:()=>j,Yb:()=>v,cu:()=>P,gW:()=>k,ii:()=>f,tN:()=>z,un:()=>y});var i,s,r,a,o,l,d,h,c,m=t(168),p=t(9755),x=t(8126),u=t(7924),w=t(1933),b=t(1087),g=t(8081);const f=(0,u.ZP)(p.vw)(i||(i=(0,m.Z)(["\n  width: 100%;\n  text-align: start;\n"]))),j=u.ZP.div(s||(s=(0,m.Z)(["\n  position: absolute;\n  white-space: nowrap;\n  bottom: -5px;\n  left: 15px;\n  margin-bottom: -16px;\n  color: #e53e3e;\n  font-family: ",";\n  font-size: ",";\n  font-style: normal;\n  line-height: 1.4;\n  letter-spacing: 0.03em;\n  @media screen and (min-width: ",") {\n    left: 32px;\n  }\n"])),x.r.fonts[1],x.r.fontSizes.small,x.r.breakpoints.tablet),v=(0,u.ZP)(g.W2)(r||(r=(0,m.Z)(["\n  max-width: 250px;\n  @media screen and (min-width: ",") {\n    max-width: 540px;\n  }\n"])),x.r.breakpoints.tablet),Z=(0,u.ZP)(p.yt)(a||(a=(0,m.Z)(["\n  min-width: 250px;\n\n  @media screen and (min-width: ",") {\n    min-width: 450px;\n    margin-bottom: 35px;\n  }\n"])),x.r.breakpoints.tablet),k=u.ZP.span(o||(o=(0,m.Z)(["\n  display: inline-block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  right: 6%;\n  top: 80%;\n  transform: translateY(-80%);\n  color: grey;\n  cursor: pointer;\n  @media screen and (min-width: ",") {\n    height: 50px;\n    top: 62%;\n  }\n  & svg {\n    width: inherit;\n    height: inherit;\n  }\n"])),x.r.breakpoints.tablet),y=(0,u.ZP)(w.TU)(l||(l=(0,m.Z)(["\n  font-size: 14px;\n  width: 180px;\n  height: 50px;\n\n  @media screen and (min-width: ",") {\n    font-size: 16px;\n    width: 217px;\n    height: 70px;\n  }\n\n  @media screen and (min-width: ",") {\n    font-size: 18px;\n  }\n"])),x.r.breakpoints.tablet,x.r.breakpoints.tablet),C=(0,u.ZP)(b.rU)(d||(d=(0,m.Z)(["\n  color: ",";\n  transition: ",";\n  text-decoration: none;\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(n=>n.theme.white_text),x.r.transition[0],(n=>n.theme.grey)),P=u.ZP.div(h||(h=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: end;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 16px;\n\n  font-family: ",";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 0.04em;\n  color: ",";\n\n  @media screen and (min-width: ",") {\n    font-size: 16px;\n  }\n\n  @media screen and (min-width: ",") {\n    font-size: 18px;\n  }\n"])),x.r.fonts[0],(n=>n.theme.white_text),x.r.breakpoints.tablet,x.r.breakpoints.desktop),z=(0,u.ZP)(p.Gq)(c||(c=(0,m.Z)(["\n  gap: 15px;\n  &:last-child {\n    margin-bottom: 20px;\n  }\n"])))},4571:(n,e,t)=>{t.r(e),t.d(e,{default:()=>b});var i=t(2791),s=t(9434),r=t(5705),a=t(828),o=t(6397),l=t(8126),d=t(5867),h=t(9982),c=t(9755),m=t(8081),p=t(9230),x=t(3329);const u=()=>{const{t:n}=(0,p.$G)(),[e,t]=(0,i.useState)(!1),[u,w]=(0,i.useState)(!1),b=(0,s.I0)(),g=(0,r.TA)({initialValues:{email:"",password:""},validationSchema:o.Z.schemasLogin,onSubmit:n=>{w(!0);const{email:e,password:t}=n;b((0,h.Ib)({email:e,password:t})),w(!1)}}),f=!!(g.errors.email&&g.touched.email||g.errors.password&&g.touched.password||""===g.values.email),j=(n,e)=>n?"".concat(e?l.r.colors.red:l.r.colors.darkGreen):null;return(0,x.jsx)(m.$0,{children:(0,x.jsx)(m.W2,{children:(0,x.jsx)(r.J9,{validationSchema:o.Z.schemasLogin,children:(0,x.jsxs)(d.tN,{onSubmit:g.handleSubmit,autoComplete:"off",children:[(0,x.jsx)(d.ii,{children:n("Log In")}),(0,x.jsxs)(c.Wi,{children:[(0,x.jsxs)(c.lX,{htmlFor:"email",children:[(0,x.jsx)("span",{children:n("Email")}),g.errors.name&&g.touched.name?(0,x.jsx)(c.jj,{children:g.errors.name}):null]}),(0,x.jsx)(d.CD,{style:{borderColor:j(g.values.email,g.errors.email)},name:"email",type:"email",validate:o.Z.schemasLogin.email,onChange:g.handleChange,value:g.values.email,onBlur:g.handleBlur})]}),(0,x.jsxs)(c.Wi,{children:[(0,x.jsxs)(c.lX,{htmlFor:"password",children:[(0,x.jsx)("span",{children:n("Password")}),g.errors.name&&g.touched.name?(0,x.jsx)(c.jj,{children:g.errors.name}):null]}),(0,x.jsx)(d.CD,{style:{borderColor:j(g.values.password,g.errors.password)},name:"password",type:e?"text":"password",onChange:g.handleChange,value:g.values.password,onBlur:g.handleBlur}),(0,x.jsx)(d.gW,{onClick:()=>{t(!e)},children:e?(0,x.jsx)(a.bt0,{}):(0,x.jsx)(a.RF8,{})}),g.errors.password&&g.touched.password?(0,x.jsx)(d.Tv,{children:g.errors.password}):null]}),(0,x.jsxs)(d.Yb,{children:[(0,x.jsx)(d.cu,{children:(0,x.jsx)(d.Fg,{to:"/forgot_password",children:n("Forgot password?")})}),(0,x.jsx)(d.un,{type:"submit",disabled:f,"aria-label":"submit log in",children:u?"Loading":n("Log In")})]})]})})})})};var w=t(4116);const b=()=>((0,i.useEffect)((()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(w.H,{title:"Login",description:""}),(0,x.jsx)(u,{})]}))},4116:(n,e,t)=>{t.d(e,{H:()=>r});t(2791);var i=t(6907),s=t(3329);function r(n){let{title:e,description:t}=n;return(0,s.jsxs)(i.ql,{children:[(0,s.jsx)("title",{children:e}),(0,s.jsx)("meta",{name:"description",content:t})]})}}}]);
//# sourceMappingURL=571.ea354168.chunk.js.map