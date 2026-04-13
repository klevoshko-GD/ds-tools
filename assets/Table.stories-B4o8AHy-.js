import{R as e,r as _}from"./index-CwcVQgaJ.js";import{B as w,b as Be}from"./Badge-BHK3eREH.js";import{A as W}from"./Avatar-BlIaFzw_.js";import{B as De}from"./Button-CmDDSjyA.js";import{I as Pe}from"./Input-BLwq4NQE.js";import{T as P}from"./TimesheetCell-aui2yu2T.js";function y({columns:l=[],data:a=[],variant:r="default",caption:t,emptyMessage:o="No results.",sortKey:s=null,sortDir:c="asc",onSort:u,selectedRows:f,onRowSelect:i,footer:d,rowClassName:v,...p}){const V=r==="default"?"":`table--${r}`,b=n=>{u&&(s===n?u(n,c==="asc"?"desc":"asc"):u(n,"asc"))},E=n=>typeof n.width=="number"?n.width:parseInt(n.width)||120,S=l.filter(n=>n.sticky==="left"),h=l.filter(n=>n.sticky==="right"),x={};let j=0;for(const n of S)x[n.key]=j,j+=E(n);const M={};let J=0;for(let n=h.length-1;n>=0;n--)M[h[n].key]=J,J+=E(h[n]);const Q=S.length>0?S[S.length-1].key:null,K=h.length>0?h[0].key:null,Ne=n=>{if(!n.sticky)return n.width?{width:n.width}:void 0;const g=n.key===Q?{boxShadow:"3px 0 6px -2px rgba(0,0,0,0.08)"}:n.key===K?{boxShadow:"-3px 0 6px -2px rgba(0,0,0,0.08)"}:{};return{...n.width?{width:n.width}:{},position:"sticky",[n.sticky]:n.sticky==="left"?x[n.key]:M[n.key],zIndex:2,background:"var(--color-base-muted, #f7f8f8)",...g}},Ce=n=>{if(!n.sticky)return{};const g=n.key===Q?{boxShadow:"3px 0 6px -2px rgba(0,0,0,0.08)"}:n.key===K?{boxShadow:"-3px 0 6px -2px rgba(0,0,0,0.08)"}:{};return{position:"sticky",[n.sticky]:n.sticky==="left"?x[n.key]:M[n.key],zIndex:1,...g}},Ie=n=>n.sticky?`table__td--sticky-${n.sticky}`:"";return e.createElement("div",{className:"table-wrapper"},e.createElement("table",{className:["table",V].filter(Boolean).join(" "),...p},t&&e.createElement("caption",{style:{display:"none"}},t),e.createElement("thead",null,e.createElement("tr",null,f!==void 0&&e.createElement("th",{style:{width:40,padding:"10px 12px 10px 20px"}},e.createElement("input",{type:"checkbox","aria-label":"Select all rows",checked:f.size===a.length&&a.length>0,onChange:n=>{n.target.checked?i(new Set(a.map((g,m)=>m))):i(new Set)}})),l.map(n=>e.createElement("th",{key:n.key,className:n.align==="right"?"table__th--right":n.align==="center"?"table__th--center":"",style:Ne(n)},n.sortable?e.createElement("button",{className:"table__sort",onClick:()=>b(n.key)},n.label,e.createElement(Ve,{active:s===n.key,dir:c})):n.label)))),e.createElement("tbody",null,a.length===0?e.createElement("tr",null,e.createElement("td",{colSpan:l.length+(f!==void 0?1:0),className:"table__empty"},o)):a.map((n,g)=>e.createElement("tr",{key:g,className:[f!=null&&f.has(g)?"is-selected":"",v?v(n,g):""].filter(Boolean).join(" "),onClick:i?()=>{const m=new Set(f);m.has(g)?m.delete(g):m.add(g),i(m)}:void 0,style:i?{cursor:"pointer"}:void 0},f!==void 0&&e.createElement("td",{style:{padding:"10px 12px 10px 20px"}},e.createElement("input",{type:"checkbox","aria-label":`Select row ${g+1}`,checked:f.has(g),onChange:()=>{},onClick:m=>m.stopPropagation()})),l.map(m=>e.createElement("td",{key:m.key,className:[m.align==="right"?"table__td--right":m.align==="center"?"table__td--center":"",m.muted?"table__td--muted":"",m.className||"",Ie(m)].filter(Boolean).join(" "),style:Ce(m)},m.render?m.render(n[m.key],n,g):n[m.key])))))),d&&e.createElement("div",{className:"table-footer"},d))}function Ve({active:l,dir:a}){return e.createElement("span",{className:"table__sort-icon","aria-hidden":"true"},e.createElement("svg",{viewBox:"0 0 10 6",className:l&&a==="asc"?"is-active":""},e.createElement("path",{d:"M5 0L9.33 6H0.67L5 0Z",fill:"currentColor"})),e.createElement("svg",{viewBox:"0 0 10 6",className:l&&a==="desc"?"is-active":""},e.createElement("path",{d:"M5 6L0.67 0H9.33L5 6Z",fill:"currentColor"})))}y.__docgenInfo={description:`Table component — matches Figma DS (AI) Table component set.

Props:
 columns  — array of { key, label, align?, sortable?, width? }
 data     — array of row objects keyed by column.key
 variant  — 'default' | 'striped' | 'compact'
 caption  — optional accessible caption
 emptyMessage — message shown when data is empty
 sortKey, sortDir, onSort — controlled sort state
 selectedRows, onRowSelect — controlled row selection (Set of row indices)
 footer   — optional footer content (node)`,methods:[],displayName:"Table",props:{columns:{defaultValue:{value:"[]",computed:!1},required:!1},data:{defaultValue:{value:"[]",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},required:!1},emptyMessage:{defaultValue:{value:"'No results.'",computed:!1},required:!1},sortKey:{defaultValue:{value:"null",computed:!1},required:!1},sortDir:{defaultValue:{value:"'asc'",computed:!1},required:!1}}};const F=[{id:"INV-001",customer:"Acme Corp",email:"billing@acme.com",amount:1250,status:"paid",date:"2024-01-15"},{id:"INV-002",customer:"Globex Ltd",email:"accounts@globex.com",amount:875.5,status:"pending",date:"2024-01-18"},{id:"INV-003",customer:"Initech Inc",email:"finance@initech.com",amount:3200,status:"paid",date:"2024-01-20"},{id:"INV-004",customer:"Umbrella Corp",email:"ap@umbrella.com",amount:450.75,status:"overdue",date:"2024-01-05"},{id:"INV-005",customer:"Massive Dynamics",email:"billing@massive.com",amount:2100,status:"paid",date:"2024-01-22"},{id:"INV-006",customer:"Soylent Corp",email:"accounts@soylent.com",amount:690,status:"pending",date:"2024-01-24"},{id:"INV-007",customer:"Initrode",email:"info@initrode.com",amount:5450,status:"paid",date:"2024-01-26"}],$={paid:e.createElement(w,{variant:"success"},"Paid"),pending:e.createElement(w,{variant:"caution"},"Pending"),overdue:e.createElement(w,{variant:"destructive"},"Overdue")},O=l=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(l),rt={title:"Design Tokens/Table",component:y,parameters:{layout:"fullscreen",docs:{description:{component:"Table component — sortable columns, row selection, striped/compact variants. Built on semantic <table> element."}}}},z={name:"Default",render:()=>{const l=[{key:"id",label:"Invoice",sortable:!0},{key:"customer",label:"Customer",sortable:!0},{key:"email",label:"Email",muted:!0},{key:"date",label:"Date",sortable:!0},{key:"status",label:"Status",render:c=>$[c]},{key:"amount",label:"Amount",align:"right",sortable:!0,render:c=>O(c)}],[a,r]=_.useState("date"),[t,o]=_.useState("desc"),s=[...F].sort((c,u)=>{const f=c[a]<u[a]?-1:c[a]>u[a]?1:0;return t==="asc"?f:-f});return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:24}},"Invoices"),e.createElement(y,{columns:l,data:s,sortKey:a,sortDir:t,onSort:(c,u)=>{r(c),o(u)},footer:e.createElement("span",{className:"table-footer__info"},"Showing ",s.length," of ",s.length," results")}))}},T={name:"With Row Selection",render:()=>{const l=[{key:"id",label:"Invoice"},{key:"customer",label:"Customer"},{key:"date",label:"Date",muted:!0},{key:"status",label:"Status",render:t=>$[t]},{key:"amount",label:"Amount",align:"right",render:t=>O(t)}],[a,r]=_.useState(new Set);return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:8}},"Row Selection"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:24}},a.size===0?"Click rows or use checkboxes to select.":`${a.size} row${a.size>1?"s":""} selected.`),e.createElement(y,{columns:l,data:F,selectedRows:a,onRowSelect:r}))}},A={name:"Variants",render:()=>{const l=[{key:"id",label:"Invoice"},{key:"customer",label:"Customer"},{key:"status",label:"Status",render:r=>$[r]},{key:"amount",label:"Amount",align:"right",render:r=>O(r)}],a=({title:r,children:t})=>e.createElement("div",{style:{marginBottom:40}},e.createElement("h3",{style:{fontSize:13,fontWeight:700,color:"#111827",margin:"0 0 16px",textTransform:"uppercase",letterSpacing:"0.06em"}},r),t);return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:40}},"Table Variants"),e.createElement(a,{title:"Default"},e.createElement(y,{columns:l,data:F.slice(0,4)})),e.createElement(a,{title:"Striped"},e.createElement(y,{columns:l,data:F.slice(0,4),variant:"striped"})),e.createElement(a,{title:"Compact"},e.createElement(y,{columns:l,data:F.slice(0,4),variant:"compact"})),e.createElement(a,{title:"Empty state"},e.createElement(y,{columns:l,data:[]})))}},G=[{id:1,avatar:null,firstName:"Elena",lastName:"Morris",role:"Frontend Developer",rate:1200,status:"active",action:"View",tag:"Design",location:"New York",photoUrl:"https://i.pravatar.cc/40?img=47",notes:""},{id:2,avatar:null,firstName:"James",lastName:"Carter",role:"Backend Engineer",rate:1500,status:"pending",action:"Review",tag:"Engineering",location:"London",photoUrl:"https://i.pravatar.cc/40?img=12",notes:""},{id:3,avatar:null,firstName:"Sofia",lastName:"Reyes",role:"Product Designer",rate:1100,status:"inactive",action:"Edit",tag:"Design",location:"Berlin",photoUrl:"https://i.pravatar.cc/40?img=32",notes:""},{id:4,avatar:null,firstName:"Marcus",lastName:"Webb",role:"Data Analyst",rate:950,status:"active",action:"View",tag:"Analytics",location:"Toronto",photoUrl:"https://i.pravatar.cc/40?img=59",notes:""}],Me={active:e.createElement(w,{variant:"success"},"Active"),pending:e.createElement(w,{variant:"caution"},"Pending"),inactive:e.createElement(w,{variant:"secondary"},"Inactive")},$e=()=>e.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"}),e.createElement("circle",{cx:"12",cy:"9",r:"2.5"})),R={name:"Cell Types",render:()=>{const[l,a]=_.useState(Object.fromEntries(G.map(o=>[o.id,o.notes]))),r=[{key:"person",label:"Person",render:(o,s)=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:10}},e.createElement(W,{size:"8",initials:`${s.firstName[0]}${s.lastName[0]}`}),e.createElement("div",null,e.createElement("div",{style:{fontWeight:600,fontSize:13,color:"var(--color-base-foreground, #1f1f21)",lineHeight:1.3}},s.firstName," ",s.lastName),e.createElement("div",{style:{fontSize:11,color:"var(--color-base-muted-foreground, #91959f)",lineHeight:1.3}},s.role)))},{key:"rate",label:"Rate / mo",align:"right",render:(o,s)=>e.createElement("span",{style:{fontWeight:600,fontSize:13}},new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(s.rate))},{key:"status",label:"Status",render:(o,s)=>Me[s.status]},{key:"action",label:"Action",render:(o,s)=>e.createElement(De,{variant:"outline",size:"sm"},s.action)},{key:"location",label:"Location",render:(o,s)=>e.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:5,fontSize:13,color:"var(--color-base-muted-foreground, #91959f)"}},e.createElement($e,null),s.location)},{key:"tag",label:"Team",render:(o,s)=>e.createElement("span",{style:{fontSize:13,color:"var(--color-base-foreground, #1f1f21)"}},s.tag)},{key:"photo",label:"Photo",render:(o,s)=>e.createElement(W,{size:"8",src:s.photoUrl,alt:`${s.firstName} ${s.lastName}`})},{key:"notes",label:"Notes",width:180,render:(o,s)=>e.createElement(Pe,{placeholder:"Add a note…",value:l[s.id],onChange:c=>a(u=>({...u,[s.id]:c.target.value})),style:{minWidth:150}})},{key:"variance",label:"Variance",align:"center",render:(o,s)=>s.id===2?e.createElement(k,{badge:"-20%",value:"$0.00",muted:!0}):e.createElement("span",{style:{fontSize:13,color:"var(--color-base-muted-foreground, #91959f)"}},"—")}],t=G.map(o=>({...o,person:o.id,photo:o.id,notes:o.id}));return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:8}},"Cell Types"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:24}},"Demonstration of all Table / Cell component types from the Figma DS."),e.createElement(y,{columns:r,data:t}))}},H={name:"Token Reference",render:()=>{const l=[{element:"Wrapper border",token:"--color-base-border",value:"#d9dade"},{element:"Header background",token:"--color-base-muted",value:"#f7f8f8"},{element:"Header text",token:"--color-base-muted-foreground",value:"#91959f"},{element:"Row text",token:"--color-base-foreground",value:"#1f1f21"},{element:"Row hover bg",token:"--color-base-muted",value:"#f7f8f8"},{element:"Row divider",token:"--color-base-border",value:"#d9dade"},{element:"Selected row",token:"(hardcoded)",value:"#eef5fb"},{element:"Sort active",token:"--color-base-primary",value:"#0069b4"}],a={textAlign:"left",padding:"8px 12px",fontSize:10,fontWeight:700,color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.06em",borderBottom:"2px solid #e5e7eb"},r={padding:"10px 12px",fontSize:12,borderBottom:"1px solid #f3f4f6",verticalAlign:"middle"},t=o=>e.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:6}},e.createElement("span",{style:{width:12,height:12,borderRadius:2,background:o,border:"1px solid rgba(0,0,0,0.12)",flexShrink:0}}),e.createElement("span",{style:{fontFamily:"monospace",fontSize:11}},o));return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:24}},"Token Reference"),e.createElement("div",{style:{marginBottom:24,padding:12,background:"#f9fafb",borderRadius:8,fontSize:12,color:"#374151"}},e.createElement("strong",null,"Cell padding:")," 10px 20px (default) · 6px 20px (compact)",e.createElement("br",null),e.createElement("strong",null,"Font:")," 14px/400 body · 12px/700 header",e.createElement("br",null),e.createElement("strong",null,"Border radius:")," 8px (wrapper) · Border: 1px solid #d9dade"),e.createElement("table",{style:{width:"100%",borderCollapse:"collapse"}},e.createElement("thead",null,e.createElement("tr",null,["Element","Token","Value"].map(o=>e.createElement("th",{key:o,style:a},o)))),e.createElement("tbody",null,l.map(({element:o,token:s,value:c},u)=>e.createElement("tr",{key:o,style:{background:u%2===0?"#fafafa":"#fff"}},e.createElement("td",{style:{...r,fontWeight:600,color:"#111827"}},o),e.createElement("td",{style:{...r,fontFamily:"monospace",fontSize:11,color:"#6b7280"}},s),e.createElement("td",{style:r},t(c)))))))}},Re=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Oe=[{scenario:"optimistic",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:185,Sep:185,Oct:185,Nov:185,Dec:185},{scenario:"realistic",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:185,Sep:185,Oct:185,Nov:185,Dec:185},{scenario:"pessimistic",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:185,Sep:185,Oct:185,Nov:185,Dec:185}],L=[{scenario:"spt",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:185,Sep:185,Oct:185,Nov:185,Dec:185,variance:null},{scenario:"optimistic",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:0,Sep:185,Oct:185,Nov:185,Dec:185,variance:{month:"Aug",label:"-20%"}},{scenario:"realistic",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:185,Sep:185,Oct:185,Nov:185,Dec:185,variance:null},{scenario:"pessimistic",Jan:194,Feb:194,Mar:194,Apr:194,May:194,Jun:194,Jul:194,Aug:194,Sep:194,Oct:194,Nov:194,Dec:194,variance:null}];function He({scenario:l}){return l==="spt"?e.createElement("strong",{style:{fontSize:14,fontWeight:700,color:"var(--color-base-foreground, #1f1f21)"}},"SPT"):e.createElement(Be,{variant:l})}function k({badge:l,value:a,muted:r=!1}){return e.createElement("div",{style:{display:"inline-flex",flexDirection:"column",alignItems:"center",gap:4}},e.createElement("span",{style:{display:"inline-block",background:"var(--color-status-warning-icon, #ea580c)",color:"#fff",fontSize:11,fontWeight:700,borderRadius:9999,padding:"1px 7px",lineHeight:"18px",whiteSpace:"nowrap"}},l),e.createElement("span",{style:{fontSize:13,color:r?"var(--color-base-muted-foreground, #91959f)":"inherit"}},a))}const N={name:"SRP / Account Overview — Headcount",render:()=>{const l=[{key:"scenario",label:"",width:140,render:a=>e.createElement(He,{scenario:a})},...Re.map(a=>({key:a,label:a,align:"right",render:r=>e.createElement("span",{style:{fontSize:13}},r)}))];return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:4}},"SRP Account Overview — Headcount"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:24}},"Headcount by forecast scenario · ref: Figma node 40000020:80356"),e.createElement(y,{columns:l,data:Oe,caption:"Headcount by forecast scenario"}))}},Ue=[{id:1,name:"David Rayan",role:"UI Designer",rate:"$100",involvement:"100%",assignment:"Billable",days:{"Feb 1":"weekend","Feb 2":"approved","Feb 3":"approved","Feb 4":"approved","Feb 5":"no-hours","Feb 6":"approved","Feb 7":"weekend"},hours:"40 h",revenue:"$100,000"},{id:2,name:"David Rayan",role:"UI Designer",rate:"$100",involvement:"100%",assignment:"Billable",days:{"Feb 1":"weekend","Feb 2":"approved","Feb 3":"approved","Feb 4":"approved","Feb 5":"approved","Feb 6":"approved","Feb 7":"weekend"},hours:"40 h",revenue:"$100,000"}],je=[{id:1,name:"David Rayan",role:"UI Designer",rate:"$100",involvement:"100%",assignment:"Billable",quarters:{Q1:480,Q2:480,Q3:480,Q4:410},hours:"40 h",revenue:"$100,000"},{id:2,name:"David Rayan",role:"UI Designer",rate:"$100",involvement:"100%",assignment:"Billable",quarters:{Q1:480,Q2:480,Q3:480,Q4:480},hours:"40 h",revenue:"$100,000"}],Je=["Feb 1","Feb 2","Feb 3","Feb 4","Feb 5","Feb 6","Feb 7"],Qe=["Q1","Q2","Q3","Q4"];function U(){return e.createElement("div",{style:{padding:"12px 20px",background:"var(--color-base-card, #fff)",borderBottom:"1px solid var(--color-base-border, #d9dade)"}},e.createElement("div",{style:{fontSize:11,fontWeight:700,color:"var(--color-base-muted-foreground, #91959f)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:2}},"Project / Assignment"),e.createElement("div",{style:{fontSize:15,fontWeight:600,color:"var(--color-base-foreground, #1f1f21)"}},"Boston Global HCP Web Experience Jan"),e.createElement("div",{style:{fontSize:13,color:"var(--color-base-muted-foreground, #91959f)"}},"Cloud and App Platforms and Engineering / Quality & Performance Engineering"))}const C={name:"Timesheet — Week",render:()=>{const l=[{key:"assignee",label:"Assignee",sticky:"left",width:200,render:(r,t)=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},e.createElement(W,{size:"8",initials:t.name.split(" ").map(o=>o[0]).join("")}),e.createElement("div",null,e.createElement("div",{style:{fontWeight:600,fontSize:13,color:"var(--color-base-foreground, #1f1f21)",lineHeight:1.3}},t.name),e.createElement("div",{style:{fontSize:11,color:"var(--color-base-muted-foreground, #91959f)",lineHeight:1.3}},t.role)))},{key:"rate",label:"Rate",sticky:"left",width:80,render:(r,t)=>e.createElement("span",{style:{fontSize:13}},t.rate)},{key:"involvement",label:"Involvement",sticky:"left",width:110,render:(r,t)=>e.createElement("span",{style:{fontSize:13}},t.involvement)},{key:"assignment",label:"Assignment",render:(r,t)=>e.createElement(w,{variant:"success"},t.assignment)},...Je.map(r=>({key:r,label:r,align:"center",render:(t,o)=>e.createElement(P,{state:o.days[r],small:!0})})),{key:"hours",label:"Hours",align:"right",sticky:"right",width:90,render:(r,t)=>e.createElement("span",{style:{fontSize:13,fontWeight:600}},t.hours)},{key:"revenue",label:"Revenue",align:"right",sticky:"right",width:110,render:(r,t)=>e.createElement("span",{style:{fontSize:13,fontWeight:600}},t.revenue)}],a=Ue.map(r=>({...r}));return e.createElement("div",{style:{fontFamily:"system-ui, sans-serif",background:"#f7f8f8"}},e.createElement("div",{style:{padding:32}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:4}},"Timesheet — Week"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:24}},"Weekly view with day cells · error row = light red bg + 1px red border · ref: Figma node 40000022:1609")),e.createElement("div",{style:{background:"#fff",borderRadius:8,border:"1px solid var(--color-base-border, #d9dade)",overflow:"hidden",margin:"0 32px 32px"}},e.createElement(U,null),e.createElement(y,{columns:l,data:a,rowClassName:r=>Object.values(r.days).includes("no-hours")?"is-error":""})))}},I={name:"Timesheet — Quarter",render:()=>{const l=[{key:"assignee",label:"Assignee",sticky:"left",width:200,render:(r,t)=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},e.createElement(W,{size:"8",initials:t.name.split(" ").map(o=>o[0]).join("")}),e.createElement("div",null,e.createElement("div",{style:{fontWeight:600,fontSize:13,color:"var(--color-base-foreground, #1f1f21)",lineHeight:1.3}},t.name),e.createElement("div",{style:{fontSize:11,color:"var(--color-base-muted-foreground, #91959f)",lineHeight:1.3}},t.role)))},{key:"rate",label:"Rate",sticky:"left",width:80,render:(r,t)=>e.createElement("span",{style:{fontSize:13}},t.rate)},{key:"involvement",label:"Involvement",sticky:"left",width:110,render:(r,t)=>e.createElement("span",{style:{fontSize:13}},t.involvement)},{key:"assignment",label:"Assignment",render:(r,t)=>e.createElement(w,{variant:"success"},t.assignment)},...Qe.map(r=>({key:r,label:r,align:"center",render:(t,o)=>{const s=o.quarters[r],c=s<480;return e.createElement(P,{state:c?"no-hours":"approved",value:String(s),small:!1,style:{width:48,height:40,fontSize:13}})}})),{key:"hours",label:"Hours",align:"right",sticky:"right",width:90,render:(r,t)=>e.createElement("span",{style:{fontSize:13,fontWeight:600}},t.hours)},{key:"revenue",label:"Revenue",align:"right",sticky:"right",width:110,render:(r,t)=>e.createElement("span",{style:{fontSize:13,fontWeight:600}},t.revenue)}],a=je.map(r=>({...r}));return e.createElement("div",{style:{fontFamily:"system-ui, sans-serif",background:"#f7f8f8"}},e.createElement("div",{style:{padding:32}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:4}},"Timesheet — Quarter"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:24}},"Quarterly view with aggregated hours per quarter · error row = light red bg + 1px red border · ref: Figma node 40000022:1734")),e.createElement("div",{style:{background:"#fff",borderRadius:8,border:"1px solid var(--color-base-border, #d9dade)",overflow:"hidden",margin:"0 32px 32px"}},e.createElement(U,null),e.createElement(y,{columns:l,data:a,rowClassName:r=>Object.values(r.quarters).some(t=>t<480)?"is-error":""})))}},Ke=["Feb 1","Feb 2","Feb 3","Feb 4","Feb 5","Feb 6","Feb 7"],Ge=["Feb W1","Feb W2","Feb W3","Feb W4"],Le=[{id:1,name:"David Rayan",role:"Senior Frontend Engineer",sources:[{source:"SuitProjects Pro",rate:"$90",dayHours:{"Feb 1":null,"Feb 2":8,"Feb 3":8,"Feb 4":8,"Feb 5":8,"Feb 6":8,"Feb 7":null},weekHours:{"Feb W1":40,"Feb W2":40,"Feb W3":40,"Feb W4":32},totalHours:"40h",totalRevenue:"$3,600"},{source:"Invoice",rate:"$90",dayHours:{"Feb 1":null,"Feb 2":8,"Feb 3":8,"Feb 4":8,"Feb 5":0,"Feb 6":8,"Feb 7":null},weekHours:{"Feb W1":32,"Feb W2":40,"Feb W3":40,"Feb W4":40},totalHours:"32h",totalRevenue:"$2,880"},{source:"Client CSV",rate:"$90",dayHours:{"Feb 1":null,"Feb 2":8,"Feb 3":8,"Feb 4":0,"Feb 5":8,"Feb 6":8,"Feb 7":null},weekHours:{"Feb W1":32,"Feb W2":40,"Feb W3":40,"Feb W4":32},totalHours:"32h",totalRevenue:"$2,880"}],dayAssignPct:{"Feb 1":null,"Feb 2":"100%","Feb 3":"100%","Feb 4":"80%","Feb 5":"75%","Feb 6":"100%","Feb 7":null},weekAssignPct:{"Feb W1":"87%","Feb W2":"100%","Feb W3":"100%","Feb W4":"87%"}},{id:2,name:"Sofia Reyes",role:"Product Designer",sources:[{source:"SuitProjects Pro",rate:"$85",dayHours:{"Feb 1":null,"Feb 2":8,"Feb 3":0,"Feb 4":8,"Feb 5":8,"Feb 6":8,"Feb 7":null},weekHours:{"Feb W1":40,"Feb W2":32,"Feb W3":40,"Feb W4":40},totalHours:"32h",totalRevenue:"$2,720"},{source:"Invoice",rate:"$85",dayHours:{"Feb 1":null,"Feb 2":8,"Feb 3":8,"Feb 4":8,"Feb 5":8,"Feb 6":8,"Feb 7":null},weekHours:{"Feb W1":40,"Feb W2":40,"Feb W3":40,"Feb W4":40},totalHours:"40h",totalRevenue:"$3,400"},{source:"Client CSV",rate:"$85",dayHours:{"Feb 1":null,"Feb 2":8,"Feb 3":8,"Feb 4":8,"Feb 5":8,"Feb 6":8,"Feb 7":null},weekHours:{"Feb W1":40,"Feb W2":40,"Feb W3":40,"Feb W4":40},totalHours:"40h",totalRevenue:"$3,400"}],dayAssignPct:{"Feb 1":null,"Feb 2":"100%","Feb 3":"33%","Feb 4":"100%","Feb 5":"100%","Feb 6":"100%","Feb 7":null},weekAssignPct:{"Feb W1":"100%","Feb W2":"87%","Feb W3":"100%","Feb W4":"100%"}},{id:3,name:"James Carter",role:"Backend Engineer",sources:[{source:"SuitProjects Pro",rate:"$110",dayHours:{"Feb 1":null,"Feb 2":8,"Feb 3":8,"Feb 4":8,"Feb 5":8,"Feb 6":8,"Feb 7":null},weekHours:{"Feb W1":40,"Feb W2":40,"Feb W3":40,"Feb W4":40},totalHours:"40h",totalRevenue:"$4,400"},{source:"Invoice",rate:"$110",dayHours:{"Feb 1":null,"Feb 2":8,"Feb 3":8,"Feb 4":8,"Feb 5":8,"Feb 6":8,"Feb 7":null},weekHours:{"Feb W1":40,"Feb W2":40,"Feb W3":40,"Feb W4":40},totalHours:"40h",totalRevenue:"$4,400"},{source:"Client CSV",rate:"$110",dayHours:{"Feb 1":null,"Feb 2":8,"Feb 3":8,"Feb 4":8,"Feb 5":8,"Feb 6":8,"Feb 7":null},weekHours:{"Feb W1":40,"Feb W2":40,"Feb W3":40,"Feb W4":40},totalHours:"40h",totalRevenue:"$4,400"}],dayAssignPct:{"Feb 1":null,"Feb 2":"100%","Feb 3":"100%","Feb 4":"100%","Feb 5":"100%","Feb 6":"100%","Feb 7":null},weekAssignPct:{"Feb W1":"100%","Feb W2":"100%","Feb W3":"100%","Feb W4":"100%"}},{id:4,name:"Elena Morris",role:"Frontend Developer",sources:[{source:"SuitProjects Pro",rate:"$85",dayHours:{"Feb 1":null,"Feb 2":8,"Feb 3":8,"Feb 4":0,"Feb 5":8,"Feb 6":8,"Feb 7":null},weekHours:{"Feb W1":40,"Feb W2":24,"Feb W3":40,"Feb W4":40},totalHours:"32h",totalRevenue:"$2,720"},{source:"Invoice",rate:"$85",dayHours:{"Feb 1":null,"Feb 2":8,"Feb 3":8,"Feb 4":0,"Feb 5":8,"Feb 6":8,"Feb 7":null},weekHours:{"Feb W1":40,"Feb W2":32,"Feb W3":40,"Feb W4":40},totalHours:"32h",totalRevenue:"$2,720"},{source:"Client CSV",rate:"$85",dayHours:{"Feb 1":null,"Feb 2":8,"Feb 3":8,"Feb 4":0,"Feb 5":8,"Feb 6":8,"Feb 7":null},weekHours:{"Feb W1":40,"Feb W2":32,"Feb W3":40,"Feb W4":40},totalHours:"32h",totalRevenue:"$2,720"}],dayAssignPct:{"Feb 1":null,"Feb 2":"100%","Feb 3":"100%","Feb 4":"0%","Feb 5":"100%","Feb 6":"100%","Feb 7":null},weekAssignPct:{"Feb W1":"100%","Feb W2":"67%","Feb W3":"100%","Feb W4":"100%"}}];function qe(l,a,r){const t=[],o=r==="week";for(const s of l){const[c,u]=s.sources,f={};for(const b of a){const E=o?c.dayHours[b]:c.weekHours[b],S=o?u.dayHours[b]:u.weekHours[b];if(E===null||S===null){f[b]=null;continue}const h=S-E;f[b]=h===0?"—":h>0?`+${h}h`:`${h}h`}const i={_assigneeId:s.id,_name:s.name,_role:s.role};s.sources.forEach((b,E)=>{const S=a.some(h=>(o?b.dayHours[h]:b.weekHours[h])===0);t.push({...i,_type:"source",_isFirstInGroup:E===0,_hasDiscrepancy:S,source:b.source,rate:b.rate,totalHours:b.totalHours,totalRevenue:b.totalRevenue,_hours:o?b.dayHours:b.weekHours})}),t.push({...i,_type:"assignmentPct",_isFirstInGroup:!1,source:"Assignment %",rate:"—",totalHours:"—",totalRevenue:"—",_pct:o?s.dayAssignPct:s.weekAssignPct});const d=parseInt(u.totalHours),v=parseInt(c.totalHours),p=d-v,V=p===0?"—":p>0?`+${p}h`:`${p}h`;t.push({...i,_type:"variance",_isFirstInGroup:!1,source:"Variance",rate:"—",totalHours:V,totalRevenue:"—",_variance:f})}return t}const B={name:"Timesheet — Reconciliation",render:()=>{function l(){const[a,r]=_.useState("week"),t=a==="week"?Ke:Ge,o=qe(Le,t,a),s=i=>!i||i==="—"?"var(--color-base-muted-foreground, #91959f)":i.startsWith("+")?"var(--color-status-success-foreground, #16a34a)":i.startsWith("-")?"var(--color-base-destructive, #dc2626)":"var(--color-base-muted-foreground, #91959f)",c=[{key:"assignee",label:"Assignee",sticky:"left",width:190,render:(i,d)=>d._isFirstInGroup?e.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},e.createElement(W,{size:"8",initials:d._name.split(" ").map(v=>v[0]).join("")}),e.createElement("div",null,e.createElement("div",{style:{fontWeight:600,fontSize:13,color:"var(--color-base-foreground, #1f1f21)",lineHeight:1.3}},d._name),e.createElement("div",{style:{fontSize:11,color:"var(--color-base-muted-foreground, #91959f)",lineHeight:1.3}},d._role))):null},{key:"source",label:"Source",sticky:"left",width:160,render:(i,d)=>e.createElement("span",{style:{fontSize:12,fontWeight:600,color:d._type==="variance"?s(d.totalHours):d._type==="assignmentPct"?"var(--color-base-primary, #0069b4)":"var(--color-base-foreground, #1f1f21)"}},i)},{key:"rate",label:"Rate",sticky:"left",width:75,render:i=>e.createElement("span",{style:{fontSize:12,color:"var(--color-base-muted-foreground, #91959f)"}},i)},...t.map(i=>({key:i,label:i,align:"center",width:72,render:(d,v)=>{if(v._type==="source"){const p=v._hours[i];return p===null?e.createElement(P,{state:"weekend",small:!0}):e.createElement(P,{state:p===0?"no-hours":"approved",small:!0})}if(v._type==="assignmentPct"){const p=v._pct[i];return p===null?e.createElement("span",{style:{color:"var(--color-base-border, #d9dade)",fontSize:12}},"—"):e.createElement("span",{style:{fontSize:12,fontWeight:600,color:"var(--color-base-primary, #0069b4)"}},p)}if(v._type==="variance"){const p=v._variance[i];return p===null?e.createElement("span",{style:{color:"var(--color-base-border, #d9dade)",fontSize:12}},"—"):e.createElement("span",{style:{fontSize:12,fontWeight:600,color:s(p)}},p)}return null}})),{key:"totalHours",label:"Total Hrs",align:"right",sticky:"right",width:90,render:(i,d)=>e.createElement("span",{style:{fontSize:12,fontWeight:600,color:d._type==="variance"?s(i):"var(--color-base-foreground, #1f1f21)"}},i)},{key:"totalRevenue",label:"Revenue",align:"right",sticky:"right",width:110,render:(i,d)=>e.createElement("span",{style:{fontSize:12,fontWeight:d._type==="source"?600:400,color:d._type==="assignmentPct"||d._type==="variance"?"var(--color-base-muted-foreground, #91959f)":"var(--color-base-foreground, #1f1f21)"}},i)}],u=i=>{const d=[];return i._isFirstInGroup&&d.push("is-group-start"),i._type==="source"&&i._hasDiscrepancy&&d.push("is-error"),i._type==="assignmentPct"&&d.push("is-assign-pct"),i._type==="variance"&&d.push("is-variance"),d.join(" ")},f=i=>({padding:"6px 14px",fontSize:13,fontWeight:600,border:"1px solid var(--color-base-border, #d9dade)",borderRadius:6,cursor:"pointer",fontFamily:"inherit",background:i?"var(--color-base-primary, #0069b4)":"#fff",color:i?"#fff":"var(--color-base-foreground, #1f1f21)"});return e.createElement("div",{style:{fontFamily:"system-ui, sans-serif",background:"#f7f8f8"}},e.createElement("div",{style:{padding:32,paddingBottom:0}},e.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:24}},e.createElement("div",null,e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",margin:"0 0 4px"}},"Timesheet — Reconciliation"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",margin:0}},"5 rows per assignee (SP · Invoice · CSV · Assignment % · Variance) · ref: Figma node 40000024:2381")),e.createElement("div",{style:{display:"flex",gap:4}},e.createElement("button",{style:f(a==="week"),onClick:()=>r("week")},"Week"),e.createElement("button",{style:f(a==="month"),onClick:()=>r("month")},"Month")))),e.createElement("div",{style:{background:"#fff",borderRadius:8,border:"1px solid var(--color-base-border, #d9dade)",overflow:"hidden",margin:"0 32px 32px"}},e.createElement(U,null),e.createElement(y,{columns:c,data:o,rowClassName:u})))}return e.createElement(l,null)}},D={name:"SRP / Account Overview — Revenue",render:()=>{const l=[{key:"scenario",label:"",width:140,render:a=>e.createElement(He,{scenario:a})},...Re.map(a=>{const r=L.some(t=>{var o;return((o=t.variance)==null?void 0:o.month)===a});return{key:a,label:a,align:"right",className:r?"table__td--variance":"",render:(t,o)=>{var u;const s=((u=o.variance)==null?void 0:u.month)===a,c=t===0&&s;return s?e.createElement(k,{badge:o.variance.label,value:c?"$0.00":t,muted:c}):e.createElement("span",{style:{fontSize:13}},t)}}})];return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:4}},"SRP Account Overview — Revenue"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:24}},"Revenue by forecast scenario with SPT baseline · ref: Figma node 40000020:80442"),e.createElement(y,{columns:l,data:L,caption:"Revenue by forecast scenario"}))}};k.__docgenInfo={description:`VarianceBadgeCell — variance pill badge above a value, stacked and centered.
Use with column className "table__td--variance" (adds extra top padding to the td).`,methods:[],displayName:"VarianceBadgeCell",props:{muted:{defaultValue:{value:"false",computed:!1},required:!1}}};var q,Z,Y;z.parameters={...z.parameters,docs:{...(q=z.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Default',
  render: () => {
    const columns = [{
      key: 'id',
      label: 'Invoice',
      sortable: true
    }, {
      key: 'customer',
      label: 'Customer',
      sortable: true
    }, {
      key: 'email',
      label: 'Email',
      muted: true
    }, {
      key: 'date',
      label: 'Date',
      sortable: true
    }, {
      key: 'status',
      label: 'Status',
      render: v => STATUS_BADGE[v]
    }, {
      key: 'amount',
      label: 'Amount',
      align: 'right',
      sortable: true,
      render: v => fmt(v)
    }];
    const [sortKey, setSortKey] = useState('date');
    const [sortDir, setSortDir] = useState('desc');
    const sorted = [...INVOICES].sort((a, b) => {
      const v = a[sortKey] < b[sortKey] ? -1 : a[sortKey] > b[sortKey] ? 1 : 0;
      return sortDir === 'asc' ? v : -v;
    });
    return <div style={{
      padding: 32,
      fontFamily: 'system-ui, sans-serif',
      background: '#fff'
    }}>
        <h2 style={{
        fontSize: 20,
        fontWeight: 700,
        color: '#111827',
        marginBottom: 24
      }}>Invoices</h2>
        <Table columns={columns} data={sorted} sortKey={sortKey} sortDir={sortDir} onSort={(key, dir) => {
        setSortKey(key);
        setSortDir(dir);
      }} footer={<span className="table-footer__info">
              Showing {sorted.length} of {sorted.length} results
            </span>} />
      </div>;
  }
}`,...(Y=(Z=z.parameters)==null?void 0:Z.docs)==null?void 0:Y.source}}};var X,ee,te;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'With Row Selection',
  render: () => {
    const columns = [{
      key: 'id',
      label: 'Invoice'
    }, {
      key: 'customer',
      label: 'Customer'
    }, {
      key: 'date',
      label: 'Date',
      muted: true
    }, {
      key: 'status',
      label: 'Status',
      render: v => STATUS_BADGE[v]
    }, {
      key: 'amount',
      label: 'Amount',
      align: 'right',
      render: v => fmt(v)
    }];
    const [selected, setSelected] = useState(new Set());
    return <div style={{
      padding: 32,
      fontFamily: 'system-ui, sans-serif',
      background: '#fff'
    }}>
        <h2 style={{
        fontSize: 20,
        fontWeight: 700,
        color: '#111827',
        marginBottom: 8
      }}>Row Selection</h2>
        <p style={{
        fontSize: 13,
        color: '#6b7280',
        marginBottom: 24
      }}>
          {selected.size === 0 ? 'Click rows or use checkboxes to select.' : \`\${selected.size} row\${selected.size > 1 ? 's' : ''} selected.\`}
        </p>
        <Table columns={columns} data={INVOICES} selectedRows={selected} onRowSelect={setSelected} />
      </div>;
  }
}`,...(te=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,re,ae;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Variants',
  render: () => {
    const columns = [{
      key: 'id',
      label: 'Invoice'
    }, {
      key: 'customer',
      label: 'Customer'
    }, {
      key: 'status',
      label: 'Status',
      render: v => STATUS_BADGE[v]
    }, {
      key: 'amount',
      label: 'Amount',
      align: 'right',
      render: v => fmt(v)
    }];
    const Section = ({
      title,
      children
    }) => <div style={{
      marginBottom: 40
    }}>
        <h3 style={{
        fontSize: 13,
        fontWeight: 700,
        color: '#111827',
        margin: '0 0 16px',
        textTransform: 'uppercase',
        letterSpacing: '0.06em'
      }}>{title}</h3>
        {children}
      </div>;
    return <div style={{
      padding: 32,
      fontFamily: 'system-ui, sans-serif',
      background: '#fff'
    }}>
        <h2 style={{
        fontSize: 20,
        fontWeight: 700,
        color: '#111827',
        marginBottom: 40
      }}>Table Variants</h2>

        <Section title="Default">
          <Table columns={columns} data={INVOICES.slice(0, 4)} />
        </Section>

        <Section title="Striped">
          <Table columns={columns} data={INVOICES.slice(0, 4)} variant="striped" />
        </Section>

        <Section title="Compact">
          <Table columns={columns} data={INVOICES.slice(0, 4)} variant="compact" />
        </Section>

        <Section title="Empty state">
          <Table columns={columns} data={[]} />
        </Section>
      </div>;
  }
}`,...(ae=(re=A.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var oe,se,le;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Cell Types',
  render: () => {
    const [notes, setNotes] = useState(Object.fromEntries(TEAM.map(r => [r.id, r.notes])));
    const columns = [{
      key: 'person',
      label: 'Person',
      render: (_, row) => <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }}>
            <Avatar size="8" initials={\`\${row.firstName[0]}\${row.lastName[0]}\`} />
            <div>
              <div style={{
            fontWeight: 600,
            fontSize: 13,
            color: 'var(--color-base-foreground, #1f1f21)',
            lineHeight: 1.3
          }}>
                {row.firstName} {row.lastName}
              </div>
              <div style={{
            fontSize: 11,
            color: 'var(--color-base-muted-foreground, #91959f)',
            lineHeight: 1.3
          }}>
                {row.role}
              </div>
            </div>
          </div>
    }, {
      key: 'rate',
      label: 'Rate / mo',
      align: 'right',
      render: (_, row) => <span style={{
        fontWeight: 600,
        fontSize: 13
      }}>
            {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0
        }).format(row.rate)}
          </span>
    }, {
      key: 'status',
      label: 'Status',
      render: (_, row) => TEAM_STATUS_BADGE[row.status]
    }, {
      key: 'action',
      label: 'Action',
      render: (_, row) => <Button variant="outline" size="sm">{row.action}</Button>
    }, {
      key: 'location',
      label: 'Location',
      render: (_, row) => <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        fontSize: 13,
        color: 'var(--color-base-muted-foreground, #91959f)'
      }}>
            <LocationIcon />
            {row.location}
          </span>
    }, {
      key: 'tag',
      label: 'Team',
      render: (_, row) => <span style={{
        fontSize: 13,
        color: 'var(--color-base-foreground, #1f1f21)'
      }}>{row.tag}</span>
    }, {
      key: 'photo',
      label: 'Photo',
      render: (_, row) => <Avatar size="8" src={row.photoUrl} alt={\`\${row.firstName} \${row.lastName}\`} />
    }, {
      key: 'notes',
      label: 'Notes',
      width: 180,
      render: (_, row) => <Input placeholder="Add a note…" value={notes[row.id]} onChange={e => setNotes(prev => ({
        ...prev,
        [row.id]: e.target.value
      }))} style={{
        minWidth: 150
      }} />
    }, {
      key: 'variance',
      label: 'Variance',
      align: 'center',
      render: (_, row) => row.id === 2 ? <VarianceBadgeCell badge="-20%" value="$0.00" muted /> : <span style={{
        fontSize: 13,
        color: 'var(--color-base-muted-foreground, #91959f)'
      }}>—</span>
    }];

    // Map TEAM rows to flat objects so Table can access keys; render functions use the full row
    const data = TEAM.map(r => ({
      ...r,
      person: r.id,
      photo: r.id,
      notes: r.id
    }));
    return <div style={{
      padding: 32,
      fontFamily: 'system-ui, sans-serif',
      background: '#fff'
    }}>
        <h2 style={{
        fontSize: 20,
        fontWeight: 700,
        color: '#111827',
        marginBottom: 8
      }}>Cell Types</h2>
        <p style={{
        fontSize: 13,
        color: '#6b7280',
        marginBottom: 24
      }}>
          Demonstration of all Table / Cell component types from the Figma DS.
        </p>
        <Table columns={columns} data={data} />
      </div>;
  }
}`,...(le=(se=R.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ie,ce,de;H.parameters={...H.parameters,docs:{...(ie=H.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Token Reference',
  render: () => {
    const rows = [{
      element: 'Wrapper border',
      token: '--color-base-border',
      value: '#d9dade'
    }, {
      element: 'Header background',
      token: '--color-base-muted',
      value: '#f7f8f8'
    }, {
      element: 'Header text',
      token: '--color-base-muted-foreground',
      value: '#91959f'
    }, {
      element: 'Row text',
      token: '--color-base-foreground',
      value: '#1f1f21'
    }, {
      element: 'Row hover bg',
      token: '--color-base-muted',
      value: '#f7f8f8'
    }, {
      element: 'Row divider',
      token: '--color-base-border',
      value: '#d9dade'
    }, {
      element: 'Selected row',
      token: '(hardcoded)',
      value: '#eef5fb'
    }, {
      element: 'Sort active',
      token: '--color-base-primary',
      value: '#0069b4'
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
    const sw = color => <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }}>
        <span style={{
        width: 12,
        height: 12,
        borderRadius: 2,
        background: color,
        border: '1px solid rgba(0,0,0,0.12)',
        flexShrink: 0
      }} />
        <span style={{
        fontFamily: 'monospace',
        fontSize: 11
      }}>{color}</span>
      </span>;
    return <div style={{
      padding: 32,
      fontFamily: 'system-ui, sans-serif',
      background: '#fff'
    }}>
        <h2 style={{
        fontSize: 20,
        fontWeight: 700,
        color: '#111827',
        marginBottom: 24
      }}>Token Reference</h2>

        <div style={{
        marginBottom: 24,
        padding: 12,
        background: '#f9fafb',
        borderRadius: 8,
        fontSize: 12,
        color: '#374151'
      }}>
          <strong>Cell padding:</strong> 10px 20px (default) · 6px 20px (compact)<br />
          <strong>Font:</strong> 14px/400 body · 12px/700 header<br />
          <strong>Border radius:</strong> 8px (wrapper) · Border: 1px solid #d9dade
        </div>

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
                <td style={td}>{sw(value)}</td>
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(de=(ce=H.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,fe,be,pe;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`function VarianceBadgeCell({
  badge,
  value,
  muted = false
}) {
  return <div style={{
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4
  }}>
      <span style={{
      display: 'inline-block',
      background: 'var(--color-status-warning-icon, #ea580c)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      borderRadius: 9999,
      padding: '1px 7px',
      lineHeight: '18px',
      whiteSpace: 'nowrap'
    }}>
        {badge}
      </span>
      <span style={{
      fontSize: 13,
      color: muted ? 'var(--color-base-muted-foreground, #91959f)' : 'inherit'
    }}>
        {value}
      </span>
    </div>;
}`,...(fe=(me=k.parameters)==null?void 0:me.docs)==null?void 0:fe.source},description:{story:`VarianceBadgeCell — stacks a variance pill badge above a value, both centered.
Used in SRP Revenue table for cells with a forecast deviation indicator.
VarianceBadgeCell — variance pill badge above a value, stacked and centered.
Use with column className "table__td--variance" (adds extra top padding to the td).`,...(pe=(be=k.parameters)==null?void 0:be.docs)==null?void 0:pe.description}}};var ge,ye,ve;N.parameters={...N.parameters,docs:{...(ge=N.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'SRP / Account Overview — Headcount',
  render: () => {
    const columns = [{
      key: 'scenario',
      label: '',
      width: 140,
      render: val => <ScenarioLabel scenario={val} />
    }, ...MONTHS.map(month => ({
      key: month,
      label: month,
      align: 'right',
      render: val => <span style={{
        fontSize: 13
      }}>{val}</span>
    }))];
    return <div style={{
      padding: 32,
      fontFamily: 'system-ui, sans-serif',
      background: '#fff'
    }}>
        <h2 style={{
        fontSize: 20,
        fontWeight: 700,
        color: '#111827',
        marginBottom: 4
      }}>
          SRP Account Overview — Headcount
        </h2>
        <p style={{
        fontSize: 13,
        color: '#6b7280',
        marginBottom: 24
      }}>
          Headcount by forecast scenario · ref: Figma node 40000020:80356
        </p>
        <Table columns={columns} data={HEADCOUNT_DATA} caption="Headcount by forecast scenario" />
      </div>;
  }
}`,...(ve=(ye=N.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var he,Se,ke;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Timesheet — Week',
  render: () => {
    const columns = [{
      key: 'assignee',
      label: 'Assignee',
      sticky: 'left',
      width: 200,
      render: (_, row) => <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
            <Avatar size="8" initials={row.name.split(' ').map(n => n[0]).join('')} />
            <div>
              <div style={{
            fontWeight: 600,
            fontSize: 13,
            color: 'var(--color-base-foreground, #1f1f21)',
            lineHeight: 1.3
          }}>{row.name}</div>
              <div style={{
            fontSize: 11,
            color: 'var(--color-base-muted-foreground, #91959f)',
            lineHeight: 1.3
          }}>{row.role}</div>
            </div>
          </div>
    }, {
      key: 'rate',
      label: 'Rate',
      sticky: 'left',
      width: 80,
      render: (_, row) => <span style={{
        fontSize: 13
      }}>{row.rate}</span>
    }, {
      key: 'involvement',
      label: 'Involvement',
      sticky: 'left',
      width: 110,
      render: (_, row) => <span style={{
        fontSize: 13
      }}>{row.involvement}</span>
    }, {
      key: 'assignment',
      label: 'Assignment',
      render: (_, row) => <Badge variant="success">{row.assignment}</Badge>
    }, ...WEEK_DAYS.map(day => ({
      key: day,
      label: day,
      align: 'center',
      render: (_, row) => <TimesheetCell state={row.days[day]} small />
    })), {
      key: 'hours',
      label: 'Hours',
      align: 'right',
      sticky: 'right',
      width: 90,
      render: (_, row) => <span style={{
        fontSize: 13,
        fontWeight: 600
      }}>{row.hours}</span>
    }, {
      key: 'revenue',
      label: 'Revenue',
      align: 'right',
      sticky: 'right',
      width: 110,
      render: (_, row) => <span style={{
        fontSize: 13,
        fontWeight: 600
      }}>{row.revenue}</span>
    }];
    const data = TIMESHEET_ASSIGNEES_WEEK.map(r => ({
      ...r
    }));
    return <div style={{
      fontFamily: 'system-ui, sans-serif',
      background: '#f7f8f8'
    }}>
        <div style={{
        padding: 32
      }}>
          <h2 style={{
          fontSize: 20,
          fontWeight: 700,
          color: '#111827',
          marginBottom: 4
        }}>Timesheet — Week</h2>
          <p style={{
          fontSize: 13,
          color: '#6b7280',
          marginBottom: 24
        }}>
            Weekly view with day cells · error row = light red bg + 1px red border · ref: Figma node 40000022:1609
          </p>
        </div>
        <div style={{
        background: '#fff',
        borderRadius: 8,
        border: '1px solid var(--color-base-border, #d9dade)',
        overflow: 'hidden',
        margin: '0 32px 32px'
      }}>
          <TimesheetProjectHeader />
          <Table columns={columns} data={data} rowClassName={row => Object.values(row.days).includes('no-hours') ? 'is-error' : ''} />
        </div>
      </div>;
  }
}`,...(ke=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var we,Ee,Fe;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Timesheet — Quarter',
  render: () => {
    const columns = [{
      key: 'assignee',
      label: 'Assignee',
      sticky: 'left',
      width: 200,
      render: (_, row) => <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
            <Avatar size="8" initials={row.name.split(' ').map(n => n[0]).join('')} />
            <div>
              <div style={{
            fontWeight: 600,
            fontSize: 13,
            color: 'var(--color-base-foreground, #1f1f21)',
            lineHeight: 1.3
          }}>{row.name}</div>
              <div style={{
            fontSize: 11,
            color: 'var(--color-base-muted-foreground, #91959f)',
            lineHeight: 1.3
          }}>{row.role}</div>
            </div>
          </div>
    }, {
      key: 'rate',
      label: 'Rate',
      sticky: 'left',
      width: 80,
      render: (_, row) => <span style={{
        fontSize: 13
      }}>{row.rate}</span>
    }, {
      key: 'involvement',
      label: 'Involvement',
      sticky: 'left',
      width: 110,
      render: (_, row) => <span style={{
        fontSize: 13
      }}>{row.involvement}</span>
    }, {
      key: 'assignment',
      label: 'Assignment',
      render: (_, row) => <Badge variant="success">{row.assignment}</Badge>
    }, ...QUARTERS.map(q => ({
      key: q,
      label: q,
      align: 'center',
      render: (_, row) => {
        const val = row.quarters[q];
        const isLow = val < 480;
        return <TimesheetCell state={isLow ? 'no-hours' : 'approved'} value={String(val)} small={false} style={{
          width: 48,
          height: 40,
          fontSize: 13
        }} />;
      }
    })), {
      key: 'hours',
      label: 'Hours',
      align: 'right',
      sticky: 'right',
      width: 90,
      render: (_, row) => <span style={{
        fontSize: 13,
        fontWeight: 600
      }}>{row.hours}</span>
    }, {
      key: 'revenue',
      label: 'Revenue',
      align: 'right',
      sticky: 'right',
      width: 110,
      render: (_, row) => <span style={{
        fontSize: 13,
        fontWeight: 600
      }}>{row.revenue}</span>
    }];
    const data = TIMESHEET_ASSIGNEES_QUARTER.map(r => ({
      ...r
    }));
    return <div style={{
      fontFamily: 'system-ui, sans-serif',
      background: '#f7f8f8'
    }}>
        <div style={{
        padding: 32
      }}>
          <h2 style={{
          fontSize: 20,
          fontWeight: 700,
          color: '#111827',
          marginBottom: 4
        }}>Timesheet — Quarter</h2>
          <p style={{
          fontSize: 13,
          color: '#6b7280',
          marginBottom: 24
        }}>
            Quarterly view with aggregated hours per quarter · error row = light red bg + 1px red border · ref: Figma node 40000022:1734
          </p>
        </div>
        <div style={{
        background: '#fff',
        borderRadius: 8,
        border: '1px solid var(--color-base-border, #d9dade)',
        overflow: 'hidden',
        margin: '0 32px 32px'
      }}>
          <TimesheetProjectHeader />
          <Table columns={columns} data={data} rowClassName={row => Object.values(row.quarters).some(v => v < 480) ? 'is-error' : ''} />
        </div>
      </div>;
  }
}`,...(Fe=(Ee=I.parameters)==null?void 0:Ee.docs)==null?void 0:Fe.source}}};var _e,We,xe;B.parameters={...B.parameters,docs:{...(_e=B.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'Timesheet — Reconciliation',
  render: () => {
    function ReconciliationStory() {
      const [viewMode, setViewMode] = useState('week');
      const periods = viewMode === 'week' ? RECON_WEEK_DAYS : RECON_MONTH_WEEKS;
      const rows = buildReconRows(RECON_ASSIGNEES, periods, viewMode);
      const varColor = val => {
        if (!val || val === '—') return 'var(--color-base-muted-foreground, #91959f)';
        return val.startsWith('+') ? 'var(--color-status-success-foreground, #16a34a)' : val.startsWith('-') ? 'var(--color-base-destructive, #dc2626)' : 'var(--color-base-muted-foreground, #91959f)';
      };
      const columns = [{
        key: 'assignee',
        label: 'Assignee',
        sticky: 'left',
        width: 190,
        render: (_, row) => row._isFirstInGroup ? <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }}>
              <Avatar size="8" initials={row._name.split(' ').map(n => n[0]).join('')} />
              <div>
                <div style={{
              fontWeight: 600,
              fontSize: 13,
              color: 'var(--color-base-foreground, #1f1f21)',
              lineHeight: 1.3
            }}>{row._name}</div>
                <div style={{
              fontSize: 11,
              color: 'var(--color-base-muted-foreground, #91959f)',
              lineHeight: 1.3
            }}>{row._role}</div>
              </div>
            </div> : null
      }, {
        key: 'source',
        label: 'Source',
        sticky: 'left',
        width: 160,
        render: (val, row) => <span style={{
          fontSize: 12,
          fontWeight: 600,
          color: row._type === 'variance' ? varColor(row.totalHours) : row._type === 'assignmentPct' ? 'var(--color-base-primary, #0069b4)' : 'var(--color-base-foreground, #1f1f21)'
        }}>{val}</span>
      }, {
        key: 'rate',
        label: 'Rate',
        sticky: 'left',
        width: 75,
        render: val => <span style={{
          fontSize: 12,
          color: 'var(--color-base-muted-foreground, #91959f)'
        }}>{val}</span>
      }, ...periods.map(period => ({
        key: period,
        label: period,
        align: 'center',
        width: 72,
        render: (_, row) => {
          if (row._type === 'source') {
            const h = row._hours[period];
            if (h === null) return <TimesheetCell state="weekend" small />;
            return <TimesheetCell state={h === 0 ? 'no-hours' : 'approved'} small />;
          }
          if (row._type === 'assignmentPct') {
            const pct = row._pct[period];
            if (pct === null) return <span style={{
              color: 'var(--color-base-border, #d9dade)',
              fontSize: 12
            }}>—</span>;
            return <span style={{
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--color-base-primary, #0069b4)'
            }}>{pct}</span>;
          }
          if (row._type === 'variance') {
            const val = row._variance[period];
            if (val === null) return <span style={{
              color: 'var(--color-base-border, #d9dade)',
              fontSize: 12
            }}>—</span>;
            return <span style={{
              fontSize: 12,
              fontWeight: 600,
              color: varColor(val)
            }}>{val}</span>;
          }
          return null;
        }
      })), {
        key: 'totalHours',
        label: 'Total Hrs',
        align: 'right',
        sticky: 'right',
        width: 90,
        render: (val, row) => <span style={{
          fontSize: 12,
          fontWeight: 600,
          color: row._type === 'variance' ? varColor(val) : 'var(--color-base-foreground, #1f1f21)'
        }}>{val}</span>
      }, {
        key: 'totalRevenue',
        label: 'Revenue',
        align: 'right',
        sticky: 'right',
        width: 110,
        render: (val, row) => <span style={{
          fontSize: 12,
          fontWeight: row._type === 'source' ? 600 : 400,
          color: row._type === 'assignmentPct' || row._type === 'variance' ? 'var(--color-base-muted-foreground, #91959f)' : 'var(--color-base-foreground, #1f1f21)'
        }}>{val}</span>
      }];
      const rowClassName = row => {
        const cls = [];
        if (row._isFirstInGroup) cls.push('is-group-start');
        if (row._type === 'source' && row._hasDiscrepancy) cls.push('is-error');
        if (row._type === 'assignmentPct') cls.push('is-assign-pct');
        if (row._type === 'variance') cls.push('is-variance');
        return cls.join(' ');
      };
      const btnStyle = active => ({
        padding: '6px 14px',
        fontSize: 13,
        fontWeight: 600,
        border: '1px solid var(--color-base-border, #d9dade)',
        borderRadius: 6,
        cursor: 'pointer',
        fontFamily: 'inherit',
        background: active ? 'var(--color-base-primary, #0069b4)' : '#fff',
        color: active ? '#fff' : 'var(--color-base-foreground, #1f1f21)'
      });
      return <div style={{
        fontFamily: 'system-ui, sans-serif',
        background: '#f7f8f8'
      }}>
          <div style={{
          padding: 32,
          paddingBottom: 0
        }}>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 24
          }}>
              <div>
                <h2 style={{
                fontSize: 20,
                fontWeight: 700,
                color: '#111827',
                margin: '0 0 4px'
              }}>Timesheet — Reconciliation</h2>
                <p style={{
                fontSize: 13,
                color: '#6b7280',
                margin: 0
              }}>
                  5 rows per assignee (SP · Invoice · CSV · Assignment % · Variance) · ref: Figma node 40000024:2381
                </p>
              </div>
              <div style={{
              display: 'flex',
              gap: 4
            }}>
                <button style={btnStyle(viewMode === 'week')} onClick={() => setViewMode('week')}>Week</button>
                <button style={btnStyle(viewMode === 'month')} onClick={() => setViewMode('month')}>Month</button>
              </div>
            </div>
          </div>
          <div style={{
          background: '#fff',
          borderRadius: 8,
          border: '1px solid var(--color-base-border, #d9dade)',
          overflow: 'hidden',
          margin: '0 32px 32px'
        }}>
            <TimesheetProjectHeader />
            <Table columns={columns} data={rows} rowClassName={rowClassName} />
          </div>
        </div>;
    }
    return <ReconciliationStory />;
  }
}`,...(xe=(We=B.parameters)==null?void 0:We.docs)==null?void 0:xe.source}}};var ze,Te,Ae;D.parameters={...D.parameters,docs:{...(ze=D.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'SRP / Account Overview — Revenue',
  render: () => {
    const columns = [{
      key: 'scenario',
      label: '',
      width: 140,
      render: val => <ScenarioLabel scenario={val} />
    }, ...MONTHS.map(month => {
      const isVarianceMonth = REVENUE_DATA.some(r => r.variance?.month === month);
      return {
        key: month,
        label: month,
        align: 'right',
        className: isVarianceMonth ? 'table__td--variance' : '',
        render: (val, row) => {
          const hasVariance = row.variance?.month === month;
          const isZero = val === 0 && hasVariance;
          if (hasVariance) {
            return <VarianceBadgeCell badge={row.variance.label} value={isZero ? '$0.00' : val} muted={isZero} />;
          }
          return <span style={{
            fontSize: 13
          }}>{val}</span>;
        }
      };
    })];
    return <div style={{
      padding: 32,
      fontFamily: 'system-ui, sans-serif',
      background: '#fff'
    }}>
        <h2 style={{
        fontSize: 20,
        fontWeight: 700,
        color: '#111827',
        marginBottom: 4
      }}>
          SRP Account Overview — Revenue
        </h2>
        <p style={{
        fontSize: 13,
        color: '#6b7280',
        marginBottom: 24
      }}>
          Revenue by forecast scenario with SPT baseline · ref: Figma node 40000020:80442
        </p>
        <Table columns={columns} data={REVENUE_DATA} caption="Revenue by forecast scenario" />
      </div>;
  }
}`,...(Ae=(Te=D.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};const at=["Default","WithRowSelection","Variants","CellTypes","TokenReference","VarianceBadgeCell","SRPAccountOverviewHeadcount","TimesheetWeek","TimesheetQuarter","TimesheetReconciliation","SRPAccountOverviewRevenue"];export{R as CellTypes,z as Default,N as SRPAccountOverviewHeadcount,D as SRPAccountOverviewRevenue,I as TimesheetQuarter,B as TimesheetReconciliation,C as TimesheetWeek,H as TokenReference,k as VarianceBadgeCell,A as Variants,T as WithRowSelection,at as __namedExportsOrder,rt as default};
