<template>
    <section class="is-vcentered">
        <div class="box">
            <div class="columns">
                <div class="level">
                    <div class="column">
                        <div class="level-left">
                            <div class="level-item">
                                <div class="box has-background-white-ter expand-box">
                                    <div class="tile is-ancestor">
                                        <div class="tile is-12 is-vertical is-parent">
                                            <div class="tile is-child box expand-tile-box">
                                                <b-field class="file">
                                                    <b-upload v-model="file">
                                                        <a class="button is-info is-outlined">
                                                            <b-icon icon="upload"></b-icon>
                                                            <span>Click to upload</span>
                                                        </a>
                                                    </b-upload>
                                                    <span class="file-name" v-if="file">
                                                        {{ file.name }}
                                                    </span>
                                                </b-field>
                                            </div>
                                                <div class="tile is-child box">
                                                    <div>
                                                        <div class="block">
                                                            <b-checkbox v-model="protectWithPassword"
                                                                native-value="true">
                                                                Protect With Password
                                                            </b-checkbox>
                                                            <b-field v-if="protectWithPassword" label="Password">
                                                                <b-input type="password"
                                                                    v-model="password"
                                                                    password-reveal>
                                                                </b-input>
                                                            </b-field>
                                                            <a class="button is-fullwidth is-info">Upload</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="level-right">
                            <div>
                                <h1 class="is-size-3">Simple, private file sharing</h1>
                                <p class="has-text-grey">
                                    Bhejdo lets you share files with end-to-end encryption and a link that automatically expires.
                                    <br>
                                    So you can keep what you share private and make sure your stuff doesn’t stay online forever.
                                </p>
                                <img class="right-logo" src="../assets/bhejdo-logo-outline.svg">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'UploadForm',
    data() {
            return {
                file: null,
                protectWithPassword: false,
                password: ''
            }
        },
        methods: {
            snackbar() {
                this.$snackbar.open(`Default, positioned bottom-right with a green 'OK' button`)
            },
        }
}
</script>

<style scoped>
.is-vcentered {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

.upload-icon {
    opacity: 0.1;
}

.right-logo {
    width: 100px;
    padding-top: 20px;
    opacity: 0.4;
}

.expand-box {
    width: 500px;
    height: 500px;
}

.expand-tile-box {
    height: 800px;
}
</style>
