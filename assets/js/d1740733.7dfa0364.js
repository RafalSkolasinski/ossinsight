"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[8728],{37482:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return h},toc:function(){return p},default:function(){return d}});var i=o(87462),n=o(63366),a=(o(67294),o(3905)),r=["components"],s={title:"Data Preparation for Analytics",date:new Date("2022-03-01T00:00:00.000Z"),authors:["hooopo"]},l=void 0,c={permalink:"/blog/how-it-works",editUrl:"https://github.com/pingcap/ossinsight/edit/main/blog/how-it-works.md",source:"@site/blog/how-it-works.md",title:"Data Preparation for Analytics",description:"All the data we use here on this website sources from GH Archive, a non-profit project that records and archives all GitHub events data since 2011. The total data volume archived by GH Archive can be up to 4 billion rows. We download the json file on GH Archive and convert it into csv format via Script, and finally load it into the TiDB cluster in parallel through TiDB-Lightning.",date:"2022-03-01T00:00:00.000Z",formattedDate:"March 1, 2022",tags:[],readingTime:4.315,truncated:!0,authors:[{name:"hooopo",title:"Engineer of TiDB Community",url:"https://twitter.com/hooopo",imageURL:"https://github.com/hooopo.png",key:"hooopo"}],prevItem:{title:"Use TiDB Cloud to Analyze GitHub Events in 5 Minutes",permalink:"/blog/try-it-yourself"}},h={authorsImageUrls:[void 0]},p=[],u={toc:p};function d(t){var e=t.components,o=(0,n.Z)(t,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All the data we use here on this website sources from ",(0,a.kt)("a",{parentName:"p",href:"https://www.gharchive.org/"},"GH Archive"),", a non-profit project that records and archives all GitHub events data since 2011. The total data volume archived by GH Archive can be up to 4 billion rows. We download the ",(0,a.kt)("inlineCode",{parentName:"p"},"json file")," on GH Archive and convert it into csv format via Script, and finally load it into the TiDB cluster in parallel through ",(0,a.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/stable/tidb-lightning-overview"},"TiDB-Lightning"),"."),(0,a.kt)("p",null,"In this post, we will explain step by step how we conduct this process. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Prepare the data in csv format for TiDB Lighting.")))}d.isMDXComponent=!0}}]);