webpackJsonp([0xf2ba6dec3dc1],{426:function(a,s){a.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Event Upgrading",lesson:5,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/event-upgrading"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Clustering",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Walkthrough Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-introduction"}}},{node:{frontmatter:{title:"Your First Commands",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-commands"}}},{node:{frontmatter:{title:"Your First Events",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-events"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Your First Specifications",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-specifications"}}},{node:{frontmatter:{title:"Your First Cluster",lesson:9,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-cluster"}}},{node:{frontmatter:{title:"Your First Subscribers",lesson:7,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscribers"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:6,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Read Models",lesson:8,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-read-models"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Specifications",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/specifications"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Akka",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Configuration",lesson:8,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}}]},postBySlug:{html:'<p>On analysis of the business requirements, it is apparent that the main aggregate entity that exists under the <code class="language-text">Bank</code> domain is a <code class="language-text">BankAccount</code>. The bank account aggregate needs the ability to be <code class="language-text">Created</code> and to <code class="language-text">Send Money</code> to other <code class="language-text">BankAccounts</code>. Inversely, <code class="language-text">BankAccount</code>\'s need to also <code class="language-text">Receive Money</code>. Lets call our aggregate responsible for holding bank account state the <code class="language-text">AccountAggregate</code>.</p>\n<h2 id="the-account-aggregate"><a href="#the-account-aggregate" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Account Aggregate</h2>\n<p>First we need to make an <code class="language-text">Identity&lt;&gt;</code> for our aggregate.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountId</span> <span class="token punctuation">:</span> <span class="token class-name">Identity</span><span class="token operator">&lt;</span>AccountId<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token function">AccountId</span><span class="token punctuation">(</span><span class="token keyword">string</span> <span class="token keyword">value</span><span class="token punctuation">)</span>\n        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Then we need to make the <code class="language-text">Account</code> aggregate state model that will hold our balance:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountState</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateState</span><span class="token operator">&lt;</span>Account<span class="token punctuation">,</span> AccountId<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">Money</span> Balance <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Lets make a simple <code class="language-text">Money</code> ValueObject<decimal> that will represent money in our application, that can not be zero.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Money</span> <span class="token punctuation">:</span> <span class="token class-name">SingleValueObject</span><span class="token operator">&lt;</span><span class="token keyword">decimal</span><span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token function">Money</span><span class="token punctuation">(</span><span class="token keyword">decimal</span> <span class="token keyword">value</span><span class="token punctuation">)</span>\n        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">value</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ArgumentException</span><span class="token punctuation">(</span><span class="token function">nameof</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">//overload the + and - operators to support the </span>\n    <span class="token comment">//addition and subtraction of money</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p>Now we have a value object that represents money in our system.</p>\n</blockquote>\n<p>now we can make our <code class="language-text">Account</code> aggregate.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Account</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateRoot</span><span class="token operator">&lt;</span>Account<span class="token punctuation">,</span> AccountId<span class="token punctuation">,</span> AccountState<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token function">Account</span><span class="token punctuation">(</span><span class="token class-name">AccountId</span> aggregateId<span class="token punctuation">)</span>\n        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>aggregateId<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>And finally we need to make our aggregate root manager that will be responsible for supervising and creating the aggregate roots.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountManager</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateRootManager</span><span class="token operator">&lt;</span>Account<span class="token punctuation">,</span>AccountId<span class="token punctuation">,</span>Command<span class="token operator">&lt;</span>Account<span class="token punctuation">,</span>AccountId<span class="token operator">></span><span class="token operator">></span> \n<span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Now we need to interact with our aggregate through commands. Lets proceed to the <a href="/docs/your-first-commands">next</a> part of the walkthrough.</p>',timeToRead:1,excerpt:"On analysis of the business requirements, it is apparent that the main aggregate entity that exists under the   domain is a  . The bank…",frontmatter:{title:"Your First Aggregate",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["walkthrough","akkatecture","aggregate","csharp","dotnet"]},fields:{slug:"/your-first-aggregate"}}},pathContext:{slug:"/your-first-aggregate",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-your-first-aggregate-c4726d95431aa790dda5.js.map