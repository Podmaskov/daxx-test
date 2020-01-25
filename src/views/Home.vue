<template>
  <v-container fluid>
    <v-simple-table
      fixed-header
    >
      <template v-slot:default>
        <table>
        <caption>Products</caption>
        <thead>
          <tr>
            <th class="text-center">Id</th>
            <th class="text-center">Name</th>
            <th class="text-center">Description</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody
          class="text-center"
        >
          <tr
            v-if="!products.length"
          >
            <td
              class="text-center font-weight-bold"
              colspan="4"
            >
              Please create a product
            </td>
          </tr>
          <template
            v-else
          >
            <tr
              v-for="product in products"
              :key="product.id"
            >
              <td>{{ product.id }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.description }}</td>
              <td
              >
                <div>
                  <v-btn
                    small
                    link
                    :to="`update-product/${product.id}`"
                    color="warning"
                  >
                    update
                  </v-btn>
                  <v-btn
                    small
                    color="error"
                    class="ml-2"
                    @click="handlerDeleteProduct(product.id)"
                  >
                    delete
                  </v-btn>
                </div>
              </td>
            </tr>
          </template>
          <tr>
            <td
              colspan="3"
            />
              <td
                class="text-center"
              >
                <v-btn
                  color="primary"
                  link
                  to="create-product"
                >
                  create
                </v-btn>
            </td>
          </tr>
        </tbody>
        </table>
      </template>
    </v-simple-table>
    <v-dialog
      v-model="isDeleteModalOpen"
      max-width="490"
    >
      <v-card>
        <v-card-title class="headline">Are you sure you want to remove the product?</v-card-title>

        <v-card-text>
          After deletion, you will not be able to restore the product
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="closeDeleteModal()"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="deleteProduct()"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>

import LocalProductStorage from '../utils/helpers/LocalProductStorage'

const localProductStorage = new LocalProductStorage()
export default {
  data:() => {
    return {
      products: [],
      isDeleteModalOpen: false,
      productId: ''
    }
  },
  methods: {
    oplenDeleteModal() {
      this.isDeleteModalOpen = true
    },

    closeDeleteModal() {
      this.isDeleteModalOpen = false
    },

    setProductId(productId) {
      this.productId = productId
    },

    resetProductId(){
      this.productId = ''
    },

    deleteProduct(){
      this.products = this.products.filter(product => {
        if(product.id === this.productId) return
        return product
      })
      localProductStorage.deleteProduct(this.productId)
      this.resetProductId()
      this.closeDeleteModal()
    },

    handlerDeleteProduct(productId) {
      this.setProductId(productId)
      this.oplenDeleteModal()
    },
  },
  mounted() {
    this.products = localProductStorage.getProducts()
  }
}
</script>

<style>

</style>