<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" @end="end"/>
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

const end = (data: number, res: string) => {
  console.log(data, res);
};
</script>
