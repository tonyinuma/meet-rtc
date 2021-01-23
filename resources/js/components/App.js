import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import MediaHandler from '../MediaHandler';

function App() {

    const [hasMedia, setHasMedia] = useState(false);
    const [otherUserId, setOtherUserId] = useState(null);
    const mediaHandler = new MediaHandler()
    const myVideo = useRef();
    const userVideo = useRef();

    useEffect(() => {
        mediaHandler.getPermissions().
            then((stream) => {
                setHasMedia(true);
                try {
                    myVideo.srcObject = stream;
                } catch (e) {
                    myVideo.src = URL.createObjectURL(stream);
                }
                myVideo.play();
        })

    }, []);

    return (
        <div className="App">
            <div className="video-container">
                <video className="my-video" ref={myVideo}></video>
                <video className="user-video" ref={userVideo}></video>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
