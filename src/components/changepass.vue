<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto mt-5">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center mb-5 text-white">
              Change Password
            </h5>
            <form class="form-signin">
              <div class="form-label-group">
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  required
                />
                <label for="inputPassword">New Password</label>
              </div>

              <div class="form-label-group">
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control mb-2"
                  placeholder="Password"
                  required
                />
                <label for="inputPassword">Confirm Password</label>
              </div>
              <p class="lead h6 mb-3 text-white">
                *Set a password of at least 8 characters
              </p>
              <button
                class="btn btn-lg btn-success btn-block text-uppercase"
                type="submit"
              >
                <a href="login.html" class="text-white">Submit</a>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="./changepass.css">
</style>