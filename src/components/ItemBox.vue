<template>
  <div class="item-container" :style="{ backgroundColor: color + '40' }">
    <div class="row">
      <div class="delete-button-container">
        <img width="28" src="@/assets/images/icons/delete-empty.svg" alt="" />
      </div>
      <div class="row">
        <div class="item-details">
          <h3>
            {{ title }}
          </h3>
          <p>
            {{ description }}
          </p>
        </div>
        <img :src="imageUrl" width="75" height="75" :alt="title" />
      </div>
    </div>
    <div class="row line" :style="{ backgroundColor: color }"></div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    imageUrl: {
      required: true,
      type: String,
    },
    color: {
      required: true,
      type: String,
    },
    id: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.item-container {
  width: 100%;
  padding: 0.65rem;
  margin: 1.4rem 0;
  background-color: goldenrod;
  border-radius: 10px;
  text-align: right;
  .row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .line {
    margin-top: 0.75rem;
    background-color: grey;
    height: 0.75rem;
    border-radius: 10px;
  }

  &:first-child {
    margin: 0.5rem 0 0.5rem 0;
  }
  img {
    border-radius: 10px;
    overflow: hidden;
  }

  .delete-button-container {
    cursor: pointer;
  }

  .item-details {
    margin: 0 0.5rem;
    h3,
    p {
      margin: 0;
    }
    p {
      color: #979797;
    }
    h3 {
      color: #6e6e6e;
    }
  }
}
</style>
