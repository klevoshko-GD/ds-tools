import{r as ye,R as e}from"./index-CwcVQgaJ.js";import{y as be,E as j,z as N,k as A,h as ge,q as W,P as pe}from"./Icons-rzMiLLTw.js";import{T as he}from"./TimesheetCell-aui2yu2T.js";import{B as b}from"./Badge-BHK3eREH.js";function ve(){return e.createElement(be,{className:"accordion-trigger__chevron",size:16,strokeWidth:1.5,"aria-hidden":"true"})}const ue=e.createContext(null),O=e.createContext(null);function g({type:n="single",collapsible:o=!0,defaultValue:r,value:i,onValueChange:a,children:t,...m}){const d=i!==void 0,[f,y]=ye.useState(()=>r?new Set(Array.isArray(r)?r:[r]):new Set),p=d?new Set(Array.isArray(i)?i:[i]):f,v=u=>{let h;if(p.has(u)){if(n==="single"&&!o)return;h=new Set(p),h.delete(u)}else h=n==="single"?new Set([u]):new Set([...p,u]);d||y(h),a==null||a(n==="single"?[...h][0]??null:[...h])};return e.createElement(ue.Provider,{value:{openSet:p,toggle:v}},e.createElement("div",{className:"accordion",...m},t))}function l({value:n,disabled:o=!1,className:r,children:i,...a}){const t=e.useContext(ue),m=(t==null?void 0:t.openSet.has(n))??!1;return e.createElement(O.Provider,{value:{value:n,isOpen:m,disabled:o,toggle:t==null?void 0:t.toggle}},e.createElement("div",{className:["accordion-item",m?"accordion-item--open":"",o?"accordion-item--disabled":"",r].filter(Boolean).join(" "),"data-state":m?"open":"closed",...a},i))}function c({children:n,...o}){const{value:r,isOpen:i,disabled:a,toggle:t}=e.useContext(O);return e.createElement("button",{type:"button",className:"accordion-trigger","aria-expanded":i,"aria-controls":`accordion-content-${r}`,id:`accordion-trigger-${r}`,disabled:a,onClick:()=>!a&&(t==null?void 0:t(r)),...o},e.createElement("span",{className:"accordion-trigger__text"},n),e.createElement(ve,null))}function s({children:n,...o}){const{value:r,isOpen:i}=e.useContext(O);return e.createElement("div",{className:`accordion-content${i?" accordion-content--open":""}`,id:`accordion-content-${r}`,role:"region","aria-labelledby":`accordion-trigger-${r}`,"data-state":i?"open":"closed",...o},e.createElement("div",{className:"accordion-content__inner"},e.createElement("div",{className:"accordion-content__body"},n)))}g.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{type:{defaultValue:{value:"'single'",computed:!1},required:!1},collapsible:{defaultValue:{value:"true",computed:!1},required:!1}}};l.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};c.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger"};s.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const we={title:"Design Tokens/Accordion",component:g,parameters:{layout:"padded",docs:{description:{component:"Accordion — collapsible content sections. Single or multiple open items. Animated with CSS grid-template-rows trick (200ms ease-out). Ref: Figma DS (AI) node 34:526."}}}},S={name:"Default",render:()=>e.createElement("div",{style:{maxWidth:360,fontFamily:"system-ui, sans-serif"}},e.createElement(g,{type:"single",collapsible:!0,defaultValue:"item-1"},e.createElement(l,{value:"item-1"},e.createElement(c,null,"What is a design system?"),e.createElement(s,null,"A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.")),e.createElement(l,{value:"item-2"},e.createElement(c,null,"How are tokens used?"),e.createElement(s,null,"Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes such as color, spacing, and typography.")),e.createElement(l,{value:"item-3"},e.createElement(c,null,"What components are available?"),e.createElement(s,null,"The library includes Badge, Avatar, Button, Checkbox, Input, Table, Timesheet Cell, Accordion, and more — all token-driven and Figma-matched.")),e.createElement(l,{value:"item-4"},e.createElement(c,null,"Is dark mode supported?"),e.createElement(s,null,"Dark mode support is built into the token architecture. Switching the variables file from ",e.createElement("code",null,"light")," to ",e.createElement("code",null,"dark")," updates all component colors automatically."))))},T={name:"Multiple Open",render:()=>e.createElement("div",{style:{maxWidth:360,fontFamily:"system-ui, sans-serif"}},e.createElement(g,{type:"multiple",defaultValue:["item-1","item-3"]},e.createElement(l,{value:"item-1"},e.createElement(c,null,"Trigger Text"),e.createElement(s,null,"This is an accordion content.")),e.createElement(l,{value:"item-2"},e.createElement(c,null,"Trigger Text"),e.createElement(s,null,"This is an accordion content.")),e.createElement(l,{value:"item-3"},e.createElement(c,null,"Trigger Text"),e.createElement(s,null,"This is an accordion content.")),e.createElement(l,{value:"item-4"},e.createElement(c,null,"Trigger Text"),e.createElement(s,null,"This is an accordion content."))))},P={name:"All Closed",render:()=>e.createElement("div",{style:{maxWidth:360,fontFamily:"system-ui, sans-serif"}},e.createElement(g,{type:"single",collapsible:!0},["Trigger Text","Trigger Text","Trigger Text","Trigger Text"].map((n,o)=>e.createElement(l,{key:o,value:`item-${o}`},e.createElement(c,null,n),e.createElement(s,null,"This is an accordion content.")))))},C={name:"With Disabled Item",render:()=>e.createElement("div",{style:{maxWidth:360,fontFamily:"system-ui, sans-serif"}},e.createElement(g,{type:"single",collapsible:!0,defaultValue:"item-1"},e.createElement(l,{value:"item-1"},e.createElement(c,null,"Active item"),e.createElement(s,null,"This item can be toggled open and closed.")),e.createElement(l,{value:"item-2",disabled:!0},e.createElement(c,null,"Disabled item"),e.createElement(s,null,"This content is not reachable.")),e.createElement(l,{value:"item-3"},e.createElement(c,null,"Another active item"),e.createElement(s,null,"This item can also be toggled."))))},I={name:"Rich Content (Slot)",render:()=>e.createElement("div",{style:{maxWidth:360,fontFamily:"system-ui, sans-serif"}},e.createElement(g,{type:"single",collapsible:!0,defaultValue:"team"},e.createElement(l,{value:"team"},e.createElement(c,null,"Team Members"),e.createElement(s,null,e.createElement("ul",{style:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:8}},[{name:"Elena Morris",role:"Frontend Developer"},{name:"James Carter",role:"Backend Engineer"},{name:"Sofia Reyes",role:"Product Designer"}].map(({name:n,role:o})=>e.createElement("li",{key:n,style:{display:"flex",justifyContent:"space-between",fontSize:13}},e.createElement("span",{style:{fontWeight:600,color:"var(--color-base-foreground, #1f1f21)"}},n),e.createElement("span",{style:{color:"var(--color-base-muted-foreground, #91959f)"}},o)))))),e.createElement(l,{value:"billing"},e.createElement(c,null,"Billing Details"),e.createElement(s,null,e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:4,fontSize:13,color:"var(--color-base-muted-foreground, #91959f)"}},e.createElement("div",null,"Plan: ",e.createElement("strong",{style:{color:"var(--color-base-foreground)"}},"Professional")),e.createElement("div",null,"Cycle: ",e.createElement("strong",{style:{color:"var(--color-base-foreground)"}},"Monthly")),e.createElement("div",null,"Next billing: ",e.createElement("strong",{style:{color:"var(--color-base-foreground)"}},"May 1, 2026"))))),e.createElement(l,{value:"settings"},e.createElement(c,null,"Notifications"),e.createElement(s,null,"Configure your email and push notification preferences in account settings."))))},k={name:"Token Reference",render:()=>{const n=[{element:"Wrapper border",token:"--color-base-border",value:"#d9dade"},{element:"Item divider",token:"--color-base-border",value:"#d9dade"},{element:"Background",token:"--color-base-card",value:"#ffffff"},{element:"Trigger text",token:"--color-base-foreground",value:"#1f1f21"},{element:"Trigger hover bg",token:"--color-base-muted",value:"#f7f8f8"},{element:"Trigger active bg",token:"--color-base-accent",value:"#eeeef0"},{element:"Trigger focus ring",token:"--color-base-primary",value:"#0069b4"},{element:"Chevron color",token:"--color-base-muted-foreground",value:"#91959f"},{element:"Content text",token:"--color-base-muted-foreground",value:"#91959f"}],o={textAlign:"left",padding:"8px 12px",fontSize:10,fontWeight:700,color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.06em",borderBottom:"2px solid #e5e7eb"},r={padding:"10px 12px",fontSize:12,borderBottom:"1px solid #f3f4f6",verticalAlign:"middle"};return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:18,fontWeight:700,color:"#111827",margin:"0 0 8px"}},"Token Reference"),e.createElement("p",{style:{fontSize:12,color:"#6b7280",margin:"0 0 20px"}},"Border radius: 5px · Trigger height: 52px · Content padding: 0 16px 20px · Transition: 200ms ease-out"),e.createElement("table",{style:{width:"100%",borderCollapse:"collapse"}},e.createElement("thead",null,e.createElement("tr",null,["Element","Token","Value"].map(i=>e.createElement("th",{key:i,style:o},i)))),e.createElement("tbody",null,n.map(({element:i,token:a,value:t},m)=>e.createElement("tr",{key:i,style:{background:m%2===0?"#fafafa":"#fff"}},e.createElement("td",{style:{...r,fontWeight:600,color:"#111827"}},i),e.createElement("td",{style:{...r,fontFamily:"monospace",fontSize:11,color:"#6b7280"}},a),e.createElement("td",{style:r},e.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:6}},e.createElement("span",{style:{width:12,height:12,borderRadius:2,background:t,border:"1px solid rgba(0,0,0,0.12)",flexShrink:0}}),e.createElement("span",{style:{fontFamily:"monospace",fontSize:11}},t))))))))}},Ee=[{state:"approved",label:"Approved"},{state:"bamboo",label:"Note attached to entry"},{state:"draft",label:"Draft"},{state:"pto",label:"PTO"},{state:"overtime",label:"Overtime"},{state:"public-holiday",label:"Public Holiday"},{state:"account-holiday",label:"Account Holiday"},{state:"weekend",label:"Weekend"},{state:"travelling",label:"Travelling"},{state:"training",label:"Training"},{state:"merged",label:"Merged"},{state:"no-hours",label:"No Hours"},{state:"hint",label:"Hint Applied"},{state:"actual",label:"Actual"},{state:"total",label:"Total"}];function Ae(){return e.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px 18px",alignItems:"center"}},Ee.map(({state:n,label:o})=>e.createElement("div",{key:n,style:{display:"flex",alignItems:"center",gap:6}},e.createElement(he,{state:n,value:n==="total"?"40h":void 0,progress:.65,small:!0}),e.createElement("span",{style:{fontSize:13,color:"var(--color-base-foreground, #1f1f21)",whiteSpace:"nowrap"}},o))))}const xe=[{value:"project-boston",title:"Boston Global HCP Web Experience Jan",subtitle:"Cloud and App Platforms and Engineering / Quality & Performance Engineering"},{value:"project-phoenix",title:"Phoenix Cloud Migration Q1",subtitle:"Infrastructure & DevOps / Platform Engineering"},{value:"project-atlas",title:"Atlas Data Platform Redesign",subtitle:"Data Engineering / Analytics & Insights"}],w={name:"Timesheets",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#f7f8f8",minHeight:"100vh"}},e.createElement("h2",{style:{fontSize:18,fontWeight:700,color:"#1f1f21",margin:"0 0 4px"}},"Timesheets"),e.createElement("p",{style:{fontSize:13,color:"#91959f",margin:"0 0 20px"}},"Project accordions + Cell state legend — ref: Figma nodes 40000016:54479, 40000018:63327"),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:8}},xe.map(({value:n,title:o,subtitle:r})=>e.createElement(g,{key:n,type:"single",collapsible:!0,className:"accordion--timesheets"},e.createElement(l,{value:n},e.createElement(c,null,e.createElement("div",{style:{flex:1,minWidth:0}},e.createElement("p",{className:"accordion-project__title"},o),e.createElement("p",{className:"accordion-project__subtitle"},r))),e.createElement(s,null,e.createElement("p",{style:{margin:0,fontSize:13,color:"var(--color-base-muted-foreground, #91959f)"}},"Timesheet content for ",o)))))),e.createElement(g,{type:"single",collapsible:!0,defaultValue:"legend",className:"accordion--timesheets"},e.createElement(l,{value:"legend"},e.createElement(c,null,e.createElement("span",{style:{fontWeight:500,color:"var(--color-base-foreground, #1f1f21)"}},"Cell State Legend")),e.createElement(s,null,e.createElement(Ae,null)))))};function E({title:n,subtitle:o,badge:r=null,rightSlot:i=null}){return e.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flex:1,gap:16,minWidth:0}},e.createElement("div",{style:{flex:1,minWidth:0}},e.createElement("p",{className:"accordion-project__title",style:{color:"var(--color-base-primary-foreground, #f7f8f8)"}},n),e.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:2}},r,e.createElement("p",{className:"accordion-project__subtitle",style:{color:"rgba(255,255,255,0.75)",margin:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},o))),i&&e.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,flexShrink:0,flexWrap:"nowrap"},onClick:a=>a.stopPropagation()},i))}function M(){return e.createElement(e.Fragment,null,e.createElement("span",{className:"srp-tag"},"USD"),e.createElement("span",{className:"srp-tag"},"T&M"),e.createElement("span",{className:"srp-tag",style:{display:"inline-flex",alignItems:"center",gap:4}},"P: Production Testing ",e.createElement(ge,{size:11})),e.createElement("button",{className:"srp-action-btn srp-action-btn--icon",title:"Settings"},e.createElement(W,{size:14})),e.createElement("button",{className:"srp-action-btn",style:{display:"inline-flex",alignItems:"center",gap:6}},e.createElement(pe,{size:14})," Add Position"))}function Se(){return e.createElement("button",{className:"srp-action-btn srp-action-btn--icon",title:"Settings"},e.createElement(W,{size:14}))}function Te(){return e.createElement(e.Fragment,null,e.createElement("button",{className:"srp-action-btn srp-action-btn--icon",title:"Settings"},e.createElement(W,{size:14})),e.createElement("button",{className:"srp-action-btn",style:{display:"inline-flex",alignItems:"center",gap:6}},e.createElement(A,{size:14})," Unarchive projections"))}const B=[{role:"Senior Frontend Engineer",level:"L5",rate:"$185",hours:160,revenue:"$29,600"},{role:"Backend Engineer",level:"L4",rate:"$165",hours:160,revenue:"$26,400"},{role:"Product Designer",level:"L4",rate:"$155",hours:80,revenue:"$12,400"},{role:"QA Engineer",level:"L3",rate:"$130",hours:80,revenue:"$10,400"}];function z({positions:n=B}){const o={padding:"8px 12px",fontSize:11,fontWeight:700,color:"#91959f",textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid #d9dade",textAlign:"left"},r={padding:"10px 12px",fontSize:13,borderBottom:"1px solid #f0f1f3",color:"#1f1f21"},i=n.reduce((a,t)=>a+parseInt(t.revenue.replace(/\D/g,"")),0);return e.createElement("table",{style:{width:"100%",borderCollapse:"collapse"}},e.createElement("thead",null,e.createElement("tr",null,["Position","Level","Rate / hr","Hours","Projected Revenue"].map(a=>e.createElement("th",{key:a,style:{...o,textAlign:a==="Projected Revenue"?"right":"left"}},a)))),e.createElement("tbody",null,n.map((a,t)=>e.createElement("tr",{key:t,style:{background:t%2===0?"#fafafa":"#fff"}},e.createElement("td",{style:{...r,fontWeight:600}},a.role),e.createElement("td",{style:{...r,color:"#91959f"}},a.level),e.createElement("td",{style:r},a.rate),e.createElement("td",{style:r},a.hours),e.createElement("td",{style:{...r,textAlign:"right",fontWeight:600}},a.revenue))),e.createElement("tr",{style:{background:"#f0f9ff"}},e.createElement("td",{colSpan:4,style:{...r,fontWeight:700,color:"#0069b4",borderTop:"2px solid #d1ecff"}},"Total"),e.createElement("td",{style:{...r,textAlign:"right",fontWeight:700,color:"#0069b4",borderTop:"2px solid #d1ecff"}},"$",i.toLocaleString()))))}const R={name:"SRP — Design Documentation",render:()=>{function n({n:d}){return e.createElement("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:20,height:20,borderRadius:"50%",background:"#0069b4",color:"#fff",fontSize:10,fontWeight:700,flexShrink:0,lineHeight:1}},d)}const o=({children:d})=>e.createElement("h3",{style:{fontSize:14,fontWeight:700,color:"#111827",margin:"36px 0 12px",paddingBottom:8,borderBottom:"2px solid #e5e7eb"}},d),r=[{n:1,name:"Project Title",desc:"Primary label identifying the project. Semibold 16px, white. Truncates with ellipsis on overflow.",sample:e.createElement("span",{style:{fontWeight:600,fontSize:14,color:"#1f1f21"}},"Boston Global HCP Web Experience Jan")},{n:2,name:"Project Description",desc:"Secondary line showing department / team hierarchy. 14px regular, white @75% opacity. Truncates.",sample:e.createElement("span",{style:{fontSize:12,color:"#91959f"}},"Cloud and App Platforms / Quality & Performance Engineering")},{n:3,name:"Status Badge",desc:"Ghost pill shown only when project is in a non-active state: Draft, Inactive, or Archived. Omitted for Active.",sample:e.createElement("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},e.createElement(b,{variant:"srp",icon:e.createElement(j,{size:11})},"Draft Project"),e.createElement(b,{variant:"srp",icon:e.createElement(N,{size:11})},"Inactive Project"),e.createElement(b,{variant:"srp",icon:e.createElement(A,{size:11})},"Archived Opportunity"))},{n:4,name:"Currency Badge",desc:"Compact ghost tag indicating the billing currency for the project. Currently USD.",sample:e.createElement("span",{className:"srp-tag",style:{background:"rgba(0,105,180,0.12)",color:"#0069b4",border:"1px solid rgba(0,105,180,0.25)",borderRadius:4,fontSize:12,fontWeight:600,padding:"3px 8px"}},"USD")},{n:5,name:"Billing Model Badge",desc:"Ghost tag indicating the revenue model. One of: T&M, Fixed, or POD. See Billing Model section below.",sample:e.createElement("div",{style:{display:"flex",gap:6}},["T&M","Fixed","POD"].map(d=>e.createElement("span",{key:d,className:"srp-tag",style:{background:"rgba(0,105,180,0.12)",color:"#0069b4",border:"1px solid rgba(0,105,180,0.25)",borderRadius:4,fontSize:12,fontWeight:600,padding:"3px 8px"}},d)))},{n:6,name:"Stage / Scenario Tag",desc:"Optional ghost tag linking the accordion to a specific projection stage or scenario (e.g. P: Production Testing).",sample:e.createElement("span",{className:"srp-tag",style:{background:"rgba(0,105,180,0.12)",color:"#0069b4",border:"1px solid rgba(0,105,180,0.25)",borderRadius:4,fontSize:12,fontWeight:600,padding:"3px 8px",display:"inline-flex",alignItems:"center",gap:4}},"P: Production Testing ",e.createElement(ge,{size:11}))},{n:7,name:"Settings CTA",desc:"Icon-only ghost button. Opens project settings. Present on all variants except the base active state without extra controls.",sample:e.createElement("button",{className:"srp-action-btn srp-action-btn--icon",style:{background:"rgba(0,105,180,0.08)",border:"1px solid rgba(0,105,180,0.25)",color:"#0069b4",borderRadius:6},title:"Settings"},e.createElement(W,{size:14}))},{n:8,name:"Primary CTA",desc:'Text ghost button with optional icon. Varies by status: "Add Position" (Active/Draft) · "Unarchive projections" (Archived). Hidden on Inactive.',sample:e.createElement("div",{style:{display:"flex",gap:8}},e.createElement("button",{className:"srp-action-btn",style:{background:"rgba(0,105,180,0.08)",border:"1px solid rgba(0,105,180,0.25)",color:"#0069b4",borderRadius:6,fontSize:13,fontWeight:600,padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:5}},e.createElement(pe,{size:13})," Add Position"),e.createElement("button",{className:"srp-action-btn",style:{background:"rgba(0,105,180,0.08)",border:"1px solid rgba(0,105,180,0.25)",color:"#0069b4",borderRadius:6,fontSize:13,fontWeight:600,padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:5}},e.createElement(A,{size:13})," Unarchive projections"))},{n:9,name:"Chevron",desc:"Collapse/expand indicator on the far right. White @70% opacity when closed, full white when open. Rotates 180° on open.",sample:e.createElement("div",{style:{display:"flex",gap:16,alignItems:"center"}},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:4,fontSize:12,color:"#6b7280"}},e.createElement("svg",{viewBox:"0 0 24 24",width:16,height:16,fill:"none",stroke:"currentColor",strokeWidth:1.5},e.createElement("path",{d:"M6 9l6 6 6-6"})),"Collapsed"),e.createElement("div",{style:{display:"flex",alignItems:"center",gap:4,fontSize:12,color:"#0069b4"}},e.createElement("svg",{viewBox:"0 0 24 24",width:16,height:16,fill:"none",stroke:"currentColor",strokeWidth:1.5,style:{transform:"rotate(180deg)"}},e.createElement("path",{d:"M6 9l6 6 6-6"})),"Expanded"))}],i=[{label:"T&M",name:"Time & Materials",desc:"Revenue calculated dynamically as recorded work (hours or days) × role-specific rates.",chars:["No predefined total budget","Position-level revenue calculation","Reflects real-time delivery effort","Includes a T&M Utilization Rate (adjusts for time off / non-billable periods)"],ux:"Signals flexibility and variability — numbers may change over time"},{label:"Fixed",name:"Fixed Price",desc:"Total revenue is fixed regardless of actual effort. Revenue does not change with hours logged.",chars:["Predefined project budget","Revenue capped at contract value","Focus on delivery within scope and budget"],ux:"Signals predictability — financials are stable and capped"},{label:"POD",name:"POD — Product-Oriented Delivery",desc:"Revenue tied to a dedicated team with a stable cost structure based on recurring bundled capacity.",chars:["Team-based billing (not individual positions)","Often aligned with long-term engagements","Blends predictability with flexibility"],ux:"Signals a hybrid model — more stable than T&M, more flexible than Fixed Price"}],a=[{label:"Active",cls:"accordion-item--srp-active",badge:null,desc:"Live project with active revenue projections. Brand blue header."},{label:"Draft",cls:"accordion-item--srp-draft",badge:e.createElement(b,{variant:"srp",icon:e.createElement(j,{size:11})},"Draft Project"),desc:"Project in planning phase. Slightly darker blue (Mariner 800)."},{label:"Inactive",cls:"accordion-item--srp-inactive",badge:e.createElement(b,{variant:"srp",icon:e.createElement(N,{size:11})},"Inactive Project"),desc:"Project paused or on hold. Secondary foreground grey @40% opacity."},{label:"Archived",cls:"accordion-item--srp-archived",badge:e.createElement(b,{variant:"srp",icon:e.createElement(A,{size:11})},"Archived Opportunity"),desc:"Closed opportunity. Dark secondary foreground grey."}],t={padding:"12px 14px",fontSize:12,borderBottom:"1px solid #f3f4f6",verticalAlign:"top"},m={padding:"8px 14px",fontSize:10,fontWeight:700,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.07em",borderBottom:"2px solid #e5e7eb",textAlign:"left"};return e.createElement("div",{style:{padding:"32px 40px",fontFamily:"system-ui, sans-serif",background:"#fff",maxWidth:920}},e.createElement("h2",{style:{fontSize:22,fontWeight:700,color:"#111827",margin:"0 0 6px"}},"SRP Accordion — Design Documentation"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",margin:"0 0 4px"}},"Anatomy, Billing Model Badges, Status Variants, CTAs, and interaction states for the Sales Revenue Projections accordion component."),e.createElement("p",{style:{fontSize:11,color:"#9ca3af",margin:0}},"Ref: Figma node 40000016:54522"),e.createElement(o,null,"Anatomy"),e.createElement("div",{style:{marginBottom:20,borderRadius:10,overflow:"hidden",border:"1px solid #d9dade"}},e.createElement(g,{type:"single",collapsible:!0,defaultValue:"doc-demo"},e.createElement(l,{value:"doc-demo",className:"accordion-item--srp-active"},e.createElement(c,null,e.createElement(E,{title:"Boston Global HCP Web Experience Jan",subtitle:"Cloud and App Platforms and Engineering / Quality & Performance Engineering",rightSlot:e.createElement(M,null)})),e.createElement(s,null,e.createElement("p",{style:{margin:0,fontSize:13,color:"#91959f"}},"Accordion content area — tables, position lists, etc."))))),e.createElement("table",{style:{width:"100%",borderCollapse:"collapse"}},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{style:{...m,width:32}},"#"),e.createElement("th",{style:m},"Element"),e.createElement("th",{style:m},"Description"),e.createElement("th",{style:m},"Visual"))),e.createElement("tbody",null,r.map(({n:d,name:f,desc:y,sample:p})=>e.createElement("tr",{key:d,style:{background:d%2===0?"#fafafa":"#fff"}},e.createElement("td",{style:{...t,paddingTop:14}},e.createElement(n,{n:d})),e.createElement("td",{style:{...t,fontWeight:600,color:"#111827",whiteSpace:"nowrap"}},f),e.createElement("td",{style:{...t,color:"#6b7280",lineHeight:1.6}},y),e.createElement("td",{style:t},p))))),e.createElement(o,null,"Billing Model Badge"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",margin:"0 0 16px",lineHeight:1.6}},"A compact visual indicator within each project accordion that communicates the project's revenue model at a glance, helping users distinguish billing logic without opening the accordion."),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:16,marginBottom:8}},i.map(({label:d,name:f,desc:y,chars:p,ux:v})=>e.createElement("div",{key:d,style:{border:"1px solid #e5e7eb",borderRadius:8,padding:16,background:"#fafafa"}},e.createElement("div",{style:{background:"#0069b4",borderRadius:6,padding:"10px 14px",marginBottom:12,display:"flex",alignItems:"center",justifyContent:"space-between"}},e.createElement("span",{style:{fontWeight:600,fontSize:12,color:"#fff"}},"Project Title"),e.createElement("span",{className:"srp-tag"},d)),e.createElement("p",{style:{fontWeight:700,fontSize:13,color:"#111827",margin:"0 0 4px"}},f),e.createElement("p",{style:{fontSize:12,color:"#6b7280",margin:"0 0 10px",lineHeight:1.5}},y),e.createElement("ul",{style:{margin:"0 0 10px",padding:"0 0 0 16px",fontSize:12,color:"#374151",lineHeight:1.7}},p.map(u=>e.createElement("li",{key:u},u))),e.createElement("p",{style:{fontSize:11,color:"#9ca3af",margin:0,fontStyle:"italic",lineHeight:1.5}},"UX: ",v)))),e.createElement(o,null,"Status Variants"),e.createElement("table",{style:{width:"100%",borderCollapse:"collapse",marginBottom:8}},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{style:m},"Status"),e.createElement("th",{style:m},"Header Preview"),e.createElement("th",{style:m},"Description"))),e.createElement("tbody",null,a.map(({label:d,cls:f,badge:y,desc:p},v)=>e.createElement("tr",{key:d,style:{background:v%2===0?"#fafafa":"#fff"}},e.createElement("td",{style:{...t,fontWeight:600,color:"#111827",whiteSpace:"nowrap"}},d),e.createElement("td",{style:{...t,padding:"8px 14px"}},e.createElement("div",{style:{borderRadius:8,overflow:"hidden",width:320}},e.createElement(g,{type:"single",collapsible:!0},e.createElement(l,{value:`sv-${d}`,className:f},e.createElement(c,null,e.createElement(E,{title:"Project Name",subtitle:"Department / Team",badge:y})),e.createElement(s,null,e.createElement("span",null)))))),e.createElement("td",{style:{...t,color:"#6b7280",lineHeight:1.6}},p))))),e.createElement(o,null,"CTAs by Status"),e.createElement("table",{style:{width:"100%",borderCollapse:"collapse"}},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{style:m},"Status"),e.createElement("th",{style:m},"Currency"),e.createElement("th",{style:m},"Billing Model"),e.createElement("th",{style:m},"Stage Tag"),e.createElement("th",{style:m},"Settings"),e.createElement("th",{style:m},"Primary CTA"))),e.createElement("tbody",null,[{status:"Active",currency:!0,billing:!0,stage:!0,settings:!0,cta:"Add Position"},{status:"Draft",currency:!0,billing:!0,stage:!0,settings:!0,cta:"Add Position"},{status:"Inactive",currency:!1,billing:!1,stage:!1,settings:!0,cta:"—"},{status:"Archived",currency:!1,billing:!1,stage:!1,settings:!0,cta:"Unarchive projections"}].map(({status:d,currency:f,billing:y,stage:p,settings:v,cta:u},h)=>{const x=fe=>fe?e.createElement("span",{style:{color:"#16a34a",fontWeight:700}},"✓"):e.createElement("span",{style:{color:"#d1d5db"}},"—");return e.createElement("tr",{key:d,style:{background:h%2===0?"#fafafa":"#fff"}},e.createElement("td",{style:{...t,fontWeight:600,color:"#111827"}},d),e.createElement("td",{style:{...t,textAlign:"center"}},x(f)),e.createElement("td",{style:{...t,textAlign:"center"}},x(y)),e.createElement("td",{style:{...t,textAlign:"center"}},x(p)),e.createElement("td",{style:{...t,textAlign:"center"}},x(v)),e.createElement("td",{style:{...t,color:u==="—"?"#d1d5db":"#374151"}},u))}))))}},D={name:"SRP (Sales Revenue Projections)",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#f7f8f8",minHeight:"100vh"}},e.createElement("h2",{style:{fontSize:18,fontWeight:700,color:"#1f1f21",margin:"0 0 4px"}},"Sales Revenue Projections"),e.createElement("p",{style:{fontSize:13,color:"#91959f",margin:"0 0 20px"}},"Project variants: Active · Draft · Inactive Project · Archived Opportunity — ref: Figma node 40000016:54522"),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:8}},e.createElement("div",{style:{borderRadius:8,overflow:"hidden",border:"1px solid #d9dade"}},e.createElement(g,{type:"single",collapsible:!0,defaultValue:"active-inner"},e.createElement(l,{value:"active-inner",className:"accordion-item--srp-active"},e.createElement(c,null,e.createElement(E,{title:"Boston Global HCP Web Experience Jan",subtitle:"Cloud and App Platforms and Engineering / Quality & Performance Engineering",rightSlot:e.createElement(M,null)})),e.createElement(s,null,e.createElement(z,null))))),e.createElement("div",{style:{borderRadius:8,overflow:"hidden",border:"1px solid #d9dade"}},e.createElement(g,{type:"single",collapsible:!0},e.createElement(l,{value:"draft-inner",className:"accordion-item--srp-draft"},e.createElement(c,null,e.createElement(E,{title:"Phoenix Cloud Migration Q1",subtitle:"Infrastructure & DevOps / Platform Engineering",badge:e.createElement(b,{variant:"srp",icon:e.createElement(j,{size:11})},"Draft Project"),rightSlot:e.createElement(M,null)})),e.createElement(s,null,e.createElement(z,{positions:B.slice(0,2)}))))),e.createElement("div",{style:{borderRadius:8,overflow:"hidden",border:"1px solid #d9dade"}},e.createElement(g,{type:"single",collapsible:!0},e.createElement(l,{value:"inactive-inner",className:"accordion-item--srp-inactive"},e.createElement(c,null,e.createElement(E,{title:"Atlas Data Platform Redesign",subtitle:"Data Engineering / Analytics & Insights",badge:e.createElement(b,{variant:"srp",icon:e.createElement(N,{size:11})},"Inactive Project"),rightSlot:e.createElement(Se,null)})),e.createElement(s,null,e.createElement(z,{positions:B.slice(1,3)}))))),e.createElement("div",{style:{borderRadius:8,overflow:"hidden",border:"1px solid #d9dade"}},e.createElement(g,{type:"single",collapsible:!0},e.createElement(l,{value:"archived-inner",className:"accordion-item--srp-archived"},e.createElement(c,null,e.createElement(E,{title:"Meridian Analytics Platform",subtitle:"Business Intelligence / Data Visualization",badge:e.createElement(b,{variant:"srp",icon:e.createElement(A,{size:11})},"Archived Opportunity"),rightSlot:e.createElement(Te,null)})),e.createElement(s,null,e.createElement(z,{positions:B.slice(2,4)})))))))};var F,H,_;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <div style={{
    maxWidth: 360,
    fontFamily: 'system-ui, sans-serif'
  }}>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is a design system?</AccordionTrigger>
          <AccordionContent>
            A design system is a collection of reusable components, guided by clear standards,
            that can be assembled to build any number of applications.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How are tokens used?</AccordionTrigger>
          <AccordionContent>
            Design tokens are the visual design atoms of the design system — specifically,
            they are named entities that store visual design attributes such as color, spacing,
            and typography.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>What components are available?</AccordionTrigger>
          <AccordionContent>
            The library includes Badge, Avatar, Button, Checkbox, Input, Table, Timesheet Cell,
            Accordion, and more — all token-driven and Figma-matched.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Is dark mode supported?</AccordionTrigger>
          <AccordionContent>
            Dark mode support is built into the token architecture. Switching the
            variables file from <code>light</code> to <code>dark</code> updates all
            component colors automatically.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
}`,...(_=(H=S.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var V,L,U;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Multiple Open',
  render: () => <div style={{
    maxWidth: 360,
    fontFamily: 'system-ui, sans-serif'
  }}>
      <Accordion type="multiple" defaultValue={['item-1', 'item-3']}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger Text</AccordionTrigger>
          <AccordionContent>This is an accordion content.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Trigger Text</AccordionTrigger>
          <AccordionContent>This is an accordion content.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Trigger Text</AccordionTrigger>
          <AccordionContent>This is an accordion content.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Trigger Text</AccordionTrigger>
          <AccordionContent>This is an accordion content.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
}`,...(U=(L=T.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var $,G,J;P.parameters={...P.parameters,docs:{...($=P.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'All Closed',
  render: () => <div style={{
    maxWidth: 360,
    fontFamily: 'system-ui, sans-serif'
  }}>
      <Accordion type="single" collapsible>
        {['Trigger Text', 'Trigger Text', 'Trigger Text', 'Trigger Text'].map((t, i) => <AccordionItem key={i} value={\`item-\${i}\`}>
            <AccordionTrigger>{t}</AccordionTrigger>
            <AccordionContent>This is an accordion content.</AccordionContent>
          </AccordionItem>)}
      </Accordion>
    </div>
}`,...(J=(G=P.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,q,Y;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'With Disabled Item',
  render: () => <div style={{
    maxWidth: 360,
    fontFamily: 'system-ui, sans-serif'
  }}>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Active item</AccordionTrigger>
          <AccordionContent>This item can be toggled open and closed.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" disabled>
          <AccordionTrigger>Disabled item</AccordionTrigger>
          <AccordionContent>This content is not reachable.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Another active item</AccordionTrigger>
          <AccordionContent>This item can also be toggled.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
}`,...(Y=(q=C.parameters)==null?void 0:q.docs)==null?void 0:Y.source}}};var X,K,Z;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Rich Content (Slot)',
  render: () => <div style={{
    maxWidth: 360,
    fontFamily: 'system-ui, sans-serif'
  }}>
      <Accordion type="single" collapsible defaultValue="team">
        <AccordionItem value="team">
          <AccordionTrigger>Team Members</AccordionTrigger>
          <AccordionContent>
            <ul style={{
            margin: 0,
            padding: 0,
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 8
          }}>
              {[{
              name: 'Elena Morris',
              role: 'Frontend Developer'
            }, {
              name: 'James Carter',
              role: 'Backend Engineer'
            }, {
              name: 'Sofia Reyes',
              role: 'Product Designer'
            }].map(({
              name,
              role
            }) => <li key={name} style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 13
            }}>
                  <span style={{
                fontWeight: 600,
                color: 'var(--color-base-foreground, #1f1f21)'
              }}>{name}</span>
                  <span style={{
                color: 'var(--color-base-muted-foreground, #91959f)'
              }}>{role}</span>
                </li>)}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="billing">
          <AccordionTrigger>Billing Details</AccordionTrigger>
          <AccordionContent>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            fontSize: 13,
            color: 'var(--color-base-muted-foreground, #91959f)'
          }}>
              <div>Plan: <strong style={{
                color: 'var(--color-base-foreground)'
              }}>Professional</strong></div>
              <div>Cycle: <strong style={{
                color: 'var(--color-base-foreground)'
              }}>Monthly</strong></div>
              <div>Next billing: <strong style={{
                color: 'var(--color-base-foreground)'
              }}>May 1, 2026</strong></div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="settings">
          <AccordionTrigger>Notifications</AccordionTrigger>
          <AccordionContent>
            Configure your email and push notification preferences in account settings.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
}`,...(Z=(K=I.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var ee,te,ne;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Token Reference',
  render: () => {
    const rows = [{
      element: 'Wrapper border',
      token: '--color-base-border',
      value: '#d9dade'
    }, {
      element: 'Item divider',
      token: '--color-base-border',
      value: '#d9dade'
    }, {
      element: 'Background',
      token: '--color-base-card',
      value: '#ffffff'
    }, {
      element: 'Trigger text',
      token: '--color-base-foreground',
      value: '#1f1f21'
    }, {
      element: 'Trigger hover bg',
      token: '--color-base-muted',
      value: '#f7f8f8'
    }, {
      element: 'Trigger active bg',
      token: '--color-base-accent',
      value: '#eeeef0'
    }, {
      element: 'Trigger focus ring',
      token: '--color-base-primary',
      value: '#0069b4'
    }, {
      element: 'Chevron color',
      token: '--color-base-muted-foreground',
      value: '#91959f'
    }, {
      element: 'Content text',
      token: '--color-base-muted-foreground',
      value: '#91959f'
    }];
    const th = {
      textAlign: 'left',
      padding: '8px 12px',
      fontSize: 10,
      fontWeight: 700,
      color: '#6b7280',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      borderBottom: '2px solid #e5e7eb'
    };
    const td = {
      padding: '10px 12px',
      fontSize: 12,
      borderBottom: '1px solid #f3f4f6',
      verticalAlign: 'middle'
    };
    return <div style={{
      padding: 32,
      fontFamily: 'system-ui, sans-serif',
      background: '#fff'
    }}>
        <h2 style={{
        fontSize: 18,
        fontWeight: 700,
        color: '#111827',
        margin: '0 0 8px'
      }}>Token Reference</h2>
        <p style={{
        fontSize: 12,
        color: '#6b7280',
        margin: '0 0 20px'
      }}>
          Border radius: 5px · Trigger height: 52px · Content padding: 0 16px 20px · Transition: 200ms ease-out
        </p>
        <table style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr>{['Element', 'Token', 'Value'].map(h => <th key={h} style={th}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map(({
            element,
            token,
            value
          }, i) => <tr key={element} style={{
            background: i % 2 === 0 ? '#fafafa' : '#fff'
          }}>
                <td style={{
              ...td,
              fontWeight: 600,
              color: '#111827'
            }}>{element}</td>
                <td style={{
              ...td,
              fontFamily: 'monospace',
              fontSize: 11,
              color: '#6b7280'
            }}>{token}</td>
                <td style={td}>
                  <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6
              }}>
                    <span style={{
                  width: 12,
                  height: 12,
                  borderRadius: 2,
                  background: value,
                  border: '1px solid rgba(0,0,0,0.12)',
                  flexShrink: 0
                }} />
                    <span style={{
                  fontFamily: 'monospace',
                  fontSize: 11
                }}>{value}</span>
                  </span>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(ne=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,oe,ae;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Timesheets',
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif',
    background: '#f7f8f8',
    minHeight: '100vh'
  }}>
      <h2 style={{
      fontSize: 18,
      fontWeight: 700,
      color: '#1f1f21',
      margin: '0 0 4px'
    }}>Timesheets</h2>
      <p style={{
      fontSize: 13,
      color: '#91959f',
      margin: '0 0 20px'
    }}>
        Project accordions + Cell state legend — ref: Figma nodes 40000016:54479, 40000018:63327
      </p>

      {/* Project accordions — ref: Figma node 40000016:54479 */}
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginBottom: 8
    }}>
        {TIMESHEET_PROJECTS.map(({
        value,
        title,
        subtitle
      }) => <Accordion key={value} type="single" collapsible className="accordion--timesheets">
            <AccordionItem value={value}>
              <AccordionTrigger>
                <div style={{
              flex: 1,
              minWidth: 0
            }}>
                  <p className="accordion-project__title">{title}</p>
                  <p className="accordion-project__subtitle">{subtitle}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p style={{
              margin: 0,
              fontSize: 13,
              color: 'var(--color-base-muted-foreground, #91959f)'
            }}>
                  Timesheet content for {title}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>)}
      </div>

      {/* Cell State Legend — ref: Figma node 40000018:63327 */}
      <Accordion type="single" collapsible defaultValue="legend" className="accordion--timesheets">
        <AccordionItem value="legend">
          <AccordionTrigger>
            <span style={{
            fontWeight: 500,
            color: 'var(--color-base-foreground, #1f1f21)'
          }}>
              Cell State Legend
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <CellStateLegend />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
}`,...(ae=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ie,le,ce;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'SRP — Design Documentation',
  render: () => {
    function Num({
      n
    }) {
      return <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: '#0069b4',
        color: '#fff',
        fontSize: 10,
        fontWeight: 700,
        flexShrink: 0,
        lineHeight: 1
      }}>{n}</span>;
    }
    const H = ({
      children
    }) => <h3 style={{
      fontSize: 14,
      fontWeight: 700,
      color: '#111827',
      margin: '36px 0 12px',
      paddingBottom: 8,
      borderBottom: '2px solid #e5e7eb'
    }}>
        {children}
      </h3>;
    const ANATOMY = [{
      n: 1,
      name: 'Project Title',
      desc: 'Primary label identifying the project. Semibold 16px, white. Truncates with ellipsis on overflow.',
      sample: <span style={{
        fontWeight: 600,
        fontSize: 14,
        color: '#1f1f21'
      }}>Boston Global HCP Web Experience Jan</span>
    }, {
      n: 2,
      name: 'Project Description',
      desc: 'Secondary line showing department / team hierarchy. 14px regular, white @75% opacity. Truncates.',
      sample: <span style={{
        fontSize: 12,
        color: '#91959f'
      }}>Cloud and App Platforms / Quality & Performance Engineering</span>
    }, {
      n: 3,
      name: 'Status Badge',
      desc: 'Ghost pill shown only when project is in a non-active state: Draft, Inactive, or Archived. Omitted for Active.',
      sample: <div style={{
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      }}>
            <Badge variant="srp" icon={<EditIcon size={11} />}>Draft Project</Badge>
            <Badge variant="srp" icon={<CircleMinusIcon size={11} />}>Inactive Project</Badge>
            <Badge variant="srp" icon={<ArchiveIcon size={11} />}>Archived Opportunity</Badge>
          </div>
    }, {
      n: 4,
      name: 'Currency Badge',
      desc: 'Compact ghost tag indicating the billing currency for the project. Currently USD.',
      sample: <span className="srp-tag" style={{
        background: 'rgba(0,105,180,0.12)',
        color: '#0069b4',
        border: '1px solid rgba(0,105,180,0.25)',
        borderRadius: 4,
        fontSize: 12,
        fontWeight: 600,
        padding: '3px 8px'
      }}>USD</span>
    }, {
      n: 5,
      name: 'Billing Model Badge',
      desc: 'Ghost tag indicating the revenue model. One of: T&M, Fixed, or POD. See Billing Model section below.',
      sample: <div style={{
        display: 'flex',
        gap: 6
      }}>
            {['T&M', 'Fixed', 'POD'].map(l => <span key={l} className="srp-tag" style={{
          background: 'rgba(0,105,180,0.12)',
          color: '#0069b4',
          border: '1px solid rgba(0,105,180,0.25)',
          borderRadius: 4,
          fontSize: 12,
          fontWeight: 600,
          padding: '3px 8px'
        }}>{l}</span>)}
          </div>
    }, {
      n: 6,
      name: 'Stage / Scenario Tag',
      desc: 'Optional ghost tag linking the accordion to a specific projection stage or scenario (e.g. P: Production Testing).',
      sample: <span className="srp-tag" style={{
        background: 'rgba(0,105,180,0.12)',
        color: '#0069b4',
        border: '1px solid rgba(0,105,180,0.25)',
        borderRadius: 4,
        fontSize: 12,
        fontWeight: 600,
        padding: '3px 8px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      }}>P: Production Testing <ExternalLinkIcon size={11} /></span>
    }, {
      n: 7,
      name: 'Settings CTA',
      desc: 'Icon-only ghost button. Opens project settings. Present on all variants except the base active state without extra controls.',
      sample: <button className="srp-action-btn srp-action-btn--icon" style={{
        background: 'rgba(0,105,180,0.08)',
        border: '1px solid rgba(0,105,180,0.25)',
        color: '#0069b4',
        borderRadius: 6
      }} title="Settings"><SettingsIcon size={14} /></button>
    }, {
      n: 8,
      name: 'Primary CTA',
      desc: 'Text ghost button with optional icon. Varies by status: "Add Position" (Active/Draft) · "Unarchive projections" (Archived). Hidden on Inactive.',
      sample: <div style={{
        display: 'flex',
        gap: 8
      }}>
            <button className="srp-action-btn" style={{
          background: 'rgba(0,105,180,0.08)',
          border: '1px solid rgba(0,105,180,0.25)',
          color: '#0069b4',
          borderRadius: 6,
          fontSize: 13,
          fontWeight: 600,
          padding: '5px 10px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5
        }}>
              <PlusIcon size={13} /> Add Position
            </button>
            <button className="srp-action-btn" style={{
          background: 'rgba(0,105,180,0.08)',
          border: '1px solid rgba(0,105,180,0.25)',
          color: '#0069b4',
          borderRadius: 6,
          fontSize: 13,
          fontWeight: 600,
          padding: '5px 10px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5
        }}>
              <ArchiveIcon size={13} /> Unarchive projections
            </button>
          </div>
    }, {
      n: 9,
      name: 'Chevron',
      desc: 'Collapse/expand indicator on the far right. White @70% opacity when closed, full white when open. Rotates 180° on open.',
      sample: <div style={{
        display: 'flex',
        gap: 16,
        alignItems: 'center'
      }}>
            <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          fontSize: 12,
          color: '#6b7280'
        }}>
              <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M6 9l6 6 6-6" /></svg>
              Collapsed
            </div>
            <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          fontSize: 12,
          color: '#0069b4'
        }}>
              <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.5} style={{
            transform: 'rotate(180deg)'
          }}><path d="M6 9l6 6 6-6" /></svg>
              Expanded
            </div>
          </div>
    }];
    const BILLING = [{
      label: 'T&M',
      name: 'Time & Materials',
      desc: 'Revenue calculated dynamically as recorded work (hours or days) × role-specific rates.',
      chars: ['No predefined total budget', 'Position-level revenue calculation', 'Reflects real-time delivery effort', 'Includes a T&M Utilization Rate (adjusts for time off / non-billable periods)'],
      ux: 'Signals flexibility and variability — numbers may change over time'
    }, {
      label: 'Fixed',
      name: 'Fixed Price',
      desc: 'Total revenue is fixed regardless of actual effort. Revenue does not change with hours logged.',
      chars: ['Predefined project budget', 'Revenue capped at contract value', 'Focus on delivery within scope and budget'],
      ux: 'Signals predictability — financials are stable and capped'
    }, {
      label: 'POD',
      name: 'POD — Product-Oriented Delivery',
      desc: 'Revenue tied to a dedicated team with a stable cost structure based on recurring bundled capacity.',
      chars: ['Team-based billing (not individual positions)', 'Often aligned with long-term engagements', 'Blends predictability with flexibility'],
      ux: 'Signals a hybrid model — more stable than T&M, more flexible than Fixed Price'
    }];
    const STATUS_VARIANTS = [{
      label: 'Active',
      cls: 'accordion-item--srp-active',
      badge: null,
      desc: 'Live project with active revenue projections. Brand blue header.'
    }, {
      label: 'Draft',
      cls: 'accordion-item--srp-draft',
      badge: <Badge variant="srp" icon={<EditIcon size={11} />}>Draft Project</Badge>,
      desc: 'Project in planning phase. Slightly darker blue (Mariner 800).'
    }, {
      label: 'Inactive',
      cls: 'accordion-item--srp-inactive',
      badge: <Badge variant="srp" icon={<CircleMinusIcon size={11} />}>Inactive Project</Badge>,
      desc: 'Project paused or on hold. Secondary foreground grey @40% opacity.'
    }, {
      label: 'Archived',
      cls: 'accordion-item--srp-archived',
      badge: <Badge variant="srp" icon={<ArchiveIcon size={11} />}>Archived Opportunity</Badge>,
      desc: 'Closed opportunity. Dark secondary foreground grey.'
    }];
    const tdStyle = {
      padding: '12px 14px',
      fontSize: 12,
      borderBottom: '1px solid #f3f4f6',
      verticalAlign: 'top'
    };
    const thStyle = {
      padding: '8px 14px',
      fontSize: 10,
      fontWeight: 700,
      color: '#9ca3af',
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      borderBottom: '2px solid #e5e7eb',
      textAlign: 'left'
    };
    return <div style={{
      padding: '32px 40px',
      fontFamily: 'system-ui, sans-serif',
      background: '#fff',
      maxWidth: 920
    }}>

        {/* Page title */}
        <h2 style={{
        fontSize: 22,
        fontWeight: 700,
        color: '#111827',
        margin: '0 0 6px'
      }}>
          SRP Accordion — Design Documentation
        </h2>
        <p style={{
        fontSize: 13,
        color: '#6b7280',
        margin: '0 0 4px'
      }}>
          Anatomy, Billing Model Badges, Status Variants, CTAs, and interaction states for the
          Sales Revenue Projections accordion component.
        </p>
        <p style={{
        fontSize: 11,
        color: '#9ca3af',
        margin: 0
      }}>
          Ref: Figma node 40000016:54522
        </p>

        {/* ── Anatomy ──────────────────────────────────── */}
        <H>Anatomy</H>

        {/* Live annotated example */}
        <div style={{
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
        border: '1px solid #d9dade'
      }}>
          <Accordion type="single" collapsible defaultValue="doc-demo">
            <AccordionItem value="doc-demo" className="accordion-item--srp-active">
              <AccordionTrigger>
                <SRPTrigger title="Boston Global HCP Web Experience Jan" subtitle="Cloud and App Platforms and Engineering / Quality & Performance Engineering" rightSlot={<ActiveDraftActions />} />
              </AccordionTrigger>
              <AccordionContent>
                <p style={{
                margin: 0,
                fontSize: 13,
                color: '#91959f'
              }}>
                  Accordion content area — tables, position lists, etc.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Anatomy reference table */}
        <table style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr>
              <th style={{
              ...thStyle,
              width: 32
            }}>#</th>
              <th style={thStyle}>Element</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Visual</th>
            </tr>
          </thead>
          <tbody>
            {ANATOMY.map(({
            n,
            name,
            desc,
            sample
          }) => <tr key={n} style={{
            background: n % 2 === 0 ? '#fafafa' : '#fff'
          }}>
                <td style={{
              ...tdStyle,
              paddingTop: 14
            }}><Num n={n} /></td>
                <td style={{
              ...tdStyle,
              fontWeight: 600,
              color: '#111827',
              whiteSpace: 'nowrap'
            }}>{name}</td>
                <td style={{
              ...tdStyle,
              color: '#6b7280',
              lineHeight: 1.6
            }}>{desc}</td>
                <td style={tdStyle}>{sample}</td>
              </tr>)}
          </tbody>
        </table>

        {/* ── Billing Model Badge ───────────────────────── */}
        <H>Billing Model Badge</H>
        <p style={{
        fontSize: 13,
        color: '#6b7280',
        margin: '0 0 16px',
        lineHeight: 1.6
      }}>
          A compact visual indicator within each project accordion that communicates the project's
          revenue model at a glance, helping users distinguish billing logic without opening the accordion.
        </p>

        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
        marginBottom: 8
      }}>
          {BILLING.map(({
          label,
          name,
          desc,
          chars,
          ux
        }) => <div key={label} style={{
          border: '1px solid #e5e7eb',
          borderRadius: 8,
          padding: 16,
          background: '#fafafa'
        }}>
              {/* Badge preview on dark swatch */}
              <div style={{
            background: '#0069b4',
            borderRadius: 6,
            padding: '10px 14px',
            marginBottom: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
                <span style={{
              fontWeight: 600,
              fontSize: 12,
              color: '#fff'
            }}>Project Title</span>
                <span className="srp-tag">{label}</span>
              </div>
              <p style={{
            fontWeight: 700,
            fontSize: 13,
            color: '#111827',
            margin: '0 0 4px'
          }}>{name}</p>
              <p style={{
            fontSize: 12,
            color: '#6b7280',
            margin: '0 0 10px',
            lineHeight: 1.5
          }}>{desc}</p>
              <ul style={{
            margin: '0 0 10px',
            padding: '0 0 0 16px',
            fontSize: 12,
            color: '#374151',
            lineHeight: 1.7
          }}>
                {chars.map(c => <li key={c}>{c}</li>)}
              </ul>
              <p style={{
            fontSize: 11,
            color: '#9ca3af',
            margin: 0,
            fontStyle: 'italic',
            lineHeight: 1.5
          }}>
                UX: {ux}
              </p>
            </div>)}
        </div>

        {/* ── Status Variants ───────────────────────────── */}
        <H>Status Variants</H>
        <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: 8
      }}>
          <thead>
            <tr>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Header Preview</th>
              <th style={thStyle}>Description</th>
            </tr>
          </thead>
          <tbody>
            {STATUS_VARIANTS.map(({
            label,
            cls,
            badge,
            desc
          }, i) => <tr key={label} style={{
            background: i % 2 === 0 ? '#fafafa' : '#fff'
          }}>
                <td style={{
              ...tdStyle,
              fontWeight: 600,
              color: '#111827',
              whiteSpace: 'nowrap'
            }}>{label}</td>
                <td style={{
              ...tdStyle,
              padding: '8px 14px'
            }}>
                  <div style={{
                borderRadius: 8,
                overflow: 'hidden',
                width: 320
              }}>
                    <Accordion type="single" collapsible>
                      <AccordionItem value={\`sv-\${label}\`} className={cls}>
                        <AccordionTrigger>
                          <SRPTrigger title="Project Name" subtitle="Department / Team" badge={badge} />
                        </AccordionTrigger>
                        <AccordionContent><span /></AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </td>
                <td style={{
              ...tdStyle,
              color: '#6b7280',
              lineHeight: 1.6
            }}>{desc}</td>
              </tr>)}
          </tbody>
        </table>

        {/* ── CTAs by Variant ───────────────────────────── */}
        <H>CTAs by Status</H>
        <table style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Currency</th>
              <th style={thStyle}>Billing Model</th>
              <th style={thStyle}>Stage Tag</th>
              <th style={thStyle}>Settings</th>
              <th style={thStyle}>Primary CTA</th>
            </tr>
          </thead>
          <tbody>
            {[{
            status: 'Active',
            currency: true,
            billing: true,
            stage: true,
            settings: true,
            cta: 'Add Position'
          }, {
            status: 'Draft',
            currency: true,
            billing: true,
            stage: true,
            settings: true,
            cta: 'Add Position'
          }, {
            status: 'Inactive',
            currency: false,
            billing: false,
            stage: false,
            settings: true,
            cta: '—'
          }, {
            status: 'Archived',
            currency: false,
            billing: false,
            stage: false,
            settings: true,
            cta: 'Unarchive projections'
          }].map(({
            status,
            currency,
            billing,
            stage,
            settings,
            cta
          }, i) => {
            const check = v => v ? <span style={{
              color: '#16a34a',
              fontWeight: 700
            }}>✓</span> : <span style={{
              color: '#d1d5db'
            }}>—</span>;
            return <tr key={status} style={{
              background: i % 2 === 0 ? '#fafafa' : '#fff'
            }}>
                  <td style={{
                ...tdStyle,
                fontWeight: 600,
                color: '#111827'
              }}>{status}</td>
                  <td style={{
                ...tdStyle,
                textAlign: 'center'
              }}>{check(currency)}</td>
                  <td style={{
                ...tdStyle,
                textAlign: 'center'
              }}>{check(billing)}</td>
                  <td style={{
                ...tdStyle,
                textAlign: 'center'
              }}>{check(stage)}</td>
                  <td style={{
                ...tdStyle,
                textAlign: 'center'
              }}>{check(settings)}</td>
                  <td style={{
                ...tdStyle,
                color: cta === '—' ? '#d1d5db' : '#374151'
              }}>{cta}</td>
                </tr>;
          })}
          </tbody>
        </table>

      </div>;
  }
}`,...(ce=(le=R.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var se,de,me;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'SRP (Sales Revenue Projections)',
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif',
    background: '#f7f8f8',
    minHeight: '100vh'
  }}>
      <h2 style={{
      fontSize: 18,
      fontWeight: 700,
      color: '#1f1f21',
      margin: '0 0 4px'
    }}>
        Sales Revenue Projections
      </h2>
      <p style={{
      fontSize: 13,
      color: '#91959f',
      margin: '0 0 20px'
    }}>
        Project variants: Active · Draft · Inactive Project · Archived Opportunity — ref: Figma node 40000016:54522
      </p>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        {/* Active */}
        <div style={{
        borderRadius: 8,
        overflow: 'hidden',
        border: '1px solid #d9dade'
      }}>
          <Accordion type="single" collapsible defaultValue="active-inner">
            <AccordionItem value="active-inner" className="accordion-item--srp-active">
              <AccordionTrigger>
                <SRPTrigger title="Boston Global HCP Web Experience Jan" subtitle="Cloud and App Platforms and Engineering / Quality & Performance Engineering" rightSlot={<ActiveDraftActions />} />
              </AccordionTrigger>
              <AccordionContent>
                <SRPContent />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Draft */}
        <div style={{
        borderRadius: 8,
        overflow: 'hidden',
        border: '1px solid #d9dade'
      }}>
          <Accordion type="single" collapsible>
            <AccordionItem value="draft-inner" className="accordion-item--srp-draft">
              <AccordionTrigger>
                <SRPTrigger title="Phoenix Cloud Migration Q1" subtitle="Infrastructure & DevOps / Platform Engineering" badge={<Badge variant="srp" icon={<EditIcon size={11} />}>Draft Project</Badge>} rightSlot={<ActiveDraftActions />} />
              </AccordionTrigger>
              <AccordionContent>
                <SRPContent positions={SRP_POSITIONS.slice(0, 2)} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Inactive Project */}
        <div style={{
        borderRadius: 8,
        overflow: 'hidden',
        border: '1px solid #d9dade'
      }}>
          <Accordion type="single" collapsible>
            <AccordionItem value="inactive-inner" className="accordion-item--srp-inactive">
              <AccordionTrigger>
                <SRPTrigger title="Atlas Data Platform Redesign" subtitle="Data Engineering / Analytics & Insights" badge={<Badge variant="srp" icon={<CircleMinusIcon size={11} />}>Inactive Project</Badge>} rightSlot={<InactiveActions />} />
              </AccordionTrigger>
              <AccordionContent>
                <SRPContent positions={SRP_POSITIONS.slice(1, 3)} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Archived Opportunity */}
        <div style={{
        borderRadius: 8,
        overflow: 'hidden',
        border: '1px solid #d9dade'
      }}>
          <Accordion type="single" collapsible>
            <AccordionItem value="archived-inner" className="accordion-item--srp-archived">
              <AccordionTrigger>
                <SRPTrigger title="Meridian Analytics Platform" subtitle="Business Intelligence / Data Visualization" badge={<Badge variant="srp" icon={<ArchiveIcon size={11} />}>Archived Opportunity</Badge>} rightSlot={<ArchivedActions />} />
              </AccordionTrigger>
              <AccordionContent>
                <SRPContent positions={SRP_POSITIONS.slice(2, 4)} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
}`,...(me=(de=D.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const ze=["Default","Multiple","AllClosed","WithDisabled","RichContent","TokenReference","Timesheets","SRPDocumentation","SRP"];export{P as AllClosed,S as Default,T as Multiple,I as RichContent,D as SRP,R as SRPDocumentation,w as Timesheets,k as TokenReference,C as WithDisabled,ze as __namedExportsOrder,we as default};
