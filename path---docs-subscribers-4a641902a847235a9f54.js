webpackJsonp([87691678318370],{421:function(t,e){t.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Specifications",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/specifications"}}},{node:{frontmatter:{title:"Clustering",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Event Upgrading",lesson:5,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/event-upgrading"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:7,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Your First Cluster",lesson:10,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-cluster"}}},{node:{frontmatter:{title:"Your First Read Models",lesson:9,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-read-models"}}},{node:{frontmatter:{title:"Your First Subscribers",lesson:8,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscribers"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Your First Events",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-events"}}},{node:{frontmatter:{title:"Your First Commands",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-commands"}}},{node:{frontmatter:{title:"Walkthrough Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-introduction"}}},{node:{frontmatter:{title:"Your First Specifications",lesson:6,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-specifications"}}},{node:{frontmatter:{title:"Configuration",lesson:8,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Akka",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}}]},postBySlug:{html:'<p>Subscribers in Akkatecture come in the form of <code class="language-text">DomainEventSubscriber&lt;,,&gt;</code>. This allows you to have actors within the actor system listening to domain events that get published from aggregate roots.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//subscriber counts how many games have ended</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GamesEndedSubscriber</span> <span class="token punctuation">:</span> <span class="token class-name">DomainEventSubscriber</span><span class="token operator">&lt;</span>GameAggregate<span class="token punctuation">,</span>GameAggregateId<span class="token punctuation">,</span>AggregateEvent<span class="token operator">&lt;</span>GameAggregate<span class="token punctuation">,</span> GameAggregateId<span class="token operator">></span><span class="token operator">></span><span class="token punctuation">,</span>\n    ISubscribeTo<span class="token operator">&lt;</span>GameAggregate<span class="token punctuation">,</span>GameAggregateId<span class="token punctuation">,</span>GameEndedEvent<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> Count <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token function">TestAggregateSubscriber</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        ReceiveAsync<span class="token operator">&lt;</span>IDomainEvent<span class="token operator">&lt;</span>GameAggregate<span class="token punctuation">,</span>GameAggregateId<span class="token punctuation">,</span>GameEndedEvent<span class="token operator">></span><span class="token operator">></span><span class="token punctuation">(</span>Handle<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n        \n    <span class="token keyword">public</span> <span class="token class-name">Task</span> <span class="token function">Handle</span><span class="token punctuation">(</span>IDomainEvent<span class="token operator">&lt;</span>GameAggregate<span class="token punctuation">,</span>GameAggregateId<span class="token punctuation">,</span>GameEndedEvent<span class="token operator">></span> domainEvent<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Count<span class="token operator">++</span><span class="token punctuation">;</span>\n        Logger<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span>$<span class="token string">"{Count} Games ended so far."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> Task<span class="token punctuation">.</span>CompletedTask<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>You can do absolutely anything from these subscribers, persist projections, do distributed calculations, or they can be used to push data into message queues to notify other domain service boundaries or micro services. Take note, if your subscription actor is doing "dangerous" work, like doing <code class="language-text">I/O</code>, consider applying the <a href="https://petabridge.com/blog/how-actors-recover-from-failure-hierarchy-and-supervision/">error kernel</a> pattern to defer the danger of exceptions away from the subscription actor. Create a child actor that will be responsible for doing the <code class="language-text">I/O</code> and then make that child actor susceptible to failure, let akka.net\'s <a href="http://getakka.net/articles/concepts/supervision.html">supervision</a> do all the work for you.</p>\n<blockquote>\n<p>If you want a subscriber to interact between aggregate or domain boundaries, Akkatecture ships with an <code class="language-text">AggregateSaga&lt;,,&gt;</code> implementation that has been specifically tailored for this use case. To learn more about sagas (otherwise known as process managers, or activities, go <a href="/docs/sagas">here</a>)</p>\n</blockquote>',timeToRead:1,excerpt:"Subscribers in Akkatecture come in the form of  . This allows you to have actors within the actor system listening to domain events that get…",frontmatter:{title:"Subscribers",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["basic-concepts","akkatecture","csharp","dotnet"]},fields:{slug:"/subscribers"}}},pathContext:{slug:"/subscribers",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-subscribers-4a641902a847235a9f54.js.map