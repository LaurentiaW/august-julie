<template>
  <div class="container">
    <form
      name="contactus"
      action="/thanks"
      method="post"
      netlify
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contactus">
      <div class="form-field">
        <label for="name">Naam:</label>
        <input type="text" name="name" required>
      </div>
      <div class="form-field">
        <label for="email">e-mail:</label>
        <input type="email" name="email" required>
      </div>
      <div class="form-field">
        <label for="phone">telefoonnummer:</label>
        <input type="phone" name="phone" required>
      </div>
      <div class="form-field">
        <label for="message">Message:</label>
        <textarea name="message" required />
      </div>
      <button type="submit" value="Send message">
        Verstuur
      </button>
    </form>
    <span class="fancy-text">Made with love <br> X Carlijn Treep</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
form {
  max-width: 550px;
}
.form-field {
  margin-bottom: 1rem;
}

textarea {
  min-height: 150px;
}
.fancy-text {
  font-family: var(--fancy-font);
  color: var(--comp-clr);
  font-size: 3rem;
  display: block;
  width: 300px;
  margin: auto;
  padding: 1.25rem;
}
button {
  text-align: center;
  width: 300px;
}
</style>
