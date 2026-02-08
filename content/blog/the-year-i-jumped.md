+++
title = "The Year I Jumped"
date = 2026-02-08
author = "Kenneth Eversole"

[taxonomies]
tags = ["reflection", "startup", "2025"]
+++

The day before Christmas Eve, a venture capitalist I genuinely liked told us no. It came after months of conversations, re-engagements, the kind of sustained back-and-forth where you start to confuse interest with commitment. I sat down at my dining room table, the same one where Hannah and I eat dinner and pretend to be adults who own a house, and I cried. Not a noble cry. The broken kind, the kind where you hear yourself asking out loud why you did this in the first place and nobody answers because you're alone in a room you pay a mortgage on.

That's one of the truest things I can say about 2025. Not the product launches or the momentum or the things that would look clean in a retrospective. The truest thing is that I voluntarily walked away from safety and ended up at my own dining room table unable to explain what I was walking toward.

I started the year at Cloudflare, on the R2 team, and I want to be honest about something that people tend to skip past when they tell these stories: it was good. The work mattered. The team was strong. The paycheck was real in that very specific way that makes your family relax when you explain what you do at Thanksgiving. We were hitting our stride, and there was nothing externally wrong that demanded a change. Nobody pushed me out. No dramatic falling-out, no toxic manager, no reorganization that made the writing on the wall legible. It was a good job at a good company, and I left it.

What complicated things was proximity. Working on infrastructure for the Internet while AI begins reshaping what it means to build software at all gives you a strange vantage point. You're close enough to the shift to see it clearly, but embedded enough in existing systems to feel how brittle the assumptions underneath them really are. Over the course of months, not years, I watched AI move from novelty to something that meaningfully changed how software was written, deployed, and reasoned about. Somewhere in that transition, my friend Eli Front and I looked at each other and said the most dangerous sentence two engineers can say when everything else is going fine: let's build something.

We started with a root cause analysis tool. It came out of frustration more than vision. The tools developers use to understand production systems are not merely imperfect. They are often actively hostile to the humans using them, assuming too much context, requiring too many mental jumps, and demanding that people reconstruct reality under pressure from fragments scattered across dashboards, logs, and Slack threads. If you've ever been paged at 2 a.m. and spent the first twenty minutes just figuring out what you're looking at, you already know the problem. The tooling assumes you showed up with a map. You showed up with a flashlight and half a coffee.

We took a prototype to Missouri Startup Weekend. It kind of worked, which is generous, because it was held together by stubbornness and enough conviction to keep talking through the gaps. But people leaned in. They asked questions that felt different from the polite engagement you get when someone is just being nice about your side project. And against every expectation I had, two guys with an idea managed to convince others to back it with real money.

What surprised me most was not the traction. It was what we kept hearing once we slowed down enough to listen. Teams didn't actually understand how their systems worked. Not because they were lazy or negligent, but because the systems had outgrown any single person's ability to hold them in their head. I had watched this happen at Cloudflare in real time, from the inside: infrastructure scaling faster than the organizational knowledge required to operate it safely. Dependencies multiplying while ownership fragmented. Risk accumulating in the spaces between teams, invisible until it surfaced as an incident nobody felt fully equipped to explain. I thought that was a Cloudflare-scale problem. It turned out to be everywhere.

Software engineering is in the middle of an identity crisis, and I don't think most people building software have fully reckoned with it yet. We are constructing systems faster than we can form accurate mental models of them, and the cost of that gap is compounding. Complexity used to be something you could point to, assign to someone, and contain. Now it's ambient. It saturates everything, and the people closest to production absorb the most of it with the least support. AI is accelerating this, not because the technology is bad, but because it makes it possible to generate and deploy complexity at a pace that human understanding was never designed to match. The tooling hasn't caught up. The organizational structures haven't caught up. And the people in the middle are burning out under the weight of systems they're responsible for but can't fully see.

OpsCompanion is our answer to that, or the beginning of one. The goal is to make operational understanding continuous rather than something you reconstruct in a war room at 3 a.m., to maintain a living picture of how systems connect, who owns what, and where risk is quietly gathering before it becomes someone's worst night.

I went full-time in August.

I still have to pause when I write that. I left Cloudflare. I left the steady thing. Izayah Hudnutt joined as our third co-founder, and suddenly this was no longer a side project I could politely explain away at family dinners. It was a company. A real one, with consequences and obligations and a burn rate that makes abstract risk very concrete very quickly.

A few weeks ago my brother was over at the house. He's about to start a new job himself, and without dramatizing it, he said something that stuck: you're way out there. He was right, and he meant it precisely. Our family doesn't produce founders. We produce firemen, CNAs, cashiers. Good, solid, necessary people who do essential work without pretending it's a calling. There is no inherited playbook for venture conversations or Delaware C-corps, no uncle who went through something similar, no muscle memory to fall back on when things go sideways. When I make mistakes, and I do, the floor is just the floor. There's no net, and there's no map that someone else drew first.

The lows this year were lower than anything I've experienced professionally. Not a bad quarter or a tough sprint, but the kind of low where you're awake at five in the morning replaying a single decision and wondering whether you misread your own capacity for this. Whether you confused stubbornness for conviction. Whether the people who quietly thought you were making a mistake were right and just too polite to say so.

At the same time, the highs were something I didn't know existed. Watching someone use a thing you built and seeing the moment their understanding shifts. Feeling a problem finally click into place after weeks of dead ends and wrong turns. Saying the quiet part out loud in a room and finding that people lean in instead of looking away. Those moments don't erase the lows, but they recalibrate something. They remind you that the work is real, even when the path to it is not easy.

I keep building because I believe we are entering a new phase in how humans and computers interact, and we are dramatically underestimating the cost of misunderstanding at scale. As systems become more adaptive and autonomous, the tools we give people to operate them increasingly assume infinite context and perfect recall. That assumption quietly transfers risk onto humans. It burns them out, and it does so in domains where the consequences of confusion are not abstract. Technology is embedded in healthcare, in finance, in public infrastructure. The systems that run those domains cannot be stewarded by tooling that treats understanding as optional.

That belief didn't come from a whitepaper. It came from years of building and operating large systems, from watching teams drown in their own tooling, and from sitting at a dining room table questioning whether leaving safety was a rational thing to do. I still think it was. Especially on the days when it's hardest to say that out loud.

Somewhere inside all of this, life continued. I got engaged to Hannah on New Year's Eve, which still feels surreal to write down. In a year defined by uncertainty and voluntary risk, I asked the person I love to marry me, and she said yes. She has been present for every spiral and every breakthrough, for the nights I came home buzzing with ideas and the nights I came home hollow. She does not just tolerate this life. She makes it survivable in ways I do not talk about often enough, and I am aware that the steadiness she provides is not something I could have built this without.

We made our house a home. On paper, things look good. But everything feels compressed. The world is moving too fast and too tired at the same time, like everyone is running a marathon they were told was a sprint. Trying to make sense of that at twenty-nine, on the edge of my thirties, chasing a vision of the future that I cannot touch yet, is a specific kind of disorientation that I haven't found a clean framework for. I don't think one exists yet.

I sit on the board of the college I attended, which is an honor and also a recurring source of quiet existential discomfort. Students ask me how to prepare for the future, whether they'll be stuck if they take a certain job, what path they should choose. It is a strange thing to answer those questions while living inside uncertainty yourself. The honest answer, the one I try to give without sounding like I'm dodging, is that nobody knows. Many of the people handing out guidance are drawing maps from memory in a landscape that is actively shifting underneath them. The best I can offer is that the ability to sit with not knowing, to act anyway and stay honest about what you don't understand, seems to matter more than having a plan.

I'm writing this now because in late 2024 I told myself I would write more, and in 2025 I wrote nothing. This is the attempt. Not to build an audience or perform insight, but to get down what this year actually felt like while I'm still close enough to feel it. I want a record of the version of me who cried at a dining room table, left a good job on a hunch, got engaged, sat on a college board, and told students to embrace uncertainty while being privately afraid of it.

The only thing I know with real certainty is that I'm more comfortable with discomfort than I was twelve months ago. That isn't a roadmap. But it might be the beginning of one.

---

[Send me an Email](mailto:kenneth@eversole.dev)
