<template>
  <div>
        <h1>Change number</h1>
        <form novalidate class="md-layout md-gutter md-alignment-center-center">
          <div class="md-layout-item md-size-25">
          <md-progress-bar md-mode="indeterminate" v-if="!sending" />
            <md-field>
              <label>Old number</label>
              <md-input v-model="old_phone" disabled></md-input>
            </md-field>
            <md-field>
                <label>New number</label>
                <md-input v_model="new_phone" max=12></md-input>
              </md-field>
            <md-card-actions>
              <md-button type="submit" class="md-primary">Change phone number</md-button>
            </md-card-actions>
          </div>
        </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
  required,
  maxLength
} from 'vuelidate/lib/validators'

export default {
  name: 'Phone',
  mixins: [validationMixin],
  data: () => ({
    old_phone: '998999999999',
    new_phone: ''
  }),
  validations: {
    new_phone: {
      required,
      maxLength: maxLength(12)
    }
  }
}
</script>
