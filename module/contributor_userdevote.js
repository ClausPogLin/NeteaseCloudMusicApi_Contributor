module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/rep/ugc/user/devote`,
    {},
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
