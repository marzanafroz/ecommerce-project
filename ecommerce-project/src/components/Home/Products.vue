
<script>
import Card from '../Common/Card.vue';
import ProductsView from '../../views/ProductsView.vue';

export default{
    components:{
        "Card": Card,
        "ProductsView": ProductsView
    },
    data(){
        return{
            products: []
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
        <h1>Products</h1>
        <div class="row">
            <Card :p="products"/>
            <ProductsView/>
        </div>
    </div>
</template>