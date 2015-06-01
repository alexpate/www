function App() {
    this.init();
};

proto = App.prototype;

proto.init = function () {
    this.portGridListen();
};

proto.portGridListen = function() {
    addEventListenerList(document.querySelectorAll('.port-grid__item'), 'mouseover', this.portGridChangeBg);
    addEventListenerList(document.querySelectorAll('.port-grid__item'), 'mouseout', this.portGridRevertBg);
};

proto.portGridChangeBg = function() {
    img_src = this.getElementsByTagName('img')[0].src;
    document.getElementsByTagName('body')[0].style.background = "url("+img_src+") repeat center center";
};

proto.portGridRevertBg = function() {
    document.getElementsByTagName('body')[0].style.background = "#161920";
}

function addEventListenerList (list, type, listener, useCapture) {
    var i = list.length;
    while (i--) {
        list[i].addEventListener(type, listener, useCapture);
    }
};

new App();
