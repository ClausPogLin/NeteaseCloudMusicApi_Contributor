module.exports = (query, request) => {
  const data = {
    notes: query.notes,
    songId: query.songId,
    source: query.source,
    transName: query.transName,
    transLyricContent: query.transLyricContent,
    lyricContent: query.lyricContent,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/rep/ugc/song/update`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
