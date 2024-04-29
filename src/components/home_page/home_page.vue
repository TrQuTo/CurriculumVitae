<template>
  <div>
    <h1>Hello App!</h1>
    <nav>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/basic_template">Go to About</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>
<script src="./home_page.js"></script>
