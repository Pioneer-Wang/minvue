<template>
    <div>
        详情页
        这是问号方式获取信息{{this.$route.params.id}}号信息
        <br>
        <!-- 这是使用路径方式获取信息{{this.$route.params.id}}号信息 -->
    </div>
</template>

<script>
export default {
    // watch钩子可监视路由发生变化，但只支持 hash路由模式
    // watch: {
    //     $route(){
    //         alert(1)
    //     }
    // },
   beforeRouteUpdate(to,from,next){
        console.log("beforeRouteUpdate...")
        alert(1)
        next()
   }
}
</script>