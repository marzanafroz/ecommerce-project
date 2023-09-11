<template>
   <div class="container py-5 shadow-lg my-5">
    <div class="row ">
        <div class="col-md-7">
            <div class="product_thumbnail">
                <img id="preview" style="height: 450px;" class="img-fluid" :src="product.thumbnail" alt="">
            </div>
            <div class="row g-3 mt-4">
                <div v-for="image in product.images" :key="image" class="col-md-3 border p-2">
                    <img @click="changeImage" style="height: 80px" class="img-fluid" :src="image" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-5">
            <div class="product_content">
                <h3>{{ product.title }}</h3>
                <p>{{ product.description }}</p>
                <h6>Price: <span class="text-success">{{ (product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}}</span> <span class="text-decoration-line-through text-danger ms-3">{{product.price}}</span></h6>
                <button @click="addToCart(product)" class="btn btn-primary mt-3">Add to Cart</button>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
import useCartEventBus from '../eventBus';
    export default{
        
        data(){
            return {
                product: {},
                cart: []
            }
        },

        methods:{
            getData(){
                fetch("https://dummyjson.com/products/"+this.$route.params.id)
                .then( res => res.json())
                .then( data => this.product = data)     
            
            },
            changeImage(event){
                document.getElementById("preview").src = event.target.src               
            },
            addToCart(product){  
                const { updateCartItemCount } = useCartEventBus();
                let storeProduct = localStorage.getItem("cart");
                let parseProduct = JSON.parse(storeProduct);

                if(parseProduct){

                    let exProduct = parseProduct.find(item => item.product.id === product.id);

                    if(exProduct){
                        exProduct.quantity++;
                        this.cart = parseProduct;
                    }else{
                        parseProduct.push({ product: product, quantity: 1 });
                        this.cart = parseProduct;
                    }
                    
                }else{
                    parseProduct = [{ product: product, quantity: 1 }];
                    this.cart = parseProduct;
                }
                updateCartItemCount()
                localStorage.setItem("cart", JSON.stringify(parseProduct));            




            }
        },
        created(){
            this.getData()
        }

     
    }
</script>