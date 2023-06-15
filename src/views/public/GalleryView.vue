<template>
  <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 overflow-y-auto">
    <article v-for="post in posts" :key="post.id" class="bg-ghost-white rounded-lg shadow-md">
      <router-link :to="'posts/' + post.slug" class="w-full h-full inline-block">
        <div class="relative h-48">
          <img :src="extractThumbnail(post.content)" alt="Post Image" class="object-cover w-full h-full">
          <!-- <div class="absolute inset-0 flex items-center justify-center">
            <button class="bg-white text-gray-600 rounded-full p-2 mx-2 shadow">
              <font-awesome-icon class="fa-2xl m-1" icon="fa-grip" />
            </button>
            <button class="bg-white text-gray-600 rounded-full p-2 mx-2 shadow">
              <font-awesome-icon class="fa-2xl m-1" icon="fa-grip" />
            </button>
          </div>-->
        </div> 
        <div class="p-4">
          <h2 class="text-md font-semibold text-frosty-green">{{ post.title.substring(0, 50) }}</h2>
        </div>
      </router-link>
    </article>
  </div>

</template>

<script setup>

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
});

function extractThumbnail(content) {
    // Extract the thumbnail from the content HTML
    const imgRegex = /<img.*?src="(.*?)".*?>/g

    let thumbnail = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAMFBMVEX39/f////X19fe3t7v7+/Ozs7s7OzY2NjU1NT8/Pzb29v09PTh4eH6+vrn5+fp6el9gssrAAAEX0lEQVR4nO2dYZdrMBCGXXoJVf3//3Y3FVuRmWSUMnHe58N2zxY982y8IqKKAgAAAAAAAAAAAAAAAAAAAAAAAAAAAABO4X7Lgfs3FTy6/znQPb7poCodzfizef9O0LilpiWYBb2txLcYrDq9NLM/NdUxDlQDB3BggQM4sMDBsQ6MHk5zUOuhOclB808PcAAHFjiAAwscwIEFDuDAAgdwYIEDOLDAARxY4AAOLHCQm4P2IVim7quuq4b7RR30VWqJonJjpL8vzys6KIxJ/HeH+SCxaYrrOehS61X+OHmZUpafg/q3QlOvUCCUkJGD9lWhadkFnoGCX/jFc3TQj2v23PsPSgG/eI4OCpNo3j2loDTpXMzHQTet2tHvt2QzKMvhOg7qvxKZWLwxDtKflIuDdt68yZwbaAWxEM3MgbezkzlHx4EkEDJxUJhkWdwUj8s46Py6qFi8ejtY5h0VixfPg7ZcQhR28ePCEJYXxiLdTZR0FHNwUBDVEXs5HYqCs6YcHCwCcSSMxTvZEJheZWYO6B2diEXqyCA4XcjBAbOfm0QxnKkcHXDHPCLs2qUEIxpSVO+ACkRXINHM/ZEkcxN9hHoHZCCOUHFXl+/zy0owEp+DA67n8yqS3Nlv/aumbpANKmfggDdgYbrBbSsYRczGAdFDnDeE9BhR/g74QHQSxO09XwfJ2z4EvcDMHcQC0TUE2dEvYwcpA5aLO4gHomOHWFTsIBWIIzvEomIHwvvgtseiXgfpQHQNYXMs6nUgM1CSJ9EXcSAKxNHB1ljU6oAbISUlbIxFrQ5W3Rgcnan1SA6qKnUgDUTXEGKx2CcPHEodrDFg4bd0N8kxRZ0OyJlFESKx2KUPHCodcFNKIhK4YbPX1I3EpSaVDj74pgQmFt1ctviBQ6ODdYE4wsSiu+wSj0WNDsTfcORBbWm6/BbvTyt0sDYQXZlULP4NzEdjUZ+DNT1ET0IYi++5bNFhBn0OPv7qmCAW54eXWCyqc0BfQZcQ7PTedehILKpz8FkgjvhbKqTXHrU5+CwQXZkDX1pgSK+D9T1ET8I8FuvFpvj+tDIH3CRDIfNYDO/n4GJRl4PPA9GV+R4rIGxywwy6HGwJxJFpS+RcNiYWVTnYEoiuzGnyDT11Q7+DbYHoJIyxuAxE9yYdi5ocbAxEV8PLZtyQXgdbA9GVaWORHZgnY1GRg+2BOG05MpeNikU9DrYHoivzGZvLRsWiGgd7BKIjZpOKRTUOdglEAcSdD1oc7BOIEsJY1OJgp0AUEMaiEgd0n+ZL6HTA9Wm+QjCZXYeDowLRSXgodHBcILo6FTqI9Wm+weI+Lw0ODg3E4NNVONixhyjFj0UFDp7V8XStLgenAwdwYIEDOLDAARxY4OA8B5qeSVOe5eDsBxLNOM2BVuAADixwAAcWODjYQfP3GlxfSVxwadxK/tNu39vzlvWfc9u8/3aKAzzbGM+4BgAAAAAAAAAAAAAAAAAAAAAAAAAAAIAoP63jp7iq3tXyAAAAAElFTkSuQmCC'

    // Check if there is an img tag
    const imgMatch = imgRegex.exec(content)

    if (imgMatch) {
      thumbnail = imgMatch[1]
    }

    return thumbnail
  }
</script>
<style scoped>
  article {
    transition: all 0.2s;
  }

  article:hover {
    transform: translateY(-2px);
  }
</style>
