import { defineCustomElement } from 'vue'
import App from './App.ce.vue'

const element = defineCustomElement(App)

//Defining custom elments in the html section
customElements.define('stcs-project', element)
