<template>
<div>
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
    }
})
</script>

<style scoped>

</style>
