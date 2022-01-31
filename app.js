// import changeImage from './components/changeImage';

const app = Vue.createApp({
    data(){
        return {
            changeImage(e) {
                let img = e.target;
                if (img.src === 'http://localhost:3000/like.png') {
                    img.src = 'http://localhost:3000/like-3.png';
                } else {
                    img.src = 'http://localhost:3000/like.png';
                }
            },
            title: ()=>{
                let arr = ['H', 'e', 'l', 'l', 'o', ',', 'V','u', 'e'];

                return arr.join('').toString();
            },
            greeting: 'Start your journey here! ;)',
            mainImage(){ return 'like-2.png'},
            likes: 0,
            mouseDownEvent($event) {
                return [this.likes++, this.changeImage($event)]
            }
        }
    }
})

app.mount('#app')
