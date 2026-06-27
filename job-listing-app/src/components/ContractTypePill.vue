<script>
    export default {
        props: {
            contract: String
        },
        computed: {
            getOuterClass() {
                return this.contract === 'Full-Time' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
            },
            getInnerClass() {
                return this.contract === 'Full-Time' ? 'bg-green-600' : 'bg-yellow-600'
            }
        }
    }
</script>

<template>
    <span :class="getOuterClass" class="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full">
        <span :class="getInnerClass" class="w-1.5 h-1.5 rounded-full"></span>
        {{ contract }}
    </span>
</template>