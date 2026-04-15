import{r as w,R as e}from"./index-CwcVQgaJ.js";import{T as f}from"./Table-D-4wpAV3.js";import{B as E,b as Le}from"./Badge-BHK3eREH.js";import{A as P}from"./Avatar-BlIaFzw_.js";import{B as Ge}from"./Button-CmDDSjyA.js";import{I as Je}from"./Input-BLwq4NQE.js";import{T as Ke}from"./TimesheetCell-DZfKXICe.js";import{T as qe}from"./Toggle-WRhNAhHb.js";import{T as Xe}from"./Tabs-C2izdUid.js";import{A as Q,a as U,b as j,c as L}from"./Accordion-DC2S8UG-.js";import"./chevron-down-ybap-uea.js";const x=[{id:"INV-001",customer:"Acme Corp",email:"billing@acme.com",amount:1250,status:"paid",date:"2024-01-15"},{id:"INV-002",customer:"Globex Ltd",email:"accounts@globex.com",amount:875.5,status:"pending",date:"2024-01-18"},{id:"INV-003",customer:"Initech Inc",email:"finance@initech.com",amount:3200,status:"paid",date:"2024-01-20"},{id:"INV-004",customer:"Umbrella Corp",email:"ap@umbrella.com",amount:450.75,status:"overdue",date:"2024-01-05"},{id:"INV-005",customer:"Massive Dynamics",email:"billing@massive.com",amount:2100,status:"paid",date:"2024-01-22"},{id:"INV-006",customer:"Soylent Corp",email:"accounts@soylent.com",amount:690,status:"pending",date:"2024-01-24"},{id:"INV-007",customer:"Initrode",email:"info@initrode.com",amount:5450,status:"paid",date:"2024-01-26"}],G={paid:e.createElement(E,{variant:"success"},"Paid"),pending:e.createElement(E,{variant:"caution"},"Pending"),overdue:e.createElement(E,{variant:"destructive"},"Overdue")},J=n=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n),vt={title:"Design Tokens/Table",component:f,parameters:{layout:"fullscreen",docs:{description:{component:"Table component — sortable columns, row selection, striped/compact variants. Built on semantic <table> element."}}}},A={name:"Default",render:()=>{const n=[{key:"id",label:"Invoice",sortable:!0},{key:"customer",label:"Customer",sortable:!0},{key:"email",label:"Email",muted:!0},{key:"date",label:"Date",sortable:!0},{key:"status",label:"Status",render:c=>G[c]},{key:"amount",label:"Amount",align:"right",sortable:!0,render:c=>J(c)}],[t,o]=w.useState("date"),[l,r]=w.useState("desc"),a=[...x].sort((c,m)=>{const b=c[t]<m[t]?-1:c[t]>m[t]?1:0;return l==="asc"?b:-b});return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:24}},"Invoices"),e.createElement(f,{columns:n,data:a,sortKey:t,sortDir:l,onSort:(c,m)=>{o(c),r(m)},footer:e.createElement("span",{className:"table-footer__info"},"Showing ",a.length," of ",a.length," results")}))}},_={name:"With Row Selection",render:()=>{const n=[{key:"id",label:"Invoice"},{key:"customer",label:"Customer"},{key:"date",label:"Date",muted:!0},{key:"status",label:"Status",render:l=>G[l]},{key:"amount",label:"Amount",align:"right",render:l=>J(l)}],[t,o]=w.useState(new Set);return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:8}},"Row Selection"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:24}},t.size===0?"Click rows or use checkboxes to select.":`${t.size} row${t.size>1?"s":""} selected.`),e.createElement(f,{columns:n,data:x,selectedRows:t,onRowSelect:o}))}},N={name:"Variants",render:()=>{const n=[{key:"id",label:"Invoice"},{key:"customer",label:"Customer"},{key:"status",label:"Status",render:o=>G[o]},{key:"amount",label:"Amount",align:"right",render:o=>J(o)}],t=({title:o,children:l})=>e.createElement("div",{style:{marginBottom:40}},e.createElement("h3",{style:{fontSize:13,fontWeight:700,color:"#111827",margin:"0 0 16px",textTransform:"uppercase",letterSpacing:"0.06em"}},o),l);return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:40}},"Table Variants"),e.createElement(t,{title:"Default"},e.createElement(f,{columns:n,data:x.slice(0,4)})),e.createElement(t,{title:"Striped"},e.createElement(f,{columns:n,data:x.slice(0,4),variant:"striped"})),e.createElement(t,{title:"Compact"},e.createElement(f,{columns:n,data:x.slice(0,4),variant:"compact"})),e.createElement(t,{title:"Empty state"},e.createElement(f,{columns:n,data:[]})))}},q=[{id:1,avatar:null,firstName:"Elena",lastName:"Morris",role:"Frontend Developer",rate:1200,status:"active",action:"View",tag:"Design",location:"New York",photoUrl:"https://i.pravatar.cc/40?img=47",notes:""},{id:2,avatar:null,firstName:"James",lastName:"Carter",role:"Backend Engineer",rate:1500,status:"pending",action:"Review",tag:"Engineering",location:"London",photoUrl:"https://i.pravatar.cc/40?img=12",notes:""},{id:3,avatar:null,firstName:"Sofia",lastName:"Reyes",role:"Product Designer",rate:1100,status:"inactive",action:"Edit",tag:"Design",location:"Berlin",photoUrl:"https://i.pravatar.cc/40?img=32",notes:""},{id:4,avatar:null,firstName:"Marcus",lastName:"Webb",role:"Data Analyst",rate:950,status:"active",action:"View",tag:"Analytics",location:"Toronto",photoUrl:"https://i.pravatar.cc/40?img=59",notes:""}],Ye={active:e.createElement(E,{variant:"success"},"Active"),pending:e.createElement(E,{variant:"caution"},"Pending"),inactive:e.createElement(E,{variant:"secondary"},"Inactive")},Ze=()=>e.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"}),e.createElement("circle",{cx:"12",cy:"9",r:"2.5"})),C={name:"Cell Types",render:()=>{const[n,t]=w.useState(Object.fromEntries(q.map(r=>[r.id,r.notes]))),o=[{key:"person",label:"Person",render:(r,a)=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:10}},e.createElement(P,{size:"8",initials:`${a.firstName[0]}${a.lastName[0]}`}),e.createElement("div",null,e.createElement("div",{style:{fontWeight:600,fontSize:13,color:"var(--color-base-foreground, #1f1f21)",lineHeight:1.3}},a.firstName," ",a.lastName),e.createElement("div",{style:{fontSize:11,color:"var(--color-base-muted-foreground, #91959f)",lineHeight:1.3}},a.role)))},{key:"rate",label:"Rate / mo",align:"right",render:(r,a)=>e.createElement("span",{style:{fontWeight:600,fontSize:13}},new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(a.rate))},{key:"status",label:"Status",render:(r,a)=>Ye[a.status]},{key:"action",label:"Action",render:(r,a)=>e.createElement(Ge,{variant:"outline",size:"sm"},a.action)},{key:"location",label:"Location",render:(r,a)=>e.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:5,fontSize:13,color:"var(--color-base-muted-foreground, #91959f)"}},e.createElement(Ze,null),a.location)},{key:"tag",label:"Team",render:(r,a)=>e.createElement("span",{style:{fontSize:13,color:"var(--color-base-foreground, #1f1f21)"}},a.tag)},{key:"photo",label:"Photo",render:(r,a)=>e.createElement(P,{size:"8",src:a.photoUrl,alt:`${a.firstName} ${a.lastName}`})},{key:"notes",label:"Notes",width:180,render:(r,a)=>e.createElement(Je,{placeholder:"Add a note…",value:n[a.id],onChange:c=>t(m=>({...m,[a.id]:c.target.value})),style:{minWidth:150}})},{key:"variance",label:"Variance",align:"center",render:(r,a)=>a.id===2?e.createElement(v,{badge:"-20%",value:"$0.00",muted:!0}):e.createElement("span",{style:{fontSize:13,color:"var(--color-base-muted-foreground, #91959f)"}},"—")}],l=q.map(r=>({...r,person:r.id,photo:r.id,notes:r.id}));return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:8}},"Cell Types"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:24}},"Demonstration of all Table / Cell component types from the Figma DS."),e.createElement(f,{columns:o,data:l}))}},z={name:"Token Reference",render:()=>{const n=[{element:"Wrapper border",token:"--color-base-border",value:"#d9dade"},{element:"Header background",token:"--color-base-muted",value:"#f7f8f8"},{element:"Header text",token:"--color-base-muted-foreground",value:"#91959f"},{element:"Row text",token:"--color-base-foreground",value:"#1f1f21"},{element:"Row hover bg",token:"--color-base-muted",value:"#f7f8f8"},{element:"Row divider",token:"--color-base-border",value:"#d9dade"},{element:"Selected row",token:"(hardcoded)",value:"#eef5fb"},{element:"Sort active",token:"--color-base-primary",value:"#0069b4"}],t={textAlign:"left",padding:"8px 12px",fontSize:10,fontWeight:700,color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.06em",borderBottom:"2px solid #e5e7eb"},o={padding:"10px 12px",fontSize:12,borderBottom:"1px solid #f3f4f6",verticalAlign:"middle"},l=r=>e.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:6}},e.createElement("span",{style:{width:12,height:12,borderRadius:2,background:r,border:"1px solid rgba(0,0,0,0.12)",flexShrink:0}}),e.createElement("span",{style:{fontFamily:"monospace",fontSize:11}},r));return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:24}},"Token Reference"),e.createElement("div",{style:{marginBottom:24,padding:12,background:"#f9fafb",borderRadius:8,fontSize:12,color:"#374151"}},e.createElement("strong",null,"Cell padding:")," 10px 20px (default) · 6px 20px (compact)",e.createElement("br",null),e.createElement("strong",null,"Font:")," 14px/400 body · 12px/700 header",e.createElement("br",null),e.createElement("strong",null,"Border radius:")," 8px (wrapper) · Border: 1px solid #d9dade"),e.createElement("table",{style:{width:"100%",borderCollapse:"collapse"}},e.createElement("thead",null,e.createElement("tr",null,["Element","Token","Value"].map(r=>e.createElement("th",{key:r,style:t},r)))),e.createElement("tbody",null,n.map(({element:r,token:a,value:c},m)=>e.createElement("tr",{key:r,style:{background:m%2===0?"#fafafa":"#fff"}},e.createElement("td",{style:{...o,fontWeight:600,color:"#111827"}},r),e.createElement("td",{style:{...o,fontFamily:"monospace",fontSize:11,color:"#6b7280"}},a),e.createElement("td",{style:o},l(c)))))))}},O=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],$e=[{scenario:"optimistic",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:185,Sep:185,Oct:185,Nov:185,Dec:185},{scenario:"realistic",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:185,Sep:185,Oct:185,Nov:185,Dec:185},{scenario:"pessimistic",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:185,Sep:185,Oct:185,Nov:185,Dec:185}],M=[{scenario:"spt",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:185,Sep:185,Oct:185,Nov:185,Dec:185,variance:null},{scenario:"optimistic",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:0,Sep:185,Oct:185,Nov:185,Dec:185,variance:{month:"Aug",label:"-20%"}},{scenario:"realistic",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:185,Sep:185,Oct:185,Nov:185,Dec:185,variance:null},{scenario:"pessimistic",Jan:194,Feb:194,Mar:194,Apr:194,May:194,Jun:194,Jul:194,Aug:194,Sep:194,Oct:194,Nov:194,Dec:194,variance:null}];function R({scenario:n}){return n==="spt"?e.createElement("strong",{style:{fontSize:14,fontWeight:700,color:"var(--color-base-foreground, #1f1f21)"}},"SPT"):n==="target"?e.createElement("strong",{style:{fontSize:14,fontWeight:700,color:"var(--color-base-foreground, #1f1f21)"}},"Target"):e.createElement(Le,{variant:n})}function v({badge:n,value:t,muted:o=!1}){return e.createElement("div",{style:{display:"inline-flex",flexDirection:"column",alignItems:"center",gap:4}},e.createElement("span",{style:{display:"inline-block",background:"var(--color-status-warning-icon, #ea580c)",color:"#fff",fontSize:11,fontWeight:700,borderRadius:9999,padding:"1px 7px",lineHeight:"18px",whiteSpace:"nowrap"}},n),e.createElement("span",{style:{fontSize:13,color:o?"var(--color-base-muted-foreground, #91959f)":"inherit"}},t))}const W={name:"SRP / Account Overview — Headcount Revenue",render:()=>{const n=[{key:"scenario",label:"",width:140,render:t=>e.createElement(R,{scenario:t})},...O.map(t=>({key:t,label:t,align:"right",render:o=>e.createElement("span",{style:{fontSize:13}},o)}))];return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:4}},"SRP Account Overview — Headcount"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:24}},"Headcount by forecast scenario · ref: Figma node 40000020:80356"),e.createElement(f,{columns:n,data:$e,caption:"Headcount by forecast scenario"}))}},et=["Feb 1","Feb 2","Feb 3","Feb 4","Feb 5","Feb 6","Feb 7"],De=Array.from({length:28},(n,t)=>`Feb ${t+1}`),Pe=new Set([1,7,8,14,15,21,22,28]);function p(n={}){const t={};for(let o=1;o<=28;o++){const l=`Feb ${o}`;t[l]=Pe.has(o)?null:l in n?n[l]:8}return t}function H(n={}){const t={};for(let o=1;o<=28;o++){const l=`Feb ${o}`;t[l]=Pe.has(o)?null:l in n?n[l]:"100%"}return t}const tt=[{id:1,name:"David Rayan",role:"Senior Frontend Engineer",sources:[{source:"SuitProjects Pro",rate:"$90",dayHours:p(),weeklyTotalHours:"40h",weeklyTotalRevenue:"$3,600",monthlyTotalHours:"160h",monthlyTotalRevenue:"$14,400"},{source:"Invoice",rate:"$90",dayHours:p({"Feb 5":0,"Feb 19":0}),weeklyTotalHours:"32h",weeklyTotalRevenue:"$2,880",monthlyTotalHours:"144h",monthlyTotalRevenue:"$12,960"},{source:"Client CSV",rate:"$90",dayHours:p({"Feb 4":0,"Feb 25":0}),weeklyTotalHours:"32h",weeklyTotalRevenue:"$2,880",monthlyTotalHours:"144h",monthlyTotalRevenue:"$12,960"}],dayAssignPct:H({"Feb 4":"80%","Feb 5":"75%","Feb 18":"80%","Feb 19":"75%"})},{id:2,name:"Sofia Reyes",role:"Product Designer",sources:[{source:"SuitProjects Pro",rate:"$85",dayHours:p({"Feb 3":0,"Feb 17":0}),weeklyTotalHours:"32h",weeklyTotalRevenue:"$2,720",monthlyTotalHours:"144h",monthlyTotalRevenue:"$12,240"},{source:"Invoice",rate:"$85",dayHours:p(),weeklyTotalHours:"40h",weeklyTotalRevenue:"$3,400",monthlyTotalHours:"160h",monthlyTotalRevenue:"$13,600"},{source:"Client CSV",rate:"$85",dayHours:p(),weeklyTotalHours:"40h",weeklyTotalRevenue:"$3,400",monthlyTotalHours:"160h",monthlyTotalRevenue:"$13,600"}],dayAssignPct:H({"Feb 3":"33%","Feb 17":"33%"})},{id:3,name:"James Carter",role:"Backend Engineer",sources:[{source:"SuitProjects Pro",rate:"$110",dayHours:p(),weeklyTotalHours:"40h",weeklyTotalRevenue:"$4,400",monthlyTotalHours:"160h",monthlyTotalRevenue:"$17,600"},{source:"Invoice",rate:"$110",dayHours:p(),weeklyTotalHours:"40h",weeklyTotalRevenue:"$4,400",monthlyTotalHours:"160h",monthlyTotalRevenue:"$17,600"},{source:"Client CSV",rate:"$110",dayHours:p(),weeklyTotalHours:"40h",weeklyTotalRevenue:"$4,400",monthlyTotalHours:"160h",monthlyTotalRevenue:"$17,600"}],dayAssignPct:H()},{id:4,name:"Elena Morris",role:"Frontend Developer",sources:[{source:"SuitProjects Pro",rate:"$85",dayHours:p({"Feb 4":0,"Feb 13":0}),weeklyTotalHours:"32h",weeklyTotalRevenue:"$2,720",monthlyTotalHours:"144h",monthlyTotalRevenue:"$12,240"},{source:"Invoice",rate:"$85",dayHours:p({"Feb 4":0}),weeklyTotalHours:"32h",weeklyTotalRevenue:"$2,720",monthlyTotalHours:"152h",monthlyTotalRevenue:"$12,920"},{source:"Client CSV",rate:"$85",dayHours:p({"Feb 4":0}),weeklyTotalHours:"32h",weeklyTotalRevenue:"$2,720",monthlyTotalHours:"152h",monthlyTotalRevenue:"$12,920"}],dayAssignPct:H({"Feb 4":"0%","Feb 13":"50%"})}];function nt(n,t,o){const l=[],r=o==="week";for(const a of n){const[c,m]=a.sources,b={};for(const d of t){const y=c.dayHours[d],u=m.dayHours[d];if(y===null||u===null){b[d]=null;continue}const g=u-y;b[d]=g===0?"—":g>0?`+${g}h`:`${g}h`}const h={_assigneeId:a.id,_name:a.name,_role:a.role};a.sources.forEach((d,y)=>{const u=t.some(g=>d.dayHours[g]===0);l.push({...h,_type:"source",_isFirstInGroup:y===0,_hasDiscrepancy:u,source:d.source,rate:d.rate,totalHours:r?d.weeklyTotalHours:d.monthlyTotalHours,totalRevenue:r?d.weeklyTotalRevenue:d.monthlyTotalRevenue,_hours:d.dayHours})}),l.push({...h,_type:"assignmentPct",_isFirstInGroup:!1,source:"Assignment %",rate:"—",totalHours:"—",totalRevenue:"—",_pct:a.dayAssignPct});const k=parseInt(r?m.weeklyTotalHours:m.monthlyTotalHours),s=parseInt(r?c.weeklyTotalHours:c.monthlyTotalHours),i=k-s;l.push({...h,_type:"variance",_isFirstInGroup:!1,source:"Variance",rate:"—",totalRevenue:"—",totalHours:i===0?"—":i>0?`+${i}h`:`${i}h`,_variance:b})}return l}const I={name:"Timesheet — Reconciliation",render:()=>{function n(){const[t,o]=w.useState("week"),l=t==="week"?et:De,r=nt(tt,l,t),a=s=>!s||s==="—"?"var(--color-base-muted-foreground, #91959f)":s.startsWith("+")?"var(--color-status-success-foreground, #16a34a)":s.startsWith("-")?"var(--color-base-destructive, #dc2626)":"var(--color-base-muted-foreground, #91959f)";function c({hours:s}){return s===null?e.createElement("span",{style:{color:"var(--color-base-border, #d9dade)",fontSize:12,userSelect:"none"}},"—"):s===0?e.createElement("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:22,borderRadius:4,border:"1.5px dashed var(--color-base-destructive, #dc2626)",color:"var(--color-base-destructive, #dc2626)",fontSize:11,fontWeight:700,lineHeight:1}},"0"):e.createElement("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:22,borderRadius:4,background:"var(--color-status-success-background, #dcfce7)",color:"var(--color-status-success-foreground, #16a34a)",fontSize:12,fontWeight:700,lineHeight:1}},s)}const m=[{key:"assignee",label:"Assignee",sticky:"left",width:180,render:(s,i)=>i._isFirstInGroup?e.createElement("div",{style:{display:"flex",alignItems:"center",gap:9}},e.createElement(P,{size:"8"}),e.createElement("div",{style:{minWidth:0}},e.createElement("div",{style:{fontWeight:600,fontSize:13,color:"var(--color-base-foreground, #1f1f21)",lineHeight:1.35,whiteSpace:"nowrap"}},i._name),e.createElement("div",{style:{fontSize:11,color:"var(--color-base-muted-foreground, #91959f)",lineHeight:1.35,whiteSpace:"nowrap"}},i._role))):null},{key:"source",label:"Source",sticky:"left",width:148,render:(s,i)=>i._type==="variance"?e.createElement("span",{style:{fontSize:12,fontWeight:400,color:"var(--color-base-muted-foreground, #91959f)"}},s):i._type==="assignmentPct"?e.createElement("span",{style:{fontSize:12,fontWeight:400,color:"var(--color-base-muted-foreground, #91959f)"}},s):e.createElement("span",{style:{fontSize:12,fontWeight:400,color:"var(--color-base-muted-foreground, #91959f)"}},s)},{key:"rate",label:"Rate",sticky:"left",width:52,render:(s,i)=>i._type!=="source"?null:e.createElement("span",{style:{fontSize:12,color:"var(--color-base-muted-foreground, #91959f)"}},s)},...l.map(s=>({key:s,label:s,align:"center",width:66,render:(i,d)=>{if(d._type==="source")return e.createElement(c,{hours:d._hours[s]});if(d._type==="assignmentPct"){const y=d._pct[s];return y===null?e.createElement("span",{style:{color:"var(--color-base-border, #d9dade)",fontSize:12}},"—"):e.createElement("span",{style:{fontSize:12,fontWeight:400,color:"var(--color-base-muted-foreground, #91959f)"}},y)}if(d._type==="variance"){const y=d._variance[s];return y===null?e.createElement("span",{style:{color:"var(--color-base-border, #d9dade)",fontSize:12}},"—"):y==="—"?e.createElement("span",{style:{color:"var(--color-base-muted-foreground, #91959f)",fontSize:12}},"—"):e.createElement("span",{style:{fontSize:12,fontWeight:700,color:a(y)}},y)}return null}})),{key:"totalHours",label:"Total Hrs",align:"right",sticky:"right",width:84,render:(s,i)=>i._type==="assignmentPct"?e.createElement("span",{style:{fontSize:12,color:"var(--color-base-muted-foreground, #91959f)"}},"—"):e.createElement("span",{style:{fontSize:12,fontWeight:600,color:i._type==="variance"?a(s):"var(--color-base-foreground, #1f1f21)"}},s)},{key:"totalRevenue",label:"Revenue",align:"right",sticky:"right",width:100,render:(s,i)=>i._type!=="source"?e.createElement("span",{style:{fontSize:12,color:"var(--color-base-muted-foreground, #91959f)"}},"—"):e.createElement("span",{style:{fontSize:12,fontWeight:600,color:"var(--color-base-foreground, #1f1f21)"}},s)}],b=s=>{const i=[];return s._isFirstInGroup&&i.push("is-group-start"),s._type==="assignmentPct"&&i.push("is-assign-pct"),s._type==="variance"&&i.push("is-variance"),i.join(" ")},h=s=>({padding:"5px 14px",fontSize:13,fontWeight:600,border:"1px solid var(--color-base-border, #d9dade)",borderRadius:6,cursor:"pointer",fontFamily:"inherit",background:s?"var(--color-base-primary, #0069b4)":"#fff",color:s?"#fff":"var(--color-base-foreground, #1f1f21)",transition:"background 0.15s"}),k=m.reduce((s,i)=>s+(typeof i.width=="number"?i.width:parseInt(i.width)||120),0);return e.createElement("div",{style:{fontFamily:"system-ui, sans-serif",background:"#f7f8f8"}},e.createElement("div",{style:{padding:"28px 32px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}},e.createElement("div",null,e.createElement("h2",{style:{fontSize:18,fontWeight:700,color:"#111827",margin:"0 0 3px"}},"Timesheet — Reconciliation"),e.createElement("p",{style:{fontSize:12,color:"#9ca3af",margin:0}},"SP · Invoice · Client CSV · Assignment % · Variance — ref: Figma node 141:39046")),e.createElement("div",{style:{display:"flex",gap:4}},e.createElement("button",{style:h(t==="week"),onClick:()=>o("week")},"Week"),e.createElement("button",{style:h(t==="month"),onClick:()=>o("month")},"Month"))),e.createElement("div",{style:{overflowX:"auto",margin:"0 32px 32px"}},e.createElement(Q,{type:"single",collapsible:!0,defaultValue:"project",className:"accordion--timesheets accordion--time-reports",style:{minWidth:k}},e.createElement(U,{value:"project"},e.createElement(j,null,e.createElement("div",{style:{flex:1,minWidth:0}},e.createElement("p",{className:"accordion-project__title"},"Boston Global HCP Web Experience Jan"),e.createElement("p",{className:"accordion-project__subtitle"},"Cloud and App Platforms and Engineering / Quality & Performance Engineering"))),e.createElement(L,null,e.createElement(f,{columns:m,data:r,rowClassName:b,wrapperClassName:"table-wrapper--seamless table-wrapper--recon",style:{width:k}}))))))}return e.createElement(n,null)}},F={name:"SRP / Account Overview — Revenue",render:()=>{const n=[{key:"scenario",label:"",width:140,render:t=>e.createElement(R,{scenario:t})},...O.map(t=>{const o=M.some(l=>{var r;return((r=l.variance)==null?void 0:r.month)===t});return{key:t,label:t,align:"right",className:o?"table__td--variance":"",render:(l,r)=>{var m;const a=((m=r.variance)==null?void 0:m.month)===t,c=l===0&&a;return a?e.createElement(v,{badge:r.variance.label,value:c?"$0.00":l,muted:c}):e.createElement("span",{style:{fontSize:13}},l)}}})];return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:4}},"SRP Account Overview — Revenue"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:24}},"Revenue by forecast scenario with SPT baseline · ref: Figma node 153:39076"),e.createElement(f,{columns:n,data:M,caption:"Revenue by forecast scenario"}))}},Oe=["Q1","Q2","Q3","Q4","ANNUAL"],Me=[{scenario:"target",Q1:"$1.25M",Q2:"$150.75K",Q3:"$1.10B",Q4:"$999.99K",ANNUAL:"$1.10B"},{scenario:"optimistic",Q1:{amount:"$95,432",pct:"25%"},Q2:{amount:"$98.765K",pct:"10%"},Q3:{amount:"$132.10K",pct:"00%"},Q4:{amount:"$12,345",pct:"15%"},ANNUAL:{amount:"$000.0K",pct:"00%"}},{scenario:"realistic",Q1:{amount:"$87,654",pct:"33%"},Q2:{amount:"$250.88K",pct:"15%"},Q3:{amount:"$000.0K",pct:"00%"},Q4:{amount:"$000.0K",pct:"00%"},ANNUAL:{amount:"$000.0K",pct:"00%"}},{scenario:"pessimistic",Q1:{amount:"$000.0K",pct:"00%"},Q2:{amount:"$000.0K",pct:"00%"},Q3:{amount:"$000.0K",pct:"00%"},Q4:{amount:"$000.0K",pct:"00%"},ANNUAL:{amount:"$000.0K",pct:"00%"}}],V={name:"SRP / Account Overview",render:()=>{const n=[{key:"scenario",label:"",width:140,render:t=>e.createElement(R,{scenario:t})},...Oe.map(t=>({key:t,label:t,align:"right",render:(o,l)=>l.scenario==="target"?e.createElement("span",{style:{fontSize:13}},o):e.createElement("span",{style:{fontSize:13}},o.amount," / ",e.createElement("strong",null,o.pct))}))];return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:4}},"SRP Account Overview"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:24}},"Quarterly revenue vs. target by forecast scenario · ref: Figma node 179:39925"),e.createElement(f,{columns:n,data:Me,caption:"Account Overview by forecast scenario"}))}},B={name:"SRP / Dashboard Widget",render:()=>{function n(){const[t,o]=w.useState("headcount"),[l,r]=w.useState(!0),a=()=>e.createElement("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",style:{flexShrink:0,color:"var(--color-base-muted-foreground,#91959f)"}},e.createElement("circle",{cx:"8",cy:"8",r:"7",stroke:"currentColor",strokeWidth:"1.25"}),e.createElement("path",{d:"M8 7v4",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round"}),e.createElement("circle",{cx:"8",cy:"5",r:"0.75",fill:"currentColor"})),c=()=>e.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:{flexShrink:0}},e.createElement("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),e.createElement("circle",{cx:"12",cy:"12",r:"3"})),m=[{key:"scenario",label:"",width:120,sticky:"left",render:u=>e.createElement(R,{scenario:u})},...Oe.map(u=>({key:u,label:u,align:"right",render:(g,S)=>S.scenario==="target"?e.createElement("span",{style:{fontSize:13,fontWeight:500}},g):e.createElement("span",{style:{fontSize:13}},g.amount," ",e.createElement("span",{style:{color:"var(--color-base-muted-foreground,#91959f)",fontWeight:600,fontSize:12}},g.pct))}))],b=[{key:"scenario",label:"",width:120,sticky:"left",render:u=>e.createElement(R,{scenario:u})},...O.map(u=>({key:u,label:u,align:"right",render:g=>e.createElement("span",{style:{fontSize:13}},g)}))],h=[{key:"scenario",label:"",width:120,sticky:"left",render:u=>e.createElement(R,{scenario:u})},...O.map(u=>{const g=M.some(S=>{var T;return((T=S.variance)==null?void 0:T.month)===u});return{key:u,label:u,align:"right",className:g?"table__td--variance":"",render:(S,T)=>{var K;return((K=T.variance)==null?void 0:K.month)===u?e.createElement(v,{badge:T.variance.label,value:S===0?"$0.00":S,muted:S===0}):e.createElement("span",{style:{fontSize:13}},S)}}})],k={background:"#ffffff",borderRadius:10,border:"1px solid rgba(0,0,0,0.08)",boxShadow:"0 1px 3px rgba(0,0,0,0.06)",overflow:"hidden",fontFamily:"system-ui, sans-serif"},s={display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 20px",background:"#ffffff",borderBottom:"1px solid rgba(0,0,0,0.07)",gap:16},i={display:"flex",alignItems:"flex-end",padding:"12px 16px 16px",gap:12,background:"var(--color-base-card, #ffffff)",overflowX:"auto"},d={background:"#ffffff",borderRadius:6,border:"1px solid rgba(0,0,0,0.07)",overflow:"hidden",flexShrink:0},y={display:"inline-flex",alignItems:"center",gap:6,padding:"6px 12px",borderRadius:6,border:"1px solid rgba(0,0,0,0.14)",background:"#ffffff",color:"#374151",fontSize:13,fontWeight:500,lineHeight:"20px",cursor:"pointer",fontFamily:"inherit",flexShrink:0,whiteSpace:"nowrap"};return e.createElement("div",{style:{padding:24,fontFamily:"system-ui, sans-serif",background:"#eef0f2"}},e.createElement("div",{style:k},e.createElement("div",{style:s},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:20,minWidth:0,flex:1}},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:5}},e.createElement("span",{style:{fontSize:15,fontWeight:600,color:"#1f1f21",whiteSpace:"nowrap"}},"Boston Scientific International SA"),e.createElement(a,null)),e.createElement(qe,{checked:l,onChange:r,labelRight:"Include unmapped position"})),e.createElement("button",{style:y,type:"button"},e.createElement(c,null),"Account Settings")),e.createElement("div",{style:i},e.createElement("div",{style:d},e.createElement(f,{columns:m,data:Me,wrapperClassName:"table-wrapper--seamless"})),e.createElement("div",{style:{...d,flex:1,minWidth:0}},e.createElement("div",{style:{padding:"8px 12px",borderBottom:"1px solid rgba(0,0,0,0.07)"}},e.createElement(Xe,{tabs:[{id:"headcount",label:"Headcount"},{id:"revenue",label:"Revenue"}],active:t,onChange:o,size:"sm"})),t==="headcount"?e.createElement(f,{columns:b,data:$e,wrapperClassName:"table-wrapper--seamless"}):e.createElement(f,{columns:h,data:M,wrapperClassName:"table-wrapper--seamless"})))))}return e.createElement(n,null)}},rt=["Q1","Q2","Q3","Q4"],Qe=[{id:1,name:"David Rayan",role:"Senior Frontend Engineer",rate:"$90/hr",invoice:"INV-001",billable:!0,dayHours:p({"Feb 5":0,"Feb 12":6,"Feb 26":4}),quarterly:{Q1:480,Q2:456,Q3:480,Q4:464},totalHours:"160h",totalRevenue:"$14,400"},{id:2,name:"Sofia Reyes",role:"Product Designer",rate:"$85/hr",invoice:"INV-002",billable:!0,dayHours:p({"Feb 3":0,"Feb 17":0}),quarterly:{Q1:432,Q2:440,Q3:448,Q4:440},totalHours:"144h",totalRevenue:"$12,240"},{id:3,name:"James Carter",role:"Backend Engineer",rate:"$110/hr",invoice:"INV-003",billable:!1,dayHours:p(),quarterly:{Q1:480,Q2:480,Q3:480,Q4:480},totalHours:"160h",totalRevenue:"$17,600"},{id:4,name:"Elena Morris",role:"Frontend Developer",rate:"$85/hr",invoice:"INV-004",billable:!0,dayHours:p({"Feb 4":0,"Feb 13":4}),quarterly:{Q1:456,Q2:448,Q3:464,Q4:448},totalHours:"152h",totalRevenue:"$12,920"},{id:5,name:"Marcus Webb",role:"QA Engineer",rate:"$75/hr",invoice:"INV-005",billable:!1,dayHours:p({"Feb 6":0,"Feb 20":0,"Feb 27":6}),quarterly:{Q1:360,Q2:376,Q3:360,Q4:384},totalHours:"120h",totalRevenue:"$9,000"},{id:6,name:"Priya Nair",role:"DevOps Engineer",rate:"$95/hr",invoice:"INV-006",billable:!0,dayHours:p({"Feb 10":6,"Feb 18":6}),quarterly:{Q1:504,Q2:488,Q3:496,Q4:504},totalHours:"168h",totalRevenue:"$15,960"}];function at({hours:n}){return n===null?e.createElement("span",{style:{color:"var(--color-base-border, #d9dade)",fontSize:12,userSelect:"none"}},"—"):n===0?e.createElement("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:26,height:20,borderRadius:4,border:"1.5px dashed var(--color-base-destructive, #dc2626)",color:"var(--color-base-destructive, #dc2626)",fontSize:11,fontWeight:700,lineHeight:1}},"0"):e.createElement("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:26,height:20,borderRadius:4,background:"var(--color-status-success-background, #dcfce7)",color:"var(--color-status-success-foreground, #16a34a)",fontSize:11,fontWeight:700,lineHeight:1}},n)}function ot({billable:n}){return n?e.createElement(E,{variant:"verified"},"Billable"):e.createElement(E,{variant:"secondary"},"Not Billable")}function Ue(){return[{key:"assignee",label:"Assignee",sticky:"left",width:200,render:(n,t)=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:9}},e.createElement(P,{size:"8",initials:t.name.split(" ").map(o=>o[0]).join("")}),e.createElement("div",{style:{minWidth:0}},e.createElement("div",{style:{fontWeight:600,fontSize:13,color:"var(--color-base-foreground, #1f1f21)",lineHeight:1.35,whiteSpace:"nowrap"}},t.name),e.createElement("div",{style:{fontSize:11,color:"var(--color-base-muted-foreground, #91959f)",lineHeight:1.35,whiteSpace:"nowrap"}},t.role)))},{key:"rate",label:"Rate",sticky:"left",width:70,render:(n,t)=>e.createElement("span",{style:{fontSize:12,color:"var(--color-base-muted-foreground, #91959f)",whiteSpace:"nowrap"}},t.rate)},{key:"invoice",label:"Inv.",sticky:"left",width:90,render:(n,t)=>e.createElement("span",{style:{fontSize:12,color:"var(--color-base-muted-foreground, #91959f)",whiteSpace:"nowrap"}},t.invoice)},{key:"assignment",label:"Assignment",sticky:"left",width:130,render:(n,t)=>e.createElement(ot,{billable:t.billable})}]}function je(){return[{key:"totalHours",label:"Hours",align:"right",sticky:"right",width:80,render:(n,t)=>e.createElement("span",{style:{fontSize:12,fontWeight:600,color:"var(--color-base-foreground, #1f1f21)"}},t.totalHours)},{key:"totalRevenue",label:"Revenue",align:"right",sticky:"right",width:100,render:(n,t)=>e.createElement("span",{style:{fontSize:12,fontWeight:600,color:"var(--color-base-foreground, #1f1f21)"}},t.totalRevenue)}]}const $={name:"Time Reports — Month",render:()=>{function n(){const t=De,o=[...Ue(),...t.map(r=>({key:r,label:r,align:"center",width:52,render:(a,c)=>e.createElement(at,{hours:c.dayHours[r]})})),...je()],l=o.reduce((r,a)=>r+(typeof a.width=="number"?a.width:parseInt(a.width)||120),0);return e.createElement("div",{style:{fontFamily:"system-ui, sans-serif",background:"#f7f8f8"}},e.createElement("div",{style:{padding:"28px 32px 16px"}},e.createElement("h2",{style:{fontSize:18,fontWeight:700,color:"#111827",margin:"0 0 3px"}},"Time Reports — Month"),e.createElement("p",{style:{fontSize:12,color:"#9ca3af",margin:0}},"Daily hours per assignee for February · sticky ASSIGNEE / RATE / INV. / ASSIGNMENT + HOURS / REVENUE")),e.createElement("div",{style:{overflowX:"auto",margin:"0 32px 32px"}},e.createElement(Q,{type:"single",collapsible:!0,defaultValue:"project",className:"accordion--timesheets accordion--time-reports",style:{minWidth:l}},e.createElement(U,{value:"project"},e.createElement(j,null,e.createElement("div",{style:{flex:1,minWidth:0}},e.createElement("p",{className:"accordion-project__title"},"Boston Global HCP Web Experience — February 2025"),e.createElement("p",{className:"accordion-project__subtitle"},"Cloud and App Platforms and Engineering / Quality & Performance Engineering"))),e.createElement(L,null,e.createElement(f,{columns:o,data:Qe,wrapperClassName:"table-wrapper--seamless table-wrapper--recon table-wrapper--time-reports",style:{width:l}}))))))}return e.createElement(n,null)}},D={name:"Time Reports — Quarter",render:()=>{function n(){const t=[...Ue(),...rt.map(l=>({key:l,label:l,align:"center",width:120,render:(r,a)=>e.createElement(Ke,{state:"approved",value:String(a.quarterly[l]),style:{width:52,height:28,fontSize:12,borderRadius:5}})})),...je()],o=t.reduce((l,r)=>l+(typeof r.width=="number"?r.width:parseInt(r.width)||120),0);return e.createElement("div",{style:{fontFamily:"system-ui, sans-serif",background:"#f7f8f8"}},e.createElement("div",{style:{padding:"28px 32px 16px"}},e.createElement("h2",{style:{fontSize:18,fontWeight:700,color:"#111827",margin:"0 0 3px"}},"Time Reports — Quarter"),e.createElement("p",{style:{fontSize:12,color:"#9ca3af",margin:0}},"Aggregated hours per quarter per assignee · sticky ASSIGNEE / RATE / INV. / ASSIGNMENT + HOURS / REVENUE")),e.createElement("div",{style:{overflowX:"auto",margin:"0 32px 32px"}},e.createElement(Q,{type:"single",collapsible:!0,defaultValue:"project",className:"accordion--timesheets accordion--time-reports",style:{minWidth:o}},e.createElement(U,{value:"project"},e.createElement(j,null,e.createElement("div",{style:{flex:1,minWidth:0}},e.createElement("p",{className:"accordion-project__title"},"Boston Global HCP Web Experience — FY 2025"),e.createElement("p",{className:"accordion-project__subtitle"},"Cloud and App Platforms and Engineering / Quality & Performance Engineering"))),e.createElement(L,null,e.createElement(f,{columns:t,data:Qe,wrapperClassName:"table-wrapper--seamless table-wrapper--recon table-wrapper--time-reports",style:{width:o}}))))))}return e.createElement(n,null)}};v.__docgenInfo={description:`VarianceBadgeCell — variance pill badge above a value, stacked and centered.
Use with column className "table__td--variance" (adds extra top padding to the td).`,methods:[],displayName:"VarianceBadgeCell",props:{muted:{defaultValue:{value:"false",computed:!1},required:!1}}};var X,Y,Z;A.parameters={...A.parameters,docs:{...(X=A.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=A.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;_.parameters={..._.parameters,docs:{...(ee=_.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=_.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,ae,oe;N.parameters={...N.parameters,docs:{...(re=N.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(ae=N.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var le,se,ie;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ie=(se=C.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ce,de,ue;z.parameters={...z.parameters,docs:{...(ce=z.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(de=z.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,fe,ye,ge;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`function VarianceBadgeCell({
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
}`,...(fe=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:fe.source},description:{story:`VarianceBadgeCell — stacks a variance pill badge above a value, both centered.
Used in SRP Revenue table for cells with a forecast deviation indicator.
VarianceBadgeCell — variance pill badge above a value, stacked and centered.
Use with column className "table__td--variance" (adds extra top padding to the td).`,...(ge=(ye=v.parameters)==null?void 0:ye.docs)==null?void 0:ge.description}}};var be,ve,he;W.parameters={...W.parameters,docs:{...(be=W.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'SRP / Account Overview — Headcount Revenue',
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
}`,...(he=(ve=W.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var Se,Ee,we;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Timesheet — Reconciliation',
  render: () => {
    function ReconciliationStory() {
      const [viewMode, setViewMode] = useState('week');
      const periods = viewMode === 'week' ? RECON_WEEK_DAYS : RECON_MONTH_DAYS;
      const rows = buildReconRows(RECON_ASSIGNEES, periods, viewMode);

      // ── Helpers ──────────────────────────────────────────────────────────────
      const varColor = val => {
        if (!val || val === '—') return 'var(--color-base-muted-foreground, #91959f)';
        return val.startsWith('+') ? 'var(--color-status-success-foreground, #16a34a)' : val.startsWith('-') ? 'var(--color-base-destructive, #dc2626)' : 'var(--color-base-muted-foreground, #91959f)';
      };

      // Inline day-cell for reconciliation — shows numbers, NOT state icons.
      // Valid: green pill  |  Weekend: dash  |  Zero: dashed red border
      function ReconHoursCell({
        hours
      }) {
        if (hours === null) {
          return <span style={{
            color: 'var(--color-base-border, #d9dade)',
            fontSize: 12,
            userSelect: 'none'
          }}>—</span>;
        }
        if (hours === 0) {
          return <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 28,
            height: 22,
            borderRadius: 4,
            border: '1.5px dashed var(--color-base-destructive, #dc2626)',
            color: 'var(--color-base-destructive, #dc2626)',
            fontSize: 11,
            fontWeight: 700,
            lineHeight: 1
          }}>0</span>;
        }
        return <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: 28,
          height: 22,
          borderRadius: 4,
          background: 'var(--color-status-success-background, #dcfce7)',
          color: 'var(--color-status-success-foreground, #16a34a)',
          fontSize: 12,
          fontWeight: 700,
          lineHeight: 1
        }}>{hours}</span>;
      }

      // ── Columns ──────────────────────────────────────────────────────────────
      const columns = [{
        key: 'assignee',
        label: 'Assignee',
        sticky: 'left',
        width: 180,
        render: (_, row) => row._isFirstInGroup ? <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 9
        }}>
              <Avatar size="8" />
              <div style={{
            minWidth: 0
          }}>
                <div style={{
              fontWeight: 600,
              fontSize: 13,
              color: 'var(--color-base-foreground, #1f1f21)',
              lineHeight: 1.35,
              whiteSpace: 'nowrap'
            }}>
                  {row._name}
                </div>
                <div style={{
              fontSize: 11,
              color: 'var(--color-base-muted-foreground, #91959f)',
              lineHeight: 1.35,
              whiteSpace: 'nowrap'
            }}>
                  {row._role}
                </div>
              </div>
            </div> : null
      }, {
        key: 'source',
        label: 'Source',
        sticky: 'left',
        width: 148,
        render: (val, row) => {
          if (row._type === 'variance') {
            return <span style={{
              fontSize: 12,
              fontWeight: 400,
              color: 'var(--color-base-muted-foreground, #91959f)'
            }}>
                  {val}
                </span>;
          }
          if (row._type === 'assignmentPct') {
            return <span style={{
              fontSize: 12,
              fontWeight: 400,
              color: 'var(--color-base-muted-foreground, #91959f)'
            }}>
                  {val}
                </span>;
          }
          // All source rows use the same muted style
          return <span style={{
            fontSize: 12,
            fontWeight: 400,
            color: 'var(--color-base-muted-foreground, #91959f)'
          }}>{val}</span>;
        }
      }, {
        key: 'rate',
        label: 'Rate',
        sticky: 'left',
        width: 52,
        render: (val, row) => {
          if (row._type !== 'source') return null;
          return <span style={{
            fontSize: 12,
            color: 'var(--color-base-muted-foreground, #91959f)'
          }}>{val}</span>;
        }
      }, ...periods.map(period => ({
        key: period,
        label: period,
        align: 'center',
        width: 66,
        render: (_, row) => {
          if (row._type === 'source') {
            return <ReconHoursCell hours={row._hours[period]} />;
          }
          if (row._type === 'assignmentPct') {
            const pct = row._pct[period];
            if (pct === null) {
              return <span style={{
                color: 'var(--color-base-border, #d9dade)',
                fontSize: 12
              }}>—</span>;
            }
            return <span style={{
              fontSize: 12,
              fontWeight: 400,
              color: 'var(--color-base-muted-foreground, #91959f)'
            }}>
                  {pct}
                </span>;
          }
          if (row._type === 'variance') {
            const val = row._variance[period];
            if (val === null) {
              return <span style={{
                color: 'var(--color-base-border, #d9dade)',
                fontSize: 12
              }}>—</span>;
            }
            if (val === '—') {
              return <span style={{
                color: 'var(--color-base-muted-foreground, #91959f)',
                fontSize: 12
              }}>—</span>;
            }
            return <span style={{
              fontSize: 12,
              fontWeight: 700,
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
        width: 84,
        render: (val, row) => {
          if (row._type === 'assignmentPct') {
            return <span style={{
              fontSize: 12,
              color: 'var(--color-base-muted-foreground, #91959f)'
            }}>—</span>;
          }
          return <span style={{
            fontSize: 12,
            fontWeight: 600,
            color: row._type === 'variance' ? varColor(val) : 'var(--color-base-foreground, #1f1f21)'
          }}>{val}</span>;
        }
      }, {
        key: 'totalRevenue',
        label: 'Revenue',
        align: 'right',
        sticky: 'right',
        width: 100,
        render: (val, row) => {
          if (row._type !== 'source') {
            return <span style={{
              fontSize: 12,
              color: 'var(--color-base-muted-foreground, #91959f)'
            }}>—</span>;
          }
          return <span style={{
            fontSize: 12,
            fontWeight: 600,
            color: 'var(--color-base-foreground, #1f1f21)'
          }}>
                {val}
              </span>;
        }
      }];

      // Row classes — NO row-level error; error is cell-level only (dashed red border in ReconHoursCell)
      const rowClassName = row => {
        const cls = [];
        if (row._isFirstInGroup) cls.push('is-group-start');
        if (row._type === 'assignmentPct') cls.push('is-assign-pct');
        if (row._type === 'variance') cls.push('is-variance');
        return cls.join(' ');
      };
      const btnStyle = active => ({
        padding: '5px 14px',
        fontSize: 13,
        fontWeight: 600,
        border: '1px solid var(--color-base-border, #d9dade)',
        borderRadius: 6,
        cursor: 'pointer',
        fontFamily: 'inherit',
        background: active ? 'var(--color-base-primary, #0069b4)' : '#fff',
        color: active ? '#fff' : 'var(--color-base-foreground, #1f1f21)',
        transition: 'background 0.15s'
      });
      const totalWidth = columns.reduce((s, c) => s + (typeof c.width === 'number' ? c.width : parseInt(c.width) || 120), 0);
      return <div style={{
        fontFamily: 'system-ui, sans-serif',
        background: '#f7f8f8'
      }}>
          <div style={{
          padding: '28px 32px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
            <div>
              <h2 style={{
              fontSize: 18,
              fontWeight: 700,
              color: '#111827',
              margin: '0 0 3px'
            }}>
                Timesheet — Reconciliation
              </h2>
              <p style={{
              fontSize: 12,
              color: '#9ca3af',
              margin: 0
            }}>
                SP · Invoice · Client CSV · Assignment % · Variance — ref: Figma node 141:39046
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

          <div style={{
          overflowX: 'auto',
          margin: '0 32px 32px'
        }}>
            <Accordion type="single" collapsible defaultValue="project" className="accordion--timesheets accordion--time-reports" style={{
            minWidth: totalWidth
          }}>
              <AccordionItem value="project">
                <AccordionTrigger>
                  <div style={{
                  flex: 1,
                  minWidth: 0
                }}>
                    <p className="accordion-project__title">Boston Global HCP Web Experience Jan</p>
                    <p className="accordion-project__subtitle">Cloud and App Platforms and Engineering / Quality &amp; Performance Engineering</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Table columns={columns} data={rows} rowClassName={rowClassName} wrapperClassName="table-wrapper--seamless table-wrapper--recon" style={{
                  width: totalWidth
                }} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>;
    }
    return <ReconciliationStory />;
  }
}`,...(we=(Ee=I.parameters)==null?void 0:Ee.docs)==null?void 0:we.source}}};var ke,Re,Te;F.parameters={...F.parameters,docs:{...(ke=F.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
          Revenue by forecast scenario with SPT baseline · ref: Figma node 153:39076
        </p>
        <Table columns={columns} data={REVENUE_DATA} caption="Revenue by forecast scenario" />
      </div>;
  }
}`,...(Te=(Re=F.parameters)==null?void 0:Re.docs)==null?void 0:Te.source}}};var xe,Ae,_e;V.parameters={...V.parameters,docs:{...(xe=V.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'SRP / Account Overview',
  render: () => {
    const columns = [{
      key: 'scenario',
      label: '',
      width: 140,
      render: val => <ScenarioLabel scenario={val} />
    }, ...QUARTERS_AO.map(q => ({
      key: q,
      label: q,
      align: 'right',
      render: (val, row) => {
        if (row.scenario === 'target') {
          return <span style={{
            fontSize: 13
          }}>{val}</span>;
        }
        return <span style={{
          fontSize: 13
        }}>
              {val.amount} / <strong>{val.pct}</strong>
            </span>;
      }
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
          SRP Account Overview
        </h2>
        <p style={{
        fontSize: 13,
        color: '#6b7280',
        marginBottom: 24
      }}>
          Quarterly revenue vs. target by forecast scenario · ref: Figma node 179:39925
        </p>
        <Table columns={columns} data={ACCOUNT_OVERVIEW_DATA} caption="Account Overview by forecast scenario" />
      </div>;
  }
}`,...(_e=(Ae=V.parameters)==null?void 0:Ae.docs)==null?void 0:_e.source}}};var Ne,Ce,ze;B.parameters={...B.parameters,docs:{...(Ne=B.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'SRP / Dashboard Widget',
  render: () => {
    function WidgetStory() {
      const [activeTab, setActiveTab] = useState('headcount');
      const [includeUnmapped, setUnmapped] = useState(true);

      // ── Inline SVG icons (Lucide) ──────────────────────────────────────────
      const InfoIcon = () => <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{
        flexShrink: 0,
        color: 'var(--color-base-muted-foreground,#91959f)'
      }}>
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.25" />
          <path d="M8 7v4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
          <circle cx="8" cy="5" r="0.75" fill="currentColor" />
        </svg>;

      // Lucide settings icon — https://lucide.dev/icons/settings
      const SettingsIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{
        flexShrink: 0
      }}>
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>;

      // ── Column builders ────────────────────────────────────────────────────

      // Account Overview quarterly — scenario column sticky left
      const aoColumns = [{
        key: 'scenario',
        label: '',
        width: 120,
        sticky: 'left',
        render: val => <ScenarioLabel scenario={val} />
      }, ...QUARTERS_AO.map(q => ({
        key: q,
        label: q,
        align: 'right',
        render: (val, row) => row.scenario === 'target' ? <span style={{
          fontSize: 13,
          fontWeight: 500
        }}>{val}</span> : <span style={{
          fontSize: 13
        }}>
                  {val.amount}{' '}
                  <span style={{
            color: 'var(--color-base-muted-foreground,#91959f)',
            fontWeight: 600,
            fontSize: 12
          }}>
                    {val.pct}
                  </span>
                </span>
      }))];

      // Headcount monthly — scenario column sticky left
      const headcountColumns = [{
        key: 'scenario',
        label: '',
        width: 120,
        sticky: 'left',
        render: val => <ScenarioLabel scenario={val} />
      }, ...MONTHS.map(m => ({
        key: m,
        label: m,
        align: 'right',
        render: val => <span style={{
          fontSize: 13
        }}>{val}</span>
      }))];

      // Revenue monthly — scenario column sticky left
      const revenueColumns = [{
        key: 'scenario',
        label: '',
        width: 120,
        sticky: 'left',
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
            if (hasVariance) {
              return <VarianceBadgeCell badge={row.variance.label} value={val === 0 ? '$0.00' : val} muted={val === 0} />;
            }
            return <span style={{
              fontSize: 13
            }}>{val}</span>;
          }
        };
      })];

      // ── Styles ────────────────────────────────────────────────────────────
      const cardStyle = {
        background: '#ffffff',
        borderRadius: 10,
        border: '1px solid rgba(0,0,0,0.08)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        fontFamily: 'system-ui, sans-serif'
      };
      const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 20px',
        background: '#ffffff',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        gap: 16
      };
      const bodyStyle = {
        display: 'flex',
        alignItems: 'flex-end',
        padding: '12px 16px 16px',
        gap: 12,
        background: 'var(--color-base-card, #ffffff)',
        overflowX: 'auto'
      };
      const panelStyle = {
        background: '#ffffff',
        borderRadius: 6,
        border: '1px solid rgba(0,0,0,0.07)',
        overflow: 'hidden',
        flexShrink: 0
      };
      const settingsBtnStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 12px',
        borderRadius: 6,
        border: '1px solid rgba(0,0,0,0.14)',
        background: '#ffffff',
        color: '#374151',
        fontSize: 13,
        fontWeight: 500,
        lineHeight: '20px',
        cursor: 'pointer',
        fontFamily: 'inherit',
        flexShrink: 0,
        whiteSpace: 'nowrap'
      };
      return <div style={{
        padding: 24,
        fontFamily: 'system-ui, sans-serif',
        background: '#eef0f2'
      }}>
          <div style={cardStyle}>

            {/* ── Header ── */}
            <div style={headerStyle}>
              {/* Left: title + info icon + toggle */}
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              minWidth: 0,
              flex: 1
            }}>
                <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5
              }}>
                  <span style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#1f1f21',
                  whiteSpace: 'nowrap'
                }}>
                    Boston Scientific International SA
                  </span>
                  <InfoIcon />
                </div>
                <Toggle checked={includeUnmapped} onChange={setUnmapped} labelRight="Include unmapped position" />
              </div>
              {/* Right: Account Settings with Lucide settings icon */}
              <button style={settingsBtnStyle} type="button">
                <SettingsIcon />
                Account Settings
              </button>
            </div>

            {/* ── Body ── */}
            <div style={bodyStyle}>

              {/* Left panel — Account Overview quarterly */}
              <div style={panelStyle}>
                <Table columns={aoColumns} data={ACCOUNT_OVERVIEW_DATA} wrapperClassName="table-wrapper--seamless" />
              </div>

              {/* Right panel — Headcount / Revenue monthly */}
              <div style={{
              ...panelStyle,
              flex: 1,
              minWidth: 0
            }}>
                {/* Tabs — Headcount | Revenue */}
                <div style={{
                padding: '8px 12px',
                borderBottom: '1px solid rgba(0,0,0,0.07)'
              }}>
                  <Tabs tabs={[{
                  id: 'headcount',
                  label: 'Headcount'
                }, {
                  id: 'revenue',
                  label: 'Revenue'
                }]} active={activeTab} onChange={setActiveTab} size="sm" />
                </div>
                {/* Scrollable monthly table — scenario col sticky left */}
                {activeTab === 'headcount' ? <Table columns={headcountColumns} data={HEADCOUNT_DATA} wrapperClassName="table-wrapper--seamless" /> : <Table columns={revenueColumns} data={REVENUE_DATA} wrapperClassName="table-wrapper--seamless" />}
              </div>

            </div>
          </div>
        </div>;
    }
    return <WidgetStory />;
  }
}`,...(ze=(Ce=B.parameters)==null?void 0:Ce.docs)==null?void 0:ze.source}}};var We,He,Ie;$.parameters={...$.parameters,docs:{...(We=$.parameters)==null?void 0:We.docs,source:{originalSource:`{
  name: 'Time Reports — Month',
  render: () => {
    function Story() {
      const periods = RECON_MONTH_DAYS; // ['Feb 1' … 'Feb 28']

      const columns = [...buildTRStickyLeft(), ...periods.map(day => ({
        key: day,
        label: day,
        align: 'center',
        width: 52,
        render: (_, row) => <TRHoursCell hours={row.dayHours[day]} />
      })), ...buildTRStickyRight()];
      const totalWidth = columns.reduce((s, c) => s + (typeof c.width === 'number' ? c.width : parseInt(c.width) || 120), 0);
      return <div style={{
        fontFamily: 'system-ui, sans-serif',
        background: '#f7f8f8'
      }}>
          <div style={{
          padding: '28px 32px 16px'
        }}>
            <h2 style={{
            fontSize: 18,
            fontWeight: 700,
            color: '#111827',
            margin: '0 0 3px'
          }}>
              Time Reports — Month
            </h2>
            <p style={{
            fontSize: 12,
            color: '#9ca3af',
            margin: 0
          }}>
              Daily hours per assignee for February · sticky ASSIGNEE / RATE / INV. / ASSIGNMENT + HOURS / REVENUE
            </p>
          </div>

          <div style={{
          overflowX: 'auto',
          margin: '0 32px 32px'
        }}>
            <Accordion type="single" collapsible defaultValue="project" className="accordion--timesheets accordion--time-reports" style={{
            minWidth: totalWidth
          }}>
              <AccordionItem value="project">
                <AccordionTrigger>
                  <div style={{
                  flex: 1,
                  minWidth: 0
                }}>
                    <p className="accordion-project__title">Boston Global HCP Web Experience — February 2025</p>
                    <p className="accordion-project__subtitle">Cloud and App Platforms and Engineering / Quality &amp; Performance Engineering</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Table columns={columns} data={TR_ASSIGNEES} wrapperClassName="table-wrapper--seamless table-wrapper--recon table-wrapper--time-reports" style={{
                  width: totalWidth
                }} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>;
    }
    return <Story />;
  }
}`,...(Ie=(He=$.parameters)==null?void 0:He.docs)==null?void 0:Ie.source}}};var Fe,Ve,Be;D.parameters={...D.parameters,docs:{...(Fe=D.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: 'Time Reports — Quarter',
  render: () => {
    function Story() {
      const columns = [...buildTRStickyLeft(), ...TR_QUARTER_COLS.map(q => ({
        key: q,
        label: q,
        align: 'center',
        width: 120,
        render: (_, row) => <TimesheetCell state="approved" value={String(row.quarterly[q])} style={{
          width: 52,
          height: 28,
          fontSize: 12,
          borderRadius: 5
        }} />
      })), ...buildTRStickyRight()];
      const totalWidth = columns.reduce((s, c) => s + (typeof c.width === 'number' ? c.width : parseInt(c.width) || 120), 0);
      return <div style={{
        fontFamily: 'system-ui, sans-serif',
        background: '#f7f8f8'
      }}>
          <div style={{
          padding: '28px 32px 16px'
        }}>
            <h2 style={{
            fontSize: 18,
            fontWeight: 700,
            color: '#111827',
            margin: '0 0 3px'
          }}>
              Time Reports — Quarter
            </h2>
            <p style={{
            fontSize: 12,
            color: '#9ca3af',
            margin: 0
          }}>
              Aggregated hours per quarter per assignee · sticky ASSIGNEE / RATE / INV. / ASSIGNMENT + HOURS / REVENUE
            </p>
          </div>

          <div style={{
          overflowX: 'auto',
          margin: '0 32px 32px'
        }}>
            <Accordion type="single" collapsible defaultValue="project" className="accordion--timesheets accordion--time-reports" style={{
            minWidth: totalWidth
          }}>
              <AccordionItem value="project">
                <AccordionTrigger>
                  <div style={{
                  flex: 1,
                  minWidth: 0
                }}>
                    <p className="accordion-project__title">Boston Global HCP Web Experience — FY 2025</p>
                    <p className="accordion-project__subtitle">Cloud and App Platforms and Engineering / Quality &amp; Performance Engineering</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Table columns={columns} data={TR_ASSIGNEES} wrapperClassName="table-wrapper--seamless table-wrapper--recon table-wrapper--time-reports" style={{
                  width: totalWidth
                }} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>;
    }
    return <Story />;
  }
}`,...(Be=(Ve=D.parameters)==null?void 0:Ve.docs)==null?void 0:Be.source}}};const ht=["Default","WithRowSelection","Variants","CellTypes","TokenReference","VarianceBadgeCell","SRPAccountOverviewHeadcount","TimesheetReconciliation","SRPAccountOverviewRevenue","SRPAccountOverview","SRPDashboardWidget","TimeReportsMonth","TimeReportsQuarter"];export{C as CellTypes,A as Default,V as SRPAccountOverview,W as SRPAccountOverviewHeadcount,F as SRPAccountOverviewRevenue,B as SRPDashboardWidget,$ as TimeReportsMonth,D as TimeReportsQuarter,I as TimesheetReconciliation,z as TokenReference,v as VarianceBadgeCell,N as Variants,_ as WithRowSelection,ht as __namedExportsOrder,vt as default};
