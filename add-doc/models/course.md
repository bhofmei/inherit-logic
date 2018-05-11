<section>
  <h3 id="index">Index</h3>
  <table class="table table-sm table-bordered index-table">
    <tbody>
      <tr>
        <td class="col-md-4">
          <ul class="index-list">
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</section>
## Members

<dl>
<dt><a href="#courseNum">courseNum</a> : <code>string</code></dt>
<dd><p>name/number of course; cannot be blank
and must be unique</p>
</dd>
<dt><a href="#description">description</a> : <code>string</code></dt>
<dd><p>Description of the course</p>
</dd>
<dt><a href="#instructors">instructors</a> : <code><a href="#COURSE">Array.&lt;COURSE&gt;</a></code></dt>
<dd><p>list of instructors for the course; the array contains the object IDs of <a href="user.html">users</a></p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#COURSE">COURSE</a> : <code>Model</code></dt>
<dd><p>Courses are used to group students together to make
it easier for grading and to improve organization</p>
</dd>
</dl>

  <section>
  <a name="courseNum"></a>
    <h3 id=courseNum>courseNum</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>courseNum : <code>string</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">name/number of course; cannot be blank
and must be unique</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="description"></a>
    <h3 id=description>description</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>description : <code>string</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Description of the course</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="instructors"></a>
    <h3 id=instructors>instructors</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>instructors : [<code>Array.&lt;COURSE&gt;</code>](#COURSE)</code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">list of instructors for the course; the array contains the object IDs of [users]{@link user.html}</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="COURSE"></a>
    <h3 id=COURSE>COURSE</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>COURSE : <code>Model</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Courses are used to group students together to make
it easier for grading and to improve organization</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
<section style="margin-top:50px;text-align:center;">
documentation generated with <a href="https://github.com/jsdoc2md/jsdoc-to-markdown/">JSDoc2md</a>
</section>