
import uuidv4 from 'uuid/v4'

export default class LocalProductStorage {
  constructor() {
    this.localStorage = window.localStorage
  }

  setProduct(product) {
    const products = JSON.parse(this.localStorage.getItem('products')) || []
    const productWithId = {
      ...product,
      id: uuidv4()
    }
    const productsToSave = [productWithId, ...products]
    this.localStorage.setItem('products', JSON.stringify(productsToSave))
  }

  getProducts() {
    return JSON.parse(this.localStorage.getItem('products')) || []
  }

  updateProduct(newProduct) {
    const products = JSON.parse(this.localStorage.getItem('products')) || []
    const updatedProducts = products.map((product) => {
      if (newProduct.id === product.id) {
        return {
          ...newProduct
        }
      }
      return product
    })
    this.localStorage.setItem('products', JSON.stringify(updatedProducts))
  }

  deleteProduct(productId){
    const products = JSON.parse(this.localStorage.getItem('products')) || []
    const productsToSave = products.filter((product) => {
      if(product.id === productId) return
      return product
    })
    this.localStorage.setItem('products', JSON.stringify(productsToSave))
  }
}

