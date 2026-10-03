// module 38105 from 5578-060085c254278034.js
// deps: 19981
const module_38105 = (t,e,i)=>{i.d(e,{v:()=>s});var n=i(19981);class s{constructor(){this.subscriptions=[]}add(t){return(0,n.Kq)(this.subscriptions,t),()=>(0,n.Ai)(this.subscriptions,t)}notify(t,e,i){let n=this.subscriptions.length;if(n)if(1===n)this.subscriptions[0](t,e,i);else for(let s=0;s<n;s++){let n=this.subscriptions[s];n&&n(t,e,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}};
