+++
title = "Building Software Got Cheap. Owning It Didn't"
date = 2026-03-18
description = "AI collapsed the cost of building software. It did not collapse the cost of owning what you shipped."
author = "Kenneth Eversole"

[taxonomies]
tags = ["service-as-software", "AI agents", "technical debt", "SaaS pricing", "operational depth", "opscompanion"]
+++

A few weeks ago I wrote that [we automated everything except knowing what's going on](https://eversole.dev/blog/we-automated-everything/).  Unforuntly   it looks like 2026 is going to be the year of the slop wars instead of the year we get AGI. 




AI made it cheap to build software. It did not make it cheap to own.

Anyone can generate the mvp now. The bill shows up later: when the integration breaks, when it touches real data, when finance depends on it, when security asks who is responsible, and when the person who built it is gone.

That gap between creating software and carrying the consequences of running it is where most of the industry is about to get hurt.

Companies do not just buy software for features. They buy someone else to carry the consequences. A lot of enterprise procurement is really liability transfer disguised as feature evaluation. AI has not changed that. It has made it more true.

## Software used to help people work. Now it's being asked to do the work.

For the last twenty years, most SaaS products followed the same deal: software helped a human do their job better. The software organized, tracked, and reported. But the human still drove the workflow and owned the outcome.

AI changes that. Now software is being asked to do the work itself, with a human supervising exceptions instead of executing every step.

That changes the buyer's comparison. In the old model, your product was compared to another subscription. In the new model, it gets compared to a salary.

If a company can pay software to source leads, draft outreach, follow up, and book meetings, it is no longer debating whether your product is worth $50 or $500 a seat. It is deciding whether your product is cheaper and more reliable than headcount.

That is a much bigger market. It is also a much harder product to build.

You can already see this shift in how the best AI products are priced. Intercom's AI agent, Fin, charges per resolution, not per seat. That is not a UI pricing model. It is an outcome pricing model. The buyer is not paying for access to a tool. They are paying for work to get done.

Klarna is the more important example because it shows what happens when this gets real. Their CEO reported that their AI system was handling the equivalent of 850 full-time support agents and saving $60 million. But earlier in the same year, he also had to admit publicly that Klarna pushed too hard, let quality drop, and hurt customer satisfaction. They started bringing humans back in. The lesson was not that AI failed. The lesson was that AI could handle the volume, but someone still had to own the consequences of getting it wrong. The winning model was not full automation. It was operationally managed automation.

Most AI startups right now are repeating the first half of that story without having read the second half.

## Making humans faster hits a ceiling

The productivity framing is bullshit.

David Cramer, the CEO of Sentry, [said it this week](https://x.com/zeeg/status/2033680587874308579): "You end up creating far worse code, code that I think in large quantities is a net burden." He is talking about what happens when teams go all-in on agentic coding. The output looks fast. The codebase becomes unmaintainable. The [Carnegie Mellon study](https://arxiv.org/pdf/2511.04427) on open-source projects using Cursor found the same thing: output jumps fast, then the gains flatten while complexity keeps rising. Cramer's full take is worth reading. The short version is that LLMs remove the barrier to getting started but quietly slow down long-term velocity. The speed is real. The progress is not.

Speed without operational ownership is just technical debt with better marketing.

That is why the real shift is not just making humans faster. It is asking software to own more of the outcome. When software owns the outcome, it can also own more of the quality loop: checks, retries, handoffs, audit trails, exception handling.

That only works if the company delivering the outcome actually understands what it shipped.

## Building is easy now. Operating is what kills you.

The cost of creating software really has collapsed. A developer with an AI agent can produce in weeks what used to take a team months. A domain expert can now build a useful internal tool without a full engineering organization.

The mistake is looking at that and concluding that software itself got cheap.

It did not.

Writing code was never where most of the long-term cost lived. The expensive part starts after someone depends on it.

Most software does not fail because nobody could get v0 working. It fails because nobody wanted to own everything that happened after. The integration changes. Records get dropped. Security gets involved. Compliance starts asking questions. The original builder moves on.

Now the company owns a pile of tech debt that nobody fully understands and everybody depends on.

If you have been in this industry for more than a few years, you have maintained one of these lovely piles. AI just made it possible to create them much faster. Every "I built this in a weekend" post you have seen this year is a tech debt bomb waiting to be detonated. The builder just has not left yet.

> AI democratizes building. It does not democratize operating.

When people say, "we can just build it ourselves now," what they usually mean is, "we can generate the mvp ourselves now."

That is not the same thing.

The mvp is the cheapest moment in a piece of software's life. The expensive part is everything after someone starts depending on it: monitoring, patching, security reviews, compliance work, incident response, and the institutional knowledge required to change the system without breaking something worse.

That is also why so many AI demos feel magical and so many production rollouts feel shaky. The demo proves the model can do something. Production proves the company can live with what happens when it does.

## The moat is not intelligence. It is operational depth.

This is the part a lot of AI founders still do not want to hear.

The wrapper got cheap.

Prompts, model access, some domain context, a decent UI, and a workflow on top of a frontier model is no longer a moat. Somebody else can build that next week.

What is still hard is everything underneath it: monitoring, rollback, audit trails, compliance, handoffs, failure handling, edge cases, and the ability to explain what happened when the system gets something wrong.

That is the real product.

It is also why the strongest companies in this category will not look like thin wrappers. They will look like operational systems with AI at the top, not AI demos with operations bolted on later.

If your AI company has no answer for "what happens when the agent is wrong," you do not have a durable business. You have a liability with a landing page.

That is the moat. Not raw intelligence. Not even model quality by itself. Operational expertise. The ability to stand behind the output with enough confidence that a customer will trust your software more than the person or service it replaced.

This is also why generic horizontal software gets eliminated first while domain-specific systems are going to get more valuable. The easier it gets to generate basic software, the less defensible generic workflow tooling becomes. But in regulated, high-consequence environments, the burden of ownership is much heavier. That burden is exactly what creates the moat.

## SaaS isn't dead. But it is the floor now, not the ceiling.

There will still be systems of record, collaboration tools, and software that helps humans work better.

But that is no longer the most valuable thing software can do.

The biggest companies in this next wave will not just sell access to tools. They will sell outcomes, priced against labor, backed by operational depth.

That is the real shift. Not "AI makes developers faster." Not "everyone can build now." Those are true, but they are downstream.

The deeper change is that software is starting to move up the value chain from assisting labor to performing labor. And the companies that win will not be the ones that ship the fastest. They will be the ones that can carry the consequences of what they shipped.

## This is a problem we need to fight.

Right now, the industry is celebrating speed while ignoring the wreckage behind it. We are shipping faster than we have ever shipped, and we have less visibility into what we shipped than at any point in the history of this profession. That should make everyone uncomfortable.

The tooling is not keeping up. Most observability platforms were built for humans staring at dashboards. Most CI/CD pipelines assume a human reviewed the code. Most incident response workflows assume somebody on the team understands the system that broke. None of those assumptions hold when agents are generating, deploying, and modifying production systems faster than any human can read the diffs.

We need better tools. Not better AI wrappers. Better operational infrastructure for a world where software writes software and nobody is fully sure what just changed. We need observability that feeds back into the agent loop, not into a pager that wakes up someone who has never seen this code before. We need compliance systems that can keep pace with the rate of change instead of auditing quarterly snapshots of a codebase that has been rewritten four times since the last review. We need incident response that does not start with "who touched this last" because the answer is increasingly "an agent, three weeks ago, and it did not leave notes."

This is not a tooling nice-to-have. This is the bottleneck. The industry figured out how to generate code at mass scale. It has not figured out how to own what it generated. And until that gap closes, we are going to keep seeing the same pattern: fast launches, slow failures, and teams drowning in systems they cannot explain.

If you are building in this space, build for ownership, not just output. If you are buying, stop evaluating AI products on what they can generate and start evaluating them on what happens when they are wrong. And if you are an engineer watching this unfold, push back. Push back hard. Demand operational depth from every tool you adopt, every agent you deploy, and every vendor who tells you their product "just works."

Because it does not just work. It works until it doesn't. And when it doesn't, somebody has to own that.