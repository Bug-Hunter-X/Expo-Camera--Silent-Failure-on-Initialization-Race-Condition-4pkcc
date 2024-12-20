The solution involves using async/await to ensure the camera is fully initialized before attempting to access its features.  Error handling is also crucial to provide feedback if initialization fails.

```javascript
import * as React from 'react';
import { Camera, CameraType } from 'expo-camera';

async function App() {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(CameraType.back);
  const [cameraRef, setCameraRef] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View><Text>Requesting permissions...</Text></View>;
  }
  if (hasPermission === false) {
    return <View><Text>No access to camera</Text></View>;
  }

  const takePicture = async () => {
    if (cameraRef) {
      try {
        let photo = await cameraRef.takePictureAsync();
        console.log('Photo taken:', photo);
      } catch (error) {
        console.error('Error taking picture:', error);
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={(ref) => setCameraRef(ref)} >
          <Button title="Take Picture" onPress={takePicture} />
      </Camera>
    </View>
  );
}

export default App;
```