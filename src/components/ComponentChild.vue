<template>
    <div>
        <h1>{{ title }}</h1>
        <button v-on:click="$emit('enlarge-text')">
            Enlarge text
        </button>
        <button v-on:click="$emit('welcome')">
            Click me to be welcomed
        </button>
        <button v-on:click="count++">You clicked me {{ count }} times.</button>
    </div>
</template>
<script>
export default {
    props: ['title'],
    data: function () {
        return {
            count: 0
        }
    },
    computed: {
        console: () => console,
        window: () => window
    },
    methods:{
        change:function(){
            console.log(33);
            this.$emit('enlarge-text');
        }        
    }
}
</script>
