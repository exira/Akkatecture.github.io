webpackJsonp([0x81404601a545],{435:function(n,s){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Event Upgrading",lesson:5,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/event-upgrading"}}},{node:{frontmatter:{title:"Clustering",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Akka",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Configuration",lesson:8,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Walkthrough Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-introduction"}}},{node:{frontmatter:{title:"Your First Commands",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-commands"}}},{node:{frontmatter:{title:"Your First Cluster",lesson:9,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-cluster"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Your First Events",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-events"}}},{node:{frontmatter:{title:"Your First Read Models",lesson:8,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-read-models"}}},{node:{frontmatter:{title:"Your First Subscribers",lesson:7,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscribers"}}},{node:{frontmatter:{title:"Specifications",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/specifications"}}},{node:{frontmatter:{title:"Testing Actors",lesson:6,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/testing-actors"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:6,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Your First Specifications",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-specifications"}}},{node:{frontmatter:{title:"Terminology",lesson:2,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/terminology"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}}]},postBySlug:{html:'<p>Before we dive into how to construct aggregate sagas in Akkatecture, we are missing some crucial bits. We have laid out some fundamental building blocks, but have not put them all together. Let\'s do that quickly.</p>\n<h3 id="putting-it-all-together"><a href="#putting-it-all-together" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Putting It All Together</h3>\n<p>We need to tell our aggregate how to handle commands.</p>\n<p>Use the <code class="language-text">AggregateRoot.Command&lt;T&gt;(Func&lt;T,bool&gt; handler)</code> to register your command handlers</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Account</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateRoot</span><span class="token operator">&lt;</span>Account<span class="token punctuation">,</span> AccountId<span class="token punctuation">,</span> AccountState<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token function">Account</span><span class="token punctuation">(</span><span class="token class-name">AccountId</span> aggregateId<span class="token punctuation">)</span>\n        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>aggregateId<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">//register command handlers</span>\n        <span class="token generic-method"><span class="token function">Command</span><span class="token punctuation">&lt;</span><span class="token class-name">OpenNewAccountCommand</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>Execute<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token generic-method"><span class="token function">Command</span><span class="token punctuation">&lt;</span><span class="token class-name">TransferMoneyCommand</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>Execute<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token generic-method"><span class="token function">Command</span><span class="token punctuation">&lt;</span><span class="token class-name">ReceiveMoneyCommand</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>Execute<span class="token punctuation">)</span><span class="token punctuation">;</span>       \n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Lets implement the Command Handlers</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">bool</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token class-name">OpenNewAccountCommand</span> command<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">//this spec is part of Akkatecture</span>\n    <span class="token keyword">var</span> spec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AggregateIsNewSpecification</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>spec<span class="token punctuation">.</span><span class="token function">IsSatisfiedBy</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> aggregateEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AccountOpenedEvent</span><span class="token punctuation">(</span>command<span class="token punctuation">.</span>OpeningBalance<span class="token punctuation">)</span>\n        <span class="token function">Emit</span><span class="token punctuation">(</span>aggregateEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token keyword">true</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p>We return true from the execute method, to let akka know that we handled the command successfully.</p>\n</blockquote>\n<p>To be able to send money the business requirements specified that; <em>The transaction fee for a successful money deposit is €0.25. The minimum amount of money allowed to transfer is €1.00. Which means that the minimum amount of money allowed to exit a bank account is €1.25</em>. </p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MinimumTransferAmountSpecification</span> <span class="token punctuation">:</span> <span class="token class-name">Specification</span><span class="token operator">&lt;</span>Account<span class="token operator">></span> \n<span class="token punctuation">{</span>\n    <span class="token keyword">protected</span> <span class="token keyword">override</span> IEnumerable<span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token operator">></span> <span class="token function">IsNotSatisfiedBecause</span><span class="token punctuation">(</span><span class="token class-name">Account</span> obj<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>State<span class="token punctuation">.</span>Balance<span class="token punctuation">.</span>Value <span class="token operator">&lt;</span> <span class="token number">1.00</span>m<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">yield</span> <span class="token keyword">return</span> $<span class="token string">"\'{obj.State.Balance.Value}\' is lower than 1.25 \'{obj.GetIdentity()}\' is not new"</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EnoughBalanceAmountSpecification</span> <span class="token punctuation">:</span> <span class="token class-name">Specification</span><span class="token operator">&lt;</span>Account<span class="token operator">></span> \n<span class="token punctuation">{</span>\n    <span class="token keyword">protected</span> <span class="token keyword">override</span> IEnumerable<span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token operator">></span> <span class="token function">IsNotSatisfiedBecause</span><span class="token punctuation">(</span><span class="token class-name">Account</span> obj<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>State<span class="token punctuation">.</span>Balance<span class="token punctuation">.</span>Value <span class="token operator">&lt;</span> <span class="token number">1.25</span>m<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">yield</span> <span class="token keyword">return</span> $<span class="token string">"\'Balance for Account: {obj.Id} is {obj.State.Balance.Value}\' is lower than 1.25"</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Now we can do our command handler for the <code class="language-text">TransferMoneyCommand</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">bool</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token class-name">TransferMoneyCommand</span> command<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">var</span> balanceSpec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EnoughBalanceAmountSpecification</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> minimumTransferSpec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MinimumTransferAmountSpecification</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> andSpec <span class="token operator">=</span> balanceSpec<span class="token punctuation">.</span><span class="token function">And</span><span class="token punctuation">(</span>minimumTransferSpec<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>andSpec<span class="token punctuation">.</span><span class="token function">IsSatisfiedBy</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> moneySentEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MoneySentEvent</span><span class="token punctuation">(</span>command<span class="token punctuation">.</span>ReceiverId<span class="token punctuation">,</span> command<span class="token punctuation">.</span>Amount<span class="token punctuation">)</span>\n        <span class="token function">Emit</span><span class="token punctuation">(</span>moneySentEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">var</span> feesDeductedEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FeesDeductedEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Money</span><span class="token punctuation">(</span><span class="token number">0.25</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">Emit</span><span class="token punctuation">(</span>feesDeductedEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token keyword">true</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p>We have a command that actually produced two events as the outcome of its sucessful execution. This is quite normal and can happen from time to time. One successful command does not necessarily mean one event being emitted. Transfering money reduces the account balance and charges a fee. For auditing purposes this is a good thing to have.</p>\n</blockquote>\n<p>And finally we need to handle the receiving of money from <code class="language-text">ReceiveMoneyCommand</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">bool</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token class-name">ReceiveMoneyCommand</span> command<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">var</span> moneyReceivedEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MoneyReceivedEvent</span><span class="token punctuation">(</span>command<span class="token punctuation">.</span>SenderId<span class="token punctuation">,</span>command<span class="token punctuation">.</span>Amount<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">Emit</span><span class="token punctuation">(</span>moneyReceivedEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token keyword">true</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="summary"><a href="#summary" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Summary</h3>\n<p>We codified our business specifications (rules) into models that derive from <code class="language-text">Specification&lt;&gt;</code>. This allows us to have testable specifications that live in one place. We used the specifications to guard our domains against rule breaking commands &#x26; intents. We even used an <code class="language-text">AndSpecification&lt;&gt;</code> to compose our specifications. you can build your own compositions as well using <a href="https://github.com/Lutando/Akkatecture/tree/master/src/Akkatecture/Specifications/Provided">these</a>. Do not over use your specifications, it is not a silver bullet, and be aware of the <a href="https://en.wikipedia.org/wiki/Specification_pattern#Criticisms">criticisms</a> of specifications, finally, one should also be wary of using them outside of your domain layer. Reducing duplication also increases coupling.</p>\n<p>Next we shall go over how to craft your own <strong>sagas</strong>. Which add an extra dimension of capabilities in Akkatecture.</p>\n<p><a href="/docs/your-first-aggregate-saga">NEXT →</a></p>',timeToRead:3,excerpt:"Before we dive into how to construct aggregate sagas in Akkatecture, we are missing some crucial bits. We have laid out some fundamental…",frontmatter:{title:"Your First Specifications",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["walkthrough","akkatecture","specifications","csharp","dotnet"]},fields:{slug:"/your-first-specifications"}}},pathContext:{slug:"/your-first-specifications",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-your-first-specifications-3a1c350a711d7de69479.js.map