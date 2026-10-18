var customApi = window["customApi"] || (window["customApi"] = {});

// Toggles full-screen mode: enters it on the first click and exits it on the next click.
customApi.requestFullscreen = function (element) {
    if (window.document.fullscreenElement) {
        window.document.exitFullscreen();
    } else if (window.document.body.requestFullscreen) {
        window.document.body.requestFullscreen();
    }
}
