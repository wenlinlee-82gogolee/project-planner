<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
      <div class="icons">
        <router-link :to="{ name: 'editProject', params: { id: project.id } }">
          <span class="material-icons"> edit </span>
        </router-link>

        <span @click="deleteProject" class="material-icons"> delete </span>
        <span @click="toggleComplete" class="material-icons tick"> done </span>
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDetails: false,
      uri: 'http://localhost:3000/projects/' + this.project.id,
    };
  },
  props: ['project'],
  methods: {
    deleteProject() {
      console.log(this.uri);
      fetch(this.uri, { method: 'DELETE' })
        .then(() => this.$emit('delete', this.project.id))
        .catch(err => console.log(err.message));
    },
    toggleComplete() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ complete: !this.project.complete }),
      })
        .then(() => {
          this.$emit('complete', this.project.id);
        })
        .catch(err => console.log(err.message));
    },
  },
};
</script>

<style>
.project {
  margin: 20px auto;
  background: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e04db0;
}
.project.complete {
  border-left: 4px solid #00b4d8;
}
.project.complete .tick {
  color: #00b4d8;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
</style>
