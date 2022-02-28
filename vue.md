## VUE

参考https://blog.csdn.net/DDDDeng_/article/details/107475920

2022-02-28 19：28

## 概述

​	Vue是一套用于构建用户界面的逐渐式框架，发布于2014年2月。与其他大型框架不同的是，Vue被设计为可以自底向上逐层应用。Vue的核心库只关注视图层，不仅易于上手，还便于与第三方库（vue-router：跳转，vue-resource：通信，vuex：管理）或概有项目整合

## /心

数据驱动，组件化

优点：借鉴了AngulaJS的模块化开发和React的虚拟Dom，虚拟Dom就是把Dom操作放到内存中执行

常用属性

- v-if
- v-else-if
- v-else
- v-for
- v-on 绑定事件，简写@
- v-model 数据双向绑定
- v-bind 给组件绑定参数，简写 ：

组件化

- 组合组件slot插槽
- 组件内部绑定事件需要使用到 this.$emit（‘事件名’，参数）
- 计算属性的特色，缓存计算数据

​        遵循SoC关注度分离原则，Vue是纯粹的视图框架，并不包含，比如Ajax之类的通信功能，为了解决通信问题，我们需要使用Axios框架做异步通信

## UI框架

- Ant-Design：阿里巴巴出品，基于React的UI框架
- Element、iview、ice：饿了么出品，基于vue的ui框架
- Bootstrap：Twitter推出的一个用于前端开发的开源工具包
- AmazeUI："妹子UI"，一款HTML5跨屏前端框架

## JavaScript构建工具

- Babel：JS编译工具，主要用于浏览器不支持ES新特性，比如用于编译TypeScript
- WebPack：模块打包器，主要作用是打包、压缩、合并及按序加载



## 后端技术

前端人员为了方便开发也需要掌握一定的后端技术，但我们Java后台人员知道后台知识体系极其庞大复杂，所以为了方便前端人员开发后台应用，就出现了NodeJs这样的技术

NodeJs框架及项目管理工具如下

- Express：NodeJs框架
- Koa：Express简化版
- NPM：项目综合管理工具，类似于Maven
- YARN：NPM的替代方案，类似于Maven和Gradle的关系

## 前端为主的MV*时代

- MVC（同步通信为主）：Model、View、Controller
- MVP（异步通信为主）：Model、View、Presenter
- MVVM（异步通信为主）：Model、View、ViewModel
  - 低耦合：试图（view）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的View上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变
  - 可复用：你可以把一些视图逻辑放在一个ViewModel里面，让很多View重用这段视图逻辑
  - 独立开发：开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计
  - 可测试：界面素来是比较难于测试的，而现在测试可以针对ViewModel来写。



## 第一个Vue

IDEA  ：插件 Vue



### 下载地址

- CDN

  - <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>  

  - <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js"></script>

## 代码编写

​	Vue.js的核心是实现了MVVM模式，她扮演的角色就是ViewModel层，那么所谓的第一个用程序就是展示她的数据绑定功能

```vue
<!--view层 模板-->
<div id="app">
    {{message}}
</div>


<!--1.导入Vue。js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js"></script>
<script>
    var vm = new Vue({
        el:"#app",
        //Model :数据
        data:{
            message:"hello vue!"
        }
    });
</script>
```



## v-bind

> 我们可以使用v-bind来绑定元素特性

```vue
<!--view层 模板-->
<div id="app">
    <span v-bind:title="message">
        鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
</div>


<!--1.导入Vue。js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js"></script>
<script>
    var vm = new Vue({*
        el:"#app",
        //Model :数据
        data:{
            message:"hello vue!"
        }
    });
</script>
```



​		指令带有前缀 v-，以表示它们是Vue提供的特殊特性。它们会在渲染的DOM上应用特殊的响应式行为 该指令的意思是："将这个元素节点的title特性和Vue实例的message属性保持一致"

​		如果你再次打开浏览器的JavaScript控制台，输入app.message = "新消息" ，就会再一次看到这个绑定了title特性的HTML已经进行了更新



## v-if,v-else

- v-if
- v-else

v-if

```vue
<!--view层 模板-->
<div id="app">
    <h1 v-if="ok">Yes</h1>
    <h1 v-else>No</h1>

    <h2 v-if="type === 'A'">A</h2>
    <h2 v-else-if="type === 'B'">B</h2>
    <h2 v-else>C</h2>
</div>


<!--1.导入Vue。js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js"></script>
<script>
    var vm = new Vue({
        el:"#app",
        data:{
            ok : true,
            type : 'A'
        }
    });
</script>
```

## v-for

```vue
<!--view层 模板-->
<div id="app">
    <li v-for="item in items">
        {{item.message}}
    </li>

    <li v-for="(item,index) in items">
        {{item.message}} --- {{index}}
    </li>
</div>


<!--1.导入Vue。js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js"></script>
<script>
    var vm = new Vue({
        el:"#app",
        data : {
            items : [
                {message : "chj"},
                {message : "xxx"}
            ]
        }
    });
</script>
```

## v-on

> v-on 监听事件

```vue
<!--view层 模板-->
<div id="app">
    <button v-on:click="sayHi()">click me</button>
</div>


<!--1.导入Vue。js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js"></script>
<script>
    var vm = new Vue({
        el:"#app",
        data : {
            message : "chj"
        },
        methods : { //方法必须定义在vue的methods对象中 v-on:事件
            sayHi : function () {
                alert(this.message);
            }
        }
    });
</script>
```



## v-model

什么是双向数据绑定

​		Vue.js是一个MVVM框架，即数据双向绑定，即当数据发生变化的时候，视图也就发生变化，当视图发生变化的时候，数据也会跟着同步变化

### 在表单中使用双向数据绑定

​		可以用v-model 指令在表单<input>、<textarea>及<select>元素上创建双向数据绑定。它会根据控件类自动选择正确的方法来更新元素

​		**注意： v-model 会忽略所有表单元素的value、checked、selected特性的初始值而总是将Vue实例的数据作为数据来源。应该通过JavaScript在组件的data选项中声明初始值！**

​		如果v-model表达式的初始值未能匹配任何选项，<select> 元素将被渲染为"未选中"状态。在IOS中，这会使用户无法选择第一个选项。因为这样的情况下，ios不会触发change事件。因此，推荐像上面这样提供一个值为空的禁用选项

```vue
<div id="app">
    输入文本:<input type="text" v-model="message">{{message}}
    </br>
    性别：
    <input type="radio" name="sex" value="男" v-model="isSex"> 男
    <input type="radio" name="sex" value="女" v-model="isSex"> 女
    选择了   {{isSex}}
    </br>

    下拉框：
    <select v-model="selected">
        <option value="" disabled>--请选择--</option>
        <option v-for="s in options">{{s}}</option>
    </select>
    选择了:{{selected}}
</div>

<!--1.导入Vue。js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js"></script>
<script>
    var vm = new Vue({
        el:"#app",
        data:{
            message : "123",
            isSex : "男",
            selected : "B",
            options : ["A","B","C"]
        }
    });
</script>
```



## vue组件

>​		组件是可复用的Vue实例，说白了就是一组可以重复使用的模板，跟JSTL的自定义标签、Thymeleaf的 th:fragment 等框架有者异曲同工之妙。通常一个应用会以一颗嵌套的组件树的形式来组织



### 第一个Vue组件

​	在实际开发中，我们不会用以下方式开发组件，而是采用vue-cli创建 .vue模板文件的方式开发

**使用Vue.component（）方法注册组件，格式如下:**

```vue
<div id="app">
    <!--
    v-for 循环data中的items
    v-bind:组件的变量 = “循环的值”
    把组件的变量传给props
    -->
    <chj v-for="item in items" v-bind:aa="item"></chj>
</div>

<!--1.导入Vue。js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js"></script>
<script>
    //定义一个Vue组件component
    Vue.component("chj",{
        props : ['aa'],
        template : '<li>{{aa}}</li>'
    });

    var vm = new Vue({
        el:"#app",
        data : {
            items : ['Java','Linux','Js']
        }
    });
</script>
```

- Vue.component（）：注册组件
- chj：自定义组件的名字
- template：组件的模板

使用props属性传递参数 像上面那样用组件没有任何意义，所以我们是需要传递参数到组件的，此刻就需要使用props属性了

**注意：默认规则下props属性里的值不能为大写**

-  v-for="item in items"   遍历Vue实例中定义的名为items的数组，并创建同等数量的组件
- v-bind:aa="item" 将遍历的item项绑定到组件props定义的名为aa属性上； =号左边的aa为props定义的属性名，右边的为item  in  items 中遍历的item项的值



## Axios网络通信

### Vue：Axios异步通信

### 什么是Axios

> Axios是一个开源的可以用在浏览器端和NodeJs 的异步通信框架，她的主要作用就是实现AJAX异步通信

- 从浏览器中创建XMLHttpRequests
- 从node.js创建http请求
- 支持Promise API [JS中链式编程]
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换JSON数据
- 客户端支持防御XSRF（跨站请求伪造）

GitHub：https://github.com/axios/axios

中文文档：http://www.axios-js.com/

### 为什么使用Axios

​		由于Vue.js是一个视图层框架 并且作者（尤雨溪）严格准守SoC（关注度分离原则），所以Vue.js并不包含AJAX的通信功能，为了解决通信问题，作者单独开发了一个名为vue-resource的插件，不过在进入2.0版本以后停止了对该插件的维护并推荐了Axios框架，少用jQuery，因为它操作Dom太频繁

### 第一个Axios应用程序

​		开发接口大部分都是采用JSON格式,可以先在项目里模拟一段JSON数据，数据内容如下：创建一个名为data.json的文件并填入上面的内容，放在项目的根目录下

```json
{
  "name": "chj",
  "age": "23",
  "sex": "男",
  "url":"https://www.baidu.com",
  "address": {
    "street": "萧山区",
    "city": "杭州",
    "country": "中国"
  },
  "links": [
    {
      "name": "bilibili",
      "url": "https://www.bilibili.com"
    },
    {
      "name": "baidu",
      "url": "https://www.baidu.com"
    },
    {
      "name": "cqh video",
      "url": "https://www.4399.com"
    }
  ]
}
```





```vue
    <style>
        /*v-clock 解决闪烁问题*/
        [v-clock]{
            display: none;
        }
    </style>
</head>
<body>
<div id="vue" v-clock>
    <div>{{info.name}}</div>
    <div>{{info.address.city}}</div>
    <a v-bind:href="info.url">百度</a>
</div>

<!--1.导入vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<!--导入axios-->
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script>
    var vm = new Vue({
        el : "#vue",
        data : {
            info: {

            }
        },
        data(){
           return{
               info:{
                   name:null,
                   address:{
                        street:null,
                       city:null,
                       country:null
                   },
                   url:null
               }
           }
        },
        mounted(){//钩子函数，链式编程 ES新特性
            axios.get('data.json').then(response=>{this.info = response.data});
        }
    });
</script>
```







# Vue的生命周期

官方文档：https://cn.vuejs.org/guide/instance.html#

Vue实例有一个完整的生命周期，也就是从开始创建，初始化数据、编译模板、挂载DOM、渲染—更新—渲染、卸载等一系列过程，我们称这是Vue的生命周期。通俗说就是Vue实例从创建到销毁的过程就是生命周期

 ![Vue 实例生命周期](https://cn.vuejs.org/images/lifecycle.png) 



# Vue：计算属性、内容分发、自定义事件

##  什么是计算属性

> ​		计算属性的重点突出在 **属性** 两个字上（属性是名词），首先它是个 **属性** 其次这个属性有 **计算** 的能力（计算是动词），这里的 **计算** 就是个函数；简单点说，它就是一个能够将计算结果缓存起来属性（强行为转化成了静态的属性），可以想象为缓存



```vue
<div id="app">
    <p>currentTime1 : {{currentTime1()}}</p>
    <p>currentTime2 : {{currentTime2}}</p>
</div>

<!--1.导入vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script>
    var vm = new Vue({
        el:"#app",
        data : {
            message : "hello"
        },
        methods :{
            currentTime1 : function () {
                return Date.now();//返回一个时间戳
            }
        },
        computed:{ //计算属性：methods，computed 方法名不能重名，重名之后，只会调用methods方法
            currentTime2 : function () {
                this.message;
                return Date.now(); 
            }
        }
    })
</script>
```

**注意：methods和computed里面的东西不能重名**

- methods：定义方法，调用方法使用currentTime1()，需要带括号
- computed：定义计算属性，调用属性使用currentTime2，不需要带括号；this.message是为了能够让currentTime2观察到数据变化而变化
- 如果在方法中的值发生了变化，则缓存就会刷新！可以在控制台使用vm.message="chj"，改变下数据的值，再次测试

**结论**

​	调用方法时，每次都需要进行计算，既然有计算过程则必定产生系统开销，那如果这个结果是不经常变化的呢？此刻就可以考虑将这个结果缓存起来，采用计算属性可以很方便的做到这一点，**计算属性的主要特性就是为了将不经常变化的计算结果进行缓存，以节约我们的系统开销**



# Slot插槽

## 内容分发

​		在Vue.js中我们使用<slot>元素作为承载分发内容的出口，作者称其为插槽，可以应用在组合组件的场景中

```vue

<div id="app">
    <todo>
        <todo-biaoti slot="todo-biaoti" :biaoti="title"></todo-biaoti>
        <todo-neirong slot="todo-neirong" v-for="item in todoItems" :neirong="item"></todo-neirong>
    </todo>
</div>

<!--1.导入vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script>
    Vue.component("todo",{
        template: "<div>\
                        <slot name='todo-biaoti'></slot>\
                       <ul>\
                            <slot name='todo-neirong'></slot>\
                        </ul> \
                    </div>\ "
    })
    Vue.component("todo-biaoti",{
        props:['biaoti'],
        template: "<div> {{biaoti}} </div>"
    })
    Vue.component("todo-neirong",{
        props:['neirong'],
        template: "<div> {{neirong}} </div>"
    })

    var vm = new Vue({
        el:"#app",
        data : {
            title:'标题',
            todoItems:['Java','Linux','Python']
        }
    })
</script>
```



## 自定义事件

​		数据项在Vue的实例中，但删除操作要在组件中完成，那么组件如何才能删除Vue实例中的数据呢？此时就涉及到参数与事件分发了，Vue为我们提供了自定义事件的功能很好的帮助我们解决了这个问题；使用 this.$emit（'自定义事件名',参数）

```vue
<div id="app">
    <todo>
        <todo-title slot="todo-title" :title="title"></todo-title>
        <todo-body  slot="todo-body" v-for="(item,index) in infoItems" :item="item" :index="index" @remove="itemRemove(index)"></todo-body>
    </todo>
</div>

<!--1.导入vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script>
    Vue.component('todo',{
        template : "<div>\
                        <slot name='todo-title'></slot>\
                        <ul>\
                             <slot name='todo-body'></slot>\
                        </ul>\
                    </div>"
    })
    Vue.component('todo-title',{
        props:['title'],
        template: "<p> {{title}}</p>"
    })
    Vue.component('todo-body',{
        props:['item','index'],
        template: "<li>{{index}}-----{{item}} <button @click='remove(index)'>删除</button></li> ",
        methods:{
            remove : function(index){
                this.$emit('remove',index);
            }
        }
    })

    var vm = new Vue({
        el:"#app",
        data:{
            title:"chjStudent",
            infoItems:['java','linux','python']
        },
        methods: {
            itemRemove:function (index) {
                console.log("删除了" + this.infoItems[index]);
                this.infoItems.splice(index,1);
            }
        }
    })
</script>
```



# 说明

​		Vue的开发都是要基于NodeJs,实际开发采用Vue-cli脚手架开发，Vue-router路由，Vuex做状态管理；VueUI界面一般使用ElementUI（饿了么出品）或者ICE（阿里巴巴出品！）来快速搭建前端项目





# Vue：第一个Vue-cli项目

## 什么是Vue-cli

Vue-cli官方提供的一个脚手架，用于快速生成一个Vue的项目模板；

​		预先定义好的目录结构及基础代码，就好比咱们在创建Maven项目时可以选择创建一个骨架项目，这个骨架项目就是脚手架，我们开发更加快速

**主要的功能**

- 统一的目录结构
- 本地调试
- 热部署
- 单元测试
- 集成打包上线

## 需要环境

安装NodeJs  参考https://github.com/C-SouthWind/NodeJs

安装vue-cli 

```js
# -g 全局安装
cnpm install vue-cli -g

#测试是否安装成功
#查看可以基于那些模块创建Vue应用程序，通常我们选择webpack
vue list
```

第一个vue-cli应用程序

1、创建一个Vue项目，我们随便建立一个空的文件夹在电脑上，我这里在F盘下新建一个目录

```js
F:\ideaWork\vue\stu
```

2、简历一个基于webpack模板的vue应用程序

```js
#这里的myvue是项目名称，可以根据自己的需求起名
vue init webpack myvue
```

一路选择no即可

**说明**

- Project name：项目名称，默认 回车即可
- Project description：项目描述，默认 回车即可
- Author：项目作者 默认 回车即可
- Install vue-router：是否安装vue-router，选择n不安装（后期需要再手动添加）
- Use ESLint to lint your code：是否使用ESLint做代码检查，选择n不安装（后期需要再手动添加）
- Set up unit test：单元测试相关，选择n不安装（后期需要再手动添加）
- Setup e2e tests with Nightwatch：单元测试相关，选择n不安装（后期需要再手动添加）
- Should we run npm install for you after the project has been created：创建完成后直接初始化，选择n，我们手动执行

## 初始化并运行

```js
cd myvue
npm install(可能会报错警告  安装提示修复即可)
npm run dev
```



# Vue：Webpack

​		本质上，webpack是一个现代JavaScript应用程序的静态模块打包器(module bundler)。当webpack处理应用程序时，它会递归地构建一个依赖关系图(dependency graph),其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个bundle.
 Webpack是当下最热门的前端资源模块化管理和打包工具，它可以将许多松散耦合的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分离，等到实际需要时再异步加载。通过loader转换，任何形式的资源都可以当做模块，比如CommonsJS、AMD、ES6、 CSS、JSON、CoffeeScript、LESS等;
 伴随着移动互联网的大潮，当今越来越多的网站已经从网页模式进化到了WebApp模式。它们运行在现代浏览器里，使用HTML5、CSS3、ES6 等新的技术来开发丰富的功能，网页已经不仅仅是完成浏览器的基本需求; WebApp通常是一个SPA (单页面应用) ，每一个视图通过异步的方式加载，这导致页面初始化和使用过程中会加载越来越多的JS代码，这给前端的开发流程和资源组织带来了巨大挑战。
 前端开发和其他开发工作的主要区别，首先是前端基于多语言、多层次的编码和组织工作，其次前端产品的交付是基于浏览器的，这些资源是通过增量加载的方式运行到浏览器端，如何在开发环境组织好这些碎片化的代码和资源，并且保证他们在浏览器端快速、优雅的加载和更新，就需要一个模块化系统，这个理想中的模块化系统是前端工程师多年来一直探索的难题。



## 安装Webpack

​		WebPack是一款模块加载器兼打包工具，它能把各种资源，如JS、JSX、ES6、SASS、LESS、图片等都作为模块来处理和使用

### **安装：**

```js
npm install webpack -g
npm install webpack-cli -g
```

测试安装成功

- webpack -v
- webpack-cli -v

### 配置

创建webpack.config.js配置文件

- entry：入口文件，指定webpack用哪个文件作为项目的入口
- output：输出，指定webpack把处理完成的文件放置到指定路径
- module：模块，用于处理各种类型的文件
- plugins：插件，如：热更新、代码重用等
- resolve：设置路径指向
- watch：监听，用于设置文件改动后直接打包



### 使用webpack

1、创建项目

2、创建一个名为modules的目录。用于放置JS模块相关代码

3、在modules下创建模块文件，如hello.js，用于编写JS模块相关代码

```js
//暴露一个方法
exports.sayHi = function () {
    document.write("<h1>chj</h1>")
}
```

4、在modules下面创建一个名为main.js的入口文件，用于打包时设置entry属性

```js
//require 导入一个模块，就可以调用这个模块中的方法了
var hello = require("./hello")
hello.sayHi();
```

5、在项目目录下创建webpack.config.js配置文件，使用webpack命令打包

```js
module.exports = {
    entry  : './modules/main.js',
    output : {
        filename : './js/bundle.js'
    }
}
```

6、在项目目录下创建HTML页面，如index.html，导入webpack打包后的JS文件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

</head>
<body>
<!--前端的模块化开发-->
<script src="dist/js/bundle.js"></script>

</body>
</html>
```

7、在IDEA控制台中直接执行webpack；如果失败的化，就使用管理员权限运行即可

8、运行HTML查看效果

**说明**

```js
#参数  --watch 用于监听变化
webpack --watch
```



# Vue：vue-router路由

Vue Router 是Vue.js官方的路由管理器。它和Vue.js的核心深度集成，让构建单页面应用变得易如反掌。包含功能有

- 嵌套的路由/视图表
- 模块化的、基于组件的路由配置
- 路由参数、查询、通配符
- 基于Vue.js过度系统的视图过渡效果
- 细粒度的导航控制
- 带有自动激活的CSS class的链接
- HTML5历史模块或hash模式，在IE9中自动降级
- 自定义的滚动条行为

## 安装

基于第一个vue-cli进行测试学习，先查看node_modules中是否存在vue-router

vue-router是一个插件包，所以我们还是需要用npm/cnpm来进行安装的。打开命令行工具，进入你的项目目录，输入下面命令

```js
cnpm install vue-router --save-dev
```

如果在一个模块化工程中使用它，必须通过Vue.use()明确地安装路由功能

```js
import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

```

## 测试

**components目录下存放我们自己编写的组件**

**定义一个Content.vue组件**

```vue
<template>
    <h1>内容页</h1>
</template>

<script>
    export default {
        name: "Content"
    }
</script>

<style scoped>

</style>

```

**安装路由，在src目录下，新建一个文件夹：router，专门存放路由**

```vue
import Vue from 'vue';
import VueRouter from "vue-router";
import Content from "../components/Content";
import Main from "../components/Main";
//安装路由
Vue.use(VueRouter);


//配置导出路由
export  default new VueRouter({
    routes : [
      {
        //路由路径
        path: '/content',
        name: 'content',
        //跳转的组件
        component: Content
      },
      {
        //路由路径
        path: '/main',
        name: 'main',
        //跳转的组件
        component: Main
      }
    ]
})

```

**在main.js中配置路由**

```vue
import Vue from 'vue'
import App from './App'
import router from './router'//自动扫描里面的路由配置

Vue.config.productionTip = false


new Vue({
  el: '#app',
  //配置路由
  router,
  components: { App },
  template: '<App/>'
})

```

在App.vue中使用路由

```vue
<template>
  <div id="app">
    <router-link to="/main">首页</router-link>
    <router-link to="/content">内容页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```



# Vue：实战快速上手

我们采用实战教学模拟并结合ElementUI组件库，将所需知识点应用到实际中

## 创建工程

注意：命令行都要使用管理员模式运行

1、创建一个名为hello-vue的工程 vue init webpack hello-vue

2、安装依赖，我们需要安装 vue-router、element-ui、sass-loader和node-sass四个插件

```js
#进入工程目录
cd hello-vue
# 安装 vue-router
npm install vue-router --save-dev
# 安装 element-ui
npm i element-ui -S
# 安装依赖
npm install
# 安装 SASS 加载器
npm install sass-loader node-sass --save-dev
# 启动测试
npm run dev

```

3、Npm命令解释

- npm install moduleName：安装模块到项目目录下
- npm install -g moduleName：-g的意思是将模块安装到全局，具体安装到磁盘哪个位置，要看npm config prefix的位置
- npm install -save moduleName：--save 的意思是将模块安装到项目目录下，并在package文件的dependencies节点写入依赖 ，-S为该命令的缩写
- npm install -save-dev moduleName：--save-dev的意思是将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖，-D为该命令的缩写

## 创建登录页面

源码目录创建结构

- assets：存放资源文件
- components：存放Vue功能组件
- views：存放Vue视图组件
- router：存放vue-router配置

创建首页视图，在views目录下创建一个名为Main.vue的视图组件

```js
<template>
    <h1>首页</h1>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>

</style>

```



创建登录页视图在views目录下创建一个名为Login.vue的视图组件，其中el-*的元素为ElementUI组件

```js
<template>
  <div>
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
      title="温馨提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        form: {
          username: '',
          password: ''
        },

        // 表单验证，需要在 el-form-item 元素中增加 prop 属性
        rules: {
          username: [
            {required: true, message: '账号不可为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不可为空', trigger: 'blur'}
          ]
        },

        // 对话框显示和隐藏
        dialogVisible: false
      }
    },
    methods: {
      onSubmit(formName) {
        // 为表单绑定验证功能
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
            this.$router.push("/main");
          } else {
            this.dialogVisible = true;
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }

  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }
</style>
```

 创建路由，在router目录下创建一个名为index.js的vue-router路由配置文件

```js
import vue from 'vue'
import VueRouter from "vue-router";
import Login from "../views/Login"
import Main from "../views/Main"

vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/login',
      component:Login
    },
    {
      path:'/main',
      component:Main
    }
  ]
})

```



修改App.vue组件代码

```vue
<template>
  <div id="app">
    <router-link to="/login">导航</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>


```

修改main.js

```js

import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: h => h(App) //ElementUI
})

```

启动即可



# 路由嵌套

​		嵌套路由又称子路由，在实际应用中，通常由多层嵌套组件组合而成。同样的，URL中各段动态路径也按某种结构对应嵌套的各层组件

## 1、用户信息组件，在views/user 目录下创建一个名为Profile.vue的视图组件

```vue
<template>
  <div>
    <h1>个人信息  </h1>
    {{$route.params.id}}{{$route.params.users}}
  </div>

</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

</style>

```

## 2、用户列表组件在views/user 目录下创建一个名为List.vue的视图组件

```vue
<template>
    <div>
      <h1>用户列表</h1>
      {{name}}
    </div>
</template>

<script>
    export default {
      props:['name'],
        name: "List"
    }
</script>

<style scoped>

</style>

```

## 3、配置嵌套路由 修改router目录下的index.js路由配置文件

```vue
import vue from 'vue'
import VueRouter from "vue-router";
import Login from "../views/Login"
import Main from "../views/Main"
import List from "../views/user/List"
import Profile from "../views/user/Profile"

vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/login',
      component:Login
    },
    {
      path:'/main/:username',
      props:true,
      component:Main,
      //嵌套路由
      children:[
        { //请求转发
          path:'/user/profile/:id/:users',
          name:'profile',
          component:Profile,
        },
        {
          //请求转发
          path:'/user/list',
          props:true,
          name:'list',
          component:List,
        },
        {
          //重定向
          path:'/goHome',
          name: 'goHome',
          redirect : '/login'
        }
      ]
    }
  ]
})

```





说明：主要在路由配置中增加了children数组配置，用于在该组件下设置嵌套路由

## 4、修改首页视图，我们修改Main.vue视图组件，此处使用了ElementUI布局容器

```vue
<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-caret-right"></i>用户管理</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <!--插入的地方-->
                <router-link :to="{name:'profile',params:{id:1,users:'chj'}}">个人信息</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <!--插入的地方-->
                <router-link :to="{name:'list',params: {name:'用户'}}">用户列表</router-link>
              </el-menu-item>
              <el-menu-item index="1-3">
                <!--插入的地方-->
                <router-link :to="{name:'goHome'}">回到登录</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-caret-right"></i>内容管理</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <router-link to="">分类管理</router-link>

              </el-menu-item>
              <el-menu-item index="2-2">
                内容列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px">  {{username}}</i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <!--在这里展示视图-->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  export default {
    props:['username'],
    name: "Main"
  }
</script>
<style scoped lang="scss">
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>

```

## 登录页面

```vue
<template>
  <div>
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
      title="温馨提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        form: {
          username: '',
          password: ''
        },

        // 表单验证，需要在 el-form-item 元素中增加 prop 属性
        rules: {
          username: [
            {required: true, message: '账号不可为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不可为空', trigger: 'blur'}
          ]
        },

        // 对话框显示和隐藏
        dialogVisible: false
      }
    },
    methods: {
      onSubmit(formName) {
        // 为表单绑定验证功能
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
            this.$router.push("/main");
          } else {
            this.dialogVisible = true;
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }

  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }
</style>

```

# 路由模式与404

路由模式有两种

- hash：路径带#符号，如 http://localhost/#/login
- history：路径不带#符号，如 http://localhost/login

## 修改路由配置，代码如下：

```vue
export default new VueRouter({
  mode :'history',
  routes:[]
})
```

## 处理404创建一个名为NotFound.vue的视图组件

```vue
<template>
    <div>
      <h1>404,你的页面走丢了</h1>
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped>

</style>

```

## 修改路由配置

```vue
export default new VueRouter({
  mode :'history',
  routes:[
    {
      path: "*",
      component: NotFound
    }
  ]
})
```

## 路由钩子与异步请求

### 路由钩子

beforeRouteEnter：在进入路由前执行

beforeRouterLeave：在离开路由前执行

```vue
 export default {
        name: "Profile",
        //在路由执行前
        beforeRouteEnter:(to,from,next)=>{
          console.log("进入路由之前");
          next();
        },
        //在路由执行后
        beforeRouteLeave:(to,from,next)=>{
          console.log("进入路由之后");
          next();
        }
    }
```



参数说明：

- to：路由将要跳转的路径信息
- form：路径跳转前的路径信息
- next：路由的控制参数
  - next（）：跳入下一个页面
  - next（'/path'）：改变路由的跳转方向，使其跳到另一个路由
  - next（false）：返回原来的页面
  - next（（vm）=>{}）：仅在beforeRouteEnter中可以，vm是组件实例

### 在钩子函数中使用异步请求

1、安装Axios   npm install axios -s

2、main.js 引用Axios

```js
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
```

