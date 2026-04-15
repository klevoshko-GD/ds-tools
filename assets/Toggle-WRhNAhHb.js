import{R as e}from"./index-CwcVQgaJ.js";function g({checked:t=!1,onChange:a,labelLeft:o,labelRight:n,disabled:l=!1,id:s,...c}){const r=i=>{l||a==null||a(i.target.checked)};return e.createElement("label",{className:["toggle",t?"toggle--on":"",l?"toggle--disabled":""].filter(Boolean).join(" "),...c},o&&e.createElement("span",{className:"toggle__label toggle__label--left"},o),e.createElement("span",{className:"toggle__track","aria-hidden":"true"},e.createElement("span",{className:"toggle__thumb"})),e.createElement("input",{type:"checkbox",className:"toggle__input",role:"switch",checked:t,disabled:l,id:s,onChange:r,"aria-checked":t}),n&&e.createElement("span",{className:"toggle__label toggle__label--right"},n))}g.__docgenInfo={description:`Toggle (Toggle With Text) — matches Figma DS node 53:9670.

A switch with optional left and right labels.
Track: 45×24px pill. Thumb: 18×18px white circle.
OFF → gray track, thumb left. ON → primary-blue track, thumb right.
Focus state shown via keyboard / :focus-visible.
Disabled state dims track (opacity 0.5) and mutes label color.

Props:
  checked     — boolean (controlled)
  onChange    — (checked: boolean) => void
  labelLeft   — text shown to the left of the track (optional)
  labelRight  — text shown to the right of the track (optional)
  disabled    — boolean
  id          — forwarded to the <input> for label association`,methods:[],displayName:"Toggle",props:{checked:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};export{g as T};
