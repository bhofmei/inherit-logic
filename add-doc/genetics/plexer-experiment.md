  <ol class="breadcrumb">
    <li>Genetics</li>
  <li>Plexer Exeriment</li>
</ol>
  <p class="comment">
    <h3>Description</h3>
  </p>
  <p class="comment">
    Functions which handle creating plexer plates
  </p>
<section>
  <h3 id="index">Index</h3>
  <table class="table table-sm table-bordered index-table">
    <tbody>
      <tr>
        <td class="col-md-4">
          <ul class="index-list">
<li>
                <a href="#module_Plexer Exeriment.createPlexerPlate">createPlexerPlate</a>
              </li>
<li>
                <a href="#module_Plexer Exeriment.generatePlexerPlate">generatePlexerPlate</a>
              </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</section>
      <section>
  <a name="module_Plexer Exeriment.createPlexerPlate"></a>
<h3 id=createPlexerPlate>createPlexerPlate</h3>
<table class="table table-sm table-bordered">
  <tbody>
    <tr>
      <td class="col-md-4"><code>createPlexerPlate(rowPhage, colPhage, lawnType, special, capacity, whoCalled, scenData) ⇒ Object</code></td>
    </tr>
<tr>
        <td class="col-md-4"><div class="io-description">Creates the plexer results

Only used in the plexer room</div></td>
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
    <td>rowPhage</td><td>Array&lt;Object&gt;</td><td><p>list of input phage representing the rows</p>
</td>
  </tr><tr>
    <td>colPhage</td><td>Array&lt;Object&gt;</td><td><p>list of input phage representing the columns</p>
</td>
  </tr><tr>
    <td>lawnType</td><td>string</td><td><p>E. coli bacteria type; <code>&quot;B&quot;</code> or <code>&quot;K&quot;</code></p>
</td>
  </tr><tr>
    <td>special</td><td>Object</td><td><p>other parameters; not used</p>
</td>
  </tr><tr>
    <td>capacity</td><td>number</td><td><p>maximum number of phage per plate</p>
</td>
  </tr><tr>
    <td>whoCalled</td><td>string</td><td><p>location asking to create the plexer</p>
</td>
  </tr><tr>
    <td>scenData</td><td>Object</td><td><p>current scenario data</p>
</td>
  </tr></tbody>
</table>
</div>
</td>
      </tr>
<tr>
      <td class="col-md-4">
<div class="io-description"><b>Returns : </b> Object    <div class="io-description">
    <p>plexer results; 2D array (but as an object) where each cell is a &quot;plate&quot; that has</p>
<ul>
<li>full (<code>boolean</code>): plate over capacity?</li>
<li>smallPlaque (<code>number</code>): number of small plaque on the plate</li>
<li>largePlaque (<code>number</code>): number of large plaque on the plate</li>
</ul>
</div>
</div>
</td>
    </tr>
</tbody>
  </table>
</section>
      <section>
  <a name="module_Plexer Exeriment.generatePlexerPlate"></a>
<h3 id=generatePlexerPlate>generatePlexerPlate</h3>
<table class="table table-sm table-bordered">
  <tbody>
    <tr>
      <td class="col-md-4"><code>generatePlexerPlate(lawnTypeStr, genoList, strainList, capacity, scenData) ⇒ Object</code></td>
    </tr>
<tr>
        <td class="col-md-4"><div class="io-description">Phenotype the phage and format results for front-end

Only used by the plexer room</div></td>
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
    <td>lawnTypeStr</td><td>string</td><td><p>E. coli bacteria type; <code>&quot;B&quot;</code> or <code>&quot;K&quot;</code></p>
</td>
  </tr><tr>
    <td>genoList</td><td>Array&lt;number&gt;</td><td><p>list of genotypes on the plate</p>
</td>
  </tr><tr>
    <td>strainList</td><td>Array&lt;number&gt;</td><td><p>list of strains which is the index to the genotype</p>
</td>
  </tr><tr>
    <td>capacity</td><td>number</td><td><p>capacity of each plexer plate</p>
</td>
  </tr><tr>
    <td>scenData</td><td>Object</td><td><p>current scenario data</p>
</td>
  </tr></tbody>
</table>
</div>
</td>
      </tr>
<tr>
      <td class="col-md-4">
<div class="io-description"><b>Returns : </b> Object    <div class="io-description">
    <ul>
<li>results for this single plexer plate</li>
<li>full (<code>boolean</code>): is plate over capacity</li>
<li>smallPlaque (<code>number</code>): number of small plaque on plate</li>
<li>largePlaque (<code>number</code>): number of large plaque on plate</li>
</ul>
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
