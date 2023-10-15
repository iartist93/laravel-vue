<template>
    <h1>Page 2 content here</h1>
    <router-link to="/page1">Go to page 1</router-link>
</template>
<script>
export default {
    name: "Page2",
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    background-color: black;
    padding: 10px;
}

a:hover {
    background-color: #444;
}
</style>
