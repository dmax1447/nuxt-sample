<template>
  <div class="search">
    <h2>input with suggestions:</h2>
    <label class="search__label" for="input">выбери кота:</label>
    <input v-model="value" class="search__input" type="text">
    <ul v-if="value && suggestions.length > 1" class="search__suggestion-list">
      <li v-for="(item, i) in suggestions" @click="value = item" :key="i" class="search__suggestion-item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: '',
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
      const suggestionsFounded = this.suggestionsBase.filter(item => item.includes(this.value));
      return suggestionsFounded.slice(0, 5);
    }
  }
};
</script>
<style lang="scss">
  .search {
    position: relative;
    display: flex;
    flex-direction: column;

    &__suggestion-list {
      position: absolute;
      left: 0;
      top: 115px;
      list-style-type: none;
      outline: 1px solid gray;
      padding-left: 0;
      border-radius: 5px;
    }

    &__suggestion-item {
      &:hover {
        background-color: gray;
        cursor: pointer;
      }
    }
  }
</style>
