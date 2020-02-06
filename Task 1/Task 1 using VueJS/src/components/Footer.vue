<template>
    <div id="footer">
        <div id="details">
            <p>Qty: {{qty}}</p>
            <p>Total: {{total}}</p>
        </div>
        <div id="buy">
            <p><button id="checkout" :disabled="disablebtn" @click="display">Checkout</button></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    props: ['qty','total'],
    watch: {
        qty: function() {
            if(this.qty==0)
                this.disablebtn=true;
            else
                this.disablebtn=false;
        }
    },
    methods: {
        display() {
            alert(`Transaction successful:\nTotal qty=${this.qty}\nTotal Amount=${this.total}`);
        }
    }

}
</script>

<style scoped>
    #footer {
        background-color: #1976d2;
        padding: 0% 1%;
        color: black;
        display: table;
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
    }
    #details {
        background-color: #1976d2;
        width: 35%;
        float: left;
        overflow: auto;
        clear: left;
        text-align: left;
        padding-left: 15%;
    }
    #buy {
        background-color: #1976d2;
        width: 50%;
        float: left;
        overflow: auto;
        clear: right;
    }
    button {
        border: 0px;
        padding: 1.5% 1.5%;
        border-radius: 2px;
        font-size: 15px;
    }
    button:disabled {
        opacity: 0.5;
    }
</style>
