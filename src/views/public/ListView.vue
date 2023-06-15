<template>
  <div>
    <ul class="space-y-6 text-frosty-green">
      <li v-for="post in posts" :key="post.id" class="border border-gray-200 rounded-lg p-4 shadow-md">
        <div class="flex items-center space-x-4">
          <img :src="extractThumbnail(post.content)" alt="Post Image" class="w-16 h-16 rounded-full">
          <div>
            <h2 class="text-lg font-semibold">{{ post.title }}</h2>
            <p class="text-gray-500">{{ post.updated_at }}</p>
          </div>
        </div>
        <p class="mt-2 text-gray-700">{{ post.content.substring(0, 60) }}</p>
        <router-link :to="'/posts/' + post.id" class="mt-4 inline-block text-blue-600 hover:underline">Read More</router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
  li {
    transition: all 0.2s;
  }

  li:hover {
    transform: translateY(-2px);
  }
</style>
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
