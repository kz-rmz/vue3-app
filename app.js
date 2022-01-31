// import changeImage from './components/changeImage';

const app = Vue.createApp({
    data(){
        return {
            changeImage(e) {
                let img = e.target;
                console.log(e.target.baseURI)
                if (img.src === `${e.target.baseURI}like.png)`) {
                    img.src = `${e.target.baseURI}like-2.png`;
                } else {
                    img.src = `${e.target.baseURI}like.png`;
                }
            },
            btnDownHandler(e){
                let img = e.target;
                console.log(img)
                if (img.src === `${e.target.baseURI}like.png`) {
                    img.src = `${e.target.baseURI}like-3.png`
                } else {
                    img.src = `${e.target.baseURI}like.png`
                }
            },
            title: (rtl = true)=>{
                let arr = ['H', 'e', 'l', 'l', 'o', ',', 'V','u', 'e'];
                if(!rtl){
                    return arr.reverse().join('').toString(); 
                }

                return arr.join('').toString();
            },
            greeting: 'Start your journey here! ;)',
            mainImage(){ return 'like-2.png'},
            likes: 0,
            clickOnImageHandler($event) {
                return [this.likes++, this.changeImage($event)]
            },
            mouseBtnDownOnImageHandler(e) {
                let img = e.target; 
                img.src = 'like-2.png';
            }, 
        }
    }
})

app.mount('#app')
