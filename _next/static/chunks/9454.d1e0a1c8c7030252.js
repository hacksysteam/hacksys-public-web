"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9454],{29454:(e,t,n)=>{n.r(t),n.d(t,{render:()=>D});var r=n(43515);n(90949);var i=n(15685),a=n(53781);n(55704),n(88574),n(11901);var d=n(47802),o=n(53940),s=n(34300),l=n(82541),g=n(9930);function c(e){var t,n,r={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:(t=e,g.A(t.nodes(),function(e){var n=t.node(e),r=t.parent(e),i={v:e};return s.A(n)||(i.value=n),s.A(r)||(i.parent=r),i})),edges:(n=e,g.A(n.edges(),function(e){var t=n.edge(e),r={v:e.v,w:e.w};return s.A(e.name)||(r.name=e.name),s.A(t)||(r.value=t),r}))};return s.A(e.graph())||(r.value=l.A(e.graph())),r}n(86299);var f=n(28487),h=new Map,p=new Map,u=new Map,m=(0,d.K2)(()=>{p.clear(),u.clear(),h.clear()},"clear"),w=(0,d.K2)((e,t)=>{let n=p.get(t)||[];return d.Rm.trace("In isDescendant",t," ",e," = ",n.includes(e)),n.includes(e)},"isDescendant"),R=(0,d.K2)((e,t)=>{let n=p.get(t)||[];return d.Rm.info("Descendants of ",t," is ",n),d.Rm.info("Edge is ",e),e.v!==t&&e.w!==t&&(n?n.includes(e.v)||w(e.v,t)||w(e.w,t)||n.includes(e.w):(d.Rm.debug("Tilt, ",t,",not in descendants"),!1))},"edgeInCluster"),v=(0,d.K2)((e,t,n,r)=>{d.Rm.warn("Copying children of ",e,"root",r,"data",t.node(e),r);let i=t.children(e)||[];e!==r&&i.push(e),d.Rm.warn("Copying (nodes) clusterId",e,"nodes",i),i.forEach(i=>{if(t.children(i).length>0)v(i,t,n,r);else{let a=t.node(i);d.Rm.info("cp ",i," to ",r," with parent ",e),n.setNode(i,a),r!==t.parent(i)&&(d.Rm.warn("Setting parent",i,t.parent(i)),n.setParent(i,t.parent(i))),e!==r&&i!==e?(d.Rm.debug("Setting parent",i,e),n.setParent(i,e)):(d.Rm.info("In copy ",e,"root",r,"data",t.node(e),r),d.Rm.debug("Not Setting parent for node=",i,"cluster!==rootId",e!==r,"node!==clusterId",i!==e));let o=t.edges(i);d.Rm.debug("Copying Edges",o),o.forEach(i=>{d.Rm.info("Edge",i);let a=t.edge(i.v,i.w,i.name);d.Rm.info("Edge data",a,r);try{R(i,r)?(d.Rm.info("Copying as ",i.v,i.w,a,i.name),n.setEdge(i.v,i.w,a,i.name),d.Rm.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):d.Rm.info("Skipping copy of edge ",i.v,"--\x3e",i.w," rootId: ",r," clusterId:",e)}catch(e){d.Rm.error(e)}})}d.Rm.debug("Removing node",i),t.removeNode(i)})},"copy"),y=(0,d.K2)((e,t)=>{let n=t.children(e),r=[...n];for(let i of n)u.set(i,e),r=[...r,...y(i,t)];return r},"extractDescendants"),X=(0,d.K2)((e,t,n)=>{let r=e.edges().filter(e=>e.v===t||e.w===t),i=e.edges().filter(e=>e.v===n||e.w===n),a=r.map(e=>({v:e.v===t?n:e.v,w:e.w===t?t:e.w})),d=i.map(e=>({v:e.v,w:e.w}));return a.filter(e=>d.some(t=>e.v===t.v&&e.w===t.w))},"findCommonEdges"),E=(0,d.K2)((e,t,n)=>{let r,i=t.children(e);if(d.Rm.trace("Searching children of id ",e,i),i.length<1)return e;for(let e of i){let i=E(e,t,n),a=X(t,n,i);if(i)if(!(a.length>0))return i;else r=i}return r},"findNonClusterChild"),N=(0,d.K2)(e=>h.has(e)&&h.get(e).externalConnections&&h.has(e)?h.get(e).id:e,"getAnchorId"),b=(0,d.K2)((e,t)=>{if(!e||t>10)return void d.Rm.debug("Opting out, no graph ");for(let t of(d.Rm.debug("Opting in, graph "),e.nodes().forEach(function(t){e.children(t).length>0&&(d.Rm.warn("Cluster identified",t," Replacement id in edges: ",E(t,e,t)),p.set(t,y(t,e)),h.set(t,{id:E(t,e,t),clusterData:e.node(t)}))}),e.nodes().forEach(function(t){let n=e.children(t),r=e.edges();n.length>0?(d.Rm.debug("Cluster identified",t,p),r.forEach(e=>{w(e.v,t)^w(e.w,t)&&(d.Rm.warn("Edge: ",e," leaves cluster ",t),d.Rm.warn("Descendants of XXX ",t,": ",p.get(t)),h.get(t).externalConnections=!0)})):d.Rm.debug("Not a cluster ",t,p)}),h.keys())){let n=h.get(t).id,r=e.parent(n);r!==t&&h.has(r)&&!h.get(r).externalConnections&&(h.get(t).id=r)}e.edges().forEach(function(t){let n=e.edge(t);d.Rm.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),d.Rm.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));let r=t.v,i=t.w;if(d.Rm.warn("Fix XXX",h,"ids:",t.v,t.w,"Translating: ",h.get(t.v)," --- ",h.get(t.w)),h.get(t.v)||h.get(t.w)){if(d.Rm.warn("Fixing and trying - removing XXX",t.v,t.w,t.name),r=N(t.v),i=N(t.w),e.removeEdge(t.v,t.w,t.name),r!==t.v){let i=e.parent(r);h.get(i).externalConnections=!0,n.fromCluster=t.v}if(i!==t.w){let r=e.parent(i);h.get(r).externalConnections=!0,n.toCluster=t.w}d.Rm.warn("Fix Replacing with XXX",r,i,t.name),e.setEdge(r,i,n,t.name)}}),d.Rm.warn("Adjusted Graph",c(e)),C(e,0),d.Rm.trace(h)},"adjustClustersAndEdges"),C=(0,d.K2)((e,t)=>{if(d.Rm.warn("extractor - ",t,c(e),e.children("D")),t>10)return void d.Rm.error("Bailing out");let n=e.nodes(),r=!1;for(let t of n){let n=e.children(t);r=r||n.length>0}if(!r)return void d.Rm.debug("Done, no node has children",e.nodes());for(let r of(d.Rm.debug("Nodes = ",n,t),n))if(d.Rm.debug("Extracting node",r,h,h.has(r)&&!h.get(r).externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",t),h.has(r))if(!h.get(r).externalConnections&&e.children(r)&&e.children(r).length>0){d.Rm.warn("Cluster without external connections, without a parent and with children",r,t);let n="TB"===e.graph().rankdir?"LR":"TB";h.get(r)?.clusterData?.dir&&(n=h.get(r).clusterData.dir,d.Rm.warn("Fixing dir",h.get(r).clusterData.dir,n));let i=new f.T({multigraph:!0,compound:!0}).setGraph({rankdir:n,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});d.Rm.warn("Old graph before copy",c(e)),v(r,e,i,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:h.get(r).clusterData,label:h.get(r).label,graph:i}),d.Rm.warn("New graph after copy node: (",r,")",c(i)),d.Rm.debug("Old graph after copy",c(e))}else d.Rm.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!h.get(r).externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),t),d.Rm.debug(h);else d.Rm.debug("Not a cluster",r,t);for(let r of(n=e.nodes(),d.Rm.warn("New list of nodes",n),n)){let n=e.node(r);d.Rm.warn(" Now next level",r,n),n?.clusterNode&&C(n.graph,t+1)}},"extractor"),S=(0,d.K2)((e,t)=>{if(0===t.length)return[];let n=Object.assign([],t);return t.forEach(t=>{let r=e.children(t),i=S(e,r);n=[...n,...i]}),n},"sorter"),x=(0,d.K2)(e=>S(e,e.children()),"sortNodesByHierarchy"),I=(0,d.K2)(async(e,t,n,s,l,g)=>{d.Rm.warn("Graph in recursive render:XAX",c(t),l);let f=t.graph().rankdir;d.Rm.trace("Dir in recursive render - dir:",f);let p=e.insert("g").attr("class","root");t.nodes()?d.Rm.info("Recursive render XXX",t.nodes()):d.Rm.info("No nodes found for",t),t.edges().length>0&&d.Rm.info("Recursive edges",t.edge(t.edges()[0]));let u=p.insert("g").attr("class","clusters"),m=p.insert("g").attr("class","edgePaths"),w=p.insert("g").attr("class","edgeLabels"),R=p.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(e){let r=t.node(e);if(void 0!==l){let n=JSON.parse(JSON.stringify(l.clusterData));d.Rm.trace("Setting data for parent cluster XXX\n Node.id = ",e,"\n data=",n.height,"\nParent cluster",l.height),t.setNode(l.id,n),t.parent(e)||(d.Rm.trace("Setting parent",e,l.id),t.setParent(e,l.id,n))}if(d.Rm.info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),r?.clusterNode){d.Rm.info("Cluster identified XBX",e,r.width,t.node(e));let{ranksep:a,nodesep:o}=t.graph();r.graph.setGraph({...r.graph.graph(),ranksep:a+25,nodesep:o});let l=await I(R,r.graph,n,s,t.node(e),g),c=l.elem;(0,i.lC)(r,c),r.diff=l.diff||0,d.Rm.info("New compound node after recursive render XAX",e,"width",r.width,"height",r.height),(0,i.U7)(c,r)}else t.children(e).length>0?(d.Rm.trace("Cluster - the non recursive path XBX",e,r.id,r,r.width,"Graph:",t),d.Rm.trace(E(r.id,t)),h.set(r.id,{id:E(r.id,t),node:r})):(d.Rm.trace("Node - the non recursive path XAX",e,R,t.node(e),f),await (0,i.on)(R,t.node(e),{config:g,dir:f}))}));let v=(0,d.K2)(async()=>{let e=t.edges().map(async function(e){let n=t.edge(e.v,e.w,e.name);d.Rm.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),d.Rm.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),d.Rm.info("Fix",h,"ids:",e.v,e.w,"Translating: ",h.get(e.v),h.get(e.w)),await (0,r.jP)(w,n)});await Promise.all(e)},"processEdges");await v(),d.Rm.info("Graph before layout:",JSON.stringify(c(t))),d.Rm.info("############################################# XXX"),d.Rm.info("###                Layout                 ### XXX"),d.Rm.info("############################################# XXX"),(0,o.Zp)(t),d.Rm.info("Graph after layout:",JSON.stringify(c(t)));let y=0,{subGraphTitleTotalMargin:X}=(0,a.O)(g);return await Promise.all(x(t).map(async function(e){let n=t.node(e);if(d.Rm.info("Position XBX => "+e+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n?.clusterNode)n.y+=X,d.Rm.info("A tainted cluster node XBX1",e,n.id,n.width,n.height,n.x,n.y,t.parent(e)),h.get(n.id).node=n,(0,i.U_)(n);else if(t.children(e).length>0){d.Rm.info("A pure cluster node XBX1",e,n.id,n.x,n.y,n.width,n.height,t.parent(e)),n.height+=X,t.node(n.parentId);let r=n?.padding/2||0,a=n?.labelBBox?.height||0;d.Rm.debug("OffsetY",a-r||0,"labelHeight",a,"halfPadding",r),await (0,i.U)(u,n),h.get(n.id).node=n}else{let e=t.node(n.parentId);n.y+=X/2,d.Rm.info("A regular node XBX1 - using the padding",n.id,"parent",n.parentId,n.width,n.height,n.x,n.y,"offsetY",n.offsetY,"parent",e,e?.offsetY,n),(0,i.U_)(n)}})),t.edges().forEach(function(e){let i=t.edge(e);d.Rm.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(i),i),i.points.forEach(e=>e.y+=X/2);let a=t.node(e.v);var o=t.node(e.w);let l=(0,r.Jo)(m,i,h,n,a,o,s);(0,r.T_)(i,l)}),t.nodes().forEach(function(e){let n=t.node(e);d.Rm.info(e,n.type,n.diff),n.isGroup&&(y=n.diff)}),d.Rm.warn("Returning from recursive render XAX",p,y),{elem:p,diff:y}},"recursiveRender"),D=(0,d.K2)(async(e,t)=>{let n=new f.T({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:e.config?.nodeSpacing||e.config?.flowchart?.nodeSpacing||e.nodeSpacing,ranksep:e.config?.rankSpacing||e.config?.flowchart?.rankSpacing||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),a=t.select("g");(0,r.g0)(a,e.markers,e.type,e.diagramId),(0,i.gh)(),(0,r.IU)(),(0,i.IU)(),m(),e.nodes.forEach(e=>{n.setNode(e.id,{...e}),e.parentId&&n.setParent(e.id,e.parentId)}),d.Rm.debug("Edges:",e.edges),e.edges.forEach(e=>{if(e.start===e.end){let t=e.start,r=t+"---"+t+"---1",i=t+"---"+t+"---2",a=n.node(t);n.setNode(r,{domId:r,id:r,parentId:a.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),n.setParent(r,a.parentId),n.setNode(i,{domId:i,id:i,parentId:a.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10}),n.setParent(i,a.parentId);let d=structuredClone(e),o=structuredClone(e),s=structuredClone(e);d.label="",d.arrowTypeEnd="none",d.id=t+"-cyclic-special-1",o.arrowTypeStart="none",o.arrowTypeEnd="none",o.id=t+"-cyclic-special-mid",s.label="",a.isGroup&&(d.fromCluster=t,s.toCluster=t),s.id=t+"-cyclic-special-2",s.arrowTypeStart="none",n.setEdge(t,r,d,t+"-cyclic-special-0"),n.setEdge(r,i,o,t+"-cyclic-special-1"),n.setEdge(i,t,s,t+"-cyc<lic-special-2")}else n.setEdge(e.start,e.end,{...e},e.id)}),d.Rm.warn("Graph at first:",JSON.stringify(c(n))),b(n),d.Rm.warn("Graph after XAX:",JSON.stringify(c(n)));let o=(0,d.D7)();await I(a,n,e.type,e.diagramId,void 0,o)},"render")},82541:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(15231);let i=function(e){return(0,r.A)(e,4)}}}]);