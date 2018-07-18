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
    <md-card class="md-layout" v-for="(card, index) in cards" :key="card">
      <md-card-media-cover md-text-scrim>
        <md-card-media md-ratio="16:9">
          <img v-bind:src="'../../../static/card_covers/' + card.cover + '.jpg'" alt="card_cover" />
        </md-card-media>

        <md-card-area>
          <md-card-actions>
            <md-menu md-size="auto" md-direction="bottom-end">
              <md-button class="md-icon-button" @click="showCoversDialog(index)">
                <md-icon class="md-layout-item">palette</md-icon>
              </md-button>
              <md-button class="md-icon-button" v-on:click="refresh(index)">
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
                <md-menu-item @click="b_active = true,card_id = index" v-if="card.state">
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
            {{ card.users[0].first_name }} {{ card.users[0].second_name }}
          </md-card-content>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
  </div>
</template>

<script>
import axios from 'axios'

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
    covers: null,
    cards: null
  }),
  created () {
    axios.post(`http://vue-api-2.eu-4.evennode.com/graphql`, {
      query: `{cards(userid:"5b40f9449b082f3a50b32514"){ _id userid account sum state cover users { username first_name second_name } } }`
    }).then(response => {
      this.cards = response.data.data.cards
    })
  },
  methods: {
    // Refreshes select card sum and state
    refreshCard: function (id) {
      axios.post(`http://vue-api-2.eu-4.evennode.com/graphql`, {
        query: `{card(account:"` + this.cards[id].account + `"){ _id userid account sum state cover } }`
      }).then(response => {
        this.cards[id].sum = response.data.data.card[0].sum
        this.cards[id].state = response.data.data.card[0].state
      })
    },
    refresh: function (id) {
      this.refreshCard(id)
    },
    // Shows covers popup
    showCoversDialog: function (CardId) {
      axios.post(`http://vue-api-2.eu-4.evennode.com/graphql`, {
        query: `{covers { id name } }`
      }).then(response => {
        this.covers = response.data.data.covers
        this.showCoversDialogState = true
      })
      this.selectedCardId = CardId
    },
    // Changes cover to selected one
    changeCover: function (CoverId) {
      this.showCoversDialogState = false
      this.cards[this.selectedCardId].cover = CoverId
    },
    // Triggers on popup cancel
    onCancel () {
      this.value = ''
    },
    // Triggers on popup confirm
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
