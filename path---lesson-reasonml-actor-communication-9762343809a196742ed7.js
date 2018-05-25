webpackJsonp([0x9906c272124c],{425:function(n,s){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Adapters",lesson:6,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/adapters"}}},{node:{frontmatter:{title:"Actor Communication",lesson:2,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/actor-communication"}}},{node:{frontmatter:{title:"Hierarchy",lesson:4,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/hierarchy"}}},{node:{frontmatter:{title:"Getting Started",lesson:2,category:"reasonml",chapter:1,type:"lesson"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Decoders and Encoders",lesson:2,category:"reasonml",chapter:4,type:"lesson"},fields:{slug:"/decoders-and-encoders"}}},{node:{frontmatter:{title:"Logging and Monitoring",lesson:1,category:"reasonml",chapter:4,type:"lesson"},fields:{slug:"/logging-and-monitoring"}}},{node:{frontmatter:{title:"Stateful Actors",lesson:1,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/stateful-actors"}}},{node:{frontmatter:{title:"Introduction",lesson:1,category:"reasonml",chapter:1,type:"lesson"},fields:{slug:"/introduction"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Persist",lesson:1,category:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/persist"}}},{node:{frontmatter:{title:"Querying",lesson:3,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/querying"}}},{node:{frontmatter:{title:"Supervision",lesson:5,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/supervision"}}},{node:{frontmatter:{title:"Timeouts",lesson:3,category:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/timeouts"}}}]},postBySlug:{html:'<p>An actor alone is a somewhat useless construct; actors need to work together. Actors can send messages to one another by using the <code class="language-text">dispatch</code> method. </p>\n<p>In this example, the actors Ping and Pong are playing a perfect ping-pong match. To start the match, we dispatch a message to ping and\nspecify that the sender in msgType is pong.</p>\n<div class="gatsby-highlight">\n      <pre class="language-reason"><code class="language-reason"><span class="token keyword">open</span> <span class="token constructor variable">Nact</span><span class="token punctuation">;</span>\n\n<span class="token keyword">open</span> <span class="token class-name">Nact</span><span class="token punctuation">.</span><span class="token constructor variable">Operators</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> system <span class="token operator">=</span> start<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">type</span> msgType <span class="token operator">=</span>\n  <span class="token operator">|</span> <span class="token constructor variable">Msg</span><span class="token punctuation">(</span>actorRef<span class="token punctuation">(</span>msgType<span class="token punctuation">)</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> ping<span class="token punctuation">:</span> actorRef<span class="token punctuation">(</span>msgType<span class="token punctuation">)</span> <span class="token operator">=</span>\n  spawnStateless<span class="token punctuation">(</span>\n    <span class="token operator">~</span>name<span class="token operator">=</span><span class="token string">"ping"</span><span class="token punctuation">,</span>\n    system<span class="token punctuation">,</span>\n    <span class="token punctuation">(</span><span class="token constructor variable">Msg</span><span class="token punctuation">(</span>sender<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      print_endline<span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      dispatch<span class="token punctuation">(</span>sender<span class="token punctuation">,</span> <span class="token constructor variable">Msg</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>self<span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span><span class="token operator">></span> <span class="token class-name">Js</span><span class="token punctuation">.</span><span class="token class-name">Promise</span><span class="token punctuation">.</span>resolve\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> pong<span class="token punctuation">:</span> actorRef<span class="token punctuation">(</span>msgType<span class="token punctuation">)</span> <span class="token operator">=</span>\n  spawnStateless<span class="token punctuation">(</span>\n    <span class="token operator">~</span>name<span class="token operator">=</span><span class="token string">"pong"</span><span class="token punctuation">,</span>\n    system<span class="token punctuation">,</span>\n    <span class="token punctuation">(</span><span class="token constructor variable">Msg</span><span class="token punctuation">(</span>sender<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      print_endline<span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token comment">/* Here we\'re using the &lt;-&lt; operator as a shorthand for the dispatch method */</span>\n      sender <span class="token operator">&lt;</span><span class="token operator">-</span><span class="token operator">&lt;</span> <span class="token constructor variable">Msg</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>self<span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token operator">|</span><span class="token operator">></span> <span class="token class-name">Js</span><span class="token punctuation">.</span><span class="token class-name">Promise</span><span class="token punctuation">.</span>resolve\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nping <span class="token operator">&lt;</span><span class="token operator">-</span><span class="token operator">&lt;</span> <span class="token constructor variable">Msg</span><span class="token punctuation">(</span>pong<span class="token punctuation">,</span> <span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>This produces the following console output:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">begin\nping\npong\nping\npong\nping\n...</code></pre>\n      </div>',timeToRead:1,excerpt:"An actor alone is a somewhat useless construct; actors need to work together. Actors can send messages to one another by using the   method…",frontmatter:{title:"Actor Communication",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017",category:"reasonml",tags:["getting-started","nact","reason","bucklescript"]},fields:{slug:"/actor-communication"}}},pathContext:{slug:"/actor-communication",category:"reasonml"}}}});
//# sourceMappingURL=path---lesson-reasonml-actor-communication-9762343809a196742ed7.js.map