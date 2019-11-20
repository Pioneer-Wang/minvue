<template>
    <div>
        <input type="text" v-model="userName"> 
        <button @click="toList">提交</button>
    </div>
</template>
<script>
export default {
    name:'userAdd',
    data() {
        return {
            userName:''
        }
    },
    methods: {
        toList(){
            this.$router.push('/user/list')
        }
    },
    // 当离开当前组件进入另一个组件时触发这个钩子函数
    beforeRouteLeave(to,from,next){
        console.log('beforeRouteLeave...')
        if(this.userName){
           let cons= window.confirm('你确定要离开吗？')
           if(cons){
               next();
           }
            
           
        }
        
        next();
    }
}
</script>