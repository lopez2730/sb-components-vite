import{j as S}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const s=({label:o,size:g="normal",allCaps:v=!1,color:x,fontColor:_})=>S.jsx("span",{className:`${g} ${x} label`,style:{color:_},children:v?o.toUpperCase():o});try{s.displayName="MyLabel",s.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"capitalize all letters",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"Label color",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secundary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:null,description:"Font color",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const z={title:"UI/labels/MyLabel",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"basic label"}},a={args:{label:"AllCaps label",allCaps:!0}},r={args:{label:"Secondary label",color:"text-secundary"}},l={args:{label:"Custome color label",fontColor:"#6a00ff"}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'basic label'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var u,p,i;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'AllCaps label',
    allCaps: true
  }
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var d,m,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    color: 'text-secundary'
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var y,f,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Custome color label',
    fontColor: '#6a00ff'
  }
}`,...(C=(f=l.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const M=["Basic","AllCaps","Secondary","CustomeColor"];export{a as AllCaps,e as Basic,l as CustomeColor,r as Secondary,M as __namedExportsOrder,z as default};
//# sourceMappingURL=MyLabel.stories-6121b7ea.js.map
