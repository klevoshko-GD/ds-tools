import{r as g,R as e}from"./index-CwcVQgaJ.js";function I(){return e.createElement("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none","aria-hidden":"true"},e.createElement("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))}function z(){return e.createElement("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none","aria-hidden":"true"},e.createElement("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}))}function n({checked:r=!1,indeterminate:o=!1,disabled:a=!1,label:i,description:c,onChange:m,id:t,...d}){const l=g.useRef(null);g.useEffect(()=>{l.current&&(l.current.indeterminate=o)},[o]);const s=o?!1:r,w=["checkbox-box",s?"is-checked":"",o?"is-indeterminate":""].filter(Boolean).join(" ");return e.createElement("label",{className:["checkbox-root",a?"is-disabled":""].filter(Boolean).join(" "),htmlFor:t},e.createElement("span",{className:w},e.createElement("input",{ref:l,type:"checkbox",id:t,className:"checkbox-input",checked:s,disabled:a,onChange:m,"aria-checked":o?"mixed":s,...d}),e.createElement("span",{className:"checkbox-indicator"},o?e.createElement(z,null):s?e.createElement(I,null):null)),(i||c)&&e.createElement("span",{className:"checkbox-content"},i&&e.createElement("span",{className:"checkbox-label"},i),c&&e.createElement("span",{className:"checkbox-description"},c)))}n.__docgenInfo={description:`Checkbox component — matches Figma DS (AI) Checkbox component set.
States: unchecked | checked | indeterminate
Supports: label, description, disabled`,methods:[],displayName:"Checkbox",props:{checked:{defaultValue:{value:"false",computed:!1},required:!1},indeterminate:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const f=({children:r,gap:o=24,wrap:a=!0})=>e.createElement("div",{style:{display:"flex",alignItems:"flex-start",flexWrap:a?"wrap":"nowrap",gap:o}},r),b=({title:r,subtitle:o,children:a})=>e.createElement("div",{style:{marginBottom:40}},e.createElement("h3",{style:{fontSize:13,fontWeight:700,color:"#111827",margin:"0 0 4px",fontFamily:"system-ui, sans-serif",textTransform:"uppercase",letterSpacing:"0.06em"}},r),o&&e.createElement("p",{style:{fontSize:12,color:"#6b7280",margin:"0 0 16px",fontFamily:"system-ui, sans-serif"}},o),!o&&e.createElement("div",{style:{marginBottom:16}}),a),T={title:"Design Tokens/Checkbox",component:n,parameters:{layout:"fullscreen",docs:{description:{component:"Checkbox component — 16×16px box, 4px corner radius. States: unchecked, checked, indeterminate, disabled."}}}},p={name:"All States",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:8}},"Checkbox States"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:40}},"Box size: ",e.createElement("strong",null,"16×16px")," · Radius: ",e.createElement("strong",null,"4px")," · Checked fill: ",e.createElement("code",{style:{fontSize:11,background:"#f3f4f6",padding:"1px 4px",borderRadius:3}},"--color-base-primary (#0069b4)")),e.createElement(b,{title:"Unchecked / Checked / Indeterminate"},e.createElement(f,{gap:32},e.createElement(n,{id:"s1",label:"Unchecked"}),e.createElement(n,{id:"s2",checked:!0,label:"Checked"}),e.createElement(n,{id:"s3",indeterminate:!0,label:"Indeterminate"}))),e.createElement(b,{title:"Disabled"},e.createElement(f,{gap:32},e.createElement(n,{id:"d1",disabled:!0,label:"Disabled unchecked"}),e.createElement(n,{id:"d2",disabled:!0,checked:!0,label:"Disabled checked"}),e.createElement(n,{id:"d3",disabled:!0,indeterminate:!0,label:"Disabled indeterminate"}))),e.createElement(b,{title:"With description"},e.createElement(f,{gap:32},e.createElement(n,{id:"desc1",label:"Accept terms",description:"I agree to the terms and conditions."}),e.createElement(n,{id:"desc2",checked:!0,label:"Marketing emails",description:"Receive product updates and offers."}),e.createElement(n,{id:"desc3",disabled:!0,label:"Disabled option",description:"This option is currently unavailable."}))),e.createElement(b,{title:"No label (standalone box)"},e.createElement(f,{gap:24},e.createElement(n,{id:"bare1"}),e.createElement(n,{id:"bare2",checked:!0}),e.createElement(n,{id:"bare3",indeterminate:!0}),e.createElement(n,{id:"bare4",disabled:!0}),e.createElement(n,{id:"bare5",disabled:!0,checked:!0}))))},h={name:"Interactive",render:()=>{const[r,o]=g.useState([{id:1,label:"Option A",description:"First selectable option",checked:!1},{id:2,label:"Option B",description:"Second selectable option",checked:!0},{id:3,label:"Option C",description:"Third selectable option",checked:!1}]),a=r.every(t=>t.checked),i=r.some(t=>t.checked)&&!a,c=t=>o(d=>d.map(l=>l.id===t?{...l,checked:!l.checked}:l)),m=()=>o(t=>t.map(d=>({...d,checked:!a})));return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff",maxWidth:400}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:24}},"Interactive Checkboxes"),e.createElement("div",{style:{padding:16,border:"1px solid #e5e7eb",borderRadius:8}},e.createElement("div",{style:{marginBottom:16,paddingBottom:12,borderBottom:"1px solid #f3f4f6"}},e.createElement(n,{id:"all",checked:a,indeterminate:i,label:"Select all",onChange:m})),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:12}},r.map(t=>e.createElement(n,{key:t.id,id:`item-${t.id}`,checked:t.checked,label:t.label,description:t.description,onChange:()=>c(t.id)})))),e.createElement("p",{style:{fontSize:12,color:"#6b7280",marginTop:16}},"Selected: ",r.filter(t=>t.checked).map(t=>t.label).join(", ")||"none"))}},k={name:"Token Reference",render:()=>{const r=[{state:"Unchecked — default",bg:"#ffffff",border:"#d9dade",check:"—",token:"--color-base-input"},{state:"Unchecked — hover",bg:"#ffffff",border:"#91959f",check:"—",token:"--color-base-ring"},{state:"Checked",bg:"#0069b4",border:"#0069b4",check:"#f7f8f8",token:"--color-base-primary"},{state:"Indeterminate",bg:"#0069b4",border:"#0069b4",check:"#f7f8f8",token:"--color-base-primary"},{state:"Disabled",bg:"#ffffff",border:"#d9dade",check:"—",token:"opacity: 0.5"},{state:"Focus ring",bg:"—",border:"rgba(0,105,180,0.3)",check:"—",token:"--color-base-primary + 30%"}],o={textAlign:"left",padding:"8px 12px",fontSize:10,fontWeight:700,color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.06em",borderBottom:"2px solid #e5e7eb"},a={padding:"10px 12px",fontSize:12,borderBottom:"1px solid #f3f4f6",verticalAlign:"middle"},i=c=>c!=="—"?e.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:6}},e.createElement("span",{style:{width:12,height:12,borderRadius:2,background:c,border:"1px solid rgba(0,0,0,0.12)",flexShrink:0}}),e.createElement("span",{style:{fontFamily:"monospace",fontSize:11}},c)):e.createElement("span",{style:{color:"#9ca3af"}},"—");return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:24}},"Token Reference"),e.createElement("table",{style:{width:"100%",borderCollapse:"collapse"}},e.createElement("thead",null,e.createElement("tr",null,["State","Box fill","Border","Check color","Token"].map(c=>e.createElement("th",{key:c,style:o},c)))),e.createElement("tbody",null,r.map(({state:c,bg:m,border:t,check:d,token:l},s)=>e.createElement("tr",{key:c,style:{background:s%2===0?"#fafafa":"#fff"}},e.createElement("td",{style:{...a,fontWeight:600,color:"#111827"}},c),e.createElement("td",{style:a},i(m)),e.createElement("td",{style:a},i(t)),e.createElement("td",{style:a},i(d)),e.createElement("td",{style:{...a,fontFamily:"monospace",fontSize:11,color:"#6b7280"}},l))))))}};var u,y,x;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    }}>Checkbox States</h2>
      <p style={{
      fontSize: 13,
      color: '#6b7280',
      marginBottom: 40
    }}>
        Box size: <strong>16×16px</strong> · Radius: <strong>4px</strong> · Checked fill: <code style={{
        fontSize: 11,
        background: '#f3f4f6',
        padding: '1px 4px',
        borderRadius: 3
      }}>--color-base-primary (#0069b4)</code>
      </p>

      <Section title="Unchecked / Checked / Indeterminate">
        <Row gap={32}>
          <Checkbox id="s1" label="Unchecked" />
          <Checkbox id="s2" checked label="Checked" />
          <Checkbox id="s3" indeterminate label="Indeterminate" />
        </Row>
      </Section>

      <Section title="Disabled">
        <Row gap={32}>
          <Checkbox id="d1" disabled label="Disabled unchecked" />
          <Checkbox id="d2" disabled checked label="Disabled checked" />
          <Checkbox id="d3" disabled indeterminate label="Disabled indeterminate" />
        </Row>
      </Section>

      <Section title="With description">
        <Row gap={32}>
          <Checkbox id="desc1" label="Accept terms" description="I agree to the terms and conditions." />
          <Checkbox id="desc2" checked label="Marketing emails" description="Receive product updates and offers." />
          <Checkbox id="desc3" disabled label="Disabled option" description="This option is currently unavailable." />
        </Row>
      </Section>

      <Section title="No label (standalone box)">
        <Row gap={24}>
          <Checkbox id="bare1" />
          <Checkbox id="bare2" checked />
          <Checkbox id="bare3" indeterminate />
          <Checkbox id="bare4" disabled />
          <Checkbox id="bare5" disabled checked />
        </Row>
      </Section>
    </div>
}`,...(x=(y=p.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var E,S,C;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Interactive',
  render: () => {
    const [items, setItems] = useState([{
      id: 1,
      label: 'Option A',
      description: 'First selectable option',
      checked: false
    }, {
      id: 2,
      label: 'Option B',
      description: 'Second selectable option',
      checked: true
    }, {
      id: 3,
      label: 'Option C',
      description: 'Third selectable option',
      checked: false
    }]);
    const allChecked = items.every(i => i.checked);
    const someChecked = items.some(i => i.checked) && !allChecked;
    const toggle = id => setItems(prev => prev.map(i => i.id === id ? {
      ...i,
      checked: !i.checked
    } : i));
    const toggleAll = () => setItems(prev => prev.map(i => ({
      ...i,
      checked: !allChecked
    })));
    return <div style={{
      padding: 32,
      fontFamily: 'system-ui, sans-serif',
      background: '#fff',
      maxWidth: 400
    }}>
        <h2 style={{
        fontSize: 20,
        fontWeight: 700,
        color: '#111827',
        marginBottom: 24
      }}>Interactive Checkboxes</h2>

        <div style={{
        padding: 16,
        border: '1px solid #e5e7eb',
        borderRadius: 8
      }}>
          <div style={{
          marginBottom: 16,
          paddingBottom: 12,
          borderBottom: '1px solid #f3f4f6'
        }}>
            <Checkbox id="all" checked={allChecked} indeterminate={someChecked} label="Select all" onChange={toggleAll} />
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12
        }}>
            {items.map(item => <Checkbox key={item.id} id={\`item-\${item.id}\`} checked={item.checked} label={item.label} description={item.description} onChange={() => toggle(item.id)} />)}
          </div>
        </div>

        <p style={{
        fontSize: 12,
        color: '#6b7280',
        marginTop: 16
      }}>
          Selected: {items.filter(i => i.checked).map(i => i.label).join(', ') || 'none'}
        </p>
      </div>;
  }
}`,...(C=(S=h.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var v,B,R;k.parameters={...k.parameters,docs:{...(v=k.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Token Reference',
  render: () => {
    const rows = [{
      state: 'Unchecked — default',
      bg: '#ffffff',
      border: '#d9dade',
      check: '—',
      token: '--color-base-input'
    }, {
      state: 'Unchecked — hover',
      bg: '#ffffff',
      border: '#91959f',
      check: '—',
      token: '--color-base-ring'
    }, {
      state: 'Checked',
      bg: '#0069b4',
      border: '#0069b4',
      check: '#f7f8f8',
      token: '--color-base-primary'
    }, {
      state: 'Indeterminate',
      bg: '#0069b4',
      border: '#0069b4',
      check: '#f7f8f8',
      token: '--color-base-primary'
    }, {
      state: 'Disabled',
      bg: '#ffffff',
      border: '#d9dade',
      check: '—',
      token: 'opacity: 0.5'
    }, {
      state: 'Focus ring',
      bg: '—',
      border: 'rgba(0,105,180,0.3)',
      check: '—',
      token: '--color-base-primary + 30%'
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
    const swatch = color => color !== '—' ? <span style={{
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
        </span> : <span style={{
      color: '#9ca3af'
    }}>—</span>;
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
        <table style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr>{['State', 'Box fill', 'Border', 'Check color', 'Token'].map(h => <th key={h} style={th}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map(({
            state,
            bg,
            border,
            check,
            token
          }, i) => <tr key={state} style={{
            background: i % 2 === 0 ? '#fafafa' : '#fff'
          }}>
                <td style={{
              ...td,
              fontWeight: 600,
              color: '#111827'
            }}>{state}</td>
                <td style={td}>{swatch(bg)}</td>
                <td style={td}>{swatch(border)}</td>
                <td style={td}>{swatch(check)}</td>
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
}`,...(R=(B=k.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};const W=["AllStates","Interactive","TokenReference"];export{p as AllStates,h as Interactive,k as TokenReference,W as __namedExportsOrder,T as default};
