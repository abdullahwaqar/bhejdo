<template>
    <section class="is-vcentered">
        <div class="box">
            <div class="columns">
                <div class="level">
                    <div class="column">
                        <div class="level-left">
                            <div class="level-item">
                                <b-field>
                                    <b-upload v-model="dropFiles"
                                        multiple
                                        drag-drop>
                                        <section class="section">
                                            <div class="content has-text-centered">
                                                <p>
                                                    <img class="upload-icon" src="../assets/upload.svg">
                                                    <!-- <b-icon
                                                        icon="../assets/upload.svg"
                                                        size="is-large">
                                                    </b-icon> -->
                                                </p>
                                                <p>Drop your files here or click to upload</p>
                                            </div>
                                        </section>
                                    </b-upload>
                                </b-field>

                                <div class="tags">
                                    <span v-for="(file, index) in dropFiles"
                                        :key="index"
                                        class="tag is-primary" >
                                        {{file.name}}
                                        <button class="delete is-small"
                                            type="button"
                                            @click="deleteDropFile(index)">
                                        </button>
                                    </span>
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
                dropFiles: []
            }
        },
        methods: {
            deleteDropFile(index) {
                this.dropFiles.splice(index, 1)
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
</style>
