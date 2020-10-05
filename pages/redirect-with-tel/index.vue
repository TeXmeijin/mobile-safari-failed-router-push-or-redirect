<template>
<div>
    <label>電話番号</label>
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
            this.$router.push({
                name: 'redirect'
            })
        }
    }
})
</script>

<style scoped>

</style>
