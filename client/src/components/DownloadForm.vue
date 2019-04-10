<template>
    <section class="is-vcentered">
        <div class="box">
            <!-- <h1>{{ $route.params.token }}</h1> -->
            <div class="columns">
                <div class="level">
                    <div class="column">
                        <div class="level-left">
                            <div class="level-item">
                                <div class="box has-background-white-ter expand-box cus-pd-top">
                                    <div class="tile is-ancestor">
                                        <div class="tile is-12 is-vertical is-parent">
                                                <div class="tile is-child box">
                                                    <div class="control">
                                                        <input class="input" type="text" :value=downloadString readonly>
                                                    </div>
                                                    <br>
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
                                                            <a v-show="!isUploading" @click.prevent="download()" class="button is-fullwidth is-info">Download</a>
                                                            <a v-show="isUploading" class="button is-fullwidth is-info is-loading">Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
const DOWNLOAD_API_URL = 'http://localhost:5000/api/download/';

export default {
    name: 'DownloadForm',
    data() {
            return {
                file: null,
                protectWithPassword: false,
                password: '',
                isUploading: false,
                mock: 'hellooooo',
                downloadString: this.$route.params.token
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
            download() {
                const downloadURL = `${DOWNLOAD_API_URL}${this.downloadString}`
                window.location = downloadURL;
                // this.$router.replace({ path: downloadURL });
                // console.log(downloadURL)
                // //* Toggle the loading animation
                // const fetch_config = {
                //     method: 'GET',
                // };
                // fetch(downloadURL, fetch_config).then((response) => {
                //     console.log(response);
                //     if (response.ok) {
                //         return response.json();
                //     } else {
                //         response.json().then((error) => {
                //             throw new Errorr(error.message);
                //         });
                //     }
                // }).then((result) => {
                //     this.isUploading = false;
                //     console.log(result);
                // });
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
    height: 350px;
}

.expand-tile-box {
    height: 300px;
}

.cus-pd-top {
    padding-top: 100px;
}
</style>
