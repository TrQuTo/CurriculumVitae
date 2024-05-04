<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand logo" href="/"><img src="@/assets/img/logo_cv.png" class="logo" alt="Logo CV"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link">
              <RouterLink class="cv-link" to="/">{{ $t("header_page.home") }}</RouterLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <RouterLink class="cv-link" to="/basic_template">Basic Template</RouterLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <RouterLink class="cv-link" to="/modern_template">Modern Template</RouterLink>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Order
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <select @change="saveLocaleToStorage" style="text-transform: uppercase;" v-model="$i18n.locale"
          class="form-select me-2" name="lang" id="locale" title="Select language">
          <option v-for="locale in $i18n.availableLocales" :key="locale" :value="locale">{{ locale }}</option>
        </select>
        <button class="btn btn-success me-2" data-bs-toggle="modal" data-bs-target="#LoginModal">{{
                $t("header_page.btnLogin") }}</button>
        <button class="btn btn-outline-dark me-2" data-bs-toggle="modal" data-bs-target="#SigninModal">{{
                $t("header_page.btnSignUp") }}</button>
        <!--Login Modal -->
        <div class="modal fade" id="LoginModal" tabindex="-1" aria-labelledby="SigninModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content w-75">
              <div class="modal-body p-4">
                <table class="w-100">
                  <tr class="text-center">
                    <td>
                      <h1 class="fw-bold">{{ $t("header_page.lblLogin") }}</h1>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label class="form-label" for="username">{{ $t("header_page.lblUsername") }}</label>
                      <div class="input-group mb-2">
                        <span class="input-group-text" id="username"><img style="width: 15px;"
                            src="../../assets/img/user-alt-1-svgrepo-com.svg" alt="icon password"></span>
                        <input type="text" class="form-control" :placeholder="$t('header_page.plhEnterUsername')"
                          aria-label="Username" aria-describedby="username">
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="password">{{ $t("header_page.lblPassword") }}</label>
                      <div class="input-group mb-1">
                        <span class="input-group-text" id="password"><img src="../../assets/img/icons8-password.svg"
                            alt="icon password"></span>
                        <input type="password" class="form-control" :placeholder="$t('header_page.plhEnterPassword')"
                          aria-describedby="password">
                      </div>
                    </td>
                  </tr>
                  <tr class="text-end">
                    <td>
                      <p>{{ $t("header_page.lblForgetPassword") }}</p>
                    </td>
                  </tr>
                  <tr class="text-center">
                    <td class="pb-3">
                      <button type="button" class="btn btn-primary w-100">{{ $t("header_page.btnLogin") }}</button>
                    </td>
                  </tr>
                  <tr class="text-center">
                    <td>
                      <p class="mb-2">{{ $t("header_page.txtOrSignUpUsing") }}</p>
                    </td>
                  </tr>
                  <tr class="text-center">
                    <td class="pb-5">
                      <img class="ps-1 pe-1" src="@/assets/img/icons8-facebook.svg" alt="Icon Login Facebook">
                      <img class="ps-1 pe-1" src="@/assets/img/icons8-google.svg" alt="Icon Login Google">
                      <img class="ps-1 pe-1" src="@/assets/img/icons8-linkedin.svg" alt="Icon Login Link In">
                    </td>
                  </tr>
                  <tr class="text-center">
                    <td>
                      <p class="mb-1">{{ $t("header_page.txtHaveNotAccountYet") }}</p>
                    </td>
                  </tr>
                  <tr class="text-center">
                    <td>
                      <button type="button" class="btn text-uppercase">{{ $t("header_page.btnSignUp") }}</button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!--Sign in Modal -->
        <div class="modal fade" id="SigninModal" tabindex="-1" aria-labelledby="SigninModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="SigninModalLabel">Sign in</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script src="./header_page.js"></script>

<style>
.form-select {
  width: 70px;
  margin-left: 10px;
}

.cv-link {
  text-decoration: unset;
  color: black;
}

img.logo {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  position: relative;
  position: relative;
  overflow: hidden;
  border-radius: 20%;
  box-shadow: 0 0 10px rgb(163 156 152);
}

a.logo {
  padding-top: unset;
  padding-bottom: unset;
}

nav {
  background-image: unset;
}
</style>./header_page.js./header_page.js
