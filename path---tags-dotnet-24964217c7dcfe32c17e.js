webpackJsonp([90888147691054],{448:function(e,t){e.exports={data:{allMarkdownRemark:{totalCount:29,edges:[{node:{fields:{slug:"/aggregates"},excerpt:"Initially, before you can create an aggregate, you need to create its corresponding \nidentity and state. You can create your own model of…",timeToRead:3,frontmatter:{title:"Aggregates",tags:["basic-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/akka"},excerpt:"Actors in the  actor model  are objects which encapsulate state and behavior, they communicate exclusively by exchanging messages which are…",timeToRead:1,frontmatter:{title:"Akka",tags:["basic-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/commands"},excerpt:"Commands are basic  s that describe messages of intent that you want to perform in your domain, they represent the   side of  . Commands are…",timeToRead:4,frontmatter:{title:"Commands",tags:["basic-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/configuration"},excerpt:"Akkatecture uses the same configuration hooks as akka.net's  hocon  configuration file type. Where as akka.net uses the   key as its own…",timeToRead:1,frontmatter:{title:"Configuration",tags:["basic-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/primitives"},excerpt:"The basic core primitives of Akkatecture are: Value Objects Identities Entities A   is an immutable type that is distinguishable only by the…",timeToRead:4,frontmatter:{title:"Primitives",tags:["basic-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/events"},excerpt:"In an event sourced system like Akkatecture, an aggregate's state can be described as a function that applies series of stored events…",timeToRead:5,frontmatter:{title:"Events",tags:["basic-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/scheduled-jobs"},excerpt:"Akkatecture ships with a model for executing commands known as jobs. These jobs are messages that are persisted and (within reasonable…",timeToRead:6,frontmatter:{title:"Scheduled Jobs",tags:["basic-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/specifications"},excerpt:"Akkatecture comes with an implementation of the  specification pattern  which could be used to e.g. make complex business rules more…",timeToRead:2,frontmatter:{title:"Specifications",tags:["basic-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/subscribers"},excerpt:"Subscribers in Akkatecture come in the form of  . They allow you to have listeners within the actor system listening to domain events that…",timeToRead:1,frontmatter:{title:"Subscribers",tags:["basic-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/articles"},excerpt:"Domain-Driven Design Domain-Driven Design Reference  by Eric Evans General CQRS+ES CQRS Journey by Microsoft  by Microsoft Microservice DDD…",timeToRead:1,frontmatter:{title:"Articles",tags:["further-self-study","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/tips-and-tricks"},excerpt:"Whenever creating an application that uses cqrs and event sourcing there are several things you need to keep in mind to  minimize the…",timeToRead:8,frontmatter:{title:"Tips and Tricks",tags:["further-self-study","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/videos"},excerpt:"Below are some video resources that you can use to bootstrap your fundamental knowledge about the concepts that are seen throughout…",timeToRead:1,frontmatter:{title:"Videos",tags:["further-self-study","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/clustering"},excerpt:"To get clustering working in Akkatecture, you need to install Akkatecture's companion package called   to your .net project. This library…",timeToRead:2,frontmatter:{title:"Clustering",tags:["advanced-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/event-upgrading"},excerpt:"Also sometimes known as event upcasting. At some point you might find the need to replace a event with zero or more events. Some use cases…",timeToRead:2,frontmatter:{title:"Event Upgrading",tags:["advanced-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/production-readiness"},excerpt:"There might be a long laundry list of things one might want to consider prior to deploying to production. Remember, now that we are using…",timeToRead:2,frontmatter:{title:"Production Readiness",tags:["advanced-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/sagas"},excerpt:"Sagas (sometimes known as  process managers , or activities) are useful for doing distributed, long running, persistent transactions. They…",timeToRead:2,frontmatter:{title:"Sagas",tags:["advanced-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/snapshotting"},excerpt:"State snapshotting is an optimization that you can use to reduce the amount of events that are replayed upon aggregate instantiation. The…",timeToRead:4,frontmatter:{title:"Snapshotting",tags:["advanced-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/testing-aggregates"},excerpt:"One of the biggest benefits of message based systems is that they enable the possibility to express system behaviours purely in terms of…",timeToRead:6,frontmatter:{title:"Testing Aggregates",tags:["advanced-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/getting-started"},excerpt:"Welcome to Akkatecture Adding Akkatecture as a dependancy is like installing any other NuGet package in your .net core application. All you…",timeToRead:1,frontmatter:{title:"Getting Started",tags:["getting-started","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/walkthrough-introduction"},excerpt:"This walkthrough is designed to get you familiar with Akkatecture, akka.net, cqrs and event sourcing, and a few patterns that come with that…",timeToRead:2,frontmatter:{title:"Walkthrough Introduction",tags:["walkthrough","akkatecture","introduction","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/your-first-aggregate"},excerpt:"On analysis of the business requirements, it is apparent that the main aggregate entity that exists under the   domain context is an  . The…",timeToRead:2,frontmatter:{title:"Your First Aggregate",tags:["walkthrough","akkatecture","aggregate","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/walkthrough-ending"},excerpt:"Lets tie up the loose ends so that we can run it. We need to orchestrate the startup of the actor system. Typically in Akkatecture this…",timeToRead:2,frontmatter:{title:"Walkthrough Ending",tags:["walkthrough","akkatecture","projections","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/your-first-aggregate-saga"},excerpt:"In Akkatecuture  s are usefuly for coordinating message passing between service or aggregate boundaries. More about sagas can be said in our…",timeToRead:6,frontmatter:{title:"Your First Aggregate Saga",tags:["walkthrough","akkatecture","saga","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/your-first-commands"},excerpt:"Let us remind ourselves of some of the business requirements for the task that we are trying to do: The bank needs to allow customers to…",timeToRead:2,frontmatter:{title:"Your First Commands",tags:["walkthrough","akkatecture","commands","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/your-first-events"},excerpt:"We now need to design the aggregate events that will form as the basis of your domain. Some of events that occur in this system could be…",timeToRead:2,frontmatter:{title:"Your First Events",tags:["walkthrough","akkatecture","events","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/your-first-projections"},excerpt:"If you ever need to access the data in your aggregates efficiently, in production, its important that projections (otherwise known as read…",timeToRead:2,frontmatter:{title:"Your First Projections",tags:["walkthrough","akkatecture","projections","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/your-first-specifications"},excerpt:"Before we dive into how to construct aggregate sagas in Akkatecture. We still need to wire up some crucial bits. We have laid out some…",timeToRead:3,frontmatter:{title:"Your First Specifications",tags:["walkthrough","akkatecture","specifications","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/your-first-subscribers"},excerpt:"If we look back at our task requirements, the last one states that;\n The bank would like to keep track of how much money it has gained as…",timeToRead:1,frontmatter:{title:"Your First Subscribers",tags:["walkthrough","akkatecture","subscriber","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/your-first-aggregate-test"},excerpt:"Any business application, especially one that deals with money, has to be rigorously tested. In our use case this means testing the…",timeToRead:3,frontmatter:{title:"Your First Aggregate Test",tags:["walkthrough","akkatecture","tdd","bdd","testing","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}}]}},pathContext:{tag:"dotnet"}}}});
//# sourceMappingURL=path---tags-dotnet-24964217c7dcfe32c17e.js.map