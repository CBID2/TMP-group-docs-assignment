<template><div><h2 id="om-functions" tabindex="-1"><a class="header-anchor" href="#om-functions"><span>OM-Functions</span></a></h2>
<p>The main functions in the OpenMadness JavaScript library are used for:</p>
<ol>
<li>Array creation and manipulation</li>
<li>Arithmetic Operation</li>
<li>Logic</li>
<li>Statistics</li>
<li>Transformations</li>
<li>Utilities</li>
</ol>
<h2 id="array-operations" tabindex="-1"><a class="header-anchor" href="#array-operations"><span>Array Operations</span></a></h2>
<p>These functions are available for creating or manipulating arrays:</p>
<h3 id="_1-mad-ones-shape" tabindex="-1"><a class="header-anchor" href="#_1-mad-ones-shape"><span>1. <code v-pre>mad.ones(shape)</code></span></a></h3>
<p>This creates an array filled with ones:</p>
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
<td style="text-align:center">shape</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Shape of the new array, e.g., [2, 3] or 2</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">A new array filled with ones</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Create a 3x1 array of ones</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ones <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> onesColumn <span class="token operator">=</span> <span class="token function">ones</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [[1], [1], [1]]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-mad-zeros-shape" tabindex="-1"><a class="header-anchor" href="#_2-mad-zeros-shape"><span>2. <code v-pre>mad.zeros(shape)</code></span></a></h3>
<p>This creates an array filled with zeros:</p>
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
<td style="text-align:center">shape</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Shape of the new array, e.g., [2, 3] or 2</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">A new array filled with zeros</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Create a 2x2 array of zeroes</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> zeros <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> zeroMatrix <span class="token operator">=</span> <span class="token function">zeros</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [[0, 0], [0, 0]]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-mad-range-start-end-step" tabindex="-1"><a class="header-anchor" href="#_3-mad-range-start-end-step"><span>3. <code v-pre>mad.range(start, end, step)</code></span></a></h3>
<p>This generates an array containing a sequence of numbers:</p>
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
<td style="text-align:center">start</td>
<td style="text-align:center">number</td>
<td style="text-align:center">Start of the range</td>
</tr>
<tr>
<td style="text-align:center">end</td>
<td style="text-align:center">number</td>
<td style="text-align:center">End of the range</td>
</tr>
<tr>
<td style="text-align:center">step</td>
<td style="text-align:center">number</td>
<td style="text-align:center">Step increment. Default is 1</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">A new array with the number range</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> range <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> sequence <span class="token operator">=</span> <span class="token function">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [0, 2, 4, 6, 8]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-mad-random-shape" tabindex="-1"><a class="header-anchor" href="#_4-mad-random-shape"><span>4. <code v-pre>mad.random(shape)</code></span></a></h3>
<p>Generates an array of the given shape with random values between 0 and 1:</p>
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
<td style="text-align:center">shape</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Shape of the new array</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">A new array filled with random values</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> random <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> randomArray <span class="token operator">=</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Example output: [[0.13, 0.85], [0.42, 0.67]]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="arthimetric-operations" tabindex="-1"><a class="header-anchor" href="#arthimetric-operations"><span>Arthimetric Operations</span></a></h2>
<p>These functions are used to perform arithmetic operations on arrays.</p>
<h3 id="_1-mad-add-a-b" tabindex="-1"><a class="header-anchor" href="#_1-mad-add-a-b"><span>1. <code v-pre>mad.add(a, b)</code></span></a></h3>
<p>Adds two arrays element-wise:</p>
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
<td style="text-align:center">a, b</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Arrays of the same shape</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Resulting array after addition</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> add <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [4, 6]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-mad-subtract-a-b" tabindex="-1"><a class="header-anchor" href="#_2-mad-subtract-a-b"><span>2. <code v-pre>mad.subtract(a, b)</code></span></a></h3>
<p>Subtracts the second array from the first, element-wise:</p>
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
<td style="text-align:center">a, b</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Arrays of the same shape</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Resulting array after subtraction</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> subtract <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [3, 3]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-mad-multiply-a-b" tabindex="-1"><a class="header-anchor" href="#_3-mad-multiply-a-b"><span>3. <code v-pre>mad.multiply(a, b)</code></span></a></h3>
<p>Multiplies two arrays element-wise:</p>
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
<td style="text-align:center">a, b</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Arrays of the same shape</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Resulting array after multiplication</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> multiply <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [8, 15]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-mad-divide-a-b" tabindex="-1"><a class="header-anchor" href="#_4-mad-divide-a-b"><span>4. <code v-pre>mad.divide(a, b)</code></span></a></h3>
<p>Divides the first array by the second, element-wise:</p>
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
<td style="text-align:center">a, b</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Arrays of the same shape</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Resulting array after division</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> divide <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">divide</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [5, 4]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-mad-pow-a-b" tabindex="-1"><a class="header-anchor" href="#_5-mad-pow-a-b"><span>5. <code v-pre>mad.pow(a, b)</code></span></a></h3>
<p>Raises each element in a to the power of the corresponding element or scalar <code v-pre>b</code>:</p>
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
<td style="text-align:center">a</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Base values</td>
</tr>
<tr>
<td style="text-align:center">b</td>
<td style="text-align:center">Array or number</td>
<td style="text-align:center">Exponents</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Array of exponentiated values</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> pow <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">pow</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [4, 9]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="logical-operations" tabindex="-1"><a class="header-anchor" href="#logical-operations"><span>Logical Operations</span></a></h2>
<p>These functions allow you to perform element-wise logical comparisons:</p>
<h3 id="_1-mad-equal-a-b" tabindex="-1"><a class="header-anchor" href="#_1-mad-equal-a-b"><span>1. <code v-pre>mad.equal(a, b)</code></span></a></h3>
<p>Checks element-wise equality:</p>
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
<td style="text-align:center">a, b</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Arrays of the same shape</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Boolean array of comparisons</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> equal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [true, false]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-mad-greater-a-b" tabindex="-1"><a class="header-anchor" href="#_2-mad-greater-a-b"><span>2. <code v-pre>mad.greater(a, b)</code></span></a></h3>
<p>Checks if elements in <code v-pre>a</code> are greater than corresponding elements in <code v-pre>b</code>:</p>
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
<td style="text-align:center">a, b</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Arrays of the same shape</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Boolean array</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> greater <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">greater</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [true, false]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-mad-where-condition-a-b" tabindex="-1"><a class="header-anchor" href="#_3-mad-where-condition-a-b"><span>3. <code v-pre>mad.where(condition, a, b)</code></span></a></h3>
<p>Returns elements from <code v-pre>a</code> where the condition is true, otherwise from <code v-pre>b</code>:</p>
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
<td style="text-align:center">condition</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Boolean mask</td>
</tr>
<tr>
<td style="text-align:center">a, b</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Arrays of values</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Resulting values from <code v-pre>a</code> or <code v-pre>b</code></td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> where <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">where</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [1, 4]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="statistics" tabindex="-1"><a class="header-anchor" href="#statistics"><span>Statistics</span></a></h2>
<p>These functions help calculate statistical measures from arrays:</p>
<h3 id="_1-mad-sum-array" tabindex="-1"><a class="header-anchor" href="#_1-mad-sum-array"><span>1. <code v-pre>mad.sum(array)</code></span></a></h3>
<p>Returns the sum of all elements:</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-mad-mean-array" tabindex="-1"><a class="header-anchor" href="#_2-mad-mean-array"><span>2. <code v-pre>mad.mean(array)</code></span></a></h3>
<p>Calculates the mean (average) of elements:</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-mad-std-array" tabindex="-1"><a class="header-anchor" href="#_3-mad-std-array"><span>3. <code v-pre>mad.std(array)</code></span></a></h3>
<p>Computes the standard deviation of the array:</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-mad-median-array" tabindex="-1"><a class="header-anchor" href="#_4-mad-median-array"><span>4. <code v-pre>mad.median(array)</code></span></a></h3>
<p>Finds the median value:</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="transformations" tabindex="-1"><a class="header-anchor" href="#transformations"><span>Transformations</span></a></h2>
<p>These functions are used to reshape or reformat arrays:</p>
<h3 id="_1-mad-reshape-array-newshape" tabindex="-1"><a class="header-anchor" href="#_1-mad-reshape-array-newshape"><span>1. <code v-pre>mad.reshape(array, newShape)</code></span></a></h3>
<p>Reshapes an array to the specified shape:</p>
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
<td style="text-align:center">The original array</td>
</tr>
<tr>
<td style="text-align:center">newShape</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">New shape, e.g., [2, 2]</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Reshaped array</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> reshape <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">reshape</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [[1, 2], [3, 4]]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-mad-flatten-array" tabindex="-1"><a class="header-anchor" href="#_2-mad-flatten-array"><span>2. <code v-pre>mad.flatten(array)</code></span></a></h3>
<p>Flattens a nested array into a 1D array:</p>
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
<td style="text-align:center">A nested array</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Flattened 1D array</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Reshaped array</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> flatten <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">flatten</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [1, 2, 3, 4]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-mad-transpose-array" tabindex="-1"><a class="header-anchor" href="#_3-mad-transpose-array"><span>3. <code v-pre>mad.transpose(array)</code></span></a></h3>
<p>Transposes a 2D array (rows become columns):</p>
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
<td style="text-align:center">2D Array</td>
<td style="text-align:center">The matrix to flip</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Transposed matrix</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Reshaped array</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> transpose <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">transpose</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [[1, 3], [2, 4]]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="utilities" tabindex="-1"><a class="header-anchor" href="#utilities"><span>Utilities</span></a></h2>
<p>These functions assist with array handling and display tasks:</p>
<h3 id="_1-mad-clone-array" tabindex="-1"><a class="header-anchor" href="#_1-mad-clone-array"><span>1. <code v-pre>mad.clone(array)</code></span></a></h3>
<p>Creates a deep copy of an array:</p>
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
<td style="text-align:center">The array to copy</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">A deep-cloned array</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Reshaped array</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> clone <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> newArray <span class="token operator">=</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [1, 2, 3]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-mad-print-array" tabindex="-1"><a class="header-anchor" href="#_2-mad-print-array"><span>2. <code v-pre>mad.print(array)</code></span></a></h3>
<p>Prints the array to the console in a readable format:</p>
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
<td style="text-align:center">Array to display</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">void</td>
<td style="text-align:center">No return value</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Reshaped array</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> print <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Console: [ [1, 2], [3, 4] ]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-mad-toarray-madarray" tabindex="-1"><a class="header-anchor" href="#_3-mad-toarray-madarray"><span>3. <code v-pre>mad.toArray(madArray)</code></span></a></h3>
<p>Converts a mad array into a plain JavaScript array:</p>
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
<td style="text-align:center">madArray</td>
<td style="text-align:center">Mad Object</td>
<td style="text-align:center">Internal mad representation</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Plain JavaScript array</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> toArray<span class="token punctuation">,</span> zeros <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> jsArray <span class="token operator">=</span> <span class="token function">toArray</span><span class="token punctuation">(</span><span class="token function">zeros</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [[0, 0], [0, 0]]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


