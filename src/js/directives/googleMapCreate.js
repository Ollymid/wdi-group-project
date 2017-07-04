/* global google */

angular
.module('wildside')
.directive('googleMapCreate', googleMapCreate);

function googleMapCreate() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="map">GOOGLE MAP HERE</div>',
    scope: {
      center: '=',
      path: '='
    },
    link(scope, element) {

      let map = null;
      // let marker = null;
      let poly = null;

      scope.$watch('center', initMap);


      function initMap(center) {
        if (!center) return false;
        map = new google.maps.Map(element[0], {
          zoom: 14,
          center: center
        });

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };


            map.setCenter(pos);
          });
        }

        const array = [];

        poly = new google.maps.Polyline({
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        poly.setMap(map);




        map.addListener('click', (e) => {
          const position = (e.latLng.toJSON());
          array.push(position);
          poly.setPath(array);


          scope.path.push(position);
          scope.$apply();

          new google.maps.Marker({
            position,
            map


          });
        });
      }


    }
  };
}