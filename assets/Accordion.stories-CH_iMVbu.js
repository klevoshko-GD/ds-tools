import{R as e}from"./index-CwcVQgaJ.js";import{A as m,a as t,b as n,c as r}from"./Accordion-DC2S8UG-.js";import{T as ue}from"./TimesheetCell-DZfKXICe.js";import{B as p}from"./Badge-CX5IaRzt.js";import{E as W,C as j,A as E,a as de,S as B,P as me}from"./Icons-D1GY7NSS.js";import"./chevron-down-ybap-uea.js";const Ce={title:"Design Tokens/Accordion",component:m,parameters:{layout:"padded",docs:{description:{component:"Accordion — collapsible content sections. Single or multiple open items. Animated with CSS grid-template-rows trick (200ms ease-out). Ref: Figma DS (AI) node 34:526."}}}},x={name:"Default",render:()=>e.createElement("div",{style:{maxWidth:360,fontFamily:"system-ui, sans-serif"}},e.createElement(m,{type:"single",collapsible:!0,defaultValue:"item-1"},e.createElement(t,{value:"item-1"},e.createElement(n,null,"What is a design system?"),e.createElement(r,null,"A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.")),e.createElement(t,{value:"item-2"},e.createElement(n,null,"How are tokens used?"),e.createElement(r,null,"Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes such as color, spacing, and typography.")),e.createElement(t,{value:"item-3"},e.createElement(n,null,"What components are available?"),e.createElement(r,null,"The library includes Badge, Avatar, Button, Checkbox, Input, Table, Timesheet Cell, Accordion, and more — all token-driven and Figma-matched.")),e.createElement(t,{value:"item-4"},e.createElement(n,null,"Is dark mode supported?"),e.createElement(r,null,"Dark mode support is built into the token architecture. Switching the variables file from ",e.createElement("code",null,"light")," to ",e.createElement("code",null,"dark")," updates all component colors automatically."))))},S={name:"Multiple Open",render:()=>e.createElement("div",{style:{maxWidth:360,fontFamily:"system-ui, sans-serif"}},e.createElement(m,{type:"multiple",defaultValue:["item-1","item-3"]},e.createElement(t,{value:"item-1"},e.createElement(n,null,"Trigger Text"),e.createElement(r,null,"This is an accordion content.")),e.createElement(t,{value:"item-2"},e.createElement(n,null,"Trigger Text"),e.createElement(r,null,"This is an accordion content.")),e.createElement(t,{value:"item-3"},e.createElement(n,null,"Trigger Text"),e.createElement(r,null,"This is an accordion content.")),e.createElement(t,{value:"item-4"},e.createElement(n,null,"Trigger Text"),e.createElement(r,null,"This is an accordion content."))))},T={name:"All Closed",render:()=>e.createElement("div",{style:{maxWidth:360,fontFamily:"system-ui, sans-serif"}},e.createElement(m,{type:"single",collapsible:!0},["Trigger Text","Trigger Text","Trigger Text","Trigger Text"].map((o,i)=>e.createElement(t,{key:i,value:`item-${i}`},e.createElement(n,null,o),e.createElement(r,null,"This is an accordion content.")))))},P={name:"With Disabled Item",render:()=>e.createElement("div",{style:{maxWidth:360,fontFamily:"system-ui, sans-serif"}},e.createElement(m,{type:"single",collapsible:!0,defaultValue:"item-1"},e.createElement(t,{value:"item-1"},e.createElement(n,null,"Active item"),e.createElement(r,null,"This item can be toggled open and closed.")),e.createElement(t,{value:"item-2",disabled:!0},e.createElement(n,null,"Disabled item"),e.createElement(r,null,"This content is not reachable.")),e.createElement(t,{value:"item-3"},e.createElement(n,null,"Another active item"),e.createElement(r,null,"This item can also be toggled."))))},C={name:"Rich Content (Slot)",render:()=>e.createElement("div",{style:{maxWidth:360,fontFamily:"system-ui, sans-serif"}},e.createElement(m,{type:"single",collapsible:!0,defaultValue:"team"},e.createElement(t,{value:"team"},e.createElement(n,null,"Team Members"),e.createElement(r,null,e.createElement("ul",{style:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:8}},[{name:"Elena Morris",role:"Frontend Developer"},{name:"James Carter",role:"Backend Engineer"},{name:"Sofia Reyes",role:"Product Designer"}].map(({name:o,role:i})=>e.createElement("li",{key:o,style:{display:"flex",justifyContent:"space-between",fontSize:13}},e.createElement("span",{style:{fontWeight:600,color:"var(--color-base-foreground, #1f1f21)"}},o),e.createElement("span",{style:{color:"var(--color-base-muted-foreground, #91959f)"}},i)))))),e.createElement(t,{value:"billing"},e.createElement(n,null,"Billing Details"),e.createElement(r,null,e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:4,fontSize:13,color:"var(--color-base-muted-foreground, #91959f)"}},e.createElement("div",null,"Plan: ",e.createElement("strong",{style:{color:"var(--color-base-foreground)"}},"Professional")),e.createElement("div",null,"Cycle: ",e.createElement("strong",{style:{color:"var(--color-base-foreground)"}},"Monthly")),e.createElement("div",null,"Next billing: ",e.createElement("strong",{style:{color:"var(--color-base-foreground)"}},"May 1, 2026"))))),e.createElement(t,{value:"settings"},e.createElement(n,null,"Notifications"),e.createElement(r,null,"Configure your email and push notification preferences in account settings."))))},I={name:"Token Reference",render:()=>{const o=[{element:"Wrapper border",token:"--color-base-border",value:"#d9dade"},{element:"Item divider",token:"--color-base-border",value:"#d9dade"},{element:"Background",token:"--color-base-card",value:"#ffffff"},{element:"Trigger text",token:"--color-base-foreground",value:"#1f1f21"},{element:"Trigger hover bg",token:"--color-base-muted",value:"#f7f8f8"},{element:"Trigger active bg",token:"--color-base-accent",value:"#eeeef0"},{element:"Trigger focus ring",token:"--color-base-primary",value:"#0069b4"},{element:"Chevron color",token:"--color-base-muted-foreground",value:"#91959f"},{element:"Content text",token:"--color-base-muted-foreground",value:"#91959f"}],i={textAlign:"left",padding:"8px 12px",fontSize:10,fontWeight:700,color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.06em",borderBottom:"2px solid #e5e7eb"},c={padding:"10px 12px",fontSize:12,borderBottom:"1px solid #f3f4f6",verticalAlign:"middle"};return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:18,fontWeight:700,color:"#111827",margin:"0 0 8px"}},"Token Reference"),e.createElement("p",{style:{fontSize:12,color:"#6b7280",margin:"0 0 20px"}},"Border radius: 5px · Trigger height: 52px · Content padding: 0 16px 20px · Transition: 200ms ease-out"),e.createElement("table",{style:{width:"100%",borderCollapse:"collapse"}},e.createElement("thead",null,e.createElement("tr",null,["Element","Token","Value"].map(g=>e.createElement("th",{key:g,style:i},g)))),e.createElement("tbody",null,o.map(({element:g,token:s,value:a},d)=>e.createElement("tr",{key:g,style:{background:d%2===0?"#fafafa":"#fff"}},e.createElement("td",{style:{...c,fontWeight:600,color:"#111827"}},g),e.createElement("td",{style:{...c,fontFamily:"monospace",fontSize:11,color:"#6b7280"}},s),e.createElement("td",{style:c},e.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:6}},e.createElement("span",{style:{width:12,height:12,borderRadius:2,background:a,border:"1px solid rgba(0,0,0,0.12)",flexShrink:0}}),e.createElement("span",{style:{fontFamily:"monospace",fontSize:11}},a))))))))}},fe=[{state:"approved",label:"Approved"},{state:"bamboo",label:"Note attached to entry"},{state:"draft",label:"Draft"},{state:"pto",label:"PTO"},{state:"overtime",label:"Overtime"},{state:"public-holiday",label:"Public Holiday"},{state:"account-holiday",label:"Account Holiday"},{state:"weekend",label:"Weekend"},{state:"travelling",label:"Travelling"},{state:"training",label:"Training"},{state:"merged",label:"Merged"},{state:"no-hours",label:"No Hours"},{state:"hint",label:"Hint Applied"},{state:"actual",label:"Actual"},{state:"total",label:"Total"}];function ye(){return e.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px 18px",alignItems:"center"}},fe.map(({state:o,label:i})=>e.createElement("div",{key:o,style:{display:"flex",alignItems:"center",gap:6}},e.createElement(ue,{state:o,value:o==="total"?"40h":void 0,progress:.65,small:!0}),e.createElement("span",{style:{fontSize:13,color:"var(--color-base-foreground, #1f1f21)",whiteSpace:"nowrap"}},i))))}const be=[{value:"project-boston",title:"Boston Global HCP Web Experience Jan",subtitle:"Cloud and App Platforms and Engineering / Quality & Performance Engineering"},{value:"project-phoenix",title:"Phoenix Cloud Migration Q1",subtitle:"Infrastructure & DevOps / Platform Engineering"},{value:"project-atlas",title:"Atlas Data Platform Redesign",subtitle:"Data Engineering / Analytics & Insights"}],k={name:"Timesheets",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#f7f8f8",minHeight:"100vh"}},e.createElement("h2",{style:{fontSize:18,fontWeight:700,color:"#1f1f21",margin:"0 0 4px"}},"Timesheets"),e.createElement("p",{style:{fontSize:13,color:"#91959f",margin:"0 0 20px"}},"Project accordions + Cell state legend — ref: Figma nodes 40000016:54479, 40000018:63327"),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:8}},be.map(({value:o,title:i,subtitle:c})=>e.createElement(m,{key:o,type:"single",collapsible:!0,className:"accordion--timesheets"},e.createElement(t,{value:o},e.createElement(n,null,e.createElement("div",{style:{flex:1,minWidth:0}},e.createElement("p",{className:"accordion-project__title"},i),e.createElement("p",{className:"accordion-project__subtitle"},c))),e.createElement(r,null,e.createElement("p",{style:{margin:0,fontSize:13,color:"var(--color-base-muted-foreground, #91959f)"}},"Timesheet content for ",i)))))),e.createElement(m,{type:"single",collapsible:!0,defaultValue:"legend",className:"accordion--timesheets"},e.createElement(t,{value:"legend"},e.createElement(n,null,e.createElement("span",{style:{fontWeight:500,color:"var(--color-base-foreground, #1f1f21)"}},"Cell State Legend")),e.createElement(r,null,e.createElement(ye,null)))))};function b({title:o,subtitle:i,badge:c=null,rightSlot:g=null}){return e.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flex:1,gap:16,minWidth:0}},e.createElement("div",{style:{flex:1,minWidth:0}},e.createElement("p",{className:"accordion-project__title",style:{color:"var(--color-base-primary-foreground, #f7f8f8)"}},o),e.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:2}},c,e.createElement("p",{className:"accordion-project__subtitle",style:{color:"rgba(255,255,255,0.75)",margin:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},i))),g&&e.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,flexShrink:0,flexWrap:"nowrap"},onClick:s=>s.stopPropagation()},g))}function N(){return e.createElement(e.Fragment,null,e.createElement("span",{className:"srp-tag"},"USD"),e.createElement("span",{className:"srp-tag"},"T&M"),e.createElement("span",{className:"srp-tag",style:{display:"inline-flex",alignItems:"center",gap:4}},"P: Production Testing ",e.createElement(de,{size:11})),e.createElement("button",{className:"srp-action-btn srp-action-btn--icon",title:"Settings"},e.createElement(B,{size:14})),e.createElement("button",{className:"srp-action-btn",style:{display:"inline-flex",alignItems:"center",gap:6}},e.createElement(me,{size:14})," Add Position"))}function he(){return e.createElement("button",{className:"srp-action-btn srp-action-btn--icon",title:"Settings"},e.createElement(B,{size:14}))}function ve(){return e.createElement(e.Fragment,null,e.createElement("button",{className:"srp-action-btn srp-action-btn--icon",title:"Settings"},e.createElement(B,{size:14})),e.createElement("button",{className:"srp-action-btn",style:{display:"inline-flex",alignItems:"center",gap:6}},e.createElement(E,{size:14})," Unarchive projections"))}const D=[{role:"Senior Frontend Engineer",level:"L5",rate:"$185",hours:160,revenue:"$29,600"},{role:"Backend Engineer",level:"L4",rate:"$165",hours:160,revenue:"$26,400"},{role:"Product Designer",level:"L4",rate:"$155",hours:80,revenue:"$12,400"},{role:"QA Engineer",level:"L3",rate:"$130",hours:80,revenue:"$10,400"}];function w({positions:o=D}){const i={padding:"8px 12px",fontSize:11,fontWeight:700,color:"#91959f",textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid #d9dade",textAlign:"left"},c={padding:"10px 12px",fontSize:13,borderBottom:"1px solid #f0f1f3",color:"#1f1f21"},g=o.reduce((s,a)=>s+parseInt(a.revenue.replace(/\D/g,"")),0);return e.createElement("table",{style:{width:"100%",borderCollapse:"collapse"}},e.createElement("thead",null,e.createElement("tr",null,["Position","Level","Rate / hr","Hours","Projected Revenue"].map(s=>e.createElement("th",{key:s,style:{...i,textAlign:s==="Projected Revenue"?"right":"left"}},s)))),e.createElement("tbody",null,o.map((s,a)=>e.createElement("tr",{key:a,style:{background:a%2===0?"#fafafa":"#fff"}},e.createElement("td",{style:{...c,fontWeight:600}},s.role),e.createElement("td",{style:{...c,color:"#91959f"}},s.level),e.createElement("td",{style:c},s.rate),e.createElement("td",{style:c},s.hours),e.createElement("td",{style:{...c,textAlign:"right",fontWeight:600}},s.revenue))),e.createElement("tr",{style:{background:"#f0f9ff"}},e.createElement("td",{colSpan:4,style:{...c,fontWeight:700,color:"#0069b4",borderTop:"2px solid #d1ecff"}},"Total"),e.createElement("td",{style:{...c,textAlign:"right",fontWeight:700,color:"#0069b4",borderTop:"2px solid #d1ecff"}},"$",g.toLocaleString()))))}const z={name:"SRP — Design Documentation",render:()=>{function o({n:l}){return e.createElement("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:20,height:20,borderRadius:"50%",background:"#0069b4",color:"#fff",fontSize:10,fontWeight:700,flexShrink:0,lineHeight:1}},l)}const i=({children:l})=>e.createElement("h3",{style:{fontSize:14,fontWeight:700,color:"#111827",margin:"36px 0 12px",paddingBottom:8,borderBottom:"2px solid #e5e7eb"}},l),c=[{n:1,name:"Project Title",desc:"Primary label identifying the project. Semibold 16px, white. Truncates with ellipsis on overflow.",sample:e.createElement("span",{style:{fontWeight:600,fontSize:14,color:"#1f1f21"}},"Boston Global HCP Web Experience Jan")},{n:2,name:"Project Description",desc:"Secondary line showing department / team hierarchy. 14px regular, white @75% opacity. Truncates.",sample:e.createElement("span",{style:{fontSize:12,color:"#91959f"}},"Cloud and App Platforms / Quality & Performance Engineering")},{n:3,name:"Status Badge",desc:"Ghost pill shown only when project is in a non-active state: Draft, Inactive, or Archived. Omitted for Active.",sample:e.createElement("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},e.createElement(p,{variant:"srp",icon:e.createElement(W,{size:11})},"Draft Project"),e.createElement(p,{variant:"srp",icon:e.createElement(j,{size:11})},"Inactive Project"),e.createElement(p,{variant:"srp",icon:e.createElement(E,{size:11})},"Archived Opportunity"))},{n:4,name:"Currency Badge",desc:"Compact ghost tag indicating the billing currency for the project. Currently USD.",sample:e.createElement("span",{className:"srp-tag",style:{background:"rgba(0,105,180,0.12)",color:"#0069b4",border:"1px solid rgba(0,105,180,0.25)",borderRadius:4,fontSize:12,fontWeight:600,padding:"3px 8px"}},"USD")},{n:5,name:"Billing Model Badge",desc:"Ghost tag indicating the revenue model. One of: T&M, Fixed, or POD. See Billing Model section below.",sample:e.createElement("div",{style:{display:"flex",gap:6}},["T&M","Fixed","POD"].map(l=>e.createElement("span",{key:l,className:"srp-tag",style:{background:"rgba(0,105,180,0.12)",color:"#0069b4",border:"1px solid rgba(0,105,180,0.25)",borderRadius:4,fontSize:12,fontWeight:600,padding:"3px 8px"}},l)))},{n:6,name:"Stage / Scenario Tag",desc:"Optional ghost tag linking the accordion to a specific projection stage or scenario (e.g. P: Production Testing).",sample:e.createElement("span",{className:"srp-tag",style:{background:"rgba(0,105,180,0.12)",color:"#0069b4",border:"1px solid rgba(0,105,180,0.25)",borderRadius:4,fontSize:12,fontWeight:600,padding:"3px 8px",display:"inline-flex",alignItems:"center",gap:4}},"P: Production Testing ",e.createElement(de,{size:11}))},{n:7,name:"Settings CTA",desc:"Icon-only ghost button. Opens project settings. Present on all variants except the base active state without extra controls.",sample:e.createElement("button",{className:"srp-action-btn srp-action-btn--icon",style:{background:"rgba(0,105,180,0.08)",border:"1px solid rgba(0,105,180,0.25)",color:"#0069b4",borderRadius:6},title:"Settings"},e.createElement(B,{size:14}))},{n:8,name:"Primary CTA",desc:'Text ghost button with optional icon. Varies by status: "Add Position" (Active/Draft) · "Unarchive projections" (Archived). Hidden on Inactive.',sample:e.createElement("div",{style:{display:"flex",gap:8}},e.createElement("button",{className:"srp-action-btn",style:{background:"rgba(0,105,180,0.08)",border:"1px solid rgba(0,105,180,0.25)",color:"#0069b4",borderRadius:6,fontSize:13,fontWeight:600,padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:5}},e.createElement(me,{size:13})," Add Position"),e.createElement("button",{className:"srp-action-btn",style:{background:"rgba(0,105,180,0.08)",border:"1px solid rgba(0,105,180,0.25)",color:"#0069b4",borderRadius:6,fontSize:13,fontWeight:600,padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:5}},e.createElement(E,{size:13})," Unarchive projections"))},{n:9,name:"Chevron",desc:"Collapse/expand indicator on the far right. White @70% opacity when closed, full white when open. Rotates 180° on open.",sample:e.createElement("div",{style:{display:"flex",gap:16,alignItems:"center"}},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:4,fontSize:12,color:"#6b7280"}},e.createElement("svg",{viewBox:"0 0 24 24",width:16,height:16,fill:"none",stroke:"currentColor",strokeWidth:1.5},e.createElement("path",{d:"M6 9l6 6 6-6"})),"Collapsed"),e.createElement("div",{style:{display:"flex",alignItems:"center",gap:4,fontSize:12,color:"#0069b4"}},e.createElement("svg",{viewBox:"0 0 24 24",width:16,height:16,fill:"none",stroke:"currentColor",strokeWidth:1.5,style:{transform:"rotate(180deg)"}},e.createElement("path",{d:"M6 9l6 6 6-6"})),"Expanded"))}],g=[{label:"T&M",name:"Time & Materials",desc:"Revenue calculated dynamically as recorded work (hours or days) × role-specific rates.",chars:["No predefined total budget","Position-level revenue calculation","Reflects real-time delivery effort","Includes a T&M Utilization Rate (adjusts for time off / non-billable periods)"],ux:"Signals flexibility and variability — numbers may change over time"},{label:"Fixed",name:"Fixed Price",desc:"Total revenue is fixed regardless of actual effort. Revenue does not change with hours logged.",chars:["Predefined project budget","Revenue capped at contract value","Focus on delivery within scope and budget"],ux:"Signals predictability — financials are stable and capped"},{label:"POD",name:"POD — Product-Oriented Delivery",desc:"Revenue tied to a dedicated team with a stable cost structure based on recurring bundled capacity.",chars:["Team-based billing (not individual positions)","Often aligned with long-term engagements","Blends predictability with flexibility"],ux:"Signals a hybrid model — more stable than T&M, more flexible than Fixed Price"}],s=[{label:"Active",cls:"accordion-item--srp-active",badge:null,desc:"Live project with active revenue projections. Brand blue header."},{label:"Draft",cls:"accordion-item--srp-draft",badge:e.createElement(p,{variant:"srp",icon:e.createElement(W,{size:11})},"Draft Project"),desc:"Project in planning phase. Slightly darker blue (Mariner 800)."},{label:"Inactive",cls:"accordion-item--srp-inactive",badge:e.createElement(p,{variant:"srp",icon:e.createElement(j,{size:11})},"Inactive Project"),desc:"Project paused or on hold. Secondary foreground grey @40% opacity."},{label:"Archived",cls:"accordion-item--srp-archived",badge:e.createElement(p,{variant:"srp",icon:e.createElement(E,{size:11})},"Archived Opportunity"),desc:"Closed opportunity. Dark secondary foreground grey."}],a={padding:"12px 14px",fontSize:12,borderBottom:"1px solid #f3f4f6",verticalAlign:"top"},d={padding:"8px 14px",fontSize:10,fontWeight:700,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.07em",borderBottom:"2px solid #e5e7eb",textAlign:"left"};return e.createElement("div",{style:{padding:"32px 40px",fontFamily:"system-ui, sans-serif",background:"#fff",maxWidth:920}},e.createElement("h2",{style:{fontSize:22,fontWeight:700,color:"#111827",margin:"0 0 6px"}},"SRP Accordion — Design Documentation"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",margin:"0 0 4px"}},"Anatomy, Billing Model Badges, Status Variants, CTAs, and interaction states for the Sales Revenue Projections accordion component."),e.createElement("p",{style:{fontSize:11,color:"#9ca3af",margin:0}},"Ref: Figma node 40000016:54522"),e.createElement(i,null,"Anatomy"),e.createElement("div",{style:{marginBottom:20,borderRadius:10,overflow:"hidden",border:"1px solid #d9dade"}},e.createElement(m,{type:"single",collapsible:!0,defaultValue:"doc-demo"},e.createElement(t,{value:"doc-demo",className:"accordion-item--srp-active"},e.createElement(n,null,e.createElement(b,{title:"Boston Global HCP Web Experience Jan",subtitle:"Cloud and App Platforms and Engineering / Quality & Performance Engineering",rightSlot:e.createElement(N,null)})),e.createElement(r,null,e.createElement("p",{style:{margin:0,fontSize:13,color:"#91959f"}},"Accordion content area — tables, position lists, etc."))))),e.createElement("table",{style:{width:"100%",borderCollapse:"collapse"}},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{style:{...d,width:32}},"#"),e.createElement("th",{style:d},"Element"),e.createElement("th",{style:d},"Description"),e.createElement("th",{style:d},"Visual"))),e.createElement("tbody",null,c.map(({n:l,name:u,desc:f,sample:y})=>e.createElement("tr",{key:l,style:{background:l%2===0?"#fafafa":"#fff"}},e.createElement("td",{style:{...a,paddingTop:14}},e.createElement(o,{n:l})),e.createElement("td",{style:{...a,fontWeight:600,color:"#111827",whiteSpace:"nowrap"}},u),e.createElement("td",{style:{...a,color:"#6b7280",lineHeight:1.6}},f),e.createElement("td",{style:a},y))))),e.createElement(i,null,"Billing Model Badge"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",margin:"0 0 16px",lineHeight:1.6}},"A compact visual indicator within each project accordion that communicates the project's revenue model at a glance, helping users distinguish billing logic without opening the accordion."),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:16,marginBottom:8}},g.map(({label:l,name:u,desc:f,chars:y,ux:h})=>e.createElement("div",{key:l,style:{border:"1px solid #e5e7eb",borderRadius:8,padding:16,background:"#fafafa"}},e.createElement("div",{style:{background:"#0069b4",borderRadius:6,padding:"10px 14px",marginBottom:12,display:"flex",alignItems:"center",justifyContent:"space-between"}},e.createElement("span",{style:{fontWeight:600,fontSize:12,color:"#fff"}},"Project Title"),e.createElement("span",{className:"srp-tag"},l)),e.createElement("p",{style:{fontWeight:700,fontSize:13,color:"#111827",margin:"0 0 4px"}},u),e.createElement("p",{style:{fontSize:12,color:"#6b7280",margin:"0 0 10px",lineHeight:1.5}},f),e.createElement("ul",{style:{margin:"0 0 10px",padding:"0 0 0 16px",fontSize:12,color:"#374151",lineHeight:1.7}},y.map(v=>e.createElement("li",{key:v},v))),e.createElement("p",{style:{fontSize:11,color:"#9ca3af",margin:0,fontStyle:"italic",lineHeight:1.5}},"UX: ",h)))),e.createElement(i,null,"Status Variants"),e.createElement("table",{style:{width:"100%",borderCollapse:"collapse",marginBottom:8}},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{style:d},"Status"),e.createElement("th",{style:d},"Header Preview"),e.createElement("th",{style:d},"Description"))),e.createElement("tbody",null,s.map(({label:l,cls:u,badge:f,desc:y},h)=>e.createElement("tr",{key:l,style:{background:h%2===0?"#fafafa":"#fff"}},e.createElement("td",{style:{...a,fontWeight:600,color:"#111827",whiteSpace:"nowrap"}},l),e.createElement("td",{style:{...a,padding:"8px 14px"}},e.createElement("div",{style:{borderRadius:8,overflow:"hidden",width:320}},e.createElement(m,{type:"single",collapsible:!0},e.createElement(t,{value:`sv-${l}`,className:u},e.createElement(n,null,e.createElement(b,{title:"Project Name",subtitle:"Department / Team",badge:f})),e.createElement(r,null,e.createElement("span",null)))))),e.createElement("td",{style:{...a,color:"#6b7280",lineHeight:1.6}},y))))),e.createElement(i,null,"CTAs by Status"),e.createElement("table",{style:{width:"100%",borderCollapse:"collapse"}},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{style:d},"Status"),e.createElement("th",{style:d},"Currency"),e.createElement("th",{style:d},"Billing Model"),e.createElement("th",{style:d},"Stage Tag"),e.createElement("th",{style:d},"Settings"),e.createElement("th",{style:d},"Primary CTA"))),e.createElement("tbody",null,[{status:"Active",currency:!0,billing:!0,stage:!0,settings:!0,cta:"Add Position"},{status:"Draft",currency:!0,billing:!0,stage:!0,settings:!0,cta:"Add Position"},{status:"Inactive",currency:!1,billing:!1,stage:!1,settings:!0,cta:"—"},{status:"Archived",currency:!1,billing:!1,stage:!1,settings:!0,cta:"Unarchive projections"}].map(({status:l,currency:u,billing:f,stage:y,settings:h,cta:v},ge)=>{const A=pe=>pe?e.createElement("span",{style:{color:"#16a34a",fontWeight:700}},"✓"):e.createElement("span",{style:{color:"#d1d5db"}},"—");return e.createElement("tr",{key:l,style:{background:ge%2===0?"#fafafa":"#fff"}},e.createElement("td",{style:{...a,fontWeight:600,color:"#111827"}},l),e.createElement("td",{style:{...a,textAlign:"center"}},A(u)),e.createElement("td",{style:{...a,textAlign:"center"}},A(f)),e.createElement("td",{style:{...a,textAlign:"center"}},A(y)),e.createElement("td",{style:{...a,textAlign:"center"}},A(h)),e.createElement("td",{style:{...a,color:v==="—"?"#d1d5db":"#374151"}},v))}))))}},R={name:"SRP (Sales Revenue Projections)",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#f7f8f8",minHeight:"100vh"}},e.createElement("h2",{style:{fontSize:18,fontWeight:700,color:"#1f1f21",margin:"0 0 4px"}},"Sales Revenue Projections"),e.createElement("p",{style:{fontSize:13,color:"#91959f",margin:"0 0 20px"}},"Project variants: Active · Draft · Inactive Project · Archived Opportunity — ref: Figma node 40000016:54522"),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:8}},e.createElement("div",{style:{borderRadius:8,overflow:"hidden",border:"1px solid #d9dade"}},e.createElement(m,{type:"single",collapsible:!0,defaultValue:"active-inner"},e.createElement(t,{value:"active-inner",className:"accordion-item--srp-active"},e.createElement(n,null,e.createElement(b,{title:"Boston Global HCP Web Experience Jan",subtitle:"Cloud and App Platforms and Engineering / Quality & Performance Engineering",rightSlot:e.createElement(N,null)})),e.createElement(r,null,e.createElement(w,null))))),e.createElement("div",{style:{borderRadius:8,overflow:"hidden",border:"1px solid #d9dade"}},e.createElement(m,{type:"single",collapsible:!0},e.createElement(t,{value:"draft-inner",className:"accordion-item--srp-draft"},e.createElement(n,null,e.createElement(b,{title:"Phoenix Cloud Migration Q1",subtitle:"Infrastructure & DevOps / Platform Engineering",badge:e.createElement(p,{variant:"srp",icon:e.createElement(W,{size:11})},"Draft Project"),rightSlot:e.createElement(N,null)})),e.createElement(r,null,e.createElement(w,{positions:D.slice(0,2)}))))),e.createElement("div",{style:{borderRadius:8,overflow:"hidden",border:"1px solid #d9dade"}},e.createElement(m,{type:"single",collapsible:!0},e.createElement(t,{value:"inactive-inner",className:"accordion-item--srp-inactive"},e.createElement(n,null,e.createElement(b,{title:"Atlas Data Platform Redesign",subtitle:"Data Engineering / Analytics & Insights",badge:e.createElement(p,{variant:"srp",icon:e.createElement(j,{size:11})},"Inactive Project"),rightSlot:e.createElement(he,null)})),e.createElement(r,null,e.createElement(w,{positions:D.slice(1,3)}))))),e.createElement("div",{style:{borderRadius:8,overflow:"hidden",border:"1px solid #d9dade"}},e.createElement(m,{type:"single",collapsible:!0},e.createElement(t,{value:"archived-inner",className:"accordion-item--srp-archived"},e.createElement(n,null,e.createElement(b,{title:"Meridian Analytics Platform",subtitle:"Business Intelligence / Data Visualization",badge:e.createElement(p,{variant:"srp",icon:e.createElement(E,{size:11})},"Archived Opportunity"),rightSlot:e.createElement(ve,null)})),e.createElement(r,null,e.createElement(w,{positions:D.slice(2,4)})))))))};var M,O,F;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(F=(O=x.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var H,V,_;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(_=(V=S.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var L,U,G;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(G=(U=T.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var $,J,Q;P.parameters={...P.parameters,docs:{...($=P.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Q=(J=P.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,X,q;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(q=(X=C.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var K,Z,ee;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(ee=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,re;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ae,oe,ie;z.parameters={...z.parameters,docs:{...(ae=z.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ie=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,se;R.parameters={...R.parameters,docs:{...(le=R.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(se=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:se.source}}};const Ie=["Default","Multiple","AllClosed","WithDisabled","RichContent","TokenReference","Timesheets","SRPDocumentation","SRP"];export{T as AllClosed,x as Default,S as Multiple,C as RichContent,R as SRP,z as SRPDocumentation,k as Timesheets,I as TokenReference,P as WithDisabled,Ie as __namedExportsOrder,Ce as default};
