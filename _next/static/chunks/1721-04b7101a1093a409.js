"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1721],{874:function(e,t,a){a.d(t,{Z:function(){return C}});var o=a(7294),c=a(512),l=a(4953),r=a(4867),n=a(4780),i=a(9243),s=a(1248),p=a(7437),d=a(8561),u=a(9730),v=a(8950),m=a(5893);let g=(0,d.Z)(),b=(0,i.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function f(e){return(0,s.Z)({props:e,name:"MuiStack",defaultTheme:g})}let y=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],h=({ownerState:e,theme:t})=>{let a={display:"flex",flexDirection:"column",...(0,u.k9)({theme:t},(0,u.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e}))};if(e.spacing){let o=(0,v.hB)(t),c=Object.keys(t.breakpoints.values).reduce((t,a)=>(("object"==typeof e.spacing&&null!=e.spacing[a]||"object"==typeof e.direction&&null!=e.direction[a])&&(t[a]=!0),t),{}),r=(0,u.P$)({values:e.direction,base:c}),n=(0,u.P$)({values:e.spacing,base:c});"object"==typeof r&&Object.keys(r).forEach((e,t,a)=>{if(!r[e]){let o=t>0?r[a[t-1]]:"column";r[e]=o}}),a=(0,l.Z)(a,(0,u.k9)({theme:t},n,(t,a)=>e.useFlexGap?{gap:(0,v.NA)(o,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${y(a?r[a]:e.direction)}`]:(0,v.NA)(o,t)}}))}return(0,u.dt)(t.breakpoints,a)};var C=function(e={}){let{createStyledComponent:t=b,useThemeProps:a=f,componentName:l="MuiStack"}=e,i=()=>(0,n.Z)({root:["root"]},e=>(0,r.ZP)(l,e),{}),s=t(h);return o.forwardRef(function(e,t){let l=a(e),{component:r="div",direction:n="column",spacing:d=0,divider:u,children:v,className:g,useFlexGap:b=!1,...f}=(0,p.Z)(l),y=i();return(0,m.jsx)(s,{as:r,ownerState:{direction:n,spacing:d,useFlexGap:b},ref:t,className:(0,c.Z)(y.root,g),...f,children:u?function(e,t){let a=o.Children.toArray(e).filter(Boolean);return a.reduce((e,c,l)=>(e.push(c),l<a.length-1&&e.push(o.cloneElement(t,{key:`separator-${l}`})),e),[])}(v,u):v})})}()},427:function(e,t,a){var o=a(4836);t.Z=void 0;var c=o(a(7955)),l=a(5893);t.Z=(0,c.default)((0,l.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m3.3 14.71L11 12.41V7h2v4.59l3.71 3.71z"}),"AccessTimeFilled")},1619:function(e,t,a){var o=a(4836);t.Z=void 0;var c=o(a(7955)),l=a(5893);t.Z=(0,c.default)((0,l.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person")},1946:function(e,t,a){a.d(t,{Z:function(){return S}});var o=a(7294),c=a(512),l=a(4780),r=a(8655),n=a(7680),i=a(5893),s=(0,n.Z)((0,i.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),p=a(8735),d=a(5228),u=a(5),v=a(9262),m=a(4633),g=a(6522),b=a(1588),f=a(4867);function y(e){return(0,f.ZP)("MuiChip",e)}let h=(0,b.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorDefault","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),C=e=>{let{classes:t,disabled:a,size:o,color:c,iconColor:r,onDelete:n,clickable:i,variant:s}=e,p={root:["root",s,a&&"disabled","size".concat((0,d.Z)(o)),"color".concat((0,d.Z)(c)),i&&"clickable",i&&"clickableColor".concat((0,d.Z)(c)),n&&"deletable",n&&"deletableColor".concat((0,d.Z)(c)),"".concat(s).concat((0,d.Z)(c))],label:["label","label".concat((0,d.Z)(o))],avatar:["avatar","avatar".concat((0,d.Z)(o)),"avatarColor".concat((0,d.Z)(c))],icon:["icon","icon".concat((0,d.Z)(o)),"iconColor".concat((0,d.Z)(r))],deleteIcon:["deleteIcon","deleteIcon".concat((0,d.Z)(o)),"deleteIconColor".concat((0,d.Z)(c)),"deleteIcon".concat((0,d.Z)(s),"Color").concat((0,d.Z)(c))]};return(0,l.Z)(p,y,t)},Z=(0,v.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e,{color:o,iconColor:c,clickable:l,onDelete:r,size:n,variant:i}=a;return[{["& .".concat(h.avatar)]:t.avatar},{["& .".concat(h.avatar)]:t["avatar".concat((0,d.Z)(n))]},{["& .".concat(h.avatar)]:t["avatarColor".concat((0,d.Z)(o))]},{["& .".concat(h.icon)]:t.icon},{["& .".concat(h.icon)]:t["icon".concat((0,d.Z)(n))]},{["& .".concat(h.icon)]:t["iconColor".concat((0,d.Z)(c))]},{["& .".concat(h.deleteIcon)]:t.deleteIcon},{["& .".concat(h.deleteIcon)]:t["deleteIcon".concat((0,d.Z)(n))]},{["& .".concat(h.deleteIcon)]:t["deleteIconColor".concat((0,d.Z)(o))]},{["& .".concat(h.deleteIcon)]:t["deleteIcon".concat((0,d.Z)(i),"Color").concat((0,d.Z)(o))]},t.root,t["size".concat((0,d.Z)(n))],t["color".concat((0,d.Z)(o))],l&&t.clickable,l&&"default"!==o&&t["clickableColor".concat((0,d.Z)(o),")")],r&&t.deletable,r&&"default"!==o&&t["deletableColor".concat((0,d.Z)(o))],t[i],t["".concat(i).concat((0,d.Z)(o))]]}})((0,m.Z)(e=>{let{theme:t}=e,a="light"===t.palette.mode?t.palette.grey[700]:t.palette.grey[300];return{maxWidth:"100%",fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(t.vars||t).palette.text.primary,backgroundColor:(t.vars||t).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:t.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",["&.".concat(h.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity,pointerEvents:"none"},["& .".concat(h.avatar)]:{marginLeft:5,marginRight:-6,width:24,height:24,color:t.vars?t.vars.palette.Chip.defaultAvatarColor:a,fontSize:t.typography.pxToRem(12)},["& .".concat(h.avatarColorPrimary)]:{color:(t.vars||t).palette.primary.contrastText,backgroundColor:(t.vars||t).palette.primary.dark},["& .".concat(h.avatarColorSecondary)]:{color:(t.vars||t).palette.secondary.contrastText,backgroundColor:(t.vars||t).palette.secondary.dark},["& .".concat(h.avatarSmall)]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:t.typography.pxToRem(10)},["& .".concat(h.icon)]:{marginLeft:5,marginRight:-6},["& .".concat(h.deleteIcon)]:{WebkitTapHighlightColor:"transparent",color:t.vars?"rgba(".concat(t.vars.palette.text.primaryChannel," / 0.26)"):(0,r.Fq)(t.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:t.vars?"rgba(".concat(t.vars.palette.text.primaryChannel," / 0.4)"):(0,r.Fq)(t.palette.text.primary,.4)}},variants:[{props:{size:"small"},style:{height:24,["& .".concat(h.icon)]:{fontSize:18,marginLeft:4,marginRight:-4},["& .".concat(h.deleteIcon)]:{fontSize:16,marginRight:4,marginLeft:-4}}},...Object.entries(t.palette).filter(e=>{let[,t]=e;return t&&t.main&&t.contrastText}).map(e=>{let[a]=e;return{props:{color:a},style:{backgroundColor:(t.vars||t).palette[a].main,color:(t.vars||t).palette[a].contrastText,["& .".concat(h.deleteIcon)]:{color:t.vars?"rgba(".concat(t.vars.palette[a].contrastTextChannel," / 0.7)"):(0,r.Fq)(t.palette[a].contrastText,.7),"&:hover, &:active":{color:(t.vars||t).palette[a].contrastText}}}}}),{props:e=>e.iconColor===e.color,style:{["& .".concat(h.icon)]:{color:t.vars?t.vars.palette.Chip.defaultIconColor:a}}},{props:e=>e.iconColor===e.color&&"default"!==e.color,style:{["& .".concat(h.icon)]:{color:"inherit"}}},{props:{onDelete:!0},style:{["&.".concat(h.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.selectedChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,r.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}}},...Object.entries(t.palette).filter(e=>{let[,t]=e;return t&&t.dark}).map(e=>{let[a]=e;return{props:{color:a,onDelete:!0},style:{["&.".concat(h.focusVisible)]:{background:(t.vars||t).palette[a].dark}}}}),{props:{clickable:!0},style:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.selectedChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,r.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)},["&.".concat(h.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.selectedChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,r.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},"&:active":{boxShadow:(t.vars||t).shadows[1]}}},...Object.entries(t.palette).filter(e=>{let[,t]=e;return t&&t.dark}).map(e=>{let[a]=e;return{props:{color:a,clickable:!0},style:{["&:hover, &.".concat(h.focusVisible)]:{backgroundColor:(t.vars||t).palette[a].dark}}}}),{props:{variant:"outlined"},style:{backgroundColor:"transparent",border:t.vars?"1px solid ".concat(t.vars.palette.Chip.defaultBorder):"1px solid ".concat("light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[700]),["&.".concat(h.clickable,":hover")]:{backgroundColor:(t.vars||t).palette.action.hover},["&.".concat(h.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["& .".concat(h.avatar)]:{marginLeft:4},["& .".concat(h.avatarSmall)]:{marginLeft:2},["& .".concat(h.icon)]:{marginLeft:4},["& .".concat(h.iconSmall)]:{marginLeft:2},["& .".concat(h.deleteIcon)]:{marginRight:5},["& .".concat(h.deleteIconSmall)]:{marginRight:3}}},...Object.entries(t.palette).filter(e=>{let[,t]=e;return t&&t.main}).map(e=>{let[a]=e;return{props:{variant:"outlined",color:a},style:{color:(t.vars||t).palette[a].main,border:"1px solid ".concat(t.vars?"rgba(".concat(t.vars.palette[a].mainChannel," / 0.7)"):(0,r.Fq)(t.palette[a].main,.7)),["&.".concat(h.clickable,":hover")]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,r.Fq)(t.palette[a].main,t.palette.action.hoverOpacity)},["&.".concat(h.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a].mainChannel," / ").concat(t.vars.palette.action.focusOpacity,")"):(0,r.Fq)(t.palette[a].main,t.palette.action.focusOpacity)},["& .".concat(h.deleteIcon)]:{color:t.vars?"rgba(".concat(t.vars.palette[a].mainChannel," / 0.7)"):(0,r.Fq)(t.palette[a].main,.7),"&:hover, &:active":{color:(t.vars||t).palette[a].main}}}}})]}})),k=(0,v.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,t)=>{let{ownerState:a}=e,{size:o}=a;return[t.label,t["label".concat((0,d.Z)(o))]]}})({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",variants:[{props:{variant:"outlined"},style:{paddingLeft:11,paddingRight:11}},{props:{size:"small"},style:{paddingLeft:8,paddingRight:8}},{props:{size:"small",variant:"outlined"},style:{paddingLeft:7,paddingRight:7}}]});function x(e){return"Backspace"===e.key||"Delete"===e.key}var S=o.forwardRef(function(e,t){let a=(0,g.i)({props:e,name:"MuiChip"}),{avatar:l,className:r,clickable:n,color:d="default",component:v,deleteIcon:m,disabled:b=!1,icon:f,label:y,onClick:h,onDelete:S,onKeyDown:I,onKeyUp:O,size:R="medium",variant:w="filled",tabIndex:P,skipFocusWhenDisabled:j=!1,...z}=a,L=o.useRef(null),F=(0,p.Z)(L,t),M=e=>{e.stopPropagation(),S&&S(e)},T=!1!==n&&!!h||n,N=T||S?u.Z:v||"div",V={...a,component:N,disabled:b,size:R,color:d,iconColor:o.isValidElement(f)&&f.props.color||d,onDelete:!!S,clickable:T,variant:w},E=C(V),q=N===u.Z?{component:v||"div",focusVisibleClassName:E.focusVisible,...S&&{disableRipple:!0}}:{},D=null;S&&(D=m&&o.isValidElement(m)?o.cloneElement(m,{className:(0,c.Z)(m.props.className,E.deleteIcon),onClick:M}):(0,i.jsx)(s,{className:(0,c.Z)(E.deleteIcon),onClick:M}));let A=null;l&&o.isValidElement(l)&&(A=o.cloneElement(l,{className:(0,c.Z)(E.avatar,l.props.className)}));let B=null;return f&&o.isValidElement(f)&&(B=o.cloneElement(f,{className:(0,c.Z)(E.icon,f.props.className)})),(0,i.jsxs)(Z,{as:N,className:(0,c.Z)(E.root,r),disabled:!!T&&!!b||void 0,onClick:h,onKeyDown:e=>{e.currentTarget===e.target&&x(e)&&e.preventDefault(),I&&I(e)},onKeyUp:e=>{e.currentTarget===e.target&&S&&x(e)&&S(e),O&&O(e)},ref:F,tabIndex:j&&b?-1:P,ownerState:V,...q,...z,children:[A||B,(0,i.jsx)(k,{className:(0,c.Z)(E.label),ownerState:V,children:y}),D]})})}}]);