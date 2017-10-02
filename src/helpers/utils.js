export function formatUserInfo(name, avatar, uid) {
  return {
    name,
    avatar,
    uid,
  };
}

export function formatResponse(text, { name, avatar, uid }) {
  return {
    text,
    name,
    avatar,
    uid,
    timestamp: Date.now(),
  };
}
