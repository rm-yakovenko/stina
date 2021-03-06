export const extractYoutubeVideoId = (url = '') => {
  if (url.includes('youtu.be')) {
    const idIndex = url.lastIndexOf('/');
    return url.substr(idIndex + 1, url.length);
  }
  const queryParamsIndex = url.indexOf('?');
  const searchParams = url.substring(queryParamsIndex + 1);
  const urlParams = new URLSearchParams(searchParams);
  return urlParams.get('v');
};

export const getVideoPreviewImg = (url) => {
  const id = extractYoutubeVideoId(url);
  return id && `https://img.youtube.com/vi/${id}/sddefault.jpg`;
};
