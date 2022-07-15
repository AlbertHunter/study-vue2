import CreateButton from './src/index'
console.log(CreateButton)
CreateButton.install = function(Vue){
    Vue.component(CreateButton.name,CreateButton)
}
export default CreateButton
