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
<td class="col-md-4"><h6><b>Properties</b></h6></td>
</tr>
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
<section><h3>Properties</h3>  <table class="table table-sm table-bordered">
  <tbody>
    <tr id="courseNum"><td class="col-md-4">
      <a name="module_Course Model..courseNum"></a>
          <span class="modifier" style="background:#31708f;margin-right:10px;">REQUIRED</span>
          
      <b>courseNum</b>
      </td></tr>
    <tr>
      <td class="col-md-4"><code>courseNum : string</code></td>
    </tr>

      <tr>
        <td class="col-md-4">
          <i></i>
          <div class="io-description"><p>uniquely identifable course ID</p>
</div>
        </td>
      </tr>
  </tbody>
</table>

  <table class="table table-sm table-bordered">
  <tbody>
    <tr id="description"><td class="col-md-4">
      <a name="module_Course Model..description"></a>
      <b>description</b>
      </td></tr>
    <tr>
      <td class="col-md-4"><code>description : string</code></td>
    </tr>

      <tr>
        <td class="col-md-4">
          <i></i>
          <div class="io-description"><p>basic text description of the course</p>
</div>
        </td>
      </tr>
  </tbody>
</table>

  <table class="table table-sm table-bordered">
  <tbody>
    <tr id="instructors"><td class="col-md-4">
      <a name="module_Course Model..instructors"></a>
      <b>instructors</b>
      </td></tr>
    <tr>
      <td class="col-md-4"><code>instructors : [Array&lt;USER&gt;](user-model.html)</code></td>
    </tr>

      <tr>
        <td class="col-md-4">
          <i></i>
          <div class="io-description"><p>list of instructors for the course</p>
</div>
        </td>
      </tr>
  </tbody>
</table>
</section>
<section style="margin-top:50px;text-align:center;">
documentation generated with <a href="https://github.com/jsdoc2md/jsdoc-to-markdown/">JSDoc2md</a>
</section>
