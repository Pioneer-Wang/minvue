<template>
    <div>
        <li><router-link to='/user/detail/1'>用户1</router-link></li>
        <li><router-link to='/user/detail/2'>用户2</router-link></li>
        <li><router-link to='/user/detail/3'>用户3</router-link></li>
        <li><router-link to='/user/detail/4'>用户4</router-link></li>
    </div>
</template>

<script>

export default {
    name:'userList',
    // 从一个组件进入这个组件，将进入这个组件之前触发这个钩子函数
    beforeRouteEnter (to, from, next) {
        console.log('beforeRouteEnter...')
        if(from.name==='userAdd'){
            console.log('我是从userAdd来的')
            // 在这里通过this不能获得vue实例
            // 可通过next()里面的回调函数获取vue实例
            next(vm=>{
                console.log(vm)
            });
        }
        next();
    }
}
</script>