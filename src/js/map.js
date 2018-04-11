const loadGoogleMapsApi = require('load-google-maps-api');

(function() {
    
    const obj = document.getElementsByClassName('js-map')[0];
    let mapenable = false, int;

    const initMap = function() {
        loadGoogleMapsApi({
            key: 'AIzaSyDzv4gozpcF9CjrI6OWHpLavj2hTLfH4IY'
            }).then(function (googleMaps) {
        
            var mapStyle = [
            {
                'featureType': 'all',
                'elementType': 'all',
                'stylers': [
                    {
                        'visibility': 'on'
                    }
                ]
            },
            {
                'featureType': 'all',
                'elementType': 'labels',
                'stylers': [
                    {
                        'visibility': 'on'
                    }
                ]
            },
            {
                'featureType': 'administrative.country',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'visibility': 'on'
                    }
                ]
            },
            {
                'featureType': 'administrative.country',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                'featureType': 'landscape',
                'elementType': 'all',
                'stylers': [
                    {
                        'color': '#ffffff'
                    }
                ]
            },
            {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                'featureType': 'poi',
                'elementType': 'labels.icon',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                'featureType': 'road',
                'elementType': 'all',
                'stylers': [
                    {
                        'saturation': -100
                    },
                    {
                        'lightness': 45
                    },
                    {
                        'color': '#c0ccd3'
                    }
                ]
            },
            {
                'featureType': 'road',
                'elementType': 'labels',
                'stylers': [
                    {
                        'color': '#386386'
                    }
                ]
            },
            {
                'featureType': 'road',
                'elementType': 'labels.text',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                'featureType': 'road',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'visibility': 'on'
                    }
                ]
            },
            {
                'featureType': 'road.arterial',
                'elementType': 'all',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                'featureType': 'road.local',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'visibility': 'on'
                    },
                    {
                        "weight": "0.01"
                    }
                ]
            },
            
            {
                'featureType': 'transit',
                'elementType': 'all',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                'featureType': 'water',
                'elementType': 'all',
                'stylers': [
                    {
                        'color': '#bee3e9'
                    },
                    {
                        'visibility': 'on'
                    }
                ]
            },
            {
                'featureType': 'water',
                'elementType': 'labels',
                'stylers': [
                    {
                        'visibility': 'simplified'
                    }
                ]
            },
            {
                'featureType': 'water',
                'elementType': 'labels.text',
                'stylers': [
                    {
                        'visibility': 'on'
                    }
                ]
            },
            {
                'featureType': 'water',
                'elementType': 'labels.icon',
                'stylers': [
                    {
                        'visibility': 'on'
                    }
                ]
            }];
            
            const el = document.querySelector('.js-map');
            let lat = Number(el.getAttribute('data-lat')),
                lng = Number(el.getAttribute('data-lng'));
        
            var map = new googleMaps.Map(el, {
                center: {
                    lat: lat,
                    lng: lng
                },
                styles: mapStyle,
                zoom: 16
            })
            
            var image = {
                url: 'http://www.marpress.pl/wp-content/uploads/2018/03/icobud.png',
                scaledSize: new google.maps.Size(40, 40), // scaled size
                origin: new google.maps.Point(0,0), // origin
                anchor: new google.maps.Point(50, 20) // anchor
            }
        
            var beachMarker = new google.maps.Marker({
                position: {lat: lat, lng: lng},
                animation: google.maps.Animation.DROP,
                map: map,
                icon: image
            });
        
        }).catch(function (error) {
            console.error(error)
        })
    };

    const init = function() {
    
        // Fire when show in viewport
        
        clearInterval(int); // for better performance
    
        int = setInterval(function() {
            let bottomOfObject = obj.getBoundingClientRect().top + 200,
            bottomOfWindow = window.innerHeight;
    
            if ( bottomOfWindow > bottomOfObject ) {
                if (mapenable === false) {
                    initMap();
                    console.log('fire map');
                    mapenable = true;
                }
        	}

        }, 50);        
    }
    
    window.addEventListener('scroll', init);
    
}).call(this);


