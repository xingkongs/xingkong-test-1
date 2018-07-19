<template>
    <div class="layout" :class="layoutclass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "layout",
        data() {
            return {
                layoutclass:{
                    hasSider: false
                }
            }
        },
        mothods: {

        },
        mounted() {
            this.$children.forEach((vm)=>{
                if(vm.$options.name === 'GuluSider'){
                    this.layoutclass.hasSider = true
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    .layout {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        &.hasSider {
            flex-direction: row;
        }
    }
</style>