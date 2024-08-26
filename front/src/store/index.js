import { createStore } from 'vuex'

const files = import.meta.glob('@/store/**/*.js', { eager: true })
console.log('files:', files)

let modules = []

for (const key in files) {
  let customKey = key.replace(/^.*[\\/]/, '').replace(/(\.\/|\.js)/g, '')
  modules[customKey] = files[key].default
}

console.log('modules:', modules)
export default createStore({
  modules: {
    ...modules
  }
})
