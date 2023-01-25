<template>
  <main class="flex items-center justify-center min-h-screen w-full">
    <div class="px-20">
      <router-link to="/first">
        <button>First Page</button>
      </router-link>
    </div>
    <div class="px-20">
      <router-link to="/second">
        <button>Second Page</button>
      </router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomePage"
}
</script>
