//셀 클릭하면 해당가게가 있는 마커를 보여주는 함수이고싶다
function showMarker(){
    //console.log({addr});//addr not defined
    //searchcontroller의 postmapping했던걸 가져오면? 그건 검색결과 전체인데 클릭한 값만 나오게하려면?
        $.ajax({
        type: 'GET',
        url: '/search',
        dataType: 'json',
        contentType : 'application/json; charset=utf-8',
        data : JSON.stringify(data)
    })
}
//카카오맵

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(35.179937855685, 129.07691415917), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();
//화면에 출력되는 주소 가져오고싶음
//var address=['여기에 주소를', '넣고'] for문에 넣어서 좌표로 모두 변환
for (var i = 0; i < address.length; i ++){

// 주소로 좌표를 검색합니다
geocoder.addressSearch(address[i], function(result, status) {

    // 정상적으로 검색이 완료됐으면 
     if (status === kakao.maps.services.Status.OK) {

        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: coords
        });

       
        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다 이러지말고 첫번째로 받은 결과값의 위치로 이동시키기
        map.setCenter(coords);
    } 
}) 
}


//마커 여러개 이벤트(갖다대면 커지고, 클릭하면 색 변함, 다른마커 클릭하면 클릭한 마커 색 변하고 이전마커는 원래 색으로)
// var MARKER_WIDTH = 33, // 기본, 클릭 마커의 너비
//     MARKER_HEIGHT = 36, // 기본, 클릭 마커의 높이
//     OFFSET_X = 12, // 기본, 클릭 마커의 기준 X좌표
//     OFFSET_Y = MARKER_HEIGHT, // 기본, 클릭 마커의 기준 Y좌표
//     OVER_MARKER_WIDTH = 40, // 오버 마커의 너비
//     OVER_MARKER_HEIGHT = 42, // 오버 마커의 높이
//     OVER_OFFSET_X = 13, // 오버 마커의 기준 X좌표
//     OVER_OFFSET_Y = OVER_MARKER_HEIGHT, // 오버 마커의 기준 Y좌표
//     SPRITE_MARKER_URL = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markers_sprites2.png', // 스프라이트 마커 이미지 URL
//     SPRITE_WIDTH = 126, // 스프라이트 이미지 너비
//     SPRITE_HEIGHT = 146, // 스프라이트 이미지 높이
//     SPRITE_GAP = 10; // 스프라이트 이미지에서 마커간 간격

// var markerSize = new kakao.maps.Size(MARKER_WIDTH, MARKER_HEIGHT), // 기본, 클릭 마커의 크기
//     markerOffset = new kakao.maps.Point(OFFSET_X, OFFSET_Y), // 기본, 클릭 마커의 기준좌표
//     overMarkerSize = new kakao.maps.Size(OVER_MARKER_WIDTH, OVER_MARKER_HEIGHT), // 오버 마커의 크기
//     overMarkerOffset = new kakao.maps.Point(OVER_OFFSET_X, OVER_OFFSET_Y), // 오버 마커의 기준 좌표
//     spriteImageSize = new kakao.maps.Size(SPRITE_WIDTH, SPRITE_HEIGHT); // 스프라이트 이미지의 크기

// var positions = [  // 마커의 위치
//         new kakao.maps.LatLng(33.44975, 126.56967),
//         new kakao.maps.LatLng(33.450579, 126.56956),
//         new kakao.maps.LatLng(33.4506468, 126.5707)
//     ],
//     selectedMarker = null; // 클릭한 마커를 담을 변수

// var mapContainer = document.getElementById('map'), // 지도를 표시할 div
//     mapOption = { 
//         center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
//         level: 3 // 지도의 확대 레벨
//     };

// var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// // 지도 위에 마커를 표시합니다
// for (var i = 0, len = positions.length; i < len; i++) {
//     var gapX = (MARKER_WIDTH + SPRITE_GAP), // 스프라이트 이미지에서 마커로 사용할 이미지 X좌표 간격 값
//         originY = (MARKER_HEIGHT + SPRITE_GAP) * i, // 스프라이트 이미지에서 기본, 클릭 마커로 사용할 Y좌표 값
//         overOriginY = (OVER_MARKER_HEIGHT + SPRITE_GAP) * i, // 스프라이트 이미지에서 오버 마커로 사용할 Y좌표 값
//         normalOrigin = new kakao.maps.Point(0, originY), // 스프라이트 이미지에서 기본 마커로 사용할 영역의 좌상단 좌표
//         clickOrigin = new kakao.maps.Point(gapX, originY), // 스프라이트 이미지에서 마우스오버 마커로 사용할 영역의 좌상단 좌표
//         overOrigin = new kakao.maps.Point(gapX * 2, overOriginY); // 스프라이트 이미지에서 클릭 마커로 사용할 영역의 좌상단 좌표
        
//     // 마커를 생성하고 지도위에 표시합니다
//     addMarker(positions[i], normalOrigin, overOrigin, clickOrigin);
// }

// // 마커를 생성하고 지도 위에 표시하고, 마커에 mouseover, mouseout, click 이벤트를 등록하는 함수입니다
// function addMarker(position, normalOrigin, overOrigin, clickOrigin) {

//     // 기본 마커이미지, 오버 마커이미지, 클릭 마커이미지를 생성합니다
//     var normalImage = createMarkerImage(markerSize, markerOffset, normalOrigin),
//         overImage = createMarkerImage(overMarkerSize, overMarkerOffset, overOrigin),
//         clickImage = createMarkerImage(markerSize, markerOffset, clickOrigin);
    
//     // 마커를 생성하고 이미지는 기본 마커 이미지를 사용합니다
//     var marker = new kakao.maps.Marker({
//         map: map,
//         position: position,
//         image: normalImage
//     });

//     // 마커 객체에 마커아이디와 마커의 기본 이미지를 추가합니다
//     marker.normalImage = normalImage;

//     // 마커에 mouseover 이벤트를 등록합니다
//     kakao.maps.event.addListener(marker, 'mouseover', function() {

//         // 클릭된 마커가 없고, mouseover된 마커가 클릭된 마커가 아니면
//         // 마커의 이미지를 오버 이미지로 변경합니다
//         if (!selectedMarker || selectedMarker !== marker) {
//             marker.setImage(overImage);
//         }
//     });

//     // 마커에 mouseout 이벤트를 등록합니다
//     kakao.maps.event.addListener(marker, 'mouseout', function() {

//         // 클릭된 마커가 없고, mouseout된 마커가 클릭된 마커가 아니면
//         // 마커의 이미지를 기본 이미지로 변경합니다
//         if (!selectedMarker || selectedMarker !== marker) {
//             marker.setImage(normalImage);
//         }
//     });

//     // 마커에 click 이벤트를 등록합니다
//     kakao.maps.event.addListener(marker, 'click', function() {

//         // 클릭된 마커가 없고, click 마커가 클릭된 마커가 아니면
//         // 마커의 이미지를 클릭 이미지로 변경합니다
//         if (!selectedMarker || selectedMarker !== marker) {

//             // 클릭된 마커 객체가 null이 아니면
//             // 클릭된 마커의 이미지를 기본 이미지로 변경하고
//             !!selectedMarker && selectedMarker.setImage(selectedMarker.normalImage);

//             // 현재 클릭된 마커의 이미지는 클릭 이미지로 변경합니다
//             marker.setImage(clickImage);
//         }

//         // 클릭된 마커를 현재 클릭된 마커 객체로 설정합니다
//         selectedMarker = marker;
//     });
// }

// // MakrerImage 객체를 생성하여 반환하는 함수입니다
// function createMarkerImage(markerSize, offset, spriteOrigin) {
//     var markerImage = new kakao.maps.MarkerImage(
//         SPRITE_MARKER_URL, // 스프라이트 마커 이미지 URL
//         markerSize, // 마커의 크기
//         {
//             offset: offset, // 마커 이미지에서의 기준 좌표
//             spriteOrigin: spriteOrigin, // 스트라이프 이미지 중 사용할 영역의 좌상단 좌표
//             spriteSize: spriteImageSize // 스프라이트 이미지의 크기
//         }
//     );
    
//     return markerImage;
// }