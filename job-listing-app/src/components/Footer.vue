<script>
export default {
    computed: {
        getYear() {
            return new Date().getFullYear();
        }
    }
}
</script>

<template>
    <footer class="bg-blue-900 p-4 text-white">
        <div class="text-center">
            <span>Copyright &copy; {{ getYear }}</span>
        </div>
    </footer>
</template>