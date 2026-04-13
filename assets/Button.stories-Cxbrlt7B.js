import{R as e}from"./index-CwcVQgaJ.js";import{B as m}from"./Button-CmDDSjyA.js";function i(){return e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},e.createElement("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))}function o(){return e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},e.createElement("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}))}function z(){return e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},e.createElement("path",{d:"M2 4h12M5 4V2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V4M6 7v5M10 7v5M3 4l1 9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))}function d(){return e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},e.createElement("circle",{cx:"7",cy:"7",r:"4.5",stroke:"currentColor",strokeWidth:"1.5"}),e.createElement("path",{d:"M10.5 10.5 13 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}))}const s=({children:l,gap:r=12,wrap:b=!0,style:n})=>e.createElement("div",{style:{display:"flex",alignItems:"center",flexWrap:b?"wrap":"nowrap",gap:r,...n}},l),u=({title:l,subtitle:r,children:b})=>e.createElement("div",{style:{marginBottom:40}},e.createElement("h3",{style:{fontSize:13,fontWeight:700,color:"#111827",margin:"0 0 4px",fontFamily:"system-ui, sans-serif",textTransform:"uppercase",letterSpacing:"0.06em"}},l),r&&e.createElement("p",{style:{fontSize:12,color:"#6b7280",margin:"0 0 16px",fontFamily:"system-ui, sans-serif"}},r),!r&&e.createElement("div",{style:{marginBottom:16}}),b),_=({children:l})=>e.createElement("div",{style:{fontSize:11,color:"#9ca3af",fontFamily:"monospace",marginTop:6,textAlign:"center"}},l),t=({label:l,...r})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(m,{...r}),e.createElement(_,null,l)),H={title:"Design Tokens/Button",component:m,parameters:{layout:"fullscreen",docs:{description:{component:"Token-driven button component. Reflects the Figma Button component set — 9 variants × 5 sizes × 6 states."}}}},p={name:"All Variants",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:8}},"Button Variants"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:40}},"All 9 variants at default size. Token: ",e.createElement("code",{style:{fontSize:11,background:"#f3f4f6",padding:"1px 4px",borderRadius:3}},"--color-buttons-btn-*")),e.createElement(s,{gap:12,wrap:!0},e.createElement(t,{variant:"default",label:"default"},"Default"),e.createElement(t,{variant:"secondary",label:"secondary"},"Secondary"),e.createElement(t,{variant:"outline",label:"outline"},"Outline"),e.createElement(t,{variant:"outline-brand",label:"outline-brand"},"Outline Brand"),e.createElement(t,{variant:"outline-secondary",label:"outline-secondary"},"Outline Secondary"),e.createElement(t,{variant:"ghost",label:"ghost"},"Ghost"),e.createElement(t,{variant:"ghost-secondary",label:"ghost-secondary"},"Ghost Secondary"),e.createElement(t,{variant:"link",label:"link"},"Link"),e.createElement(t,{variant:"destructive",label:"destructive"},"Destructive")))},h={name:"All Sizes",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:8}},"Button Sizes"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:40}},"5 sizes shown on Default variant. Heights: xs=24px · sm=32px · default=36px · lg=40px · icon=36×36px"),e.createElement(u,{title:"Default variant — all sizes"},e.createElement(s,{gap:12,wrap:!0,style:{alignItems:"flex-end"}},e.createElement(t,{size:"xs",label:"xs · 24px"},"Extra Small"),e.createElement(t,{size:"sm",label:"sm · 32px"},"Small"),e.createElement(t,{size:"default",label:"default · 36px"},"Default"),e.createElement(t,{size:"lg",label:"lg · 40px"},"Large"),e.createElement(t,{size:"icon",leftIcon:e.createElement(o,null),label:"icon · 36×36px"}))),e.createElement(u,{title:"Secondary variant — all sizes"},e.createElement(s,{gap:12,wrap:!0,style:{alignItems:"flex-end"}},e.createElement(t,{variant:"secondary",size:"xs",label:"xs"},"Extra Small"),e.createElement(t,{variant:"secondary",size:"sm",label:"sm"},"Small"),e.createElement(t,{variant:"secondary",size:"default",label:"default"},"Default"),e.createElement(t,{variant:"secondary",size:"lg",label:"lg"},"Large"),e.createElement(t,{variant:"secondary",size:"icon",leftIcon:e.createElement(o,null),label:"icon"}))),e.createElement(u,{title:"Outline variant — all sizes"},e.createElement(s,{gap:12,wrap:!0,style:{alignItems:"flex-end"}},e.createElement(t,{variant:"outline",size:"xs",label:"xs"},"Extra Small"),e.createElement(t,{variant:"outline",size:"sm",label:"sm"},"Small"),e.createElement(t,{variant:"outline",size:"default",label:"default"},"Default"),e.createElement(t,{variant:"outline",size:"lg",label:"lg"},"Large"),e.createElement(t,{variant:"outline",size:"icon",leftIcon:e.createElement(d,null),label:"icon"}))))},y={name:"States",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:8}},"Button States"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:40}},"Default, disabled, and loading states across variants."),[{variant:"default",label:"Default (Primary)"},{variant:"secondary",label:"Secondary"},{variant:"outline",label:"Outline"},{variant:"outline-brand",label:"Outline Brand"},{variant:"ghost",label:"Ghost"},{variant:"destructive",label:"Destructive"}].map(({variant:l,label:r})=>e.createElement(u,{key:l,title:r},e.createElement(s,{gap:12},e.createElement(t,{variant:l,label:"default"},"Button"),e.createElement(t,{variant:l,disabled:!0,label:"disabled"},"Button"),e.createElement(t,{variant:l,loading:!0,label:"loading"},"Button")))))},v={name:"With Icons",render:()=>e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:8}},"Icons"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:40}},"Left icon, right icon, and icon-only configurations."),e.createElement(u,{title:"Icon left — all variants",subtitle:"Leading icon before label text"},e.createElement(s,{gap:12,wrap:!0},e.createElement(t,{variant:"default",leftIcon:e.createElement(o,null),label:"default"},"Add Item"),e.createElement(t,{variant:"secondary",leftIcon:e.createElement(d,null),label:"secondary"},"Search"),e.createElement(t,{variant:"outline",leftIcon:e.createElement(d,null),label:"outline"},"Search"),e.createElement(t,{variant:"outline-brand",leftIcon:e.createElement(o,null),label:"outline-brand"},"Add Item"),e.createElement(t,{variant:"outline-secondary",leftIcon:e.createElement(d,null),label:"outline-secondary"},"Search"),e.createElement(t,{variant:"ghost",leftIcon:e.createElement(o,null),label:"ghost"},"Add Item"),e.createElement(t,{variant:"ghost-secondary",leftIcon:e.createElement(d,null),label:"ghost-secondary"},"Search"),e.createElement(t,{variant:"link",leftIcon:e.createElement(i,null),label:"link"},"Open link"),e.createElement(t,{variant:"destructive",leftIcon:e.createElement(z,null),label:"destructive"},"Delete"))),e.createElement(u,{title:"Icon right — all variants",subtitle:"Trailing icon after label text"},e.createElement(s,{gap:12,wrap:!0},e.createElement(t,{variant:"default",rightIcon:e.createElement(i,null),label:"default"},"Continue"),e.createElement(t,{variant:"secondary",rightIcon:e.createElement(i,null),label:"secondary"},"Continue"),e.createElement(t,{variant:"outline",rightIcon:e.createElement(i,null),label:"outline"},"Continue"),e.createElement(t,{variant:"outline-brand",rightIcon:e.createElement(i,null),label:"outline-brand"},"Learn more"),e.createElement(t,{variant:"outline-secondary",rightIcon:e.createElement(i,null),label:"outline-secondary"},"Learn more"),e.createElement(t,{variant:"ghost",rightIcon:e.createElement(i,null),label:"ghost"},"View all"),e.createElement(t,{variant:"ghost-secondary",rightIcon:e.createElement(i,null),label:"ghost-secondary"},"View all"),e.createElement(t,{variant:"link",rightIcon:e.createElement(i,null),label:"link"},"See details"),e.createElement(t,{variant:"destructive",rightIcon:e.createElement(z,null),label:"destructive"},"Delete"))),e.createElement(u,{title:"Icon only — all variants"},e.createElement(s,{gap:12,wrap:!0,style:{alignItems:"flex-end"}},e.createElement(t,{variant:"default",size:"icon",leftIcon:e.createElement(o,null),label:"default"}),e.createElement(t,{variant:"secondary",size:"icon",leftIcon:e.createElement(d,null),label:"secondary"}),e.createElement(t,{variant:"outline",size:"icon",leftIcon:e.createElement(d,null),label:"outline"}),e.createElement(t,{variant:"outline-brand",size:"icon",leftIcon:e.createElement(o,null),label:"outline-brand"}),e.createElement(t,{variant:"outline-secondary",size:"icon",leftIcon:e.createElement(o,null),label:"outline-secondary"}),e.createElement(t,{variant:"ghost",size:"icon",leftIcon:e.createElement(o,null),label:"ghost"}),e.createElement(t,{variant:"ghost-secondary",size:"icon",leftIcon:e.createElement(d,null),label:"ghost-secondary"}),e.createElement(t,{variant:"destructive",size:"icon",leftIcon:e.createElement(z,null),label:"destructive"}))),e.createElement(u,{title:"Icon only — all sizes"},e.createElement(s,{gap:12,style:{alignItems:"flex-end"}},e.createElement(t,{size:"icon",style:{width:24,height:24,fontSize:11},leftIcon:e.createElement(o,null),label:"xs"}),e.createElement(t,{size:"icon",style:{width:32,height:32,fontSize:13},leftIcon:e.createElement(o,null),label:"sm"}),e.createElement(t,{size:"icon",leftIcon:e.createElement(o,null),label:"default"}),e.createElement(t,{size:"icon",style:{width:40,height:40},leftIcon:e.createElement(o,null),label:"lg"}))))},E={name:"Token Reference",render:()=>{const l=[{variant:"default",css:"color-buttons-btn-default-*",bg:"#0069b4",text:"#ffffff",border:"#0069b4"},{variant:"secondary",css:"color-buttons-btn-secondary-*",bg:"#eeeef0",text:"#202020",border:"none"},{variant:"outline",css:"color-buttons-btn-outline-*",bg:"#ffffff",text:"#202020",border:"#d9dade"},{variant:"outline-brand",css:"color-buttons-btn-outline-brand-*",bg:"#ffffff",text:"#0069b4",border:"#0069b4"},{variant:"outline-secondary",css:"color-buttons-btn-outline-secondary-*",bg:"#ffffff",text:"#202020",border:"#d9dade"},{variant:"ghost",css:"color-buttons-btn-ghost-*",bg:"transparent",text:"#202020",border:"none"},{variant:"ghost-secondary",css:"color-buttons-btn-ghost-secondary-*",bg:"transparent",text:"#0069b4",border:"none"},{variant:"link",css:"color-buttons-btn-link-*",bg:"transparent",text:"#0069b4",border:"none"},{variant:"destructive",css:"color-buttons-btn-destructive-*",bg:"#fee2e2",text:"#dc2626",border:"none"}],r=[{size:"xs",height:"24px",px:"8px",py:"4px",fontSize:"11px"},{size:"sm",height:"32px",px:"12px",py:"8px",fontSize:"13px"},{size:"default",height:"36px",px:"16px",py:"8px",fontSize:"14px"},{size:"lg",height:"40px",px:"32px",py:"8px",fontSize:"15px"},{size:"icon",height:"36px",px:"—",py:"—",fontSize:"14px"}],b={textAlign:"left",padding:"8px 12px",fontSize:10,fontWeight:700,color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.06em",borderBottom:"2px solid #e5e7eb"},n={padding:"10px 12px",fontSize:12,borderBottom:"1px solid #f3f4f6",verticalAlign:"middle"},c={fontFamily:"monospace",fontSize:11};return e.createElement("div",{style:{padding:32,fontFamily:"system-ui, sans-serif",background:"#fff"}},e.createElement("h2",{style:{fontSize:20,fontWeight:700,color:"#111827",marginBottom:8}},"Token Reference"),e.createElement("p",{style:{fontSize:13,color:"#6b7280",marginBottom:40}},"CSS custom property tokens for each variant and size."),e.createElement("h3",{style:{fontSize:13,fontWeight:700,color:"#374151",margin:"0 0 12px",textTransform:"uppercase",letterSpacing:"0.06em"}},"Variants"),e.createElement("table",{style:{width:"100%",borderCollapse:"collapse",marginBottom:48}},e.createElement("thead",null,e.createElement("tr",null,["Variant","Token group","BG (Light)","Text (Light)","Border (Light)","Preview"].map(a=>e.createElement("th",{key:a,style:b},a)))),e.createElement("tbody",null,l.map(({variant:a,css:x,bg:f,text:g,border:B},S)=>e.createElement("tr",{key:a,style:{background:S%2===0?"#fafafa":"#fff"}},e.createElement("td",{style:{...n,fontWeight:600,color:"#111827"}},a),e.createElement("td",{style:{...n,...c,color:"#6b7280"}},"--",x),e.createElement("td",{style:{...n}},e.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:6}},e.createElement("span",{style:{width:14,height:14,borderRadius:3,background:f,border:"1px solid rgba(0,0,0,0.12)",flexShrink:0}}),e.createElement("span",{style:{...c}},f))),e.createElement("td",{style:{...n}},e.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:6}},e.createElement("span",{style:{width:14,height:14,borderRadius:3,background:g,border:"1px solid rgba(0,0,0,0.12)",flexShrink:0}}),e.createElement("span",{style:{...c}},g))),e.createElement("td",{style:{...n,...c,color:"#6b7280"}},B),e.createElement("td",{style:{...n}},e.createElement(m,{variant:a,size:"sm"},"Button")))))),e.createElement("h3",{style:{fontSize:13,fontWeight:700,color:"#374151",margin:"0 0 12px",textTransform:"uppercase",letterSpacing:"0.06em"}},"Sizes"),e.createElement("table",{style:{width:"100%",borderCollapse:"collapse"}},e.createElement("thead",null,e.createElement("tr",null,["Size","Height","Padding X","Padding Y","Font Size","Preview"].map(a=>e.createElement("th",{key:a,style:b},a)))),e.createElement("tbody",null,r.map(({size:a,height:x,px:f,py:g,fontSize:B},S)=>e.createElement("tr",{key:a,style:{background:S%2===0?"#fafafa":"#fff"}},e.createElement("td",{style:{...n,fontWeight:600,color:"#111827"}},a),e.createElement("td",{style:{...n,...c}},x),e.createElement("td",{style:{...n,...c}},f),e.createElement("td",{style:{...n,...c}},g),e.createElement("td",{style:{...n,...c}},B),e.createElement("td",{style:{...n}},a==="icon"?e.createElement(m,{size:"icon",leftIcon:e.createElement(o,null)}):e.createElement(m,{size:a},"Button")))))))}};var L,I,k;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    }}>Button Variants</h2>
      <p style={{
      fontSize: 13,
      color: '#6b7280',
      marginBottom: 40
    }}>
        All 9 variants at default size. Token: <code style={{
        fontSize: 11,
        background: '#f3f4f6',
        padding: '1px 4px',
        borderRadius: 3
      }}>--color-buttons-btn-*</code>
      </p>

      <Row gap={12} wrap>
        <LabelledButton variant="default" label="default">Default</LabelledButton>
        <LabelledButton variant="secondary" label="secondary">Secondary</LabelledButton>
        <LabelledButton variant="outline" label="outline">Outline</LabelledButton>
        <LabelledButton variant="outline-brand" label="outline-brand">Outline Brand</LabelledButton>
        <LabelledButton variant="outline-secondary" label="outline-secondary">Outline Secondary</LabelledButton>
        <LabelledButton variant="ghost" label="ghost">Ghost</LabelledButton>
        <LabelledButton variant="ghost-secondary" label="ghost-secondary">Ghost Secondary</LabelledButton>
        <LabelledButton variant="link" label="link">Link</LabelledButton>
        <LabelledButton variant="destructive" label="destructive">Destructive</LabelledButton>
      </Row>
    </div>
}`,...(k=(I=p.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var w,R,A;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    }}>Button Sizes</h2>
      <p style={{
      fontSize: 13,
      color: '#6b7280',
      marginBottom: 40
    }}>
        5 sizes shown on Default variant. Heights: xs=24px · sm=32px · default=36px · lg=40px · icon=36×36px
      </p>

      <Section title="Default variant — all sizes">
        <Row gap={12} wrap style={{
        alignItems: 'flex-end'
      }}>
          <LabelledButton size="xs" label="xs · 24px">Extra Small</LabelledButton>
          <LabelledButton size="sm" label="sm · 32px">Small</LabelledButton>
          <LabelledButton size="default" label="default · 36px">Default</LabelledButton>
          <LabelledButton size="lg" label="lg · 40px">Large</LabelledButton>
          <LabelledButton size="icon" leftIcon={<Plus />} label="icon · 36×36px" />
        </Row>
      </Section>

      <Section title="Secondary variant — all sizes">
        <Row gap={12} wrap style={{
        alignItems: 'flex-end'
      }}>
          <LabelledButton variant="secondary" size="xs" label="xs">Extra Small</LabelledButton>
          <LabelledButton variant="secondary" size="sm" label="sm">Small</LabelledButton>
          <LabelledButton variant="secondary" size="default" label="default">Default</LabelledButton>
          <LabelledButton variant="secondary" size="lg" label="lg">Large</LabelledButton>
          <LabelledButton variant="secondary" size="icon" leftIcon={<Plus />} label="icon" />
        </Row>
      </Section>

      <Section title="Outline variant — all sizes">
        <Row gap={12} wrap style={{
        alignItems: 'flex-end'
      }}>
          <LabelledButton variant="outline" size="xs" label="xs">Extra Small</LabelledButton>
          <LabelledButton variant="outline" size="sm" label="sm">Small</LabelledButton>
          <LabelledButton variant="outline" size="default" label="default">Default</LabelledButton>
          <LabelledButton variant="outline" size="lg" label="lg">Large</LabelledButton>
          <LabelledButton variant="outline" size="icon" leftIcon={<Search />} label="icon" />
        </Row>
      </Section>
    </div>
}`,...(A=(R=h.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var T,W,D;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'States',
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
    }}>Button States</h2>
      <p style={{
      fontSize: 13,
      color: '#6b7280',
      marginBottom: 40
    }}>
        Default, disabled, and loading states across variants.
      </p>

      {[{
      variant: 'default',
      label: 'Default (Primary)'
    }, {
      variant: 'secondary',
      label: 'Secondary'
    }, {
      variant: 'outline',
      label: 'Outline'
    }, {
      variant: 'outline-brand',
      label: 'Outline Brand'
    }, {
      variant: 'ghost',
      label: 'Ghost'
    }, {
      variant: 'destructive',
      label: 'Destructive'
    }].map(({
      variant,
      label
    }) => <Section key={variant} title={label}>
          <Row gap={12}>
            <LabelledButton variant={variant} label="default">Button</LabelledButton>
            <LabelledButton variant={variant} disabled label="disabled">Button</LabelledButton>
            <LabelledButton variant={variant} loading label="loading">Button</LabelledButton>
          </Row>
        </Section>)}
    </div>
}`,...(D=(W=y.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var P,V,F;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    }}>Icons</h2>
      <p style={{
      fontSize: 13,
      color: '#6b7280',
      marginBottom: 40
    }}>
        Left icon, right icon, and icon-only configurations.
      </p>

      <Section title="Icon left — all variants" subtitle="Leading icon before label text">
        <Row gap={12} wrap>
          <LabelledButton variant="default" leftIcon={<Plus />} label="default">Add Item</LabelledButton>
          <LabelledButton variant="secondary" leftIcon={<Search />} label="secondary">Search</LabelledButton>
          <LabelledButton variant="outline" leftIcon={<Search />} label="outline">Search</LabelledButton>
          <LabelledButton variant="outline-brand" leftIcon={<Plus />} label="outline-brand">Add Item</LabelledButton>
          <LabelledButton variant="outline-secondary" leftIcon={<Search />} label="outline-secondary">Search</LabelledButton>
          <LabelledButton variant="ghost" leftIcon={<Plus />} label="ghost">Add Item</LabelledButton>
          <LabelledButton variant="ghost-secondary" leftIcon={<Search />} label="ghost-secondary">Search</LabelledButton>
          <LabelledButton variant="link" leftIcon={<ArrowRight />} label="link">Open link</LabelledButton>
          <LabelledButton variant="destructive" leftIcon={<Trash />} label="destructive">Delete</LabelledButton>
        </Row>
      </Section>

      <Section title="Icon right — all variants" subtitle="Trailing icon after label text">
        <Row gap={12} wrap>
          <LabelledButton variant="default" rightIcon={<ArrowRight />} label="default">Continue</LabelledButton>
          <LabelledButton variant="secondary" rightIcon={<ArrowRight />} label="secondary">Continue</LabelledButton>
          <LabelledButton variant="outline" rightIcon={<ArrowRight />} label="outline">Continue</LabelledButton>
          <LabelledButton variant="outline-brand" rightIcon={<ArrowRight />} label="outline-brand">Learn more</LabelledButton>
          <LabelledButton variant="outline-secondary" rightIcon={<ArrowRight />} label="outline-secondary">Learn more</LabelledButton>
          <LabelledButton variant="ghost" rightIcon={<ArrowRight />} label="ghost">View all</LabelledButton>
          <LabelledButton variant="ghost-secondary" rightIcon={<ArrowRight />} label="ghost-secondary">View all</LabelledButton>
          <LabelledButton variant="link" rightIcon={<ArrowRight />} label="link">See details</LabelledButton>
          <LabelledButton variant="destructive" rightIcon={<Trash />} label="destructive">Delete</LabelledButton>
        </Row>
      </Section>

      <Section title="Icon only — all variants">
        <Row gap={12} wrap style={{
        alignItems: 'flex-end'
      }}>
          <LabelledButton variant="default" size="icon" leftIcon={<Plus />} label="default" />
          <LabelledButton variant="secondary" size="icon" leftIcon={<Search />} label="secondary" />
          <LabelledButton variant="outline" size="icon" leftIcon={<Search />} label="outline" />
          <LabelledButton variant="outline-brand" size="icon" leftIcon={<Plus />} label="outline-brand" />
          <LabelledButton variant="outline-secondary" size="icon" leftIcon={<Plus />} label="outline-secondary" />
          <LabelledButton variant="ghost" size="icon" leftIcon={<Plus />} label="ghost" />
          <LabelledButton variant="ghost-secondary" size="icon" leftIcon={<Search />} label="ghost-secondary" />
          <LabelledButton variant="destructive" size="icon" leftIcon={<Trash />} label="destructive" />
        </Row>
      </Section>

      <Section title="Icon only — all sizes">
        <Row gap={12} style={{
        alignItems: 'flex-end'
      }}>
          <LabelledButton size="icon" style={{
          width: 24,
          height: 24,
          fontSize: 11
        }} leftIcon={<Plus />} label="xs" />
          <LabelledButton size="icon" style={{
          width: 32,
          height: 32,
          fontSize: 13
        }} leftIcon={<Plus />} label="sm" />
          <LabelledButton size="icon" leftIcon={<Plus />} label="default" />
          <LabelledButton size="icon" style={{
          width: 40,
          height: 40
        }} leftIcon={<Plus />} label="lg" />
        </Row>
      </Section>
    </div>
}`,...(F=(V=v.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var O,C,M;E.parameters={...E.parameters,docs:{...(O=E.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Token Reference',
  render: () => {
    const VARIANT_TOKENS = [{
      variant: 'default',
      css: 'color-buttons-btn-default-*',
      bg: '#0069b4',
      text: '#ffffff',
      border: '#0069b4'
    }, {
      variant: 'secondary',
      css: 'color-buttons-btn-secondary-*',
      bg: '#eeeef0',
      text: '#202020',
      border: 'none'
    }, {
      variant: 'outline',
      css: 'color-buttons-btn-outline-*',
      bg: '#ffffff',
      text: '#202020',
      border: '#d9dade'
    }, {
      variant: 'outline-brand',
      css: 'color-buttons-btn-outline-brand-*',
      bg: '#ffffff',
      text: '#0069b4',
      border: '#0069b4'
    }, {
      variant: 'outline-secondary',
      css: 'color-buttons-btn-outline-secondary-*',
      bg: '#ffffff',
      text: '#202020',
      border: '#d9dade'
    }, {
      variant: 'ghost',
      css: 'color-buttons-btn-ghost-*',
      bg: 'transparent',
      text: '#202020',
      border: 'none'
    }, {
      variant: 'ghost-secondary',
      css: 'color-buttons-btn-ghost-secondary-*',
      bg: 'transparent',
      text: '#0069b4',
      border: 'none'
    }, {
      variant: 'link',
      css: 'color-buttons-btn-link-*',
      bg: 'transparent',
      text: '#0069b4',
      border: 'none'
    }, {
      variant: 'destructive',
      css: 'color-buttons-btn-destructive-*',
      bg: '#fee2e2',
      text: '#dc2626',
      border: 'none'
    }];
    const SIZE_TABLE = [{
      size: 'xs',
      height: '24px',
      px: '8px',
      py: '4px',
      fontSize: '11px'
    }, {
      size: 'sm',
      height: '32px',
      px: '12px',
      py: '8px',
      fontSize: '13px'
    }, {
      size: 'default',
      height: '36px',
      px: '16px',
      py: '8px',
      fontSize: '14px'
    }, {
      size: 'lg',
      height: '40px',
      px: '32px',
      py: '8px',
      fontSize: '15px'
    }, {
      size: 'icon',
      height: '36px',
      px: '—',
      py: '—',
      fontSize: '14px'
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
    const mono = {
      fontFamily: 'monospace',
      fontSize: 11
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
        marginBottom: 8
      }}>Token Reference</h2>
        <p style={{
        fontSize: 13,
        color: '#6b7280',
        marginBottom: 40
      }}>
          CSS custom property tokens for each variant and size.
        </p>

        <h3 style={{
        fontSize: 13,
        fontWeight: 700,
        color: '#374151',
        margin: '0 0 12px',
        textTransform: 'uppercase',
        letterSpacing: '0.06em'
      }}>Variants</h3>
        <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: 48
      }}>
          <thead>
            <tr>
              {['Variant', 'Token group', 'BG (Light)', 'Text (Light)', 'Border (Light)', 'Preview'].map(h => <th key={h} style={th}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {VARIANT_TOKENS.map(({
            variant,
            css,
            bg,
            text,
            border
          }, i) => <tr key={variant} style={{
            background: i % 2 === 0 ? '#fafafa' : '#fff'
          }}>
                <td style={{
              ...td,
              fontWeight: 600,
              color: '#111827'
            }}>{variant}</td>
                <td style={{
              ...td,
              ...mono,
              color: '#6b7280'
            }}>--{css}</td>
                <td style={{
              ...td
            }}>
                  <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6
              }}>
                    <span style={{
                  width: 14,
                  height: 14,
                  borderRadius: 3,
                  background: bg,
                  border: '1px solid rgba(0,0,0,0.12)',
                  flexShrink: 0
                }} />
                    <span style={{
                  ...mono
                }}>{bg}</span>
                  </span>
                </td>
                <td style={{
              ...td
            }}>
                  <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6
              }}>
                    <span style={{
                  width: 14,
                  height: 14,
                  borderRadius: 3,
                  background: text,
                  border: '1px solid rgba(0,0,0,0.12)',
                  flexShrink: 0
                }} />
                    <span style={{
                  ...mono
                }}>{text}</span>
                  </span>
                </td>
                <td style={{
              ...td,
              ...mono,
              color: '#6b7280'
            }}>{border}</td>
                <td style={{
              ...td
            }}>
                  <Button variant={variant} size="sm">Button</Button>
                </td>
              </tr>)}
          </tbody>
        </table>

        <h3 style={{
        fontSize: 13,
        fontWeight: 700,
        color: '#374151',
        margin: '0 0 12px',
        textTransform: 'uppercase',
        letterSpacing: '0.06em'
      }}>Sizes</h3>
        <table style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr>
              {['Size', 'Height', 'Padding X', 'Padding Y', 'Font Size', 'Preview'].map(h => <th key={h} style={th}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {SIZE_TABLE.map(({
            size,
            height,
            px,
            py,
            fontSize
          }, i) => <tr key={size} style={{
            background: i % 2 === 0 ? '#fafafa' : '#fff'
          }}>
                <td style={{
              ...td,
              fontWeight: 600,
              color: '#111827'
            }}>{size}</td>
                <td style={{
              ...td,
              ...mono
            }}>{height}</td>
                <td style={{
              ...td,
              ...mono
            }}>{px}</td>
                <td style={{
              ...td,
              ...mono
            }}>{py}</td>
                <td style={{
              ...td,
              ...mono
            }}>{fontSize}</td>
                <td style={{
              ...td
            }}>
                  {size === 'icon' ? <Button size="icon" leftIcon={<Plus />} /> : <Button size={size}>Button</Button>}
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(M=(C=E.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};const K=["AllVariants","AllSizes","States","WithIcons","TokenReference"];export{h as AllSizes,p as AllVariants,y as States,E as TokenReference,v as WithIcons,K as __namedExportsOrder,H as default};
