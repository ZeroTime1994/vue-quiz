<template>
  <div class="search-container">
    <div class="row">
      <div class="plus">
        <img src="@/assets/images/icons/plus.svg" />
      </div>
      <div class="input-container grow">
        <div class="icon">
          <img src="@/assets/images/icons/search.svg" />
        </div>
        <input name="search" placeholder="Search something..." />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.input-container {
  position: relative;
  width: 80%;
  input {
    padding: 0.7rem 1rem 0.7rem 3.5rem;
    border: none;
    width: 100%;
    outline: none;
    border-radius: 50px !important;
  }
  .icon {
    position: absolute;
    top: 0.3rem;
    left: 1rem;
    img {
      width: 2rem;
    }
  }
}

.search-container {
  background-color: #dce2e8;
  padding: 0.7rem 0.4rem;
  border-radius: 10px;
  position: sticky;
  top: 0;
}

.row {
  display: flex;
  justify-content: center;
  gap: 1.4rem;
  align-items: stretch;
}

.plus {
  cursor: pointer;
  border-radius: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  img {
    width: 1.4rem;
    margin: 0.6rem;
  }
}
</style>
