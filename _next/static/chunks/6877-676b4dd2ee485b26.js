"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6877],{26126:(e,t,r)=>{r.d(t,{E:()=>l});var a=r(95155),i=r(99708),n=r(74466);r(12115);var o=r(59434);let s=(0,n.F)("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function l(e){let{className:t,variant:r,asChild:n=!1,...l}=e,d=n?i.DX:"span";return(0,a.jsx)(d,{"data-slot":"badge",className:(0,o.cn)(s({variant:r}),t),...l})}},30285:(e,t,r)=>{r.d(t,{$:()=>l});var a=r(95155),i=r(99708),n=r(74466);r(12115);var o=r(59434);let s=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:bg-primary/90 hover:-translate-y-1 hover:shadow-primary/20",destructive:"bg-destructive text-white shadow-md hover:shadow-lg hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 hover:-translate-y-1 hover:shadow-destructive/20",outline:"border bg-background shadow-md hover:shadow-lg hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 hover:-translate-y-1 hover:border-primary",secondary:"bg-secondary text-secondary-foreground shadow-md hover:shadow-lg hover:bg-secondary/80 hover:-translate-y-1 hover:shadow-secondary/20",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 hover:-translate-y-1",link:"text-primary underline-offset-4 hover:underline hover:-translate-y-1"},size:{default:"h-10 px-5 py-2.5 has-[>svg]:px-4 text-sm",sm:"h-9 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-xs",lg:"h-12 rounded-md px-8 py-3 has-[>svg]:px-6 text-base font-semibold",xl:"h-14 rounded-md px-10 py-4 has-[>svg]:px-8 text-lg font-semibold",icon:"size-10"}},defaultVariants:{variant:"default",size:"default"}});function l(e){let{className:t,variant:r,size:n,asChild:l=!1,...d}=e,c=l?i.DX:"button";return(0,a.jsx)(c,{"data-slot":"button",className:(0,o.cn)(s({variant:r,size:n,className:t})),...d})}},59434:(e,t,r)=>{r.d(t,{Yq:()=>s,cn:()=>n,u:()=>o});var a=r(52596),i=r(39688);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.QP)((0,a.$)(t))}function o(e){for(let{pattern:t,country:r}of[{pattern:/USA$/,country:"USA"},{pattern:/UK$/,country:"UK"},{pattern:/Canada$/,country:"Canada"},{pattern:/Germany$/,country:"Germany"},{pattern:/India$/,country:"India"},{pattern:/Singapore$/,country:"Singapore"},{pattern:/Belgium$/,country:"Belgium"},{pattern:/Poland$/,country:"Poland"},{pattern:/(Saudi Arabia)$/,country:"Saudi Arabia"},{pattern:/(South Korea)$/,country:"South Korea"}])if(t.test(e))return r;return e}function s(e){if(!e)return null;try{let t=new Date(e);return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(t)}catch(t){return console.error("Error formatting date:",t),e}}},88793:(e,t,r)=>{r.r(t),r.d(t,{HeroSection:()=>n});var a=r(95155),i=r(12115);function n(e){let{children:t,className:r}=e,[n,o]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{o(!0)},[]),(0,a.jsxs)("section",{className:"relative py-12 md:py-20 overflow-hidden flex flex-col items-center justify-center ".concat(null!=r?r:""),children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 bg-repeat"}),(0,a.jsx)("div",{className:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"}),(0,a.jsx)("div",{className:"absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"}),(0,a.jsx)("div",{className:"hero-glow absolute top-20 left-1/4 transition-opacity duration-1000 hidden sm:block",style:{opacity:.2*!!n,backgroundColor:"var(--color-primary)"}}),(0,a.jsx)("div",{className:"hero-glow absolute bottom-40 right-1/4 transition-opacity duration-1000 delay-300 hidden sm:block",style:{opacity:.15*!!n,backgroundColor:"var(--color-secondary)"}}),(0,a.jsx)("div",{className:"hero-glow absolute bottom-20 left-1/3 transition-opacity duration-1000 delay-500 hidden sm:block",style:{opacity:.1*!!n,backgroundColor:"var(--color-accent)"}}),(0,a.jsxs)("div",{className:"absolute inset-0 overflow-hidden",children:[(0,a.jsx)("div",{className:"absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"}),(0,a.jsx)("div",{className:"absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"}),(0,a.jsx)("div",{className:"absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent"}),(0,a.jsx)("div",{className:"absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"})]}),(0,a.jsxs)("div",{className:"relative z-10 max-w-4xl mx-auto px-4 transition-all duration-1000 transform",style:{opacity:+!!n,transform:n?"translateY(0)":"translateY(20px)"},children:[t,(0,a.jsx)("div",{className:"absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent blur-sm"})]}),(0,a.jsxs)("div",{className:"absolute bottom-5 md:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2",children:[(0,a.jsx)("div",{className:"w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-primary animate-pulse"}),(0,a.jsx)("div",{className:"w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-secondary animate-pulse",style:{animationDelay:"0.5s"}}),(0,a.jsx)("div",{className:"w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-accent animate-pulse",style:{animationDelay:"1s"}})]})]})}},91950:(e,t,r)=>{r.d(t,{SZ:()=>n,bw:()=>i,jx:()=>o,ox:()=>s,tk:()=>a,wU:()=>l});let a={USA:"\uD83C\uDDFA\uD83C\uDDF8",UK:"\uD83C\uDDEC\uD83C\uDDE7",Germany:"\uD83C\uDDE9\uD83C\uDDEA",France:"\uD83C\uDDEB\uD83C\uDDF7",India:"\uD83C\uDDEE\uD83C\uDDF3",Singapore:"\uD83C\uDDF8\uD83C\uDDEC",Belgium:"\uD83C\uDDE7\uD83C\uDDEA",Canada:"\uD83C\uDDE8\uD83C\uDDE6",Australia:"\uD83C\uDDE6\uD83C\uDDFA",Netherlands:"\uD83C\uDDF3\uD83C\uDDF1",Switzerland:"\uD83C\uDDE8\uD83C\uDDED",Italy:"\uD83C\uDDEE\uD83C\uDDF9",Spain:"\uD83C\uDDEA\uD83C\uDDF8",Japan:"\uD83C\uDDEF\uD83C\uDDF5","South Korea":"\uD83C\uDDF0\uD83C\uDDF7",Poland:"\uD83C\uDDF5\uD83C\uDDF1","Saudi Arabia":"\uD83C\uDDF8\uD83C\uDDE6"},i={HOME:"/",SERVICES:{INDEX:"/services",VULNERABILITY_RESEARCH:"/services/vulnerability-research",SECURITY_CONSULTING:"/services/security-consulting",N_DAY_FEED:"/services/n-day-feed"},TRAININGS:{INDEX:"/trainings",FOUNDATION:"/trainings/windows-kernel-exploitation-foundation",ADVANCED:"/trainings/windows-kernel-exploitation-advanced",BUNDLE:"/trainings/windows-kernel-exploitation-bundle",DETAIL:e=>"/trainings/".concat(e)},ADVISORIES:{INDEX:"/advisories",DETAIL:e=>"/advisories/".concat(e)},BLOGS:{INDEX:"/blogs",DETAIL:e=>"/blogs/".concat(e)},SCHEDULE:"/schedule",GOODIES:"/goodies",CONTACT:"/contact"},n=[{id:0,title:"Trainings",description:"Specialized security training programs",detailedDescription:"Explore our comprehensive cybersecurity training programs focusing on Windows Kernel Exploitation and practical security concepts.",url:i.TRAININGS.INDEX,indexDisplay:!0,category:"primary",icon:"school"},{id:1,title:"Vulnerability Research",description:"Professional vulnerability research and disclosure services",detailedDescription:"Our expert team discovers and analyzes security vulnerabilities in software and systems to help vendors improve their security posture.",url:i.CONTACT,indexDisplay:!0,category:"service",icon:"security"},{id:2,title:"N-Day Feed",description:"Stay updated with latest security vulnerabilities",detailedDescription:"Comprehensive feed of recently disclosed vulnerabilities with expert analysis to keep your organization informed of emerging threats.",url:i.CONTACT,indexDisplay:!0,category:"service",icon:"update"},{id:3,title:"Security Consulting",description:"Expert security consulting for organizations of all sizes",detailedDescription:"Tailored security solutions and expert guidance to help organizations identify and address their unique security challenges.",url:i.CONTACT,indexDisplay:!0,category:"service",icon:"business"},{id:4,title:"Windows Kernel Exploitation Foundation",description:"Learn the fundamentals of Windows kernel exploitation",detailedDescription:"An introductory course covering the essential concepts and techniques for Windows kernel exploitation.",url:i.TRAININGS.FOUNDATION,indexDisplay:!1,category:"training",icon:"school"},{id:5,title:"Windows Kernel Exploitation Advanced",description:"Advanced techniques for Windows kernel exploitation",detailedDescription:"Take your skills to the next level with advanced concepts and methodologies in Windows kernel exploitation.",url:i.TRAININGS.ADVANCED,indexDisplay:!1,category:"training",icon:"school"},{id:6,title:"Windows Kernel Exploitation Foundation & Advanced",description:"Combined course covering both foundation and advanced Windows kernel exploitation",detailedDescription:"A comprehensive training program that covers both foundational and advanced aspects of Windows kernel exploitation in a single course.",url:i.TRAININGS.BUNDLE,indexDisplay:!1,category:"training",icon:"school"}];i.ADVISORIES.INDEX,i.BLOGS.INDEX;let o={name:"HackSys Inc",shortName:"HackSys",title:"HackSys Inc: Cybersecurity Vulnerability Research & Training",description:"Expert cybersecurity vulnerability research, Windows kernel exploitation insights, and professional security training from HackSys Inc. Discover cutting-edge security solutions.",baseUrl:"https://hacksys.io",author:{name:"HackSys Inc",email:"info@hacksys.io",twitterHandle:"@HackSysTeam",twitterUrl:"https://twitter.com/HackSysTeam",githubUrl:"https://github.com/hacksysteam",facebookUrl:"https://www.facebook.com/HackSysTeam"},themeColor:"#0a0a0a",backgroundColor:"#0a0a0a",logo:"/logo.svg",favicon:"/favicon.ico",ogImage:"/android-chrome-512x512.png",appleTouchIcon:"/apple-touch-icon.png"},s=o.baseUrl,l=[{name:"HOME",url:i.HOME,weight:0},{name:"SERVICES",url:i.SERVICES.INDEX,weight:1},{name:"SCHEDULE",url:i.SCHEDULE,weight:2},{name:"BLOGS",url:i.BLOGS.INDEX,weight:3},{name:"ADVISORIES",url:i.ADVISORIES.INDEX,weight:4},{name:"GOODIES",url:i.GOODIES,weight:5},{name:"CONTACT",url:i.CONTACT,weight:6}]}}]);