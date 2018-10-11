  <ol class="breadcrumb">
<li>Genetics</li>
<li>Plate Exeriment</li>
</ol>
<p class="comment">
<h3>Description</h3>
</p>
<p class="comment">
Functions which handle creating plates of phage crosses
</p>
<section>
<h3 id="index">Index</h3>
<table class="table table-sm table-bordered index-table">
<tbody>
<tr>
<td class="col-md-4">
<ul class="index-list">
<li>
<a href="#module_Plate Exeriment.createPlate">createPlate</a>
</li>
<li>
<a href="#module_Plate Exeriment.createPlatePhage">createPlatePhage</a>
</li>
<li>
<a href="#module_Plate Exeriment.generatePlate">generatePlate</a>
</li>
<li>
<a href="#module_Plate Exeriment.._computeRecombParameters">_computeRecombParameters</a>
</li>
<li>
<a href="#module_Plate Exeriment.._computeNumOffspring">_computeNumOffspring</a>
</li>
<li>
<a href="#module_Plate Exeriment.._shufflePlaqueList">_shufflePlaqueList</a>
</li>
</ul>
</td>
</tr>
</tbody>
</table>
</section>
  <section>
<a name="module_Plate Exeriment.createPlate"></a>
<h3 id=createPlate>createPlate</h3>
<table class="table table-sm table-bordered">
<tbody>
<tr>
<td class="col-md-4"><code>createPlate(phage1, phage2, lawnType, specials, capacity, whoCalled, scenData) ⇒ Object</code></td>
</tr>
<tr>
<td class="col-md-4"><div class="io-description">Creates the lab room plate

Only used in the lab room</div></td>
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
<td>phage1</td><td>Object</td><td><p>first phage in the cross</p>
</td>
</tr><tr>
<td>phage2</td><td>Object | null</td><td><p>second phage in the cross or null if not crossing</p>
</td>
</tr><tr>
<td>lawnType</td><td>string</td><td><p>E. coli bacteria type <code>&quot;B&quot;</code> or <code>&quot;K&quot;</code></p>
</td>
</tr><tr>
<td>specials</td><td>Object</td><td><p>other special parameters (not used)</p>
</td>
</tr><tr>
<td>capacity</td><td>number</td><td><p>max number of plaques allowed on the plate</p>
</td>
</tr><tr>
<td>whoCalled</td><td>string</td><td><p>location/room asking to generate the plate</p>
</td>
</tr><tr>
<td>scenData</td><td>Object</td><td><p>scenario information</p>
</td>
</tr></tbody>
</table>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description"><b>Returns : </b> Object<div class="io-description">
<p>new plate</p>
<ul>
<li>full (<code>boolean</code>): plate over capacity?</li>
<li>smallPlaque (<code>number[]</code>): individual small plaques; number is index of genotype in <em>genotypes</em> list</li>
<li>largePlaque (<code>number[]</code>): individual large plaques, number is index of genotype in <em>genotypes</em> list</li>
<li>genotypes (<code>number[][]</code>): list of genotypes for this plate</li>
<li>parents (<code>string[]</code>): ids of input phage</li>
</ul>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</section>
  <section>
<a name="module_Plate Exeriment.createPlatePhage"></a>
<h3 id=createPlatePhage>createPlatePhage</h3>
<table class="table table-sm table-bordered">
<tbody>
<tr>
<td class="col-md-4"><code>createPlatePhage() ⇒ Object</code></td>
</tr>
<tr>
<td class="col-md-4"><div class="io-description">Create the genotypes and strains for this plate

Used by both the lab room and plexer room</div></td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description"><b>Returns : </b> Object<div class="io-description">
<p>phage for this plate</p>
<ul>
<li>genoList (): list of genotypes</li>
<li>strainList (<code>number[]</code>): list of indices corresponding to genoList</li>
<li>parents (<code>string</code>): ID&#39;s for original phage used to create plate</li>
</ul>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</section>
  <section>
<a name="module_Plate Exeriment.generatePlate"></a>
<h3 id=generatePlate>generatePlate</h3>
<table class="table table-sm table-bordered">
<tbody>
<tr>
<td class="col-md-4"><code>generatePlate() ⇒ object</code></td>
</tr>
<tr>
<td class="col-md-4"><div class="io-description">Phenotypes the plate phage and ensures not too many phage on the plate

This function is only used in the lab room</div></td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description"><b>Returns : </b> object<div class="io-description">
<p>representation of plate</p>
<ul>
<li>full (<code>boolean</code>): plate over capacity?</li>
<li>smallPlaque (<code>number[]</code>): individual small plaques; number is index of genotype in <em>genotypes</em> list</li>
<li>largePlaque (<code>number[]</code>): individual large plaques; number is index of genotype in <em>genotypes</em> list</li>
<li>genotypes</li>
</ul>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</section>
  <section>
<a name="module_Plate Exeriment.._computeRecombParameters"></a>
<h3 class="text-info" id=_computeRecombParameters>_computeRecombParameters</h3>
<table class="table table-sm table-bordered">
<tbody>
<tr>
<td class="col-md-4"><code>_computeRecombParameters(f1, f2, p, n) ⇒ Array&lt;number&gt;</code></td>
</tr>
<tr>
<td class="col-md-4"><div class="io-description">Compute the recombination parameters</div></td>
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
<td>f1</td><td>number</td><td><p>fraction of phage1</p>
</td>
</tr><tr>
<td>f2</td><td>number</td><td><p>fraction of phage2</p>
</td>
</tr><tr>
<td>p</td><td>number</td><td><p>recombination probability</p>
</td>
</tr><tr>
<td>n</td><td>number</td><td><p>total number of offspring expected</p>
</td>
</tr></tbody>
</table>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description"><b>Returns : </b> Array&lt;number&gt;<div class="io-description">
<ul>
<li>number of single, double, and triple recombinants to create</li>
</ul>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</section>
  <section>
<a name="module_Plate Exeriment.._computeNumOffspring"></a>
<h3 class="text-info" id=_computeNumOffspring>_computeNumOffspring</h3>
<table class="table table-sm table-bordered">
<tbody>
<tr>
<td class="col-md-4"><code>_computeNumOffspring(n1, n2, nR, mutFreq, recFreq, identical) ⇒ Object</code></td>
</tr>
<tr>
<td class="col-md-4"><div class="io-description">Compute the expected number of offspring</div></td>
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
<td>n1</td><td>number</td><td><p>number of input for phage1</p>
</td>
</tr><tr>
<td>n2</td><td>number</td><td><p>number of input for phage2</p>
</td>
</tr><tr>
<td>nR</td><td>number</td><td><p>ratio of phage1 to phage2</p>
</td>
</tr><tr>
<td>mutFreq</td><td>number</td><td><p>mutation frequency for the scenario</p>
</td>
</tr><tr>
<td>recFreq</td><td>number</td><td><p>frequency of recombination for scenario</p>
</td>
</tr><tr>
<td>identical</td><td>boolean</td><td><p>are the two phage identical</p>
</td>
</tr></tbody>
</table>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description"><b>Returns : </b> Object<div class="io-description">
<p>numbers/types of offspring to create</p>
<ul>
<li>numOffspring (<code>number</code>): number of offspring aiming for</li>
<li>total (<code>number</code>): actual number of offspring to be generated</li>
<li>numGeno (<code>number[]</code>): number of each parental geonotype</li>
<li>numMuts (<code>number[]</code>): number of mutants for each parental genotype</li>
<li>numRecomb (<code>number[]</code>): number of single, double, and triple recomb</li>
</ul>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</section>
  <section>
<a name="module_Plate Exeriment.._shufflePlaqueList"></a>
<h3 class="text-info" id=_shufflePlaqueList>_shufflePlaqueList</h3>
<table class="table table-sm table-bordered">
<tbody>
<tr>
<td class="col-md-4"><code>_shufflePlaqueList(inList, numInput) ⇒ Array&lt;number&gt;</code></td>
</tr>
<tr>
<td class="col-md-4"><div class="io-description">shuffle strains; force mutants/recombinants to be towards the front of the list</div></td>
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
<td>inList</td><td>Array&lt;number&gt;</td><td><p>strain list to shuffle</p>
</td>
</tr><tr>
<td>numInput</td><td>number</td><td><p>number of input/parent phage</p>
</td>
</tr></tbody>
</table>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description"><b>Returns : </b> Array&lt;number&gt;<div class="io-description">
<p>shuffled strain list</p>
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
