  <ol class="breadcrumb">
    <li>Controller</li>
  <li>Course Controller</li>
</ol>
  <p class="comment">
    <h3>Description</h3>
  </p>
  <p class="comment">
    The Course-related controller functions
  </p>
<section>
  <h3 id="index">Index</h3>
  <table class="table table-sm table-bordered index-table">
    <tbody>
      <tr>
        <td class="col-md-4">
          <ul class="index-list">
<li>
                <a href="#module_Course Controller.isInstructor">isInstructor</a>
              </li>
<li>
                <a href="#module_Course Controller.listCourses">listCourses</a>
              </li>
<li>
                <a href="#module_Course Controller.listCourseNum">listCourseNum</a>
              </li>
<li>
                <a href="#module_Course Controller.createCourse">createCourse</a>
              </li>
<li>
                <a href="#module_Course Controller.getCourse">getCourse</a>
              </li>
<li>
                <a href="#module_Course Controller.editCourse">editCourse</a>
              </li>
<li>
                <a href="#module_Course Controller.deleteCourse">deleteCourse</a>
              </li>
<li>
                <a href="#module_Course Controller.getStudents">getStudents</a>
              </li>
<li>
                <a href="#module_Course Controller.deleteCourseStudents">deleteCourseStudents</a>
              </li>
<li>
                <a href="#module_Course Controller.getPossibleInstructors">getPossibleInstructors</a>
              </li>
<li>
                <a href="#module_Course Controller.setInstructor">setInstructor</a>
              </li>
<li>
                <a href="#module_Course Controller.getScenarioStatus">getScenarioStatus</a>
              </li>
<li>
                <a href="#module_Course Controller.courseByNum">courseByNum</a>
              </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Course Controller.isInstructor"></a>
    <h3 class="text-info" id=isInstructor>isInstructor</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>isInstructor(req, res, next) ⇒ <code>Object</code> \| <code>function</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Middleware to allow only admin and the instructor of the course to proceed</div>
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
        <td>next</td><td><code>function</code></td><td><p>next middleware</p>
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
      <td>curUser</td><td><code>User</code></td><td><p>logged in user from <a href="user.html#userById">userById</a></p>
</td>
      </tr><tr>
      <td>course</td><td><code>Course</code></td><td><p>course details from <a href="#courseByNum">courseByNum</a></p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code> \| <code>function</code> - - json object to response not allowed or next middleware if allowed  
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>403 Forbidden</code></td><td><ul>
<li>current user not authorized</li>
</ul>
</td>
    </tr><tr>
    <td><code>next()</code></td><td><ul>
<li>If user authorized, go to next middleware</li>
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
  <section>
  <a name="module_Course Controller.listCourses"></a>
    <h3 id=listCourses>listCourses</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>listCourses() ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#0F6AB4;margin-right:10px;">GET</span>

    <code>/api/admin/:userId/courses</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">get list of courses
is user is admin, list all
if user is instructor, list courses for teacher</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
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
      <td>curUser</td><td><code>User</code></td><td><p>logged in user from <a href="user.html#userById">userById</a></p>
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
    <td><code>404 Not Found</code></td><td><p>User is admin and there are no courses OR user is instr role but not the instructor of any courses; sends message as <code>{message: &#39;No courses found&#39;}</code></p>
</td>
    </tr><tr>
    <td><code>200 OK</code></td><td><p>List of courses; courses in the list depend on user role</p>
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
  <a name="module_Course Controller.listCourseNum"></a>
    <h3 id=listCourseNum>listCourseNum</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>listCourseNum(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#0F6AB4;margin-right:10px;">GET</span>

    <code>/api/courses</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Return the list of course numbers that currently exist
This is used during sign-up and does not require a user to be logged in</div>
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
    <td><code>404 Not Found</code></td><td><p>there are no courses; sends message as <code>{message: &quot;No courses found&quot;}</code></p>
</td>
    </tr><tr>
    <td><code>200 OK</code></td><td><p>List of courses with properties <code>courseNum</code> and <code>id</code> (DB id)</p>
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
  <a name="module_Course Controller.createCourse"></a>
    <h3 id=createCourse>createCourse</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>createCourse(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#10a54a;margin-right:10px;">POST</span>

    <code>/api/admin/:userId/courses</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Create a new course and set current user as instructor</div>
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
      <td>curUser</td><td><code>User</code></td><td><p>logged in user from <a href="user-controller.html#userById">userById</a> with id <code>userId</code></p>
</td>
      </tr><tr>
      <td>body</td><td><code>Object</code></td><td><p>details about new course: courseNum and description</p>
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
    <td><code>200 OK</code></td><td><p>Newly created course</p>
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
  <a name="module_Course Controller.getCourse"></a>
    <h3 id=getCourse>getCourse</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>getCourse(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#0F6AB4;margin-right:10px;">GET</span>

    <code>/api/admin/:userId/courses/:courseNum</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Get information about an existing course</div>
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
      <td>curUser</td><td><code>User</code></td><td><p>logged in user from <a href="user-controller.html#userById">userById</a> with id <code>userId</code></p>
</td>
      </tr><tr>
      <td>course</td><td><code>Course</code></td><td><p>course details from <a href="#courseByNum">courseByNum</a> with course number <code>courseNum</code></p>
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
    <td><code>200 OK</code></td><td><p>the course information including <code>courseNum</code>, <code>description</code>, and list of <code>instructors</code></p>
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
  <a name="module_Course Controller.editCourse"></a>
    <h3 id=editCourse>editCourse</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>editCourse(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#10a54a;margin-right:10px;">POST</span>

    <code>/api/admin/:userId/courses/:courseNum</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Update the description of an existing course</div>
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
      <td>curUser</td><td><code>User</code></td><td><p>logged in user from <a href="user-controller.html#userById">userById</a>  with id <code>userId</code></p>
</td>
      </tr><tr>
      <td>course</td><td><code>Course</code></td><td><p>course details from <a href="#courseByNum">courseByNum</a> with course number <code>courseNum</code></p>
</td>
      </tr><tr>
      <td>body</td><td><code>Object</code></td><td><p>course information to update - the description</p>
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
    <td><code>200 OK</code></td><td><p>Updated course information</p>
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
  <a name="module_Course Controller.deleteCourse"></a>
    <h3 id=deleteCourse>deleteCourse</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>deleteCourse() ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#A41E22;margin-right:10px;">DELETE</span>

    <code>/api/admin/:userId/courses/:courseNum</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Delete a course</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
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
      <td>course</td><td><code>Course</code></td><td><p>course details from <a href="#courseByNum">courseByNum</a> with course number <code>courseNum</code></p>
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
    <td><code>200 OK</code></td><td><p>Information about course just deleted</p>
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
  <a name="module_Course Controller.getStudents"></a>
    <h3 id=getStudents>getStudents</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>getStudents(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#0F6AB4;margin-right:10px;">GET</span>

    <code>/api/admin/:userId/courses/:courseNum/students</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">get list of students for a course</div>
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
      <td>course</td><td><code>Course</code></td><td><p>course details from <a href="#courseByNum">courseByNum</a> with course number <code>courseNum</code></p>
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
    <td><code>200 OK</code></td><td><p>List of students in the course; each student has properties <code>firstName</code>, <code>lastName</code>, <code>userId</code>, <code>accessGranted</code>, and <code>email</code></p>
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
  <a name="module_Course Controller.deleteCourseStudents"></a>
    <h3 id=deleteCourseStudents>deleteCourseStudents</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>deleteCourseStudents(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#A41E22;margin-right:10px;">DELETE</span>

    <code>/api/admin/:userId/courses/:courseNum/students</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Bulk delete all students in a particular course
Most useful when finished with semester and course is over
Does not remove the course itself</div>
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
      <td>course</td><td><code>Course</code></td><td><p>course details from <a href="#courseByNum">courseByNum</a> with course number <code>courseNum</code></p>
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
    <td><code>200 Success</code></td><td><p>List of students just deleted</p>
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
  <a name="module_Course Controller.getPossibleInstructors"></a>
    <h3 id=getPossibleInstructors>getPossibleInstructors</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>getPossibleInstructors(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#0F6AB4;margin-right:10px;">GET</span>

    <code>/api/admin/:userId/courses/:courseNum/instructors</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Get list of all possible instructors for a specific course (not including the instrcutors currently teaching the course)
Admin can add current instructors or students in the course
Instructors can add other instrctors</div>
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
      <td>curUser</td><td><code>User</code></td><td><p>logged in user from <a href="user.html#userById">userById</a>  with id <code>userId</code></p>
</td>
      </tr><tr>
      <td>course</td><td><code>Course</code></td><td><p>course details from <a href="#courseByNum">courseByNum</a> with course number <code>courseNum</code></p>
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
    <td><code>200 OK</code></td><td><p>List of possible instrcutors; each person has properties <code>firstName</code>, <code>lastName</code>, <code>userId</code>, and <code>role</code></p>
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
  <a name="module_Course Controller.setInstructor"></a>
    <h3 id=setInstructor>setInstructor</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>setInstructor(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#10a54a;margin-right:10px;">POST</span>

    <code>/api/admin/:userId/courses/:courseNum/instructors/:studentId&#x27;</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Add an instuctor to the course and make user "instructor" role if user is a student</div>
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
      <td>course</td><td><code>Course</code></td><td><p>course details from <a href="#courseByNum">courseByNum</a> with course number <code>courseNum</code></p>
</td>
      </tr><tr>
      <td>student</td><td><code>User</code></td><td><p>user to make instrcutor; identified with <a href="user.html#userById">userById</a> with id <code>studentId</code></p>
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
    <td><code>400 Bad Request</code></td><td><p>On error updating the course, sends description of error as <code>{message: error-message}</code></p>
</td>
    </tr><tr>
    <td><code>500 Internal Server Error</code></td><td><p>On error updating the user, sends description of error as <code>{message: error-message}</code></p>
</td>
    </tr><tr>
    <td><code>200 OK</code></td><td><p>The updated course</p>
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
  <a name="module_Course Controller.getScenarioStatus"></a>
    <h3 id=getScenarioStatus>getScenarioStatus</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>getScenarioStatus(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#0F6AB4;margin-right:10px;">GET</span>

    <code>/api/admin/:userId/courses/:courseNum/:scenarioId</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Get scenario status (aka access granted) for a scenario for all
students in a course</div>
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
      <td>course</td><td><code>Course</code></td><td><p>course details from <a href="#courseByNum">courseByNum</a></p>
</td>
      </tr><tr>
      <td>scenario</td><td><code>Scenario</code></td><td><p>scenario of interested; identified with <a href="scenario.html#scenarioByCode">scenarioByCode</a> with id <code>scenarioId</code></p>
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
    <td><code>404 Not Found</code></td><td><p>There are no students in the course, sends error as <code>{message: &quot;no students found&quot;}</code></p>
</td>
    </tr><tr>
    <td><code>500 Internal Server Error</code></td><td><p>Database error, sends description of error as <code>{message: error-message}</code></p>
</td>
    </tr><tr>
    <td><code>200 OK</code></td><td><p>List of students in course with scenario access; each object in list has <code>firstName</code>, <code>lastName</code>, <code>userId</code>, and <code>status</code></p>
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
  <a name="module_Course Controller.courseByNum"></a>
    <h3 class="text-info" id=courseByNum>courseByNum</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>courseByNum(req, res, next, id) ⇒ <code>function</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
    <code>:courseNum</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Middleware to find course by course number</div>
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
        <td>next</td><td><code>function</code></td><td><p>next middleware function</p>
</td>
      </tr><tr>
        <td>id</td><td><code>string</code></td><td><p>course number from URL</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>function</code> - - go to next middleware  
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>next(error)</code></td><td><p>If error, pass the error to the next middleware</p>
</td>
    </tr><tr>
    <td><code>next(&#x27;Failed to load course id&#x27;)</code></td><td><p>If course doesn&#39;t exist, pass message to middleware</p>
</td>
    </tr><tr>
    <td><code>next()</code></td><td><p>If success, set request <code>course</code> and go to next middleware</p>
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