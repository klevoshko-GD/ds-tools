import{R as t}from"./index-CwcVQgaJ.js";function n({tabs:s=[],active:i,onChange:a,size:o="lg"}){return t.createElement("div",{className:["tabs",o==="sm"?"tabs--sm":""].filter(Boolean).join(" "),role:"tablist"},s.map(e=>{const l=e.id===i;return t.createElement("button",{key:e.id,role:"tab","aria-selected":l,className:["tabs__item",l?"tabs__item--active":""].filter(Boolean).join(" "),onClick:()=>a==null?void 0:a(e.id),type:"button"},t.createElement("span",{className:"tabs__label"},e.label),e.count!=null&&t.createElement("span",{className:"tabs__counter","aria-label":`${e.count} items`},e.count))}))}n.__docgenInfo={description:`Tabs — segmented control component.
Matches Figma DS "Tabs" component (node 59:25693).

Container: primary-blue background, rounded pill, 4px padding.
Active tab: white fill, blue text, subtle shadow.
Inactive tabs: transparent, white text.

Props:
  tabs     — array of { id, label, count? }
  active   — id of the currently active tab
  onChange — (id) => void
  size     — 'lg' (default) | 'sm'`,methods:[],displayName:"Tabs",props:{tabs:{defaultValue:{value:"[]",computed:!1},required:!1},size:{defaultValue:{value:"'lg'",computed:!1},required:!1}}};export{n as T};
