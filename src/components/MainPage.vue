<template>
  <div class="page-container md-layout-column">
  <md-toolbar class="md-primary">
    <md-button class="md-icon-button" @click="showNavigation = true">
      <md-icon>menu</md-icon>
    </md-button>
    <span class="md-title">My Title</span>
    <div class="md-toolbar-section-end">
      <md-button @click="showSidepanel = true" class="md-icon-button md-dense md-accent">
        <md-icon class="md-size-2x">account_circle</md-icon>
      </md-button>
    </div>
  </md-toolbar>
      <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">My App name</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
    </md-drawer>
        <md-drawer class="md-right" :md-active.sync="showSidepanel">
      <md-card>
      <md-card-media>
        <md-icon class="md-size-2x">account_circle</md-icon>
      </md-card-media>

      <md-card-header>
        <div class="md-title">User name</div>
        <div class="md-subhead">@User_id</div>
      </md-card-header>
      <md-card-area>
      <md-list>
        <md-list-item to="/page">Change phone number</md-list-item>
        <md-list-item to="/page">Change password</md-list-item>
        <md-list-item @click="logout">
          Exit
          <md-icon class="color:red">exit_to_app</md-icon>
        </md-list-item>
      </md-list>
      </md-card-area>
    </md-card>
    </md-drawer>
      <first></first>
  </div>
</template>

<script>
import First from './First.vue'
export default {
  name: 'Temporary',
  data: () => ({
    showNavigation: false,
    showSidepanel: false
  }),
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push('/')
    }
  },
  methods: {
    logout: function () {
      this.$session.destroy()
      this.$router.push('/')
    }
  },
  components: {
    First
  }
}
</script>

<style lang="scss" scoped>
  .page-container {
    min-height: 300px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 16px;
  }
  .md-list {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }
</style>
