<template>
    <div>
        <Header></Header>
        <div>
            <div class="level">
                <DownloadForm class="level-item has-text-centered"></DownloadForm>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import DownloadForm from '@/components/DownloadForm.vue'

export default {
  name: 'download',
  components: {
    Header,
    DownloadForm
  },
  props: ['token']
}
</script>

<style scoped>
</style>