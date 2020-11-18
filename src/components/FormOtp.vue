<template>
  <div>
    <div class="d-flex justify-content-center align-items-center container">
      <div class="card py-5 px-3">
        <h5 class="m-0 text-center mb-2 text-white font-weight-bold">
          Mobile phone verification
        </h5>
        <span class="mobile-text text-center text-white"
          >Enter the code we just send on your mobile phone
        </span>
        <div class="d-flex flex-row mt-5">
          <input type="text" class="form-control" />
          <input type="text" class="form-control" />
          <input type="text" class="form-control" />
          <input type="text" class="form-control" />
          <input type="text" class="form-control" />
          <input type="text" class="form-control" />
        </div>
        <div class="text-center mt-5">
          <span class="d-block mobile-text text-white mb-2"
            >Don't receive the code?</span
          >
          <button class="btn btn-sucess">
            <router-link to="/Changepass"> Resend Code</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 350px;
  padding: 10px;
  border-radius: 20px;
  background: #8a9799;
  border: 20px;
  height: 350px;
  position: relative;
}

.container {
  height: 100vh;
}

body {
  background: rgb(133, 130, 130);
}

.mobile-text {
  color: #989696b8;
  font-size: 15px;
}

.form-control {
  margin-right: 12px;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #ff8880;
  outline: 0;
  box-shadow: none;
}

.btn {
  background: rgb(177, 192, 185);
}
</style>