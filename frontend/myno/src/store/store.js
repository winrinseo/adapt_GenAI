//index.js
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: "test",
    menu: [
      { name: "선택해주세요.", value: "" },
      { name: "로맨틱크라운", value: 0 },
      { name: "빈폴", value: 1 },
      { name: "루이비통", value: 2 },
      { name: "켈빈클라인", value: 3 },
    ],
    positivePrompt: [
      `(((((rocrminyoung man clothes, rocrminyoung pants))))), detailed clothes, ((((upper body)))), BREAK, BREAK,
            (photo of 1 korean man ), korean beauty, korean mixed, korean idol, (looking at viewer:1.2), BREAK, BREAK,
            perfect anatomy, small head, golden ratio face, a face of perfect proportion, (finely detailed face, ((detailed right eyes, detailed left eyes))), exquisitely detailed skin, BREAK, BREAK,
            realistic, cinematic light, symmetrical, cinematic light, ultra high res, 8k uhd, masterpiece, detailed, intricate details, best shadow, delicate, RAW,BREAK, BREAK,
            background is white,`,
      `(((((adbpwoorin man clothes, adbpwoorin pants))))), detailed clothes, ((((upper body)))), BREAK, BREAK,
            (photo of 1 korean man), korean beauty, korean mixed, korean idol, (looking at viewer:1.2), BREAK, BREAK,
            perfect anatomy, small head, golden ratio face, a face of perfect proportion, (finely detailed face, ((detailed right eyes, detailed left eyes))), exquisitely detailed skin, BREAK, BREAK,
            realistic, cinematic light, symmetrical, cinematic light, ultra high res, 8k uhd, masterpiece, detailed, intricate details, best shadow, delicate, RAW,BREAK, BREAK,
            background is white,`,
      `(((((lvsoojeong girl clothes, lvsoojeong pants))))), detailed clothes, BREAK, BREAK,
            (photo of 1 korean girl), ((((upper body)))), korean beauty, korean mixed, korean idol, (looking at viewer:1.2), BREAK, BREAK,
            perfect anatomy, small head, golden ratio face, a face of perfect proportion, (finely detailed face, ((detailed right eyes, detailed left eyes))), exquisitely detailed skin, BREAK, BREAK,
            realistic, cinematic light, symmetrical, cinematic light, ultra high res, 8k uhd, masterpiece, detailed, intricate details, best shadow, delicate, RAW,BREAK, BREAK,`,
      `((((adckhyobin girl clothes, adckhyobin pants))))), detailed clothes, BREAK, BREAK,
            (photo of 1 korean girl), ((((upper body)))), korean beauty, korean mixed, korean idol, (looking at viewer:1.2), BREAK, BREAK,
            perfect anatomy, small head, golden ratio face, a face of perfect proportion, (finely detailed face, ((detailed right eyes, detailed left eyes))), exquisitely detailed skin, BREAK, BREAK,
            realistic, cinematic light, symmetrical, cinematic light, ultra high res, 8k uhd, masterpiece, detailed, intricate details, best shadow, delicate, RAW,BREAK, BREAK,`,
    ],
    negativePrompt: [
      `((nsfw)), ((nude)), nipple, gold color, girl, wonan,
            (((full body))), hair crosses the screen border, long shot, ((multiple people)), more than 1 person,
            bad anatomy, low quality anatomy, (wrong hands, bad hands), bad nails, bad legs, bad fingers, bad toes, tiptoes, extra digit, extar hands, extra fingers,
            extra arms, extra legs, fewer digit, lowres low quality face, lowres low quality eyes, text, bad arm anatomy, bad leg anatomy, bad hand anatomy, bad finger anatomy, elf-ears,mutated hands and fingers, disfigured, fused, cloned,duplicate, missing_body, missing_face, missing_eyes, ((strabismus)),
            (glossy cloth), obesity, (fat, tan, muscular, infant, toddlers, (((chibi))), sd character), comic, cartoon, grayscale, mono,
            (worst quality), normal quality, (bad_prompt), bad_prompt_version, low quality, (blurry, Low_resolution), Low_picture_quality, lowres, low resolution, worst quality,
            bad detailed background, unclear architectural outline, non-linear background,`,
      `((nsfw)), ((nude)), nipple, gold color, girl, woman,
            (((full body))), hair crosses the screen border, long shot, ((multiple people)), more than 1 person,
            bad anatomy, low quality anatomy, (wrong hands, bad hands), bad nails, bad legs, bad fingers, bad toes, tiptoes, extra digit, extar hands, extra fingers,
            extra arms, extra legs, fewer digit, lowres low quality face, lowres low quality eyes, text, bad arm anatomy, bad leg anatomy, bad hand anatomy, bad finger anatomy, elf-ears,mutated hands and fingers, disfigured, fused, cloned,duplicate, missing_body, missing_face, missing_eyes, ((strabismus)),
            (glossy cloth), obesity, (fat, tan, muscular, infant, toddlers, (((chibi))), sd character), comic, cartoon, grayscale, mono,
            (worst quality), normal quality, (bad_prompt), bad_prompt_version, low quality, (blurry, Low_resolution), Low_picture_quality, lowres, low resolution, worst quality,
            bad detailed background, unclear architectural outline, non-linear background,`,
      `((nsfw)), ((nude)), nipple, gold color,
            hair crosses the screen border, long shot, ((multiple people)), more than 1 person,
            bad anatomy, low quality anatomy, (wrong hands, bad hands), bad nails, bad legs, bad fingers, bad toes, tiptoes, extra digit, extar hands, extra fingers,
            extra arms, extra legs, fewer digit, lowres low quality face, lowres low quality eyes, text, bad arm anatomy, bad leg anatomy, bad hand anatomy, bad finger anatomy, elf-ears,mutated hands and fingers, disfigured, fused, cloned,duplicate, missing_body, missing_face, missing_eyes, ((strabismus)),
            obesity, (fat, tan, muscular, infant, toddlers, (((chibi))), sd character), comic, cartoon, grayscale, mono,
            (worst quality), normal quality, (bad_prompt), bad_prompt_version, low quality, (blurry, Low_resolution), Low_picture_quality, lowres, low resolution, worst quality,
            bad detailed background, unclear architectural outline, non-linear background,`,
      `((nsfw)), ((nude)), nipple, gold color,
            hair crosses the screen border, long shot, ((multiple people)), more than 1 person,
            bad anatomy, low quality anatomy, (wrong hands, bad hands), bad nails, bad legs, bad fingers, bad toes, tiptoes, extra digit, extar hands, extra fingers,
            extra arms, extra legs, fewer digit, lowres low quality face, lowres low quality eyes, text, bad arm anatomy, bad leg anatomy, bad hand anatomy, bad finger anatomy, elf-ears,mutated hands and fingers, disfigured, fused, cloned,duplicate, missing_body, missing_face, missing_eyes, ((strabismus)),
            obesity, (fat, tan, muscular, infant, toddlers, (((chibi))), sd character), comic, cartoon, grayscale, mono,
            (worst quality), normal quality, (bad_prompt), bad_prompt_version, low quality, (blurry, Low_resolution), Low_picture_quality, lowres, low resolution, worst quality,
            bad detailed background, unclear architectural outline, non-linear background,`,
    ],
  },
  mutations: {},
  actions: {},
  getters: {},
});
