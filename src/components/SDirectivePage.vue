<template>
<div v-resize="onResize">window width is: {{ length }}</div>
</template>
<script>
export default{
    data(){
        return {
            direction: "vertical",
            length:0
        }
    },
    methods: {
        onResize(length){
            this.length = length
        }
    }
}
</script>