import{R as e,r as C}from"./index-CwcVQgaJ.js";function m({tabs:l=[],active:n,onChange:o,size:c="lg"}){return e.createElement("div",{className:["tabs",c==="sm"?"tabs--sm":""].filter(Boolean).join(" "),role:"tablist"},l.map(i=>{const d=i.id===n;return e.createElement("button",{key:i.id,role:"tab","aria-selected":d,className:["tabs__item",d?"tabs__item--active":""].filter(Boolean).join(" "),onClick:()=>o==null?void 0:o(i.id),type:"button"},e.createElement("span",{className:"tabs__label"},i.label),i.count!=null&&e.createElement("span",{className:"tabs__counter","aria-label":`${i.count} items`},i.count))}))}m.__docgenInfo={description:`Tabs — segmented control component.
Matches Figma DS "Tabs" component (node 59:25693).

Container: primary-blue background, rounded pill, 4px padding.
Active tab: white fill, blue text, subtle shadow.
Inactive tabs: transparent, white text.

Props:
  tabs     — array of { id, label, count? }
  active   — id of the currently active tab
  onChange — (id) => void
  size     — 'lg' (default) | 'sm'`,methods:[],displayName:"Tabs",props:{tabs:{defaultValue:{value:"[]",computed:!1},required:!1},size:{defaultValue:{value:"'lg'",computed:!1},required:!1}}};const w={title:"Design Tokens/Tabs",component:m,parameters:{layout:"padded",docs:{description:{component:"Segmented control (pill-style tabs). Blue container, white active pill, transparent inactive tabs. Sizes: lg (default) and sm. Optional numeric counter per tab. Ref: Figma node 59:25693."}}}};function r({title:l,children:n}){return e.createElement("div",{style:{marginBottom:40,fontFamily:"system-ui, sans-serif"}},e.createElement("div",{style:{fontSize:11,fontWeight:700,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:16}},l),e.createElement("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:24}},n))}function t({label:l,children:n}){return e.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:8}},n,e.createElement("span",{style:{fontSize:11,color:"#9ca3af",fontFamily:"monospace"}},l))}function a({tabs:l,size:n,defaultActive:o}){var d;const[c,i]=C.useState(o??((d=l[0])==null?void 0:d.id));return e.createElement(m,{tabs:l,active:c,onChange:i,size:n})}const s={name:"Default (2 tabs)",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:24}},"Tabs"),e.createElement(r,{title:"2 Parts — Large"},e.createElement(t,{label:"first active"},e.createElement(a,{tabs:[{id:"headcount",label:"Headcount"},{id:"revenue",label:"Revenue"}],defaultActive:"headcount"})),e.createElement(t,{label:"second active"},e.createElement(a,{tabs:[{id:"headcount",label:"Headcount"},{id:"revenue",label:"Revenue"}],defaultActive:"revenue"}))),e.createElement(r,{title:"3 Parts — Large"},e.createElement(t,{label:"interactive"},e.createElement(a,{tabs:[{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"quarter",label:"Quarter"}],defaultActive:"week"}))),e.createElement(r,{title:"4 Parts — Large"},e.createElement(t,{label:"interactive"},e.createElement(a,{tabs:[{id:"q1",label:"Q1"},{id:"q2",label:"Q2"},{id:"q3",label:"Q3"},{id:"q4",label:"Q4"}],defaultActive:"q1"}))),e.createElement(r,{title:"2 Parts — Small"},e.createElement(t,{label:"first active"},e.createElement(a,{size:"sm",tabs:[{id:"headcount",label:"Headcount"},{id:"revenue",label:"Revenue"}],defaultActive:"headcount"})),e.createElement(t,{label:"second active"},e.createElement(a,{size:"sm",tabs:[{id:"headcount",label:"Headcount"},{id:"revenue",label:"Revenue"}],defaultActive:"revenue"}))),e.createElement(r,{title:"3 Parts — Small"},e.createElement(t,{label:"interactive"},e.createElement(a,{size:"sm",tabs:[{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"quarter",label:"Quarter"}],defaultActive:"week"}))))},u={name:"With Counters",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:24}},"Tabs — With Counters"),e.createElement(r,{title:"Large"},e.createElement(t,{label:"first active"},e.createElement(a,{tabs:[{id:"open",label:"Open",count:12},{id:"closed",label:"Closed",count:4}],defaultActive:"open"})),e.createElement(t,{label:"second active"},e.createElement(a,{tabs:[{id:"open",label:"Open",count:12},{id:"closed",label:"Closed",count:4}],defaultActive:"closed"})),e.createElement(t,{label:"3 parts"},e.createElement(a,{tabs:[{id:"all",label:"All",count:28},{id:"active",label:"Active",count:15},{id:"archived",label:"Archived",count:3}],defaultActive:"all"}))),e.createElement(r,{title:"Small"},e.createElement(t,{label:"interactive"},e.createElement(a,{size:"sm",tabs:[{id:"open",label:"Open",count:12},{id:"closed",label:"Closed",count:4}],defaultActive:"open"}))))},b={name:"In Context — SRP View Toggle",render:()=>{function l(){const[n,o]=C.useState("headcount"),c={headcount:e.createElement("div",{style:{padding:"16px 0",color:"#6b7280",fontSize:13}},"Headcount view — Jan 194 · Feb 171 · Mar 178 · Apr 178 · May 186 · Jun 186 · Jul 185 · …"),revenue:e.createElement("div",{style:{padding:"16px 0",color:"#6b7280",fontSize:13}},"Revenue view — SPT baseline + Optimistic / Realistic / Pessimistic scenarios")};return e.createElement("div",{style:{fontFamily:"system-ui, sans-serif",padding:32,background:"#f7f8f8",borderRadius:8}},e.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16}},e.createElement("div",{style:{fontSize:16,fontWeight:700,color:"#111827"}},"SRP Account Overview"),e.createElement(m,{tabs:[{id:"headcount",label:"Headcount"},{id:"revenue",label:"Revenue"}],active:n,onChange:o})),e.createElement("div",{style:{background:"#fff",borderRadius:6,border:"1px solid #e5e7eb",padding:"0 16px"}},c[n]))}return e.createElement(l,null)}};var v,f,p;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(p=(f=s.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var g,h,y;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(h=u.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var E,S,A;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(A=(S=b.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const R=["Default","WithCounters","InContext"];export{s as Default,b as InContext,u as WithCounters,R as __namedExportsOrder,w as default};
