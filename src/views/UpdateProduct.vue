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
      <h2>Update Product</h2>
      <product-from
        :formData="productFormData"
        @changed-form="updateProduct"
        @cancel="redirectToHome()"
      />
    </v-card>
  </v-container>
</template>

<script>
import ProductFrom from '../components/ProductForm.vue'
import LocalProductStorage from '../utils/helpers/localProductStorage'

const localProductStorage = new LocalProductStorage()
const NOTIFICATION_DELAY = 2000

export default {
  data: ()=> {
    return {
      isNotificationVisible: false,
      productFormData: {
        id: '',
        name: '',
        description: ''
      }
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
    updateProduct(product) {
      this.productFormData = {...product}
      localProductStorage.updateProduct(product)
      this.showNotification()
    },
    redirectToHome() {
      this.$router.push({ name: 'home'})
    }
  },
  mounted() {
    const { id: productId } = this.$route.params
    if(!productId) return
    this.productFormData = localProductStorage.getProduct(productId)
  }
}
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .8s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .success-message{
    position: absolute;
    right: 25px;
    top: 25px;
  }
</style>
