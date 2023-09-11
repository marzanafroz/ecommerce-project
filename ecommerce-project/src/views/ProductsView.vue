<script >
import Card from '../components/Common/Card.vue';

export default{
    components:{
        "Card": Card
    },
    data(){

        return{
            products:[]
        }
    },
    created(){

         fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => {
            this.products = json.products;
        }); 

    }

    

}

</script>

<template>
     <div class="container">
      <div class="row">
         <Card :p="products"/>
      </div>
     </div>
   
</template>