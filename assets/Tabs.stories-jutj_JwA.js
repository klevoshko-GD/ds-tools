import{R as e,r as A}from"./index-CwcVQgaJ.js";import{T as u}from"./Tabs-C2izdUid.js";const w={title:"Design Tokens/Tabs",component:u,parameters:{layout:"padded",docs:{description:{component:"Segmented control (pill-style tabs). Blue container, white active pill, transparent inactive tabs. Sizes: lg (default) and sm. Optional numeric counter per tab. Ref: Figma node 59:25693."}}}};function i({title:l,children:n}){return e.createElement("div",{style:{marginBottom:40,fontFamily:"system-ui, sans-serif"}},e.createElement("div",{style:{fontSize:11,fontWeight:700,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:16}},l),e.createElement("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:24}},n))}function t({label:l,children:n}){return e.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:8}},n,e.createElement("span",{style:{fontSize:11,color:"#9ca3af",fontFamily:"monospace"}},l))}function a({tabs:l,size:n,defaultActive:c}){var b;const[s,C]=A.useState(c??((b=l[0])==null?void 0:b.id));return e.createElement(u,{tabs:l,active:s,onChange:C,size:n})}const o={name:"Default (2 tabs)",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:24}},"Tabs"),e.createElement(i,{title:"2 Parts — Large"},e.createElement(t,{label:"first active"},e.createElement(a,{tabs:[{id:"headcount",label:"Headcount"},{id:"revenue",label:"Revenue"}],defaultActive:"headcount"})),e.createElement(t,{label:"second active"},e.createElement(a,{tabs:[{id:"headcount",label:"Headcount"},{id:"revenue",label:"Revenue"}],defaultActive:"revenue"}))),e.createElement(i,{title:"3 Parts — Large"},e.createElement(t,{label:"interactive"},e.createElement(a,{tabs:[{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"quarter",label:"Quarter"}],defaultActive:"week"}))),e.createElement(i,{title:"4 Parts — Large"},e.createElement(t,{label:"interactive"},e.createElement(a,{tabs:[{id:"q1",label:"Q1"},{id:"q2",label:"Q2"},{id:"q3",label:"Q3"},{id:"q4",label:"Q4"}],defaultActive:"q1"}))),e.createElement(i,{title:"2 Parts — Small"},e.createElement(t,{label:"first active"},e.createElement(a,{size:"sm",tabs:[{id:"headcount",label:"Headcount"},{id:"revenue",label:"Revenue"}],defaultActive:"headcount"})),e.createElement(t,{label:"second active"},e.createElement(a,{size:"sm",tabs:[{id:"headcount",label:"Headcount"},{id:"revenue",label:"Revenue"}],defaultActive:"revenue"}))),e.createElement(i,{title:"3 Parts — Small"},e.createElement(t,{label:"interactive"},e.createElement(a,{size:"sm",tabs:[{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"quarter",label:"Quarter"}],defaultActive:"week"}))))},r={name:"With Counters",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:24}},"Tabs — With Counters"),e.createElement(i,{title:"Large"},e.createElement(t,{label:"first active"},e.createElement(a,{tabs:[{id:"open",label:"Open",count:12},{id:"closed",label:"Closed",count:4}],defaultActive:"open"})),e.createElement(t,{label:"second active"},e.createElement(a,{tabs:[{id:"open",label:"Open",count:12},{id:"closed",label:"Closed",count:4}],defaultActive:"closed"})),e.createElement(t,{label:"3 parts"},e.createElement(a,{tabs:[{id:"all",label:"All",count:28},{id:"active",label:"Active",count:15},{id:"archived",label:"Archived",count:3}],defaultActive:"all"}))),e.createElement(i,{title:"Small"},e.createElement(t,{label:"interactive"},e.createElement(a,{size:"sm",tabs:[{id:"open",label:"Open",count:12},{id:"closed",label:"Closed",count:4}],defaultActive:"open"}))))},d={name:"In Context — SRP View Toggle",render:()=>{function l(){const[n,c]=A.useState("headcount"),s={headcount:e.createElement("div",{style:{padding:"16px 0",color:"#6b7280",fontSize:13}},"Headcount view — Jan 194 · Feb 171 · Mar 178 · Apr 178 · May 186 · Jun 186 · Jul 185 · …"),revenue:e.createElement("div",{style:{padding:"16px 0",color:"#6b7280",fontSize:13}},"Revenue view — SPT baseline + Optimistic / Realistic / Pessimistic scenarios")};return e.createElement("div",{style:{fontFamily:"system-ui, sans-serif",padding:32,background:"#f7f8f8",borderRadius:8}},e.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16}},e.createElement("div",{style:{fontSize:16,fontWeight:700,color:"#111827"}},"SRP Account Overview"),e.createElement(u,{tabs:[{id:"headcount",label:"Headcount"},{id:"revenue",label:"Revenue"}],active:n,onChange:c})),e.createElement("div",{style:{background:"#fff",borderRadius:6,border:"1px solid #e5e7eb",padding:"0 16px"}},s[n]))}return e.createElement(l,null)}};var m,v,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Default (2 tabs)',
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
    }}>Tabs</h2>

      <Section title="2 Parts — Large">
        <Labelled label="first active">
          <Controlled tabs={[{
          id: 'headcount',
          label: 'Headcount'
        }, {
          id: 'revenue',
          label: 'Revenue'
        }]} defaultActive="headcount" />
        </Labelled>
        <Labelled label="second active">
          <Controlled tabs={[{
          id: 'headcount',
          label: 'Headcount'
        }, {
          id: 'revenue',
          label: 'Revenue'
        }]} defaultActive="revenue" />
        </Labelled>
      </Section>

      <Section title="3 Parts — Large">
        <Labelled label="interactive">
          <Controlled tabs={[{
          id: 'week',
          label: 'Week'
        }, {
          id: 'month',
          label: 'Month'
        }, {
          id: 'quarter',
          label: 'Quarter'
        }]} defaultActive="week" />
        </Labelled>
      </Section>

      <Section title="4 Parts — Large">
        <Labelled label="interactive">
          <Controlled tabs={[{
          id: 'q1',
          label: 'Q1'
        }, {
          id: 'q2',
          label: 'Q2'
        }, {
          id: 'q3',
          label: 'Q3'
        }, {
          id: 'q4',
          label: 'Q4'
        }]} defaultActive="q1" />
        </Labelled>
      </Section>

      <Section title="2 Parts — Small">
        <Labelled label="first active">
          <Controlled size="sm" tabs={[{
          id: 'headcount',
          label: 'Headcount'
        }, {
          id: 'revenue',
          label: 'Revenue'
        }]} defaultActive="headcount" />
        </Labelled>
        <Labelled label="second active">
          <Controlled size="sm" tabs={[{
          id: 'headcount',
          label: 'Headcount'
        }, {
          id: 'revenue',
          label: 'Revenue'
        }]} defaultActive="revenue" />
        </Labelled>
      </Section>

      <Section title="3 Parts — Small">
        <Labelled label="interactive">
          <Controlled size="sm" tabs={[{
          id: 'week',
          label: 'Week'
        }, {
          id: 'month',
          label: 'Month'
        }, {
          id: 'quarter',
          label: 'Quarter'
        }]} defaultActive="week" />
        </Labelled>
      </Section>
    </div>
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var p,g,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'With Counters',
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
    }}>Tabs — With Counters</h2>

      <Section title="Large">
        <Labelled label="first active">
          <Controlled tabs={[{
          id: 'open',
          label: 'Open',
          count: 12
        }, {
          id: 'closed',
          label: 'Closed',
          count: 4
        }]} defaultActive="open" />
        </Labelled>
        <Labelled label="second active">
          <Controlled tabs={[{
          id: 'open',
          label: 'Open',
          count: 12
        }, {
          id: 'closed',
          label: 'Closed',
          count: 4
        }]} defaultActive="closed" />
        </Labelled>
        <Labelled label="3 parts">
          <Controlled tabs={[{
          id: 'all',
          label: 'All',
          count: 28
        }, {
          id: 'active',
          label: 'Active',
          count: 15
        }, {
          id: 'archived',
          label: 'Archived',
          count: 3
        }]} defaultActive="all" />
        </Labelled>
      </Section>

      <Section title="Small">
        <Labelled label="interactive">
          <Controlled size="sm" tabs={[{
          id: 'open',
          label: 'Open',
          count: 12
        }, {
          id: 'closed',
          label: 'Closed',
          count: 4
        }]} defaultActive="open" />
        </Labelled>
      </Section>
    </div>
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,y,E;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'In Context — SRP View Toggle',
  render: () => {
    function SRPDemo() {
      const [view, setView] = useState('headcount');
      const content = {
        headcount: <div style={{
          padding: '16px 0',
          color: '#6b7280',
          fontSize: 13
        }}>
            Headcount view — Jan 194 · Feb 171 · Mar 178 · Apr 178 · May 186 · Jun 186 · Jul 185 · …
          </div>,
        revenue: <div style={{
          padding: '16px 0',
          color: '#6b7280',
          fontSize: 13
        }}>
            Revenue view — SPT baseline + Optimistic / Realistic / Pessimistic scenarios
          </div>
      };
      return <div style={{
        fontFamily: 'system-ui, sans-serif',
        padding: 32,
        background: '#f7f8f8',
        borderRadius: 8
      }}>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 16
        }}>
            <div style={{
            fontSize: 16,
            fontWeight: 700,
            color: '#111827'
          }}>SRP Account Overview</div>
            <Tabs tabs={[{
            id: 'headcount',
            label: 'Headcount'
          }, {
            id: 'revenue',
            label: 'Revenue'
          }]} active={view} onChange={setView} />
          </div>
          <div style={{
          background: '#fff',
          borderRadius: 6,
          border: '1px solid #e5e7eb',
          padding: '0 16px'
        }}>
            {content[view]}
          </div>
        </div>;
    }
    return <SRPDemo />;
  }
}`,...(E=(y=d.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const x=["Default","WithCounters","InContext"];export{o as Default,d as InContext,r as WithCounters,x as __namedExportsOrder,w as default};
