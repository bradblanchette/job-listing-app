<script>
  export default {
    data() {
      return {
        jobs: [],
        error: null
      }
    },
    async mounted() {
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
    }
  }
</script>

<template>
  <div class="max-w-7xl m-auto p-2">
    <h1>List Page</h1>
  </div>
</template>