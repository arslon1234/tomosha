<template>
  <div>
    <div class="container">

      <video controls crossorigin playsinline
             v-for="item in data" :key="item.id"
             :poster="item.image">
        <source v-for="video in item.videos" :key="video.id" :type="video.type" :sizes="video.size" :src="video.video">
        <track kind="captions" v-for="lang in item.languages" :key="lang.id"
               :default="lang.default" :label="lang.label" :src="lang.file" :srclang="lang.srcLang">
        <!--        <track kind="captions" label="English" srclang="en"-->
        <!--               src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"-->
        <!--               default>-->
        <!--        <track kind="captions" label="Français" srclang="fr"-->
        <!--               src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt">-->
        <a href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" download>Download</a>
      </video>

    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from "vue";

const data = reactive([

      {
        id: 1,
        size: 576,
        image: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
        type: "video/mp4",
        languages: [
          {
            id: 1,
            label: "English",
            srcLang: 'en',
            file: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt",
            default: true
          },
          {
            id: 2,
            label: "Français",
            srcLang: "fr",
            file: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt",
            default: false
          }
        ],
        videos: [
          {
            id: 1,
            video: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
            type: "video/mp4",
            size: 576
          },
          {
            id: 2,
            video: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
            type: "video/mp4",
            size: 720
          }, {
            id: 3,
            video: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4",
            type: "video/mp4",
            size: 1080
          }
        ]
      },
      {
        id: 2,
        size: 576,
        image: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
        type: "video/mp4",
        languages: [
          {
            id: 1,
            label: "English",
            srcLang: 'en',
            file: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt",
            default: true
          },
          {
            id: 2,
            label: "Français",
            srcLang: "fr",
            file: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt",
            default: false
          }
        ],

        videos: [
          {
            id: 1,
            video: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
            type: "video/mp4",
            size: 576
          },
          {
            id: 2,
            video: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
            type: "video/mp4",
            size: 720
          }, {
            id: 3,
            video: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4",
            type: "video/mp4",
            size: 1080
          }
        ]
      }

    ]
)

</script>

<style scoped>
.container {
  margin: 50px auto;
  max-width: 500px;
}
</style>