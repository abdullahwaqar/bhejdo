<template>
  <div>
    <Header></Header>
    <div>
        <div class="level">
            <UploadForm class="level-item has-text-centered"></UploadForm>
        </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import UploadForm from '@/components/UploadForm.vue'

export default {
  name: 'home',
  components: {
    Header,
    UploadForm
  }
}
</script>

<style scoped>
</style>