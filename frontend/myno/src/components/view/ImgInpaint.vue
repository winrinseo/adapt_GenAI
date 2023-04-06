<template>
  <div>
    Inpaint
    <div class="row">
      <div class="col-6" style="height: 100%">
        <div class="card">
          <div class="card-header pb-0"></div>
          <div class="card-body p-4">
            <drop-zone
              v-if="!selectImg"
              @call-parent-upload-img="uploadImg"
            ></drop-zone>
            <div v-else>
              <canvas-image :image="image" ref="canvasChild" />
              <div
                class="dataTables_length"
                id="basic-1_length"
                style="margin-top: 10px"
              >
                <select
                  v-model="selectedTag"
                  name="basic-1_length"
                  aria-controls="basic-1"
                  class=""
                >
                  <option
                    v-for="(item, index) in this.$store.state.menu"
                    :key="index"
                    :value="item.value"
                  >
                    {{ item.name }}
                  </option>
                </select>
                <div style="margin-top: 10px">
                  <p>추가하고싶은 태그가 있다면 입력해주세요</p>
                  <textarea
                    class="form-control"
                    rows="5"
                    placeholder="Enter About your description"
                    v-model="includeTag"
                  ></textarea>
                </div>
              </div>
              <div class="btn-showcase" style="margin-top: 10px">
                <button class="btn btn-primary" @click="sendImg">생성</button>
                <button class="btn btn-primary" @click="deleteImg">삭제</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6" style="height: 100%">
        <div class="card">
          <div class="card-header pb-0"></div>
          <div class="card-body p-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropZone from "@/components/UI/DropZone.vue";
import CanvasImage from "@/components/UI/CanvasImage.vue";
export default {
  data() {
    return {
      selectImg: false,
      image: 0,
      fileList: [],
      attachedFiles: [],
      selectedTag: "",
      includeTag: "",
    };
  },
  components: {
    DropZone,
    CanvasImage,
  },

  methods: {
    uploadImg(files) {
      (this.selectImg = true), (this.attachedFiles = files);

      const fileArray = Array.from(this.attachedFiles);
      fileArray.forEach((file) => {
        this.fileList.push(URL.createObjectURL(file));
      });
      this.image = this.attachedFiles[0];
    },
    deleteImg() {
      this.selectImg = false;
      this.image = "";
      this.fileList = [];
      this.attachedFiles = [];
    },
    sendImg() {
      var tag = this.selectedTag + " " + this.includeTag;
      tag;
      console.log(this.$refs.canvasChild.getBase64Image());
    },
  },
};
</script>

<style></style>
