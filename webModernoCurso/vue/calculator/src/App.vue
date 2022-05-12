<template>
    <display-vue id="app">
        
        <ProjectCalculator />
    </display-vue>
</template>

<script>
import ProjectCalculator from './main/Calculator.vue'

export default {
    components: { ProjectCalculator }

}
</script>

<style>
@font-face {
    font-family: "RobotoMono";
    src: url("./fonts/RobotoMono-Thin.ttf");
}

*{
    font-family: "RobotoMono", monospace;
}

#app{
    display: flex;
    flex-direction: "column";
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: white;
    background: rgb(55,55,55);
    background: linear-gradient(90deg, rgba(55,55,55,1) 0%, rgba(69,69,69,1) 35%, rgba(167,169,170,1) 100%);
}
</style>