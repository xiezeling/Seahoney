import mock from 'mockjs'

let buy = []

for (let i = 0; i < 20; i++) {
  buy.push({
    id: i,
    img: mock.Random.dataImage('375x200'),
    text: mock.Random.ctitle(),
    title: mock.Random.ctitle(),
    price: mock.Random.float(60, 10000, 2, 2)
  })
}
export default buy
