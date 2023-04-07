<template>
  <div>
    Image To Image
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
              <img
                v-for="(file, index) in fileList"
                :key="index"
                id="img"
                :src="file"
                alt=""
                style="height: 90%; width: 90%"
              />
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
                  @change="changeSelect"
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
                    v-model="includePositivePrompt"
                  ></textarea>
                </div>

                <div style="margin-top: 10px">
                  <p>제외하고싶은 태그가 있다면 입력해주세요</p>
                  <textarea
                    class="form-control"
                    rows="5"
                    placeholder="Enter About your description"
                    v-model="includeNegativePrompt"
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
          <div class="card-body p-4" v-if="responsed">
            <img :src="responseImg" alt="" style="height: 90%; width: 90%" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropZone from "@/components/UI/DropZone.vue";
import { img2img } from "@/api/api";
export default {
  data() {
    return {
      selectImg: false,
      fileList: [],
      attachedFiles: [],
      selectedTag: "",

      positivePrompt: "",
      negativePrompt: "",

      includePositivePrompt: "",
      includeNegativePrompt: "",

      responsed: false,
      responseImg: "",
      ret: "",
    };
  },
  components: {
    DropZone,
  },

  methods: {
    uploadImg(files) {
      (this.selectImg = true), (this.attachedFiles = files);

      const fileArray = Array.from(this.attachedFiles);
      fileArray.forEach((file) => {
        this.fileList.push(URL.createObjectURL(file));
      });
      // console.log(this.attachedFiles);
      this.getBase64Image(this.fileList[0]);
    },
    deleteImg() {
      this.selectImg = false;
      this.fileList = [];
      this.attachedFiles = [];
    },
    async sendImg() {
      var positive = this.positivePrompt + " " + this.includePositivePrompt;
      var negative = this.negativePrompt + " " + this.includeNegativePrompt;
      const param = {
        init_images: [this.ret],
        prompt: positive,
        negative_prompt: negative,
      };
      img2img(
        param,
        ({ data }) => {
          this.responseImg = "data:image/png;base64," + data.images[0];
          this.responsed = true;
        },
        (error) => {
          console.error(error);
        }
      );
    },
    getBase64Image(image) {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      var img = document.createElement("img");
      img.src = image;
      var this$ = this;
      img.onload = function () {
        canvas.width = this.naturalWidth;
        canvas.height = this.naturalHeight;
        ctx.drawImage(this, 0, 0);
        this$.ret = canvas.toDataURL("image/png");
      };
    },
    changeSelect() {
      if (this.selectedTag == "") {
        this.positivePrompt = "";
        this.negativePrompt = "";
        return;
      }
      this.positivePrompt = this.$store.state.positivePrompt[this.selectedTag];
      this.negativePrompt = this.$store.state.negativePrompt[this.selectedTag];
    },
  },
};
</script>

<style></style>
