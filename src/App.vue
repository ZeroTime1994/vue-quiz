<template>
  <layout>
    <search-box v-model:searchText="searchText" />
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
        this.filteredItems = this.items.filter(
          (item) =>
            item.description.includes(this.searchText) ||
            item.title.text.includes(this.searchText)
        );
      } else {
        this.fetchItems();
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
  },

  mounted() {
    this.fetchItems();
  },
};
</script>

<style scoped>
.app {
  text-align: center;
}
</style>
