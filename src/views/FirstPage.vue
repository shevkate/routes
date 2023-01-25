<template>
  <div>
    <router-link to="/">
      <span v-text="'back'"></span>
    </router-link>
    <h1>Test111</h1>
  </div>
</template>

<script>
export default {
  name: 'FirstPage',
  props: {
    msg: String
  }
}
</script>

