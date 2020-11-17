<template>
  <div>
    <div class="block">
      <h1><a href="https://vue-select.org/">Vue-select with search and suggestion</a></h1>
      <hr>
      <h3>Обычный селект с поиском по данным</h3>
      <v-select :options="pets" v-model="vSelectValue" />
      <hr>
      <h3>Селект с асинхронным поиском по данным dadata</h3>
      <v-select
        v-model="address"
        :options="addressSuggestions"
        :filterable="false"
        :clearSearchOnSelect="isSearchClearble"
        @search="searchAddress"
        @change="onAddressChange"
        label="value"
      />
      <p>Точность определения адреса:  {{ addressAccuracyLabel }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SandboxPage',
  data: () => ({
    address: '',
    addressSuggestions: [],
    value: '',
    vSelectValue: '',
    pets: [
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
    addressAccuracyLabel() {
      if (!this.address || !this.address.data.fias_level) {
        return 'нет данных';
      }

      switch (this.address.data.fias_level) {
        case '8':
          return 'дом';
        case '7':
          return 'улица';
        case '6':
          return 'дом';
        case '5':
          return 'улица';
        case '4':
          return 'дом';
        case '3':
          return 'район';
        case '2':
          return 'автономный округ';
        case '1':
          return 'регион';
        default:
          return 'нет данных';
      }
    },
    isSearchClearble() {
      return true;
      // if (!this.address) {
      //   return false;
      // }
      // return this.address.data.fias_level > 7;
    }
  },
  methods: {
    searchAddress(val, loading) {
      const dadataToken = '9c4d4344a2efdece2594dd7b25e1c75d885fc044';
      const dadataApiUrl = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
      const requestData = {
        query: val,
        count: 5
      };
      const requestConfig = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Token ' + dadataToken
        }
      };

      this.$axios.post(dadataApiUrl, requestData, requestConfig)
        .then((response) => {
          if (response.status === 200 && response.data.suggestions) {
            this.addressSuggestions = [...response.data.suggestions];
          }
        });
    },
    onAddressChange(val) {
      console.log('onChange', val);
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
