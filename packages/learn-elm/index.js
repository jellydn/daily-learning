import('./HomePage.elm').then(Elm => {
    var mountNode = document.getElementById('app');
    var app = Elm.BeginningElm.embed(mountNode);
});
