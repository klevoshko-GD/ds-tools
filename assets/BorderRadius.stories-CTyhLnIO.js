import{R as e}from"./index-CwcVQgaJ.js";import{P as u,S as o,R as m,l}from"./tokens-B2-UuFIc.js";const x=["rounded-none","rounded-xs","rounded-sm","rounded-md","rounded-lg","rounded-xl","rounded-2xl","rounded-3xl","rounded-4xl","rounded-full"],g={"rounded-none":"Data tables, sharp rule lines","rounded-xs":"Micro badges, tight labels","rounded-sm":"Badges, tags, small pills","rounded-md":"Inputs, buttons (default)","rounded-lg":"Cards, dropdowns, modals","rounded-xl":"Sheet panels, popovers","rounded-2xl":"Elevated containers","rounded-3xl":"Large pill shapes","rounded-4xl":"Hero containers","rounded-full":"Circular avatars, pill buttons"},d=x.map(n=>{const t=`border-radius-${n}`;return l[t]!=null?{name:n,key:t,value:l[t]}:null}).filter(Boolean),S={title:"Design Tokens/Border Radius",parameters:{layout:"fullscreen",docs:{description:{component:"Corner rounding scale. Match the component size to its rounding — larger surfaces use larger radii."}}}},r={name:"Border Radius Scale",render:()=>e.createElement(u,null,e.createElement(o,null,"Border Radius Scale"),e.createElement("p",{style:{fontSize:"13px",color:"#6B7280",margin:"0 0 32px"}},"Match component size to rounding. Larger surfaces use larger radii."),e.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"32px",alignItems:"flex-end"}},d.map(({name:n,key:t,value:a})=>e.createElement(m,{key:t,name:n,value:a,tokenKey:t}))),e.createElement("div",{style:{marginTop:"48px"}},e.createElement(o,null,"Usage Guide"),e.createElement("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"12px"}},e.createElement("thead",null,e.createElement("tr",{style:{borderBottom:"2px solid #E5E7EB"}},["Token","Value","CSS var","Use for"].map(n=>e.createElement("th",{key:n,style:{textAlign:"left",padding:"8px 12px",fontSize:"10px",fontWeight:700,color:"#6B7280",textTransform:"uppercase",letterSpacing:"0.06em"}},n)))),e.createElement("tbody",null,d.map(({name:n,key:t,value:a},c)=>e.createElement("tr",{key:t,style:{borderBottom:"1px solid #F3F4F6",background:c%2===0?"#FAFAFA":"#FFFFFF"}},e.createElement("td",{style:{padding:"8px 12px",fontWeight:600,color:"#111827"}},n),e.createElement("td",{style:{padding:"8px 12px",fontFamily:"monospace",color:"#374151"}},a),e.createElement("td",{style:{padding:"8px 12px",fontFamily:"monospace",color:"#6B7280",fontSize:"11px"}},"--",t),e.createElement("td",{style:{padding:"8px 12px",color:"#6B7280"}},g[n]||"—")))))))};var s,i,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Border Radius Scale',
  render: () => <Page>
      <SectionTitle>Border Radius Scale</SectionTitle>
      <p style={{
      fontSize: '13px',
      color: '#6B7280',
      margin: '0 0 32px'
    }}>
        Match component size to rounding. Larger surfaces use larger radii.
      </p>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '32px',
      alignItems: 'flex-end'
    }}>
        {radiusEntries.map(({
        name,
        key,
        value
      }) => <RadiusSwatch key={key} name={name} value={value} tokenKey={key} />)}
      </div>

      {/* Usage table */}
      <div style={{
      marginTop: '48px'
    }}>
        <SectionTitle>Usage Guide</SectionTitle>
        <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '12px'
      }}>
          <thead>
            <tr style={{
            borderBottom: '2px solid #E5E7EB'
          }}>
              {['Token', 'Value', 'CSS var', 'Use for'].map(h => <th key={h} style={{
              textAlign: 'left',
              padding: '8px 12px',
              fontSize: '10px',
              fontWeight: 700,
              color: '#6B7280',
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}>
                  {h}
                </th>)}
            </tr>
          </thead>
          <tbody>
            {radiusEntries.map(({
            name,
            key,
            value
          }, i) => <tr key={key} style={{
            borderBottom: '1px solid #F3F4F6',
            background: i % 2 === 0 ? '#FAFAFA' : '#FFFFFF'
          }}>
                <td style={{
              padding: '8px 12px',
              fontWeight: 600,
              color: '#111827'
            }}>{name}</td>
                <td style={{
              padding: '8px 12px',
              fontFamily: 'monospace',
              color: '#374151'
            }}>{value}</td>
                <td style={{
              padding: '8px 12px',
              fontFamily: 'monospace',
              color: '#6B7280',
              fontSize: '11px'
            }}>
                  --{key}
                </td>
                <td style={{
              padding: '8px 12px',
              color: '#6B7280'
            }}>{USAGE_NOTES[name] || '—'}</td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </Page>
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const E=["BorderRadiusScale"];export{r as BorderRadiusScale,E as __namedExportsOrder,S as default};
