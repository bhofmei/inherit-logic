  <ol class="breadcrumb">
<li>Genetics</li>
<li>Phage Logic</li>
</ol>
<p class="comment">
<h3>Description</h3>
</p>
<p class="comment">
Functions which compute frameshift/phenotype type
</p>
<section>
<h3 id="index">Index</h3>
<table class="table table-sm table-bordered index-table">
<tbody>
<tr>
<td class="col-md-4">
<ul class="index-list">
<li>
<a href="#module_Phage Logic.doPheno">doPheno</a>
</li>
<li>
<a href="#module_Phage Logic.getFrames">getFrames</a>
</li>
</ul>
</td>
</tr>
</tbody>
</table>
</section>
  <section>
<a name="module_Phage Logic.doPheno"></a>
<h3 id=doPheno>doPheno</h3>
<table class="table table-sm table-bordered">
<tbody>
<tr>
<td class="col-md-4"><code>doPheno(mutantList, stopList) ⇒ string</code></td>
</tr>
<tr>
<td class="col-md-4"><div class="io-description">Determine the phenotype of a phage based on the list of mutations</div></td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description">
<b>Parameters :</b> <table class="params">
<thead>
<tr>
<td>Param</td>
<td>Type</td>
<td>Description</td>
</tr>
</thead>
<tbody>
<tr>
<td>mutantList</td><td>Array&lt;number&gt;</td><td><p>mutations for this phage strain</p>
</td>
</tr><tr>
<td>stopList</td><td>Array&lt;number&gt;</td><td><p>locations of stop codons for varying frameshifts</p>
</td>
</tr></tbody>
</table>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description"><b>Returns : </b> string<div class="io-description">
<p>phenotype; one of <code>&quot;allTranslated&quot;</code>, <code>&quot;frameShifted&quot;</code>, <code>&quot;deleted&quot;</code>, or <code>&quot;stopped&quot;</code></p>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</section>
  <section>
<a name="module_Phage Logic.getFrames"></a>
<h3 id=getFrames>getFrames</h3>
<table class="table table-sm table-bordered">
<tbody>
<tr>
<td class="col-md-4"><code>getFrames(whoSays, mutantList, stopList) ⇒ Object</code></td>
</tr>
<tr>
<td class="col-md-4"><div class="io-description">Get the frame shift for a mutant</div></td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description">
<b>Parameters :</b> <table class="params">
<thead>
<tr>
<td>Param</td>
<td>Type</td>
<td>Description</td>
</tr>
</thead>
<tbody>
<tr>
<td>whoSays</td><td>string</td><td><p>who is asking; not used</p>
</td>
</tr><tr>
<td>mutantList</td><td>Array&lt;number&gt;</td><td><p>mutatations in this phage</p>
</td>
</tr><tr>
<td>stopList</td><td>Array&lt;number&gt;</td><td><p>locations of stop codons depending on framshift</p>
</td>
</tr></tbody>
</table>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description"><b>Returns : </b> Object<div class="io-description">
<p>includes <code>frame</code> (frameshift number of gene as a whole) and <code>frameList</code> (frameshift cummulatively for each frame)</p>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</section>
<section style="margin-top:50px;text-align:center;">
documentation generated with <a href="https://github.com/jsdoc2md/jsdoc-to-markdown/">JSDoc2md</a>
</section>
