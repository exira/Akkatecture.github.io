webpackJsonp([0x62b652680a45],{408:function(e,t){e.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Event Upgrading",lesson:5,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/event-upgrading"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Testing Actors",lesson:6,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/testing-actors"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Akka",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Configuration",lesson:8,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Specifications",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/specifications"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Walkthrough Ending",lesson:9,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-ending"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Walkthrough Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-introduction"}}},{node:{frontmatter:{title:"Your First Specifications",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-specifications"}}},{node:{frontmatter:{title:"Your First Subscribers",lesson:7,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscribers"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:6,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Commands",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-commands"}}},{node:{frontmatter:{title:"Your First Read Models",lesson:8,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-read-models"}}},{node:{frontmatter:{title:"Your First Events",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-events"}}},{node:{frontmatter:{title:"Clustering",lesson:3,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}}]},postBySlug:{html:'<p>Initially, before you can create an aggregate, you need to create its corresponding\nidentity and state. You can create your own model of <code class="language-text">Identity</code> by implementing the\n<code class="language-text">IIdentity</code> interface, or you can use base class <code class="language-text">Identity&lt;&gt;</code> that\nAkkatecture provides, like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StoreId</span> <span class="token punctuation">:</span> <span class="token class-name">Identity</span><span class="token operator">&lt;</span>StoreId<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token function">StoreId</span><span class="token punctuation">(</span><span class="token keyword">string</span> <span class="token keyword">value</span><span class="token punctuation">)</span>\n        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The <code class="language-text">Identity&lt;&gt;</code> value object provides generic functionality to create and validate aggregate root identities. Please read the documentation regarding the bundled <code class="language-text">Identity&lt;&gt;</code> type <a href="/docs/primitives#identities">here</a>, as it provides several useful features, e.g. several different schemes for identity generation, one that minimizes MSSQL database fragmentation.</p>\n<p>Additionally, to create your aggregate state, which will be used for applying aggregate events to, you can create your own state model by inheriting from the base <code class="language-text">AggregateState&lt;,,&gt;</code> class like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StoreState</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateState</span><span class="token operator">&lt;</span>StoreAggregate<span class="token punctuation">,</span> StoreId<span class="token operator">></span>\n<span class="token punctuation">{</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Next; to model your aggregate, simply inherit from <code class="language-text">AggregateRoot&lt;,,&gt;</code>, making sure to pass the aggregate\'s own type as the first generic argument, with the identity model as the second, and the state model as the third. Also be sure to pass down an instance of the aggregate identity to the base class, as this is required.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StoreAggregate</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateRoot</span><span class="token operator">&lt;</span>StoreAggregate<span class="token punctuation">,</span> StoreId<span class="token punctuation">,</span> StoreState<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token function">StoreAggregate</span><span class="token punctuation">(</span><span class="token class-name">StoreId</span> aggregateId<span class="token punctuation">)</span>\n        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>aggregateId<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="aggregate-managers"><a href="#aggregate-managers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Aggregate Managers</h2>\n<p>Aggregates in Akkatecture exist as singletons in the actor system, and thus, by design, only one aggregate root instance can be created or used per <code class="language-text">aggregateId</code> at any given time. Akkatecture gives you the constructs to avoid this with the use of <code class="language-text">AggregateManager&lt;,,&gt;</code> which is essentially a message coordinater/dispatcher for the underlying aggregate.</p>\n<p>For most use cases the default <code class="language-text">AggregateManager&lt;,,&gt;</code> will be sufficient, and as usual, all you need to do is to inherit from it.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StoreAggregateManager</span> <span class="token punctuation">:</span> \n    <span class="token class-name">AggregateManager</span><span class="token operator">&lt;</span>StoreAggregate<span class="token punctuation">,</span> StoreId<span class="token punctuation">,</span> Command<span class="token operator">&lt;</span>StoreAggregate<span class="token punctuation">,</span> StoreId<span class="token operator">></span><span class="token operator">></span>\n<span class="token punctuation">{</span>       \n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The aggregate manager works by resolving the addresses of aggregate roots and routes messages to them accordingly. It routes the messages by using the <code class="language-text">Command&lt;,,&gt;.AggregateId</code> member variable to locate or create the child aggregate roots. Since we are also in an actor system, the <code class="language-text">AggregateManager&lt;,,&gt;</code> is also responsible for supervising aggregate roots (which are also actors within akka.net). The aggregate manager is what enables Akkatecture to take advantage of the <a href="https://gigi.nullneuron.net/gigilabs/child-per-entity-pattern-in-akka-net/">one child per entity pattern</a>. There is another example of this pattern being applied in Akkatecture\'s <code class="language-text">Akkatecture.Cluster</code> package which does the same thing for aggregates and <a href="/docs/sagas">sagas</a> in a clustered environment.</p>\n<blockquote>\n<p>Aggregate managers should not do anything that violates the error kernel pattern. What this means is that the aggregate manager should not do <em>dangerous</em> <code class="language-text">I/O</code> within the aggregate manager, since it will be responsible for many aggregates underneath it.</p>\n</blockquote>\n<p><a href="/docs/events">Next, Events →</a></p>',timeToRead:2,excerpt:"Initially, before you can create an aggregate, you need to create its corresponding \nidentity and state. You can create your own model of…",frontmatter:{title:"Aggregates",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["basic-concepts","akkatecture","csharp","dotnet"]},fields:{slug:"/aggregates"}}},pathContext:{slug:"/aggregates",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-aggregates-159df49748cb519ea812.js.map