import{R as e,r as h}from"./index-CwcVQgaJ.js";import{T as A}from"./Table-D-4wpAV3.js";import{b as te}from"./Badge-CX5IaRzt.js";import{T as ae}from"./Toggle-WRhNAhHb.js";import{T as R}from"./Tabs-C2izdUid.js";const ye={title:"Design Tokens/Widgets",parameters:{layout:"fullscreen",docs:{description:{component:"Dashboard widget components for the SRP (Sales Revenue Projections) design system. Ref: Figma DS–Sales Revenue Projections."}}}},z=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],$=["Q1","Q2","Q3","Q4","ANNUAL"],re=[{scenario:"optimistic",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:185,Sep:185,Oct:185,Nov:185,Dec:185},{scenario:"realistic",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:185,Sep:185,Oct:185,Nov:185,Dec:185},{scenario:"pessimistic",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:185,Sep:185,Oct:185,Nov:185,Dec:185}],H=[{scenario:"spt",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:185,Sep:185,Oct:185,Nov:185,Dec:185,variance:null},{scenario:"optimistic",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:0,Sep:185,Oct:185,Nov:185,Dec:185,variance:{month:"Aug",label:"-20%"}},{scenario:"realistic",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:185,Sep:185,Oct:185,Nov:185,Dec:185,variance:null},{scenario:"pessimistic",Jan:194,Feb:194,Mar:194,Apr:194,May:194,Jun:194,Jul:194,Aug:194,Sep:194,Oct:194,Nov:194,Dec:194,variance:null}],J=[{scenario:"target",Q1:"$1.25M",Q2:"$150.75K",Q3:"$1.10B",Q4:"$999.99K",ANNUAL:"$1.10B"},{scenario:"optimistic",Q1:{amount:"$95,432",pct:"25%"},Q2:{amount:"$98.765K",pct:"10%"},Q3:{amount:"$132.10K",pct:"00%"},Q4:{amount:"$12,345",pct:"15%"},ANNUAL:{amount:"$000.0K",pct:"00%"}},{scenario:"realistic",Q1:{amount:"$87,654",pct:"33%"},Q2:{amount:"$250.88K",pct:"15%"},Q3:{amount:"$000.0K",pct:"00%"},Q4:{amount:"$000.0K",pct:"00%"},ANNUAL:{amount:"$000.0K",pct:"00%"}},{scenario:"pessimistic",Q1:{amount:"$000.0K",pct:"00%"},Q2:{amount:"$000.0K",pct:"00%"},Q3:{amount:"$000.0K",pct:"00%"},Q4:{amount:"$000.0K",pct:"00%"},ANNUAL:{amount:"$000.0K",pct:"00%"}}];function w({scenario:t}){return t==="spt"?e.createElement("strong",{style:{fontSize:14,fontWeight:700,color:"var(--color-base-foreground,#1f1f21)"}},"SPT"):t==="target"?e.createElement("strong",{style:{fontSize:14,fontWeight:700,color:"var(--color-base-foreground,#1f1f21)"}},"Target"):e.createElement(te,{variant:t})}function ne({badge:t,value:r,muted:i=!1}){return e.createElement("div",{style:{display:"inline-flex",flexDirection:"column",alignItems:"center",gap:4}},e.createElement("span",{style:{display:"inline-block",background:"var(--color-status-warning-icon,#ea580c)",color:"#fff",fontSize:11,fontWeight:700,borderRadius:9999,padding:"1px 7px",lineHeight:"18px",whiteSpace:"nowrap"}},t),e.createElement("span",{style:{fontSize:13,color:i?"var(--color-base-muted-foreground,#91959f)":"inherit"}},r))}const ie=()=>e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",style:{flexShrink:0,color:"var(--color-base-muted-foreground,#91959f)"}},e.createElement("circle",{cx:"8",cy:"8",r:"7",stroke:"currentColor",strokeWidth:"1.25"}),e.createElement("path",{d:"M8 7v4",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round"}),e.createElement("circle",{cx:"8",cy:"5",r:"0.75",fill:"currentColor"})),se=()=>e.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:{flexShrink:0}},e.createElement("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),e.createElement("circle",{cx:"12",cy:"12",r:"3"})),m={card:{background:"#ffffff",borderRadius:12,border:"1px solid rgba(1,1,46,0.08)",boxShadow:"0 1px 2px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.10)",overflow:"hidden",fontFamily:"'Source Sans Pro','Source Sans 3',system-ui,sans-serif"},header:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 24px",background:"var(--color-base-card,#fcfcfc)",borderBottom:"1px solid rgba(1,1,46,0.08)",gap:24},body:{padding:"16px 24px 24px",background:"var(--color-base-card,#fcfcfc)",overflow:"hidden"},panelsRow:{display:"flex",alignItems:"flex-end",gap:56},panel:{background:"#ffffff",borderRadius:6,border:"1px solid rgba(0,0,0,0.07)",overflow:"hidden",flexShrink:0},settingsBtn:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 16px",borderRadius:6,border:"1px solid var(--color-base-primary,#0069b4)",background:"#ffffff",color:"var(--color-base-primary,#0069b4)",fontSize:14,fontWeight:400,lineHeight:"20px",cursor:"pointer",fontFamily:"inherit",flexShrink:0,whiteSpace:"nowrap",minHeight:40}};function K({includeUnmapped:t,onToggle:r}){return e.createElement("div",{style:m.header},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:32,minWidth:0,flex:1,flexWrap:"wrap"}},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,flexShrink:0}},e.createElement("span",{style:{fontSize:24,fontWeight:600,color:"var(--color-base-foreground,#1f1f21)",lineHeight:"140%",whiteSpace:"nowrap"}},"Boston Scientific International SA"),e.createElement(ie,null)),e.createElement(ae,{checked:t,onChange:r,labelRight:"Include unmapped position"})),e.createElement("button",{style:m.settingsBtn,type:"button"},e.createElement(se,null),"Account Settings"))}function j({activeTab:t,onTabChange:r,showTabs:i=!0}){const c=[{key:"scenario",label:"",width:120,sticky:"left",render:n=>e.createElement(w,{scenario:n})},...z.map(n=>({key:n,label:n,align:"right",render:d=>e.createElement("span",{style:{fontSize:13}},d)}))],g=[{key:"scenario",label:"",width:120,sticky:"left",render:n=>e.createElement(w,{scenario:n})},...z.map(n=>{const d=H.some(s=>{var o;return((o=s.variance)==null?void 0:o.month)===n});return{key:n,label:n,align:"right",className:d?"table__td--variance":"",render:(s,o)=>{var p;return((p=o.variance)==null?void 0:p.month)===n?e.createElement(ne,{badge:o.variance.label,value:s===0?"$0.00":s,muted:s===0}):e.createElement("span",{style:{fontSize:13}},s)}}})];return e.createElement("div",{style:{...m.panel,flex:1,minWidth:0,flexShrink:1}},i&&e.createElement("div",{style:{padding:"8px 12px",borderBottom:"1px solid rgba(0,0,0,0.07)"}},e.createElement(R,{tabs:[{id:"headcount",label:"Headcount"},{id:"revenue",label:"Revenue"}],active:t,onChange:r,size:"sm"})),t==="headcount"?e.createElement(A,{columns:c,data:re,wrapperClassName:"table-wrapper--seamless"}):e.createElement(A,{columns:g,data:H,wrapperClassName:"table-wrapper--seamless"}))}const q=[{period:"Q1",optimistic:194,realistic:181,pessimistic:163,target:190},{period:"Q2",optimistic:198,realistic:183,pessimistic:160,target:195},{period:"Q3",optimistic:210,realistic:185,pessimistic:152,target:205},{period:"Q4",optimistic:222,realistic:185,pessimistic:138,target:212}],u={optimistic:"#3d854e",realistic:"#d9993a",pessimistic:"#ce4e45",target:"#005999"},oe={optimistic:"#e8f5ec",realistic:"#fdf3e0",pessimistic:"#fce8e7"};function le({data:t=q}){const p=[50,100,150,200],v=276/t.length,k=16,C=3,G=(v-3*k-2*C)/2,f=a=>126-a/240*118,W=a=>36+a*v,X=(a,l)=>W(a)+G+l*(k+C),Y=a=>a/240*118,D=t.map((a,l)=>[W(l)+v/2,f(a.target)]);return e.createElement("svg",{width:"100%",height:148,viewBox:"0 0 320 148","aria-label":"Quarterly headcount projections by forecast scenario",style:{display:"block"}},p.map(a=>e.createElement("line",{key:a,x1:36,y1:f(a),x2:312,y2:f(a),stroke:"#e5e7eb",strokeWidth:.75})),e.createElement("line",{x1:36,y1:f(0),x2:312,y2:f(0),stroke:"#d1d5db",strokeWidth:.75}),p.map(a=>e.createElement("text",{key:a,x:32,y:f(a)+3.5,textAnchor:"end",fontSize:8,fontFamily:"'Source Sans Pro',system-ui,sans-serif",fill:"#9ca3af"},a)),t.map((a,l)=>{const b=l>=2,Z=[{key:"optimistic",bi:0,val:a.optimistic},{key:"realistic",bi:1,val:a.realistic},{key:"pessimistic",bi:2,val:a.pessimistic}];return e.createElement("g",{key:a.period},Z.map(({key:S,bi:ee,val:P})=>e.createElement("rect",{key:S,x:X(l,ee),y:f(P),width:k,height:Y(P),rx:2,fill:b?oe[S]:u[S],stroke:b?u[S]:"none",strokeWidth:b?1.5:0})))}),e.createElement("polyline",{points:D.map(([a,l])=>`${a},${l}`).join(" "),fill:"none",stroke:u.target,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),D.map(([a,l],b)=>e.createElement("circle",{key:b,cx:a,cy:l,r:3,fill:u.target})),t.map((a,l)=>e.createElement("text",{key:a.period,x:W(l)+v/2,y:142,textAnchor:"middle",fontSize:9,fontFamily:"'Source Sans Pro',system-ui,sans-serif",fontWeight:"600",fill:"#6b7280"},a.period)))}function ce(){const t=[{key:"optimistic",label:"Optimistic",type:"bar"},{key:"realistic",label:"Realistic",type:"bar"},{key:"pessimistic",label:"Pessimistic",type:"bar"},{key:"target",label:"Target",type:"line"}];return e.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px 14px",marginTop:8}},t.map(({key:r,label:i,type:c})=>e.createElement("div",{key:r,style:{display:"flex",alignItems:"center",gap:5}},c==="bar"?e.createElement("span",{style:{width:10,height:10,borderRadius:2,background:u[r],flexShrink:0}}):e.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:2,flexShrink:0}},e.createElement("span",{style:{width:14,height:2,background:u[r],borderRadius:2}}),e.createElement("span",{style:{width:4,height:4,borderRadius:"50%",background:u[r]}})),e.createElement("span",{style:{fontSize:11,fontFamily:"'Source Sans Pro','Source Sans 3',system-ui,sans-serif",color:"var(--color-base-muted-foreground,#91959f)"}},i))))}const x={name:"SRP / Dashboard Widget",render:()=>{function t(){const[r,i]=h.useState("headcount"),[c,g]=h.useState(!0),n=[{key:"scenario",label:"",width:120,sticky:"left",render:d=>e.createElement(w,{scenario:d})},...$.map(d=>({key:d,label:d,align:"right",render:(s,o)=>o.scenario==="target"?e.createElement("span",{style:{fontSize:13,fontWeight:500}},s):e.createElement("span",{style:{fontSize:13}},s.amount," ",e.createElement("span",{style:{color:"var(--color-base-muted-foreground,#91959f)",fontWeight:600,fontSize:12}},s.pct))}))];return e.createElement("div",{style:{padding:24,background:"#eef0f2",fontFamily:"'Source Sans Pro','Source Sans 3',system-ui,sans-serif"}},e.createElement("div",{style:m.card},e.createElement(K,{includeUnmapped:c,onToggle:g}),e.createElement("div",{style:m.body},e.createElement("div",{style:m.panelsRow},e.createElement("div",{style:m.panel},e.createElement(A,{columns:n,data:J,wrapperClassName:"table-wrapper--seamless"})),e.createElement(j,{activeTab:r,onTabChange:i})))))}return e.createElement(t,null)}},E={name:"Account Overview Widget — With Chart",render:()=>{function t(){const[r,i]=h.useState("headcount"),[c,g]=h.useState(!0),[n,d]=h.useState("chart"),s=[{key:"scenario",label:"",width:100,sticky:"left",render:o=>e.createElement(w,{scenario:o})},...$.map(o=>({key:o,label:o,align:"right",render:(y,p)=>p.scenario==="target"?e.createElement("span",{style:{fontSize:12,fontWeight:500}},y):e.createElement("span",{style:{fontSize:12}},y.amount," ",e.createElement("span",{style:{color:"var(--color-base-muted-foreground,#91959f)",fontWeight:600,fontSize:11}},y.pct))}))];return e.createElement("div",{style:{padding:24,background:"#eef0f2",fontFamily:"'Source Sans Pro','Source Sans 3',system-ui,sans-serif"}},e.createElement("div",{style:m.card},e.createElement(K,{includeUnmapped:c,onToggle:g}),e.createElement("div",{style:m.body},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:56,marginBottom:12}},e.createElement("div",{style:{width:368,flexShrink:0}},e.createElement(R,{tabs:[{id:"chart",label:"Chart"},{id:"table",label:"Table"}],active:n,onChange:d,size:"sm"})),e.createElement("div",{style:{flex:1,minWidth:0}},e.createElement(R,{tabs:[{id:"headcount",label:"Headcount"},{id:"revenue",label:"Revenue"}],active:r,onChange:i,size:"sm"}))),e.createElement("div",{style:{display:"flex",alignItems:"flex-start",gap:56}},e.createElement("div",{style:{width:368,flexShrink:0,display:"flex",flexDirection:"column",gap:8}},n==="chart"?e.createElement(e.Fragment,null,e.createElement("p",{style:{margin:0,fontSize:10,fontWeight:400,lineHeight:"16px",color:"var(--color-base-muted-foreground,#91959f)",textTransform:"uppercase",letterSpacing:"0.04em"}},"Actuals (Q1–Q2) · Projections (Q3–Q4)"),e.createElement("div",{style:{background:"#ffffff",borderRadius:8,border:"1px solid rgba(0,0,0,0.07)",padding:"10px 12px 8px"}},e.createElement(le,{data:q}),e.createElement(ce,null))):e.createElement("div",{style:m.panel},e.createElement(A,{columns:s,data:J,wrapperClassName:"table-wrapper--seamless"}))),e.createElement(j,{activeTab:r,onTabChange:i,showTabs:!1})))))}return e.createElement(t,null)}},O=[{id:"total-revenue",title:"Total Revenue",value:"$542,310.00",subtitle:"Estimated revenue is shown for reference only.",wide:!0},{id:"billable-time",title:"Billable time",value:"5,693 h",subtitle:"21 employees / 21"},{id:"offshore-overtime",title:"Offshore Overtime",value:"69 h",subtitle:"Invoice vs. Internal"},{id:"offshore-time",title:"Offshore time",value:"4,592 h",subtitle:"14 discrepancies open"},{id:"onsite-time",title:"Onsite time",value:"1,032 h",subtitle:"14 discrepancies open"}];function Q({title:t,value:r,subtitle:i,wide:c=!1}){return e.createElement("div",{style:{background:"var(--color-base-card, #ffffff)",borderRadius:14,border:"1px solid var(--color-base-input, #d9dade)",boxShadow:"0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.08)",fontFamily:"'Source Sans Pro','Source Sans 3',system-ui,sans-serif",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:16,gap:28,width:c?298:204,minWidth:c?298:204,height:158,boxSizing:"border-box",flexShrink:0}},e.createElement("span",{style:{fontSize:12,fontWeight:400,lineHeight:"16px",color:"var(--color-base-muted-foreground, #91959f)",textTransform:"uppercase",letterSpacing:"0.05em"}},t),e.createElement("span",{style:{fontSize:30,fontWeight:600,lineHeight:"36px",color:"var(--color-base-foreground, #1f1f21)",letterSpacing:"-0.01em"}},r),e.createElement("span",{style:{fontSize:12,fontWeight:400,lineHeight:"16px",color:"var(--color-base-muted-foreground, #91959f)"}},i))}const T={name:"Timesheets / Dashboard Widgets",render:()=>e.createElement("div",{style:{padding:32,background:"#eef0f2",fontFamily:"'Source Sans Pro','Source Sans 3',system-ui,sans-serif",minHeight:"100vh"}},e.createElement("div",{style:{marginBottom:24}},e.createElement("h2",{style:{margin:0,fontSize:13,fontWeight:700,color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.06em",fontFamily:"system-ui,sans-serif"}},"Timesheets — Dashboard Widgets"),e.createElement("p",{style:{margin:"4px 0 0",fontSize:12,color:"#9ca3af",fontFamily:"system-ui,sans-serif"}},"Ref: Figma DS–Sales Revenue Projections · Timesheets - Dashboard widgets")),e.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:16,alignItems:"flex-start"}},O.map(t=>e.createElement(Q,{key:t.id,...t}))),e.createElement("div",{style:{marginTop:40}},e.createElement("h3",{style:{margin:"0 0 20px",fontSize:13,fontWeight:700,color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.06em",fontFamily:"system-ui,sans-serif"}},"Individual variants"),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:32}},O.map(t=>e.createElement("div",{key:t.id},e.createElement("div",{style:{fontSize:11,fontWeight:700,color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.06em",fontFamily:"system-ui,sans-serif",marginBottom:10}},t.title),e.createElement(Q,{...t}))))))};var I,F,N;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'SRP / Dashboard Widget',
  render: () => {
    function DashboardWidgetStory() {
      const [activeTab, setActiveTab] = useState('headcount');
      const [includeUnmapped, setUnmapped] = useState(true);

      // Account Overview quarterly columns
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
      return <div style={{
        padding: 24,
        background: '#eef0f2',
        fontFamily: "'Source Sans Pro','Source Sans 3',system-ui,sans-serif"
      }}>
          <div style={S.card}>

            {/* Header */}
            <WidgetHeader includeUnmapped={includeUnmapped} onToggle={setUnmapped} />

            {/* Body */}
            <div style={S.body}>
              <div style={S.panelsRow}>

                {/* Left panel — Account Overview quarterly */}
                <div style={S.panel}>
                  <Table columns={aoColumns} data={ACCOUNT_OVERVIEW_DATA} wrapperClassName="table-wrapper--seamless" />
                </div>

                {/* Right panel — Tabs + monthly table */}
                <RightPanel activeTab={activeTab} onTabChange={setActiveTab} />

              </div>
            </div>

          </div>
        </div>;
    }
    return <DashboardWidgetStory />;
  }
}`,...(N=(F=x.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var L,V,_;E.parameters={...E.parameters,docs:{...(L=E.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Account Overview Widget — With Chart',
  render: () => {
    function ChartWidgetStory() {
      const [activeTab, setActiveTab] = useState('headcount');
      const [includeUnmapped, setUnmapped] = useState(true);
      const [leftView, setLeftView] = useState('chart'); // 'chart' | 'table'

      // Account Overview quarterly columns (for Table view in left panel)
      const aoColumns = [{
        key: 'scenario',
        label: '',
        width: 100,
        sticky: 'left',
        render: val => <ScenarioLabel scenario={val} />
      }, ...QUARTERS_AO.map(q => ({
        key: q,
        label: q,
        align: 'right',
        render: (val, row) => row.scenario === 'target' ? <span style={{
          fontSize: 12,
          fontWeight: 500
        }}>{val}</span> : <span style={{
          fontSize: 12
        }}>
                  {val.amount}{' '}
                  <span style={{
            color: 'var(--color-base-muted-foreground,#91959f)',
            fontWeight: 600,
            fontSize: 11
          }}>
                    {val.pct}
                  </span>
                </span>
      }))];
      return <div style={{
        padding: 24,
        background: '#eef0f2',
        fontFamily: "'Source Sans Pro','Source Sans 3',system-ui,sans-serif"
      }}>
          <div style={S.card}>

            {/* Header */}
            <WidgetHeader includeUnmapped={includeUnmapped} onToggle={setUnmapped} />

            {/* Body */}
            <div style={S.body}>

              {/* ── Tab bar row — both toggles on same line ────────── */}
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 56,
              marginBottom: 12
            }}>
                {/* Left: Chart | Table */}
                <div style={{
                width: 368,
                flexShrink: 0
              }}>
                  <Tabs tabs={[{
                  id: 'chart',
                  label: 'Chart'
                }, {
                  id: 'table',
                  label: 'Table'
                }]} active={leftView} onChange={setLeftView} size="sm" />
                </div>
                {/* Right: Headcount | Revenue */}
                <div style={{
                flex: 1,
                minWidth: 0
              }}>
                  <Tabs tabs={[{
                  id: 'headcount',
                  label: 'Headcount'
                }, {
                  id: 'revenue',
                  label: 'Revenue'
                }]} active={activeTab} onChange={setActiveTab} size="sm" />
                </div>
              </div>

              {/* ── Content row — top-aligned ──────────────────────── */}
              <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 56
            }}>

                {/* Left content */}
                <div style={{
                width: 368,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 8
              }}>
                  {leftView === 'chart' ? <>
                      <p style={{
                    margin: 0,
                    fontSize: 10,
                    fontWeight: 400,
                    lineHeight: '16px',
                    color: 'var(--color-base-muted-foreground,#91959f)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                        Actuals (Q1–Q2) · Projections (Q3–Q4)
                      </p>
                      <div style={{
                    background: '#ffffff',
                    borderRadius: 8,
                    border: '1px solid rgba(0,0,0,0.07)',
                    padding: '10px 12px 8px'
                  }}>
                        <AccountOverviewBarChart data={CHART_DATA} />
                        <ChartLegend />
                      </div>
                    </> : <div style={S.panel}>
                      <Table columns={aoColumns} data={ACCOUNT_OVERVIEW_DATA} wrapperClassName="table-wrapper--seamless" />
                    </div>}
                </div>

                {/* Right content — table without its own tab bar */}
                <RightPanel activeTab={activeTab} onTabChange={setActiveTab} showTabs={false} />

              </div>
            </div>

          </div>
        </div>;
    }
    return <ChartWidgetStory />;
  }
}`,...(_=(V=E.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var M,U,B;T.parameters={...T.parameters,docs:{...(M=T.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Timesheets / Dashboard Widgets',
  render: () => <div style={{
    padding: 32,
    background: '#eef0f2',
    fontFamily: "'Source Sans Pro','Source Sans 3',system-ui,sans-serif",
    minHeight: '100vh'
  }}>
      {/* Section heading */}
      <div style={{
      marginBottom: 24
    }}>
        <h2 style={{
        margin: 0,
        fontSize: 13,
        fontWeight: 700,
        color: '#6b7280',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        fontFamily: 'system-ui,sans-serif'
      }}>
          Timesheets — Dashboard Widgets
        </h2>
        <p style={{
        margin: '4px 0 0',
        fontSize: 12,
        color: '#9ca3af',
        fontFamily: 'system-ui,sans-serif'
      }}>
          Ref: Figma DS–Sales Revenue Projections · Timesheets - Dashboard widgets
        </p>
      </div>

      {/* All 5 cards in a responsive flex row */}
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      alignItems: 'flex-start'
    }}>
        {TIMESHEET_CARDS.map(card => <StatCard key={card.id} {...card} />)}
      </div>

      {/* Individual variant labels below */}
      <div style={{
      marginTop: 40
    }}>
        <h3 style={{
        margin: '0 0 20px',
        fontSize: 13,
        fontWeight: 700,
        color: '#6b7280',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        fontFamily: 'system-ui,sans-serif'
      }}>
          Individual variants
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 32
      }}>
          {TIMESHEET_CARDS.map(card => <div key={card.id}>
              <div style={{
            fontSize: 11,
            fontWeight: 700,
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            fontFamily: 'system-ui,sans-serif',
            marginBottom: 10
          }}>
                {card.title}
              </div>
              <StatCard {...card} />
            </div>)}
        </div>
      </div>

    </div>
}`,...(B=(U=T.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};const be=["SRPDashboardWidget","AccountOverviewWidgetWithChart","TimesheetsDashboardWidgets"];export{E as AccountOverviewWidgetWithChart,x as SRPDashboardWidget,T as TimesheetsDashboardWidgets,be as __namedExportsOrder,ye as default};
