<template>
  <form @submit.prevent="updateHandler">
    <label>Title:</label>
    <input type="text" v-model="title" required />
    <label>Details</label>
    <textarea v-model="details" required></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      title: '',
      details: '',
      uri: 'https://wll-project-planner.herokuapp.com/projects/' + this.id,
    };
  },
  mounted() {
    fetch(this.uri)
      .then(res => res.json())
      .then(data => {
        this.title = data.title;
        this.details = data.details;
      })
      .catch(err => console.log(err));
  },
  methods: {
    updateHandler() {
      let project = {
        title: this.title,
        details: this.details,
      };
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(project),
      })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err.message));
    },
  },
};
</script>

<style></style>
