<script>
    import ContractTypePill from './ContractTypePill.vue'

    export default {
        components: { ContractTypePill },
        props: {
            title: String,
            location: String,
            contract: String,
            companyName: String
        }
    }
</script>

<template>
    <div class="bg-white border border-gray-300 rounded shadow-xs p-4">
        <h2 class="font-bold">{{ title }}</h2>
        <span class="text-sm">{{ companyName }}</span>
        <hr class="border-gray-300 my-3">
        <div class="flex items-center gap-2 flex-wrap">
            <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-200">
            📍 {{ location }}
            </span>
            <ContractTypePill :contract="contract" />
        </div>
    </div>
</template>