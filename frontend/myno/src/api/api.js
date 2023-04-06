import api from "./index.js";

async function txt2img(article, success, fail) {
  await api.post(`/txt2img`, JSON.stringify(article)).then(success).catch(fail);
}

async function img2img(article, success, fail) {
  await api.post(`/img2img`, JSON.stringify(article)).then(success).catch(fail);
}

export { txt2img, img2img };
