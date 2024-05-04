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
        <button class="btn btn-success me-2" @click="open = true">Login</button>
        <button class="btn btn-outline-dark me-2">Sign up</button>
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
