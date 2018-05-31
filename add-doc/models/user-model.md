  <ol class="breadcrumb">
    <li>Model</li>
  <li>User Model</li>
</ol>
  <p class="comment">
    <h3>Description</h3>
  </p>
  <p class="comment">
    Database schema for user
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

<a href="#module_User Model..userId">userId</a>
</li>
<li>

<a href="#module_User Model..firstName">firstName</a>
</li>
<li>

<a href="#module_User Model..lastName">lastName</a>
</li>
<li>

<a href="#module_User Model..email">email</a>
</li>
<li>

<a href="#module_User Model..password">password</a>
</li>
<li>

<a href="#module_User Model..course">course</a>
</li>
<li>

<a href="#module_User Model..accessGranted">accessGranted</a>
</li>
<li>

<a href="#module_User Model..role">role</a>
</li>
<li>

<a href="#module_User Model..lastLogin">lastLogin</a>
</li>
<li>

<a href="#module_User Model..resetPasswordToken">resetPasswordToken</a>
</li>
<li>

<a href="#module_User Model..resetPasswordExpires">resetPasswordExpires</a>
</li>
</ul>
</td>
</tr>
<tr>
<td class="col-md-4"><h6><b>Methods</b></h6></td>
</tr>
<tr>
<td class="col-md-4">
<ul class="index-list">
<li>

<a href="#module_User Model.authenticate">authenticate</a>
</li>
<li>

<a href="#module_User Model.changePassword">changePassword</a>
</li>
</ul>
</td>
</tr>
<tr>
<td class="col-md-4"><h6><b>Enums</b></h6></td>
</tr>
<tr>
<td class="col-md-4">
<ul class="index-list">
<li>

<a href="#module_User Model..rolesEnum">rolesEnum</a>
</li>
</ul>
</td>
</tr>
</tbody>
  </table>
</section>
<section><h3>Methods</h3>  <table class="table table-sm table-bordered">
  <tbody>
    <tr id="authenticate"><td class="col-md-4">
      <a name="module_User Model.authenticate"></a>
      <b>authenticate</b>
      </td></tr>
    <tr>
      <td class="col-md-4"><code>authenticate(candidatePassword, callback) ⇒ function</code></td>
    </tr>

      <tr>
        <td class="col-md-4">
          <i></i>
          <div class="io-description"><p>Determines if the entered password is correct</p>
</div>
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
    <td>candidatePassword</td><td>string</td><td><p>user input password to compare to database</p>
</td>
  </tr><tr>
    <td>callback</td><td>function</td><td><p>Callback function to pass result to</p>
</td>
  </tr></tbody>
</table>
</div>
        </td>
      </tr>
      <tr>
        <td class="col-md-4">
            <div class="io-description"><b>Returns : </b> function    <div class="io-description">
    <p>Pass error message and if password is a match to the callback function</p>
</div>
</div>
        </td>
      </tr>
  </tbody>
</table>

  <table class="table table-sm table-bordered">
  <tbody>
    <tr id="changePassword"><td class="col-md-4">
      <a name="module_User Model.changePassword"></a>
      <b>changePassword</b>
      </td></tr>
    <tr>
      <td class="col-md-4"><code>changePassword(oldPassword, newPassword, callback) ⇒ function</code></td>
    </tr>

      <tr>
        <td class="col-md-4">
          <i></i>
          <div class="io-description"><p>Update a user password, assuming the <code>oldPassword</code> is correct</p>
</div>
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
    <td>oldPassword</td><td>string</td><td><p>user input for current password</p>
</td>
  </tr><tr>
    <td>newPassword</td><td>string</td><td><p>the new password user wants to change to</p>
</td>
  </tr><tr>
    <td>callback</td><td>function</td><td><p>Callback function to pass result to</p>
</td>
  </tr></tbody>
</table>
</div>
        </td>
      </tr>
      <tr>
        <td class="col-md-4">
            <div class="io-description"><b>Returns : </b> function    <div class="io-description">
    <p>Pass error message or <code>null</code> to callback function</p>
</div>
</div>
        </td>
      </tr>
  </tbody>
</table>
</section>
<section><h3>Properties</h3>  <table class="table table-sm table-bordered">
  <tbody>
    <tr id="userId"><td class="col-md-4">
      <a name="module_User Model..userId"></a>
          <span class="modifier" style="background:#8a6d3b;margin-right:10px;">INDEX</span>
      <b>userId</b>
      </td></tr>
    <tr>
      <td class="col-md-4"><code>userId : number</code></td>
    </tr>

      <tr>
        <td class="col-md-4">
          <i></i>
          <div class="io-description"><p>auto-incremented user ID</p>
</div>
        </td>
      </tr>
  </tbody>
</table>

  <table class="table table-sm table-bordered">
  <tbody>
    <tr id="firstName"><td class="col-md-4">
      <a name="module_User Model..firstName"></a>
      <b>firstName</b>
      </td></tr>
    <tr>
      <td class="col-md-4"><code>firstName : string</code></td>
    </tr>

      <tr>
        <td class="col-md-4">
          <i></i>
          <div class="io-description"><p>user&#39;s first name</p>
</div>
        </td>
      </tr>
  </tbody>
</table>

  <table class="table table-sm table-bordered">
  <tbody>
    <tr id="lastName"><td class="col-md-4">
      <a name="module_User Model..lastName"></a>
      <b>lastName</b>
      </td></tr>
    <tr>
      <td class="col-md-4"><code>lastName : string</code></td>
    </tr>

      <tr>
        <td class="col-md-4">
          <i></i>
          <div class="io-description"><p>user&#39;s last name</p>
</div>
        </td>
      </tr>
  </tbody>
</table>

  <table class="table table-sm table-bordered">
  <tbody>
    <tr id="email"><td class="col-md-4">
      <a name="module_User Model..email"></a>
          <span class="modifier" style="background:#31708f;margin-right:10px;">REQUIRED</span>
      <b>email</b>
      </td></tr>
    <tr>
      <td class="col-md-4"><code>email : string</code></td>
    </tr>

      <tr>
        <td class="col-md-4">
          <i></i>
          <div class="io-description"><p>user&#39;s email address</p>
</div>
        </td>
      </tr>
  </tbody>
</table>

  <table class="table table-sm table-bordered">
  <tbody>
    <tr id="password"><td class="col-md-4">
      <a name="module_User Model..password"></a>
          <span class="modifier" style="background:#a94442;margin-right:10px;">VALIDATE</span>
      <b>password</b>
      </td></tr>
    <tr>
      <td class="col-md-4"><code>password : string</code></td>
    </tr>

      <tr>
        <td class="col-md-4">
          <i></i>
          <div class="io-description"><p>user&#39;s password; actual password is not stored in DB</p>
</div>
        </td>
      </tr>
  </tbody>
</table>

  <table class="table table-sm table-bordered">
  <tbody>
    <tr id="course"><td class="col-md-4">
      <a name="module_User Model..course"></a>
      <b>course</b>
      </td></tr>
    <tr>
      <td class="col-md-4"><code>course : [COURSE](course-model.html)</code></td>
    </tr>

      <tr>
        <td class="col-md-4">
          <i></i>
          <div class="io-description"><p>course the user is part of</p>
</div>
        </td>
      </tr>
  </tbody>
</table>

  <table class="table table-sm table-bordered">
  <tbody>
    <tr id="accessGranted"><td class="col-md-4">
      <a name="module_User Model..accessGranted"></a>
      <b>accessGranted</b>
      </td></tr>
    <tr>
      <td class="col-md-4"><code>accessGranted : Object&lt;boolean&gt;</code></td>
    </tr>

      <tr>
        <td class="col-md-4">
          <i></i>
          <div class="io-description"><p>for each scenario (as key), has access been granted</p>
</div>
        </td>
      </tr>
      <tr>
        <td class="col-md-4">
          <div class="io-description">
    <b>Example : </b>
  <pre class="language-html"><code class="language-html">{"scen1": false, "scen2": true, "scen3": true}
</code></pre> 
  </div>
        </td>
      </tr>
  </tbody>
</table>

  <table class="table table-sm table-bordered">
  <tbody>
    <tr id="role"><td class="col-md-4">
      <a name="module_User Model..role"></a>
      <b>role</b>
      </td></tr>
    <tr>
      <td class="col-md-4"><code>role : string</code></td>
    </tr>

      <tr>
        <td class="col-md-4">
          <i></i>
          <div class="io-description"><p>user&#39;s role which is used to determine website access; one of <a href="#rolesEnum">rolesEnum</a></p>
</div>
        </td>
      </tr>
    <tr>
        <td class="col-md-4">
          <i>Default Value :</i> <code>student</code>
        </td>
      </tr>

  </tbody>
</table>

  <table class="table table-sm table-bordered">
  <tbody>
    <tr id="lastLogin"><td class="col-md-4">
      <a name="module_User Model..lastLogin"></a>
      <b>lastLogin</b>
      </td></tr>
    <tr>
      <td class="col-md-4"><code>lastLogin : Date</code></td>
    </tr>

      <tr>
        <td class="col-md-4">
          <i></i>
          <div class="io-description"><p>date and time of the last time the user logged in</p>
</div>
        </td>
      </tr>
    <tr>
        <td class="col-md-4">
          <i>Default Value :</i> <code>time of account creation</code>
        </td>
      </tr>

  </tbody>
</table>

  <table class="table table-sm table-bordered">
  <tbody>
    <tr id="resetPasswordToken"><td class="col-md-4">
      <a name="module_User Model..resetPasswordToken"></a>
      <b>resetPasswordToken</b>
      </td></tr>
    <tr>
      <td class="col-md-4"><code>resetPasswordToken : string</code></td>
    </tr>

      <tr>
        <td class="col-md-4">
          <i></i>
          <div class="io-description"><p>token generated for user when they request a password reset; necessary to be able to set the new password</p>
</div>
        </td>
      </tr>
  </tbody>
</table>

  <table class="table table-sm table-bordered">
  <tbody>
    <tr id="resetPasswordExpires"><td class="col-md-4">
      <a name="module_User Model..resetPasswordExpires"></a>
      <b>resetPasswordExpires</b>
      </td></tr>
    <tr>
      <td class="col-md-4"><code>resetPasswordExpires : Date</code></td>
    </tr>

      <tr>
        <td class="col-md-4">
          <i></i>
          <div class="io-description"><p>date and time that the password-reset token expires; token is no longer valid after this time</p>
</div>
        </td>
      </tr>
  </tbody>
</table>
</section>
<section><h3>Enumerables</h3>  <table class="table table-sm table-bordered">
  <tbody>
    <tr id="rolesEnum"><td class="col-md-4">
      <a name="module_User Model..rolesEnum"></a>
      <b>rolesEnum</b>
      </td></tr>
    <tr>
      <td class="col-md-4"><code>rolesEnum : enum</code></td>
    </tr>

      <tr>
        <td class="col-md-4">
          <i></i>
          <div class="io-description"><p>List of valid roles for users and error message</p>
</div>
        </td>
      </tr>
      <tr>
        <td class="col-md-4">
            <div class="io-description">
              <table class="table table-condensed">
  <thead>
    <tr>
        <th>Param</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td>values</td><td>string</td><td><code>[&quot;admin&quot;,&quot;instr&quot;,&quot;student&quot;]</code></td><td><p>acceptable values</p>
</td>
      </tr><tr>
      <td>message</td><td>string</td><td><code>Value &quot;{VALUE}&quot; is not a valid role</code></td><td><p>error message on unacceptable value</p>
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
