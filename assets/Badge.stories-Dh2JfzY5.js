import{R as e}from"./index-CwcVQgaJ.js";import{B as t,a as o,b as c}from"./Badge-BHK3eREH.js";import{b as y,c as f,d as P}from"./Icons-D1GY7NSS.js";import"./chevron-down-ybap-uea.js";const s=({children:a,gap:r=12,wrap:i=!0})=>e.createElement("div",{style:{display:"flex",alignItems:"center",flexWrap:i?"wrap":"nowrap",gap:r}},a),d=({title:a,subtitle:r,children:i})=>e.createElement("div",{style:{marginBottom:40}},e.createElement("h3",{style:{fontSize:13,fontWeight:700,color:"#111827",margin:"0 0 4px",fontFamily:"system-ui, sans-serif",textTransform:"uppercase",letterSpacing:"0.06em"}},a),r&&e.createElement("p",{style:{fontSize:12,color:"#6b7280",margin:"0 0 16px",fontFamily:"system-ui, sans-serif"}},r),!r&&e.createElement("div",{style:{marginBottom:16}}),i),G={title:"Design Tokens/Badge",component:t,parameters:{layout:"fullscreen",docs:{description:{component:"Badge component — pill-shaped label, 9 variants. BadgeNumber — compact numeric counter, 4 variants."}}}},m={name:"All Variants",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:8}},"Badge"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:40}},"Pill labels for status, categories, or counts. Height auto · border-radius 9999px · font 12px/600."),e.createElement(d,{title:"Text badges"},e.createElement(s,{gap:12},e.createElement(t,{variant:"default"},"Default"),e.createElement(t,{variant:"secondary"},"Secondary"),e.createElement(t,{variant:"outline"},"Outline"),e.createElement(t,{variant:"outline-secondary"},"Outline Secondary"),e.createElement(t,{variant:"destructive"},"Destructive"),e.createElement(t,{variant:"success"},"Success"),e.createElement(t,{variant:"warning"},"Warning"),e.createElement(t,{variant:"caution"},"Caution"),e.createElement(t,{variant:"verified"},"Verified"))),e.createElement(d,{title:"With leading icon"},e.createElement(s,{gap:12},e.createElement(t,{variant:"default",icon:e.createElement(y,null)},"Default"),e.createElement(t,{variant:"secondary",icon:e.createElement(f,null)},"Secondary"),e.createElement(t,{variant:"outline",icon:e.createElement(f,null)},"Outline"),e.createElement(t,{variant:"destructive",icon:e.createElement(f,null)},"Destructive"),e.createElement(t,{variant:"success",icon:e.createElement(y,null)},"Success"),e.createElement(t,{variant:"warning",icon:e.createElement(f,null)},"Warning"),e.createElement(t,{variant:"caution",icon:e.createElement(f,null)},"Caution"),e.createElement(t,{variant:"verified",icon:e.createElement(P,null)},"Verified"))),e.createElement(d,{title:"Badge Number — default | secondary | outline | destructive"},e.createElement(s,{gap:12},e.createElement(o,{variant:"default"},"8"),e.createElement(o,{variant:"default"},"42"),e.createElement(o,{variant:"secondary"},"8"),e.createElement(o,{variant:"secondary"},"42"),e.createElement(o,{variant:"outline"},"8"),e.createElement(o,{variant:"outline"},"42"),e.createElement(o,{variant:"destructive"},"8"),e.createElement(o,{variant:"destructive"},"99+"))))},g={name:"Status Variants",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:8}},"Status Badges"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:40}},"Semantic colour tokens from status palette. Each variant uses its own bg/border/text triplet."),[{variant:"default",label:"Default",bg:"#0069b4",border:"#0069b4",text:"#f7f8f8"},{variant:"secondary",label:"Secondary",bg:"#f5f5f5",border:"#f5f5f5",text:"#41434b"},{variant:"outline",label:"Outline",bg:"transparent",border:"#d9dade",text:"#1f1f21"},{variant:"outline-secondary",label:"Outline Secondary",bg:"transparent",border:"#d9dade",text:"#41434b"},{variant:"destructive",label:"Destructive",bg:"#fee2e2",border:"#fecaca",text:"#dc2626"},{variant:"success",label:"Success",bg:"#f0fdf4",border:"#16a34a",text:"#16a34a"},{variant:"warning",label:"Warning",bg:"#fff7ed",border:"#ea580c",text:"#ea580c"},{variant:"caution",label:"Caution",bg:"#fffbeb",border:"#f59e0b",text:"#f59e0b"},{variant:"verified",label:"Verified",bg:"#eff6ff",border:"#bfdbfe",text:"#2563eb"}].map(({variant:a,label:r,bg:i,border:l,text:n})=>e.createElement("div",{key:a,style:{display:"flex",alignItems:"center",gap:16,marginBottom:16}},e.createElement("div",{style:{width:160}},e.createElement(t,{variant:a},r)),e.createElement("div",{style:{display:"flex",gap:24,fontSize:11,fontFamily:"monospace",color:"#6b7280"}},e.createElement("span",null,"bg: ",i),e.createElement("span",null,"border: ",l),e.createElement("span",null,"text: ",n)))))},p={name:"Common Patterns",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:40}},"Common Patterns"),e.createElement(d,{title:"Order statuses"},e.createElement(s,{gap:8},e.createElement(t,{variant:"success",icon:e.createElement(y,null)},"Delivered"),e.createElement(t,{variant:"default"},"Processing"),e.createElement(t,{variant:"warning"},"Pending"),e.createElement(t,{variant:"caution"},"On Hold"),e.createElement(t,{variant:"destructive"},"Cancelled"),e.createElement(t,{variant:"secondary"},"Draft"))),e.createElement(d,{title:"Notification counts"},e.createElement(s,{gap:16},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:14,color:"#374151"}},"Inbox ",e.createElement(o,{variant:"destructive"},"3")),e.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:14,color:"#374151"}},"Updates ",e.createElement(o,{variant:"default"},"12")),e.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:14,color:"#374151"}},"Archived ",e.createElement(o,{variant:"secondary"},"99+")))),e.createElement(d,{title:"Feature labels"},e.createElement(s,{gap:8},e.createElement(t,{variant:"verified",icon:e.createElement(P,null)},"Verified Seller"),e.createElement(t,{variant:"default"},"New"),e.createElement(t,{variant:"caution"},"Beta"),e.createElement(t,{variant:"outline"},"Pro"))))},b={name:"Token Reference",render:()=>{const a=[{variant:"default",bg:"#0069b4",border:"#0069b4",text:"#f7f8f8",token:"--color-base-primary"},{variant:"secondary",bg:"#f5f5f5",border:"#f5f5f5",text:"#41434b",token:"--color-base-secondary"},{variant:"outline",bg:"transp.",border:"#d9dade",text:"#1f1f21",token:"--color-base-input"},{variant:"outline-secondary",bg:"transp.",border:"#d9dade",text:"#41434b",token:"--color-base-input"},{variant:"destructive",bg:"#fee2e2",border:"#fecaca",text:"#dc2626",token:"--color-base-destructive"},{variant:"success",bg:"#f0fdf4",border:"#16a34a",text:"#16a34a",token:"--color-status-success-*"},{variant:"warning",bg:"#fff7ed",border:"#ea580c",text:"#ea580c",token:"--color-status-warning-*"},{variant:"caution",bg:"#fffbeb",border:"#f59e0b",text:"#f59e0b",token:"--color-status-caution-*"},{variant:"verified",bg:"#eff6ff",border:"#bfdbfe",text:"#2563eb",token:"info blue (hardcoded)"}],r={textAlign:"left",padding:"8px 12px",fontSize:10,fontWeight:700,color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.06em",borderBottom:"2px solid #e5e7eb"},i={padding:"10px 12px",fontSize:12,borderBottom:"1px solid #f3f4f6",verticalAlign:"middle"},l=n=>e.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:5}},e.createElement("span",{style:{width:12,height:12,borderRadius:2,background:n==="transp."?"transparent":n,border:"1px solid rgba(0,0,0,0.15)",flexShrink:0}}),e.createElement("span",{style:{fontFamily:"monospace",fontSize:11}},n));return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:24}},"Token Reference"),e.createElement("div",{style:{marginBottom:24,padding:12,background:"#f9fafb",borderRadius:8,fontSize:12,color:"#374151"}},e.createElement("strong",null,"Dimensions:")," padding=2px 10px · border-radius=9999px · font=12px/600",e.createElement("br",null),e.createElement("strong",null,"BadgeNumber:")," height=20px · min-width=20px · padding=0 6px · font=11px/700"),e.createElement("table",{style:{width:"100%",borderCollapse:"collapse"}},e.createElement("thead",null,e.createElement("tr",null,["Variant","Preview","Background","Border","Text","Token"].map(n=>e.createElement("th",{key:n,style:r},n)))),e.createElement("tbody",null,a.map(({variant:n,bg:v,border:A,text:D,token:V},O)=>e.createElement("tr",{key:n,style:{background:O%2===0?"#fafafa":"#fff"}},e.createElement("td",{style:{...i,fontFamily:"monospace",fontSize:11,color:"#111827"}},n),e.createElement("td",{style:i},e.createElement(t,{variant:n},n)),e.createElement("td",{style:i},l(v)),e.createElement("td",{style:i},l(A)),e.createElement("td",{style:i},l(D)),e.createElement("td",{style:{...i,fontFamily:"monospace",fontSize:11,color:"#6b7280"}},V))))))}},u={name:"Status Badges (O/R/P)",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:8}},"Badges/Status"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:40}},"Forecasting/pipeline status badges — Optimistic, Realistic, Pessimistic. Letter circle prefix + full label. Component: ",e.createElement("code",{style:{fontSize:11,background:"#f3f4f6",padding:"1px 4px",borderRadius:3}},"BadgeStatus")),e.createElement("div",{style:{marginBottom:32}},e.createElement("h3",{style:{fontSize:13,fontWeight:700,color:"#111827",margin:"0 0 16px",textTransform:"uppercase",letterSpacing:"0.06em"}},"All variants"),e.createElement("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"}},e.createElement(c,{variant:"optimistic"}),e.createElement(c,{variant:"realistic"}),e.createElement(c,{variant:"pessimistic"}))),e.createElement("div",{style:{marginBottom:32}},e.createElement("h3",{style:{fontSize:13,fontWeight:700,color:"#111827",margin:"0 0 16px",textTransform:"uppercase",letterSpacing:"0.06em"}},"In context — forecast pipeline"),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:400}},[{label:"Q1 Target",badge:"optimistic"},{label:"Q2 Pipeline",badge:"realistic"},{label:"Q3 Forecast",badge:"pessimistic"},{label:"Annual Goal",badge:"optimistic"}].map(({label:a,badge:r})=>e.createElement("div",{key:a,style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",borderRadius:8,border:"1px solid #e5e7eb"}},e.createElement("span",{style:{fontSize:14,color:"#111827"}},a),e.createElement(c,{variant:r}))))),e.createElement("div",null,e.createElement("h3",{style:{fontSize:13,fontWeight:700,color:"#111827",margin:"0 0 16px",textTransform:"uppercase",letterSpacing:"0.06em"}},"Token mapping"),e.createElement("table",{style:{borderCollapse:"collapse",fontSize:12,fontFamily:"system-ui, sans-serif"}},e.createElement("thead",null,e.createElement("tr",null,["Variant","Preview","Background token","Border token","Text token"].map(a=>e.createElement("th",{key:a,style:{textAlign:"left",padding:"6px 12px",fontSize:10,fontWeight:700,color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.06em",borderBottom:"2px solid #e5e7eb"}},a)))),e.createElement("tbody",null,[{variant:"optimistic",token:"--color-status-success-*",bg:"#f0fdf4",border:"#16a34a",text:"#16a34a"},{variant:"realistic",token:"--color-base-primary",bg:"#eff6ff",border:"#0069b4",text:"#0069b4"},{variant:"pessimistic",token:"--color-status-warning-*",bg:"#fff7ed",border:"#ea580c",text:"#ea580c"}].map(({variant:a,token:r,bg:i,border:l,text:n},v)=>e.createElement("tr",{key:a,style:{background:v%2===0?"#fafafa":"#fff"}},e.createElement("td",{style:{padding:"10px 12px",fontWeight:600,color:"#111827",textTransform:"capitalize"}},a),e.createElement("td",{style:{padding:"10px 12px"}},e.createElement(c,{variant:a})),e.createElement("td",{style:{padding:"10px 12px",fontFamily:"monospace",fontSize:11,color:"#6b7280"}},r),e.createElement("td",{style:{padding:"10px 12px"}},e.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:5}},e.createElement("span",{style:{width:12,height:12,borderRadius:2,background:l,border:"1px solid rgba(0,0,0,0.12)",flexShrink:0}}),e.createElement("span",{style:{fontFamily:"monospace",fontSize:11}},l))),e.createElement("td",{style:{padding:"10px 12px"}},e.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:5}},e.createElement("span",{style:{width:12,height:12,borderRadius:2,background:n,border:"1px solid rgba(0,0,0,0.12)",flexShrink:0}}),e.createElement("span",{style:{fontFamily:"monospace",fontSize:11}},n)))))))))};var x,B,E;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif',
    background: '#fff'
  }}>
      <h2 style={{
      fontSize: 20,
      fontWeight: 700,
      color: '#111827',
      marginBottom: 8
    }}>Badge</h2>
      <p style={{
      fontSize: 13,
      color: '#6b7280',
      marginBottom: 40
    }}>
        Pill labels for status, categories, or counts. Height auto · border-radius 9999px · font 12px/600.
      </p>

      <Section title="Text badges">
        <Row gap={12}>
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="outline-secondary">Outline Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="caution">Caution</Badge>
          <Badge variant="verified">Verified</Badge>
        </Row>
      </Section>

      <Section title="With leading icon">
        <Row gap={12}>
          <Badge variant="default" icon={<CheckIcon />}>Default</Badge>
          <Badge variant="secondary" icon={<AlertCircleIcon />}>Secondary</Badge>
          <Badge variant="outline" icon={<AlertCircleIcon />}>Outline</Badge>
          <Badge variant="destructive" icon={<AlertCircleIcon />}>Destructive</Badge>
          <Badge variant="success" icon={<CheckIcon />}>Success</Badge>
          <Badge variant="warning" icon={<AlertCircleIcon />}>Warning</Badge>
          <Badge variant="caution" icon={<AlertCircleIcon />}>Caution</Badge>
          <Badge variant="verified" icon={<ShieldIcon />}>Verified</Badge>
        </Row>
      </Section>

      <Section title="Badge Number — default | secondary | outline | destructive">
        <Row gap={12}>
          <BadgeNumber variant="default">8</BadgeNumber>
          <BadgeNumber variant="default">42</BadgeNumber>
          <BadgeNumber variant="secondary">8</BadgeNumber>
          <BadgeNumber variant="secondary">42</BadgeNumber>
          <BadgeNumber variant="outline">8</BadgeNumber>
          <BadgeNumber variant="outline">42</BadgeNumber>
          <BadgeNumber variant="destructive">8</BadgeNumber>
          <BadgeNumber variant="destructive">99+</BadgeNumber>
        </Row>
      </Section>
    </div>
}`,...(E=(B=m.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var S,h,k;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Status Variants',
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif',
    background: '#fff'
  }}>
      <h2 style={{
      fontSize: 20,
      fontWeight: 700,
      color: '#111827',
      marginBottom: 8
    }}>Status Badges</h2>
      <p style={{
      fontSize: 13,
      color: '#6b7280',
      marginBottom: 40
    }}>
        Semantic colour tokens from status palette. Each variant uses its own bg/border/text triplet.
      </p>

      {[{
      variant: 'default',
      label: 'Default',
      bg: '#0069b4',
      border: '#0069b4',
      text: '#f7f8f8'
    }, {
      variant: 'secondary',
      label: 'Secondary',
      bg: '#f5f5f5',
      border: '#f5f5f5',
      text: '#41434b'
    }, {
      variant: 'outline',
      label: 'Outline',
      bg: 'transparent',
      border: '#d9dade',
      text: '#1f1f21'
    }, {
      variant: 'outline-secondary',
      label: 'Outline Secondary',
      bg: 'transparent',
      border: '#d9dade',
      text: '#41434b'
    }, {
      variant: 'destructive',
      label: 'Destructive',
      bg: '#fee2e2',
      border: '#fecaca',
      text: '#dc2626'
    }, {
      variant: 'success',
      label: 'Success',
      bg: '#f0fdf4',
      border: '#16a34a',
      text: '#16a34a'
    }, {
      variant: 'warning',
      label: 'Warning',
      bg: '#fff7ed',
      border: '#ea580c',
      text: '#ea580c'
    }, {
      variant: 'caution',
      label: 'Caution',
      bg: '#fffbeb',
      border: '#f59e0b',
      text: '#f59e0b'
    }, {
      variant: 'verified',
      label: 'Verified',
      bg: '#eff6ff',
      border: '#bfdbfe',
      text: '#2563eb'
    }].map(({
      variant,
      label,
      bg,
      border,
      text
    }) => <div key={variant} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginBottom: 16
    }}>
          <div style={{
        width: 160
      }}>
            <Badge variant={variant}>{label}</Badge>
          </div>
          <div style={{
        display: 'flex',
        gap: 24,
        fontSize: 11,
        fontFamily: 'monospace',
        color: '#6b7280'
      }}>
            <span>bg: {bg}</span>
            <span>border: {border}</span>
            <span>text: {text}</span>
          </div>
        </div>)}
    </div>
}`,...(k=(h=g.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var w,z,R;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Common Patterns',
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif',
    background: '#fff'
  }}>
      <h2 style={{
      fontSize: 20,
      fontWeight: 700,
      color: '#111827',
      marginBottom: 40
    }}>Common Patterns</h2>

      <Section title="Order statuses">
        <Row gap={8}>
          <Badge variant="success" icon={<CheckIcon />}>Delivered</Badge>
          <Badge variant="default">Processing</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="caution">On Hold</Badge>
          <Badge variant="destructive">Cancelled</Badge>
          <Badge variant="secondary">Draft</Badge>
        </Row>
      </Section>

      <Section title="Notification counts">
        <Row gap={16}>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontSize: 14,
          color: '#374151'
        }}>
            Inbox <BadgeNumber variant="destructive">3</BadgeNumber>
          </div>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontSize: 14,
          color: '#374151'
        }}>
            Updates <BadgeNumber variant="default">12</BadgeNumber>
          </div>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontSize: 14,
          color: '#374151'
        }}>
            Archived <BadgeNumber variant="secondary">99+</BadgeNumber>
          </div>
        </Row>
      </Section>

      <Section title="Feature labels">
        <Row gap={8}>
          <Badge variant="verified" icon={<ShieldIcon />}>Verified Seller</Badge>
          <Badge variant="default">New</Badge>
          <Badge variant="caution">Beta</Badge>
          <Badge variant="outline">Pro</Badge>
        </Row>
      </Section>
    </div>
}`,...(R=(z=p.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var I,W,F;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Token Reference',
  render: () => {
    const rows = [{
      variant: 'default',
      bg: '#0069b4',
      border: '#0069b4',
      text: '#f7f8f8',
      token: '--color-base-primary'
    }, {
      variant: 'secondary',
      bg: '#f5f5f5',
      border: '#f5f5f5',
      text: '#41434b',
      token: '--color-base-secondary'
    }, {
      variant: 'outline',
      bg: 'transp.',
      border: '#d9dade',
      text: '#1f1f21',
      token: '--color-base-input'
    }, {
      variant: 'outline-secondary',
      bg: 'transp.',
      border: '#d9dade',
      text: '#41434b',
      token: '--color-base-input'
    }, {
      variant: 'destructive',
      bg: '#fee2e2',
      border: '#fecaca',
      text: '#dc2626',
      token: '--color-base-destructive'
    }, {
      variant: 'success',
      bg: '#f0fdf4',
      border: '#16a34a',
      text: '#16a34a',
      token: '--color-status-success-*'
    }, {
      variant: 'warning',
      bg: '#fff7ed',
      border: '#ea580c',
      text: '#ea580c',
      token: '--color-status-warning-*'
    }, {
      variant: 'caution',
      bg: '#fffbeb',
      border: '#f59e0b',
      text: '#f59e0b',
      token: '--color-status-caution-*'
    }, {
      variant: 'verified',
      bg: '#eff6ff',
      border: '#bfdbfe',
      text: '#2563eb',
      token: 'info blue (hardcoded)'
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
      gap: 5
    }}>
        <span style={{
        width: 12,
        height: 12,
        borderRadius: 2,
        background: color === 'transp.' ? 'transparent' : color,
        border: '1px solid rgba(0,0,0,0.15)',
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
          <strong>Dimensions:</strong> padding=2px 10px · border-radius=9999px · font=12px/600<br />
          <strong>BadgeNumber:</strong> height=20px · min-width=20px · padding=0 6px · font=11px/700
        </div>

        <table style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr>{['Variant', 'Preview', 'Background', 'Border', 'Text', 'Token'].map(h => <th key={h} style={th}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map(({
            variant,
            bg,
            border,
            text,
            token
          }, i) => <tr key={variant} style={{
            background: i % 2 === 0 ? '#fafafa' : '#fff'
          }}>
                <td style={{
              ...td,
              fontFamily: 'monospace',
              fontSize: 11,
              color: '#111827'
            }}>{variant}</td>
                <td style={td}><Badge variant={variant}>{variant}</Badge></td>
                <td style={td}>{sw(bg)}</td>
                <td style={td}>{sw(border)}</td>
                <td style={td}>{sw(text)}</td>
                <td style={{
              ...td,
              fontFamily: 'monospace',
              fontSize: 11,
              color: '#6b7280'
            }}>{token}</td>
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(F=(W=b.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var C,N,T;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Status Badges (O/R/P)',
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif',
    background: '#fff'
  }}>
      <h2 style={{
      fontSize: 20,
      fontWeight: 700,
      color: '#111827',
      marginBottom: 8
    }}>Badges/Status</h2>
      <p style={{
      fontSize: 13,
      color: '#6b7280',
      marginBottom: 40
    }}>
        Forecasting/pipeline status badges — Optimistic, Realistic, Pessimistic.
        Letter circle prefix + full label. Component: <code style={{
        fontSize: 11,
        background: '#f3f4f6',
        padding: '1px 4px',
        borderRadius: 3
      }}>BadgeStatus</code>
      </p>

      <div style={{
      marginBottom: 32
    }}>
        <h3 style={{
        fontSize: 13,
        fontWeight: 700,
        color: '#111827',
        margin: '0 0 16px',
        textTransform: 'uppercase',
        letterSpacing: '0.06em'
      }}>All variants</h3>
        <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
          <BadgeStatus variant="optimistic" />
          <BadgeStatus variant="realistic" />
          <BadgeStatus variant="pessimistic" />
        </div>
      </div>

      <div style={{
      marginBottom: 32
    }}>
        <h3 style={{
        fontSize: 13,
        fontWeight: 700,
        color: '#111827',
        margin: '0 0 16px',
        textTransform: 'uppercase',
        letterSpacing: '0.06em'
      }}>In context — forecast pipeline</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        maxWidth: 400
      }}>
          {[{
          label: 'Q1 Target',
          badge: 'optimistic'
        }, {
          label: 'Q2 Pipeline',
          badge: 'realistic'
        }, {
          label: 'Q3 Forecast',
          badge: 'pessimistic'
        }, {
          label: 'Annual Goal',
          badge: 'optimistic'
        }].map(({
          label,
          badge
        }) => <div key={label} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 16px',
          borderRadius: 8,
          border: '1px solid #e5e7eb'
        }}>
              <span style={{
            fontSize: 14,
            color: '#111827'
          }}>{label}</span>
              <BadgeStatus variant={badge} />
            </div>)}
        </div>
      </div>

      <div>
        <h3 style={{
        fontSize: 13,
        fontWeight: 700,
        color: '#111827',
        margin: '0 0 16px',
        textTransform: 'uppercase',
        letterSpacing: '0.06em'
      }}>Token mapping</h3>
        <table style={{
        borderCollapse: 'collapse',
        fontSize: 12,
        fontFamily: 'system-ui, sans-serif'
      }}>
          <thead>
            <tr>
              {['Variant', 'Preview', 'Background token', 'Border token', 'Text token'].map(h => <th key={h} style={{
              textAlign: 'left',
              padding: '6px 12px',
              fontSize: 10,
              fontWeight: 700,
              color: '#6b7280',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              borderBottom: '2px solid #e5e7eb'
            }}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {[{
            variant: 'optimistic',
            token: '--color-status-success-*',
            bg: '#f0fdf4',
            border: '#16a34a',
            text: '#16a34a'
          }, {
            variant: 'realistic',
            token: '--color-base-primary',
            bg: '#eff6ff',
            border: '#0069b4',
            text: '#0069b4'
          }, {
            variant: 'pessimistic',
            token: '--color-status-warning-*',
            bg: '#fff7ed',
            border: '#ea580c',
            text: '#ea580c'
          }].map(({
            variant,
            token,
            bg,
            border,
            text
          }, i) => <tr key={variant} style={{
            background: i % 2 === 0 ? '#fafafa' : '#fff'
          }}>
                <td style={{
              padding: '10px 12px',
              fontWeight: 600,
              color: '#111827',
              textTransform: 'capitalize'
            }}>{variant}</td>
                <td style={{
              padding: '10px 12px'
            }}><BadgeStatus variant={variant} /></td>
                <td style={{
              padding: '10px 12px',
              fontFamily: 'monospace',
              fontSize: 11,
              color: '#6b7280'
            }}>{token}</td>
                <td style={{
              padding: '10px 12px'
            }}>
                  <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5
              }}>
                    <span style={{
                  width: 12,
                  height: 12,
                  borderRadius: 2,
                  background: border,
                  border: '1px solid rgba(0,0,0,0.12)',
                  flexShrink: 0
                }} />
                    <span style={{
                  fontFamily: 'monospace',
                  fontSize: 11
                }}>{border}</span>
                  </span>
                </td>
                <td style={{
              padding: '10px 12px'
            }}>
                  <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5
              }}>
                    <span style={{
                  width: 12,
                  height: 12,
                  borderRadius: 2,
                  background: text,
                  border: '1px solid rgba(0,0,0,0.12)',
                  flexShrink: 0
                }} />
                    <span style={{
                  fontFamily: 'monospace',
                  fontSize: 11
                }}>{text}</span>
                  </span>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>
}`,...(T=(N=u.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const L=["AllVariants","StatusVariants","CommonPatterns","TokenReference","StatusBadges"];export{m as AllVariants,p as CommonPatterns,u as StatusBadges,g as StatusVariants,b as TokenReference,L as __namedExportsOrder,G as default};
