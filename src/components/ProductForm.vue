<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model.trim="localForm.name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-textarea
      v-model.trim="localForm.description"
      :counter="100"
      :rules="descriptionRules"
      required
      label="Description"
      type="textarea"
    >
    </v-textarea>

    <div
      class="mt-2"
    >
    <slot>
      <v-btn
        color="success"
        class="mr-4"
        @click="emitForm()"
      >
        Save
      </v-btn>
    </slot>

    <v-btn
      color="error"
      class="mr-4"
      @click="emitCancel()"
    >
      Cancel
    </v-btn>
  </div>
  </v-form>
</template>

<script>
export default {
  data: () => {
    return {
      localForm: {
        id: '',
        name: '',
        description: ''
      },
      nameRules: [
          v => Boolean(v) || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
      descriptionRules: [
          v => Boolean(v) || 'Description is required',
          v => (v && v.length <= 100) || 'Description must be less than 100 characters',
        ],
      valid: true
    }
  },
  props: {
    formData: {
      type: Object,
    },
  },
  watch: {
    formData: {
      immediate: true,
      handler: function (formData) {
        if(!formData) return
        this.localForm = {
          ...formData
        }
      },
    }
  },
  methods: {
    resetForm() {
      if(this.localForm.id) return
      this.$refs.form.reset()
    },
    emitForm() {
      if (!this.$refs.form.validate()) return
      this.$emit('changed-form', this.localForm)
      this.resetForm()
    },

    emitCancel() {
      this.$emit('cancel')
    }
  }

}
</script>

<style>

</style>