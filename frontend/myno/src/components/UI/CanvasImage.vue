<template>
  <div>
    <canvas
      id="canvasImg"
      @mousemove="mouseMove"
      @mousedown="startPainting"
      @mouseup="mouseUp"
      @mouseleave="stopPainting"
      style="width: 90%; height: 90%"
    >
    </canvas>
  </div>
</template>

<script>
export default {
  props: ["image"],
  data() {
    return {
      canvas: "",
      ctx: "",
      img: "",
      painting: false,
      imgWidth: 0,
      imgHeight: 0,
    };
  },
  methods: {
    draw(image) {
      this.canvas = document.getElementById("canvasImg");
      this.ctx = this.canvas.getContext("2d");

      var img = document.createElement("img");
      var this$ = this;
      img.src = image;
      img.onload = function () {
        this$.canvas.width = this.naturalWidth;
        this$.canvas.height = this.naturalHeight;
        this$.imgWidth = this.naturalWidth;
        this$.imgHeight = this.naturalHeight;

        this$.ctx.strokeStyle = "##000000";
        this$.ctx.lineWidth = 45;
        this$.ctx.drawImage(this, 0, 0, this.width, this.height);
      };
    },
    stopPainting() {
      this.painting = false;
    },
    mouseMove(event) {
      //canvas 좌표 계산 식
      const bound = this.canvas.getBoundingClientRect();
      const x =
        (event.clientX - bound.left) * (this.canvas.width / bound.width);
      const y =
        (event.clientY - bound.top) * (this.canvas.height / bound.height);
      if (!this.painting) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
      }
    },
    startPainting() {
      this.painting = true;
    },
    mouseUp() {
      this.stopPainting();
    },
    getBase64Image() {
      var dataURL = this.canvas.toDataURL("image/png");
      return dataURL;
    },
  },
  watch: {
    img() {
      this.draw(this.img);
    },
  },

  mounted() {
    this.img = URL.createObjectURL(this.image);
  },
};
</script>

<style></style>
