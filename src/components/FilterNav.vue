<template>
  <nav class="filter-nav">
    <label>Filtered by:</label>
    <button
      @click="filterUpdate('all')"
      :class="{ active: filterCurrent === 'all' }"
    >
      View All
    </button>
    <button
      @click="filterUpdate('completed')"
      :class="{ active: filterCurrent === 'completed' }"
    >
      Completed
    </button>
    <button
      @click="filterUpdate('ongoing')"
      :class="{ active: filterCurrent === 'ongoing' }"
    >
      Ongoing
    </button>
  </nav>
</template>

<script>
export default {
  props: ['filterCurrent'],
  methods: {
    filterUpdate(filterBy) {
      console.log(filterBy);
      this.$emit('filterChange', filterBy);
    },
  },
};
</script>

<style scoped>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button:hover {
  color: #555;
}
.filter-nav button.active {
  color: #555;
}
label {
  display: inline-block;
  font-size: 13px;
  font-weight: bold;
  margin-right: 10px;
  color: rgb(150, 149, 149);
}
</style>
