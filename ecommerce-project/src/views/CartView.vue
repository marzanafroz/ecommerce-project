<template>
   <h1>Cart View</h1>
</template>

<script>
    export default{
        data(){
            return{
                products: []
            }
        },
        created(){
            this.getCart();
        },
        methods: {
            getCart(){
                let cart = JSON.parse(localStorage.getItem("cart"))
                this.products = cart
               
            }
        }

    }
</script>