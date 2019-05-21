class Accordian {
    constructor(accordian){
        this.accordian = accordian
        this.image = accordian.querySelector('.book-img')
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

const accordianMaker = document.querySelectorAll('.book-container');
// console.log(accordianMaker)

accordianMaker.forEach((e,index) => {
    const newAccord = new Accordian(e)
    // console.log('accordianmaker', newAccord, index)
})

