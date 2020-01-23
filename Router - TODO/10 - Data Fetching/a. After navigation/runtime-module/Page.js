/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: 'fetchData'
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      // replace `getPost` with your data fetching util / API wrapper
      fetch(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
      )
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then(json => {
          this.post = json;
        })
        .catch(error => {
          this.error = error.message;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  template: `
    <div class="post">
      <div v-if="loading">
        Loading...
      </div>

      <div v-if="error">
        Error: {{ error }}
      </div>

      <div v-if="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </div>
  `
};
