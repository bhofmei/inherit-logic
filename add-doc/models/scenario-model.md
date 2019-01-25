  <ol class="breadcrumb">
<li>Model</li>
<li>Scenario Model</li>
</ol>
<p class="comment">
<h3>Description</h3>
</p>
<p class="comment">
Database schema for scenarios (scenarios are created when the application runs the first time)
</p>
<section>
<h3 id="index">Index</h3>
<table class="table table-sm table-bordered index-table">
<tbody>
<tr>
<td class="col-md-4"><h6><b>Properties</b></h6></td>
</tr>
<tr>
<td class="col-md-4">
<ul class="index-list">
<li>

<a href="#module_Scenario Model..label">label</a>
</li>
<li>

<a href="#module_Scenario Model..fileCode">fileCode</a>
</li>
<li>

<a href="#module_Scenario Model..scenCode">scenCode</a>
</li>
<li>

<a href="#module_Scenario Model..defOfDiff">defOfDiff</a>
</li>
<li>

<a href="#module_Scenario Model..mutationFreq">mutationFreq</a>
</li>
<li>

<a href="#module_Scenario Model..recombinationFreq">recombinationFreq</a>
</li>
<li>

<a href="#module_Scenario Model..gcProb">gcProb</a>
</li>
<li>

<a href="#module_Scenario Model..minStops">minStops</a>
</li>
<li>

<a href="#module_Scenario Model..intraMuteDist">intraMuteDist</a>
</li>
<li>

<a href="#module_Scenario Model..interMuteDist">interMuteDist</a>
</li>
<li>

<a href="#module_Scenario Model..purpose">purpose</a>
</li>
<li>

<a href="#module_Scenario Model..relevance">relevance</a>
</li>
<li>

<a href="#module_Scenario Model..startingPoint">startingPoint</a>
</li>
<li>

<a href="#module_Scenario Model..referencePhage">referencePhage</a>
</li>
<li>

<a href="#module_Scenario Model..otherPhage">otherPhage</a>
</li>
</ul>
</td>
</tr>
</tbody>
</table>
</section>
<section><h3>Properties</h3>  <table class="table table-sm table-bordered">
<tbody>
<tr id="label"><td class="col-md-4">
<a name="module_Scenario Model..label"></a>
<b>label</b>
</td></tr>
<tr>
<td class="col-md-4"><code>label : string</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>human-readable label describing the scenario</p>
</div>
</td>
</tr>
</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="fileCode"><td class="col-md-4">
<a name="module_Scenario Model..fileCode"></a>
<b>fileCode</b>
</td></tr>
<tr>
<td class="col-md-4"><code>fileCode : string</code></td>
</tr>

</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="scenCode"><td class="col-md-4">
<a name="module_Scenario Model..scenCode"></a>
<span class="modifier" style="background:#8a6d3b;margin-right:10px;">INDEX</span>
<b>scenCode</b>
</td></tr>
<tr>
<td class="col-md-4"><code>scenCode : string</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>short string used to uniquely
identify each scenario via URL</p>
</div>
</td>
</tr>
</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="defOfDiff"><td class="col-md-4">
<a name="module_Scenario Model..defOfDiff"></a>
<b>defOfDiff</b>
</td></tr>
<tr>
<td class="col-md-4"><code>defOfDiff : number</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>relative degree of difficulty used to order the scenarios on the scenario page</p>
</div>
</td>
</tr>
</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="mutationFreq"><td class="col-md-4">
<a name="module_Scenario Model..mutationFreq"></a>
<b>mutationFreq</b>
</td></tr>
<tr>
<td class="col-md-4"><code>mutationFreq : number</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>chance creating a new frameshift mutation during an experiment</p>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<i>Default Value :</i> <code>0.0004</code>
</td>
</tr>

</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="recombinationFreq"><td class="col-md-4">
<a name="module_Scenario Model..recombinationFreq"></a>
<b>recombinationFreq</b>
</td></tr>
<tr>
<td class="col-md-4"><code>recombinationFreq : number</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>chance of single recombination when crossing two phage in an experiment</p>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<i>Default Value :</i> <code>0.04</code>
</td>
</tr>

</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="gcProb"><td class="col-md-4">
<a name="module_Scenario Model..gcProb"></a>
<b>gcProb</b>
</td></tr>
<tr>
<td class="col-md-4"><code>gcProb : number</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>integer number for percent G and C&#39;s when creating the WT gene</p>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<i>Default Value :</i> <code>72</code>
</td>
</tr>

</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="minStops"><td class="col-md-4">
<a name="module_Scenario Model..minStops"></a>
<b>minStops</b>
</td></tr>
<tr>
<td class="col-md-4"><code>minStops : number</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>minumum number of possible stop codons that would be created during frameshifts of a gene</p>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<i>Default Value :</i> <code>10</code>
</td>
</tr>

</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="intraMuteDist"><td class="col-md-4">
<a name="module_Scenario Model..intraMuteDist"></a>
<b>intraMuteDist</b>
</td></tr>
<tr>
<td class="col-md-4"><code>intraMuteDist : Array&lt;number&gt;</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>mutations on the same phage are
between [0] and [1] distance apart when interMuteDist isn&#39;t set</p>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<i>Default Value :</i> <code>[10, 80]</code>
</td>
</tr>

</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="interMuteDist"><td class="col-md-4">
<a name="module_Scenario Model..interMuteDist"></a>
<b>interMuteDist</b>
</td></tr>
<tr>
<td class="col-md-4"><code>interMuteDist : number</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>minimum distance apart that
mutations should be for different phage of the same scenario; equals <code>-1</code> when unset</p>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<i>Default Value :</i> <code>-1</code>
</td>
</tr>

</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="purpose"><td class="col-md-4">
<a name="module_Scenario Model..purpose"></a>
<b>purpose</b>
</td></tr>
<tr>
<td class="col-md-4"><code>purpose : string</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>description of the goal of the scenario for users</p>
</div>
</td>
</tr>
</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="relevance"><td class="col-md-4">
<a name="module_Scenario Model..relevance"></a>
<b>relevance</b>
</td></tr>
<tr>
<td class="col-md-4"><code>relevance : String</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>description of why this scenario is important for learning</p>
</div>
</td>
</tr>
</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="startingPoint"><td class="col-md-4">
<a name="module_Scenario Model..startingPoint"></a>
<b>startingPoint</b>
</td></tr>
<tr>
<td class="col-md-4"><code>startingPoint : String</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>description of the phage
strains in the fridge when first created</p>
</div>
</td>
</tr>
</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="referencePhage"><td class="col-md-4">
<a name="module_Scenario Model..referencePhage"></a>
<b>referencePhage</b>
</td></tr>
<tr>
<td class="col-md-4"><code>referencePhage : Array&lt;String&gt;</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>each item is a phage to be created for the scenario when fridge created</p>
<ul>
<li>each item includes details about what mutations/deletions, if any, to include in the phage</li>
<li>as a reference phage, mutation type is told to user</li>
</ul>
</div>
</td>
</tr>
</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="otherPhage"><td class="col-md-4">
<a name="module_Scenario Model..otherPhage"></a>
<b>otherPhage</b>
</td></tr>
<tr>
<td class="col-md-4"><code>otherPhage : Array&lt;String&gt;</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>each item is a phage to be created for the scenario when fridge created</p>
<ul>
<li>each item includes details about what mutations/deletions, if any, to include in the phage</li>
<li>as an other phage, mutation type is not told to user and discovering the mutation is often the puprose for the scenario</li>
</ul>
</div>
</td>
</tr>
</tbody>
</table>
</section>
<section style="margin-top:50px;text-align:center;">
documentation generated with <a href="https://github.com/jsdoc2md/jsdoc-to-markdown/">JSDoc2md</a>
</section>
