// for the manager employee
`
 <div class="card backg-color p-2 m-3" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title text-center">${manager.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted text-center">${manager.getRole()}</h6>
    <ul class="list-group">
      <li class="list-group-item">${manager.getId()}</li>
      <li class="list-group-item">Email:<a href="">${manager.getEmail()}</a></li>
      <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
    </ul>
  </div>
</div>
`


// for engineer employee
`
<div class="card backg-color p-2 m-3" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title text-center">${engineer.getName()}</h5>
  <h6 class="card-subtitle mb-2 text-muted text-center">${engineer.getRole()}</h6>
  <ul class="list-group">
    <li class="list-group-item">ID:${engineer.getId()}</li>
    <li class="list-group-item">Email: <a href="">${engineer.getEmail()}</a></li>
    <li class="list-group-item">Github:${engineer.getGithub()}</li>
</ul>
</div>
</div>
`

// for intern employee
`
<div class="card backg-color p-2 m-3" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title text-center">${intern.getName()}</h5>
  <h6 class="card-subtitle mb-2 text-muted text-center">${intern.getRole()}</h6>
  <ul class="list-group">
    <li class="list-group-item">ID:${intern.getId()}</li>
    <li class="list-group-item">Email: <a href="">${intern.getEmail()}</a></li>
    <li class="list-group-item">School:${intern.getSchool()}</li>
</ul>
</div>
</div>
`







