import{R as e}from"./index-CwcVQgaJ.js";import{A as i,a as n}from"./Avatar-BlIaFzw_.js";const c=({children:t,gap:a=24,wrap:s=!0})=>e.createElement("div",{style:{display:"flex",alignItems:"center",flexWrap:s?"wrap":"nowrap",gap:a}},t),l=({label:t,children:a})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8}},a,e.createElement("span",{style:{fontSize:11,color:"#6b7280",fontFamily:"system-ui, sans-serif"}},t)),r=({title:t,subtitle:a,children:s})=>e.createElement("div",{style:{marginBottom:40}},e.createElement("h3",{style:{fontSize:13,fontWeight:700,color:"#111827",margin:"0 0 4px",fontFamily:"system-ui, sans-serif",textTransform:"uppercase",letterSpacing:"0.06em"}},t),a&&e.createElement("p",{style:{fontSize:12,color:"#6b7280",margin:"0 0 16px",fontFamily:"system-ui, sans-serif"}},a),!a&&e.createElement("div",{style:{marginBottom:16}}),s),z="https://i.pravatar.cc/150?img=12",B="https://i.pravatar.cc/150?img=47",T="https://i.pravatar.cc/150?img=32",_={title:"Design Tokens/Avatar",component:i,parameters:{layout:"fullscreen",docs:{description:{component:"Avatar component — circular, 5 sizes (20–48px). Types: image, initials, icon fallback. Includes AvatarGroup with overlap and overflow counter."}}}},m={name:"All Sizes",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:8}},"Avatar Sizes"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:40}},"Five sizes based on ×4px grid: ",e.createElement("strong",null,"48px · 40px · 32px · 24px · 20px")),e.createElement(r,{title:"Image",subtitle:"Photo avatar at each size"},e.createElement(c,{gap:24,wrap:!1},[{size:"12",label:"Size 12 · 48px"},{size:"10",label:"Size 10 · 40px"},{size:"8",label:"Size 8 · 32px"},{size:"6",label:"Size 6 · 24px"},{size:"5",label:"Size 5 · 20px"}].map(({size:t,label:a})=>e.createElement(l,{key:t,label:a},e.createElement(i,{src:z,alt:"User",size:t}))))),e.createElement(r,{title:"Initials",subtitle:"Text fallback at each size"},e.createElement(c,{gap:24,wrap:!1},[{size:"12",label:"Size 12 · 48px"},{size:"10",label:"Size 10 · 40px"},{size:"8",label:"Size 8 · 32px"},{size:"6",label:"Size 6 · 24px"},{size:"5",label:"Size 5 · 20px"}].map(({size:t,label:a})=>e.createElement(l,{key:t,label:a},e.createElement(i,{initials:"CN",size:t}))))),e.createElement(r,{title:"Icon fallback",subtitle:"Person icon at each size"},e.createElement(c,{gap:24,wrap:!1},[{size:"12",label:"Size 12 · 48px"},{size:"10",label:"Size 10 · 40px"},{size:"8",label:"Size 8 · 32px"},{size:"6",label:"Size 6 · 24px"},{size:"5",label:"Size 5 · 20px"}].map(({size:t,label:a})=>e.createElement(l,{key:t,label:a},e.createElement(i,{size:t}))))))},p={name:"All Types",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:8}},"Avatar Types"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:40}},"Three content types: photo image, initials text, and person icon fallback."),e.createElement(r,{title:"Default size (48px)"},e.createElement(c,{gap:32},e.createElement(l,{label:"Image"},e.createElement(i,{src:z,alt:"Alice",size:"12"})),e.createElement(l,{label:"Initials"},e.createElement(i,{initials:"CN",size:"12"})),e.createElement(l,{label:"Icon fallback"},e.createElement(i,{size:"12"})))),e.createElement(r,{title:"Small size (32px)"},e.createElement(c,{gap:32},e.createElement(l,{label:"Image"},e.createElement(i,{src:B,alt:"Bob",size:"8"})),e.createElement(l,{label:"Initials"},e.createElement(i,{initials:"AB",size:"8"})),e.createElement(l,{label:"Icon fallback"},e.createElement(i,{size:"8"})))))},d={name:"Avatar Groups",render:()=>{const t=[{src:z,alt:"Alice"},{src:B,alt:"Bob"},{initials:"CN"},{src:T,alt:"Diana"},{initials:"EF"},{alt:"Frank"},{initials:"GH"}];return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:8}},"Avatar Group"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:40}},"Stacked with −8px overlap and 2px white ring. Overflowing members shown as +N counter."),e.createElement(r,{title:"Default size (48px)"},e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:32}},e.createElement(l,{label:"3 avatars"},e.createElement(n,{avatars:t.slice(0,3),size:"default"})),e.createElement(l,{label:"5 avatars"},e.createElement(n,{avatars:t.slice(0,5),size:"default"})),e.createElement(l,{label:"7 avatars · max=5 · +2 overflow"},e.createElement(n,{avatars:t,size:"default",max:5})))),e.createElement(r,{title:"Small size (32px)"},e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:24}},e.createElement(l,{label:"3 avatars"},e.createElement(n,{avatars:t.slice(0,3),size:"small"})),e.createElement(l,{label:"5 avatars"},e.createElement(n,{avatars:t.slice(0,5),size:"small"})),e.createElement(l,{label:"7 avatars · max=5 · +2 overflow"},e.createElement(n,{avatars:t,size:"small",max:5})))))}},f={name:"Token Reference",render:()=>{const t=[{name:"Size 12",size:"12",px:"48px",fontSize:"16px",usage:"Profile, detail pages"},{name:"Size 10",size:"10",px:"40px",fontSize:"14px",usage:"Cards, lists"},{name:"Size 8",size:"8",px:"32px",fontSize:"12px",usage:"Compact lists, comments"},{name:"Size 6",size:"6",px:"24px",fontSize:"10px",usage:"Inline, table rows"},{name:"Size 5",size:"5",px:"20px",fontSize:"9px",usage:"Chips, badges"}],a={textAlign:"left",padding:"8px 12px",fontSize:10,fontWeight:700,color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.06em",borderBottom:"2px solid #e5e7eb"},s={padding:"10px 12px",fontSize:12,borderBottom:"1px solid #f3f4f6",verticalAlign:"middle"};return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:24}},"Token Reference"),e.createElement("div",{style:{marginBottom:24,padding:12,background:"#f9fafb",borderRadius:8,fontSize:12,color:"#374151",display:"flex",flexDirection:"column",gap:4}},e.createElement("div",null,e.createElement("strong",null,"Shape:")," borderRadius: 9999px (circle)"),e.createElement("div",null,e.createElement("strong",null,"Fallback bg:")," #f2f2f2 · ",e.createElement("strong",null,"Icon color:")," #91959f · ",e.createElement("strong",null,"Initials color:")," #41434b"),e.createElement("div",null,e.createElement("strong",null,"Group ring:")," box-shadow: 0 0 0 2px #ffffff · ",e.createElement("strong",null,"Overlap:")," margin-left: −8px"),e.createElement("div",null,e.createElement("strong",null,"Overflow counter bg:")," #eeeef0 · color: #41434b")),e.createElement("table",{style:{width:"100%",borderCollapse:"collapse"}},e.createElement("thead",null,e.createElement("tr",null,["Size","Preview","Dimensions","Font Size","Usage"].map(o=>e.createElement("th",{key:o,style:a},o)))),e.createElement("tbody",null,t.map(({name:o,size:b,px:g,fontSize:G,usage:F},R)=>e.createElement("tr",{key:o,style:{background:R%2===0?"#fafafa":"#fff"}},e.createElement("td",{style:{...s,fontWeight:600,color:"#111827"}},o),e.createElement("td",{style:s},e.createElement("div",{style:{display:"flex",gap:8}},e.createElement(i,{src:z,alt:"",size:b}),e.createElement(i,{initials:"CN",size:b}),e.createElement(i,{size:b}))),e.createElement("td",{style:{...s,fontFamily:"monospace"}},g," × ",g),e.createElement("td",{style:{...s,fontFamily:"monospace"}},G),e.createElement("td",{style:{...s,color:"#6b7280"}},F))))))}};var x,v,S;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'All Sizes',
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
    }}>Avatar Sizes</h2>
      <p style={{
      fontSize: 13,
      color: '#6b7280',
      marginBottom: 40
    }}>
        Five sizes based on ×4px grid: <strong>48px · 40px · 32px · 24px · 20px</strong>
      </p>

      <Section title="Image" subtitle="Photo avatar at each size">
        <Row gap={24} wrap={false}>
          {[{
          size: '12',
          label: 'Size 12 · 48px'
        }, {
          size: '10',
          label: 'Size 10 · 40px'
        }, {
          size: '8',
          label: 'Size 8 · 32px'
        }, {
          size: '6',
          label: 'Size 6 · 24px'
        }, {
          size: '5',
          label: 'Size 5 · 20px'
        }].map(({
          size,
          label
        }) => <LabelledItem key={size} label={label}>
              <Avatar src={SAMPLE_IMG} alt="User" size={size} />
            </LabelledItem>)}
        </Row>
      </Section>

      <Section title="Initials" subtitle="Text fallback at each size">
        <Row gap={24} wrap={false}>
          {[{
          size: '12',
          label: 'Size 12 · 48px'
        }, {
          size: '10',
          label: 'Size 10 · 40px'
        }, {
          size: '8',
          label: 'Size 8 · 32px'
        }, {
          size: '6',
          label: 'Size 6 · 24px'
        }, {
          size: '5',
          label: 'Size 5 · 20px'
        }].map(({
          size,
          label
        }) => <LabelledItem key={size} label={label}>
              <Avatar initials="CN" size={size} />
            </LabelledItem>)}
        </Row>
      </Section>

      <Section title="Icon fallback" subtitle="Person icon at each size">
        <Row gap={24} wrap={false}>
          {[{
          size: '12',
          label: 'Size 12 · 48px'
        }, {
          size: '10',
          label: 'Size 10 · 40px'
        }, {
          size: '8',
          label: 'Size 8 · 32px'
        }, {
          size: '6',
          label: 'Size 6 · 24px'
        }, {
          size: '5',
          label: 'Size 5 · 20px'
        }].map(({
          size,
          label
        }) => <LabelledItem key={size} label={label}>
              <Avatar size={size} />
            </LabelledItem>)}
        </Row>
      </Section>
    </div>
}`,...(S=(v=m.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var u,y,E;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'All Types',
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
    }}>Avatar Types</h2>
      <p style={{
      fontSize: 13,
      color: '#6b7280',
      marginBottom: 40
    }}>
        Three content types: photo image, initials text, and person icon fallback.
      </p>

      <Section title="Default size (48px)">
        <Row gap={32}>
          <LabelledItem label="Image">
            <Avatar src={SAMPLE_IMG} alt="Alice" size="12" />
          </LabelledItem>
          <LabelledItem label="Initials">
            <Avatar initials="CN" size="12" />
          </LabelledItem>
          <LabelledItem label="Icon fallback">
            <Avatar size="12" />
          </LabelledItem>
        </Row>
      </Section>

      <Section title="Small size (32px)">
        <Row gap={32}>
          <LabelledItem label="Image">
            <Avatar src={SAMPLE_IMG_2} alt="Bob" size="8" />
          </LabelledItem>
          <LabelledItem label="Initials">
            <Avatar initials="AB" size="8" />
          </LabelledItem>
          <LabelledItem label="Icon fallback">
            <Avatar size="8" />
          </LabelledItem>
        </Row>
      </Section>
    </div>
}`,...(E=(y=p.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var A,I,h;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Avatar Groups',
  render: () => {
    const mixedAvatars = [{
      src: SAMPLE_IMG,
      alt: 'Alice'
    }, {
      src: SAMPLE_IMG_2,
      alt: 'Bob'
    }, {
      initials: 'CN'
    }, {
      src: SAMPLE_IMG_3,
      alt: 'Diana'
    }, {
      initials: 'EF'
    }, {
      alt: 'Frank'
    }, {
      initials: 'GH'
    }];
    return <div style={{
      padding: 32,
      fontFamily: 'system-ui, sans-serif',
      background: '#fff'
    }}>
        <h2 style={{
        fontSize: 20,
        fontWeight: 700,
        color: '#111827',
        marginBottom: 8
      }}>Avatar Group</h2>
        <p style={{
        fontSize: 13,
        color: '#6b7280',
        marginBottom: 40
      }}>
          Stacked with −8px overlap and 2px white ring. Overflowing members shown as +N counter.
        </p>

        <Section title="Default size (48px)">
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 32
        }}>
            <LabelledItem label="3 avatars">
              <AvatarGroup avatars={mixedAvatars.slice(0, 3)} size="default" />
            </LabelledItem>
            <LabelledItem label="5 avatars">
              <AvatarGroup avatars={mixedAvatars.slice(0, 5)} size="default" />
            </LabelledItem>
            <LabelledItem label="7 avatars · max=5 · +2 overflow">
              <AvatarGroup avatars={mixedAvatars} size="default" max={5} />
            </LabelledItem>
          </div>
        </Section>

        <Section title="Small size (32px)">
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24
        }}>
            <LabelledItem label="3 avatars">
              <AvatarGroup avatars={mixedAvatars.slice(0, 3)} size="small" />
            </LabelledItem>
            <LabelledItem label="5 avatars">
              <AvatarGroup avatars={mixedAvatars.slice(0, 5)} size="small" />
            </LabelledItem>
            <LabelledItem label="7 avatars · max=5 · +2 overflow">
              <AvatarGroup avatars={mixedAvatars} size="small" max={5} />
            </LabelledItem>
          </div>
        </Section>
      </div>;
  }
}`,...(h=(I=d.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var k,w,L;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Token Reference',
  render: () => {
    const sizes = [{
      name: 'Size 12',
      size: '12',
      px: '48px',
      fontSize: '16px',
      usage: 'Profile, detail pages'
    }, {
      name: 'Size 10',
      size: '10',
      px: '40px',
      fontSize: '14px',
      usage: 'Cards, lists'
    }, {
      name: 'Size 8',
      size: '8',
      px: '32px',
      fontSize: '12px',
      usage: 'Compact lists, comments'
    }, {
      name: 'Size 6',
      size: '6',
      px: '24px',
      fontSize: '10px',
      usage: 'Inline, table rows'
    }, {
      name: 'Size 5',
      size: '5',
      px: '20px',
      fontSize: '9px',
      usage: 'Chips, badges'
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
        color: '#374151',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}>
          <div><strong>Shape:</strong> borderRadius: 9999px (circle)</div>
          <div><strong>Fallback bg:</strong> #f2f2f2 · <strong>Icon color:</strong> #91959f · <strong>Initials color:</strong> #41434b</div>
          <div><strong>Group ring:</strong> box-shadow: 0 0 0 2px #ffffff · <strong>Overlap:</strong> margin-left: −8px</div>
          <div><strong>Overflow counter bg:</strong> #eeeef0 · color: #41434b</div>
        </div>

        <table style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr>{['Size', 'Preview', 'Dimensions', 'Font Size', 'Usage'].map(h => <th key={h} style={th}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {sizes.map(({
            name,
            size,
            px,
            fontSize,
            usage
          }, i) => <tr key={name} style={{
            background: i % 2 === 0 ? '#fafafa' : '#fff'
          }}>
                <td style={{
              ...td,
              fontWeight: 600,
              color: '#111827'
            }}>{name}</td>
                <td style={td}>
                  <div style={{
                display: 'flex',
                gap: 8
              }}>
                    <Avatar src={SAMPLE_IMG} alt="" size={size} />
                    <Avatar initials="CN" size={size} />
                    <Avatar size={size} />
                  </div>
                </td>
                <td style={{
              ...td,
              fontFamily: 'monospace'
            }}>{px} × {px}</td>
                <td style={{
              ...td,
              fontFamily: 'monospace'
            }}>{fontSize}</td>
                <td style={{
              ...td,
              color: '#6b7280'
            }}>{usage}</td>
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(L=(w=f.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};const C=["AllSizes","AllTypes","Groups","TokenReference"];export{m as AllSizes,p as AllTypes,d as Groups,f as TokenReference,C as __namedExportsOrder,_ as default};
