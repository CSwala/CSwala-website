<template>
  <NavBar />
  <router-view />
  <Footer />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
:root {
  --primary: #f6546a;
  --secondary: #021929;
  --textprimary: #efefef;
  --textaccent: #f6546a;
  --background: #101010;
  --bgTrans05: rgba(255,255,255,0.05);
  --bgTrans15: rgba(255,255,255,0.15);
}
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: var(--background);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--textprimary);
}
</style>
