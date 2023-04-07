<template>
  <div>
    Text To Image
    <div class="row">
      <div class="col-6" style="height: 100%">
        <div class="card">
          <div class="card-header pb-0"></div>
          <div class="card-body p-4">
            <div>
              <label class="form-label" style="color: #ffffff"
                >추가할 태그</label
              >
              <textarea
                class="form-control"
                rows="5"
                placeholder="Enter About your description"
                v-model="includeTag"
              ></textarea>
            </div>
            <div style="margin-top: 10px">
              <label class="form-label" style="color: #ffffff"
                >제외할 태그</label
              >
              <textarea
                class="form-control"
                rows="5"
                placeholder="Enter About your description"
                v-model="excludeTag"
              ></textarea>
            </div>
            <div class="btn-showcase" style="margin-top: 10px">
              <button class="btn btn-primary" @click="sendTxt">생성</button>
              <button class="btn btn-primary" @click="deleteTag">삭제</button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6" style="height: 100%">
        <div class="card">
          <div class="card-header pb-0"></div>
          <div class="card-body p-4">
            <img :src="responseImg" alt="" style="height: 90%; width: 90%" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { txt2img } from "@/api/api";
export default {
  data() {
    return {
      includeTag: "",
      excludeTag: "",
      responsed: false,
      responseImg: "",
    };
  },
  methods: {
    generateTag() {
      console.log(this.includeTag);
      console.log(this.excludeTag);
    },
    deleteTag() {
      this.includeTag = "";
      this.excludeTag = "";
    },
    async sendTxt() {
      var tag = this.selectedTag + " " + this.includeTag;

      const param = {
        prompt: tag,
      };
      txt2img(
        param,
        ({ data }) => {
          this.responseImg = "data:image/png;base64," + data.images[0];
          this.responsed = true;
          // console.log(data.images);
        },
        (error) => {
          console.error(error);
        }
      );
    },
  },
};
</script>

<style></style>
