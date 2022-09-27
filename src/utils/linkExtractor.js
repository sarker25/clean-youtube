const extractLink = (url) => {
  if (url.length === 34) {
    return url;
  } else if (url.length > 34) {
    if (url.includes("list=")) {
      let id = url.split("list=")[1];
      if (id.length === 34) {
        return id;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else if (url.length < 34) {
    return false;
  }
};
export default extractLink;
