module.exports = (query, request) => {
  const data = {
    songId: query.songId,
  }
  return request('POST', `https://music.163.com/weapi/rep/ugc/song/get`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
