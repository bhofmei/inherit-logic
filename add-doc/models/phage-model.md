  <ol class="breadcrumb">
<li>Model</li>
<li>Phage Model</li>
</ol>
<p class="comment">
<h3>Description</h3>
</p>
<p class="comment">
Database schema for phage strains
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

<a href="#module_Phage Model..strainNum">strainNum</a>
</li>
<li>

<a href="#module_Phage Model..owner">owner</a>
</li>
<li>

<a href="#module_Phage Model..scenarioOrigin">scenarioOrigin</a>
</li>
<li>

<a href="#module_Phage Model..phageType">phageType</a>
</li>
<li>

<a href="#module_Phage Model..mutationList">mutationList</a>
</li>
<li>

<a href="#module_Phage Model..deletion">deletion</a>
</li>
<li>

<a href="#module_Phage Model..comment">comment</a>
</li>
<li>

<a href="#module_Phage Model..submitted">submitted</a>
</li>
<li>

<a href="#module_Phage Model..parents">parents</a>
</li>
<li>

<a href="#module_Phage Model..numParents">numParents</a>
</li>
</ul>
</td>
</tr>
</tbody>
</table>
</section>
<section><h3>Properties</h3>  <table class="table table-sm table-bordered">
<tbody>
<tr id="strainNum"><td class="col-md-4">
<a name="module_Phage Model..strainNum"></a>
<span class="modifier" style="background:#31708f;margin-right:10px;">REQUIRED</span>
<b>strainNum</b>
</td></tr>
<tr>
<td class="col-md-4"><code>strainNum : number</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>location of the phage in the fridge; note this is 0-based but fridge interface is 1-based</p>
</div>
</td>
</tr>
</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="owner"><td class="col-md-4">
<a name="module_Phage Model..owner"></a>
<b>owner</b>
</td></tr>
<tr>
<td class="col-md-4"><code>owner : [USER](user-model.html)</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>user who this phage belongs to</p>
</div>
</td>
</tr>
</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="scenarioOrigin"><td class="col-md-4">
<a name="module_Phage Model..scenarioOrigin"></a>
<b>scenarioOrigin</b>
</td></tr>
<tr>
<td class="col-md-4"><code>scenarioOrigin : [SCENARIO](scenario-model.html)</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>scenario that
this phage was created for</p>
</div>
</td>
</tr>
</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="phageType"><td class="col-md-4">
<a name="module_Phage Model..phageType"></a>
<b>phageType</b>
</td></tr>
<tr>
<td class="col-md-4"><code>phageType : String</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>description of who created phage; must be one of <code>reference</code>, <code>unknown</code> or <code>user</code></p>
</div>
</td>
</tr>
</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="mutationList"><td class="col-md-4">
<a name="module_Phage Model..mutationList"></a>
<b>mutationList</b>
</td></tr>
<tr>
<td class="col-md-4"><code>mutationList : Array&lt;number&gt;</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>list of frameshift mutations</p>
<ul>
<li>for each mutation, absolute value of number indicates position in the gene</li>
<li>positive/negative number indicates plus/minus frameshift</li>
</ul>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description">
<b>Example : </b>
<i>One plus frameshift mutation</i>
<pre class="language-html"><code class="language-html">[43]
</code></pre>
</div>
<div class="io-description">
<b>Example : </b>
<i>One minus frameshift mutation</i>
<pre class="language-html"><code class="language-html">[-178]
</code></pre>
</div>
<div class="io-description">
<b>Example : </b>
<i>Two frameshifts of opposite type </i>
<pre class="language-html"><code class="language-html">[106, -213]
</code></pre>
</div>
</td>
</tr>
</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="deletion"><td class="col-md-4">
<a name="module_Phage Model..deletion"></a>
<b>deletion</b>
</td></tr>
<tr>
<td class="col-md-4"><code>deletion : Array&lt;number&gt;</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>list of deletions in the strain;</p>
<ul>
<li>if length 2, [0] is start of deletion and [1] is end</li>
<li>if length greater than 2, there are multiple deletions that start on even index positions and end on odd index position</li>
</ul>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description">
<b>Example : </b>
<i>80 bp deletion at the beginning of gene</i>
<pre class="language-html"><code class="language-html">[0, 80]
</code></pre>
</div>
<div class="io-description">
<b>Example : </b>
<i>150 bp deletion in the middle of the gene</i>
<pre class="language-html"><code class="language-html">[125, 275]
</code></pre>
</div>
<div class="io-description">
<b>Example : </b>
<i>Multiple deletions: 40 bp-90 bp and 200 bp-280 bp</i>
<pre class="language-html"><code class="language-html">[40, 90, 200, 280]
</code></pre>
</div>
</td>
</tr>
</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="comment"><td class="col-md-4">
<a name="module_Phage Model..comment"></a>
<b>comment</b>
</td></tr>
<tr>
<td class="col-md-4"><code>comment : String</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>User/scenario comment that describes this phage strain; makes it easier to remember details about each phage</p>
</div>
</td>
</tr>
</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="submitted"><td class="col-md-4">
<a name="module_Phage Model..submitted"></a>
<b>submitted</b>
</td></tr>
<tr>
<td class="col-md-4"><code>submitted : boolean</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>for <code>user</code> phage, is this a phage that should be graded by instructor</p>
<ul>
<li>used when scenario asks users to create a phage with a specific mutation and makes it easier for the instr to phage</li>
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
<tr id="parents"><td class="col-md-4">
<a name="module_Phage Model..parents"></a>
<b>parents</b>
</td></tr>
<tr>
<td class="col-md-4"><code>parents : [Array&lt;PHAGE&gt;](phage-model.html)</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>when phage created in the lab room on the plate, these are the parent(s) used during the experiment</p>
</div>
</td>
</tr>
</tbody>
</table>

  <table class="table table-sm table-bordered">
<tbody>
<tr id="numParents"><td class="col-md-4">
<a name="module_Phage Model..numParents"></a>
<b>numParents</b>
</td></tr>
<tr>
<td class="col-md-4"><code>numParents : number</code></td>
</tr>

<tr>
<td class="col-md-4">
<i></i>
<div class="io-description"><p>when phage created in lab room on the lab, number of parents used during the experiment</p>
<ul>
<li>used to know if a phage has a parent that was deleted from the DB</li>
</ul>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<i>Default Value :</i> <code>0</code>
</td>
</tr>

</tbody>
</table>
</section>
<section style="margin-top:50px;text-align:center;">
documentation generated with <a href="https://github.com/jsdoc2md/jsdoc-to-markdown/">JSDoc2md</a>
</section>
