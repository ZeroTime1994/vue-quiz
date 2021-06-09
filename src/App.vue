<template>
  <layout>
    <search-box />
    <item-box />
  </layout>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import Layout from "@/layouts/Default.vue";
import ItemBox from "./components/ItemBox.vue";

export default {
  name: "App",
  components: { SearchBox, Layout, ItemBox },
};
</script>

<style scoped>
.app {
  text-align: center;
}
</style>
