  <ol class="breadcrumb">
<li>Model</li>
<li>Fridge Model</li>
</ol>
<p class="comment">
<h3>Description</h3>
</p>
<p class="comment">
Database schema for fridge
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

<a href="#module_Fridge Model..owner">owner</a>
</li>
<li>

<a href="#module_Fridge Model..scenario">scenario</a>
</li>
<li>

<a href="#module_Fridge Model..accessGranted">accessGranted</a>
</li>
<li>

<a href="#module_Fridge Model..strains">strains</a>
</li>
<li>

<a href="#module_Fridge Model..scenarioDetails">scenarioDetails</a>
</li>
<li>

<a href="#module_Fridge Model..guesses">guesses</a>
</li>
</ul>
</td>
</tr>
</tbody>
</table>
</section>
<section><h3>Properties</h3>  <table class="table table-sm table-bordered">
<tbody>
<tr id="owner"><td class="col-md-4">
<a name="module_Fridge Model..owner"></a>
<b>owner</b>
</td></tr>
<tr>
<td class="col-md-4"><code>owner : [USER](user-model.html)</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>user who owns the fridge</p>
</div>
</td>
</tr>
</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="scenario"><td class="col-md-4">
<a name="module_Fridge Model..scenario"></a>
<b>scenario</b>
</td></tr>
<tr>
<td class="col-md-4"><code>scenario : [SCENARIO](scenario-model.html)</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>scenario the fridge is for</p>
</div>
</td>
</tr>
</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="accessGranted"><td class="col-md-4">
<a name="module_Fridge Model..accessGranted"></a>
<b>accessGranted</b>
</td></tr>
<tr>
<td class="col-md-4"><code>accessGranted : boolean</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>has access been granted by instructor</p>
<ul>
<li>when <code>false</code>, phage strains are the same for all users</li>
<li>when <code>true</code>, phage are generated using random numbers</li>
</ul>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<i>Default Value :</i> <code>false</code>
</td>
</tr>

</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="strains"><td class="col-md-4">
<a name="module_Fridge Model..strains"></a>
<b>strains</b>
</td></tr>
<tr>
<td class="col-md-4"><code>strains : [Array&lt;PHAGE&gt;](phage-model.html)</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>list of phage strains
in the fridge</p>
</div>
</td>
</tr>
</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="scenarioDetails"><td class="col-md-4">
<a name="module_Fridge Model..scenarioDetails"></a>
<b>scenarioDetails</b>
</td></tr>
<tr>
<td class="col-md-4"><code>scenarioDetails : String</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><ul>
<li>stringified object of the scenario details generated when
the fridge was created and is needed for performing
experiments</li>
<li>includes <code>interMuteDist</code>, <code>intraMuteDist</code>, <code>mutationFreq</code>, <code>recombinationFreq</code>,
<code>deleteSizes</code>, <code>deleteSpots</code>, <code>usedDeleteSpots</code>,
<code>usedShiftSpots</code>, <code>wtGene</code>, <code>realStops</code>, <code>framesStopList</code></li>
</ul>
</div>
</td>
</tr>
</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="guesses"><td class="col-md-4">
<a name="module_Fridge Model..guesses"></a>
<b>guesses</b>
</td></tr>
<tr>
<td class="col-md-4"><code>guesses : String</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>stringified object of user&#39;s
guesses for locations of deletions where the key is the
strain number of the guess and the value is an array of
boolean values indicating if guessed a deletion</p>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description">
<b>Example : </b>
<pre class="language-html"><code class="language-html">"{'1': [false, false, false, false, true, true, ...],
  '2': [true, true, true, false, false, false, ...],
  '3': [false, false, false, false, false, false, ...]
 }"
</code></pre>
</div>
</td>
</tr>
</tbody>
</table>
</section>
<section style="margin-top:50px;text-align:center;">
documentation generated with <a href="https://github.com/jsdoc2md/jsdoc-to-markdown/">JSDoc2md</a>
</section>
