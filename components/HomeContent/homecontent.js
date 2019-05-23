class BoxDisplay {
    constructor(boxes){
        this.boxes = boxes
        this.tab = boxes.querySelector('.book-img')
        this.info = accordian.querySelector('.book-info')
        // console.log('info', this.info)
        // console.log('images', this.image)
        // this.imagesArray = thi
        this.image.addEventListener('click', () => this.select())
    }

   select(){
        const allInfo = document.querySelectorAll('.book-info')
        allInfo.forEach(info => {
           info.classList.add('hidden-book');
        })

        this.info.classList.remove('hidden-book')
    }
}

const boxMaker = document.querySelectorAll('.info-box');
// console.log(accordianMaker)

boxMaker.forEach((e,index) => {
    const newAccord = new BoxDisplay(e)
    // console.log('accordianmaker', newAccord, index)
})
