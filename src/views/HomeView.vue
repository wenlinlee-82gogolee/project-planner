<template>
  <div class="home">
    <FilterNav
      @filterChange="filterCurrent = $event"
      :filterCurrent="filterCurrent"
    />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue';
import FilterNav from '../components/FilterNav.vue';
export default {
  name: 'HomeView',
  data() {
    return {
      projects: [],
      filterCurrent: 'all',
    };
  },
  components: { SingleProject, FilterNav },
  mounted() {
    fetch('https://wll-project-planner.herokuapp.com/projects')
      .then(res => res.json())
      .then(data => (this.projects = data))
      .catch(err => console.log(err.message));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter(project => {
        return project._id !== id;
      });
    },
    handleComplete(id) {
      let p = this.projects.find(project => {
        return project._id === id;
      });
      p.complete = !p.complete;
    },
  },
  computed: {
    filteredProjects() {
      if (this.filterCurrent === 'completed') {
        return this.projects.filter(project => project.complete);
      }
      if (this.filterCurrent === 'ongoing') {
        return this.projects.filter(project => !project.complete);
      }
      return this.projects;
    },
  },
};
</script>
