<template>
  <div class="hello">
    <!-- v-bind -->
    <div v-bind:class="backgroundClassName">Some class with PlayGround</div>
    <!-- v-on like onclick: addEventListener -->
    <button v-on:click="handleClick()">click</button>
    <!-- v-once -->
    <div v-once>the first message will never change: {{message}}</div>
    <div>the first message will be changed: {{message}}</div>
    <!-- v-html  createElement.innerHTML-->
    <div v-html="anchorTag"></div>
    <!-- v-model -->
    <label for="firstName">First name</label>
    <input type="text" name="firstName" v-model="nameInput">
    <!-- computed -->
    <div>{{message}}=>reversed:{{reverseMessage}}</div>
    <!-- watch -->
    <input type="text" name="firstName" v-model="nameInput">
  </div>
</template>

<script src='./PlayGround.js'>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./PlayGround.css' scoped></style>
