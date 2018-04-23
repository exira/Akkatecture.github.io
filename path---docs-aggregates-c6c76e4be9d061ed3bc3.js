webpackJsonp([0x62b652680a45],{394:function(e,t){e.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Your First Read Model",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-read-model"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Subscriber",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscriber"}}},{node:{frontmatter:{title:"Akka",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Configuration",lesson:8,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Specifications",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/specifications"}}},{node:{frontmatter:{title:"Event Upgrading",lesson:5,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/event-upgrading"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Clustering",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Walkthrough Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-introduction"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}}]},postBySlug:{html:'<p>Initially before you can create a aggregate, you need to create its\nidentity and state. You can create your own implementation of <code class="language-text">Identity</code> by implementing the\n<code class="language-text">IIdentity</code> interface or you can use a base class <code class="language-text">Identity&lt;&gt;</code> that\nAkkatecture provides, like this.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestAggregateId</span> <span class="token punctuation">:</span> <span class="token class-name">Identity</span><span class="token operator">&lt;</span>TestAggregateId<span class="token operator">></span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">TestAggregateId</span><span class="token punctuation">(</span><span class="token keyword">string</span> <span class="token keyword">value</span><span class="token punctuation">)</span>\n    <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The <code class="language-text">Identity&lt;&gt;</code> value object provides generic functionality to create and validate aggregate root IDs. Please read the documentation regarding the bundled <code class="language-text">Identity&lt;&gt;</code> type as it provides several useful features, e.g. several different schemes for ID generation, one that minimizes MSSQL database fragmentation.</p>\n<p>Additionally to create your aggregate state, which will be used for applying aggregate events to, you can create your own by inheriting from the base <code class="language-text">AggregateState&lt;,,&gt;</code> class like this.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestState</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateState</span><span class="token operator">&lt;</span>TestAggregate<span class="token punctuation">,</span> TestAggregateId<span class="token operator">></span>\n<span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Next, to create a new aggregate, simply inherit from <code class="language-text">AggregateRoot&lt;,,&gt;</code> like this, making sure to pass test aggregate own type as the first generic argument and the identity as the second, and the state as the third. Make sure to pass down the aggregate identity to the base class, as this is required.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp">    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestAggregate</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateRoot</span><span class="token operator">&lt;</span>TestAggregate<span class="token punctuation">,</span> TestAggregateId<span class="token punctuation">,</span> TestState<span class="token operator">></span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">public</span> <span class="token function">TestAggregate</span><span class="token punctuation">(</span><span class="token class-name">TestAggregateId</span> aggregateId<span class="token punctuation">)</span>\n            <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>aggregateId<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p>Aggregates in Akkatecture exist as singletons in the actor system, and thus by design, only one aggregate root instance can be created or used per id at any given time. The situation of having two aggregate roots available with the same aggregateId means that you have two instances of the aggregate state in the actor system which leads to a data level split brain situation. Akkatecture makes it easy to avoid this with the use of <code class="language-text">AggregateManager&lt;,,,,&gt;</code> which is essentially a message coordinater/dispatcher for the underlying aggregate.</p>\n</blockquote>',timeToRead:1,excerpt:"Initially before you can create a aggregate, you need to create its\nidentity and state. You can create your own implementation of   by…",frontmatter:{title:"Aggregates",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["basic-concepts","akkatecture","csharp","dotnet"]},fields:{slug:"/aggregates"}}},pathContext:{slug:"/aggregates",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-aggregates-c6c76e4be9d061ed3bc3.js.map