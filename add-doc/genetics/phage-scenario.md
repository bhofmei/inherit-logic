  <ol class="breadcrumb">
    <li>Genetics</li>
  <li>Phage Scenario</li>
</ol>
  <p class="comment">
    <h3>Description</h3>
  </p>
  <p class="comment">
    Functions which handle creating  phage for different scenarios
  </p>
<section>
  <h3 id="index">Index</h3>
  <table class="table table-sm table-bordered index-table">
    <tbody>
      <tr>
        <td class="col-md-4">
          <ul class="index-list">
<li>
                <a href="#module_Phage Scenario.generateScenario">generateScenario</a>
              </li>
<li>
                <a href="#module_Phage Scenario.makeGene">makeGene</a>
              </li>
<li>
                <a href="#module_Phage Scenario.makePhage">makePhage</a>
              </li>
<li>
                <a href="#module_Phage Scenario.makeWTPhage">makeWTPhage</a>
              </li>
<li>
                <a href="#module_Phage Scenario.makeFrameshiftPhage">makeFrameshiftPhage</a>
              </li>
<li>
                <a href="#module_Phage Scenario.makeDeletionPhage">makeDeletionPhage</a>
              </li>
<li>
                <a href="#module_Phage Scenario..generateFrameshift">generateFrameshift</a>
              </li>
<li>
                <a href="#module_Phage Scenario..checkPhageFrameshift">checkPhageFrameshift</a>
              </li>
<li>
                <a href="#module_Phage Scenario..getNewSpot">getNewSpot</a>
              </li>
<li>
                <a href="#module_Phage Scenario..generateDeletion">generateDeletion</a>
              </li>
<li>
                <a href="#module_Phage Scenario..checkPhageDeletion">checkPhageDeletion</a>
              </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Phage Scenario.generateScenario"></a>
    <h3 id=generateScenario>generateScenario</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>generateScenario(scenario) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Generates all of the phage and other necessary info for a given scenario</div>
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
        <td>scenario</td><td><code>Object</code></td><td><p>parameters for the scenario; includes:</p>
<ul>
<li>mutationFreq (<code>number</code>): chance of mutation as decimal</li>
<li>recombinationFreq (<code>number</code>): chance of single recombination as decimal</li>
<li>gcProb (<code>number</code>): percent of G/C&#39;s to use in gene</li>
<li>minStops (<code>number</code>): minimum number of stop codons when out of frame</li>
<li>intraMuteDist (<code>number[]</code>)</li>
<li>interMuteDist (<code>number</code>)</li>
<li>referencePhage (<code>string[]</code>): descriptions of reference phage; known WT or mut</li>
<li>otherPhage (<code>string[]</code>): descriptions of non-reference phage; unknown WT or mut</li>
</ul>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code>    <div class="io-description">
    <p>all info needed for a new scenario</p>
<ul>
<li>strains (<code>Object[]</code>): list of strains</li>
<li>scenarioDetails (<code>Object</code>): scenario info needed for experiments later</li>
</ul>
</div>
</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Phage Scenario.makeGene"></a>
    <h3 id=makeGene>makeGene</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>makeGene(gcProb, minStops) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Make a WT gene - has no stop codons normally but has at least
`minStops` with frameshifts</div>
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
        <td>gcProb</td><td><code>number</code></td><td><p>GC probability (percent G/C vs A/T)</p>
</td>
      </tr><tr>
        <td>minStops</td><td><code>number</code></td><td><p>minimum number of stops for frameshifted gene</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code>    <div class="io-description">
    <p>the nucleotide sequence to be used; includes:</p>
<ul>
<li>wtGene (<code>string</code>): nucleic acids that consitute this gene</li>
<li>realStops (<code>number[]</code>): location of stop codons</li>
<li>frameStopList (<code>number[][]</code>): location and which frameshift the stop occurs</li>
</ul>
</div>
</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Phage Scenario.makePhage"></a>
    <h3 id=makePhage>makePhage</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>makePhage(phageDetails, strainNum, phageType, scenData) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Create a phage strain</div>
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
        <td>phageDetails</td><td><code>Object</code></td><td><p>phage config info (from scenario config)</p>
</td>
      </tr><tr>
        <td>strainNum</td><td><code>number</code></td><td><p>strain number</p>
</td>
      </tr><tr>
        <td>phageType</td><td><code>string</code></td><td><p>reference or unknown</p>
</td>
      </tr><tr>
        <td>scenData</td><td><code>Object</code></td><td><p>scenario parameters</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code>    <div class="io-description">
    <p>newly created strain</p>
<ul>
<li>phage (<code>Object</code>): has properties strainNum, phageType, mutationList, deletion, and comment</li>
<li>scenData (<code>Object</code>)</li>
</ul>
</div>
</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Phage Scenario.makeWTPhage"></a>
    <h3 id=makeWTPhage>makeWTPhage</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>makeWTPhage(phage, strainNum, phageType, scenData) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Create a WT phage - no mutations</div>
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
        <td>phage</td><td><code>Object</code></td><td><p>phage config info (from scenario config)</p>
</td>
      </tr><tr>
        <td>strainNum</td><td><code>number</code></td><td><p>strain number</p>
</td>
      </tr><tr>
        <td>phageType</td><td><code>string</code></td><td><p>reference or unknown</p>
</td>
      </tr><tr>
        <td>scenData</td><td><code>Object</code></td><td><p>computed scenario info</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code>    <div class="io-description">
    <p>newly crated phage strain</p>
<ul>
<li>phage (<code>Object</code>): has properties strainNum, phageType, mutationList, deletion, and comment</li>
<li>scenData (<code>Object</code>)</li>
</ul>
</div>
</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Phage Scenario.makeFrameshiftPhage"></a>
    <h3 id=makeFrameshiftPhage>makeFrameshiftPhage</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>makeFrameshiftPhage(phage, strainNum, phageType, scenData) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Generate a mutant phage strain that has at least 1 frameshift mutation</div>
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
        <td>phage</td><td><code>Object</code></td><td><p>phage config info (from scenario config)</p>
</td>
      </tr><tr>
        <td>strainNum</td><td><code>number</code></td><td><p>strain number</p>
</td>
      </tr><tr>
        <td>phageType</td><td><code>string</code></td><td><p>reference or unknown</p>
</td>
      </tr><tr>
        <td>scenData</td><td><code>Object</code></td><td><p>current scenario information; used to generate new, valid strain</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code>    <div class="io-description">
    <p>newly crated phage strain</p>
<ul>
<li>phage (<code>Object</code>): has properties strainNum, phageType, mutationList, deletion, and comment</li>
<li>scenData (<code>Object</code>)</li>
</ul>
</div>
</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Phage Scenario.makeDeletionPhage"></a>
    <h3 id=makeDeletionPhage>makeDeletionPhage</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>makeDeletionPhage(phage, strainNum, phageType, scenData) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Create a phage strain with a large deletion</div>
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
        <td>phage</td><td><code>Object</code></td><td><p>configuration for phage to generate from scenario</p>
</td>
      </tr><tr>
        <td>strainNum</td><td><code>number</code></td><td><p>strain number</p>
</td>
      </tr><tr>
        <td>phageType</td><td><code>string</code></td><td><p>reference or unknown</p>
</td>
      </tr><tr>
        <td>scenData</td><td><code>Object</code></td><td><p>configuration for current scenario</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code>    <div class="io-description">
    <p>newly crated phage strain</p>
<ul>
<li>phage (<code>Object</code>): has properties strainNum, phageType, mutationList, deletion, and comment</li>
<li>scenData (<code>Object</code>)</li>
</ul>
</div>
</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Phage Scenario..generateFrameshift"></a>
    <h3 class="text-info" id=generateFrameshift>generateFrameshift</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>generateFrameshift(shiftType, nShifts, readable, scenData) ⇒ <code>Array&lt;number&gt;</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Attempt to generate a single frameshift mutation</div>
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
        <td>shiftType</td><td><code>number</code></td><td><p>should it be insertion, deletion, or random</p>
</td>
      </tr><tr>
        <td>nShifts</td><td><code>number</code></td><td><p>number of shifts total for this phage</p>
</td>
      </tr><tr>
        <td>readable</td><td><code>string</code></td><td><p>should be gene be in frame or not</p>
</td>
      </tr><tr>
        <td>scenData</td><td><code>Object</code></td><td><p>current scenario data to ensure valid phage</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Array&lt;number&gt;</code>    <div class="io-description">
    <p>valid mutation(s) for this new phage or empty list if no valid mutation found</p>
</div>
</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Phage Scenario..checkPhageFrameshift"></a>
    <h3 class="text-info" id=checkPhageFrameshift>checkPhageFrameshift</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>checkPhageFrameshift(keyMutes, scenData) ⇒ <code>boolean</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Check that the potential frameshift(s) are valid given the
mutations in other phage in the scenario</div>
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
        <td>keyMutes</td><td><code>Array&lt;number&gt;</code></td><td><p>mutations to check</p>
</td>
      </tr><tr>
        <td>scenData</td><td><code>Object</code></td><td><p>current scenario data</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>boolean</code>    <div class="io-description">
    <p>is the frameshift valid?</p>
</div>
</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Phage Scenario..getNewSpot"></a>
    <h3 id=getNewSpot>getNewSpot</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>getNewSpot(lastMade, scenData) ⇒ <code>number</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Attempt to create a new mutation</div>
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
        <td>lastMade</td><td><code>number</code></td><td><p>the last mutation made</p>
</td>
      </tr><tr>
        <td>scenData</td><td><code>Object</code></td><td><p>current scenario configuration info</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>number</code>    <div class="io-description">
    <p>location of new frameshift mutation that isn&#39;t too close to other mutations</p>
</div>
</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Phage Scenario..generateDeletion"></a>
    <h3 id=generateDeletion>generateDeletion</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>generateDeletion(usedDeleteSpots) ⇒ <code>Array&lt;number&gt;</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Attempt to generate a deletion if we run out of preset deletion spots/lengths</div>
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
        <td>usedDeleteSpots</td><td><code>Array&lt;number&gt;</code></td><td><p>list of deletion spots already used</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Array&lt;number&gt;</code>    <div class="io-description">
    <p>new valid deletion if found or throws error</p>
</div>
</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Phage Scenario..checkPhageDeletion"></a>
    <h3 id=checkPhageDeletion>checkPhageDeletion</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>checkPhageDeletion(keyMutes, usedDeleteSpots) ⇒ <code>boolean</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Check that deletion is valid; far enough away from other deletions</div>
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
        <td>keyMutes</td><td><code>Array&lt;number&gt;</code></td><td><p>deletion to check</p>
</td>
      </tr><tr>
        <td>usedDeleteSpots</td><td><code>Array&lt;number&gt;</code></td><td><p>deletions already in play for scenario</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>boolean</code>    <div class="io-description">
    <p>is the deletion valid?</p>
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