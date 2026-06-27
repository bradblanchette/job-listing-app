<script setup>
  import JobPreviewCard from '../components/JobPreviewCard.vue'
</script>

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
    <h1 class="text-3xl mb-3 py-4 border-b border-gray-300">Available jobs</h1>
    <div v-if="loading" class="w-10 h-10 rounded-full border-4 border-gray-200 border-t-blue-900 animate-spin m-auto"></div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <JobPreviewCard v-for="job in jobs" :title="job.title" :location="job.location" :contract="job.type" :companyName="job.company.name"/>
    </div>
  </div>
</template>