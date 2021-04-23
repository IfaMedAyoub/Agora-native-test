import React from 'react';
import AgoraUIKIT from 'agora-rn-uikit';


function App (){

  let rtcProps ={
    appID : '57ddba7bc5034e78bfc7eacd0cf65649',
  }

  return <AgoraUIKIT rtcProps={rtcProps} />
}


export default App;