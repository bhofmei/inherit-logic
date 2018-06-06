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
  <section>
  <a name="module_Scenario Model..label"></a>
    <h3 id=label>label</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>label : <code>string</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">human-readable label describing the scenario</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Scenario Model..fileCode"></a>
    <h3 id=fileCode>fileCode</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>fileCode : <code>string</code></code></td>
      </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Scenario Model..scenCode"></a>
    <h3 id=scenCode>scenCode</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>scenCode : <code>string</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">short string used to uniquely
identify each scenario via URL</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Scenario Model..defOfDiff"></a>
    <h3 id=defOfDiff>defOfDiff</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>defOfDiff : <code>number</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">relative degree of difficulty used to order the scenarios on the scenario page</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Scenario Model..mutationFreq"></a>
    <h3 id=mutationFreq>mutationFreq</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>mutationFreq : <code>number</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">chance creating a new frameshift mutation during an experiment</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Scenario Model..recombinationFreq"></a>
    <h3 id=recombinationFreq>recombinationFreq</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>recombinationFreq : <code>number</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">chance of single recombination when crossing two phage in an experiment</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Scenario Model..gcProb"></a>
    <h3 id=gcProb>gcProb</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>gcProb : <code>number</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">integer number for percent G and C's when creating the WT gene</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Scenario Model..minStops"></a>
    <h3 id=minStops>minStops</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>minStops : <code>number</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">minumum number of possible stop codons that would be created during frameshifts of a gene</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Scenario Model..intraMuteDist"></a>
    <h3 id=intraMuteDist>intraMuteDist</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>intraMuteDist : <code>Array&lt;number&gt;</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">mutations on the same phage are
between [0] and [1] distance apart when interMuteDist isn't set</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Scenario Model..interMuteDist"></a>
    <h3 id=interMuteDist>interMuteDist</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>interMuteDist : <code>number</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">minimum distance apart that
mutations should be for different phage of the same scenario; equals `-1` when unset</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Scenario Model..purpose"></a>
    <h3 id=purpose>purpose</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>purpose : <code>string</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">description of the goal of the scenario for users</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Scenario Model..relevance"></a>
    <h3 id=relevance>relevance</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>relevance : <code>String</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">description of why this scenario is important for learning</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Scenario Model..startingPoint"></a>
    <h3 id=startingPoint>startingPoint</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>startingPoint : <code>String</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">description of the phage
strains in the fridge when first created</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Scenario Model..referencePhage"></a>
    <h3 id=referencePhage>referencePhage</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>referencePhage : <code>Array&lt;String&gt;</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">each item is a phage to be created for the scenario when fridge created
- each item includes details about what mutations/deletions, if any, to include in the phage
- as a reference phage, mutation type is told to user</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Scenario Model..otherPhage"></a>
    <h3 id=otherPhage>otherPhage</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>otherPhage : <code>Array&lt;String&gt;</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">each item is a phage to be created for the scenario when fridge created
- each item includes details about what mutations/deletions, if any, to include in the phage
- as an other phage, mutation type is not told to user and discovering the mutation is often the puprose for the scenario</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
<section style="margin-top:50px;text-align:center;">
documentation generated with <a href="https://github.com/jsdoc2md/jsdoc-to-markdown/">JSDoc2md</a>
</section>
