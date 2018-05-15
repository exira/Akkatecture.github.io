webpackJsonp([0x92c6b6c0faec],{412:function(n,s){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Clustering",lesson:1,category:"akkatecture",chapter:4,type:"lesson"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"lesson"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Akka",lesson:6,category:"akkatecture",chapter:2,type:"lesson"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"lesson"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"lesson"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Commands",lesson:5,category:"akkatecture",chapter:2,type:"lesson"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Events",lesson:4,category:"akkatecture",chapter:2,type:"lesson"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Identity",lesson:1,category:"akkatecture",chapter:2,type:"lesson"},fields:{slug:"/identity"}}},{node:{frontmatter:{title:"Aggregates",lesson:3,category:"akkatecture",chapter:2,type:"lesson"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Configuration",lesson:8,category:"akkatecture",chapter:2,type:"lesson"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Subscribers",lesson:7,category:"akkatecture",chapter:2,type:"lesson"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:1,category:"akkatecture",chapter:3,type:"lesson"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Video Content",lesson:2,category:"akkatecture",chapter:5,type:"lesson"},fields:{slug:"/video-content"}}},{node:{frontmatter:{title:"Articles",lesson:1,category:"akkatecture",chapter:5,type:"lesson"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"lesson"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:4,category:"akkatecture",chapter:3,type:"lesson"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Subscriber",lesson:2,category:"akkatecture",chapter:3,type:"lesson"},fields:{slug:"/your-first-subscriber"}}},{node:{frontmatter:{title:"Your First Read Model",lesson:3,category:"akkatecture",chapter:3,type:"lesson"},fields:{slug:"/your-first-read-model"}}}]},postBySlug:{html:'<!-- <a class="remix-button" href="https://glitch.com/edit/#!/remix/nact-ping-pong" target="_blank">\n  <button>\n    <img src="/img/code-fork-symbol.svg"/> REMIX\n  </button>\n</a> -->\n<p>An actor alone is a somewhat useless construct; actors need to work together. Actors can send messages to one another by using the <code class="language-text">dispatch</code> method. </p>\n<p>The third parameter of <code class="language-text">dispatch</code> is the sender. This parameter is very useful in allowing an actor to service requests without knowing explicitly who the sender is.</p>\n<p>In this example, the actors Ping and Pong are playing a perfect ping-pong match. To start the match, we dispatch a message to Ping as Pong use this third parameter. </p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">delay</span> <span class="token operator">=</span> <span class="token punctuation">(</span>time<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ping <span class="token operator">=</span> <span class="token function">spawnStateless</span><span class="token punctuation">(</span>system<span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>msg<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span>  <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// ping: Pong is a little slow. So I\'m giving myself a little handicap :P</span>\n  <span class="token keyword">await</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">dispatch</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>name<span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>self<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">\'ping\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> pong <span class="token operator">=</span> <span class="token function">spawnStateless</span><span class="token punctuation">(</span>system<span class="token punctuation">,</span> <span class="token punctuation">(</span>msg<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span>  <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">dispatch</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>name<span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>self<span class="token punctuation">)</span><span class="token punctuation">;</span>  \n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">\'pong\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">dispatch</span><span class="token punctuation">(</span>ping<span class="token punctuation">,</span> <span class="token string">\'begin\'</span><span class="token punctuation">,</span> pong<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>This produces the following console output:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">begin\nping\npong\nping\npong\nping\netc...</code></pre>\n      </div>',timeToRead:1,excerpt:"An actor alone is a somewhat useless construct; actors need to work together. Actors can send messages to one another by using the   method…",frontmatter:{title:"Getting Started",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["getting-started","nact","javascript","nodejs"]},fields:{slug:"/getting-started"}}},pathContext:{slug:"/getting-started",category:"akkatecture"}}}});
//# sourceMappingURL=path---lesson-akkatecture-getting-started-05b10ac67c9ca58556d2.js.map