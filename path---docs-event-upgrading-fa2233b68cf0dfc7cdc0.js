webpackJsonp([79135866311530],{413:function(t,e){t.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Event Upgrading",lesson:5,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/event-upgrading"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Clustering",lesson:3,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Specifications",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/specifications"}}},{node:{frontmatter:{title:"Testing Actors",lesson:6,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/testing-actors"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Akka",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Configuration",lesson:8,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Your First Events",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-events"}}},{node:{frontmatter:{title:"Your First Specifications",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-specifications"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:6,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Subscribers",lesson:7,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscribers"}}},{node:{frontmatter:{title:"Your First Read Models",lesson:8,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-read-models"}}},{node:{frontmatter:{title:"Walkthrough Ending",lesson:9,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-ending"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Walkthrough Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-introduction"}}},{node:{frontmatter:{title:"Your First Commands",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-commands"}}}]},postBySlug:{html:'<p>At some point you might find the need to replace a event with zero or more events. Some use cases might be:</p>\n<ul>\n<li>A previous application version introduced a domain error in the form of a wrong event being emitted from the aggregate.</li>\n<li>The domain has changed, either from a change in requirements or simply from a better understanding of the domain.</li>\n</ul>\n<p>In the above cases, Akkatecture suggests that you encapsulate the event upgrading logic in your aggregate state event apply methods.</p>\n<p>In the <code class="language-text">ShoppingCartState</code> event upgrading example below we have an event <code class="language-text">ProductAddedEvent</code> that is has been deprecated in the face of domain improvements. The new version is called <code class="language-text">ProductAddedEventV2</code>. We apply the upgrade logic in the deprecated apply method and invoke the correct <code class="language-text">Apply()</code> method.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ShoppingCartState</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateState</span><span class="token operator">&lt;</span>ShoppingCartState<span class="token punctuation">,</span> ShoppingCartId<span class="token operator">></span><span class="token punctuation">,</span>\n    IApply<span class="token operator">&lt;</span>ProductAddedEvent<span class="token operator">></span><span class="token punctuation">,</span>\n    IApply<span class="token operator">&lt;</span>ProductRemovedEvent<span class="token operator">></span><span class="token punctuation">,</span>\n    IApply<span class="token operator">&lt;</span>ProductAddedEventV2<span class="token operator">></span><span class="token punctuation">,</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">ShoppingCart</span> Cart <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">private</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">Apply</span><span class="token punctuation">(</span><span class="token class-name">ProductAddedEvent</span> aggregateEvent<span class="token punctuation">)</span> \n    <span class="token punctuation">{</span>\n        <span class="token comment">//we want to convert ProductAddedEvent to V2 then Apply that event</span>\n        <span class="token keyword">var</span> productAddedEventv2 <span class="token operator">=</span> ProductAddedEventV2Factory<span class="token punctuation">.</span><span class="token function">From</span><span class="token punctuation">(</span>aggregateEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">Apply</span><span class="token punctuation">(</span>productAddedEventv2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">Apply</span><span class="token punctuation">(</span><span class="token class-name">ProductRemovedEvent</span> aggregateEvent<span class="token punctuation">)</span> \n    <span class="token punctuation">{</span>\n        Cart<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>aggregateEvent<span class="token punctuation">.</span>Product<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">Apply</span><span class="token punctuation">(</span><span class="token class-name">ProductAddedEventV2</span> aggregateEvent<span class="token punctuation">)</span> \n    <span class="token punctuation">{</span>\n        Cart<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>aggregateEvent<span class="token punctuation">.</span>Product<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">//ProductAddedEventV2Factory.cs</span>\n<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">ProductAddedEventV2Factory</span> \n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ProductAddedEventV2</span> <span class="token function">From</span><span class="token punctuation">(</span><span class="token class-name">ProductAddedEvent</span> upgradableEvent<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ProductAddedEventV2</span><span class="token punctuation">(</span>upgradableEvent<span class="token punctuation">.</span>Foo<span class="token punctuation">,</span>upgradableEvent<span class="token punctuation">.</span>Product<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>In the <code class="language-text">Apply(ProductAddedEvent aggregateEvent)</code> there is the mapping from the events base version to its second version. After such the correct <code class="language-text">Apply(ProductAddedEventV2 aggregateEvent)</code> is invoked. This is also a great candidate for unit testing the correct behaviour.</p>\n<blockquote>\n<p>A general rule when versioning events is that adding things does not cause a versioning conflict. Adding a new version of an event is therefore not a problem, as long as we don’t break the definition of a new version event; it must be convertible from an old version of the same event. If this is not possible, then it’s a new event.</p>\n</blockquote>',timeToRead:2,excerpt:"At some point you might find the need to replace a event with zero or more events. Some use cases might be: A previous application version…",frontmatter:{title:"Event Upgrading",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["advanced-concepts","akkatecture","csharp","dotnet"]},fields:{slug:"/event-upgrading"}}},pathContext:{slug:"/event-upgrading",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-event-upgrading-fa2233b68cf0dfc7cdc0.js.map