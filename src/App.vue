<template>
  <layout>
    <search-box />
  </layout>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import Layout from "@/layouts/Default.vue";

export default {
  name: "App",
  components: { SearchBox, Layout },
};
</script>

<style scoped>
.app {
  text-align: center;
}
</style>
