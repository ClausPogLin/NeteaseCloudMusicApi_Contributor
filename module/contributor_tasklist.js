module.exports = (query, request) => {
  const data = {
    limit: query.limit,
    missionId: query.missionId,
    offset: query.offset,
    type: 3,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/rep/ugc/task/detail`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
