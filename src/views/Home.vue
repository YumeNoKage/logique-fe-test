<template>
  <div class="bg-top-bottom-gradient h-100 w-100" id="parent">
    <div v-if="data == null" class="py-4 d-flex flex-column justify-content-between" style="height: 100vh">
      <div class="d-flex justify-content-center align-items-center h-100">
        <img class="d-flex mx-auto" src="@/assets/icon/logo.svg" alt="logo">
      </div>
      <div class="px-4 mx-3">
        <form @submit.prevent="getDataMusic()">
          <div class="input-group mb-3">
            <input type="text" v-model="search" class="form-control rounded-pill font-12 text-center py-2" placeholder="Artist / Album / Title" aria-label="Search">
          </div>
          <button type="submit" class="btn btn-search text-white text-center rounded-pill w-100">Search</button>
        </form>
      </div>
    </div>

    <div class="bg-general" v-else>
      <nav class="navbar bg-left-right-gradient position-sticky top-0 nav-rounded pb-4 shadow-1" style="z-index:1000">
        <div class="container-fluid justify-content-between">
          <div class="px-2">
            <img src="@/assets/icon/menu.svg" alt="menu">
          </div>
          <a class="navbar-brand" href="#"><img src="@/assets/icon/ngmusic.svg" alt="ngmusic"></a>
          <div class="px-2" data-bs-toggle="modal" data-bs-target="#modalSearch">
            <img src="@/assets/icon/search.svg" alt="search">
          </div>
        </div>
      </nav>

      <div class="px-3" style="min-height: 90vh">
        <div class="text-center py-5 mb-0">
          <span class="fs-14 text-blue-main"> Search result for : </span> 
          <span class="fs-18 fw-700 text-purple-main ms-2">{{filter.term}}</span>
        </div>
        <div class="mb-3" v-for="(item, index) in data.results" :key="index">
          <Card :data="item"/>
        </div>
        <div class="py-4">
          <button class="btn btn-primary bg-blue-surface rounded-pill border-0 text-blue-gray d-flex mx-auto fw-500 fs-12" @click="getDataMusic('loadmore') ">Load More</button>
        </div>
      </div>
    </div>

    <div class="modal fade" id="modalSearch" tabindex="-1" aria-labelledby="modalSearchLabel" aria-hidden="true">
      <div class="modal-dialog h-75 modal-dialog-centered">
        <div class="modal-content bg-transparent border-0 h-100">
          <div class="p-3">
            <img class="d-flex ms-auto" src="@/assets/icon/close.svg" alt="close" data-bs-dismiss="modal" aria-label="Close">
          </div>
          <div class="px-4 d-flex flex-column justify-content-center h-100">
            <form @submit.prevent="getDataMusic()">
              <div class="input-group mb-3">
                <input type="text" v-model="search" class="form-control rounded-pill font-12 text-center py-2" placeholder="Artist / Album / Title" aria-label="Search">
              </div>
              <button type="submit" class="btn bg-left-right-gradient text-white text-center rounded-pill w-100">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/music/Card.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Card
  },
  data(){
    return {
      data: null,
      search: null,
      filter: {
        term: '',
        limit: 0,
      },
      onLoading: false,
      newSearch: false,
    }
  },

  methods:{
    ...mapActions({
      getData: 'getData'
    }),
   
    async getDataMusic(type = 'search'){
      this.onLoading = true

      if (type == 'search') { 
        this.filter.term = this.search
        this.filter.limit = 10
      } else { 
        this.filter.limit += 10 
      }

      let data = {
        url: 'search',
        params: {...this.filter},
      }

      const response = await this.getData(data)
      if (response.status == 200) {
        this.data = response.data
        this.onLoading = false
        this.newSearch = false

        $('#modalSearch').modal('hide')
      }
    },
  },
}
</script>
