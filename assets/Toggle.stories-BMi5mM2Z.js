import{R as e,r as d}from"./index-CwcVQgaJ.js";import{T as i}from"./Toggle-WRhNAhHb.js";const x={title:"Design Tokens/Toggle",component:i,parameters:{layout:"padded",docs:{description:{component:"Toggle With Text — switch with optional left/right labels. 45×24px pill track. OFF=gray, ON=primary-blue. Focus ring via keyboard. Ref: Figma node 53:9670."}}}};function o({title:a,children:n}){return e.createElement("div",{style:{marginBottom:40,fontFamily:"system-ui, sans-serif"}},e.createElement("div",{style:{fontSize:11,fontWeight:700,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:16}},a),e.createElement("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:32}},n))}function l({label:a,children:n}){return e.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:10}},n,e.createElement("span",{style:{fontSize:11,color:"#9ca3af",fontFamily:"monospace"}},a))}function t(a){const[n,c]=d.useState(a.defaultChecked??!1);return e.createElement(i,{...a,checked:n,onChange:c})}const r={name:"All States",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:24}},"Toggle With Text"),e.createElement(o,{title:"Default — OFF / ON"},e.createElement(l,{label:"OFF (default)"},e.createElement(t,{labelLeft:"Label",labelRight:"Label"})),e.createElement(l,{label:"ON"},e.createElement(t,{labelLeft:"Label",labelRight:"Label",defaultChecked:!0}))),e.createElement(o,{title:"Label positions"},e.createElement(l,{label:"left + right"},e.createElement(t,{labelLeft:"Label",labelRight:"Label"})),e.createElement(l,{label:"left only"},e.createElement(t,{labelLeft:"Label"})),e.createElement(l,{label:"right only"},e.createElement(t,{labelRight:"Label"})),e.createElement(l,{label:"no labels"},e.createElement(t,null))),e.createElement(o,{title:"Custom labels"},e.createElement(l,{label:"month / year"},e.createElement(t,{labelLeft:"Monthly",labelRight:"Annual"})),e.createElement(l,{label:"on / off"},e.createElement(t,{labelLeft:"Off",labelRight:"On",defaultChecked:!0})),e.createElement(l,{label:"headcount / revenue"},e.createElement(t,{labelLeft:"Headcount",labelRight:"Revenue"}))),e.createElement(o,{title:"Disabled"},e.createElement(l,{label:"disabled OFF"},e.createElement(i,{labelLeft:"Label",labelRight:"Label",checked:!1,disabled:!0})),e.createElement(l,{label:"disabled ON"},e.createElement(i,{labelLeft:"Label",labelRight:"Label",checked:!0,disabled:!0}))))},s={name:"Interactive",render:()=>{function a(){const[n,c]=d.useState(!1),[g,E]=d.useState(!0),[S,k]=d.useState(!1),b={display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid #f3f4f6"},f={fontSize:14,color:"#111827",fontFamily:"system-ui, sans-serif"},m={fontSize:12,color:"#6b7280",marginTop:2,fontFamily:"system-ui, sans-serif"};return e.createElement("div",{style:{width:400,background:"#fff",borderRadius:8,border:"1px solid #e5e7eb",padding:"0 20px",fontFamily:"system-ui, sans-serif"}},e.createElement("div",{style:{padding:"16px 0 8px",fontWeight:700,fontSize:15,color:"#111827"}},"Settings"),e.createElement("div",{style:b},e.createElement("div",null,e.createElement("div",{style:f},"Billing cycle"),e.createElement("div",{style:m},"Switch to annual billing and save 20%")),e.createElement(i,{labelLeft:"Monthly",labelRight:"Annual",checked:n,onChange:c})),e.createElement("div",{style:b},e.createElement("div",null,e.createElement("div",{style:f},"Email notifications"),e.createElement("div",{style:m},"Receive project and task updates")),e.createElement(i,{labelRight:g?"On":"Off",checked:g,onChange:E})),e.createElement("div",{style:{...b,borderBottom:"none"}},e.createElement("div",null,e.createElement("div",{style:f},"Dark mode"),e.createElement("div",{style:m},"Coming soon")),e.createElement(i,{labelRight:"Off",checked:S,onChange:k,disabled:!0})))}return e.createElement(a,null)}};var u,h,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
      marginBottom: 24
    }}>
        Toggle With Text
      </h2>

      <Section title="Default — OFF / ON">
        <Labelled label="OFF (default)">
          <Controlled labelLeft="Label" labelRight="Label" />
        </Labelled>
        <Labelled label="ON">
          <Controlled labelLeft="Label" labelRight="Label" defaultChecked />
        </Labelled>
      </Section>

      <Section title="Label positions">
        <Labelled label="left + right">
          <Controlled labelLeft="Label" labelRight="Label" />
        </Labelled>
        <Labelled label="left only">
          <Controlled labelLeft="Label" />
        </Labelled>
        <Labelled label="right only">
          <Controlled labelRight="Label" />
        </Labelled>
        <Labelled label="no labels">
          <Controlled />
        </Labelled>
      </Section>

      <Section title="Custom labels">
        <Labelled label="month / year">
          <Controlled labelLeft="Monthly" labelRight="Annual" />
        </Labelled>
        <Labelled label="on / off">
          <Controlled labelLeft="Off" labelRight="On" defaultChecked />
        </Labelled>
        <Labelled label="headcount / revenue">
          <Controlled labelLeft="Headcount" labelRight="Revenue" />
        </Labelled>
      </Section>

      <Section title="Disabled">
        <Labelled label="disabled OFF">
          <Toggle labelLeft="Label" labelRight="Label" checked={false} disabled />
        </Labelled>
        <Labelled label="disabled ON">
          <Toggle labelLeft="Label" labelRight="Label" checked disabled />
        </Labelled>
      </Section>
    </div>
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var L,p,v;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Interactive',
  render: () => {
    function Demo() {
      const [annual, setAnnual] = useState(false);
      const [notifications, setNotify] = useState(true);
      const [darkMode, setDark] = useState(false);
      const row = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 0',
        borderBottom: '1px solid #f3f4f6'
      };
      const label = {
        fontSize: 14,
        color: '#111827',
        fontFamily: 'system-ui, sans-serif'
      };
      const sub = {
        fontSize: 12,
        color: '#6b7280',
        marginTop: 2,
        fontFamily: 'system-ui, sans-serif'
      };
      return <div style={{
        width: 400,
        background: '#fff',
        borderRadius: 8,
        border: '1px solid #e5e7eb',
        padding: '0 20px',
        fontFamily: 'system-ui, sans-serif'
      }}>
          <div style={{
          padding: '16px 0 8px',
          fontWeight: 700,
          fontSize: 15,
          color: '#111827'
        }}>Settings</div>
          <div style={row}>
            <div>
              <div style={label}>Billing cycle</div>
              <div style={sub}>Switch to annual billing and save 20%</div>
            </div>
            <Toggle labelLeft="Monthly" labelRight="Annual" checked={annual} onChange={setAnnual} />
          </div>
          <div style={row}>
            <div>
              <div style={label}>Email notifications</div>
              <div style={sub}>Receive project and task updates</div>
            </div>
            <Toggle labelRight={notifications ? 'On' : 'Off'} checked={notifications} onChange={setNotify} />
          </div>
          <div style={{
          ...row,
          borderBottom: 'none'
        }}>
            <div>
              <div style={label}>Dark mode</div>
              <div style={sub}>Coming soon</div>
            </div>
            <Toggle labelRight="Off" checked={darkMode} onChange={setDark} disabled />
          </div>
        </div>;
    }
    return <Demo />;
  }
}`,...(v=(p=s.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const F=["Default","Interactive"];export{r as Default,s as Interactive,F as __namedExportsOrder,x as default};
