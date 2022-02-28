<template>
  <div>
    <h1>个人信息  </h1>
    {{$route.params.id}}{{$route.params.users}}
  </div>

</template>

<script>
    export default {
        name: "Profile",
        //在路由执行前
        beforeRouteEnter:(to,from,next)=>{
          console.log("进入路由之前");
          next(vm => {
            vm.getData();//进入路由之前执行getData方法
          });
        },
        //在路由执行后
        beforeRouteLeave:(to,from,next)=>{
          console.log("进入路由之后");
          next();
        },
        methods:{
          getData:function () {
            this.axios({
              method:'get',
              url:'http://localhost:8080/static/mock/data.json'
            }).then(function (response) {
               console.log(response)
            })
          }
        }
    }
</script>

<style scoped>

</style>
