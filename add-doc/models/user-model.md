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
        <td class="col-md-4">
          <ul class="index-list">
<li>
                <a href="#module_User Model.authenticate">authenticate</a>
              </li>
<li>
                <a href="#module_User Model.changePassword">changePassword</a>
              </li>
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
<li>
                <a href="#module_User Model..rolesEnum">rolesEnum</a>
              </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_User Model.authenticate"></a>
    <h3 id=authenticate>authenticate</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>authenticate(candidatePassword, callback) ⇒ <code>function</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Determines if the entered password is correct</div>
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
        <td>candidatePassword</td><td><code>string</code></td><td><p>user input password to compare to database</p>
</td>
      </tr><tr>
        <td>callback</td><td><code>function</code></td><td><p>Callback function to pass result to</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>function</code>    <div class="io-description">
    <p>Pass error message and if password is a match to the callback function</p>
</div>
</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_User Model.changePassword"></a>
    <h3 id=changePassword>changePassword</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>changePassword(oldPassword, newPassword, callback) ⇒ <code>function</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Update a user password, assuming the `oldPassword` is correct</div>
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
        <td>oldPassword</td><td><code>string</code></td><td><p>user input for current password</p>
</td>
      </tr><tr>
        <td>newPassword</td><td><code>string</code></td><td><p>the new password user wants to change to</p>
</td>
      </tr><tr>
        <td>callback</td><td><code>function</code></td><td><p>Callback function to pass result to</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>function</code>    <div class="io-description">
    <p>Pass error message or <code>null</code> to callback function</p>
</div>
</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_User Model..userId"></a>
    <h3 id=userId>userId</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>userId : <code>number</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">auto-incremented user ID</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_User Model..firstName"></a>
    <h3 id=firstName>firstName</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>firstName : <code>string</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">user's first name</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_User Model..lastName"></a>
    <h3 id=lastName>lastName</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>lastName : <code>string</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">user's last name</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_User Model..email"></a>
    <h3 id=email>email</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>email : <code>string</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">user's email address</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_User Model..password"></a>
    <h3 id=password>password</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>password : <code>string</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">user's password; actual password is not stored in DB</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_User Model..course"></a>
    <h3 id=course>course</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>course : [<code>COURSE</code>](course-model.html)</code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">course the user is part of</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_User Model..accessGranted"></a>
    <h3 id=accessGranted>accessGranted</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>accessGranted : <code>Object&lt;boolean&gt;</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">for each scenario (as key), has access been granted</div>
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
</section>
  <section>
  <a name="module_User Model..role"></a>
    <h3 id=role>role</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>role : <code>string</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">user's role which is used to determine website access; one of [rolesEnum]{@link #rolesEnum}</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_User Model..lastLogin"></a>
    <h3 id=lastLogin>lastLogin</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>lastLogin : <code>Date</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">date and time of the last time the user logged in</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_User Model..resetPasswordToken"></a>
    <h3 id=resetPasswordToken>resetPasswordToken</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>resetPasswordToken : <code>string</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">token generated for user when they request a password reset; necessary to be able to set the new password</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_User Model..resetPasswordExpires"></a>
    <h3 id=resetPasswordExpires>resetPasswordExpires</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>resetPasswordExpires : <code>Date</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">date and time that the password-reset token expires; token is no longer valid after this time</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_User Model..rolesEnum"></a>
    <h3 id=rolesEnum>rolesEnum</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>rolesEnum : <code>enum</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">List of valid roles for users and error message</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
<section style="margin-top:50px;text-align:center;">
documentation generated with <a href="https://github.com/jsdoc2md/jsdoc-to-markdown/">JSDoc2md</a>
</section>
