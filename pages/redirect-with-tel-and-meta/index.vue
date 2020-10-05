<template>
<div>
    <a href="tel:01-2345-6789">01-2345-6789</a>
    <br>
    <button @click="handle">Click for redirect</button>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    methods: {
        handle() {
            this.$router.push('/redirect')
        }
    },
    head() {
        return {
            meta: [{
                name: 'format-detection',
                content: 'telephone=no',
            }]
        }
    }
})
</script>

<style scoped>

</style>
