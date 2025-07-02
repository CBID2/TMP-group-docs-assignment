<template><div><h1 id="👋-introduction" tabindex="-1"><a class="header-anchor" href="#👋-introduction"><span>👋 Introduction</span></a></h1>
<p><img src="/openmadness-banner.png" alt="openmadness-banner"></p>
<nav class="table-of-contents"><ul><li><router-link to="#overview">Overview</router-link></li><li><router-link to="#what-you-ll-learn">What You’ll Learn</router-link></li><li><router-link to="#who-should-use-this-guide">Who Should Use This Guide</router-link></li><li><router-link to="#what-is-openmadness">What Is Openmadness?</router-link></li></ul></nav>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<p>Openmadness is a fun and beginner-friendly JavaScript tool that helps you do math and work with arrays (lists of numbers) without stress. It was built for learners, tinkerers, and developers who enjoy working with data in a simple way.</p>
<p>In this guide, you’ll learn what Openmadness is, who it’s for, and how it can make working with numbers in JavaScript feel smooth and even fun.</p>
<h2 id="what-you-ll-learn" tabindex="-1"><a class="header-anchor" href="#what-you-ll-learn"><span>What You’ll Learn</span></a></h2>
<ul>
<li>
<p>What Openmadness is and why it exists</p>
</li>
<li>
<p>Who the tool is built for</p>
</li>
<li>
<p>What you can expect to do with it</p>
</li>
<li>
<p>Where to go next after this guide</p>
</li>
</ul>
<h2 id="who-should-use-this-guide" tabindex="-1"><a class="header-anchor" href="#who-should-use-this-guide"><span>Who Should Use This Guide</span></a></h2>
<p>This guide is for:</p>
<ul>
<li>
<p>New developers learning JavaScript</p>
</li>
<li>
<p>People working with arrays or numbers who want easier tools</p>
</li>
<li>
<p>Anyone looking for a lightweight library with a “NumPy feel” for JavaScript</p>
</li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">Before You Begin</p>
<p>To follow along with Openmadness, you should:</p>
<ul>
<li>
<p>Know a little bit of JavaScript (basic functions and arrays)</p>
</li>
<li>
<p>Have Node.js installed (for Option 1 in the install guide)</p>
</li>
<li>
<p>Be ready to explore and test some simple code</p>
</li>
</ul>
</div>
<h2 id="what-is-openmadness" tabindex="-1"><a class="header-anchor" href="#what-is-openmadness"><span>What Is Openmadness?</span></a></h2>
<p>Openmadness is not a copy of NumPy, but it was inspired by it. It gives you tools like .sum(), .mean(), .transpose(), and .flatten() in a simple and easy way, using JavaScript.</p>
<p>It helps you do things like:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> matrix <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> matrix<span class="token punctuation">.</span><span class="token function">transpose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The code above transposes a matrix and adds up all the numbers.</p>
<p>Want to try it out for yourself?</p>
<p>Head over to the Quickstart Guide to run your first example.</p>
</div></template>


