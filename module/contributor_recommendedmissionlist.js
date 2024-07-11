module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/rep/ugc/task/recommend/list`,
    {},
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
