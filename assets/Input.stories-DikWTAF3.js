import{R as e}from"./index-CwcVQgaJ.js";import{I as t}from"./Input-BLwq4NQE.js";function g(){return e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},e.createElement("circle",{cx:"7",cy:"7",r:"4.5",stroke:"currentColor",strokeWidth:"1.5"}),e.createElement("path",{d:"M10.5 10.5 13 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}))}function W(){return e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},e.createElement("path",{d:"M2 8s2.5-4 6-4 6 4 6 4-2.5 4-6 4-6-4-6-4z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),e.createElement("circle",{cx:"8",cy:"8",r:"1.5",stroke:"currentColor",strokeWidth:"1.5"}))}function s(){return e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},e.createElement("rect",{x:"2",y:"4",width:"12",height:"9",rx:"1.5",stroke:"currentColor",strokeWidth:"1.5"}),e.createElement("path",{d:"M2 5l6 4 6-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}))}function z(){return e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},e.createElement("circle",{cx:"8",cy:"8",r:"6",stroke:"#dc2626",strokeWidth:"1.5"}),e.createElement("path",{d:"M8 5v4",stroke:"#dc2626",strokeWidth:"1.5",strokeLinecap:"round"}),e.createElement("circle",{cx:"8",cy:"11",r:"0.75",fill:"#dc2626"}))}const d=({children:i,gap:a=24,wrap:r=!0})=>e.createElement("div",{style:{display:"flex",alignItems:"flex-start",flexWrap:r?"wrap":"nowrap",gap:a}},i),n=({children:i,width:a=280})=>e.createElement("div",{style:{width:a,flexShrink:0}},i),l=({title:i,subtitle:a,children:r})=>e.createElement("div",{style:{marginBottom:40}},e.createElement("h3",{style:{fontSize:13,fontWeight:700,color:"#111827",margin:"0 0 4px",fontFamily:"system-ui, sans-serif",textTransform:"uppercase",letterSpacing:"0.06em"}},i),a&&e.createElement("p",{style:{fontSize:12,color:"#6b7280",margin:"0 0 16px",fontFamily:"system-ui, sans-serif"}},a),!a&&e.createElement("div",{style:{marginBottom:16}}),r),A={title:"Design Tokens/Input",component:t,parameters:{layout:"fullscreen",docs:{description:{component:"Input component — 36px height, 6px radius, 12px horizontal padding. States: default, focus (ring), error, disabled."}}}},m={name:"All States",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:8}},"Input States"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:40}},"Height: ",e.createElement("strong",null,"36px")," · Radius: ",e.createElement("strong",null,"6px")," · Border default: ",e.createElement("code",{style:{fontSize:11,background:"#f3f4f6",padding:"1px 4px",borderRadius:3}},"--color-base-input (#d9dade)")," · Focus: ",e.createElement("code",{style:{fontSize:11,background:"#f3f4f6",padding:"1px 4px",borderRadius:3}},"--color-base-ring (#91959f)")),e.createElement(l,{title:"Default, focus, filled, disabled"},e.createElement(d,{gap:24,wrap:!0},e.createElement(n,null,e.createElement(t,{id:"st-default",label:"Default",placeholder:"Placeholder"})),e.createElement(n,null,e.createElement(t,{id:"st-filled",label:"Filled",placeholder:"Placeholder",defaultValue:"Filled value"})),e.createElement(n,null,e.createElement(t,{id:"st-disabled",label:"Disabled",placeholder:"Placeholder",disabled:!0})),e.createElement(n,null,e.createElement(t,{id:"st-disabled-filled",label:"Disabled (filled)",defaultValue:"Filled value",disabled:!0})))),e.createElement(l,{title:"Error state"},e.createElement(d,{gap:24,wrap:!0},e.createElement(n,null,e.createElement(t,{id:"st-error",label:"Email",placeholder:"name@example.com",state:"error",errorMessage:"Please enter a valid email address."})),e.createElement(n,null,e.createElement(t,{id:"st-error-filled",label:"Email",defaultValue:"not-an-email",state:"error",errorMessage:"Please enter a valid email address."})))),e.createElement(l,{title:"With description"},e.createElement(d,{gap:24,wrap:!0},e.createElement(n,null,e.createElement(t,{id:"st-desc",label:"Username",placeholder:"e.g. john_doe",description:"Letters, numbers, and underscores only."})),e.createElement(n,null,e.createElement(t,{id:"st-desc2",label:"Password",type:"password",placeholder:"Enter password",description:"Minimum 8 characters."})))))},f={name:"With Icons",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:8}},"Input with Icons"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:40}},"Leading and trailing icon slots. Icons use ",e.createElement("code",{style:{fontSize:11,background:"#f3f4f6",padding:"1px 4px",borderRadius:3}},"--color-base-muted-foreground"),"."),e.createElement(l,{title:"Leading icon"},e.createElement(d,{gap:24,wrap:!0},e.createElement(n,null,e.createElement(t,{id:"icon-search",label:"Search",placeholder:"Search…",leadingIcon:e.createElement(g,null)})),e.createElement(n,null,e.createElement(t,{id:"icon-email",label:"Email",placeholder:"name@example.com",leadingIcon:e.createElement(s,null)})),e.createElement(n,null,e.createElement(t,{id:"icon-email-err",label:"Email",placeholder:"name@example.com",state:"error",leadingIcon:e.createElement(s,null),errorMessage:"Invalid email address."})))),e.createElement(l,{title:"Trailing icon"},e.createElement(d,{gap:24,wrap:!0},e.createElement(n,null,e.createElement(t,{id:"icon-pw",label:"Password",type:"password",placeholder:"Enter password",trailingIcon:e.createElement(W,null)})),e.createElement(n,null,e.createElement(t,{id:"icon-err-trailing",label:"Field",placeholder:"Enter value",state:"error",trailingIcon:e.createElement(z,null),errorMessage:"This field has an error."})))),e.createElement(l,{title:"Both icons"},e.createElement(d,{gap:24,wrap:!0},e.createElement(n,null,e.createElement(t,{id:"icon-both",label:"Search by email",placeholder:"name@example.com",leadingIcon:e.createElement(s,null),trailingIcon:e.createElement(g,null)})))))},p={name:"Common Patterns",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:40}},"Common Patterns"),e.createElement(l,{title:"Login form"},e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:320}},e.createElement(t,{id:"login-email",label:"Email",type:"email",placeholder:"name@example.com",leadingIcon:e.createElement(s,null)}),e.createElement(t,{id:"login-pw",label:"Password",type:"password",placeholder:"Enter your password",trailingIcon:e.createElement(W,null),description:"Forgot your password?"}))),e.createElement(l,{title:"Search bar"},e.createElement("div",{style:{maxWidth:400}},e.createElement(t,{id:"search",placeholder:"Search products…",leadingIcon:e.createElement(g,null)}))),e.createElement(l,{title:"Validation errors"},e.createElement(d,{gap:24,wrap:!0},e.createElement(n,null,e.createElement(t,{id:"val-email",label:"Email address",defaultValue:"notanemail",state:"error",leadingIcon:e.createElement(s,null),errorMessage:"Enter a valid email address."})),e.createElement(n,null,e.createElement(t,{id:"val-pw",label:"Password",type:"password",defaultValue:"abc",state:"error",trailingIcon:e.createElement(z,null),errorMessage:"Password must be at least 8 characters."})))))},u={name:"Token Reference",render:()=>{const i=[{state:"Default",bg:"#ffffff",border:"#d9dade",text:"#1f1f21",ph:"#91959f",token:"--color-base-input"},{state:"Focus",bg:"#ffffff",border:"#91959f",text:"#1f1f21",ph:"#91959f",token:"--color-base-ring"},{state:"Filled",bg:"#ffffff",border:"#d9dade",text:"#1f1f21",ph:"#91959f",token:"--color-base-input"},{state:"Error",bg:"#ffffff",border:"#dc2626",text:"#1f1f21",ph:"#91959f",token:"--color-base-destructive"},{state:"Error Focus",bg:"#ffffff",border:"#dc2626",text:"#1f1f21",ph:"#91959f",token:"--color-base-destructive + ring"},{state:"Disabled",bg:"#ffffff",border:"#d9dade",text:"#1f1f21",ph:"#91959f",token:"opacity: 0.5"}],a={textAlign:"left",padding:"8px 12px",fontSize:10,fontWeight:700,color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.06em",borderBottom:"2px solid #e5e7eb"},r={padding:"10px 12px",fontSize:12,borderBottom:"1px solid #f3f4f6",verticalAlign:"middle"},c=o=>e.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:6}},e.createElement("span",{style:{width:12,height:12,borderRadius:2,background:o,border:"1px solid rgba(0,0,0,0.12)",flexShrink:0}}),e.createElement("span",{style:{fontFamily:"monospace",fontSize:11}},o));return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:24}},"Token Reference"),e.createElement("div",{style:{marginBottom:24,padding:12,background:"#f9fafb",borderRadius:8,fontSize:12,color:"#374151"}},e.createElement("strong",null,"Dimensions:")," height=36px · padding=4px 12px · borderRadius=6px · borderWidth=1px"),e.createElement("table",{style:{width:"100%",borderCollapse:"collapse"}},e.createElement("thead",null,e.createElement("tr",null,["State","Background","Border","Text","Placeholder","Token"].map(o=>e.createElement("th",{key:o,style:a},o)))),e.createElement("tbody",null,i.map(({state:o,bg:B,border:F,text:P,ph:M,token:T},D)=>e.createElement("tr",{key:o,style:{background:D%2===0?"#fafafa":"#fff"}},e.createElement("td",{style:{...r,fontWeight:600,color:"#111827"}},o),e.createElement("td",{style:r},c(B)),e.createElement("td",{style:r},c(F)),e.createElement("td",{style:r},c(P)),e.createElement("td",{style:r},c(M)),e.createElement("td",{style:{...r,fontFamily:"monospace",fontSize:11,color:"#6b7280"}},T))))))}};var h,b,E;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'All States',
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
    }}>Input States</h2>
      <p style={{
      fontSize: 13,
      color: '#6b7280',
      marginBottom: 40
    }}>
        Height: <strong>36px</strong> · Radius: <strong>6px</strong> · Border default: <code style={{
        fontSize: 11,
        background: '#f3f4f6',
        padding: '1px 4px',
        borderRadius: 3
      }}>--color-base-input (#d9dade)</code> · Focus: <code style={{
        fontSize: 11,
        background: '#f3f4f6',
        padding: '1px 4px',
        borderRadius: 3
      }}>--color-base-ring (#91959f)</code>
      </p>

      <Section title="Default, focus, filled, disabled">
        <Row gap={24} wrap>
          <Col>
            <Input id="st-default" label="Default" placeholder="Placeholder" />
          </Col>
          <Col>
            <Input id="st-filled" label="Filled" placeholder="Placeholder" defaultValue="Filled value" />
          </Col>
          <Col>
            <Input id="st-disabled" label="Disabled" placeholder="Placeholder" disabled />
          </Col>
          <Col>
            <Input id="st-disabled-filled" label="Disabled (filled)" defaultValue="Filled value" disabled />
          </Col>
        </Row>
      </Section>

      <Section title="Error state">
        <Row gap={24} wrap>
          <Col>
            <Input id="st-error" label="Email" placeholder="name@example.com" state="error" errorMessage="Please enter a valid email address." />
          </Col>
          <Col>
            <Input id="st-error-filled" label="Email" defaultValue="not-an-email" state="error" errorMessage="Please enter a valid email address." />
          </Col>
        </Row>
      </Section>

      <Section title="With description">
        <Row gap={24} wrap>
          <Col>
            <Input id="st-desc" label="Username" placeholder="e.g. john_doe" description="Letters, numbers, and underscores only." />
          </Col>
          <Col>
            <Input id="st-desc2" label="Password" type="password" placeholder="Enter password" description="Minimum 8 characters." />
          </Col>
        </Row>
      </Section>
    </div>
}`,...(E=(b=m.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var y,x,w;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'With Icons',
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
    }}>Input with Icons</h2>
      <p style={{
      fontSize: 13,
      color: '#6b7280',
      marginBottom: 40
    }}>
        Leading and trailing icon slots. Icons use <code style={{
        fontSize: 11,
        background: '#f3f4f6',
        padding: '1px 4px',
        borderRadius: 3
      }}>--color-base-muted-foreground</code>.
      </p>

      <Section title="Leading icon">
        <Row gap={24} wrap>
          <Col>
            <Input id="icon-search" label="Search" placeholder="Search…" leadingIcon={<SearchIcon />} />
          </Col>
          <Col>
            <Input id="icon-email" label="Email" placeholder="name@example.com" leadingIcon={<MailIcon />} />
          </Col>
          <Col>
            <Input id="icon-email-err" label="Email" placeholder="name@example.com" state="error" leadingIcon={<MailIcon />} errorMessage="Invalid email address." />
          </Col>
        </Row>
      </Section>

      <Section title="Trailing icon">
        <Row gap={24} wrap>
          <Col>
            <Input id="icon-pw" label="Password" type="password" placeholder="Enter password" trailingIcon={<EyeIcon />} />
          </Col>
          <Col>
            <Input id="icon-err-trailing" label="Field" placeholder="Enter value" state="error" trailingIcon={<AlertIcon />} errorMessage="This field has an error." />
          </Col>
        </Row>
      </Section>

      <Section title="Both icons">
        <Row gap={24} wrap>
          <Col>
            <Input id="icon-both" label="Search by email" placeholder="name@example.com" leadingIcon={<MailIcon />} trailingIcon={<SearchIcon />} />
          </Col>
        </Row>
      </Section>
    </div>
}`,...(w=(x=f.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var S,I,k;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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

      <Section title="Login form">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        maxWidth: 320
      }}>
          <Input id="login-email" label="Email" type="email" placeholder="name@example.com" leadingIcon={<MailIcon />} />
          <Input id="login-pw" label="Password" type="password" placeholder="Enter your password" trailingIcon={<EyeIcon />} description="Forgot your password?" />
        </div>
      </Section>

      <Section title="Search bar">
        <div style={{
        maxWidth: 400
      }}>
          <Input id="search" placeholder="Search products…" leadingIcon={<SearchIcon />} />
        </div>
      </Section>

      <Section title="Validation errors">
        <Row gap={24} wrap>
          <Col>
            <Input id="val-email" label="Email address" defaultValue="notanemail" state="error" leadingIcon={<MailIcon />} errorMessage="Enter a valid email address." />
          </Col>
          <Col>
            <Input id="val-pw" label="Password" type="password" defaultValue="abc" state="error" trailingIcon={<AlertIcon />} errorMessage="Password must be at least 8 characters." />
          </Col>
        </Row>
      </Section>
    </div>
}`,...(k=(I=p.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var v,C,R;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Token Reference',
  render: () => {
    const rows = [{
      state: 'Default',
      bg: '#ffffff',
      border: '#d9dade',
      text: '#1f1f21',
      ph: '#91959f',
      token: '--color-base-input'
    }, {
      state: 'Focus',
      bg: '#ffffff',
      border: '#91959f',
      text: '#1f1f21',
      ph: '#91959f',
      token: '--color-base-ring'
    }, {
      state: 'Filled',
      bg: '#ffffff',
      border: '#d9dade',
      text: '#1f1f21',
      ph: '#91959f',
      token: '--color-base-input'
    }, {
      state: 'Error',
      bg: '#ffffff',
      border: '#dc2626',
      text: '#1f1f21',
      ph: '#91959f',
      token: '--color-base-destructive'
    }, {
      state: 'Error Focus',
      bg: '#ffffff',
      border: '#dc2626',
      text: '#1f1f21',
      ph: '#91959f',
      token: '--color-base-destructive + ring'
    }, {
      state: 'Disabled',
      bg: '#ffffff',
      border: '#d9dade',
      text: '#1f1f21',
      ph: '#91959f',
      token: 'opacity: 0.5'
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
          <strong>Dimensions:</strong> height=36px · padding=4px 12px · borderRadius=6px · borderWidth=1px
        </div>

        <table style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr>{['State', 'Background', 'Border', 'Text', 'Placeholder', 'Token'].map(h => <th key={h} style={th}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map(({
            state,
            bg,
            border,
            text,
            ph,
            token
          }, i) => <tr key={state} style={{
            background: i % 2 === 0 ? '#fafafa' : '#fff'
          }}>
                <td style={{
              ...td,
              fontWeight: 600,
              color: '#111827'
            }}>{state}</td>
                <td style={td}>{sw(bg)}</td>
                <td style={td}>{sw(border)}</td>
                <td style={td}>{sw(text)}</td>
                <td style={td}>{sw(ph)}</td>
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
}`,...(R=(C=u.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const _=["AllStates","WithIcons","CommonPatterns","TokenReference"];export{m as AllStates,p as CommonPatterns,u as TokenReference,f as WithIcons,_ as __namedExportsOrder,A as default};
