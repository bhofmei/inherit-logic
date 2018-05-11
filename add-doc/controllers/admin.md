  <ol class="breadcrumb">
    <li>Controller</li>
  <li>Admin Controller</li>
</ol>
  <p class="comment">
    <h3>Description</h3>
  </p>
  <p class="comment">
    The Admin-related controller functions
  </p>
<section>
  <h3 id="index">Index</h3>
  <table class="table table-sm table-bordered index-table">
    <tbody>
      <tr>
        <td class="col-md-4">
          <ul class="index-list">
<li>
                <a href="#module_Admin Controller.listUsers">listUsers</a>
              </li>
<li>
                <a href="#module_Admin Controller.getUser">getUser</a>
              </li>
<li>
                <a href="#module_Admin Controller.deleteUser">deleteUser</a>
              </li>
<li>
                <a href="#module_Admin Controller.setRole">setRole</a>
              </li>
<li>
                <a href="#module_Admin Controller.hasAuthorization">hasAuthorization</a>
              </li>
<li>
                <a href="#module_Admin Controller.isAdmin">isAdmin</a>
              </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Admin Controller.listUsers"></a>
    <h3 id=listUsers>listUsers</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>listUsers(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#0F6AB4;margin-right:10px;">GET</span>

    <code>/api/admin/:userId/students</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">list all users in the system for admin OR
list all students for instructor courses for instructor</div>
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
      <td>curUser</td><td><code>User</code></td><td><p>logged in user from <a href="user.html#userById">userById</a> with id <code>userId</code></p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code> - - json object to response  
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>500 Internal Server Error</code></td><td><p>On error, sends description of error</p>
</td>
    </tr><tr>
    <td><code>200 OK</code></td><td><p>If user is admin, returns list of all users<br>
If user is instr, returns list of students in instr&#39;s courses</p>
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
  <a name="module_Admin Controller.getUser"></a>
    <h3 id=getUser>getUser</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>getUser(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#0F6AB4;margin-right:10px;">GET</span>

    <code>/api/admin/:userId/students/:studentId</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Get information about a secondary user (not necessarily the user currently logged in)</div>
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
      <td>curUser</td><td><code>User</code></td><td><p>logged in user from <a href="user.html#userById">userById</a> with id <code>userId</code></p>
</td>
      </tr><tr>
      <td>student</td><td><code>User</code></td><td><p>the secondary user from <a href="user.html#userById">userById</a> with id <code>studentId</code></p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code> - - json object to response  
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>500 Internal Server Error</code></td><td><p>On error, sends description of error as <code>{message: error-message}</code></p>
</td>
    </tr><tr>
    <td><code>200 OK</code></td><td><p>Cleaned information about the user</p>
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
  <a name="module_Admin Controller.deleteUser"></a>
    <h3 id=deleteUser>deleteUser</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>deleteUser(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#A41E22;margin-right:10px;">DELETE</span>

    <code>/api/admin/:userId/students/:studentId</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Delete a secondary user</div>
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
      <td>curUser</td><td><code>User</code></td><td><p>logged in user from <a href="user.html#userById">userById</a> with id <code>userId</code></p>
</td>
      </tr><tr>
      <td>student</td><td><code>User</code></td><td><p>the secondary user from <a href="user.html#userById">userById</a> with id <code>studentId</code></p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code> - - json object to response  
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>500 Internal Server Error</code></td><td><p>On error, sends description of error as <code>{message: error-message}</code></p>
</td>
    </tr><tr>
    <td><code>200 OK</code></td><td><p>Cleaned information about the user</p>
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
  <a name="module_Admin Controller.setRole"></a>
    <h3 id=setRole>setRole</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>setRole(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#10a54a;margin-right:10px;">POST</span>

    <code>/api/admin/:userId/students/:studentId</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Update a user's role to "student", "instructor", or "admin"</div>
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
      <td>curUser</td><td><code>User</code></td><td><p>logged in user from <a href="user.html#userById">userById</a> with id <code>userId</code></p>
</td>
      </tr><tr>
      <td>student</td><td><code>User</code></td><td><p>the secondary user from <a href="user.html#userById">userById</a> with id <code>studentId</code></p>
</td>
      </tr><tr>
      <td>body</td><td><code>Object</code></td><td><p>new role; one of &quot;student&quot;, &quot;instr&quot;, or &quot;admin&quot;</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code> - - json object to response  
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>500 Internal Server Error</code></td><td><p>On error, sends description of error as <code>{message: error-message}</code></p>
</td>
    </tr><tr>
    <td><code>200 OK</code></td><td><p>Updated user information</p>
</td>
    </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">
    <b>Request Example :</b>
    <i>&lt;code&gt;/api/admin/1/students/67&lt;/code&gt;Make user 67 an instructor</i> 
  <pre class="language-html"><code class="language-html">{
  role: "instr"
}
</code></pre> 
  </div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Admin Controller.hasAuthorization"></a>
    <h3 class="text-info" id=hasAuthorization>hasAuthorization</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>hasAuthorization(req, res, next) ⇒ <code>Object</code> \| <code>function</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Middleware to check if current user is instructor or admin</div>
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
        <td>next</td><td><code>function</code></td><td><p>the next middleware function</p>
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
      <td>curUser</td><td><code>User</code></td><td><p>logged in user from <a href="user.html#userById">userById</a> with id <code>userId</code></p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code> \| <code>function</code> - - json object to response if not authorized otherwise go to next middleware  
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>403 Forbidden</code></td><td><p>If user is not an admin or instructor, sends error as <code>{message: &#39;Not authorized&#39;}</code></p>
</td>
    </tr><tr>
    <td><code>next()</code></td><td><p>Go to the next middleware if user is admin or instructor</p>
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
  <a name="module_Admin Controller.isAdmin"></a>
    <h3 class="text-info" id=isAdmin>isAdmin</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>isAdmin(req, res, next) ⇒ <code>Object</code> \| <code>function</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Middleware to check if current user is admin</div>
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
      </tr><tr>
        <td>next</td><td><code>function</code></td><td><p>the next middleware function</p>
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
      <td>curUser</td><td><code>User</code></td><td><p>from userById</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code> \| <code>function</code> - - json object to response if not authorized otherwise next middleware  
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>403 Forbidden</code></td><td><p>If user is not an admin, sends error as <code>{message: &#39;Not authorized&#39;}</code></p>
</td>
    </tr><tr>
    <td><code>next()</code></td><td><p>Go to next middleware if user is an admin</p>
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