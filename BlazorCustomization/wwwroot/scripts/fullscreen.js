var customApi = window["customApi"] || (window["customApi"] = {});

customApi.requestFullscreen = function (element) {
    if (window.document.body.requestFullscreen) {
        window.document.body.requestFullscreen();
    }
}