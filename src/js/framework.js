
// GoToTarget

(function() {

    'use strict';
    
    const aside = document.getElementById('aside'),
          trigger = document.getElementsByClassName('js-navtrigger')[0];

	const scrollTo = function (target, speed) {
		let offset = -50;

		TweenLite.to(window, speed, {
			scrollTo: {
				y: target + offset,
				autoKill: false
			},
			ease: Power1.easeOut
		});
	};

	const speed_calculate = function (target) {
    	let base_speed  = 50,
    		page_offset = window.pageYOffset || document.documentElement.scrollTop,
        	offset_diff = Math.abs(target - page_offset),
        	speed = ((offset_diff * base_speed) / 1000)/100;

    	return speed;
	};

	var clickAction = function(e) {
	
	    const that = e.currentTarget;
	    let pause = 1000;
	    
	    if (window.innerWidth <= 1024) {
            pause = 300;
            
	    } else {
    	    document.body.classList.add('menu-hidden');
	    }
	    
	    aside.classList.remove('is-visible');
        trigger.classList.add('icon-navicon');
        trigger.classList.remove('icon-close');
        document.body.classList.remove('no-overflow');
	    
	    setTimeout(function() {

    	    let src = that.getAttribute('href'),
    	        window_pos = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
    
    	    const obj = document.getElementById( src.slice(1, src.length) );
    
    	    if (obj) {
    	        let offset = that.getAttribute('data-offset');
    
                if (!offset) {
                    offset = 0;
                }
                
                document.body.removeAttribute('style');
    	    
    	        let target = window_pos + obj.getBoundingClientRect().top - offset;
    	        scrollTo(target, speed_calculate(target));
    	    }
    	    
    
            
	    }, pause);

        
        if (window.e) {
            window.e.returnValue = false;
        }
        
	    e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
	};


	var btn = document.getElementsByClassName('js-goto');

    if (btn.length>0) {
    	for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', clickAction);
        }
    }

}).call(this);


// isMobile

(function() {
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
		document.getElementsByTagName('html')[0].className += ' mobile';
	} else {
	    document.getElementsByTagName('html')[0].className += ' desktop';
	}
}).call(this);


// Nav

(function() {
	
	const aside = document.getElementById('aside'),
          trigger = document.getElementsByClassName('js-navtrigger')[0];
    
    
    const action = function(e) {          
        aside.classList.toggle('is-visible');
        trigger.classList.toggle('icon-navicon');
        trigger.classList.toggle('icon-close');
        document.body.classList.toggle('no-overflow');

        e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
    }
    
    
    trigger.addEventListener('click', action);
	

}).call(this);


// showHideMenu

(function() {

    var windowPos = (window.pageYOffset || window.scrollY),
        body = document.body,
        showFull = document.getElementsByClassName('js-fullmenu')[0],
        aside = document.getElementById('aside'),
        status = 'desktop';

	function init() {

       windowPos = (window.pageYOffset || window.scrollY);
       
       
       
       if (window.innerWidth <= 1024) {
           if (status === 'desktop') {               
               body.classList.remove('menu-hidden');
               status = 'mobile';
           }
       } else {
           if (status === 'mobile') {
               status = 'desktop';
               
               
           }
           
           if (windowPos > 100) {
               body.classList.add('menu-hidden');
           } else {
               body.classList.remove('menu-hidden');           
           }
       }
	}

	window.addEventListener('scroll', init);
	
	showFull.addEventListener('click', function() {
	    window.removeEventListener('scroll', init, false);
    	body.classList.remove('menu-hidden');
    	
    	setTimeout(function() {
        	window.addEventListener('scroll', init);
    	}, 2000);
	});
	
}).call(this);



// showOnScroll

(function() {

    const el = document.getElementsByClassName('anim');
    
    const isInView = function(el) {
		let bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight  ;
		
		if ( el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) < bottomOfWindow ) {
			return true;
		}
	};
	
//	let lastScrollTop = 0;
	
	for (let i = 0; i < el.length; i++) {
	    
		if (isInView(el[i])) {
			el[i].className += ' anim--loaded';
		}
	}
   

	function init() {

        // Show in viewport
        for (let i = 0; i < el.length; i++) {
            let bottomOfObject = el[i].getBoundingClientRect().top + 200,
                bottomOfWindow = window.innerHeight;

            if ( bottomOfWindow > bottomOfObject ) {
                el[i].classList.add('anim--loaded');
			}
		}
	}

	window.addEventListener('scroll', init);
	
}).call(this);



// Tabs

(function() {

    var tabs = document.getElementsByClassName('js-tabs');

    var thisindex = function(elm) {
        var nodes = elm.parentNode.childNodes, node;    
        var i = 0, count = 0;
        while( (node = nodes.item(i++)) && node != elm ) {
            if( node.nodeType == 1 ) count++;
        }
        return count;
    }

    var getli = function(elm, index) {

        var itemsContent = elm.getElementsByClassName('js-contentItem'),
            itemsMenu = elm.parentNode.getElementsByClassName('js-menu')[0].getElementsByTagName('li'),
            activeContent = elm.getElementsByClassName('is-active')[0],
            activeMenu = elm.parentNode.getElementsByClassName('js-menu')[0].getElementsByClassName('is-active')[0];
            
        activeContent.classList.remove('is-active');
        activeMenu.classList.remove('is-active');

        for (var i = 0; i < itemsContent.length; i++) {
            if (i === index) {
                itemsContent[i].classList.add('is-active');
                itemsMenu[i].classList.add('is-active');
            }
        }
        
       
    }

    if (tabs.length > 0) {
        
        var showTab = function(e) {          
           // console.log(thisindex(this));

            var content = this.parentNode.parentNode.getElementsByClassName('js-content')[0];
            
//            console.log( getli( content, thisindex(this)) );
            
            getli( content, thisindex(this))

            e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
        }
    
        for (var i = 0; i < tabs.length; i ++) {
            
            var menu = tabs[i].getElementsByClassName('js-menu')[0],
                menu_li = menu.getElementsByTagName('li'),
                content = tabs[i].getElementsByClassName('js-content')[0],
                content_li = content.getElementsByClassName('js-contentItem');

            // Menu
            for (var j = 0; j < menu_li.length; j ++) {
                menu_li[j].addEventListener('click', showTab);
            }
            
            // Content
            
        }

        var action = function(e) {
        
           /*
 var target = this.getAttribute('data-tab');
        
            for (var i = 0; i < tabs_content_item.length; i ++) {
                tabs_content_item[i].classList.remove('is-active');
            }
            
            for (var i = 0; i < tab.length; i ++) {
                tab[i].classList.remove('is-active');
            }
            
            this.classList.add('is-active');
            
            document.getElementById(target).classList.add('is-active');
*/
        
            e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
        }
        
/*
        for (var i = 0; i < tab.length; i ++) {
            tab[i].addEventListener('click', action);
        }
*/
    }

}).call(this);
