<template>
  <div class="search">
    <h2>input with suggestions:</h2>
    <label class="search__label" for="input">выбери кота:</label>
    <input class="search__input" type="text">
    <ul class="search__suggestion-list">
      <li v-for="(item, i) in suggestions" :key="i" class="search__suggestion-item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    suggestionsBase: [
      'рыжий кот',
      'черный кот',
      'белый кот',
      'полосатый кот',
      'черно-белый кот',
      'рыжебелый кот',
      'рыжий пес',
      'черный пес',
      'белый пес',
      'полосатый пес',
      'черно-белый пес',
      'рыжебелый пес'
    ]
  }),
  computed: {
    suggestions() {
      return this.suggestionsBase;
    }
  }
};
</script>
<style lang="scss">
  .search {
    position: relative;
  }
</style>
