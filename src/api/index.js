import axios from "axios";
const KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const getplaylistItems = async (playlistId, pagetoken = "", result = []) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=id,contentDetails,snippet,status&maxResults=50&pageToken=${pagetoken}&playlistId=${playlistId}&key=${KEY}`;
  const { data } = await axios.get(URL);
  result = [...result, ...data.items];
  if (data.nextPageToken) {
    result = getplaylistItems(playlistId, data.nextPageToken, result);
  }

  return result;
};

const getPlaylistByid = async (playlistId) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=id%2CcontentDetails%2Csnippet%2Cstatus&id=${playlistId}&key=${KEY}`;
  // playlsit details
  const { data } = await axios.get(URL);
  const {
    publishedAt,
    channelId,
    title,
    description,
    channelTitle,
    thumbnails: { standard },
  } = data.items[0].snippet;

  // playlist items details
  let result = await getplaylistItems(playlistId);
  result = result.map((item) => {
    const {
      contentDetails: { videoId },
    } = item;
    const {
      title,
      description,
      thumbnails: {
        medium: { url },
      },
      channelTitle,
    } = item.snippet;
    return {
      id: videoId,
      title,
      description,
      thumbnail: url,
      itemChannelTitle: channelTitle,
      notes: "",
    };
  });
  return {
    id: playlistId,
    title,
    description,
    publishedAt,
    channelId,
    channelTitle,
    thumbnail: standard,
    items: result,
  };
};

export default getPlaylistByid;
