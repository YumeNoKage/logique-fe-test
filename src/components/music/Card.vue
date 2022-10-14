<template>
  <div class="card mb-3 border-0 shadow-2 rounded-cs-2">
    <div class="row g-0">
      <div class="col-4">
        <img :src="data.artworkUrl100" class="img-fluid rounded-cs-2 m-2" :alt="data.artistName">
      </div>
      <div class="col-8">
        <div class="p-0 py-2 pe-2 d-flex flex-column justify-content-between h-100">
          <div class="h-100">
            <h6 class="card-title mb-0 fs-10 text-blue-main mb-0">{{ data.artistName }}</h6>
            <p class="card-text fs-14 fw-700 text-blue-main mb-0">{{ data.trackName }}</p>
          </div>
          <div class="card-text d-flex justify-content-between mt-auto">
            <div class="rounded-pill bg-green-main px-2 py-1 fs-10 text-white">{{data.primaryGenreName}}</div>
            <div>
              <img src="@/assets/icon/currency-dollar.svg" alt="currency">
              <span class="text-yellow-main fs-12 fw-700 ms-2">{{data.trackPrice}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Music',
  props: {
    data: Object
  }
}
</script>