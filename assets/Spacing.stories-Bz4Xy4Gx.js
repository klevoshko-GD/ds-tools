import{R as e}from"./index-CwcVQgaJ.js";import{P as c,S as l,a as d,l as o}from"./tokens-B2-UuFIc.js";const g=["0","px","0-5","1","1-5","2","2-5","3","3-5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"],x=g.map(a=>{const t=`spacing-${a}`;return o[t]!=null?{step:a,key:t,value:o[t]}:null}).filter(Boolean),u={title:"Design Tokens/Spacing",parameters:{layout:"fullscreen",docs:{description:{component:"Spatial scale based on a 4 px base unit, Tailwind-compatible. Use these tokens for padding, margin, gap, and inset values."}}}},n={name:"Spacing Scale",render:()=>e.createElement(c,null,e.createElement(l,null,"Spacing Scale"),e.createElement("p",{style:{fontSize:"13px",color:"#6B7280",margin:"0 0 24px"}},"Base unit: ",e.createElement("strong",null,"4 px"),". Each bar is proportional to its pixel value (capped at 320 px for readability)."),e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px",padding:"0 0 8px",borderBottom:"1px solid #E5E7EB",marginBottom:"4px"}},e.createElement("div",{style:{width:"80px",textAlign:"right",fontSize:"10px",fontWeight:600,color:"#9CA3AF",letterSpacing:"0.06em",textTransform:"uppercase"}},"Step"),e.createElement("div",{style:{fontSize:"10px",fontWeight:600,color:"#9CA3AF",letterSpacing:"0.06em",textTransform:"uppercase"}},"Visual size")),x.map(({step:a,key:t,value:s})=>e.createElement(d,{key:t,name:a,value:s,tokenKey:t})),e.createElement("div",{style:{marginTop:"32px",padding:"16px",background:"#F9FAFB",borderRadius:"8px",fontSize:"12px",color:"#6B7280",lineHeight:1.6}},e.createElement("strong",{style:{color:"#374151"}},"Usage: "),"Reference as CSS custom properties: ",e.createElement("code",{style:{fontSize:"11px",background:"#F3F4F6",padding:"1px 5px",borderRadius:"3px"}},"var(--spacing-4)")," ","or JS: ",e.createElement("code",{style:{fontSize:"11px",background:"#F3F4F6",padding:"1px 5px",borderRadius:"3px"}},"spacing4")," ","or JSON key: ",e.createElement("code",{style:{fontSize:"11px",background:"#F3F4F6",padding:"1px 5px",borderRadius:"3px"}},'"spacing-4"')))};var r,p,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Spacing Scale',
  render: () => <Page>
      <SectionTitle>Spacing Scale</SectionTitle>
      <p style={{
      fontSize: '13px',
      color: '#6B7280',
      margin: '0 0 24px'
    }}>
        Base unit: <strong>4 px</strong>. Each bar is proportional to its pixel value (capped at 320 px for readability).
      </p>
      {/* Column headers */}
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '0 0 8px',
      borderBottom: '1px solid #E5E7EB',
      marginBottom: '4px'
    }}>
        <div style={{
        width: '80px',
        textAlign: 'right',
        fontSize: '10px',
        fontWeight: 600,
        color: '#9CA3AF',
        letterSpacing: '0.06em',
        textTransform: 'uppercase'
      }}>Step</div>
        <div style={{
        fontSize: '10px',
        fontWeight: 600,
        color: '#9CA3AF',
        letterSpacing: '0.06em',
        textTransform: 'uppercase'
      }}>Visual size</div>
      </div>
      {spacingEntries.map(({
      step,
      key,
      value
    }) => <SpacingSwatch key={key} name={step} value={value} tokenKey={key} />)}
      {/* Usage note */}
      <div style={{
      marginTop: '32px',
      padding: '16px',
      background: '#F9FAFB',
      borderRadius: '8px',
      fontSize: '12px',
      color: '#6B7280',
      lineHeight: 1.6
    }}>
        <strong style={{
        color: '#374151'
      }}>Usage: </strong>
        Reference as CSS custom properties: <code style={{
        fontSize: '11px',
        background: '#F3F4F6',
        padding: '1px 5px',
        borderRadius: '3px'
      }}>var(--spacing-4)</code>{' '}
        or JS: <code style={{
        fontSize: '11px',
        background: '#F3F4F6',
        padding: '1px 5px',
        borderRadius: '3px'
      }}>spacing4</code>{' '}
        or JSON key: <code style={{
        fontSize: '11px',
        background: '#F3F4F6',
        padding: '1px 5px',
        borderRadius: '3px'
      }}>"spacing-4"</code>
      </div>
    </Page>
}`,...(i=(p=n.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const f=["SpacingScale"];export{n as SpacingScale,f as __namedExportsOrder,u as default};
