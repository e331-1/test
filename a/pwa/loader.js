window.addEventListener('load', function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register("./pwa/sw.js", {scope: "./"})
            .then(function (registration) {
                    console.log("serviceWorker registed.");
            }).catch(function (error) {
                console.warn("serviceWorker error.", error);
            });
    }
});
