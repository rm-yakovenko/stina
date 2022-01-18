import { useContext } from 'react';

import VideosProvider from './Provider';
import { VideosDispatchContext, VideosStateContext } from './Context';
import { getVideos, addVideo, deleteVideo } from './actions';

function useVideosState() {
  const context = useContext(VideosStateContext);
  if (context === undefined) {
    throw new Error('useVideosState must be used within a VideosProvider');
  }
  return context;
}

function useVideosDispatch() {
  const context = useContext(VideosDispatchContext);
  if (context === undefined) {
    throw new Error('useVideosDispatch must be used within a VideosProvider');
  }
  return context;
}

function useVideos() {
  return [useVideosState(), useVideosDispatch()];
}

export default useVideos;

export {
  VideosProvider,
  useVideosState,
  useVideosDispatch,
  getVideos,
  addVideo,
  deleteVideo,
};
