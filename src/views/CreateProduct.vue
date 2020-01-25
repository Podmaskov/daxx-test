<template>
<v-container>
  <transition name="fade">
    <v-alert 
      v-if="isNotificationVisible" 
      type="success" 
      class="success-message"
    >
      Product saved successfully
    </v-alert>
    </transition>
  <v-card
    class="mx-auto pa-5 mt-12"
    max-width="450"
    outlined
  >
  <h2>Create Product</h2>
    <product-from
      @changed-form="saveProduct"
      @cancel="redirectToHome()"
    />
  </v-card>
</v-container>
</template>

<script>
import ProductFrom from '../components/ProductForm.vue'
import LocalProductStorage from '../utils/helpers/LocalProductStorage'

const localProductStorage = new LocalProductStorage()
const NOTIFICATION_DELAY = 2000

export default {
  data: ()=> {
    return {
      isNotificationVisible: false
    }
  },
  components: {
    ProductFrom
  },
  methods: {
    showNotification(){
      this.isNotificationVisible = true
      setTimeout(()=> {
        this.isNotificationVisible = false
      }, NOTIFICATION_DELAY)
    },
    saveProduct(product) {
      localProductStorage.setProduct(product)
      this.showNotification()
    },
    redirectToHome() {
      this.$router.push({ name: 'home'})
    }
  }
}
</script>
