<template>
    <div>
        <h2>组件传值</h2>
        <div :style="{ fontSize: postFontSize + 'em' }" >
            <component-child title="测试标题" v-on:welcome="console.log('Hi!')" @enlarge-text="console.log(333);postFontSize += 0.1"></component-child>
        </div>
    </div>
</template>
<script>
import ComponentChild from './ComponentChild.vue'
export default {
    data:()=>{
        return {
            postFontSize:1,
        }
    },
    components:{
        ComponentChild
    },
    computed: {
        console: () => console,
        window: () => window
    }    
}
</script>