<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="title" required />
    <label>Details:</label>
    <textarea v-model="details" required></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      details: '',
    };
  },
  methods: {
    handleSubmit() {
      // console.log(this.title, this.details);
      let project = {
        //json-server will add id for us
        title: this.title,
        details: this.details,
        complete: false,
      };
      console.log(project);
      fetch('https://wll-project-planner.herokuapp.com/projects/', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(project),
      })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err.message));
    },
  },
};
</script>

<style>
form {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00b4d8;
  color: #fff;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
form button:hover {
  background-color: #90e0ef;
  cursor: pointer;
}
</style>
