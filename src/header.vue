<template>
    <div class="header">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluHeader"
    }
</script>

<style scoped lang="scss">
    .header{
        min-height: 100px;
    }
</style>