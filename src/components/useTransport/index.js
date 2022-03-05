import { useContext } from 'react';

import TransportProvider from './Provider';
import { TransportDispatchContext, TransportStateContext } from './Context';
import {
  getLocalTransport,
  addLocalTransport,
  editLocalTransport,
  deleteLocalTransport,
  getHowToGetTransport,
  addHowToGetTransport,
  deleteHowToGetTransport,
  editHowToGetTransport,
} from './actions';

function useTransportState() {
  const context = useContext(TransportStateContext);
  if (context === undefined) {
    throw new Error(
      'useTransportState must be used within a TransportProvider',
    );
  }
  return context;
}

function useTransportDispatch() {
  const context = useContext(TransportDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useTransportDispatch must be used within a TransportProvider',
    );
  }
  return context;
}

function useTransport() {
  return [useTransportState(), useTransportDispatch()];
}

export default useTransport;

export {
  TransportProvider,
  useTransportState,
  useTransportDispatch,
  getLocalTransport,
  addLocalTransport,
  editLocalTransport,
  deleteLocalTransport,
  getHowToGetTransport,
  addHowToGetTransport,
  deleteHowToGetTransport,
  editHowToGetTransport,
};
