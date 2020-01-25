/* eslint-disable no-console */
/* eslint-disable no-undef */
import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import CreateProduct from './../views/CreateProduct.vue'
import UpdateProduct from './../views/UpdateProduct.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()
const VUETIFY_COMPONENTS = ['v-container', 'v-card', 'v-form', 'v-text-field', 'v-btn', 'v-alert', 'v-textarea']

describe('Test createProduct', () => {
		const wrapper = mount(CreateProduct,{
			localVue,
			router,
			stubs: VUETIFY_COMPONENTS
		})
		it('show notificcation', () => {
			expect(wrapper.vm.isNotificationVisible).toBe(false)
			const showNotification = wrapper.vm.showNotification
			showNotification()
			expect(wrapper.vm.isNotificationVisible).toBe(true)
		})
		it('redirect to home page', () => {
			const redirectToHome = wrapper.vm.redirectToHome
			redirectToHome()
			expect(wrapper.vm.$route.path).toBe('/')
		})
})

describe('Test updateProduct', () => {
	const wrapper = mount(UpdateProduct, {
		localVue,
		router,
		stubs: VUETIFY_COMPONENTS
	})
	it('show notificcation', () => {
		expect(wrapper.vm.isNotificationVisible).toBe(false)
		const showNotification = wrapper.vm.showNotification
		showNotification()
		expect(wrapper.vm.isNotificationVisible).toBe(true)
	})
	it('redirect to home page', () => {
		const redirectToHome = wrapper.vm.redirectToHome
		redirectToHome()
		expect(wrapper.vm.$route.path).toBe('/')
	})
})
