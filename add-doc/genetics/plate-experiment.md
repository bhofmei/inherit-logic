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
                <a href="#module_Plate Exeriment..computeRecombParameters">computeRecombParameters</a>
              </li>
<li>
                <a href="#module_Plate Exeriment..computeNumOffspring">computeNumOffspring</a>
              </li>
<li>
                <a href="#module_Plate Exeriment..shufflePlaqueList">shufflePlaqueList</a>
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
        <td class="col-md-4"><code>createPlate(phage1, phage2, lawnType, speciels, capacity, whoCalled, scenData) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Creates the plate</div>
          </td>
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
        <td>phage1</td><td><code>Object</code></td><td><p>first phage in the cross</p>
</td>
      </tr><tr>
        <td>phage2</td><td><code>Object</code> | <code>null</code></td><td><p>second phage in the cross or null if not crossing</p>
</td>
      </tr><tr>
        <td>lawnType</td><td><code>string</code></td><td><p>E. coli bacteria type</p>
</td>
      </tr><tr>
        <td>speciels</td><td><code>Object</code></td><td><p>other special parameterss (not used)</p>
</td>
      </tr><tr>
        <td>capacity</td><td><code>number</code></td><td><p>max number of phage allowed on the plate</p>
</td>
      </tr><tr>
        <td>whoCalled</td><td><code>string</code></td><td><p>location/room asking to generate the plate</p>
</td>
      </tr><tr>
        <td>scenData</td><td><code>Object</code></td><td><p>scenario information</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code>    <div class="io-description">
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
        <td class="col-md-4"><code>createPlatePhage() ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Create the genotypes and strains for this plate</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code>    <div class="io-description">
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
        <td class="col-md-4"><code>generatePlate() ⇒ <code>object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Phenotypes the plate phage and ensures not too many phage on the plate

This function is only used in the lab room</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>object</code>    <div class="io-description">
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
  <a name="module_Plate Exeriment..computeRecombParameters"></a>
    <h3 class="text-info" id=computeRecombParameters>computeRecombParameters</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>computeRecombParameters(f1, f2, p, n) ⇒ <code>Array&lt;number&gt;</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Compute the recombination parameters</div>
          </td>
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
        <td>f1</td><td><code>number</code></td><td><p>fraction of phage1</p>
</td>
      </tr><tr>
        <td>f2</td><td><code>number</code></td><td><p>fraction of phage2</p>
</td>
      </tr><tr>
        <td>p</td><td><code>number</code></td><td><p>recombination probability</p>
</td>
      </tr><tr>
        <td>n</td><td><code>number</code></td><td><p>total number of offspring expected</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Array&lt;number&gt;</code>    <div class="io-description">
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
  <a name="module_Plate Exeriment..computeNumOffspring"></a>
    <h3 class="text-info" id=computeNumOffspring>computeNumOffspring</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>computeNumOffspring(n1, n2, nR, mutFreq, recFreq, identical) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Compute the expected number of offspring</div>
          </td>
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
        <td>n1</td><td><code>number</code></td><td><p>number of input for phage1</p>
</td>
      </tr><tr>
        <td>n2</td><td><code>number</code></td><td><p>number of input for phage2</p>
</td>
      </tr><tr>
        <td>nR</td><td><code>number</code></td><td><p>ratio of phage1 to phage2</p>
</td>
      </tr><tr>
        <td>mutFreq</td><td><code>number</code></td><td><p>mutation frequency for the scenario</p>
</td>
      </tr><tr>
        <td>recFreq</td><td><code>number</code></td><td><p>frequency of recombination for scenario</p>
</td>
      </tr><tr>
        <td>identical</td><td><code>boolean</code></td><td><p>are the two phage identical</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code>    <div class="io-description">
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
  <a name="module_Plate Exeriment..shufflePlaqueList"></a>
    <h3 class="text-info" id=shufflePlaqueList>shufflePlaqueList</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>shufflePlaqueList(inList, numInput) ⇒ <code>Array&lt;number&gt;</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">shuffle strains; force mutants/recombinants to be towards the front of the list</div>
          </td>
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
        <td>inList</td><td><code>Array&lt;number&gt;</code></td><td><p>strain list to shuffle</p>
</td>
      </tr><tr>
        <td>numInput</td><td><code>number</code></td><td><p>number of input/parent phage</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Array&lt;number&gt;</code>    <div class="io-description">
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
