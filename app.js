const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            toggled: true,
            inputedColor: ''

        };
    },
    methods: {
        
        btnToggled() {
                this.toggled = !this.toggled;
            }
            //console.log( this.toggled);
        },
        
    

});

app.mount("#assignment");