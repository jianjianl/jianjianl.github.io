import VueRouter from 'vue-router';
import remark from 'component/remark';
import tag from 'component/tag';

const routes = [
    {   
        path: '/main/:id', 
        component: remark,
        props: true
    },
    {path: '/tag', component: tag}
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    
})

export default router;