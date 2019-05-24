class Accordian {
    constructor(accordian){
        this.accordian = accordian
        this.image = accordian.querySelector('.book-img')
        this.info = accordian.querySelector('.book-info')
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

accordianMaker.forEach(e => {
    const newAccord = new Accordian(e)
})

