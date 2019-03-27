<template>
    <div>
        <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                <img src="../assets/bhejdo-logo.svg" width="112" height="28">
                </a>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                    <a class="button is-info is-outlined">
                        Sign up/in
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
</style>
