  <ol class="breadcrumb">
    <li>Controller</li>
  <li>Scenario Controller</li>
</ol>
  <p class="comment">
    <h3>Description</h3>
  </p>
  <p class="comment">
    The Scenario-related controller functions
  </p>
<section>
  <h3 id="index">Index</h3>
  <table class="table table-sm table-bordered index-table">
    <tbody>
      <tr>
        <td class="col-md-4">
          <ul class="index-list">
<li>
                <a href="#module_Scenario Controller.list">list</a>
              </li>
<li>
                <a href="#module_Scenario Controller.read">read</a>
              </li>
<li>
                <a href="#module_Scenario Controller.scenarioByCode">scenarioByCode</a>
              </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Scenario Controller.list"></a>
    <h3 id=list>list</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>list(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#0F6AB4;margin-right:10px;">GET</span>

    <code>/api/cricket</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">List all of the sceanrios in order of degree of difficulty</div>
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
        <td>req</td><td><code>Object</code></td><td><p>Express request object</p>
</td>
      </tr><tr>
        <td>res</td><td><code>Object</code></td><td><p>Express response object</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code>    <div class="io-description">
    <p>json object to response</p>
</div>
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>500 Internal Server Error</code></td><td><p>On error, send error as <code>{message: error-message}</code></p>
</td>
    </tr><tr>
    <td><code>200 OK</code></td><td><p>Return list of scenarios
each scenario has properties <code>label</code>, <code>scenCode</code>, <code>purpose</code>, <code>startingPoint</code>, <code>relevance</code>, and <code>degOfDifficulty</code></p>
</td>
    </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Scenario Controller.read"></a>
    <h3 id=read>read</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>read(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#0F6AB4;margin-right:10px;">GET</span>

    <code>/api/cricket/:scenarioId</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Get the details about a specifc scenario</div>
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
        <td>req</td><td><code>Object</code></td><td><p>Express request object;</p>
</td>
      </tr><tr>
        <td>res</td><td><code>Object</code></td><td><p>Express response object</p>
</td>
      </tr>  </tbody>
</table>

</div>
              <div class="io-description">
                <b>Request Parameters :</b> <table class="table table-condensed">
  <thead>
    <tr>
        <th>Param</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td>scenario</td><td><code><a href="../models/scenario-model.html">SCENARIO</a></code></td><td><p>current scenario from <a href="@link scenario-controller.html#scenarioByCode">scenarioByCode</a> with scenCode <code>scenarioId</code></p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code>    <div class="io-description">
    <p>returns json object of scenario to response with properties <code>label</code>, <code>scenCode</code>, <code>purpose</code>, <code>startingPoint</code>, <code>relevance</code>, and <code>degOfDiff</code></p>
</div>
</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Scenario Controller.scenarioByCode"></a>
    <h3 class="text-info" id=scenarioByCode>scenarioByCode</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>scenarioByCode(req, res, next, id) ⇒ <code>function</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
    <code>:scenarioId</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Retreives a scenario from a scenario code</div>
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
        <td>req</td><td><code>Object</code></td><td><p>Express request object</p>
</td>
      </tr><tr>
        <td>res</td><td><code>Object</code></td><td><p>Express response object</p>
</td>
      </tr><tr>
        <td>next</td><td><code>function</code></td><td><p>next middleware to follow</p>
</td>
      </tr><tr>
        <td>id</td><td><code>String</code></td><td><p>scenario code from URL</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>function</code>    <div class="io-description">
    <ul>
<li>next middleware</li>
</ul>
</div>
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>next(error)</code></td><td><p>On error, pass the error to next middleware</p>
</td>
    </tr><tr>
    <td><code>next(&#x27;Failed to load scenario id&#x27;)</code></td><td><ul>
<li>If scenario doesn&#39;t exist, pass message to next middleware</li>
</ul>
</td>
    </tr><tr>
    <td><code>next()</code></td><td><ul>
<li>if successful, set request <code>scenario</code> and go to next middleware</li>
</ul>
</td>
    </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
<section style="margin-top:50px;text-align:center;">
documentation generated with <a href="https://github.com/jsdoc2md/jsdoc-to-markdown/">JSDoc2md</a>
</section>