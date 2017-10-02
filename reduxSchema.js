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
    isFetching,
    error,
    debate: {
      debateId
      topic,
      startTime,
      EndTime,
      responseCount,
    }
  },

  responses: {
    isFetching,
    error,
    [debateid]: {
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
