<template>
  <nav class="nav">
    <ul>
        <li>
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <router-link to="/characters">Characters</router-link>
        </li>
        <li>
            <router-link to="/">Comics</router-link>
        </li>
        <li>
            <router-link to="/">Creators</router-link>
        </li>
        <li>
            <router-link to="/">Events</router-link>
        </li>
        <li>
            <router-link to="/">Series</router-link>
        </li>
        <li>
            <router-link to="/">Stories</router-link>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>