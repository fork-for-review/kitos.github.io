const axios = require('axios')

let youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    key: process.env.YOUTUBE_KEY,
  },
})

let enrichPublicActivityVideosWithYouTubeSnippets = async ({
  actions: { createNodeField },
  getNodes,
}) => {
  let videos = getNodes().filter(
    n => n.internal.type === 'ContentfulPublicActivity' && n.type === 'video'
  )

  let videoMap = videos.reduce((map, video) => {
    let [_, id] = video.url.match(/v=(.*)/)

    return map.set(id, video)
  }, new Map())

  let videoIds = Array.from(videoMap.keys())

  let {
    data: { items: youtubeSnippets },
  } = await youtube.get('videos', {
    params: { part: 'snippet,contentDetails', id: videoIds.join(',') },
  })

  videoMap.forEach((video, id) => {
    let snippet = youtubeSnippets.find(s => s.id === id)

    createNodeField({
      node: video,
      name: 'snippet',
      value: snippet,
    })
  })
}

module.exports = (...args) =>
  Promise.all([enrichPublicActivityVideosWithYouTubeSnippets(...args)])