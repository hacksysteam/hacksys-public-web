"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6185],{6060:function(e,t,n){n.d(t,{c:function(){return d}});var i=n(4279),r=n(9753),a=n(4917);function d(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:a.Z(e.nodes(),function(t){var n=e.node(t),r=e.parent(t),a={v:t};return i.Z(n)||(a.value=n),i.Z(r)||(a.parent=r),a}),edges:a.Z(e.edges(),function(t){var n=e.edge(t),r={v:t.v,w:t.w};return i.Z(t.name)||(r.name=t.name),i.Z(n)||(r.value=n),r})};return i.Z(e.graph())||(t.value=r.Z(e.graph())),t}n(6960)},6185:function(e,t,n){n.d(t,{diagram:function(){return F}});var i=n(6398),r=n(7921),a=n(199),d=n(2367),l=n(2364),o=n(7034),s=n(315),c=n(8227),h=n(5625),g=n(265),f=n(6060),u={},p={},w={},y=(0,s.eW)(()=>{p={},w={},u={}},"clear"),b=(0,s.eW)((e,t)=>(s.cM.trace("In isDescendant",t," ",e," = ",p[t].includes(e)),!!p[t].includes(e)),"isDescendant"),M=(0,s.eW)((e,t)=>(s.cM.info("Descendants of ",t," is ",p[t]),s.cM.info("Edge is ",e),e.v!==t&&e.w!==t&&(p[t]?p[t].includes(e.v)||b(e.v,t)||b(e.w,t)||p[t].includes(e.w):(s.cM.debug("Tilt, ",t,",not in descendants"),!1))),"edgeInCluster"),v=(0,s.eW)((e,t,n,i)=>{s.cM.warn("Copying children of ",e,"root",i,"data",t.node(e),i);let r=t.children(e)||[];e!==i&&r.push(e),s.cM.warn("Copying (nodes) clusterId",e,"nodes",r),r.forEach(r=>{if(t.children(r).length>0)v(r,t,n,i);else{let a=t.node(r);s.cM.info("cp ",r," to ",i," with parent ",e),n.setNode(r,a),i!==t.parent(r)&&(s.cM.warn("Setting parent",r,t.parent(r)),n.setParent(r,t.parent(r))),e!==i&&r!==e?(s.cM.debug("Setting parent",r,e),n.setParent(r,e)):(s.cM.info("In copy ",e,"root",i,"data",t.node(e),i),s.cM.debug("Not Setting parent for node=",r,"cluster!==rootId",e!==i,"node!==clusterId",r!==e));let d=t.edges(r);s.cM.debug("Copying Edges",d),d.forEach(r=>{s.cM.info("Edge",r);let a=t.edge(r.v,r.w,r.name);s.cM.info("Edge data",a,i);try{M(r,i)?(s.cM.info("Copying as ",r.v,r.w,a,r.name),n.setEdge(r.v,r.w,a,r.name),s.cM.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):s.cM.info("Skipping copy of edge ",r.v,"-->",r.w," rootId: ",i," clusterId:",e)}catch(e){s.cM.error(e)}})}s.cM.debug("Removing node",r),t.removeNode(r)})},"copy"),x=(0,s.eW)((e,t)=>{let n=t.children(e),i=[...n];for(let r of n)w[r]=e,i=[...i,...x(r,t)];return i},"extractDescendants"),m=(0,s.eW)((e,t)=>{s.cM.trace("Searching",e);let n=t.children(e);if(s.cM.trace("Searching children of id ",e,n),n.length<1)return s.cM.trace("This is a valid node",e),e;for(let i of n){let n=m(i,t);if(n)return s.cM.trace("Found replacement for",e," => ",n),n}},"findNonClusterChild"),N=(0,s.eW)(e=>u[e]&&u[e].externalConnections&&u[e]?u[e].id:e,"getAnchorId"),E=(0,s.eW)((e,t)=>{if(!e||t>10){s.cM.debug("Opting out, no graph ");return}for(let t of(s.cM.debug("Opting in, graph "),e.nodes().forEach(function(t){e.children(t).length>0&&(s.cM.warn("Cluster identified",t," Replacement id in edges: ",m(t,e)),p[t]=x(t,e),u[t]={id:m(t,e),clusterData:e.node(t)})}),e.nodes().forEach(function(t){let n=e.children(t),i=e.edges();n.length>0?(s.cM.debug("Cluster identified",t,p),i.forEach(e=>{e.v!==t&&e.w!==t&&b(e.v,t)^b(e.w,t)&&(s.cM.warn("Edge: ",e," leaves cluster ",t),s.cM.warn("Descendants of XXX ",t,": ",p[t]),u[t].externalConnections=!0)})):s.cM.debug("Not a cluster ",t,p)}),Object.keys(u))){let n=u[t].id,i=e.parent(n);i!==t&&u[i]&&!u[i].externalConnections&&(u[t].id=i)}e.edges().forEach(function(t){let n=e.edge(t);s.cM.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),s.cM.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));let i=t.v,r=t.w;if(s.cM.warn("Fix XXX",u,"ids:",t.v,t.w,"Translating: ",u[t.v]," --- ",u[t.w]),u[t.v]&&u[t.w]&&u[t.v]===u[t.w]){s.cM.warn("Fixing and trixing link to self - removing XXX",t.v,t.w,t.name),s.cM.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),i=N(t.v),r=N(t.w),e.removeEdge(t.v,t.w,t.name);let a=t.w+"---"+t.v;e.setNode(a,{domId:a,id:a,labelStyle:"",labelText:n.label,padding:0,shape:"labelRect",style:""});let d=structuredClone(n),l=structuredClone(n);d.label="",d.arrowTypeEnd="none",l.label="",d.fromCluster=t.v,l.toCluster=t.v,e.setEdge(i,a,d,t.name+"-cyclic-special"),e.setEdge(a,r,l,t.name+"-cyclic-special")}else(u[t.v]||u[t.w])&&(s.cM.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),i=N(t.v),r=N(t.w),e.removeEdge(t.v,t.w,t.name),i!==t.v&&(u[e.parent(i)].externalConnections=!0,n.fromCluster=t.v),r!==t.w&&(u[e.parent(r)].externalConnections=!0,n.toCluster=t.w),s.cM.warn("Fix Replacing with XXX",i,r,t.name),e.setEdge(i,r,n,t.name))}),s.cM.warn("Adjusted Graph",f.c(e)),S(e,0),s.cM.trace(u)},"adjustClustersAndEdges"),S=(0,s.eW)((e,t)=>{if(s.cM.warn("extractor - ",t,f.c(e),e.children("D")),t>10){s.cM.error("Bailing out");return}let n=e.nodes(),i=!1;for(let t of n){let n=e.children(t);i=i||n.length>0}if(!i){s.cM.debug("Done, no node has children",e.nodes());return}for(let i of(s.cM.debug("Nodes = ",n,t),n))if(s.cM.debug("Extracting node",i,u,u[i]&&!u[i].externalConnections,!e.parent(i),e.node(i),e.children("D")," Depth ",t),u[i]){if(!u[i].externalConnections&&e.children(i)&&e.children(i).length>0){s.cM.warn("Cluster without external connections, without a parent and with children",i,t);let n="TB"===e.graph().rankdir?"LR":"TB";u[i]?.clusterData?.dir&&(n=u[i].clusterData.dir,s.cM.warn("Fixing dir",u[i].clusterData.dir,n));let r=new h.k({multigraph:!0,compound:!0}).setGraph({rankdir:n,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});s.cM.warn("Old graph before copy",f.c(e)),v(i,e,r,i),e.setNode(i,{clusterNode:!0,id:i,clusterData:u[i].clusterData,labelText:u[i].labelText,graph:r}),s.cM.warn("New graph after copy node: (",i,")",f.c(r)),s.cM.debug("Old graph after copy",f.c(e))}else s.cM.warn("Cluster ** ",i," **not meeting the criteria !externalConnections:",!u[i].externalConnections," no parent: ",!e.parent(i)," children ",e.children(i)&&e.children(i).length>0,e.children("D"),t),s.cM.debug(u)}else s.cM.debug("Not a cluster",i,t);for(let i of(n=e.nodes(),s.cM.warn("New list of nodes",n),n)){let n=e.node(i);s.cM.warn(" Now next level",i,n),n.clusterNode&&S(n.graph,t+1)}},"extractor"),C=(0,s.eW)((e,t)=>{if(0===t.length)return[];let n=Object.assign(t);return t.forEach(t=>{let i=e.children(t),r=C(e,i);n=[...n,...r]}),n},"sorter"),k=(0,s.eW)(e=>C(e,e.children()),"sortNodesByHierarchy"),T=(0,s.eW)((e,t)=>{s.cM.info("Creating subgraph rect for ",t.id,t);let n=(0,s.nV)(),i=e.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),r=i.insert("rect",":first-child"),o=(0,s.ku)(n.flowchart.htmlLabels),h=i.insert("g").attr("class","cluster-label"),g="markdown"===t.labelType?(0,l.rw)(h,t.labelText,{style:t.labelStyle,useHtmlLabels:o},n):h.node().appendChild((0,a.XO)(t.labelText,t.labelStyle,void 0,!0)),f=g.getBBox();if((0,s.ku)(n.flowchart.htmlLabels)){let e=g.children[0],t=(0,c.Ys)(g);f=e.getBoundingClientRect(),t.attr("width",f.width),t.attr("height",f.height)}let u=0*t.padding,p=t.width<=f.width+u?f.width+u:t.width;t.width<=f.width+u?t.diff=(f.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,s.cM.trace("Data ",t,JSON.stringify(t)),r.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-p/2).attr("y",t.y-t.height/2-u/2).attr("width",p).attr("height",t.height+u);let{subGraphTitleTopMargin:w}=(0,d.L)(n);o?h.attr("transform",`translate(${t.x-f.width/2}, ${t.y-t.height/2+w})`):h.attr("transform",`translate(${t.x}, ${t.y-t.height/2+w})`);let y=r.node().getBBox();return t.width=y.width,t.height=y.height,t.intersect=function(e){return(0,a.qo)(t,e)},i},"rect"),X=(0,s.eW)((e,t)=>{let n=e.insert("g").attr("class","note-cluster").attr("id",t.id),i=n.insert("rect",":first-child"),r=0*t.padding,d=r/2;i.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-d).attr("y",t.y-t.height/2-d).attr("width",t.width+r).attr("height",t.height+r).attr("fill","none");let l=i.node().getBBox();return t.width=l.width,t.height=l.height,t.intersect=function(e){return(0,a.qo)(t,e)},n},"noteGroup"),D={rect:T,roundedWithTitle:(0,s.eW)((e,t)=>{let n=(0,s.nV)(),i=e.insert("g").attr("class",t.classes).attr("id",t.id),r=i.insert("rect",":first-child"),l=i.insert("g").attr("class","cluster-label"),o=i.append("rect"),h=l.node().appendChild((0,a.XO)(t.labelText,t.labelStyle,void 0,!0)),g=h.getBBox();if((0,s.ku)(n.flowchart.htmlLabels)){let e=h.children[0],t=(0,c.Ys)(h);g=e.getBoundingClientRect(),t.attr("width",g.width),t.attr("height",g.height)}g=h.getBBox();let f=0*t.padding,u=f/2,p=t.width<=g.width+t.padding?g.width+t.padding:t.width;t.width<=g.width+t.padding?t.diff=(g.width+0*t.padding-t.width)/2:t.diff=-t.padding/2,r.attr("class","outer").attr("x",t.x-p/2-u).attr("y",t.y-t.height/2-u).attr("width",p+f).attr("height",t.height+f),o.attr("class","inner").attr("x",t.x-p/2-u).attr("y",t.y-t.height/2-u+g.height-1).attr("width",p+f).attr("height",t.height+f-g.height-3);let{subGraphTitleTopMargin:w}=(0,d.L)(n);l.attr("transform",`translate(${t.x-g.width/2}, ${t.y-t.height/2-t.padding/3+((0,s.ku)(n.flowchart.htmlLabels)?5:3)+w})`);let y=r.node().getBBox();return t.height=y.height,t.intersect=function(e){return(0,a.qo)(t,e)},i},"roundedWithTitle"),noteGroup:X,divider:(0,s.eW)((e,t)=>{let n=e.insert("g").attr("class",t.classes).attr("id",t.id),i=n.insert("rect",":first-child"),r=0*t.padding;i.attr("class","divider").attr("x",t.x-t.width/2-r/2).attr("y",t.y-t.height/2).attr("width",t.width+r).attr("height",t.height+r);let d=i.node().getBBox();return t.width=d.width,t.height=d.height,t.diff=-t.padding/2,t.intersect=function(e){return(0,a.qo)(t,e)},n},"divider")},W={},L=(0,s.eW)((e,t)=>{s.cM.trace("Inserting cluster");let n=t.shape||"rect";W[t.id]=D[n](e,t)},"insertCluster"),B=(0,s.eW)(()=>{W={}},"clear"),O=(0,s.eW)(async(e,t,n,r,l,o)=>{s.cM.info("Graph in recursive render: XXX",f.c(t),l);let c=t.graph().rankdir;s.cM.trace("Dir in recursive render - dir:",c);let h=e.insert("g").attr("class","root");t.nodes()?s.cM.info("Recursive render XXX",t.nodes()):s.cM.info("No nodes found for",t),t.edges().length>0&&s.cM.trace("Recursive edges",t.edge(t.edges()[0]));let p=h.insert("g").attr("class","clusters"),w=h.insert("g").attr("class","edgePaths"),y=h.insert("g").attr("class","edgeLabels"),b=h.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(e){let i=t.node(e);if(void 0!==l){let n=JSON.parse(JSON.stringify(l.clusterData));s.cM.info("Setting data for cluster XXX (",e,") ",n,l),t.setNode(l.id,n),t.parent(e)||(s.cM.trace("Setting parent",e,l.id),t.setParent(e,l.id,n))}if(s.cM.info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),i?.clusterNode){s.cM.info("Cluster identified",e,i.width,t.node(e));let{ranksep:d,nodesep:l}=t.graph();i.graph.setGraph({...i.graph.graph(),ranksep:d,nodesep:l});let c=await O(b,i.graph,n,r,t.node(e),o),h=c.elem;(0,a.jr)(i,h),i.diff=c.diff||0,s.cM.info("Node bounds (abc123)",e,i,i.width,i.x,i.y),(0,a.Yn)(h,i),s.cM.warn("Recursive render complete ",h,i)}else t.children(e).length>0?(s.cM.info("Cluster - the non recursive path XXX",e,i.id,i,t),s.cM.info(m(i.id,t)),u[i.id]={id:m(i.id,t),node:i}):(s.cM.info("Node - the non recursive path",e,i.id,i),await (0,a.Lf)(b,t.node(e),c))})),t.edges().forEach(async function(e){let n=t.edge(e.v,e.w,e.name);s.cM.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),s.cM.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),s.cM.info("Fix",u,"ids:",e.v,e.w,"Translating: ",u[e.v],u[e.w]),await (0,i.I_)(y,n)}),t.edges().forEach(function(e){s.cM.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e))}),s.cM.info("Graph before layout:",JSON.stringify(f.c(t))),s.cM.info("#############################################"),s.cM.info("###                Layout                 ###"),s.cM.info("#############################################"),s.cM.info(t),(0,g.bK)(t),s.cM.info("Graph after layout:",JSON.stringify(f.c(t)));let M=0,{subGraphTitleTotalMargin:v}=(0,d.L)(o);return k(t).forEach(function(e){let n=t.node(e);s.cM.info("Position "+e+": "+JSON.stringify(t.node(e))),s.cM.info("Position "+e+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n?.clusterNode?(n.y+=v,(0,a.aH)(n)):t.children(e).length>0?(n.height+=v,L(p,n),u[n.id].node=n):(n.y+=v/2,(0,a.aH)(n))}),t.edges().forEach(function(e){let a=t.edge(e);s.cM.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(a),a),a.points.forEach(e=>e.y+=v/2);let d=(0,i.QP)(w,e,a,u,n,t,r);(0,i.Jj)(a,d)}),t.nodes().forEach(function(e){let n=t.node(e);s.cM.info(e,n.type,n.diff),"group"===n.type&&(M=n.diff)}),{elem:h,diff:M}},"recursiveRender"),I=(0,s.eW)(async(e,t,n,r,d)=>{(0,i.DQ)(e,n,r,d),(0,a.ZH)(),(0,i.ZH)(),B(),y(),s.cM.warn("Graph at first:",JSON.stringify(f.c(t))),E(t),s.cM.warn("Graph after:",JSON.stringify(f.c(t)));let l=(0,s.nV)();await O(e,t,r,d,void 0,l)},"render"),J=(0,s.eW)(e=>s.SY.sanitizeText(e,(0,s.nV)()),"sanitizeText"),R={dividerMargin:10,padding:5,textHeight:10,curve:void 0},V=(0,s.eW)(function(e,t,n,i){s.cM.info("keys:",[...e.keys()]),s.cM.info(e),e.forEach(function(e){let r={shape:"rect",id:e.id,domId:e.domId,labelText:J(e.id),labelStyle:"",style:"fill: none; stroke: black",padding:s.nV().flowchart?.padding??s.nV().class?.padding};t.setNode(e.id,r),A(e.classes,t,n,i,e.id),s.cM.info("setNode",r)})},"addNamespaces"),A=(0,s.eW)(function(e,t,n,i,r){s.cM.info("keys:",[...e.keys()]),s.cM.info(e),[...e.values()].filter(e=>e.parent===r).forEach(function(e){let n=e.cssClasses.join(" "),a=(0,o.be)(e.styles),d=e.label??e.id,l={labelStyle:a.labelStyle,shape:"class_box",labelText:J(d),classData:e,rx:0,ry:0,class:n,style:a.style,id:e.id,domId:e.domId,tooltip:i.db.getTooltip(e.id,r)||"",haveCallback:e.haveCallback,link:e.link,width:"group"===e.type?500:void 0,type:e.type,padding:s.nV().flowchart?.padding??s.nV().class?.padding};t.setNode(e.id,l),r&&t.setParent(e.id,r),s.cM.info("setNode",l)})},"addClasses"),G=(0,s.eW)(function(e,t,n,i){s.cM.info(e),e.forEach(function(e,r){let a={labelStyle:"",shape:"note",labelText:J(e.text),noteData:e,rx:0,ry:0,class:"",style:"",id:e.id,domId:e.id,tooltip:"",type:"note",padding:s.nV().flowchart?.padding??s.nV().class?.padding};if(t.setNode(e.id,a),s.cM.info("setNode",a),!e.class||!i.has(e.class))return;let d=n+r,l={id:`edgeNote${d}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,o.le)(R.curve,c.c_6)};t.setEdge(e.id,e.class,l,d)})},"addNotes"),P=(0,s.eW)(function(e,t){let n=(0,s.nV)().flowchart,i=0;e.forEach(function(e){i++;let r={classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:(0,o.Ln)(e.id1,e.id2,{prefix:"id",counter:i}),arrowhead:"arrow_open"===e.type?"none":"normal",startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,arrowTypeStart:j(e.relation.type1),arrowTypeEnd:j(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,o.le)(n?.curve,c.c_6)};if(s.cM.info(r,e),void 0!==e.style){let t=(0,o.be)(e.style);r.style=t.style,r.labelStyle=t.labelStyle}e.text=e.title,void 0===e.text?void 0!==e.style&&(r.arrowheadStyle="fill: #333"):(r.arrowheadStyle="fill: #333",r.labelpos="c",s.nV().flowchart?.htmlLabels??(0,s.nV)().htmlLabels?(r.labelType="html",r.label='<span class="edgeLabel">'+e.text+"</span>"):(r.labelType="text",r.label=e.text.replace(s.SY.lineBreakRegex,"\n"),void 0===e.style&&(r.style=r.style||"stroke: #333; stroke-width: 1.5px;fill:none"),r.labelStyle=r.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,r,i)})},"addRelations"),Z=(0,s.eW)(function(e){R={...R,...e}},"setConf"),_=(0,s.eW)(async function(e,t,n,i){let r;s.cM.info("Drawing class - ",t);let a=(0,s.nV)().flowchart??(0,s.nV)().class,d=(0,s.nV)().securityLevel;s.cM.info("config:",a);let l=a?.nodeSpacing??50,g=a?.rankSpacing??50,f=new h.k({multigraph:!0,compound:!0}).setGraph({rankdir:i.db.getDirection(),nodesep:l,ranksep:g,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),u=i.db.getNamespaces(),p=i.db.getClasses(),w=i.db.getRelations(),y=i.db.getNotes();s.cM.info(w),V(u,f,t,i),A(p,f,t,i),P(w,f),G(y,f,w.length+1,p),"sandbox"===d&&(r=(0,c.Ys)("#i"+t));let b="sandbox"===d?(0,c.Ys)(r.nodes()[0].contentDocument.body):(0,c.Ys)("body"),M=b.select(`[id="${t}"]`),v=b.select("#"+t+" g");if(await I(v,f,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),o.w8.insertTitle(M,"classTitleText",a?.titleTopMargin??5,i.db.getDiagramTitle()),(0,s.j7)(f,M,a?.diagramPadding,a?.useMaxWidth),!a?.htmlLabels){let e="sandbox"===d?r.nodes()[0].contentDocument:document;for(let n of e.querySelectorAll('[id="'+t+'"] .edgeLabel .label')){let t=n.getBBox(),i=e.createElementNS("http://www.w3.org/2000/svg","rect");i.setAttribute("rx",0),i.setAttribute("ry",0),i.setAttribute("width",t.width),i.setAttribute("height",t.height),n.insertBefore(i,n.firstChild)}}},"draw");function j(e){let t;switch(e){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}(0,s.eW)(j,"getArrowMarker");var F={parser:r.P0,db:r.pl,renderer:{setConf:Z,draw:_},styles:r.Ee,init:(0,s.eW)(e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,r.pl.clear()},"init")}}}]);