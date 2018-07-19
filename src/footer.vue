<template>
    <div class="footer">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluFooter"
    }
</script>

<style scoped lang="scss">
    .footer{
        min-height: 100px;
    }
</style>