function App() {
    this.init();
    this.el = document.getElementsByTagName('body')[0];

    //Sizzle('.site__page')[0].style.backgroundColor = 'red';

    // Detect when the user is navigating through their history (back/forward buttons)
    window.addEventListener('popstate', function() {
       // this.getNewPage(location.pathname);
    }.bind(this));
};

function Header() {
    this.el = document.getElementById('header');
};


proto = App.prototype;

proto.init = function () {
    this.header = new Header();
    //this.router = new Router();

    //this.header.hideHeader();

    this.portGridListen();

    this.navLink = document.getElementById('link');
    //this.navLink.addEventListener('click', this.onNavLinkClick.bind(this));

};

proto.onNavLinkClick = function(event) {
    event.preventDefault();
    this.getNewPage('page.html');
};

proto.portGridListen = function() {
    addEventListenerList(document.querySelectorAll('.port-grid__item'), 'mouseover', this.portGridChangeBg);
    addEventListenerList(document.querySelectorAll('.port-grid__item'), 'mouseout', this.portGridRevertBg);
};

proto.portGridChangeBg = function() {
    console.log(this);
    img_src = this.getElementsByTagName('img')[0].src;
    console.log(img_src);
    document.getElementsByTagName('body')[0].style.background = "url("+img_src+") repeat center center";
};

proto.portGridRevertBg = function() {
    document.getElementsByTagName('body')[0].style.background = "#161920";
}


proto.getNewPage = function(newURL) {
    var articleContainer = Sizzle('.article_container')[0];
    if(articleContainer != null) {
        articleContainer.removeChild(this);
    }
    // Create a new article container
    var articleContainer = document.createElement('div');
    articleContainer.setAttribute('class', 'article_container');

    // Request the page contents and append to article container
    this.requestPage(newURL, function(responseText) {
        articleContainer.appendChild(responseText);
        document.body.appendChild(articleContainer);
    });

    setTimeout(function() {

    articleContainer.setAttribute('class', 'article_container show');
    }, 300);

    // Update the URL
    this.router.allChange('page.html');
}

proto.requestPage = function(url, callback) {
    var req = new XMLHttpRequest();

    req.onload = function () {
        if (req.readyState === 4) {
            if (req.status === 200) {

                var fragment = document.createDocumentFragment();
                fragment.appendChild(document.createElement('body'));
                var body = fragment.querySelector('body');
                var body = document.getElementById('body');
                var parser=new DOMParser()
                var xmlDoc=parser.parseFromString(this.responseText,"text/html");
                tds = xmlDoc.getElementById("ajax");

                callback(tds);
            }
        }
    };
    req.open('get', url, true);
    req.send();
};

var callback = function(data) {
    return data;
};

function addEventListenerList (list, type, listener, useCapture) {
    var i = list.length;
    while (i--) {
        list[i].addEventListener(type, listener, useCapture);
    }
};

//
// Header Prototypes
//
proto = Header.prototype;

proto.hideHeader = function() {
    this.el.style.backgroundColor = 'green';
};

//
// Router Prototypes
//

function Router() {
    that = this;
    this.currentURL = location.pathname;

    //addEventListenerList(document.querySelectorAll('[data-internal]'), 'click', this.onClicked);
};

proto = Router.prototype;


proto.allChange = function(route) {
    if (route === this.currentURL) {
        return;
    }
    else {
        history.pushState(null, null, route);
    }
};

proto.onClicked = function(evt) {
    evt.preventDefault();
    console.log(evt.currentTarget.pathname);
    that.allChange(evt.currentTarget.pathname);
};


new App();
