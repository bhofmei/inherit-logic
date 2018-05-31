  <ol class="breadcrumb">
    <li>Genetics</li>
  <li>Phage Experiments</li>
</ol>
  <p class="comment">
    <h3>Description</h3>
  </p>
  <p class="comment">
    Functions which perform experiments on the phage strains
  </p>
<section>
  <h3 id="index">Index</h3>
  <table class="table table-sm table-bordered index-table">
    <tbody>
      <tr>
        <td class="col-md-4">
          <ul class="index-list">
<li>
                <a href="#module_Phage Experiments.recombine">recombine</a>
              </li>
<li>
                <a href="#module_Phage Experiments.mutagenize">mutagenize</a>
              </li>
<li>
                <a href="#module_Phage Experiments.._validRecombDel">_validRecombDel</a>
              </li>
<li>
                <a href="#module_Phage Experiments.._copyDeletion">_copyDeletion</a>
              </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</section>
      <section>
  <a name="module_Phage Experiments.recombine"></a>
<h3 id=recombine>recombine</h3>
<table class="table table-sm table-bordered">
  <tbody>
    <tr>
      <td class="col-md-4"><code>recombine(phageGeno1, phageGeno2, numXOver, numToDo) ⇒ Array&lt;Object&gt;</code></td>
    </tr>
<tr>
        <td class="col-md-4"><div class="io-description">Recombine 2 strains with specified number of crossovers and number of offspring</div></td>
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
    <td>phageGeno1</td><td>Object</td><td><p>genotype of phage 1 (<code>shifts</code> and <code>deletion</code>)</p>
</td>
  </tr><tr>
    <td>phageGeno2</td><td>Object</td><td><p>genotype of phage 2 (<code>shifts</code> and <code>deletion</code>)</p>
</td>
  </tr><tr>
    <td>numXOver</td><td>number</td><td><p>number of crossovers</p>
</td>
  </tr><tr>
    <td>numToDo</td><td>number</td><td><p>how many offspring to create</p>
</td>
  </tr></tbody>
</table>
</div>
</td>
      </tr>
<tr>
      <td class="col-md-4">
<div class="io-description"><b>Returns : </b> Array&lt;Object&gt;    <div class="io-description">
    <p>list of recombined offspring genotypes (<code>shifts</code> and <code>deletion</code>)</p>
</div>
</div>
</td>
    </tr>
</tbody>
  </table>
</section>
      <section>
  <a name="module_Phage Experiments.mutagenize"></a>
<h3 id=mutagenize>mutagenize</h3>
<table class="table table-sm table-bordered">
  <tbody>
    <tr>
      <td class="col-md-4"><code>mutagenize(inList, numDesired) ⇒ Array&lt;Array&lt;number&gt;&gt;</code></td>
    </tr>
<tr>
        <td class="col-md-4"><div class="io-description">Create `N` number of mutants

checks that mutations aren't too close together on the chromosome</div></td>
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
    <td>inList</td><td>Array&lt;number&gt;</td><td><p>mutations (shifts) of phage to mutagenize</p>
</td>
  </tr><tr>
    <td>numDesired</td><td>number</td><td><p>number of new mutants to generate</p>
</td>
  </tr></tbody>
</table>
</div>
</td>
      </tr>
<tr>
      <td class="col-md-4">
<div class="io-description"><b>Returns : </b> Array&lt;Array&lt;number&gt;&gt;    <div class="io-description">
    <p>2D array of new mutants;
Dimensions: <code>numDesired</code> x <code>inList.length+1</code></p>
</div>
</div>
</td>
    </tr>
</tbody>
  </table>
</section>
      <section>
  <a name="module_Phage Experiments.._validRecombDel"></a>
<h3 class="text-info" id=_validRecombDel>_validRecombDel</h3>
<table class="table table-sm table-bordered">
  <tbody>
    <tr>
      <td class="col-md-4"><code>_validRecombDel(checkPos, delList) ⇒ boolean</code></td>
    </tr>
<tr>
        <td class="col-md-4"><div class="io-description">check if recombination position is within a deletion</div></td>
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
    <td>checkPos</td><td>number</td><td><p>position to check</p>
</td>
  </tr><tr>
    <td>delList</td><td>Array&lt;number&gt;</td><td><p>list of deletions for phage</p>
</td>
  </tr></tbody>
</table>
</div>
</td>
      </tr>
<tr>
      <td class="col-md-4">
<div class="io-description"><b>Returns : </b> boolean    <div class="io-description">
    <p><code>true</code> if recombination is valid (not in a deletion); <code>false</code> otherwise</p>
</div>
</div>
</td>
    </tr>
</tbody>
  </table>
</section>
      <section>
  <a name="module_Phage Experiments.._copyDeletion"></a>
<h3 class="text-info" id=_copyDeletion>_copyDeletion</h3>
<table class="table table-sm table-bordered">
  <tbody>
    <tr>
      <td class="col-md-4"><code>_copyDeletion(sPos, ePos, delList) ⇒ Array&lt;number&gt;</code></td>
    </tr>
<tr>
        <td class="col-md-4"><div class="io-description">Create a copy of deletions within the start and end positions of
chromosome chunk to be copied</div></td>
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
    <td>sPos</td><td>number</td><td><p>start position of chrosomome chunk to copy</p>
</td>
  </tr><tr>
    <td>ePos</td><td>number</td><td><p>end position of chromosome chunk to copy</p>
</td>
  </tr><tr>
    <td>delList</td><td>Array&lt;number&gt;</td><td><p>list of deletions for this phage</p>
</td>
  </tr></tbody>
</table>
</div>
</td>
      </tr>
<tr>
      <td class="col-md-4">
<div class="io-description"><b>Returns : </b> Array&lt;number&gt;    <div class="io-description">
    <p>copy of the deletions</p>
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
