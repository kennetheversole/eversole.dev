+++
title = "We Automated Everything Except Knowing What's Going On"
date = 2026-03-02
author = "Kenneth Eversole"

[taxonomies]
tags = ["engineering", "AI", "operations", "opscompanion"]
+++

Software is being democratized. The cost of building just collapsed in a way most people haven't fully processed yet. Anyone with an idea and access to an AI agent can ship a product. What used to take a team of twenty and six months now takes one person and a weekend. That's not hype. It's happening right now, everywhere, all at once.

But here's what nobody's talking about. The systems underneath all of this are buckling. And the people responsible for keeping them running are either overwhelmed, undervalued, or being replaced entirely. We're entering an era where everyone can build, and almost nobody understands what they've built.

That's not an AI problem. It's an identity crisis that's been growing inside software engineering for years. AI just ripped the cover off.

## This Industry Has Been Rotting from the Inside for Years

Software used to be something you could wrap your head around. You knew what server it ran on, what database it talked to, what data center it lived in. That era has been gone for a while now. We scaled, broke things into pieces, adopted every cloud service and managed platform we could find, and when the complexity got unbearable we started stacking layers on top. Infrastructure as code, GitOps, CI workflows. The pitch was always the same: encode the complexity, make it manageable, sleep at night. It happened so gradually that nobody noticed how deep they were until they were already underwater.

What came out the other side wasn't engineering. It was bureaucracy wearing an engineering costume. Configuration scattered across dozens of tools, each owned by a different vendor, each showing a narrow slice of reality. The daily work shifted from shaping systems to keeping machinery lined up. And we just accepted it, because the way we value work in this industry never caught up either. The teams keeping systems alive today are visible and rewarded. The teams doing the quiet work of making sure systems don't need saving tomorrow get ignored. Nobody promotes the team that prevented the outage. Leadership retells the 4 a.m. hero story. We say we value reliability but promote throughput. Prevention matters, right up until the budget conversation. Then we fund response.

None of this is new. The complexity, the configuration bloat, the broken incentives, all of it predates AI by years. What AI did was pour gasoline on it. Teams that shipped weekly now ship continuously. Architecture decisions that took weeks happen in minutes, all because the cost of writing code is collapsing overnight. But the cost of understanding that code, what it actually does to a running system, hasn't moved at all. If anything it's gotten dramatically worse, because now the author doesn't even know why they made their decisions. And while all of this is happening, the number of people responsible for keeping things working is shrinking, not growing. We've created a supply chain crisis where we're producing far more than we can actually handle.

Change is up 30x while understanding is dropping, and the gap is widening every quarter. It's the same mess we've always had. It's just moving fast enough now that all the little tricks we used to play on ourselves have stopped working.

## We Stopped Understanding Our Systems and Nobody Noticed

Great engineering is not deployments. It's not monitoring, not dashboards. It's understanding. Knowing how the pieces connect, who owns what, how changes spread, and where risk has quietly been building for months until it suddenly matters.

What should make everyone very hopeful is the foundation of great engineering isn't missing. It's scattered across every tool your organization already pays for. What's missing is anyone putting it together. Engineers jump between dozens of tools and rebuild the picture in their heads every time something goes wrong. That picture decays the day they leave, breaks apart across teams, and is always slightly wrong in exactly the ways that surface under pressure.

And this is about to get so much worse. We're heading into a world where AI agents outnumber engineers 50 to 1, each one shipping code and deploying changes faster than any human can track. When one engineer could barely keep up with what ten humans were changing, what happens when that same engineer is responsible for understanding what fifty agents are doing to a live system at the same time? The old ways of keeping up don't just get harder. They become physically impossible. Monitoring can tell you something went wrong. It can't tell you why, or what changed, or who owns the thing that broke. Understanding isn't a nice-to-have in that world. It's the only thing standing between a running system and chaos.

## The Future Belongs to Whoever Understands What They Shipped

The world we're entering doesn't look like the one we're leaving.

Enterprises with thousands of engineers are going to be the exception, not the rule. A team of five people with fifty agents is going to build and operate what used to take five hundred. That's not a prediction. It's already starting to happen. Software is being democratized in a way that changes who builds, how fast they build, and how much of the world runs on what they've built.

But democratizing creation without solving understanding is a disaster waiting to happen. Acceleration without understanding just makes things more dangerous, and right now the entire industry is accelerating while understanding falls further behind.

SRE isn't dead. DevOps isn't dead. Platform engineering isn't dead. What's dying is the shallow version of all of them. The belief that shipping faster is always better, that more tools solve more problems, that you can outrun your own complexity if you just automate hard enough.

You can't.

The ability to understand a system as fast as it changes is the foundational layer for the next era of technology. Not another tool on top of the pile. The thing everything else gets built on.

But here's the uncomfortable part. Most of you reading this already know everything I just said. You've felt it. You've lived it. You've complained about it in retros and Slack threads and late-night incident calls. And then Monday comes and you go back to the same dashboards, the same alert fatigue, the same quarterly planning rituals that measure output instead of understanding. Nothing changes because the incentives haven't changed. And the incentives haven't changed because nobody with authority has been forced to confront what's actually breaking.

That's about to end. The supply chain crisis I described isn't theoretical. It's arriving. And when a team of five with fifty agents is shipping faster than your entire engineering org, the question won't be whether you have enough dashboards. It'll be whether anyone in the building can explain what your system is actually doing right now.

Most of you won't be able to answer that. And you already know it.

**That's the conversation this industry needs to have. Not tomorrow. Now.**
