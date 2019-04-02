webpackJsonp([32197525406939],{428:function(n,s){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Clustering",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Walkthrough Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-introduction"}}},{node:{frontmatter:{title:"Your First Commands",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-commands"}}},{node:{frontmatter:{title:"Your First Events",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-events"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Your First Cluster",lesson:9,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-cluster"}}},{node:{frontmatter:{title:"Your First Subscribers",lesson:7,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscribers"}}},{node:{frontmatter:{title:"Your First Read Models",lesson:8,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-read-models"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Specifications",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/specifications"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Akka",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Configuration",lesson:8,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Event Upgrading",lesson:5,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/event-upgrading"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:6,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Specifications",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-specifications"}}}]},postBySlug:{html:'<p>Let us recall some of the business requiremtents for the bank:</p>\n<ul>\n<li>The bank needs to allow customers to create bank accounts for free with a non-negative opening balance.</li>\n<li>The bank needs to allow customers to transfer money between accounts.</li>\n</ul>\n<p>We could see these as three commands, one for creating the bank account. And another one for initiating a money transfer:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//command for creating the bank account</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OpenNewAccountCommand</span> <span class="token punctuation">:</span> <span class="token class-name">Command</span><span class="token operator">&lt;</span>Account<span class="token punctuation">,</span>AccountId<span class="token operator">></span> \n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">Money</span> OpeningBalance <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token function">OpenNewAccountCommand</span><span class="token punctuation">(</span><span class="token class-name">AccountId</span> aggregateId<span class="token punctuation">,</span> <span class="token class-name">Money</span> openingBalance<span class="token punctuation">)</span>\n        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>aggregateId<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>openingBalance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ArgumentNullException</span><span class="token punctuation">(</span><span class="token function">nameof</span><span class="token punctuation">(</span>openingBalance<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        OpeningBalance <span class="token operator">=</span> openingBalance<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>And the transfer money command can be made as follows:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//command for initiating (sending) a money transfer</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TransferMoneyCommand</span> <span class="token punctuation">:</span> <span class="token class-name">Command</span><span class="token operator">&lt;</span>Account<span class="token punctuation">,</span>AccountId<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">AccountId</span> DestinationId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token class-name">Money</span> Amount <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token function">TransferMoneyCommand</span><span class="token punctuation">(</span>\n        <span class="token class-name">AccountId</span> aggregateId<span class="token punctuation">,</span> \n        <span class="token class-name">AccountId</span> destinationId<span class="token punctuation">,</span>\n        <span class="token class-name">Money</span> amount<span class="token punctuation">)</span> \n        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>aggregateId<span class="token punctuation">)</span> \n        <span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>amount <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ArgumentNullException</span><span class="token punctuation">(</span><span class="token function">nameof</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            Amount <span class="token operator">=</span> amount<span class="token punctuation">;</span>\n            DestinationId <span class="token operator">=</span> destinationId<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//command for receiving a money transfer</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReceiveMoneyCommand</span> <span class="token punctuation">:</span> <span class="token class-name">Command</span><span class="token operator">&lt;</span>Account<span class="token punctuation">,</span>AccountId<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">AccountId</span> SenderId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token class-name">Money</span> Amount <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token function">TransferMoneyCommand</span><span class="token punctuation">(</span>\n        <span class="token class-name">AccountId</span> aggregateId<span class="token punctuation">,</span> \n        <span class="token class-name">AccountId</span> destinationId<span class="token punctuation">,</span>\n        <span class="token class-name">Money</span> amount<span class="token punctuation">)</span> \n        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>aggregateId<span class="token punctuation">)</span> \n        <span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>amount <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ArgumentNullException</span><span class="token punctuation">(</span><span class="token function">nameof</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            Amount <span class="token operator">=</span> amount<span class="token punctuation">;</span>\n            DestinationId <span class="token operator">=</span> destinationId<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p>Typically when designing a business domain, one would start with the events first. Instead of modelling how external actors interact with the system, one should start with desgining how the system interacts with itself through a process called <a href="https://en.wikipedia.org/wiki/Event_storming">event storming</a>.</p>\n</blockquote>\n<p>Now we can make some events for the business domain. Events are the funamendamental building blocks of event sourced systems. Go on ahead next to create <a href="/docs/your-first-events">your first events</a>.</p>',timeToRead:1,excerpt:"Let us recall some of the business requiremtents for the bank: The bank needs to allow customers to create bank accounts for free with a non…",frontmatter:{title:"Your First Commands",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["walkthrough","akkatecture","commands","csharp","dotnet"]},fields:{slug:"/your-first-commands"}}},pathContext:{slug:"/your-first-commands",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-your-first-commands-aad6dea9e9947e34ebb3.js.map