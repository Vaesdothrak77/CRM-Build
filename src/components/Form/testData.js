class RandomRequestItem {
   constructor (name, phone, email, product) {
    this.name = name
    this.phone = phone
    this.email = email
    this.product = product
   }
};

const testData = [
    new RandomRequestItem('Иван Фролов', parseInt('+420772551797'), 'frolov@gmail.com', 'course-js'),
    new RandomRequestItem('Елена Иванова', parseInt('+420772551797'), 'ivanova@seznam.cz', 'course-js'),
    new RandomRequestItem('Василий Пупкин', parseInt('+420776555787'), 'pupkin@mail.ru', 'course-vue'),
    new RandomRequestItem('Егор Безруков', parseInt('+420772557757'), 'bezrukov@seznam.cz', 'course-wordpress'),
    new RandomRequestItem('Екатерина Похоменко', parseInt('+420777554717'), 'pochomenko@mail.ru', 'course-php'),
    new RandomRequestItem('Валентин Козлюк', parseInt('+420770552577'), 'kozluk@seznam.cz', 'course-vue'),
    new RandomRequestItem('Светлана Козырь', parseInt('+420773555727'), 'kozyr@seznam.cz', 'course-html'),
    new RandomRequestItem('Роман Веселый', parseInt('+420779554747'), 'vesely@seznam.cz', 'course-php'),
]


function getRandomItem (max) {
    return Math.floor(Math.random() * max)
}

export default function getRandomData() {
    const index = getRandomItem(testData.length)
    return testData[index]
}



export {getRandomData}