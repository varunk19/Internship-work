<template>
    <div class="container">
        <div class="left">
            <img :src="getImgUrl(content.ImageUrl)" :alt="content.BrandName">
            <p class="offer">{{content.OfferText}}</p>
        </div>
        <div class="right">
            <p class="name">{{content.BrandName.toUpperCase()}}</p>
            <p>{{content.ProductName}}</p>
            <p>1 L</p>
            <p class="mrp">MRP RS.{{content.MRP}}</p>
            <p><span class="rs">RS. </span>{{details(content.Price)}}</p>
            <p><button @click="add()" class="cart">Add Cart</button>
            <button @click="add()" class="round">+</button> {{qty}} <button @click="sub()" class="round">-</button></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Item',
    data: ()=>{
        return {
            qty: 0,
            price: 0.00
        };
    },
    props: ['content'],
    methods: {
        getImgUrl(name) {
            return require('../assets/Images/' + name);
        },
        details(val) {
            this.price=val;
            return this.price;
        },
        add() {
            this.qty+=1;
            this.$emit('addqty',this.price);
        },
        sub() {
            if(this.qty>0) {
                this.qty-=1;
                this.$emit('subqty',this.price);
            }
        }
    },
};
</script>

<style scoped>
    .container {
        border-bottom: 1px solid black;
        overflow: auto;
        margin-bottom: 3%;
    }
    img {
        width: 40%;
        height: 40%;
    }
    .left {
        float: left;
        clear: left;
        width: 50%;
    }
    .right {
        text-align: left;
        float: left;
        clear: right;
        width: 50%;
    }
    .offer {
        font-size: 20px;
    }
    .name {
        color: #1976d2;
        font-weight: bold;
        font-size: 20px;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    .mrp {
        text-decoration: line-through;
    }
    .rs {
        font-weight: bold;
    }
    button {
        background-color: #1976d2;
        color: white;
        border: 0px;
    }
    .cart {
        padding: 2% 3%;
        margin-right: 6%;
        border-radius: 2px;
    }
    .round {
        margin: 0px 2%;
        font-size: 25px;
        font-weight: bolder;
        border-radius: 50px;
        height: 21px;
        line-height: 22px;
        width: 21px;
        padding: 0px;
    }
    @media only screen and (max-width: 600px) {
        .left {
            float: none;
            width: 100%;
        }
        .right {
            float: none;
            width: 100%;
        }
    }
</style>