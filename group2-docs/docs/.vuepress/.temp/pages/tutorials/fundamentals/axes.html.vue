<template><div><h1 id="understanding-axes" tabindex="-1"><a class="header-anchor" href="#understanding-axes"><span>Understanding Axes</span></a></h1>
<p>Axes refer to the different dimensions along which you can perform operations in your data. Understanding axes is crucial for working effectively with multi-dimensional arrays in OpenMadness.</p>
<p>In a 2D array (like a grid or matrix), you have two main axes:</p>
<ul>
<li><strong>Axis 0</strong>: Runs vertically, down the rows</li>
<li><strong>Axis 1</strong>: Runs horizontally, across the columns</li>
</ul>
<p>Many OpenMadness functions (like <code v-pre>average()</code> or <code v-pre>sum()</code>) allow you to specify an axis parameter to operate on that particular dimension, rather than on the entire dataset.</p>
<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h2>
<p>Let's see axes in action with a practical example:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> omArray <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> examScores <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Student 1 scores (Math, Science, History)</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">]</span>  <span class="token comment">// Student 2 scores</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Exam Scores:\n"</span><span class="token punctuation">,</span> examScores<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Sum of all scores (no axis specified)</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">import</span> <span class="token punctuation">{</span> <span class="token function">sum</span> <span class="token punctuation">}</span> from <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line">console.log<span class="token punctuation">(</span><span class="token string">"Total sum of all scores:"</span>, examScores.sum<span class="token punctuation">(</span><span class="token punctuation">))</span><span class="token punctuation">;</span> // Output: <span class="token number">508</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Sum along axis 0 (down the columns) - sum for each subject</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> sum <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> subjectTotals <span class="token operator">=</span> examScores<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Sum per Subject (Axis 0):"</span><span class="token punctuation">,</span> subjectTotals<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: [155, 175, 178]</span></span>
<span class="line"><span class="token comment">// (80+75), (85+90), (90+88)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Sum along axis 1 (across the rows) - sum for each student</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> sum <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> studentTotals <span class="token operator">=</span> examScores<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Sum per Student (Axis 1):"</span><span class="token punctuation">,</span> studentTotals<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: [255, 253]</span></span>
<span class="line"><span class="token comment">// (80+85+90), (75+90+88)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="visualizing-axes" tabindex="-1"><a class="header-anchor" href="#visualizing-axes"><span>Visualizing Axes</span></a></h2>
<p>To help visualize how axes work:</p>
<ul>
<li><strong>Axis 0 operations</strong> combine values vertically (column-wise)</li>
<li><strong>Axis 1 operations</strong> combine values horizontally (row-wise)</li>
</ul>
<h2 id="common-operations-with-axes" tabindex="-1"><a class="header-anchor" href="#common-operations-with-axes"><span>Common Operations with Axes</span></a></h2>
<p>Here are some common operations you can perform with axes:</p>
<ul>
<li><code v-pre>sum(axis)</code>: Sum values along the specified axis</li>
<li><code v-pre>mean(axis)</code>: Calculate the average along the specified axis</li>
<li><code v-pre>max(axis)</code>: Find maximum values along the specified axis</li>
<li><code v-pre>min(axis)</code>: Find minimum values along the specified axis</li>
</ul>
</div></template>


