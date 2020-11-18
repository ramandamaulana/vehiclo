<template>
  <div>
    <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div class="container">
        <div class="card login-card">
          <div class="row no-gutters">
            <div class="col-md-6">
              <div class="card-body">
                <div class="brand-wrapper">
                  <h2>Masuk</h2>
                </div>
                <p class="login-card-description text-left">
                  Masuk untuk memantau kendaraan Anda
                </p>
                <form action="#!">
                  <div class="form-group">
                    <label for="email" class="sr-only">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="form-control"
                      placeholder="Email address"
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="password" class="sr-only">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="form-control"
                      placeholder="***********"
                    />
                  </div>
                   <div class="row">
                    <div class="ml-3"></div>
                    <my-captcha
                      :callSuccess="captchaOk"
                      color="green"
                    ></my-captcha>
                  </div>
                  <input
                    name="login"
                    id="login"
                    class="btn btn-block login-btn mb-4 mt-3"
                    type="button"
                    value="Login"
                  />
                </form>
                <p class="login-card-footer-text ml-5">
                  Lupa password?<a
                    href="register.html"
                    class="text-reset"
                    data-target="#pwdModal"
                    data-toggle="modal"
                    >Klik di sini</a
                  >
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <img
                src="assets/img/login1.png"
                alt="login"
                class="login-card-img"
              />
            </div>
          </div>
        </div>
        <!-- <div class="card login-card">
        <img src="assets/images/login.jpg" alt="login" class="login-card-img">
        <div class="card-body">
          <h2 class="login-card-title">Login</h2>
          <p class="login-card-description">Sign in to your account to continue.</p>
          <form action="#!">
            <div class="form-group">
              <label for="email" class="sr-only">Email</label>
              <input type="email" name="email" id="email" class="form-control" placeholder="Email">
            </div>
            <div class="form-group">
              <label for="password" class="sr-only">Password</label>
              <input type="password" name="password" id="password" class="form-control" placeholder="Password">
            </div>
            <div class="form-prompt-wrapper">
              <div class="custom-control custom-checkbox login-card-check-box">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Remember me</label>
              </div>              
              <a href="#!" class="text-reset">Forgot password?</a>
            </div>
            <input name="login" id="login" class="btn btn-block login-btn mb-4" type="button" value="Login">
          </form>
          <p class="login-card-footer-text">Don't have an account? <a href="#!" class="text-reset">Register here</a></p>
        </div>
      </div> -->
        <div
          id="pwdModal"
          class="modal fade"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <div class="col-md-12">
                  <div class="panel panel-default">
                    <div class="panel-body">
                      <div class="text-center">
                        <h4>Lupa Password</h4>
                        <p class="mt-4 mb-4">
                          Masukkan email Anda untuk mendapat link untuk merubah
                          password Anda
                        </p>
                        <div class="panel-body">
                          <fieldset>
                            <div class="form-group text-left">
                              <label class="">Email</label>
                              <input
                                class="form-control input-lg"
                                placeholder="E-mail Address"
                                name="email"
                                type="email"
                              />
                            </div>
                            <a href="#"
                              ><input
                                class="btn btn-lg btn-success btn-block"
                                value="Kirim"
                                type="submit"
                                data-target="#otp"
                                data-toggle="modal"
                            /></a>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 text-center">
                <button class="btn" data-dismiss="modal" aria-hidden="true">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          id="otp"
          class="modal fade"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <div class="col-md-12">
                  <div class="panel panel-default">
                    <div class="panel-body">
                      <div class="text-center">
                        <h4>Masukkan OTP</h4>
                        <p class="mt-4 mb-4">
                          Kode OTP anda sudah dikirim ke email/nomor Anda
                        </p>
                        <p>1:10</p>

                        <div class="panel-body">
                          <fieldset>
                            <div class="d-flex flex-row mt-2 mb-4">
                              <input type="text" class="form-control mr-3" />
                              <input type="text" class="form-control mr-3" />
                              <input type="text" class="form-control mr-3" />
                              <input type="text" class="form-control mr-3" />
                              <input type="text" class="form-control mr-3" />
                              <input type="text" class="form-control mr-3" />
                            </div>
                            <a href="#"
                              ><input
                                class="btn btn-lg btn-success btn-block"
                                value="Kirim"
                                type="submit"
                                 data-target="#changepassword"
                                 data-toggle="modal"
                            /></a>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 text-center">
                <button class="btn" data-dismiss="modal" aria-hidden="true">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>


          <div
          id="changepassword"
          class="modal fade"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <div class="col-md-12">
                  <div class="panel panel-default">
                    <div class="panel-body">
                      <div class="text-center">
                        <h4>Change Password</h4>
                        <p class="mt-4 mb-4">
                          Masukkan Password Baru Anda Pastikan 8 Character
                        </p>
                        <div class="panel-body">
                          <fieldset>
                            <div class="form-group text-left">
                              <input
                                class="form-control input-lg"
                                placeholder="New Password"
                                name="email"
                                type="text"
                              />
                            </div>
                            <div class="form-group text-left mb-4">
                              <input
                                class="form-control input-lg"
                                placeholder="Confirm Password"
                                name="email"
                                type="text"
                              />
                            </div>

                            <router-link to="/profile">
                            <a href="#"
                              ><input
                                class="btn btn-lg btn-success btn-block"
                                value="Kirim"
                                type="submit"
                                data-target="#otp"
                                data-toggle="modal"
                            /></a>
                            </router-link>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 text-center">
                <button class="btn" data-dismiss="modal" aria-hidden="true">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </main>
  </div>
</template>
<script>
import myCaptcha from "vue-captcha";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
    components: {
    'my-captcha': myCaptcha
  }
};
</script>

