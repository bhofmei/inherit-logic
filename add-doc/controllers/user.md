  <ol class="breadcrumb">
<li>Controller</li>
<li>User Controller</li>
</ol>
<p class="comment">
<h3>Description</h3>
</p>
<p class="comment">
The User-related controller functions
</p>
<section>
<h3 id="index">Index</h3>
<table class="table table-sm table-bordered index-table">
<tbody>
<tr>
<td class="col-md-4">
<ul class="index-list">
<li>
<a href="#module_User Controller.getUser">getUser</a>
</li>
<li>
<a href="#module_User Controller.editUser">editUser</a>
</li>
<li>
<a href="#module_User Controller.updatePassword">updatePassword</a>
</li>
<li>
<a href="#module_User Controller.resetPasswordEmail">resetPasswordEmail</a>
</li>
<li>
<a href="#module_User Controller.resetPassword">resetPassword</a>
</li>
<li>
<a href="#module_User Controller.signin">signin</a>
</li>
<li>
<a href="#module_User Controller.signup">signup</a>
</li>
<li>
<a href="#module_User Controller.signout">signout</a>
</li>
<li>
<a href="#module_User Controller.grantAccess">grantAccess</a>
</li>
<li>
<a href="#module_User Controller.requiresLogin">requiresLogin</a>
</li>
<li>
<a href="#module_User Controller.userById">userById</a>
</li>
<li>
<a href="#module_User Controller..getUserInfo">getUserInfo</a>
</li>
</ul>
</td>
</tr>
</tbody>
</table>
</section>
  <section>
<a name="module_User Controller.getUser"></a>
<h3 id=getUser>getUser</h3>
<table class="table table-sm table-bordered">
<tbody>
<tr>
<td class="col-md-4"><code>getUser(req, req) ⇒ Object</code></td>
</tr>
<tr>
<td class="col-md-4">
<span class="modifier" style="background:#0F6AB4;margin-right:10px;">GET</span>
<code>/api/users/:userId</code>
</td>
</tr>
<tr>
<td class="col-md-4"><div class="io-description">Get information about a user</div></td>
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
<td>req</td><td>Object</td><td><p>Express request object;</p>
</td>
</tr><tr>
<td>req</td><td>Object</td><td><p>Express response object</p>
</td>
</tr></tbody>
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
<td>curUser</td><td><a href="../models/user-model.html">USER</a></td><td><p>logged in user from <a href="#userById">userById</a> with id <code>userId</code></p>
</td>
</tr></tbody>
</table>

</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description"><b>Returns : </b> Object<div class="io-description">
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
<td>200 OK</td><td><p>Trimmed user information from <a href="#getUserInfo">getUserInfo</a></p>
</td>
</tr></tbody>
</table>

</div>
</td>
</tr>
</tbody>
</table>
</section>
  <section>
<a name="module_User Controller.editUser"></a>
<h3 id=editUser>editUser</h3>
<table class="table table-sm table-bordered">
<tbody>
<tr>
<td class="col-md-4"><code>editUser(req, res) ⇒ Object</code></td>
</tr>
<tr>
<td class="col-md-4">
<span class="modifier" style="background:#10a54a;margin-right:10px;">POST</span>
<code>/api/users/:userId</code>
</td>
</tr>
<tr>
<td class="col-md-4"><div class="io-description">Update user info - name and/or email</div></td>
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
<td>req</td><td>Object</td><td><p>Express request object</p>
</td>
</tr><tr>
<td>res</td><td>Object</td><td><p>Express response object</p>
</td>
</tr></tbody>
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
<td>curUser</td><td><a href="../models/user-model.html">USER</a></td><td><p>logged in user from <a href="#userById">userById</a> with id <code>userId</code></p>
</td>
</tr><tr>
<td>body</td><td>Object</td><td><p>updated information about user, specifically <code>firstName</code>, <code>lastName</code>, and <code>email</code></p>
</td>
</tr></tbody>
</table>

</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description"><b>Returns : </b> Object<div class="io-description">
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
<td>500 Internal Server Error</td><td><p>On error, sends description of error as <code>{message: error-message}</code></p>
</td>
</tr><tr>
<td>404 Not Found</td><td><p>Unable to find user; sends error as <code>{message: &#39;User not found&#39;}</code></p>
</td>
</tr><tr>
<td>200 OK</td><td><p>On successful update, send updated user cleaned by <a href="#getUserInfo">getUserInfo</a></p>
</td>
</tr></tbody>
</table>

</div>
</td>
</tr>
</tbody>
</table>
</section>
  <section>
<a name="module_User Controller.updatePassword"></a>
<h3 id=updatePassword>updatePassword</h3>
<table class="table table-sm table-bordered">
<tbody>
<tr>
<td class="col-md-4"><code>updatePassword(req, res) ⇒ Object</code></td>
</tr>
<tr>
<td class="col-md-4">
<span class="modifier" style="background:#10a54a;margin-right:10px;">POST</span>
<code>/api/users/:userId/update-password</code>
</td>
</tr>
<tr>
<td class="col-md-4"><div class="io-description">Update a user password</div></td>
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
<td>req</td><td>Object</td><td><p>Express request object</p>
</td>
</tr><tr>
<td>res</td><td>Object</td><td><p>Express response object</p>
</td>
</tr></tbody>
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
<td>curUser</td><td><a href="../models/user-model.html">USER</a></td><td><p>logged in user from <a href="#userById">userById</a> with id <code>userId</code></p>
</td>
</tr><tr>
<td>body</td><td>Object</td><td><p>request body with <code>password</code> (old password) and <code>newPassword</code> (new password)</p>
</td>
</tr></tbody>
</table>

</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description"><b>Returns : </b> Object<div class="io-description">
<p>json object for response</p>
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
<td>500 Internal Server Error</td><td><p>On error finding user, sends description of error as <code>{message: error-message}</code></p>
</td>
</tr><tr>
<td>404 Not Found</td><td><p>Unable to find user; sends error as <code>{message: &#39;User not found&#39;}</code></p>
</td>
</tr><tr>
<td>401 Unauthorized</td><td><p>Error changing password, i.e. old password isn&#39;t correct, sends error as <code>{message: error-message}</code></p>
</td>
</tr><tr>
<td>200 OK</td><td><p>On successful update, send updated user cleaned by <a href="#getUserInfo">getUserInfo</a></p>
</td>
</tr></tbody>
</table>

</div>
</td>
</tr>
</tbody>
</table>
</section>
  <section>
<a name="module_User Controller.resetPasswordEmail"></a>
<h3 id=resetPasswordEmail>resetPasswordEmail</h3>
<table class="table table-sm table-bordered">
<tbody>
<tr>
<td class="col-md-4"><code>resetPasswordEmail(req, res, next) ⇒ Object</code></td>
</tr>
<tr>
<td class="col-md-4">
<span class="modifier" style="background:#10a54a;margin-right:10px;">POST</span>
<code>/api/auth/forget-password</code>
</td>
</tr>
<tr>
<td class="col-md-4"><div class="io-description">Sends an email to a user to allow user to reset password</div></td>
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
<td>req</td><td>Object</td><td><p>Express request object</p>
</td>
</tr><tr>
<td>res</td><td>Object</td><td><p>Express response object</p>
</td>
</tr><tr>
<td>next</td><td>function</td><td><p>next middleware function</p>
</td>
</tr></tbody>
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
<td>body</td><td>Object</td><td><p>request body with <code>email</code>
includes &quot;body&quot; which has user email</p>
</td>
</tr></tbody>
</table>

</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description"><b>Returns : </b> Object<div class="io-description">
<p>json object for response</p>
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
<td>500 Internal Server Error</td><td><p>If error with email transporter, send error as <code>{message: &#39;Error with server email service&#39;}</code></p>
</td>
</tr><tr>
<td>404 Not Found</td><td><p>If email doesn&#39;t belong to a current user send message as <code>{message: &#39;No account with that email.&#39;}</code></p>
</td>
</tr><tr>
<td>422 Unprocessable Entity</td><td><p>If error trying to send reset email, send error to response as <code>{message: error-message}</code></p>
</td>
</tr><tr>
<td>200 OK</td><td><p>Successfully sends the email and sends success message to response</p>
</td>
</tr></tbody>
</table>

</div>
</td>
</tr>
</tbody>
</table>
</section>
  <section>
<a name="module_User Controller.resetPassword"></a>
<h3 id=resetPassword>resetPassword</h3>
<table class="table table-sm table-bordered">
<tbody>
<tr>
<td class="col-md-4"><code>resetPassword(req, res) ⇒ Object</code></td>
</tr>
<tr>
<td class="col-md-4">
<span class="modifier" style="background:#10a54a;margin-right:10px;">POST</span>
<code>/api/auth/reset-password</code>
</td>
</tr>
<tr>
<td class="col-md-4"><div class="io-description">Allows user to reset the password using a token (sent by email)</div></td>
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
<td>req</td><td>Object</td><td><p>Express request object</p>
</td>
</tr><tr>
<td>res</td><td>Object</td><td><p>Express response object</p>
</td>
</tr></tbody>
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
<td>body</td><td>Object</td><td><p>request body with <code>password</code> (new password),
<code>confirmPassword</code> (password entered second time) and <code>token</code> (token sent to email to allow password reset)</p>
</td>
</tr></tbody>
</table>

</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description"><b>Returns : </b> Object<div class="io-description">
<p>json object for response</p>
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
<td>500 Internal Server Error</td><td><p>If database error, send <code>{message: error-message}</code></p>
</td>
</tr><tr>
<td>404 Not Found</td><td><p>If token is invalid, send error as <code>{message: &#39;Invalid token.&#39;}</code></p>
</td>
</tr><tr>
<td>403 Forbidden</td><td><p>If token is expired, send error as <code>{message: &#39;Token has expired&#39;}</code></p>
</td>
</tr><tr>
<td>400 Bad Request</td><td><p>If password and confirm password don&#39;t match, send error as <code>{message: &#39;Confirm password does not match.&#39;}</code></p>
</td>
</tr><tr>
<td>200 OK</td><td><p>If successfully update password, send <code>{message: &#39;Password has been reset.&#39;}</code></p>
</td>
</tr></tbody>
</table>

</div>
</td>
</tr>
</tbody>
</table>
</section>
  <section>
<a name="module_User Controller.signin"></a>
<h3 id=signin>signin</h3>
<table class="table table-sm table-bordered">
<tbody>
<tr>
<td class="col-md-4"><code>signin(req, res, next) ⇒ Object \| function</code></td>
</tr>
<tr>
<td class="col-md-4">
<span class="modifier" style="background:#10a54a;margin-right:10px;">POST</span>
<code>/api/auth/signin</code>
</td>
</tr>
<tr>
<td class="col-md-4"><div class="io-description">Using passport authenticate and request login in, attempts to sign users in</div></td>
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
<td>req</td><td>Object</td><td><p>Express request object</p>
</td>
</tr><tr>
<td>res</td><td>Object</td><td><p>Express response object</p>
</td>
</tr><tr>
<td>next</td><td>function</td><td><p>next middleware function</p>
</td>
</tr></tbody>
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
<td>body</td><td>Object</td><td><p>request body with <code>username</code> (email) and <code>password</code></p>
</td>
</tr></tbody>
</table>

</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description"><b>Returns : </b> Object \| function<div class="io-description">
<p>json object on error or go to next middleware on success</p>
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
<td>400 Bad Request</td><td><p>On error, send error as <code>{message: error-message}</code></p>
</td>
</tr><tr>
<td>next()</td><td><p>On success, go to next middleware</p>
</td>
</tr></tbody>
</table>

</div>
</td>
</tr>
</tbody>
</table>
</section>
  <section>
<a name="module_User Controller.signup"></a>
<h3 id=signup>signup</h3>
<table class="table table-sm table-bordered">
<tbody>
<tr>
<td class="col-md-4"><code>signup(req, res) ⇒ Object</code></td>
</tr>
<tr>
<td class="col-md-4">
<span class="modifier" style="background:#10a54a;margin-right:10px;">POST</span>
<code>/api/auth/signup</code>
</td>
</tr>
<tr>
<td class="col-md-4"><div class="io-description">Create a new user</div></td>
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
<td>req</td><td>Object</td><td><p>Express request object</p>
</td>
</tr><tr>
<td>res</td><td>Object</td><td><p>Express response object</p>
</td>
</tr></tbody>
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
<td>body</td><td>Object</td><td><p>request body with <code>username</code> (email), <code>password</code>,
<code>firstName</code>, <code>lastName</code>, and <code>courseNum</code></p>
</td>
</tr></tbody>
</table>

</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description"><b>Returns : </b> Object<div class="io-description">
<p>json object for response</p>
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
<td>500 Internal Server Error</td><td><p>On error creating/saving user, sends <code>{message: error-message}</code></p>
</td>
</tr><tr>
<td>400 Bad Request</td><td><p>On error logging in, sends <code>{message: error-message}</code></p>
</td>
</tr><tr>
<td>200 OK</td><td><p>On successful update, send updated user cleaned by <a href="#getUserInfo">getUserInfo</a></p>
</td>
</tr></tbody>
</table>

</div>
</td>
</tr>
</tbody>
</table>
</section>
  <section>
<a name="module_User Controller.signout"></a>
<h3 id=signout>signout</h3>
<table class="table table-sm table-bordered">
<tbody>
<tr>
<td class="col-md-4"><code>signout(req, res) ⇒ Object</code></td>
</tr>
<tr>
<td class="col-md-4">
<span class="modifier" style="background:#0F6AB4;margin-right:10px;">GET</span>
<code>/api/auth/signout</code>
</td>
</tr>
<tr>
<td class="col-md-4"><div class="io-description">Sign out a logged in user</div></td>
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
<td>req</td><td>Object</td><td><p>Express request object;</p>
</td>
</tr><tr>
<td>res</td><td>Object</td><td><p>Express response object</p>
</td>
</tr></tbody>
</table>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description"><b>Returns : </b> Object<div class="io-description">
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
<td>200 OK</td><td><p>Sends <code>true</code></p>
</td>
</tr></tbody>
</table>

</div>
</td>
</tr>
</tbody>
</table>
</section>
  <section>
<a name="module_User Controller.grantAccess"></a>
<h3 id=grantAccess>grantAccess</h3>
<table class="table table-sm table-bordered">
<tbody>
<tr>
<td class="col-md-4"><code>grantAccess(req, res) ⇒ Object</code></td>
</tr>
<tr>
<td class="col-md-4">
<span class="modifier" style="background:#10a54a;margin-right:10px;">POST</span>
<code>/api/admin/:userId/students/:studentId/:scenarioId</code>
</td>
</tr>
<tr>
<td class="col-md-4"><div class="io-description">grant access to student for specific scenario
Note: this function is called after [deleteStudentFridge]{@link fridge-controller.html#deleteStudentFridge} middleware</div></td>
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
<td>req</td><td>Object</td><td><p>Express request object</p>
</td>
</tr><tr>
<td>res</td><td>Object</td><td><p>Express response object</p>
</td>
</tr></tbody>
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
<td>curUser</td><td><a href="../models/user-model.html">USER</a></td><td><p>logged in user from <a href="#userById">userById</a> with id <code>userId</code></p>
</td>
</tr><tr>
<td>student</td><td><a href="../models/user-model.html">USER</a></td><td><p>student to grant access for from <a href="#userById">userById</a> with id <code>studentId</code></p>
</td>
</tr><tr>
<td>scenario</td><td><a href="../models/scenario-model.html">SCENARIO</a></td><td><p>scenario to grant access for from <a href="scenario-controller.html#scenarioByCode">scenarioByCode</a> with scenCode <code>scenarioId</code></p>
</td>
</tr><tr>
<td>body</td><td>Object</td><td><p>request body with <code>access</code> indicating to grant (true) or revoke (false) access</p>
</td>
</tr></tbody>
</table>

</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description"><b>Returns : </b> Object<div class="io-description">
<p>json object for response</p>
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
<td>500 Internal Server Error</td><td><p>On error, send error as <code>{message: error-message}</code></p>
</td>
</tr><tr>
<td>200 OK</td><td><p>If user doesn&#39;t have accessGranted property, send 200 response as if it was successful</p>
</td>
</tr><tr>
<td>200 OK</td><td><p>If successfully update user, send updated user</p>
</td>
</tr></tbody>
</table>

</div>
</td>
</tr>
</tbody>
</table>
</section>
  <section>
<a name="module_User Controller.requiresLogin"></a>
<h3 class="text-info" id=requiresLogin>requiresLogin</h3>
<table class="table table-sm table-bordered">
<tbody>
<tr>
<td class="col-md-4"><code>requiresLogin(req, res, next) ⇒ Object \| function</code></td>
</tr>
<tr>
<td class="col-md-4"><div class="io-description">Middleware to check if current user can access the path depending if they are logged in</div></td>
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
<td>req</td><td>Object</td><td><p>Express request object</p>
</td>
</tr><tr>
<td>res</td><td>Object</td><td><p>Express response object</p>
</td>
</tr><tr>
<td>next</td><td>function</td><td><p>next middleware to follow</p>
</td>
</tr></tbody>
</table>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description"><b>Returns : </b> Object \| function<div class="io-description">
<ul>
<li>json response when not logged in otherwise go to next middleware</li>
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
<td>401 Unauthorized</td><td><p>If not currently logged in, send error as <code>{message: &#39;User is not logged in&#39;}</code></p>
</td>
</tr><tr>
<td>next()</td><td><p>If logged in, go to next middleware</p>
</td>
</tr></tbody>
</table>

</div>
</td>
</tr>
</tbody>
</table>
</section>
  <section>
<a name="module_User Controller.userById"></a>
<h3 class="text-info" id=userById>userById</h3>
<table class="table table-sm table-bordered">
<tbody>
<tr>
<td class="col-md-4"><code>userById(req, res, next, id) ⇒ function</code></td>
</tr>
<tr>
<td class="col-md-4">
<code>:userId | :studentId</code>
</td>
</tr>
<tr>
<td class="col-md-4"><div class="io-description">Find user (if they exist) by the user id</div></td>
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
<td>req</td><td>Object</td><td><p>Express request object</p>
</td>
</tr><tr>
<td>res</td><td>Object</td><td><p>Express response object</p>
</td>
</tr><tr>
<td>next</td><td>Object</td><td><p>Next function to go to</p>
</td>
</tr><tr>
<td>id</td><td>string</td><td><p>user&#39;s id as a string from URL</p>
</td>
</tr></tbody>
</table>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description"><b>Returns : </b> function<div class="io-description">
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
<td>next(&#x27;Invalid user&#x27;)</td><td><p>If id is invalid, pass message to next middleware</p>
</td>
</tr><tr>
<td>next(error)</td><td><p>If some error, pass error to next middleware</p>
</td>
</tr><tr>
<td>next(&#x27;User not found&#x27;)</td><td><p>If id doesn&#39;t belong to a user, pass message to next middleware</p>
</td>
</tr><tr>
<td>next()</td><td><p>Able to find user<br>
If <code>req.curUser</code> isn&#39;t set, set request <code>curUser</code> as the logged in user and go to next middleware;<br>
If <code>req.curUser</code> is set, set request <code>student</code> as the secondary user and go to next middleware</p>
</td>
</tr></tbody>
</table>

</div>
</td>
</tr>
</tbody>
</table>
</section>
  <section>
<a name="module_User Controller..getUserInfo"></a>
<h3 id=getUserInfo>getUserInfo</h3>
<table class="table table-sm table-bordered">
<tbody>
<tr>
<td class="col-md-4"><code>getUserInfo(user) ⇒ Object</code></td>
</tr>
<tr>
<td class="col-md-4"><div class="io-description">Returns trimmed user info in a consistent manner</div></td>
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
<td>user</td><td><a href="../models/user-model.html">USER</a></td><td><p>user object from DB</p>
</td>
</tr></tbody>
</table>
</div>
</td>
</tr>
<tr>
<td class="col-md-4">
<div class="io-description"><b>Returns : </b> Object<div class="io-description">
<p>trimmed user object to have properties <code>id</code>, <code>firstName</code>,
<code>lastName</code>, <code>email</code>, and <code>role</code></p>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</section>
<section style="margin-top:50px;text-align:center;">
documentation generated with <a href="https://github.com/jsdoc2md/jsdoc-to-markdown/">JSDoc2md</a>
</section>
