<template>
    <section class="is-vcentered">
        <div class="box">
            <div class="columns">
                <div class="level">
                    <div class="column">
                        <div class="level-left">
                            <div class="level-item">
                                <div class="box has-background-white-ter expand-box cus-pd-top">
                                    <div class="tile is-ancestor">
                                        <div class="tile is-12 is-vertical is-parent">
                                            <div class="tile is-child box expand-tile-box">
                                                <b-field class="file">
                                                    <b-upload v-model="file">
                                                        <a class="button is-info is-outlined">
                                                            <span>Click to upload</span>
                                                        </a>
                                                    </b-upload>
                                                    <span class="file-name " v-if="file">
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
                                                            <a v-show="!isUploading" @click.prevent="upload()" class="button is-fullwidth is-info">Upload</a>
                                                            <a v-show="isUploading" class="button is-fullwidth is-info is-loading">Loading</a>
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
const UPLOAD_API_URL = 'http://localhost:5000/api/upload';

export default {
    name: 'UploadForm',
    data() {
            return {
                file: null,
                protectWithPassword: false,
                password: '',
                isUploading: false
            }
        },
        watch: {
            file: {
                handler() {
                    this.isUploading = false;
                },
                deep: true
            }
        },
        methods: {
            noFileSelectedError() {
                this.$snackbar.open({
                    duration: 5000,
                    message: 'No File Selected',
                    type: 'is-danger',
                    position: 'is-bottom-left',
                    actionText: 'Ok',
                    queue: false,
                });
            },
            upload() {
                if (this.file === null) {
                    this.noFileSelectedError();
                } else {
                    //* Toggle the loading animation
                    this.isUploading = true;
                    let formData = new FormData();
                    formData.append('upload', this.file);
                    formData.append('password', this.protectWithPassword ? this.password : null);
                    const fetch_config = {
                        method: 'POST',
                        body: formData
                    };
                    fetch(UPLOAD_API_URL, fetch_config).then((response) => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            response.json().then((error) => {
                                throw new Errorr(error.message);
                            });
                        }
                    }).then((result) => {
                        console.log(result.file.result._id);
                        setTimeout(() => {
                            this.isUploading = false;
                            this.$router.push({ path: `/download/${result.file.result._id}` });
                        }, 1000);
                    });
                }
            }
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

.cus-pd-top {
    padding-top: 100px;
}
</style>
