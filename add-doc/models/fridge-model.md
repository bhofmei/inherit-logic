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
  <section>
  <a name="module_Fridge Model..owner"></a>
    <h3 id=owner>owner</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>owner : [<code>USER</code>](user-model.html)</code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">user who owns the fridge</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Fridge Model..scenario"></a>
    <h3 id=scenario>scenario</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>scenario : [<code>SCENARIO</code>](scenario-model.html)</code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">scenario the fridge is for</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Fridge Model..accessGranted"></a>
    <h3 id=accessGranted>accessGranted</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>accessGranted : <code>boolean</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">has access been granted by instructor
- when `false`, phage strains are the same for all users
- when `true`, phage are generated using random numbers</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Fridge Model..strains"></a>
    <h3 id=strains>strains</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>strains : [<code>Array&lt;PHAGE&gt;</code>](phage-model.html)</code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">list of phage strains
in the fridge</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Fridge Model..scenarioDetails"></a>
    <h3 id=scenarioDetails>scenarioDetails</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>scenarioDetails : <code>String</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">- stringified object of the scenario details generated when
the fridge was created and is needed for performing
experiments
- includes `interMuteDist`, `intraMuteDist`, `mutationFreq`, `recombinationFreq`,
`deleteSizes`, `deleteSpots`, `usedDeleteSpots`,
`usedShiftSpots`, `wtGene`, `realStops`, `framesStopList`</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Fridge Model..guesses"></a>
    <h3 id=guesses>guesses</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>guesses : <code>String</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">stringified object of user's
guesses for locations of deletions where the key is the
strain number of the guess and the value is an array of
boolean values indicating if guessed a deletion</div>
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
