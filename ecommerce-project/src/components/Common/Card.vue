<script>
export default {
  props: {
    p: [],
  },
};
</script>

<template>
  <div v-for="item in p" :key="item.id" class="col-md-3 mt-5">
    <div class="card" style="width: 18rem">
      <div class="img-box">
        <img class="img-fluid" :src="item.thumbnail" alt="..." />
      </div>
      <div class="content">
        <h5>{{item.title}}</h5>
        <p>{{item.price}}</p>
        <router-link class="btn btn-primary" :to="'/details/' + item.id">Details</router-link>
      </div>
    </div>
  </div>
</template>
