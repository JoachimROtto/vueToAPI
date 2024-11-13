<script lang="ts">
import { store } from '@/stores';
import { getURL } from '@/util/URL-Tool';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      URL: '',
    };
  },

  methods: {
    generateShortURL() {
      getURL(this.URL);
    },
  },
  watch: {
    ...mapGetters(['getURLToken']),
  },
  computed: {
    fullURL() {
      return store.state.urlPrefix + store.state.urlToken;
    },
    link() {
      if (store.state.urlToken == '') return '';
      return (
        '<a href="' +
        store.state.urlPrefix +
        store.state.urlToken +
        '" target="_blank" rel="noopener noreferrer">' +
        store.state.urlPrefix +
        store.state.urlToken +
        '</a>'
      );
    },
  },
  mounted() {},
};
</script>

<template>
  <div>
    <label for="text">URL: </label>
    <input v-model="URL" />
    <button @click="generateShortURL">Generate Short-URL</button>
    <p>Link: <span v-html="link"></span></p>
  </div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
