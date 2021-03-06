import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
    mode: 'history',
    base: 'licaishi',
    routes: [
        {
            path: '/',
            // redirect: '/index'
            component: resolve => require(['../components/page/Index.vue'], resolve)
        },
        {
            path: '/index',
            component: resolve => require(['../components/page/Index.vue'], resolve)
        },
        {
            path: '/join',
            component: resolve => require(['../components/page/Join.vue'], resolve)
				},
				{
					path: '/win-list',
					component: resolve => require(['../components/page/WinList.vue'], resolve)
				},
        {
            path: '/m-index',
            component: resolve => require(['../components/page/MIndex.vue'], resolve)
        },
        {
            path: '/m-join',
            component: resolve => require(['../components/page/MJoin.vue'], resolve)
        },
        {
            path: '/protocol',
            component: resolve => require(['../components/page/Protocol.vue'], resolve)
				},
				{
					path: '/m-win-list',
					component: resolve => require(['../components/page/MWinList.vue'], resolve)
				},
        // {
        //     path: '/*',
        //     component: resolve => require(['../components/page/Index.vue'], resolve)
        // },
        // {
        //     path: '/readme',
        //     component: resolve => require(['../components/common/Home.vue'], resolve),
        //     children:[
        //         {
        //             path: '/',
        //             component: resolve => require(['../components/page/Readme.vue'], resolve)
        //         },
        //         {
        //             path: '/basetable',
        //             component: resolve => require(['../components/page/BaseTable.vue'], resolve)
        //         },
        //         {
        //             path: '/vuetable',
        //             component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
        //         },
        //         {
        //             path: '/baseform',
        //             component: resolve => require(['../components/page/BaseForm.vue'], resolve)
        //         },
        //         {
        //             path: '/vueeditor',
        //             component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
        //         },
        //         {
        //             path: '/markdown',
        //             component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
        //         },
        //         {
        //             path: '/upload',
        //             component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
        //         },
        //         {
        //             path: '/basecharts',
        //             component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-schart组件
        //         },
        //         {
        //             path: '/drag',
        //             component: resolve => require(['../components/page/DragList.vue'], resolve)    // 拖拽列表组件
        //         }
        //     ]
        // },
        // {
        //     path: '/login',
        //     component: resolve => require(['../components/page/Login.vue'], resolve)
        // }
    ]
})
