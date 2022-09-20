<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '@/stores/counter'

export default defineComponent({
  data: (): {
    msg: string
    counterMsg: string
  } => ({
    msg: 'This is an about page',
    counterMsg: 'Counter value is: '
  }),
  computed: {
    ...mapState(useCounterStore, {
      doubleCounter: store => store.counter * 2
    }),
    compCounterMsg(): string {
      return this.counterMsg + this.doubleCounter
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['increment'])
  }
})
</script>

<template>
  <v-container class="about">
    <v-row>
      <v-col>
        <h1>{{ msg }}</h1>
        <p>{{ doubleCounter }}</p>
        <p>{{ compCounterMsg }}</p>
        <v-btn color="secondary" @click="increment">INCREMENT ME</v-btn>
        <v-btn class="ma-2 primary--text" color="accent">
          Test Colours
          <v-icon dark right> mdi-checkbox-marked-circle </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.about {
  h1 {
    color: white;
  }
}
</style>
