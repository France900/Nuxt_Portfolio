<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <!-- form netlify stub nascosto -->
  <form name="contact" data-netlify="true" netlify hidden>
    <input type="hidden" name="form-name" value="contact" />
    <input name="name" />
    <input name="email" />
    <textarea name="message"></textarea>
  </form>
</template>
