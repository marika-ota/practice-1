const app=({
    data(){
        return {
            text:'<a href ="">Hello Vue!</a>',
            link: 'https://google.co.jp/',
            userInput: 'aa',
            isActive: true,
            isLarge: true,
            activeColor: 'red',
            fontSize: 16,
            count: 0,
            doubleCount: 0,
        }
    },
    methods: {
        increment() {
          this.count++;
        }
    },
    computed: {
        doubled(){
            return this.count * 2;
        }
    },
    watch: {
        count(newValue) {
            this.doubleCount = newValue * 2;
            }
    },
    mounted(){
        this.link = 'https://www.notion.so/13814df6f0c080e2b38ad5e3b3905b02?v=2ad427346f3e40478e381474b478ded6'
    }
})
    

Vue.createApp(app).mount('#app')