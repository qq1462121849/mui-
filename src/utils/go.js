export function go(n){
    this.$store.commit('slideleft')
  isNaN(n)?this.$router.push(n):this.$router.go(n)
 
   setTimeout(()=>{
    this.$store.commit('slideright')
   },350)
   
}