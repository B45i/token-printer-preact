import './style';
import App from './app';

export default App;

function preventZoom(e) {
    e.preventDefault();
    document.body.style.zoom = 0.99;
}

document.addEventListener('gesturestart', preventZoom);
document.addEventListener('gesturechange', preventZoom);
document.addEventListener('gestureend', preventZoom);
