<template>
<div>
    <br>
    <button @click="addCount()">addCount</button>
    <button @click="asyncAddCount()">asyncAddCount</button>
    <br>
    {{count}} {{doubleCount}}
</div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from "vuex";
export default {
    name: "vuex",
    computed: {
        ...mapState({
            count: state=>state.count
        }),
        ...mapGetters(["doubleCount"])
/*         count(){
            return this.$store.state.count;
        },
        doubleCount(){
            return this.$store.getters.doubleCount;
        } */
    },
    methods: {
/*         addCount(){
            this.$store.commit("addCount",3)
        },
        */
        ...mapMutations(["addCount"]),
        ...mapActions(["asyncAddCount"])
        // asyncAddCount(){
        //     this.$store.dispatch("asyncAddCount")
        // }
    }
}
</script>