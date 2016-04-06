!function(e){e.flexslider=function(t,a){var n=e(t);n.vars=e.extend({},e.flexslider.defaults,a);var i,s=n.vars.namespace,r=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,o=("ontouchstart"in window||r||window.DocumentTouch&&document instanceof DocumentTouch)&&n.vars.touch,l="click touchend MSPointerUp",c="",d="vertical"===n.vars.direction,u=n.vars.reverse,v=n.vars.itemWidth>0,p="fade"===n.vars.animation,m=""!==n.vars.asNavFor,f={},g=!0;e.data(t,"flexslider",n),f={init:function(){n.animating=!1,n.currentSlide=parseInt(n.vars.startAt?n.vars.startAt:0,10),isNaN(n.currentSlide)&&(n.currentSlide=0),n.animatingTo=n.currentSlide,n.atEnd=0===n.currentSlide||n.currentSlide===n.last,n.containerSelector=n.vars.selector.substr(0,n.vars.selector.search(" ")),n.slides=e(n.vars.selector,n),n.container=e(n.containerSelector,n),n.count=n.slides.length,n.syncExists=e(n.vars.sync).length>0,"slide"===n.vars.animation&&(n.vars.animation="swing"),n.prop=d?"top":"marginLeft",n.args={},n.manualPause=!1,n.stopped=!1,n.started=!1,n.startTimeout=null,n.transitions=!n.vars.video&&!p&&n.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return n.pfx=t[a].replace("Perspective","").toLowerCase(),n.prop="-"+n.pfx+"-transform",!0;return!1}(),""!==n.vars.controlsContainer&&(n.controlsContainer=e(n.vars.controlsContainer).length>0&&e(n.vars.controlsContainer)),""!==n.vars.manualControls&&(n.manualControls=e(n.vars.manualControls).length>0&&e(n.vars.manualControls)),n.vars.randomize&&(n.slides.sort(function(){return Math.round(Math.random())-.5}),n.container.empty().append(n.slides)),n.doMath(),n.setup("init"),n.vars.controlNav&&f.controlNav.setup(),n.vars.directionNav&&f.directionNav.setup(),n.vars.keyboard&&(1===e(n.containerSelector).length||n.vars.multipleKeyboard)&&e(document).bind("keyup",function(e){var t=e.keyCode;if(!n.animating&&(39===t||37===t)){var a=39===t?n.getTarget("next"):37===t?n.getTarget("prev"):!1;n.flexAnimate(a,n.vars.pauseOnAction)}}),n.vars.mousewheel&&n.bind("mousewheel",function(e,t,a,i){e.preventDefault();var s=0>t?n.getTarget("next"):n.getTarget("prev");n.flexAnimate(s,n.vars.pauseOnAction)}),n.vars.pausePlay&&f.pausePlay.setup(),n.vars.slideshow&&n.vars.pauseInvisible&&f.pauseInvisible.init(),n.vars.slideshow&&(n.vars.pauseOnHover&&n.hover(function(){n.manualPlay||n.manualPause||n.pause()},function(){n.manualPause||n.manualPlay||n.stopped||n.play()}),n.vars.pauseInvisible&&f.pauseInvisible.isHidden()||(n.vars.initDelay>0?n.startTimeout=setTimeout(n.play,n.vars.initDelay):n.play())),m&&f.asNav.setup(),o&&n.vars.touch&&f.touch(),(!p||p&&n.vars.smoothHeight)&&e(window).bind("resize orientationchange focus",f.resize),n.find("img").attr("draggable","false"),setTimeout(function(){n.vars.start(n)},200)},asNav:{setup:function(){n.asNav=!0,n.animatingTo=Math.floor(n.currentSlide/n.move),n.currentItem=n.currentSlide,n.slides.removeClass(s+"active-slide").eq(n.currentItem).addClass(s+"active-slide"),r?(t._slider=n,n.slides.each(function(){var t=this;t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),t.addEventListener("MSGestureTap",function(t){t.preventDefault();var a=e(this),i=a.index();e(n.vars.asNavFor).data("flexslider").animating||a.hasClass("active")||(n.direction=n.currentItem<i?"next":"prev",n.flexAnimate(i,n.vars.pauseOnAction,!1,!0,!0))})})):n.slides.on(l,function(t){t.preventDefault();var a=e(this),i=a.index(),r=a.offset().left-e(n).scrollLeft();0>=r&&a.hasClass(s+"active-slide")?n.flexAnimate(n.getTarget("prev"),!0):e(n.vars.asNavFor).data("flexslider").animating||a.hasClass(s+"active-slide")||(n.direction=n.currentItem<i?"next":"prev",n.flexAnimate(i,n.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){n.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var t,a,i="thumbnails"===n.vars.controlNav?"control-thumbs":"control-paging",r=1;if(n.controlNavScaffold=e('<ol class="'+s+"control-nav "+s+i+'"></ol>'),n.pagingCount>1)for(var o=0;o<n.pagingCount;o++){if(a=n.slides.eq(o),t="thumbnails"===n.vars.controlNav?'<img src="'+n.slides.eq(o).attr("data-thumb")+'"/>':'<a><i class="mk-icon-circle-blank"></i></a>',"thumbnails"===n.vars.controlNav&&!0===n.vars.thumbCaptions){var d=a.attr("data-thumbcaption");""!=d&&void 0!=d&&(t+='<span class="'+s+'caption">'+d+"</span>")}n.controlNavScaffold.append("<li>"+t+"</li>"),r++}n.controlsContainer?e(n.controlsContainer).append(n.controlNavScaffold):n.append(n.controlNavScaffold),f.controlNav.set(),f.controlNav.active(),n.controlNavScaffold.delegate("a, img",l,function(t){if(t.preventDefault(),""===c||c===t.type){var a=e(this),i=n.controlNav.index(a);a.hasClass(s+"active")||(n.direction=i>n.currentSlide?"next":"prev",n.flexAnimate(i,n.vars.pauseOnAction))}""===c&&(c=t.type),f.setToClearWatchedEvent()})},setupManual:function(){n.controlNav=n.manualControls,f.controlNav.active(),n.controlNav.bind(l,function(t){if(t.preventDefault(),""===c||c===t.type){var a=e(this),i=n.controlNav.index(a);a.hasClass(s+"active")||(i>n.currentSlide?n.direction="next":n.direction="prev",n.flexAnimate(i,n.vars.pauseOnAction))}""===c&&(c=t.type),f.setToClearWatchedEvent()})},set:function(){var t="thumbnails"===n.vars.controlNav?"img":"a";n.controlNav=e("."+s+"control-nav li "+t,n.controlsContainer?n.controlsContainer:n)},active:function(){n.controlNav.removeClass(s+"active").eq(n.animatingTo).addClass(s+"active")},update:function(t,a){n.pagingCount>1&&"add"===t?n.controlNavScaffold.append(e("<li><a>"+n.count+"</a></li>")):1===n.pagingCount?n.controlNavScaffold.find("li").remove():n.controlNav.eq(a).closest("li").remove(),f.controlNav.set(),n.pagingCount>1&&n.pagingCount!==n.controlNav.length?n.update(a,t):f.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+s+'direction-nav"><li><a class="'+s+'prev" href="#">'+n.vars.directionNavArrowsLeft+n.vars.prevText+'</a></li><li><a class="'+s+'next" href="#">'+n.vars.directionNavArrowsRight+n.vars.nextText+"</a></li></ul>");n.controlsContainer?(e(n.controlsContainer).append(t),n.directionNav=e("."+s+"direction-nav li a",n.controlsContainer)):(n.append(t),n.directionNav=e("."+s+"direction-nav li a",n)),f.directionNav.update(),n.directionNav.bind(l,function(t){t.preventDefault();var a;(""===c||c===t.type)&&(a=e(this).hasClass(s+"next")?n.getTarget("next"):n.getTarget("prev"),n.flexAnimate(a,n.vars.pauseOnAction)),""===c&&(c=t.type),f.setToClearWatchedEvent()})},update:function(){var e=s+"disabled";1===n.pagingCount?n.directionNav.addClass(e).attr("tabindex","-1"):n.vars.animationLoop?n.directionNav.removeClass(e).removeAttr("tabindex"):0===n.animatingTo?n.directionNav.removeClass(e).filter("."+s+"prev").addClass(e).attr("tabindex","-1"):n.animatingTo===n.last?n.directionNav.removeClass(e).filter("."+s+"next").addClass(e).attr("tabindex","-1"):n.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=e('<div class="'+s+'pauseplay"><a></a></div>');n.controlsContainer?(n.controlsContainer.append(t),n.pausePlay=e("."+s+"pauseplay a",n.controlsContainer)):(n.append(t),n.pausePlay=e("."+s+"pauseplay a",n)),f.pausePlay.update(n.vars.slideshow?s+"pause":s+"play"),n.pausePlay.bind(l,function(t){t.preventDefault(),(""===c||c===t.type)&&(e(this).hasClass(s+"pause")?(n.manualPause=!0,n.manualPlay=!1,n.pause()):(n.manualPause=!1,n.manualPlay=!0,n.play())),""===c&&(c=t.type),f.setToClearWatchedEvent()})},update:function(e){"play"===e?n.pausePlay.removeClass(s+"pause").addClass(s+"play").html(n.vars.playText):n.pausePlay.removeClass(s+"play").addClass(s+"pause").html(n.vars.pauseText)}},touch:function(){function e(e){n.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(n.pause(),g=d?n.h:n.w,S=Number(new Date),y=e.touches[0].pageX,b=e.touches[0].pageY,f=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*g:(n.currentSlide+n.cloneOffset)*g,c=d?b:y,m=d?y:b,t.addEventListener("touchmove",a,!1),t.addEventListener("touchend",i,!1))}function a(e){y=e.touches[0].pageX,b=e.touches[0].pageY,h=d?c-b:c-y,x=d?Math.abs(h)<Math.abs(y-m):Math.abs(h)<Math.abs(b-m);var t=500;(!x||Number(new Date)-S>t)&&(e.preventDefault(),!p&&n.transitions&&(n.vars.animationLoop||(h/=0===n.currentSlide&&0>h||n.currentSlide===n.last&&h>0?Math.abs(h)/g+2:1),n.setProps(f+h,"setTouch")))}function i(e){if(t.removeEventListener("touchmove",a,!1),n.animatingTo===n.currentSlide&&!x&&null!==h){var s=u?-h:h,r=s>0?n.getTarget("next"):n.getTarget("prev");n.canAdvance(r)&&(Number(new Date)-S<550&&Math.abs(s)>50||Math.abs(s)>g/2)?n.flexAnimate(r,n.vars.pauseOnAction):p||n.flexAnimate(n.currentSlide,n.vars.pauseOnAction,!0)}t.removeEventListener("touchend",i,!1),c=null,m=null,h=null,f=null}function s(e){e.stopPropagation(),n.animating?e.preventDefault():(n.pause(),t._gesture.addPointer(e.pointerId),w=0,g=d?n.h:n.w,S=Number(new Date),f=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*g:(n.currentSlide+n.cloneOffset)*g)}function o(e){e.stopPropagation();var a=e.target._slider;if(a){var n=-e.translationX,i=-e.translationY;return w+=d?i:n,h=w,x=d?Math.abs(w)<Math.abs(-n):Math.abs(w)<Math.abs(-i),e.detail===e.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){t._gesture.stop()}):void((!x||Number(new Date)-S>500)&&(e.preventDefault(),!p&&a.transitions&&(a.vars.animationLoop||(h=w/(0===a.currentSlide&&0>w||a.currentSlide===a.last&&w>0?Math.abs(w)/g+2:1)),a.setProps(f+h,"setTouch"))))}}function l(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!x&&null!==h){var a=u?-h:h,n=a>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-S<550&&Math.abs(a)>50||Math.abs(a)>g/2)?t.flexAnimate(n,t.vars.pauseOnAction):p||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}c=null,m=null,h=null,f=null,w=0}}var c,m,f,g,h,S,x=!1,y=0,b=0,w=0;r?(t.style.msTouchAction="none",t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",s,!1),t._slider=n,t.addEventListener("MSGestureChange",o,!1),t.addEventListener("MSGestureEnd",l,!1)):t.addEventListener("touchstart",e,!1)},resize:function(){!n.animating&&n.is(":visible")&&(v||n.doMath(),p?f.smoothHeight():v?(n.slides.width(n.computedW),n.update(n.pagingCount),n.setProps()):d?(n.viewport.height(n.h),n.setProps(n.h,"setTotal")):(n.vars.smoothHeight&&f.smoothHeight(),n.newSlides.width(n.computedW),n.setProps(n.computedW,"setTotal")))},smoothHeight:function(e){if(!d||p){var t=p?n:n.viewport;e?t.animate({height:n.slides.eq(n.animatingTo).height()},e):t.height(n.slides.eq(n.animatingTo).height())}},sync:function(t){var a=e(n.vars.sync).data("flexslider"),i=n.animatingTo;switch(t){case"animate":a.flexAnimate(i,n.vars.pauseOnAction,!1,!0);break;case"play":a.playing||a.asNav||a.play();break;case"pause":a.pause()}},uniqueID:function(t){return t.find("[id]").each(function(){var t=e(this);t.attr("id",t.attr("id")+"_clone")}),t},pauseInvisible:{visProp:null,init:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)e[t]+"Hidden"in document&&(f.pauseInvisible.visProp=e[t]+"Hidden");if(f.pauseInvisible.visProp){var a=f.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(a,function(){f.pauseInvisible.isHidden()?n.startTimeout?clearTimeout(n.startTimeout):n.pause():n.started?n.play():n.vars.initDelay>0?setTimeout(n.play,n.vars.initDelay):n.play()})}},isHidden:function(){return document[f.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(i),i=setTimeout(function(){c=""},3e3)}},n.flexAnimate=function(t,a,i,r,l){if(n.vars.animationLoop||t===n.currentSlide||(n.direction=t>n.currentSlide?"next":"prev"),m&&1===n.pagingCount&&(n.direction=n.currentItem<t?"next":"prev"),!n.animating&&(n.canAdvance(t,l)||i)&&n.is(":visible")){if(m&&r){var c=e(n.vars.asNavFor).data("flexslider");if(n.atEnd=0===t||t===n.count-1,c.flexAnimate(t,!0,!1,!0,l),n.direction=n.currentItem<t?"next":"prev",c.direction=n.direction,Math.ceil((t+1)/n.visible)-1===n.currentSlide||0===t)return n.currentItem=t,n.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide"),!1;n.currentItem=t,n.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide"),t=Math.floor(t/n.visible)}if(n.animating=!0,n.animatingTo=t,a&&n.pause(),n.vars.before(n),n.syncExists&&!l&&f.sync("animate"),n.vars.controlNav&&f.controlNav.active(),v||n.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide"),n.atEnd=0===t||t===n.last,n.vars.directionNav&&f.directionNav.update(),t===n.last&&(n.vars.end(n),n.vars.animationLoop||n.pause()),p)o?(n.slides.eq(n.currentSlide).css({opacity:0,zIndex:1}),n.slides.eq(t).css({opacity:1,zIndex:2}),n.wrapup(x)):(n.slides.eq(n.currentSlide).css({zIndex:1}).animate({opacity:0},n.vars.animationSpeed,n.vars.easing),n.slides.eq(t).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing,n.wrapup));else{var g,h,S,x=d?n.slides.filter(":first").height():n.computedW;v?(g=n.vars.itemMargin,S=(n.itemW+g)*n.move*n.animatingTo,h=S>n.limit&&1!==n.visible?n.limit:S):h=0===n.currentSlide&&t===n.count-1&&n.vars.animationLoop&&"next"!==n.direction?u?(n.count+n.cloneOffset)*x:0:n.currentSlide===n.last&&0===t&&n.vars.animationLoop&&"prev"!==n.direction?u?0:(n.count+1)*x:u?(n.count-1-t+n.cloneOffset)*x:(t+n.cloneOffset)*x,n.setProps(h,"",n.vars.animationSpeed),n.transitions?(n.vars.animationLoop&&n.atEnd||(n.animating=!1,n.currentSlide=n.animatingTo),n.container.unbind("webkitTransitionEnd transitionend"),n.container.bind("webkitTransitionEnd transitionend",function(){n.wrapup(x)})):n.container.animate(n.args,n.vars.animationSpeed,n.vars.easing,function(){n.wrapup(x)})}n.vars.smoothHeight&&f.smoothHeight(n.vars.animationSpeed)}},n.wrapup=function(e){p||v||(0===n.currentSlide&&n.animatingTo===n.last&&n.vars.animationLoop?n.setProps(e,"jumpEnd"):n.currentSlide===n.last&&0===n.animatingTo&&n.vars.animationLoop&&n.setProps(e,"jumpStart")),n.animating=!1,n.currentSlide=n.animatingTo,n.vars.after(n)},n.animateSlides=function(){!n.animating&&g&&n.flexAnimate(n.getTarget("next"))},n.pause=function(){clearInterval(n.animatedSlides),n.animatedSlides=null,n.playing=!1,n.vars.pausePlay&&f.pausePlay.update("play"),n.syncExists&&f.sync("pause")},n.play=function(){n.playing&&clearInterval(n.animatedSlides),n.animatedSlides=n.animatedSlides||setInterval(n.animateSlides,n.vars.slideshowSpeed),n.started=n.playing=!0,n.vars.pausePlay&&f.pausePlay.update("pause"),n.syncExists&&f.sync("play")},n.stop=function(){n.pause(),n.stopped=!0},n.canAdvance=function(e,t){var a=m?n.pagingCount-1:n.last;return t?!0:m&&n.currentItem===n.count-1&&0===e&&"prev"===n.direction?!0:m&&0===n.currentItem&&e===n.pagingCount-1&&"next"!==n.direction?!1:e!==n.currentSlide||m?n.vars.animationLoop?!0:n.atEnd&&0===n.currentSlide&&e===a&&"next"!==n.direction?!1:n.atEnd&&n.currentSlide===a&&0===e&&"next"===n.direction?!1:!0:!1},n.getTarget=function(e){return n.direction=e,"next"===e?n.currentSlide===n.last?0:n.currentSlide+1:0===n.currentSlide?n.last:n.currentSlide-1},n.setProps=function(e,t,a){var i=function(){var a=e?e:(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo,i=function(){if(v)return"setTouch"===t?e:u&&n.animatingTo===n.last?0:u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:n.animatingTo===n.last?n.limit:a;switch(t){case"setTotal":return u?(n.count-1-n.currentSlide+n.cloneOffset)*e:(n.currentSlide+n.cloneOffset)*e;case"setTouch":return u?e:e;case"jumpEnd":return u?e:n.count*e;case"jumpStart":return u?n.count*e:e;default:return e}}();return-1*i+"px"}();n.transitions&&(i=d?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",a=void 0!==a?a/1e3+"s":"0s",n.container.css("-"+n.pfx+"-transition-duration",a),n.container.css("transition-duration",a)),n.args[n.prop]=i,(n.transitions||void 0===a)&&n.container.css(n.args),n.container.css("transform",i)},n.setup=function(t){if(p)n.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===t&&(o?n.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+n.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(n.currentSlide).css({opacity:1,zIndex:2}):n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing)),n.vars.smoothHeight&&f.smoothHeight();else{var a,i;"init"===t&&(n.viewport=e('<div class="'+s+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(n).append(n.container),n.cloneCount=0,n.cloneOffset=0,u&&(i=e.makeArray(n.slides).reverse(),n.slides=e(i),n.container.empty().append(n.slides))),n.vars.animationLoop&&!v&&(n.cloneCount=2,n.cloneOffset=1,"init"!==t&&n.container.find(".clone").remove(),n.container.append(n.slides.first().clone().addClass("clone").attr("aria-hidden","true")).prepend(n.slides.last().clone().addClass("clone").attr("aria-hidden","true")),f.uniqueID(n.slides.first().clone().addClass("clone")).appendTo(n.container),f.uniqueID(n.slides.last().clone().addClass("clone")).prependTo(n.container)),n.newSlides=e(n.vars.selector,n),a=u?n.count-1-n.currentSlide+n.cloneOffset:n.currentSlide+n.cloneOffset,d&&!v?(n.container.height(200*(n.count+n.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){n.newSlides.css({display:"block"}),n.doMath(),n.viewport.height(n.h),n.setProps(a*n.h,"init")},"init"===t?100:0)):(n.container.width(200*(n.count+n.cloneCount)+"%"),n.setProps(a*n.computedW,"init"),setTimeout(function(){n.doMath(),n.newSlides.css({width:n.computedW,"float":"left",display:"block"}),n.vars.smoothHeight&&f.smoothHeight()},"init"===t?100:0))}v||n.slides.removeClass(s+"active-slide").eq(n.currentSlide).addClass(s+"active-slide"),n.vars.init(n)},n.doMath=function(){var e=n.slides.first(),t=n.vars.itemMargin,a=n.vars.minItems,i=n.vars.maxItems;n.w=void 0===n.viewport?n.width():n.viewport.width(),n.h=e.height(),n.boxPadding=e.outerWidth()-e.width(),v?(n.itemT=n.vars.itemWidth+t,n.minW=a?a*n.itemT:n.w,n.maxW=i?i*n.itemT-t:n.w,n.itemW=n.minW>n.w?(n.w-t*(a-1))/a:n.maxW<n.w?(n.w-t*(i-1))/i:n.vars.itemWidth>n.w?n.w:n.vars.itemWidth,n.visible=Math.floor(n.w/n.itemW),n.move=n.vars.move>0&&n.vars.move<n.visible?n.vars.move:n.visible,n.pagingCount=Math.ceil((n.count-n.visible)/n.move+1),n.last=n.pagingCount-1,n.limit=1===n.pagingCount?0:n.vars.itemWidth>n.w?n.itemW*(n.count-1)+t*(n.count-1):(n.itemW+t)*n.count-n.w-t):(n.itemW=n.w,n.pagingCount=n.count,n.last=n.count-1),n.computedW=n.itemW-n.boxPadding},n.update=function(e,t){n.doMath(),v||(e<n.currentSlide?n.currentSlide+=1:e<=n.currentSlide&&0!==e&&(n.currentSlide-=1),n.animatingTo=n.currentSlide),n.vars.controlNav&&!n.manualControls&&("add"===t&&!v||n.pagingCount>n.controlNav.length?f.controlNav.update("add"):("remove"===t&&!v||n.pagingCount<n.controlNav.length)&&(v&&n.currentSlide>n.last&&(n.currentSlide-=1,n.animatingTo-=1),f.controlNav.update("remove",n.last))),n.vars.directionNav&&f.directionNav.update()},n.addSlide=function(t,a){var i=e(t);n.count+=1,n.last=n.count-1,d&&u?void 0!==a?n.slides.eq(n.count-a).after(i):n.container.prepend(i):void 0!==a?n.slides.eq(a).before(i):n.container.append(i),n.update(a,"add"),n.slides=e(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.added(n)},n.removeSlide=function(t){var a=isNaN(t)?n.slides.index(e(t)):t;n.count-=1,n.last=n.count-1,isNaN(t)?e(t,n.slides).remove():d&&u?n.slides.eq(n.last).remove():n.slides.eq(t).remove(),n.doMath(),n.update(a,"remove"),n.slides=e(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.removed(n)},f.init()},e(window).blur(function(e){focused=!1}).focus(function(e){focused=!0}),e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!0,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",directionNavArrowsLeft:'<i class="mk-jupiter-icon-arrow-left"></i>',directionNavArrowsRight:'<i class="mk-jupiter-icon-arrow-right"></i>',keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},e.fn.flexslider=function(t){if(void 0===t&&(t={}),"object"==typeof t)return this.each(function(){var a=e(this),n=t.selector?t.selector:".slides > li",i=a.find(n);1===i.length&&t.allowOneSlide===!0||0===i.length?(i.fadeIn(400),t.start&&t.start(a)):void 0===a.data("flexslider")&&new e.flexslider(this,t)});var a=e(this).data("flexslider");switch(t){case"play":a.play();break;case"pause":a.pause();break;case"stop":a.stop();break;case"next":a.flexAnimate(a.getTarget("next"),!0);break;case"prev":case"previous":a.flexAnimate(a.getTarget("prev"),!0);break;default:"number"==typeof t&&a.flexAnimate(t,!0)}}}(jQuery);