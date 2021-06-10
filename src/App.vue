<template>
  <layout>
    <search-box />
    <item-box
      v-for="(item, index) in items"
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
    };
  },
  mounted() {
    axios
      .get("http://localhost:2000/data")
      .then((res) => {
        this.items = res.data;
      })
      .catch((er) => {
        console.error(er);
      });
  },
};
</script>

<style scoped>
.app {
  text-align: center;
}
</style>
