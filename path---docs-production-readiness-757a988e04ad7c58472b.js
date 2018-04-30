webpackJsonp([0xaf09f2f129e5],{400:function(e,t){e.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Configuration",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Subscribers",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Akka",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Clustering",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Your First Read Model",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-read-model"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Subscriber",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscriber"}}}]},postBySlug:{html:'<p>There actually is a long laundry list of things one might want to do when you deploy to production. Remember, now that we are using persisted events as the fundamental elements to hydrating our domain, we need to pay special attention to how we persist them.</p>\n<h1 id="event-store"><a href="#event-store" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Event Store</h1>\n<p>Since events stored per aggregate are read in a paginated way, it makes sense to chose a persistence that supports this kind of query well. SQL data bases are fine also, just make sure you do not ship with the defaul akka inmemory persistence plugin. As you can see there are many plugins (<a href="https://github.com/AkkaNetContrib/Akka.Persistence.MongoDB">1</a>,<a href="https://github.com/AkkaNetContrib/Akka.Persistence.PostgreSql">2</a>,<a href="https://github.com/AkkaNetContrib/Akka.Persistence.RocksDb">3</a>,<a href="https://github.com/akkadotnet/Akka.Persistence.SqlServer">4</a>). Doing some research here is crucial to match your needs.</p>\n<h1 id="testing"><a href="#testing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Testing</h1>\n<p>Test all your models to make sure that they are serializable and deserializable. This will give you good assurances on production usage, especially in clustered scenarios.</p>\n<h1 id="clustering-seed-node"><a href="#clustering-seed-node" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Clustering Seed Node</h1>\n<p>This is applicable to those who plan to deploy in a clustered environment. It would be most advantageous if you had a seed node in your cluster to facilitate the cluster gossip. 1 or more well known addresses that can be used. In windows, <a href="https://github.com/petabridge/lighthouse">Lighthouse</a> attempts to help you out here by hosting the seed as a windows service and exposing the required ports. Our clustered example seed <a href="https://github.com/Lutando/Akkatecture/tree/master/examples/cluster">here</a>, is actually good enough for many scenarios, the seed node need not even play a part in your applications deployment considerations. The seed is a statically located akka actor system, part of a cluster, that can speak the same gossip language as your worker/client actor system.</p>',timeToRead:1,excerpt:"There actually is a long laundry list of things one might want to do when you deploy to production. Remember, now that we are using…",frontmatter:{title:"Production Readiness",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["advanced-concepts","akkatecture","csharp","dotnet"]},fields:{slug:"/production-readiness"}}},pathContext:{slug:"/production-readiness",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-production-readiness-757a988e04ad7c58472b.js.map