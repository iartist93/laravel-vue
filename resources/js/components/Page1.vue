<template>
    <h1>Page 1 content here</h1>
    <router-link to="/page2">Go to page 2</router-link>
</template>
<script>
export default {
    name: "Page1",
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
