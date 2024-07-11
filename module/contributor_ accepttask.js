module.exports = (query, request) => {
  const data = {
    missionId: query.missionId,
    resourceId: query.resourceId,
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
