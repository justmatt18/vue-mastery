var app = new Vue ({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        sizes: ["42", "44", "45", "46", "47"],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: './assets/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 5255,
                variantColor: 'blue',
                variantImage: './assets/vmSocks-blue.jpg'
            }
        ],
        cart: 0,
        removeButtonDisabled: true,
    },
    methods: {
        addtoCart() {
            this.cart += 1
            if(this.cart > 0){
                this.removeButtonDisabled = false
            }
        },
        updateProduct(variantImage){
            this.image = variantImage
        },
        removeItem(){
            if(this.cart >0){
                this.cart -= 1
            }
            if(this.cart == 0)
                this.removeButtonDisabled = true
        },
    }
})