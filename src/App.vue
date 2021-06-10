<template>
  <layout>
    <search-box
      v-model:searchText="searchText"
      @add-item="onStoreNewItem"
      :disablePlus="filteredItems.length > 0"
    />
    <item-box
      v-for="(item, index) in filteredItems"
      :key="index"
      :title="item.title.text"
      :description="item.description"
      :imageUrl="item.img"
      :color="item.color"
    />
  </layout>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import Layout from "@/layouts/Default.vue";
import ItemBox from "./components/ItemBox.vue";
import axios from "axios";
// import debounce from "./utils/debounce";

export default {
  name: "App",
  components: { SearchBox, Layout, ItemBox },
  data() {
    return {
      items: [],
      dataObject: {},
      searchText: "",
    };
  },
  watch: {},
  computed: {
    filteredItems() {
      if (this.searchText != "") {
        return this.searchInItems();
      } else {
        return this.items;
      }
    },
  },
  methods: {
    //fetch items method from server
    fetchItems() {
      axios
        .get("http://localhost:2000/data")
        .then((res) => {
          this.items = Object.values(res.data);
          this.dataObject = res.data;
        })
        .catch((er) => {
          console.error(er);
        });
    },

    //Search Items Method with debounce
    // searchInItems: debounce(function() {
    //   const filterItems = this.items.filter(
    //     (item) =>
    //       //if we want just find items where title and description includes search text;

    //       // item.description.includes(this.searchText) ||
    //       // item.title.text.includes(this.searchText)

    //       //if title or description has exact of searchText
    //       item.title.text === this.searchText ||
    //       item.description === this.searchText
    //   );
    //   console.log(filterItems);
    //   return filterItems ? filterItems : [];
    // }, 500),

    searchInItems() {
      const filterItems = this.items.filter(
        (item) =>
          //if we want just find items where title and description includes search text;
          // item.description.includes(this.searchText) ||
          // item.title.text.includes(this.searchText)
          //if title or description has exact of searchText
          item.title.text === this.searchText ||
          item.description === this.searchText
      );
      return filterItems ? filterItems : [];
    },

    onStoreNewItem(itemTitle) {
      //Beacuase the data in db.json is not array i must post all data
      const keys = Object.keys(this.dataObject);
      const lastKeyValue = keys[keys.length - 1];

      const newItem = {
        ...this.items[0],
        title: { text: itemTitle },
      };

      //Create new key  last key + 1 ; ex lastkey = '9' new key became '10'
      const newKey = +lastKeyValue + 1;
      this.dataObject[newKey] = newItem;

      axios
        .post("http://localhost:2000/data", this.dataObject)
        .then((res) => {
          this.items = Object.values(res.data);
        })
        .catch((er) => {
          console.error(er);
        });
    },
  },
  mounted() {
    // fetch items from server
    this.fetchItems();
  },
};
</script>
