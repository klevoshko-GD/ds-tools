import{R as e}from"./index-CwcVQgaJ.js";import{T as r}from"./TimesheetCell-aui2yu2T.js";const p=[{state:"approved",value:"8",label:"Approved",desc:"Regular hours — approved"},{state:"bamboo",value:"8",label:"Bamboo Notified",desc:"Synced to Bamboo HR"},{state:"draft",value:"8",label:"Draft",desc:"Hours logged but not yet submitted"},{state:"pto",value:"PTO",label:"PTO",desc:"Personal Time Off — day includes approved time off"},{state:"overtime",value:"10",label:"Overtime (OT)",desc:"Day includes overtime work"},{state:"public-holiday",value:"PH",label:"Public Holiday (PH)",desc:"Organisation public holiday"},{state:"account-holiday",value:"AH",label:"Account Holiday (AH)",desc:"Company-specific holiday"},{state:"weekend",value:"8",label:"Weekend",desc:"Weekend — hours recorded but greyed"},{state:"travelling",value:"8",label:"Travelling (TR)",desc:"Travel or special activity · dot indicator"},{state:"training",value:"2",label:"Training (T)",desc:"Training or special leave type"},{state:"merged",value:"8",label:"Merged (M)",desc:"Merged entry or internal activity · dot indicator"},{state:"no-hours",value:"0",label:"No Hours",desc:"Zero hours logged — missing entry"},{state:"hint",value:"8",label:"Hint Applied",desc:"Time-off requested — pending review"},{state:"total",value:"184h",label:"Total Time",desc:"Weekly total hours with progress bar",progress:.78},{state:"actual",value:"8",label:"Actual",desc:"Confirmed actual hours"}],F={title:"Design Tokens/Timesheet Cell",component:r,parameters:{layout:"fullscreen",docs:{description:{component:"Timesheet Cell — 40×40 calendar-grid cell with 15 status variants. Ref: Figma DS (AI) node 40000015-53108."}}}},s={name:"All States",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff",maxWidth:560}},e.createElement("h2",{style:{fontSize:18,fontWeight:700,color:"#1f1f21",margin:"0 0 4px"}},"Timesheet Cell — All States"),e.createElement("p",{style:{fontSize:12,color:"#91959f",margin:"0 0 24px"}},"40×40 · Corner radius 7 · Font: Inter Semi Bold"),e.createElement("div",{style:{borderTop:"1px solid #d9dade"}},p.map(({state:t,value:o,label:n,desc:a,progress:f})=>e.createElement("div",{key:t,style:{display:"flex",alignItems:"center",gap:16,padding:"6px 0",borderBottom:"1px solid #f0f1f3"}},e.createElement(r,{state:t,value:o,progress:f}),e.createElement("div",null,e.createElement("div",{style:{fontSize:13,fontWeight:600,color:"#1f1f21",lineHeight:1.3}},n),e.createElement("div",{style:{fontSize:11,color:"#91959f",lineHeight:1.4}},a))))))},i={name:"Grid",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:18,fontWeight:700,color:"#1f1f21",margin:"0 0 20px"}},"Cell State Grid"),e.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:12}},p.map(({state:t,value:o,label:n,progress:a})=>e.createElement("div",{key:t,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6}},e.createElement(r,{state:t,value:o,progress:a}),e.createElement("span",{style:{fontSize:9,color:"#91959f",textAlign:"center",maxWidth:52,lineHeight:1.3}},n)))))},A=[{day:"Mon",state:"approved",value:"8"},{day:"Tue",state:"overtime",value:"10"},{day:"Wed",state:"travelling",value:"8"},{day:"Thu",state:"hint",value:"8"},{day:"Fri",state:"draft",value:"8"},{day:"Sat",state:"weekend",value:"8"},{day:"Sun",state:"weekend",value:"8"}],d={name:"Calendar Row",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:18,fontWeight:700,color:"#1f1f21",margin:"0 0 20px"}},"Weekly Calendar Row"),e.createElement("div",{style:{display:"inline-flex",gap:4,alignItems:"flex-end"}},A.map(({day:t,state:o,value:n})=>e.createElement("div",{key:t,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6}},e.createElement("span",{style:{fontSize:10,fontWeight:600,color:"#91959f",textTransform:"uppercase",letterSpacing:"0.06em"}},t),e.createElement(r,{state:o,value:n}))),e.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6,marginLeft:8}},e.createElement("span",{style:{fontSize:10,fontWeight:600,color:"#91959f",textTransform:"uppercase",letterSpacing:"0.06em"}},"Total"),e.createElement(r,{state:"total",value:"50h",progress:.625}))))},c={name:"Token Reference",render:()=>{const t=[{state:"approved",token:"--color-forecast-optimistic",value:"#3d854e"},{state:"bamboo",token:"--color-base-secondary",value:"#f5f5f5"},{state:"draft",token:"--color-base-border (dashed)",value:"#d9dade"},{state:"pto",token:"--color-timesheet-pto",value:"#0891b2"},{state:"overtime",token:"--color-status-warning-icon",value:"#ea580c"},{state:"public-holiday",token:"--color-base-border (circle)",value:"#d9dade"},{state:"account-holiday",token:"--color-forecast-pessimistic (circle)",value:"#ce4e45"},{state:"weekend",token:"--color-base-muted",value:"#f7f8f8"},{state:"travelling",token:"--color-timesheet-pto",value:"#0891b2"},{state:"training",token:"--color-timesheet-training",value:"#7c3aed"},{state:"merged",token:"--color-base-primary",value:"#0069b4"},{state:"no-hours",token:"--color-base-destructive (dashed)",value:"#dc2626"},{state:"hint",token:"--color-status-info-background",value:"#eff6ff"},{state:"total",token:"--color-base-primary (progress fill)",value:"#0069b4"},{state:"actual",token:"--color-base-primary",value:"#0069b4"}],o={textAlign:"left",padding:"8px 12px",fontSize:10,fontWeight:700,color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.06em",borderBottom:"2px solid #e5e7eb"},n={padding:"8px 12px",fontSize:12,borderBottom:"1px solid #f3f4f6",verticalAlign:"middle"};return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:18,fontWeight:700,color:"#1f1f21",margin:"0 0 8px"}},"Token Reference"),e.createElement("p",{style:{fontSize:12,color:"#6b7280",margin:"0 0 20px"}},"New tokens added: ",e.createElement("code",{style:{background:"#f3f4f6",padding:"1px 4px",borderRadius:3}},"--color-timesheet-pto")," and ",e.createElement("code",{style:{background:"#f3f4f6",padding:"1px 4px",borderRadius:3}},"--color-timesheet-training")),e.createElement("table",{style:{width:"100%",borderCollapse:"collapse"}},e.createElement("thead",null,e.createElement("tr",null,["Cell","State","Token","Value"].map(a=>e.createElement("th",{key:a,style:o},a)))),e.createElement("tbody",null,t.map(({state:a,token:f,value:m},z)=>{const l=p.find(w=>w.state===a);return e.createElement("tr",{key:a,style:{background:z%2===0?"#fafafa":"#fff"}},e.createElement("td",{style:n},e.createElement(r,{state:a,value:l==null?void 0:l.value,progress:l==null?void 0:l.progress})),e.createElement("td",{style:{...n,fontWeight:600,color:"#111827"}},l==null?void 0:l.label),e.createElement("td",{style:{...n,fontFamily:"monospace",fontSize:11,color:"#6b7280"}},f),e.createElement("td",{style:n},e.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:6}},e.createElement("span",{style:{width:12,height:12,borderRadius:2,background:m,border:"1px solid rgba(0,0,0,0.12)",flexShrink:0}}),e.createElement("span",{style:{fontFamily:"monospace",fontSize:11}},m))))}))))}};var u,g,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif',
    background: '#fff',
    maxWidth: 560
  }}>
      <h2 style={{
      fontSize: 18,
      fontWeight: 700,
      color: '#1f1f21',
      margin: '0 0 4px'
    }}>
        Timesheet Cell — All States
      </h2>
      <p style={{
      fontSize: 12,
      color: '#91959f',
      margin: '0 0 24px'
    }}>
        40×40 · Corner radius 7 · Font: Inter Semi Bold
      </p>
      <div style={{
      borderTop: '1px solid #d9dade'
    }}>
        {ALL_STATES.map(({
        state,
        value,
        label,
        desc,
        progress
      }) => <div key={state} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '6px 0',
        borderBottom: '1px solid #f0f1f3'
      }}>
            <TimesheetCell state={state} value={value} progress={progress} />
            <div>
              <div style={{
            fontSize: 13,
            fontWeight: 600,
            color: '#1f1f21',
            lineHeight: 1.3
          }}>{label}</div>
              <div style={{
            fontSize: 11,
            color: '#91959f',
            lineHeight: 1.4
          }}>{desc}</div>
            </div>
          </div>)}
      </div>
    </div>
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,b,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Grid',
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif',
    background: '#fff'
  }}>
      <h2 style={{
      fontSize: 18,
      fontWeight: 700,
      color: '#1f1f21',
      margin: '0 0 20px'
    }}>
        Cell State Grid
      </h2>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12
    }}>
        {ALL_STATES.map(({
        state,
        value,
        label,
        progress
      }) => <div key={state} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6
      }}>
            <TimesheetCell state={state} value={value} progress={progress} />
            <span style={{
          fontSize: 9,
          color: '#91959f',
          textAlign: 'center',
          maxWidth: 52,
          lineHeight: 1.3
        }}>
              {label}
            </span>
          </div>)}
      </div>
    </div>
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var k,x,S;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Calendar Row',
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif',
    background: '#fff'
  }}>
      <h2 style={{
      fontSize: 18,
      fontWeight: 700,
      color: '#1f1f21',
      margin: '0 0 20px'
    }}>
        Weekly Calendar Row
      </h2>
      <div style={{
      display: 'inline-flex',
      gap: 4,
      alignItems: 'flex-end'
    }}>
        {WEEK.map(({
        day,
        state,
        value
      }) => <div key={day} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6
      }}>
            <span style={{
          fontSize: 10,
          fontWeight: 600,
          color: '#91959f',
          textTransform: 'uppercase',
          letterSpacing: '0.06em'
        }}>
              {day}
            </span>
            <TimesheetCell state={state} value={value} />
          </div>)}
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        marginLeft: 8
      }}>
          <span style={{
          fontSize: 10,
          fontWeight: 600,
          color: '#91959f',
          textTransform: 'uppercase',
          letterSpacing: '0.06em'
        }}>
            Total
          </span>
          <TimesheetCell state="total" value="50h" progress={0.625} />
        </div>
      </div>
    </div>
}`,...(S=(x=d.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var T,E,W;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Token Reference',
  render: () => {
    const rows = [{
      state: 'approved',
      token: '--color-forecast-optimistic',
      value: '#3d854e'
    }, {
      state: 'bamboo',
      token: '--color-base-secondary',
      value: '#f5f5f5'
    }, {
      state: 'draft',
      token: '--color-base-border (dashed)',
      value: '#d9dade'
    }, {
      state: 'pto',
      token: '--color-timesheet-pto',
      value: '#0891b2'
    }, {
      state: 'overtime',
      token: '--color-status-warning-icon',
      value: '#ea580c'
    }, {
      state: 'public-holiday',
      token: '--color-base-border (circle)',
      value: '#d9dade'
    }, {
      state: 'account-holiday',
      token: '--color-forecast-pessimistic (circle)',
      value: '#ce4e45'
    }, {
      state: 'weekend',
      token: '--color-base-muted',
      value: '#f7f8f8'
    }, {
      state: 'travelling',
      token: '--color-timesheet-pto',
      value: '#0891b2'
    }, {
      state: 'training',
      token: '--color-timesheet-training',
      value: '#7c3aed'
    }, {
      state: 'merged',
      token: '--color-base-primary',
      value: '#0069b4'
    }, {
      state: 'no-hours',
      token: '--color-base-destructive (dashed)',
      value: '#dc2626'
    }, {
      state: 'hint',
      token: '--color-status-info-background',
      value: '#eff6ff'
    }, {
      state: 'total',
      token: '--color-base-primary (progress fill)',
      value: '#0069b4'
    }, {
      state: 'actual',
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
      padding: '8px 12px',
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
        color: '#1f1f21',
        margin: '0 0 8px'
      }}>Token Reference</h2>
        <p style={{
        fontSize: 12,
        color: '#6b7280',
        margin: '0 0 20px'
      }}>
          New tokens added: <code style={{
          background: '#f3f4f6',
          padding: '1px 4px',
          borderRadius: 3
        }}>--color-timesheet-pto</code> and <code style={{
          background: '#f3f4f6',
          padding: '1px 4px',
          borderRadius: 3
        }}>--color-timesheet-training</code>
        </p>
        <table style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr>{['Cell', 'State', 'Token', 'Value'].map(h => <th key={h} style={th}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map(({
            state,
            token,
            value
          }, i) => {
            const sItem = ALL_STATES.find(s => s.state === state);
            return <tr key={state} style={{
              background: i % 2 === 0 ? '#fafafa' : '#fff'
            }}>
                  <td style={td}>
                    <TimesheetCell state={state} value={sItem?.value} progress={sItem?.progress} />
                  </td>
                  <td style={{
                ...td,
                fontWeight: 600,
                color: '#111827'
              }}>{sItem?.label}</td>
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
                </tr>;
          })}
          </tbody>
        </table>
      </div>;
  }
}`,...(W=(E=c.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};const H=["AllStates","Grid","CalendarRow","TokenReference"];export{s as AllStates,d as CalendarRow,i as Grid,c as TokenReference,H as __namedExportsOrder,F as default};
