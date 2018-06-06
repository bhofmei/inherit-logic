  <ol class="breadcrumb">
    <li>Model</li>
  <li>Course Model</li>
</ol>
  <p class="comment">
    <h3>Description</h3>
  </p>
  <p class="comment">
    Database schema for course
  </p>
<section>
  <h3 id="index">Index</h3>
  <table class="table table-sm table-bordered index-table">
    <tbody>
      <tr>
        <td class="col-md-4">
          <ul class="index-list">
<li>
                <a href="#module_Course Model..courseNum">courseNum</a>
              </li>
<li>
                <a href="#module_Course Model..description">description</a>
              </li>
<li>
                <a href="#module_Course Model..instructors">instructors</a>
              </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Course Model..courseNum"></a>
    <h3 id=courseNum>courseNum</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>courseNum : <code>string</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">uniquely identifable course ID</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Course Model..description"></a>
    <h3 id=description>description</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>description : <code>string</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">basic text description of the course</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Course Model..instructors"></a>
    <h3 id=instructors>instructors</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>instructors : [<code>Array&lt;USER&gt;</code>](user-model.html)</code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">list of instructors for the course</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
<section style="margin-top:50px;text-align:center;">
documentation generated with <a href="https://github.com/jsdoc2md/jsdoc-to-markdown/">JSDoc2md</a>
</section>
