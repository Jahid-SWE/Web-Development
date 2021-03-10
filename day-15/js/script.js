Vue.component('jahid', {
   template:'<button type="button" @click="test">click me</button>',
    data(){
       return {
           message:'hello world',
           number:0
       }
},
    methods: {
       test:function (){
           alert('hiii')
       },
        test1:function (){
            alert('es')
        },
    }
});


new Vue({
   el: '#app',
   data:{
       name: 'jahid hassan',
       firstNumber: '',
       lastNumber: '',
       result:'',
   },
    methods:{
       one: function (){
           alert('hellow world');
       },
        sum:function()
        {
            if(this.firstNumber.length>0){

            }
            this.result = parseFloat(this.firstNumber) + parseFloat(this.lastNumber);
        },

        subtraction:function()
        {
            this.result = (parseFloat(this.firstNumber) - parseFloat(this.lastNumber));
        },

        multiplication:function()
        {
            this.result = (parseFloat(this.firstNumber) * parseFloat(this.lastNumber));
        },

        division:function()
        {
            this.result = (parseFloat(this.firstNumber) / parseFloat(this.lastNumber));
        },

        modulus:function()
        {
            this.result = (parseFloat(this.firstNumber) % parseFloat(this.lastNumber));
        },

    }

});