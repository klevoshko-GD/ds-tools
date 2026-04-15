import{R as e,r as y}from"./index-CwcVQgaJ.js";import{T as E}from"./Table-D-4wpAV3.js";import{b as I}from"./Badge-BHK3eREH.js";import{T as F}from"./Toggle-WRhNAhHb.js";import{T as W}from"./Tabs-C2izdUid.js";const ie={title:"Design Tokens/Widgets",parameters:{layout:"fullscreen",docs:{description:{component:"Dashboard widget components for the SRP (Sales Revenue Projections) design system. Ref: Figma DS–Sales Revenue Projections."}}}},P=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],L=["Q1","Q2","Q3","Q4","ANNUAL"],K=[{scenario:"optimistic",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:185,Sep:185,Oct:185,Nov:185,Dec:185},{scenario:"realistic",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:185,Sep:185,Oct:185,Nov:185,Dec:185},{scenario:"pessimistic",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:185,Sep:185,Oct:185,Nov:185,Dec:185}],Q=[{scenario:"spt",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:185,Sep:185,Oct:185,Nov:185,Dec:185,variance:null},{scenario:"optimistic",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:0,Sep:185,Oct:185,Nov:185,Dec:185,variance:{month:"Aug",label:"-20%"}},{scenario:"realistic",Jan:194,Feb:171,Mar:178,Apr:178,May:186,Jun:186,Jul:185,Aug:185,Sep:185,Oct:185,Nov:185,Dec:185,variance:null},{scenario:"pessimistic",Jan:194,Feb:194,Mar:194,Apr:194,May:194,Jun:194,Jul:194,Aug:194,Sep:194,Oct:194,Nov:194,Dec:194,variance:null}],U=[{scenario:"target",Q1:"$1.25M",Q2:"$150.75K",Q3:"$1.10B",Q4:"$999.99K",ANNUAL:"$1.10B"},{scenario:"optimistic",Q1:{amount:"$95,432",pct:"25%"},Q2:{amount:"$98.765K",pct:"10%"},Q3:{amount:"$132.10K",pct:"00%"},Q4:{amount:"$12,345",pct:"15%"},ANNUAL:{amount:"$000.0K",pct:"00%"}},{scenario:"realistic",Q1:{amount:"$87,654",pct:"33%"},Q2:{amount:"$250.88K",pct:"15%"},Q3:{amount:"$000.0K",pct:"00%"},Q4:{amount:"$000.0K",pct:"00%"},ANNUAL:{amount:"$000.0K",pct:"00%"}},{scenario:"pessimistic",Q1:{amount:"$000.0K",pct:"00%"},Q2:{amount:"$000.0K",pct:"00%"},Q3:{amount:"$000.0K",pct:"00%"},Q4:{amount:"$000.0K",pct:"00%"},ANNUAL:{amount:"$000.0K",pct:"00%"}}];function A({scenario:a}){return a==="spt"?e.createElement("strong",{style:{fontSize:14,fontWeight:700,color:"var(--color-base-foreground,#1f1f21)"}},"SPT"):a==="target"?e.createElement("strong",{style:{fontSize:14,fontWeight:700,color:"var(--color-base-foreground,#1f1f21)"}},"Target"):e.createElement(I,{variant:a})}function j({badge:a,value:r,muted:l=!1}){return e.createElement("div",{style:{display:"inline-flex",flexDirection:"column",alignItems:"center",gap:4}},e.createElement("span",{style:{display:"inline-block",background:"var(--color-status-warning-icon,#ea580c)",color:"#fff",fontSize:11,fontWeight:700,borderRadius:9999,padding:"1px 7px",lineHeight:"18px",whiteSpace:"nowrap"}},a),e.createElement("span",{style:{fontSize:13,color:l?"var(--color-base-muted-foreground,#91959f)":"inherit"}},r))}const q=()=>e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",style:{flexShrink:0,color:"var(--color-base-muted-foreground,#91959f)"}},e.createElement("circle",{cx:"8",cy:"8",r:"7",stroke:"currentColor",strokeWidth:"1.25"}),e.createElement("path",{d:"M8 7v4",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round"}),e.createElement("circle",{cx:"8",cy:"5",r:"0.75",fill:"currentColor"})),G=()=>e.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:{flexShrink:0}},e.createElement("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),e.createElement("circle",{cx:"12",cy:"12",r:"3"})),d={card:{background:"#ffffff",borderRadius:12,border:"1px solid rgba(1,1,46,0.08)",boxShadow:"0 1px 2px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.10)",overflow:"hidden",fontFamily:"'Source Sans Pro','Source Sans 3',system-ui,sans-serif"},header:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 24px",background:"var(--color-base-card,#fcfcfc)",borderBottom:"1px solid rgba(1,1,46,0.08)",gap:24},body:{padding:"16px 24px 24px",background:"var(--color-base-card,#fcfcfc)",overflow:"hidden"},panelsRow:{display:"flex",alignItems:"flex-end",gap:56},panel:{background:"#ffffff",borderRadius:6,border:"1px solid rgba(0,0,0,0.07)",overflow:"hidden",flexShrink:0},settingsBtn:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 16px",borderRadius:6,border:"1px solid var(--color-base-primary,#0069b4)",background:"#ffffff",color:"var(--color-base-primary,#0069b4)",fontSize:14,fontWeight:400,lineHeight:"20px",cursor:"pointer",fontFamily:"inherit",flexShrink:0,whiteSpace:"nowrap",minHeight:40}};function M({includeUnmapped:a,onToggle:r}){return e.createElement("div",{style:d.header},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:32,minWidth:0,flex:1,flexWrap:"wrap"}},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,flexShrink:0}},e.createElement("span",{style:{fontSize:24,fontWeight:600,color:"var(--color-base-foreground,#1f1f21)",lineHeight:"140%",whiteSpace:"nowrap"}},"Boston Scientific International SA"),e.createElement(q,null)),e.createElement(F,{checked:a,onChange:r,labelRight:"Include unmapped position"})),e.createElement("button",{style:d.settingsBtn,type:"button"},e.createElement(G,null),"Account Settings"))}function _({activeTab:a,onTabChange:r,showTabs:l=!0}){const m=[{key:"scenario",label:"",width:120,sticky:"left",render:n=>e.createElement(A,{scenario:n})},...P.map(n=>({key:n,label:n,align:"right",render:c=>e.createElement("span",{style:{fontSize:13}},c)}))],g=[{key:"scenario",label:"",width:120,sticky:"left",render:n=>e.createElement(A,{scenario:n})},...P.map(n=>{const c=Q.some(i=>{var o;return((o=i.variance)==null?void 0:o.month)===n});return{key:n,label:n,align:"right",className:c?"table__td--variance":"",render:(i,o)=>{var f;return((f=o.variance)==null?void 0:f.month)===n?e.createElement(j,{badge:o.variance.label,value:i===0?"$0.00":i,muted:i===0}):e.createElement("span",{style:{fontSize:13}},i)}}})];return e.createElement("div",{style:{...d.panel,flex:1,minWidth:0,flexShrink:1}},l&&e.createElement("div",{style:{padding:"8px 12px",borderBottom:"1px solid rgba(0,0,0,0.07)"}},e.createElement(W,{tabs:[{id:"headcount",label:"Headcount"},{id:"revenue",label:"Revenue"}],active:a,onChange:r,size:"sm"})),a==="headcount"?e.createElement(E,{columns:m,data:K,wrapperClassName:"table-wrapper--seamless"}):e.createElement(E,{columns:g,data:Q,wrapperClassName:"table-wrapper--seamless"}))}const $=[{period:"Q1",optimistic:194,realistic:181,pessimistic:163,target:190},{period:"Q2",optimistic:198,realistic:183,pessimistic:160,target:195},{period:"Q3",optimistic:210,realistic:185,pessimistic:152,target:205},{period:"Q4",optimistic:222,realistic:185,pessimistic:138,target:212}],u={optimistic:"#3d854e",realistic:"#d9993a",pessimistic:"#ce4e45",target:"#005999"};function X({data:a=$}){const f=[50,100,150,200],v=276/a.length,h=16,C=3,J=(v-3*h-2*C)/2,p=t=>126-t/240*118,w=t=>36+t*v,k=(t,s)=>w(t)+J+s*(h+C),T=t=>t/240*118,R=a.map((t,s)=>[w(s)+v/2,p(t.target)]);return e.createElement("svg",{width:"100%",height:148,viewBox:"0 0 320 148","aria-label":"Quarterly headcount projections by forecast scenario",style:{display:"block"}},f.map(t=>e.createElement("line",{key:t,x1:36,y1:p(t),x2:312,y2:p(t),stroke:"#e5e7eb",strokeWidth:.75})),e.createElement("line",{x1:36,y1:p(0),x2:312,y2:p(0),stroke:"#d1d5db",strokeWidth:.75}),f.map(t=>e.createElement("text",{key:t,x:32,y:p(t)+3.5,textAnchor:"end",fontSize:8,fontFamily:"'Source Sans Pro',system-ui,sans-serif",fill:"#9ca3af"},t)),a.map((t,s)=>e.createElement("g",{key:t.period},e.createElement("rect",{x:k(s,0),y:p(t.optimistic),width:h,height:T(t.optimistic),fill:u.optimistic,rx:2}),e.createElement("rect",{x:k(s,1),y:p(t.realistic),width:h,height:T(t.realistic),fill:u.realistic,rx:2}),e.createElement("rect",{x:k(s,2),y:p(t.pessimistic),width:h,height:T(t.pessimistic),fill:u.pessimistic,rx:2}))),e.createElement("polyline",{points:R.map(([t,s])=>`${t},${s}`).join(" "),fill:"none",stroke:u.target,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),R.map(([t,s],B)=>e.createElement("circle",{key:B,cx:t,cy:s,r:3,fill:u.target})),a.map((t,s)=>e.createElement("text",{key:t.period,x:w(s)+v/2,y:142,textAnchor:"middle",fontSize:9,fontFamily:"'Source Sans Pro',system-ui,sans-serif",fontWeight:"600",fill:"#6b7280"},t.period)))}function Y(){const a=[{key:"optimistic",label:"Optimistic",type:"bar"},{key:"realistic",label:"Realistic",type:"bar"},{key:"pessimistic",label:"Pessimistic",type:"bar"},{key:"target",label:"Target",type:"line"}];return e.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px 14px",marginTop:8}},a.map(({key:r,label:l,type:m})=>e.createElement("div",{key:r,style:{display:"flex",alignItems:"center",gap:5}},m==="bar"?e.createElement("span",{style:{width:10,height:10,borderRadius:2,background:u[r],flexShrink:0}}):e.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:2,flexShrink:0}},e.createElement("span",{style:{width:14,height:2,background:u[r],borderRadius:2}}),e.createElement("span",{style:{width:4,height:4,borderRadius:"50%",background:u[r]}})),e.createElement("span",{style:{fontSize:11,fontFamily:"'Source Sans Pro','Source Sans 3',system-ui,sans-serif",color:"var(--color-base-muted-foreground,#91959f)"}},l))))}const S={name:"SRP / Dashboard Widget",render:()=>{function a(){const[r,l]=y.useState("headcount"),[m,g]=y.useState(!0),n=[{key:"scenario",label:"",width:120,sticky:"left",render:c=>e.createElement(A,{scenario:c})},...L.map(c=>({key:c,label:c,align:"right",render:(i,o)=>o.scenario==="target"?e.createElement("span",{style:{fontSize:13,fontWeight:500}},i):e.createElement("span",{style:{fontSize:13}},i.amount," ",e.createElement("span",{style:{color:"var(--color-base-muted-foreground,#91959f)",fontWeight:600,fontSize:12}},i.pct))}))];return e.createElement("div",{style:{padding:24,background:"#eef0f2",fontFamily:"'Source Sans Pro','Source Sans 3',system-ui,sans-serif"}},e.createElement("div",{style:d.card},e.createElement(M,{includeUnmapped:m,onToggle:g}),e.createElement("div",{style:d.body},e.createElement("div",{style:d.panelsRow},e.createElement("div",{style:d.panel},e.createElement(E,{columns:n,data:U,wrapperClassName:"table-wrapper--seamless"})),e.createElement(_,{activeTab:r,onTabChange:l})))))}return e.createElement(a,null)}},x={name:"Account Overview Widget — With Chart",render:()=>{function a(){const[r,l]=y.useState("headcount"),[m,g]=y.useState(!0),[n,c]=y.useState("chart"),i=[{key:"scenario",label:"",width:100,sticky:"left",render:o=>e.createElement(A,{scenario:o})},...L.map(o=>({key:o,label:o,align:"right",render:(b,f)=>f.scenario==="target"?e.createElement("span",{style:{fontSize:12,fontWeight:500}},b):e.createElement("span",{style:{fontSize:12}},b.amount," ",e.createElement("span",{style:{color:"var(--color-base-muted-foreground,#91959f)",fontWeight:600,fontSize:11}},b.pct))}))];return e.createElement("div",{style:{padding:24,background:"#eef0f2",fontFamily:"'Source Sans Pro','Source Sans 3',system-ui,sans-serif"}},e.createElement("div",{style:d.card},e.createElement(M,{includeUnmapped:m,onToggle:g}),e.createElement("div",{style:d.body},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:56,marginBottom:12}},e.createElement("div",{style:{width:368,flexShrink:0}},e.createElement(W,{tabs:[{id:"chart",label:"Chart"},{id:"table",label:"Table"}],active:n,onChange:c,size:"sm"})),e.createElement("div",{style:{flex:1,minWidth:0}},e.createElement(W,{tabs:[{id:"headcount",label:"Headcount"},{id:"revenue",label:"Revenue"}],active:r,onChange:l,size:"sm"}))),e.createElement("div",{style:{display:"flex",alignItems:"flex-start",gap:56}},e.createElement("div",{style:{width:368,flexShrink:0,display:"flex",flexDirection:"column",gap:8}},n==="chart"?e.createElement(e.Fragment,null,e.createElement("p",{style:{margin:0,fontSize:10,fontWeight:400,lineHeight:"16px",color:"var(--color-base-muted-foreground,#91959f)",textTransform:"uppercase",letterSpacing:"0.04em"}},"Actuals (Q1–Q2) · Projections (Q3–Q4)"),e.createElement("div",{style:{background:"#ffffff",borderRadius:8,border:"1px solid rgba(0,0,0,0.07)",padding:"10px 12px 8px"}},e.createElement(X,{data:$}),e.createElement(Y,null))):e.createElement("div",{style:d.panel},e.createElement(E,{columns:i,data:U,wrapperClassName:"table-wrapper--seamless"}))),e.createElement(_,{activeTab:r,onTabChange:l,showTabs:!1})))))}return e.createElement(a,null)}};var O,z,D;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(D=(z=S.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var N,H,V;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(V=(H=x.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};const oe=["SRPDashboardWidget","AccountOverviewWidgetWithChart"];export{x as AccountOverviewWidgetWithChart,S as SRPDashboardWidget,oe as __namedExportsOrder,ie as default};
