+++
title = "Go West, Nerd."
date = 2026-06-02
description = "\"Where does the context live?\" is the only sovereignty question that matters right now."
author = "Kenneth Eversole"

[taxonomies]
tags = ["sovereign AI", "AI BOM", "supply chain", "context", "opscompanion"]
+++

I have been constantly thinking about what it means for individuals and companies to be able to independently use AI models. Especially specific ones, ones where they are extremely personalized, because they can access all your personal data, but in a safe way. When I think of the term, I come back to "sovereign," but we are looking over the edge of the AI field, where "Sovereign AI" is only defined by national security and nation-states.

Here is the version I keep coming back to: Sovereign AI means you own and you know the data going into a model and the data coming out of it, no matter the model type. That is the whole definition, and by that standard, I don't think there is a real example of it widely available. You do see some governments and regulated industries trying to make secure ways to use these models, or individuals using local open-source models, but again, nothing is widely available.

The reason barely anyone has touched Sovereign AI is that it is baked into how the frontier models got built. Training a frontier model takes an absurd amount of data, so much so that the companies building them go out and pull in whatever datasets they can find online, quality be damned. For a lot of companies that want to put AI to work, that is not the answer. You do not want your decisions riding on some angry Reddit comment.

## I Thought We Learned This in 2020

The most succinct way I have been able to wrap my head around this is to view it as a supply chain. With any supply chain, you must know every step in the process to truly optimize a finished product, but also be able to trust the integrity of said product. Take nuclear weapons. When you build them from the inside out, you know every bolt, you know where the materials are from, and you even know the workers who build them. Because the moment you don't, you have no way of telling whether a secondary actor added a hidden detonation switch.

Naively, software tempted us to ignore all of this. Every product we buy and every product we build is really just a collection of open source libraries and vendor software, stapled together and hoped to hold. And the open source half, the half that quietly runs the modern world, is in many cases maintained by one person in a town you have never heard of, on a weekend, for free.

Simply put, it was a giant set of Russian nesting dolls, and all we saw was the final doll.

Now our businesses depend on opening them.

With AI, and with the sheer volume of software AI, the nesting dolls multiply, and so do the places bad actors can hide inside one. Adversarial attacks on the supply chains are proliferating at what seems to be the beginning of an exponential curve.

To make matters worse, AI researchers have found that these learning models can be easily fooled. This is a danger in various model types, but it is particularly insidious in LLMs due to their fundamental architecture. Simply put, LLM architecture is centered on the context window, ie, a giant wall of text. And because it is just text, an attack can be triggered through a change in a character, a word, a sentence, or a combination of all three, making the attack highly adaptable and difficult to identify [1]. This is exceptionally more difficult now that AI Agents call tools. But please read 1 and 2 to protect yourself because, currently, this is a very new and novel field. While there are start-ups in the space, there is no clear and defined path to protect yourself.

## What's in the Box?

In traditional software, the software bill of materials (SBOM) just started to take off in popularity because people started demanding something that tells them exactly what is inside the product they bought for both security and data resilience. There is no settled version of that for AI yet.

An AI Bill of Materials (AI BOM) is meant to do the same job, except it has to see things a software inventory was never built for: the datasets, the models, the weights, and the biases baked into all of the above. The current industry attempts to go after the obvious stuff. Which models are running, which datasets trained them, and which licenses apply. That is a start, and it is more than we had a year ago.

But it is nowhere close to enough. It does not tell you whose feedback steered the training, what got filtered out, or where the operational risk actually lives. We are at the SBOM-circa-2018 stage of this. The frameworks exist, the standards are being drafted, and almost no one is actually shipping one. [3,4]

And that is exactly why society must demand more.

The vision that many builders and innovators in the AI space have is a human operator managing fleets of AI agents, allowing for parallel, serial, and competing processes to occur all at once. But for that to happen, we need to include agent lineage tracking in the AI BOMs. We need to know which agent touched what, which human that agent is attached to, and all access and blast radius possibilities attached to that action. You will also want to know the specifics of the prompt: what did the prompt say, what was the model inference, and what language was the prompt in [5].

This is also where ownership stops being abstract. When you don't own the box, the best you can say is that maybe you own the output. To put it bluntly, it's like saying you own a nuclear bomb but not owning the silo. So just like horseshoes, nuclear bombs, and the law, there is no room for "maybes" anymore. Sovereign AI lets you say something simple and defensible instead: I own this box, so anything that comes out of it is mine.

## The First Explorers Went East

So why don't the frontier labs care about any of this? The short answer is they are the first explorers, and they chose to go East.

In the early Renaissance, during the Age of Exploration, sailors from Italy and Spain raised what we now call venture capital to find a new pathway to India. They all set off and went east. They went around Africa. Many of them died to storms and pirates. Some did actually make it to India, but it wasn't the most effective way, and it wasn't the most world-changing way.

The other angle here is plain economics. Just as those explorers raised a lot of money to go east, the frontier labs have raised a lot of money to build data centers, and now they have sunk cost fallacy. They have to go east. They have to build data centers.

There is no clean way to monetize sovereign AI. You can monetize the agent harness around it, but not the model itself, which means the mechanics of capitalism are actively working against this particular kind of innovation. The way the frontier models are monetizing is through rent-seeking behavior: you pay a fee every month to use the model, and now this is also true for pure API calls. Sovereign AI, by design, hands the model asset to the customer and walks away without collecting rent.

## Sovereignty is a Competition

There is another angle that gets overlooked, which is that sovereign AI is partly driven by competition. Think about restaurants. You can't patent a recipe. A guest might know the base of a dish – like pasta – but some ingredients and steps that give it its particular flavor and texture will be kept a secret by the chef.

Companies are starting to demand the same thing from their models. They want their secret sauce from their data to work for their customers. They would never want to have their competitors accessing what makes their business uniquely theirs.

Right now, while the Frontier Labs state that they do not train on your prompts, the naive answer would be to accept that. Thankfully, most people are not naive. They realize that while they can't see the inside of the prompt data, they know that they can see:

- What the customer organization is
- How much usage they have
- The products they release

It does not take a rocket scientist to equate the two to build a competitive, competing product in the very same space.

## And Now, We Go West

If anything, we have learned over the last five months that the wildness of 2026 and AI is that context is king. It turns out the model matters far less than people assumed. You need a capable model, yes. But you also need an incredibly elegant agent harness around it, and all that harness really does is manage the context going into the model.

Context is king. That is the big lesson of the past year. For the AI companies, this is great news because more context means more tokens burned, and tokens are how they get paid. But for the actual work of getting good answers or building real intelligence, context matters more than anything else.

That is why sovereign AI is not just an idea anymore. It is something we have to demand. And these demands are non-negotiable:

- Tell me what data you were trained on.
- Tell me what you know about me.
- Tell me what you are sharing about me.
- Give me answers I can actually build my business or research on.
- Let me decide what goes into that context window.
- Tell me when my data becomes mine.

A group of adventurers once went east and found a different path to India. But it is worth remembering that a lot more of them went west, and what they found was not a shortcut. It was a different world entirely. If AI is supposed to be the change people keep promising, if it is supposed to matter on that scale, then maybe the question is not how much further east we can push. Maybe the question is what happens when we go west.

## References

[1] <https://arxiv.org/abs/2310.10844>

[2] InstaTunnel's Substack — *Model Weight "Mirror Squatting": The Backdoored Hub*

[3] <https://arxiv.org/abs/2504.16743>

[4] <https://arxiv.org/abs/2510.07070>

[5] <https://doi.org/10.1038/s41586-026-10506-7>
