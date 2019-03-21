<template>
  <div class="contact">
    <h1>contact me</h1>
    <p>
      currently very wip, meanwhile you can contact me at
      <a href="mailto:a.shved90@gmail.com">a.shved90@gmail.com</a>
    </p>
    <!-- https://tylerkrys.ca/blog/adding-nodemailer-email-contact-form-node-express-app -->
  </div>
</template>

<style scoped lang="scss">
$theme: $purple;

a {
  color: $theme;

  &:hover {
    color: lighten($theme, 15%);
  }
}
</style>
