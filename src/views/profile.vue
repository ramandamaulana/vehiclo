<template>
  <div id="wrapper">
   
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Topbar -->
        <nav
          class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
        >
          <!-- Sidebar Toggle (Topbar) -->
          <button
            id="sidebarToggleTop"
            class="btn btn-link d-md-none rounded-circle mr-3"
          >
            <i class="fa fa-bars"></i>
          </button>

          <!-- Topbar Search -->
          <form
            class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
          >
            <div class="input-group">
              <input
                type="text"
                class="form-control bg-light border-0 small"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-success" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>

          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">
            <!-- Nav Item - Search Dropdown (Visible Only XS) -->
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="searchDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-search fa-fw"></i>
              </a>
              <!-- Dropdown - Messages -->
              <div
                class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown"
              >
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <!-- Nav Item - Alerts -->
            <li class="nav-item dropdown no-arrow mx-1">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-bell fa-fw"></i>
                <!-- Counter - Alerts -->
                <span class="badge badge-danger badge-counter">3+</span>
              </a>
              <!-- Dropdown - Alerts -->
              <div
                class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown"
              >
                <h6 class="dropdown-header">Alerts Center</h6>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-primary">
                      <i class="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 12, 2019</div>
                    <span class="font-weight-bold"
                      >A new monthly report is ready to download!</span
                    >
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-success">
                      <i class="fas fa-donate text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 7, 2019</div>
                    $290.29 has been deposited into your account!
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-warning">
                      <i class="fas fa-exclamation-triangle text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 2, 2019</div>
                    Spending Alert: We've noticed unusually high spending for
                    your account.
                  </div>
                </a>
                <a
                  class="dropdown-item text-center small text-gray-500"
                  href="#"
                  >Show All Alerts</a
                >
              </div>
            </li>

            <!-- Nav Item - Messages -->
            <li class="nav-item dropdown no-arrow mx-1">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="messagesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-envelope fa-fw"></i>
                <!-- Counter - Messages -->
                <span class="badge badge-danger badge-counter">7</span>
              </a>
              <!-- Dropdown - Messages -->
              <div
                class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="messagesDropdown"
              >
                <h6 class="dropdown-header">Message Center</h6>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img
                      class="rounded-circle"
                      src="img/undraw_profile_1.svg"
                      alt=""
                    />
                    <div class="status-indicator bg-success"></div>
                  </div>
                  <div class="font-weight-bold">
                    <div class="text-truncate">
                      Hi there! I am wondering if you can help me with a problem
                      I've been having.
                    </div>
                    <div class="small text-gray-500">Emily Fowler · 58m</div>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img
                      class="rounded-circle"
                      src="img/undraw_profile_2.svg"
                      alt=""
                    />
                    <div class="status-indicator"></div>
                  </div>
                  <div>
                    <div class="text-truncate">
                      I have the photos that you ordered last month, how would
                      you like them sent to you?
                    </div>
                    <div class="small text-gray-500">Jae Chun · 1d</div>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img
                      class="rounded-circle"
                      src="img/undraw_profile_3.svg"
                      alt=""
                    />
                    <div class="status-indicator bg-warning"></div>
                  </div>
                  <div>
                    <div class="text-truncate">
                      Last month's report looks great, I am very happy with the
                      progress so far, keep up the good work!
                    </div>
                    <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img
                      class="rounded-circle"
                      src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                      alt=""
                    />
                    <div class="status-indicator bg-success"></div>
                  </div>
                  <div>
                    <div class="text-truncate">
                      Am I a good boy? The reason I ask is because someone told
                      me that people say this to all dogs, even if they aren't
                      good...
                    </div>
                    <div class="small text-gray-500">Chicken the Dog · 2w</div>
                  </div>
                </a>
                <a
                  class="dropdown-item text-center small text-gray-500"
                  href="#"
                  >Read More Messages</a
                >
              </div>
            </li>

            <div class="topbar-divider d-none d-sm-block"></div>

            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="mr-2 d-none d-lg-inline text-gray-600 small"
                  >Douglas McGee</span
                >
                <img
                  class="img-profile rounded-circle"
                  src="img/undraw_profile.svg"
                />
              </a>
              <!-- Dropdown - User Information -->
              <div
                class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                <a class="dropdown-item" href="#">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>

                <div class="dropdown-divider"></div>
                <a
                  class="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  <i
                    class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                  ></i>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid">
          <div class="container">
            <div class="row flex-lg-nowrap">
              <div class="col-lg-12 col-md-12">
                <div class="row">
                  <div class="col mb-3">
                    <div class="card">
                      <div class="card-body">
                        <div class="e-profile">
                          <div class="row">
                            <div class="col-12 col-sm-auto mb-3">
                              <div class="mx-auto" style="width: 140px">
                                <div
                                  class="d-flex justify-content-center align-items-center rounded"
                                  style="
                                    height: 140px;
                                    background-color: rgb(233, 236, 239);
                                  "
                                >
                                  <span
                                    style="
                                      color: rgb(166, 168, 170);
                                      font: bold 8pt Arial;
                                    "
                                    ><img src="/img/profile.png" alt=""
                                  /></span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="col d-flex flex-column flex-sm-row justify-content-between mb-3"
                            >
                              <div
                                class="text-center text-sm-left mb-2 mb-sm-0"
                              >
                                <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">
                                  Lilo Pasha
                                </h4>
                                <p class="mb-0">PT SIP</p>
                                <div class="text-muted">
                                  <small>BSD City, Indonesia</small>
                                </div>
                                <div class="mt-2">
                                  <button class="btn btn-success" type="button">
                                    <i class="fa fa-fw fa-camera"></i>
                                    <span>Change Photo</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ul class="nav nav-tabs">
                            <li class="nav-item">
                              <a href="" class="active nav-link">Settings</a>
                            </li>
                          </ul>
                          <div class="tab-content pt-3">
                            <div class="tab-pane active">
                              <form class="form" novalidate="">
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Nama Depan</label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            name="name"
                                            placeholder="Lilo"
                                            value="Lilo"
                                          />
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Nama Akhir</label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            name="username"
                                            placeholder="Pasha"
                                            value="Pasha"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Email</label>
                                          <input
                                            class="form-control"
                                            type="email"
                                            name="name"
                                            placeholder="lilodpasha@yahoo.com"
                                            value="lilodpasha@yahoo.com"
                                          />
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Nomor Handphone</label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            name="username"
                                            placeholder="0841 3131 4143"
                                            value="0841 3131 4143"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Tempat Kerja</label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            name="name"
                                            placeholder="PT SIP"
                                            value="PT SIP"
                                          />
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Username</label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            name="username"
                                            placeholder="BSD City, Indonesia"
                                            value="BSD City, Indonesia"
                                          />
                                        </div>
                                        <div class="row">
                                          <div
                                            class="col d-flex justify-content-end"
                                          >
                                            <button
                                              class="btn btn-success"
                                              type="submit"
                                            >
                                              Simpan perubahan
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <hr class="mb-5 mt-5" />
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-12 col-sm-6 mb-3">
                                    <div class="mb-2">
                                      <b>Change Password</b>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Current Password</label>
                                          <input
                                            class="form-control"
                                            type="password"
                                            placeholder="••••••"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>New Password</label>
                                          <input
                                            class="form-control"
                                            type="password"
                                            placeholder="••••••"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label
                                            >Confirm
                                            <span class="d-none d-xl-inline"
                                              >Password</span
                                            ></label
                                          >
                                          <input
                                            class="form-control"
                                            type="password"
                                            placeholder="••••••"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <button class="btn btn-success mt-3">
                                      Simpan
                                    </button>
                                  </div>
                                  <div class="col-12 col-sm-5 offset-sm-1 mb-3">
                                    <div class="mb-5">
                                      <b>Notifikasi</b> Atur notifikasi untuk
                                      akun Anda
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div
                                          class="custom-controls-stacked px-2 mb-3"
                                        >
                                          <h5 class="mb-3">Email</h5>
                                          <div
                                            class="custom-control custom-checkbox mb-3"
                                          >
                                            <input
                                              type="checkbox"
                                              class="custom-control-input"
                                              id="notifications-blog"
                                              checked=""
                                            />
                                            <label
                                              class="custom-control-label"
                                              for="notifications-blog"
                                              >Email</label
                                            >
                                          </div>
                                          <div
                                            class="custom-control custom-checkbox mb-3"
                                          >
                                            <input
                                              type="checkbox"
                                              class="custom-control-input"
                                              id="notifications-news"
                                              checked=""
                                            />
                                            <label
                                              class="custom-control-label"
                                              for="notifications-news"
                                              >Push notifications</label
                                            >
                                          </div>
                                          <div
                                            class="custom-control custom-checkbox mb-3"
                                          >
                                            <input
                                              type="checkbox"
                                              class="custom-control-input"
                                              id="notifications-offers"
                                              checked=""
                                            />
                                            <label
                                              class="custom-control-label"
                                              for="notifications-offers"
                                              >Text Messages</label
                                            >
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div
                                          class="custom-controls-stacked px-2"
                                        >
                                          <h5 class="mb-3">Messages</h5>
                                          <div
                                            class="custom-control custom-checkbox mb-3"
                                          >
                                            <input
                                              type="checkbox"
                                              class="custom-control-input"
                                              id="notifications-blog"
                                              checked=""
                                            />
                                            <label
                                              class="custom-control-label"
                                              for="notifications-blog"
                                              >Email</label
                                            >
                                          </div>
                                          <div
                                            class="custom-control custom-checkbox mb-3"
                                          >
                                            <input
                                              type="checkbox"
                                              class="custom-control-input"
                                              id="notifications-news"
                                              checked=""
                                            />
                                            <label
                                              class="custom-control-label"
                                              for="notifications-news"
                                              >Push Notifications</label
                                            >
                                          </div>
                                          <div
                                            class="custom-control custom-checkbox"
                                          >
                                            <input
                                              type="checkbox"
                                              class="custom-control-input"
                                              id="notifications-offers"
                                              checked=""
                                            />
                                            <label
                                              class="custom-control-label"
                                              for="notifications-offers"
                                              >Text Messages</label
                                            >
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col d-flex justify-content-end">
                                    <button
                                      class="btn btn-success"
                                      type="submit"
                                    >
                                      Simpan perubahan
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2020</span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
  <!-- End of Page Wrapper -->
</template>


