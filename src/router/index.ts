import { createRouter, RouteRecordRaw } from "vue-router";
import Home from '@/layout/Home.vue'

const router:RouteRecordRaw[] = [
    {
        path:'/',
        name:'Home',
        component:Home
    }
]