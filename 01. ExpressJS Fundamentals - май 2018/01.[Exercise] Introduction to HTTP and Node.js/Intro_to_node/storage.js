const fs = require('fs')

let storage = {}

module.exports = {
  put: (key, value) => {
    if (typeof (key) !== 'string') {
      throw new Error('Key must be string')
    } else if (storage.hasOwnProperty(key)) {
      throw new Error('Key already exists')
    }
    storage[key] = value
  },
  get: (key) => {
    if (!storage.hasOwnProperty(key)) {
      throw new Error(`Storage does not contains ${key}`)
    }
    return storage[key]
  },
  getAll: () => {
    return storage
  },
  update: (key, value) => {
    if (!storage.hasOwnProperty(key)) {
      throw new Error(`Storage does not contains ${key}`)
    } else if (typeof (key) !== 'string') {
      throw new Error('Key must be string')
    }
    storage[key] = value
  },
  delete: (key) => {
    if (!storage.hasOwnProperty(key)) {
      throw new Error(`Storage does not contains ${key}`)
    }
    delete storage[key]
  },
  clear: () => {
    storage = {}
  },
  loadSync: () => {
    let data = fs.readFileSync('./storage.json', 'utf8')
    storage = JSON.parse(data)
    console.log('Load successful')
  },
  saveSync: () => {
    fs.writeFileSync('./storage.json', JSON.stringify(storage))
    console.log('Save successful')
  },
  load: () => {
    return new Promise((resolve, reject) => {
      fs.readFile('./storage.json', 'utf8', (err, data) => {
        if (err) {
          reject(err)
          console.dir(err)
          return
        }

        storage = JSON.parse(data)
        resolve()
      })
    })
  },
  save: () => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./storage.json', JSON.stringify(storage), 'utf8', (err, data) => {
        if (err) {
          reject(err)
          console.dir(err)
          return
        }

        resolve()
      })
    })
  },
  clearAllInfo: () => {
    return new Promise((resolve, reject) => {
      fs.truncate('./storage.json', (err, data) => {
        if (err) {
          reject(err)
          console.dir(err)
          return
        }

        resolve()
      })
    })
  }
}
