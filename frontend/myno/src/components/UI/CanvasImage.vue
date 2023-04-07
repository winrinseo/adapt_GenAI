<template>
  <div>
    <!--이미지 + canvas-->
    <canvas
      id="canvasImg"
      @mousemove="mouseMove"
      @mousedown="startPainting"
      @mouseup="mouseUp"
      @mouseleave="stopPainting"
      style="width: 90%; height: 90%"
    >
    </canvas>

    <!--위 캔버스랑 같이 그려지며 서버로 올라 갈 이미지-->
    <canvas id="hiddenCanvas" style="width: 90%; height: 90%; display: none">
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

      hiddenCanvas: "",
      hiddenCtx: "",

      painting: false,
      imgWidth: 0,
      imgHeight: 0,
    };
  },
  methods: {
    draw(image) {
      this.canvas = document.getElementById("canvasImg");
      this.ctx = this.canvas.getContext("2d");
      this.hiddenCanvas = document.getElementById("hiddenCanvas");
      this.hiddenCtx = this.hiddenCanvas.getContext("2d");

      var img = document.createElement("img");
      var this$ = this;
      img.src = image;
      img.onload = function () {
        this$.canvas.width = this.naturalWidth;
        this$.canvas.height = this.naturalHeight;
        this$.hiddenCanvas.width = this.naturalWidth;
        this$.hiddenCanvas.height = this.naturalHeight;

        this$.imgWidth = this.naturalWidth;
        this$.imgHeight = this.naturalHeight;

        this$.ctx.strokeStyle = "##000000";
        this$.ctx.lineWidth = 45;

        this$.hiddenCtx.strokeStyle = "##000000";
        this$.hiddenCtx.lineWidth = 45;
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

        //숨겨진 캔버스에도 같은 위치에 그려져야됨
        this.hiddenCtx.beginPath();
        this.hiddenCtx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
        this.ctx.stroke();

        this.hiddenCtx.lineTo(x, y);
        this.hiddenCtx.stroke();
      }
    },
    startPainting() {
      this.painting = true;
    },
    mouseUp() {
      this.stopPainting();
    },
    getBase64Image() {
      var imageData = this.hiddenCtx.getImageData(
        0,
        0,
        this.hiddenCanvas.width,
        this.hiddenCanvas.height
      );
      var data = imageData.data;
      for (var i = 0; i < data.length; i++) {
        if (data[i] === 255) data[i] = 0;
        else data[i] = 255;
      }
      this.hiddenCtx.putImageData(
        imageData,
        0,
        0,
        0,
        0,
        this.hiddenCanvas.width,
        this.hiddenCanvas.height
      );
      var dataURL = this.hiddenCanvas.toDataURL("image/png");
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
