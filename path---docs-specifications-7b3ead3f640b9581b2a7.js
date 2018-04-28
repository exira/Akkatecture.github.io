webpackJsonp([0xe85987b664e],{420:function(s,a){s.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Specifications",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/specifications"}}},{node:{frontmatter:{title:"Event Upgrading",lesson:5,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/event-upgrading"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Clustering",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Akka",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:7,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Commands",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-commands"}}},{node:{frontmatter:{title:"Your First Events",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-events"}}},{node:{frontmatter:{title:"Your First Read Models",lesson:9,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-read-models"}}},{node:{frontmatter:{title:"Your First Specifications",lesson:6,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-specifications"}}},{node:{frontmatter:{title:"Your First Subscribers",lesson:8,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscribers"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Your First Cluster",lesson:10,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-cluster"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Walkthrough Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-introduction"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Configuration",lesson:8,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}}]},postBySlug:{html:'<p>Akkatecture comes with an implementation of the specification pattern which could be used to e.g. make complex business rules easier to read and test.</p>\n<p>To use the specification implementation shipped with EventFlow, simply create a class that inherits from <code class="language-text">Specification&lt;&gt;</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IsEvenNumberSpecification</span> <span class="token punctuation">:</span> <span class="token class-name">Specification</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">protected</span> <span class="token keyword">override</span> IEnumerable<span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token operator">></span> <span class="token function">IsNotSatisfiedBecause</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">yield</span> <span class="token keyword">return</span> <span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">"{0} is not an even number"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p>Note that instead of simply returning a <code class="language-text">bool</code> to indicate whether or not the specification is satisfied, this implementation requires a reason (or reasons) why not the specification is satisfied.</p>\n</blockquote>\n<p>The <code class="language-text">ISpecification&lt;&gt;</code> interface has two methods defined, the traditional <code class="language-text">IsSatisfiedBy</code> and the addition <code class="language-text">WhyIsNotSatisfiedBy</code>, which returns an empty enumerable if the specification was indeed satisfied.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ISpecification</span><span class="token operator">&lt;</span><span class="token keyword">in</span> T<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">bool</span> <span class="token function">IsSatisfiedBy</span><span class="token punctuation">(</span><span class="token class-name">T</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    IEnumerable<span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token operator">></span> <span class="token function">WhyIsNotSatisfiedBy</span><span class="token punctuation">(</span><span class="token class-name">T</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>As specifications really become powerful when they are combined, Akkatecture also comes with a series of extension methods for the <code class="language-text">ISpecification&lt;&gt;</code> interface that allows easy combination of implemented specifications.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">// Builds a new specification that requires all input specifications to be</span>\n<span class="token comment">// satified</span>\n<span class="token keyword">var</span> allSpec <span class="token operator">=</span> specEnumerable<span class="token punctuation">.</span><span class="token function">All</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Builds a new specification that requires a predefined amount of the</span>\n<span class="token comment">// input specifications to be satisfied</span>\n<span class="token keyword">var</span> atLeastSpec <span class="token operator">=</span> specEnumerable<span class="token punctuation">.</span><span class="token function">AtLeast</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Builds a new specification that requires the two input specifications</span>\n<span class="token comment">// to be satisfied</span>\n<span class="token keyword">var</span> andSpec <span class="token operator">=</span> spec1<span class="token punctuation">.</span><span class="token function">And</span><span class="token punctuation">(</span>spec2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Builds a new specification that requires one of the two input</span>\n<span class="token comment">// specifications to be satisfied</span>\n<span class="token keyword">var</span> orSpec <span class="token operator">=</span> spec1<span class="token punctuation">.</span><span class="token function">Or</span><span class="token punctuation">(</span>spec2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Builds a new specification that requires the input specification</span>\n<span class="token comment">// not to be satisfied</span>\n<span class="token keyword">var</span> notSpec <span class="token operator">=</span> spec<span class="token punctuation">.</span><span class="token function">Not</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>If you need a simple expression to combine with other more complex specifications you can use the bundled <code class="language-text">ExpressionSpecification&lt;&gt;</code>, which is a specification wrapper for an expression.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">var</span> spec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token generic-method"><span class="token function">ExpressionSpecification</span><span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>i <span class="token operator">=</span><span class="token operator">></span> <span class="token number">1</span> <span class="token operator">&lt;</span> i <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// \'str\' will contain the value "i => ((1 &lt; i) &amp;&amp; (i &lt; 3))"</span>\n<span class="token keyword">var</span> str <span class="token operator">=</span> spec<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>If the specification isn’t satisfied, a string representation of the expression is returned.</p>\n<blockquote>\n<p>While specifications are very useful, becareful when using them outside of your domain layer since then you will end up introducing coupling between components, which is not necessarily a bad thing. Specifications are really good at encapsulating domain validation logic.</p>\n</blockquote>',timeToRead:2,excerpt:"Akkatecture comes with an implementation of the specification pattern which could be used to e.g. make complex business rules easier to read…",frontmatter:{title:"Specifications",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["basic-concepts","akkatecture","csharp","dotnet"]},fields:{slug:"/specifications"}}},pathContext:{slug:"/specifications",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-specifications-7b3ead3f640b9581b2a7.js.map