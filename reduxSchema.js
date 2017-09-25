{
  users: {
    isAuthed,
    isFetching,
    error,
    authedId
    [uid]: {
      info : {
        name,
        uid,
        avatar
      }
    }
  },
  debate: {
    debateid,
    topic,
    startTime
  },
  responses: {
    isFetching,
    error,
    [responseid]: {
      lastUpdated,
      info: {
        avatar,
        responseid,
        name,
        text,
        timestamp,
        uid
      }
    }
  },
  likeCount: {
    [responseid]: 0
  },
  usersLikes: {
    [responseid]: true
  },
  feed: {
    isFetching,
    error,
    newResponsesAvailable,
    responsesToAdd: [responseid, responseid],
    responseIds: [responseid, responseid],
  },
  listeners: {
    [listenerId]: true
  }
}
