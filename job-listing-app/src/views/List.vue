<script>
  export default {
    data() {
      return {
        loading: false,
        jobs: [],
        error: null
      }
    },
    async mounted() {
      this.loading = true;
      try {
        const res = await fetch('https://fakejobs-api.vercel.app/jobs');
        if (!res.ok) {
          throw new Error('Request failed');
        }
        this.jobs = await res.json();
      }
      catch(err) {
        this.error = err.message;
      }
      finally {
        this.loading = false;
      }
    }
  }
</script>

<template>
  <div class="max-w-7xl m-auto p-2">
    <h1>List Page</h1>
    <div v-if="loading" class="w-10 h-10 rounded-full border-4 border-gray-200 border-t-blue-900 animate-spin m-auto"></div>
  </div>
</template>