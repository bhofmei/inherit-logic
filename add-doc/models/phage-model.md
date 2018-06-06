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
  <section>
  <a name="module_Phage Model..strainNum"></a>
    <h3 id=strainNum>strainNum</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>strainNum : <code>number</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">location of the phage in the fridge; note this is 0-based but fridge interface is 1-based</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Phage Model..owner"></a>
    <h3 id=owner>owner</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>owner : [<code>USER</code>](user-model.html)</code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">user who this phage belongs to</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Phage Model..scenarioOrigin"></a>
    <h3 id=scenarioOrigin>scenarioOrigin</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>scenarioOrigin : [<code>SCENARIO</code>](scenario-model.html)</code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">scenario that
this phage was created for</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Phage Model..phageType"></a>
    <h3 id=phageType>phageType</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>phageType : <code>String</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">description of who created phage; must be one of `reference`, `unknown` or `user`</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Phage Model..mutationList"></a>
    <h3 id=mutationList>mutationList</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>mutationList : <code>Array&lt;number&gt;</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">list of frameshift mutations
- for each mutation, absolute value of number indicates position in the gene
- positive/negative number indicates plus/minus frameshift</div>
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
</section>
  <section>
  <a name="module_Phage Model..deletion"></a>
    <h3 id=deletion>deletion</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>deletion : <code>Array&lt;number&gt;</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">list of deletions in the strain;
- if length 2, [0] is start of deletion and [1] is end
- if length greater than 2, there are multiple deletions that start on even index positions and end on odd index position</div>
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
</section>
  <section>
  <a name="module_Phage Model..comment"></a>
    <h3 id=comment>comment</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>comment : <code>String</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">User/scenario comment that describes this phage strain; makes it easier to remember details about each phage</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Phage Model..submitted"></a>
    <h3 id=submitted>submitted</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>submitted : <code>boolean</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">for `user` phage, is this a phage that should be graded by instructor
- used when scenario asks users to create a phage with a specific mutation and makes it easier for the instr to phage</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Phage Model..parents"></a>
    <h3 id=parents>parents</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>parents : [<code>Array&lt;PHAGE&gt;</code>](phage-model.html)</code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">when phage created in the lab room on the plate, these are the parent(s) used during the experiment</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Phage Model..numParents"></a>
    <h3 id=numParents>numParents</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>numParents : <code>number</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">when phage created in lab room on the lab, number of parents used during the experiment
   - used to know if a phage has a parent that was deleted from the DB</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
<section style="margin-top:50px;text-align:center;">
documentation generated with <a href="https://github.com/jsdoc2md/jsdoc-to-markdown/">JSDoc2md</a>
</section>
