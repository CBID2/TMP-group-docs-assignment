<template><div><h1 id="statistics" tabindex="-1"><a class="header-anchor" href="#statistics"><span>Statistics</span></a></h1>
<p>To perform statistical operations, you can use the following functions:</p>
<h3 id="_1-sum-array" tabindex="-1"><a class="header-anchor" href="#_1-sum-array"><span>1. <code v-pre>.sum(array)</code></span></a></h3>
<p>To returns the sum of all elements:</p>
<table>
<thead>
<tr>
<th style="text-align:center">Parameter</th>
<th style="text-align:center">Type</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">array</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Input array</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">number</td>
<td style="text-align:center">Total sum of elements</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> sum <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: 6</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-mean-array" tabindex="-1"><a class="header-anchor" href="#_2-mean-array"><span>2. <code v-pre>.mean(array)</code></span></a></h3>
<p>To calculates the mean (average) of elements:</p>
<table>
<thead>
<tr>
<th style="text-align:center">Parameter</th>
<th style="text-align:center">Type</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">array</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Input array</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">number</td>
<td style="text-align:center">Average of elements</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> mean <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">mean</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: 2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-std-array" tabindex="-1"><a class="header-anchor" href="#_3-std-array"><span>3. <code v-pre>.std(array)</code></span></a></h3>
<p>To computes the standard deviation of the array:</p>
<table>
<thead>
<tr>
<th style="text-align:center">Parameter</th>
<th style="text-align:center">Type</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">array</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Input array</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">number</td>
<td style="text-align:center">Standard deviation</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> std <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">std</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: ~0.82 (sample-dependent)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-median-array" tabindex="-1"><a class="header-anchor" href="#_4-median-array"><span>4. <code v-pre>.median(array)</code></span></a></h3>
<p>To finds the median value:</p>
<table>
<thead>
<tr>
<th style="text-align:center">Parameter</th>
<th style="text-align:center">Type</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">array</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Input array</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">number</td>
<td style="text-align:center">Middle value</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> median <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">median</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: 2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


