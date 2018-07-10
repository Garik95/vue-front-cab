<template>
  <div>
    <md-dialog-prompt
      @md-cancel="onCancel"
      :md-active.sync="t_active"
      v-model="value"
      md-title="What's your name?"
      md-input-maxlength="30"
      md-input-placeholder="Type your name..."
      md-confirm-text="Done" />
    <md-dialog-confirm
      :md-active.sync="b_active"
      md-title="Are you sure want to block?"
      md-content="It takes <strong>hard</strong> job to unblock your card"
      md-confirm-text="Agree"
      md-cancel-text="Disagree"
      @md-cancel="onBlockCancel"
      @md-confirm="onBlockConfirm" />
    <md-content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
    </md-content>
    <md-card class="md-alignment-space-around">
      <md-card-media-cover md-text-scrim>
        <md-card-media md-ratio="16:9">
          <img src="../../assets/card_cover_1.jpg" alt="card_cover">
        </md-card-media>

        <md-card-area>
          <md-card-actions>
            <md-menu md-size="auto" md-direction="bottom-end">
              <md-button class="md-icon-button">
                <md-icon>refresh</md-icon>
              </md-button>
              <md-button class="md-icon-button" md-menu-trigger>
                <md-icon>more_vert</md-icon>
              </md-button>

              <md-menu-content>
                <md-menu-item @click="t_active = true">
                  <md-icon class="md-primary">attach_money</md-icon>
                  <span>Transfer</span>
                </md-menu-item>
                <md-menu-item @click="b_active = true" v-if="disabled">
                  <md-icon style="color:#ff0000">block</md-icon>
                  <span>Block</span>
                </md-menu-item>
              </md-menu-content>
            </md-menu>
          </md-card-actions>
          <md-card-header>
            <span class="md-title">1 000 000,00<md-icon style="color:red" v-if="!disabled">lock</md-icon></span>
            <span class="md-subhead">8600 1404 9366 8835</span>
          </md-card-header>
          <md-card-content>
            Lorem ipsum dolor sit amet
          </md-card-content>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'First',
  data: () => ({
    t_active: false,
    b_active: false,
    value: null,
    disabled: true,
    showDialog: false
  }),
  methods: {
    onCancel () {
      this.value = ''
    },
    onBlockConfirm () {
      this.disabled = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  .md-dialog {
    max-width: 768px;
  }
  }
</style>
