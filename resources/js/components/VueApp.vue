<template>
    <div class="vue-app">
        <h1>Vue app will be rendered here</h1>

        <nav class="navbar">
            <p>Navigate between pages here and watch the URL changes.</p>
            <div class="container">
                <ul class="navbar-nav">
                    <router-link :to="{ name: 'page1' }" class="nav-link"
                        >Page 1</router-link
                    >
                    <router-link :to="{ name: 'page2' }" class="nav-link"
                        >Page 2</router-link
                    >
                </ul>
            </div>
        </nav>

        <div class="page">
            <!-- routing here ...  -->
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: "VueApp",
};
</script>

<style scoped lang="css">
.vue-app {
    border: 4px solid black;
    max-height: 100vh;
    padding: 20px;
}

.navbar {
    margin-top: 50px;
    display: flex;
    align-items: center;
}

.navbar-nav {
    display: flex;
    gap: 15px;
}

.nav-link {
    font-size: 20px;
    color: white;
    text-decoration: none;
    text-align: center;
    background-color: black;
    padding: 5px;
}

.nav-link:hover {
    background-color: #555;
}

.page {
    margin-top: 100px;
}

p {
    font-size: 20px;
}
</style>
