import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import MyInput from './input'
import Layout from './layout'
import Sider from './sider'
import Header from './header'
import Content from './content'
import Footer from './footer'


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-my-input',MyInput)
Vue.component('g-layout',Layout)
Vue.component('g-sider',Sider)
Vue.component('g-header',Header)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: 'hi'
    },
    created(){
    },
    methods: {
        inputChange (e) {
            console.log(e)
        }
    }
})
