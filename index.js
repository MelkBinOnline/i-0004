
        var player;
        var playersPlayingTmp = [];
        var isInitialized = false;

        function loadTour()
        {
            if(isInitialized)
                return;

            isInitialized = true;

            var beginFunc = function(event){
                if(event.name == 'begin')
                {
                    var camera = event.data.source.get('camera');
                    if(camera && camera.get('initialSequence') && camera.get('initialSequence').get('movements').length > 0)
                        return;
                }

                player.unbindOnObjectsOf('PanoramaPlayListItem', 'begin', beginFunc, player, true);
                player.unbind('stateChange', beginFunc, player, true);
                window.parent.postMessage("tourLoaded", '*');

                disposePreloader();

                onVirtualTourLoaded();
            };

            var settings = new TDV.PlayerSettings();
            
            settings.set(TDV.PlayerSettings.CONTAINER, document.getElementById('viewer'));
            settings.set(TDV.PlayerSettings.SCRIPT_URL, 'script.js');
            settings.set(TDV.PlayerSettings.FLASH_EXPRESS_INSTALLER_URL, 'lib/ExpressInstall.swf');
            settings.set(TDV.PlayerSettings.FLASH_AUDIO_PLAYER_URL, 'lib/AudioPlayer.swf');
            settings.set(TDV.PlayerSettings.FLASH_PANORAMA_PLAYER_URL, 'lib/PanoramaRenderer.swf');
            settings.set(TDV.PlayerSettings.THREE_JS_WEBGL_URL, 'lib/ThreeWebGL.js');
            settings.set(TDV.PlayerSettings.WEBVR_POLYFILL_URL, 'lib/WebVRPolyfill.js');
            settings.set(TDV.PlayerSettings.HLS_URL, 'lib/Hls.js');
            window.tdvplayer = player = TDV.PlayerAPI.create(settings);
            player.bind('stateChange', beginFunc, player, true);
            player.bindOnObjectsOf('PanoramaPlayListItem', 'begin', beginFunc, player, true);
            player.bindOnObject('rootPlayer', 'start', function(e){
                var queryDict = {}; location.search.substr(1).split("&").forEach(function(item) {var k = item.split("=")[0], v = decodeURIComponent(item.split("=")[1]);queryDict[k] = v});
                if("media-index" in queryDict){
                    setMediaByIndex(parseInt(queryDict["media-index"]) - 1);
                }
                else if("media-name" in queryDict){
                    setMediaByName(queryDict["media-name"]);
                }

                player.getById('rootPlayer').bind('tourEnded', function(){
                    onVirtualTourEnded();
                }, player, true);
            }, player, false);

            /* Listen messages */
            window.addEventListener('message', function (e) {
                //Listen to messages for make actions to player in the format function:param1,param2
                var action = e.data;
                if (action == 'pauseTour' || action == 'resumeTour') {
                    this[action].apply(this);
                }
            });
        }

        function pauseTour()
        {
            var playLists = player.getByClassName('PlayList');
            for(var i = 0, count = playLists.length; i<count; i++)
            {
                var playList = playLists[i];
                var index = playList.get('selectedIndex');
                if(index != -1)
                {
                    var item = playList.get('items')[index];
                    var itemPlayer = item.get('player');
                    if(itemPlayer && itemPlayer.pause)
                    {
                        playersPlayingTmp.push(itemPlayer);
                        itemPlayer.pause();
                    }
                }
            }

            player.getById('pauseGlobalAudios')();
        }

        function resumeTour()
        {
            while(playersPlayingTmp.length)
            {
                var viewer = playersPlayingTmp.pop();
                viewer.play();
            }

            player.getById('resumeGlobalAudios')();
        }

        function onVirtualTourLoaded()
        {

        }

        function onVirtualTourEnded()
        {

        }

        function setMediaByIndex(index)
        {
            if(window.tdvplayer !== undefined) {
                var rootPlayer = window.tdvplayer.getById('rootPlayer');
                rootPlayer.setMainMediaByIndex(index);
            }
        }

        function setMediaByName(name)
        {
            if(window.tdvplayer !== undefined) {
                var rootPlayer = window.tdvplayer.getById('rootPlayer');
                rootPlayer.setMainMediaByName(name);
            }
        }

        function showPreloader()
        {
            var preloadContainer = document.getElementById('preloadContainer');
            preloadContainer.style.opacity = 1;
        }

        function disposePreloader()
        {
            var transitionEnd = transitionEndEventName();
            var preloadContainer = document.getElementById('preloadContainer');

            

            var transitionEndName = transitionEndEventName();
            if(transitionEndName)
            {
                preloadContainer.addEventListener(transitionEnd, hide, false);

                preloadContainer.style.opacity = 0;
            }
            else
            {
                hide();
            }

            function hide()
            {
                preloadContainer.style.visibility = 'hidden';
                preloadContainer.style.display = 'none';
            }

            function transitionEndEventName () {
                var i,
                        undefined,
                        el = document.createElement('div'),
                        transitions = {
                            'transition':'transitionend',
                            'OTransition':'otransitionend',
                            'MozTransition':'transitionend',
                            'WebkitTransition':'webkitTransitionEnd'
                        };

                for (i in transitions) {
                    if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
                        return transitions[i];
                    }
                }

                return undefined;
            }
        }

        function onBodyClick(){
            document.body.removeEventListener("click", onBodyClick);
            document.body.removeEventListener("touchend", onBodyClick);
            loadTour();
        }

        function onLoad() {
            if (isOVRWeb()){
                showPreloader();
                loadTour();
                return;
            }

            showPreloader();
loadTour()
        }

        function playVideo(video) {
            function isSafariDesktopV11orGreater() {
                return /^((?!chrome|android|crios|ipad|iphone).)*safari/i.test(navigator.userAgent) && parseFloat(/Version\/([0-9]+\.[0-9]+)/i.exec(navigator.userAgent)[1]) >= 11;
            }

            function detectUserAction() {
                var onVideoClick = function(e) {
                    if(video.paused) {
                        video.play();
                    }
                    video.muted = false;
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    video.removeEventListener('click', onVideoClick);
                    video.removeEventListener('touchend', onVideoClick);
                };
                video.addEventListener("click", onVideoClick);
                video.addEventListener("touchend", onVideoClick);
            }

            if (isSafariDesktopV11orGreater()) {
                video.muted = true;
                video.play();
            } else {
                var canPlay = true;
                var promise = video.play();
                if (promise) {
                    promise.catch(function() {
                        video.muted = true;
                        video.play();
                        detectUserAction();
                    });
                } else {
                    canPlay = false;
                }

                if (!canPlay || video.muted) {
                    detectUserAction();
                }
            }
        }

        function isOVRWeb(){
            return window.location.hash.substring(1).split('&').indexOf('ovrweb') > -1;
        }