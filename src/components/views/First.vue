<template>
  <div v-bar>
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
    <md-dialog :md-active.sync="showCoversDialogState">
      <md-dialog-title>Preferences</md-dialog-title>
      <div v-for="cover in covers" :key="cover" class="md-layout small md-alignment-center-space-around">
        <md-card md-with-hover>
          <md-ripple>
            <md-card-content>
              <img v-bind:src="'../../../static/card_covers/' + cover.name" class="small"/>
            </md-card-content>
            <md-card-actions>
              <md-button @click="changeCover(cover.id)">Select</md-button>
            </md-card-actions>
          </md-ripple>
        </md-card>
      </div>
    </md-dialog>
    <md-card class="md-layout" v-for="card in cards" :key="card">
      <md-card-media-cover md-text-scrim>
        <md-card-media md-ratio="16:9">
          <img v-bind:src="'../../../static/card_covers/' + card.cover + '.jpg'" alt="card_cover" />
        </md-card-media>

        <md-card-area>
          <md-card-actions>
            <md-menu md-size="auto" md-direction="bottom-end">
              <md-button class="md-icon-button" @click="showCoversDialog(card.id)">
                <md-icon class="md-layout-item">palette</md-icon>
              </md-button>
              <md-button class="md-icon-button" v-on:click="refresh(card.id)">
                <md-icon>refresh</md-icon>
              </md-button>
              <md-button class="md-icon-button" md-menu-trigger>
                <md-icon>more_vert</md-icon>
              </md-button>

              <md-menu-content>
                <md-menu-item @click="t_active = true" v-if="card.state">
                  <md-icon class="md-primary">attach_money</md-icon>
                  <span>Transfer</span>
                </md-menu-item>
                <md-menu-item @click="b_active = true,card_id = card.id" v-if="card.state">
                  <md-icon style="color:#ff0000">block</md-icon>
                  <span>Block</span>
                </md-menu-item>
              </md-menu-content>
            </md-menu>
          </md-card-actions>
          <md-card-header>
            <span class="md-title">{{ card.sum }}<md-icon style="color:red" v-if="!card.state">lock</md-icon></span>
            <span class="md-subhead">{{ card.account }}</span>
          </md-card-header>
          <md-card-content>
            {{ card.name }}
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
    card_id: null,
    cover_id: null,
    showCoversDialogState: false,
    selectedCardId: null,
    covers: {
      1: {
        'id': 1,
        'name': '1.jpg'
      },
      2: {
        'id': 2,
        'name': '2.jpg'
      }
    },
    cards: {
      1: {
        'id': 1,
        'account': '1234 5678 9000 0000',
        'name': 'Test user name',
        'sum': '1 000 000,00',
        'state': true,
        'cover': '2'
      },
      2: {
        'id': 2,
        'account': '1234 5678 9000 0000',
        'name': 'Test user name3',
        'sum': '7 777 777,00',
        'state': true,
        'cover': '1'
      },
      3: {
        'id': 3,
        'account': '1234 5678 9000 0000',
        'name': 'Test user name',
        'sum': '1 000 000,00',
        'state': true,
        'cover': '1'
      },
      4: {
        'id': 4,
        'account': '1234 5678 9000 0000',
        'name': 'Test user name3',
        'sum': '7 777 777,00',
        'state': true,
        'cover': '2'
      }
    }
  }),
  methods: {
    refresh: function (id) {
      this.cards[id].state = true
      // this.cards[1].cover = '2'
    },
    showCoversDialog: function (CardId) {
      this.showCoversDialogState = true
      this.selectedCardId = CardId
    },
    changeCover: function (CoverId) {
      this.showCoversDialogState = false
      this.cards[this.selectedCardId].cover = CoverId
    },
    onCancel () {
      this.value = ''
    },
    onBlockConfirm () {
      this.cards[this.card_id].state = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 20px;
    display: inline-block;
    vertical-align: top;
  .md-dialog {
    max-width: 768px;
  }
  }
  .md-content {
    overflow: auto;
  }
</style>
