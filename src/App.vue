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
import debounce from "./utils/debounce";

export default {
  name: "App",
  components: { SearchBox, Layout, ItemBox },
  data() {
    return {
      items: [],
      filteredItems: [],
      searchText: "",
    };
  },
  watch: {
    searchText() {
      if (this.searchText != "") {
        this.searchInItems();
      } else {
        this.filteredItems = this.items;
      }
    },
  },
  methods: {
    fetchItems() {
      axios
        .get("http://localhost:2000/data")
        .then((res) => {
          this.items = Object.values(res.data);
          this.filteredItems = Object.values(res.data);
        })
        .catch((er) => {
          console.error(er);
        });
    },
    searchInItems: debounce(function() {
      this.filteredItems = this.items.filter(
        (item) =>
          //if we want just title and description has part of search text

          // item.description.includes(this.searchText) ||
          // item.title.text.includes(this.searchText)

          //if title or description has exact of searchText
          item.title.text === this.searchText ||
          item.description === this.searchText
      );
    }, 500),
    onStoreNewItem(itemTitle) {
      console.log(itemTitle);
    },
  },
  mounted() {
    this.fetchItems();
  },
};
</script>
