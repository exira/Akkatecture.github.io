webpackJsonp([82999037019505],{398:function(t,e){t.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Configuration",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Subscribers",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Akka",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Clustering",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Your First Read Model",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-read-model"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Subscriber",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscriber"}}}]},postBySlug:{html:'<img src="https://raw.githubusercontent.com/Lutando/Akkatecture/master/logo.svg?sanitize=true" width="100%" height="200">\n<h3 id="welcome-to-akkatecture"><a href="#welcome-to-akkatecture" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Welcome to Akkatecture</h3>\n<p>Using Akkatecture is as easy as installing any other NuGet package in your .net core application. All you need to do is</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//Add the Akkatecture package to a project named MyFirstActorProject.</span>\nInstall<span class="token operator">-</span><span class="token class-name">Package</span> Akkatecture <span class="token operator">-</span><span class="token class-name">ProjectName</span> MyFirstActorProject</code></pre>\n      </div>\n<p>Once youve done that you can start designing your domain that can allow you to do something like what is shown below.</p>\n<blockquote>\n<p>This example is part of the Akkatecture simple example project, so checkout <a href="https://github.com/Lutando/Akkatecture/blob/master/examples/Akkatecture.Examples.UserAccount.Application/Program.cs#L13">the\ncode</a> and give it a run.</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//Create actor system</span>\n<span class="token keyword">var</span> system <span class="token operator">=</span> ActorSystem<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">"useraccount-example"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//Create supervising aggregate manager for UserAccount aggregate root actors</span>\n<span class="token keyword">var</span> aggregateManager <span class="token operator">=</span> system<span class="token punctuation">.</span><span class="token function">ActorOf</span><span class="token punctuation">(</span>Props<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">new</span> <span class="token class-name">UserAccountAggregateManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//Build create user account aggregate command with name "foo bar"</span>\n<span class="token keyword">var</span> aggregateId <span class="token operator">=</span> UserAccountId<span class="token punctuation">.</span>New<span class="token punctuation">;</span>\n<span class="token keyword">var</span> createUserAccountCommand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreateUserAccountCommand</span><span class="token punctuation">(</span>aggregateId<span class="token punctuation">,</span> <span class="token string">"foo bar"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            \n<span class="token comment">//Send command, this is equivalent to command.publish() in other cqrs frameworks</span>\naggregateManager<span class="token punctuation">.</span><span class="token function">Tell</span><span class="token punctuation">(</span>createUserAccountCommand<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Be sure to go through our <a href="/docs/primitives">basic concepts</a> and <a href="docs/">walkthrough</a></p>',timeToRead:1,excerpt:"Welcome to Akkatecture Using Akkatecture is as easy as installing any other NuGet package in your .net core application. All you need to do…",frontmatter:{title:"Getting Started",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["getting-started","akkatecture","csharp","dotnet"]},fields:{slug:"/getting-started"}}},pathContext:{slug:"/getting-started",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-getting-started-42cd8b3245bfbc161610.js.map