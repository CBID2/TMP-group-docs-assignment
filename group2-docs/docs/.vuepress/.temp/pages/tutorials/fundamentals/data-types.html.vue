<template><div><h1 id="data-types" tabindex="-1"><a class="header-anchor" href="#data-types"><span>Data Types</span></a></h1>
<p>In Openmadness, we primarily work with numbers. These can be whole numbers (such as 10, 500) or numbers with decimal points (such as 3.14, 0.5).
While JavaScript has other data types (like strings for text or booleans for true/false values), Openmadness functions are designed for numerical calculations. If you try to include non-numbers, Openmadness might convert them to NaN (Not a Number) if it can't understand them.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> om <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// An array of numbers - perfect for Openmadness!</span></span>
<span class="line"><span class="token keyword">const</span> prices <span class="token operator">=</span> om<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">24.99</span><span class="token punctuation">,</span> <span class="token number">12.50</span><span class="token punctuation">,</span> <span class="token number">5.00</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Numeric prices:"</span><span class="token punctuation">,</span> prices<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// What happens if we try to include a string?</span></span>
<span class="line"><span class="token keyword">const</span> mixedItems <span class="token operator">=</span> om<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">'apple'</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Mixed data:"</span><span class="token punctuation">,</span> mixedItems<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: [10, NaN, 20]</span></span>
<span class="line"><span class="token comment">// 'apple' can't be converted to a number, so it becomes NaN.</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>For reliable results, always provide numbers to Openmadness arrays.</p>
</div>
</div></template>


