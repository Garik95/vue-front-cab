<template>
  <div>
    <md-content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
    </md-content>
    <md-card class="md-alignment-space-around">
      <md-card-media-cover md-text-scrim>
        <md-card-media md-ratio="16:9">
          <img src="../assets/logo.png" alt="Skyscraper">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">Gradient background</span>
            <span class="md-subhead">16/9 image</span>
          </md-card-header>

          <md-card-actions>
          <md-menu md-size="auto" md-direction="bottom-end">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>more_vert</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item @click="doACall">
              <span>Transfer</span>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
    <md-card class="md-alignment-space-around">
      <md-card-media-cover md-text-scrim>
        <md-card-media md-ratio="16:9">
          <img src="../assets/logo.png" alt="Skyscraper">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">Gradient background</span>
            <span class="md-subhead">16/9 image</span>
          </md-card-header>

          <md-card-actions>
          <md-menu md-size="auto" md-direction="bottom-end">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>more_vert</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item @click="doACall">
              <span>Transfer</span>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'First'
}
</script>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
