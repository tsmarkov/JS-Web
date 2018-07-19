const storage = require('./storage')

// storage.put('key1', 'value1')
// storage.put('key2', 'value2')
// storage.put('key4', 'value4')
// storage.put('key5', 'value5')
// storage.put('key3', 'value3')

// storage.saveSync()
// storage.clear()
// console.log(storage.getAll())

// console.log('------')

// storage.loadSync()

// storage.loadSync()

// storage.load()
//   .then(() => {
//     console.log(storage.getAll())
//   }).catch((err) => {
//     console.error(err)
//   })

// storage.put('y', 'z')
// storage.save()
//   .then(() => {
//     storage.clear()
//     console.log('Storage cleared')
//   })
//   .catch((err) => {
//     console.error(err)
//   })

// console.log(storage.getAll())

// storage.load()
//   .then(() => {
//     console.log(storage.getAll())
//   }).catch((err) => {
//     console.error(err)
//   })

storage.clearAllInfo()
  .then(() => {
    let data = storage.getAll()
    console.log(data)
  })
  .catch((err) => {
    console.error(err)
  })
