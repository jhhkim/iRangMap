// $(document).ready(function(){
//     $("#inputbtn").click(function(){
//         setList();
//     });
// });
// //400error /search?juso=부산시+동래구 이렇게 가야하는데
// //juso:$("#juso")는
// //http://localhost:8080/search?{"juso":{"0":{},"length":1}} 이렇게 보내지고 있음
// //juso:$("#juso").val(addr) 은 addr이 undefined
// //juso:$("#juso").val()은
// //http://localhost:8080/search?{"juso":"동래구"}로 보내짐
// //"juso="+$("#juso").val()는
// //http://localhost:8080/search?"juso=부산시 동래구"
// //http://localhost:8080/search?juso=부산시+동래구 라고 직접입력했을때도 목록과 마커 출력 없음 밑에 함수들도 뭔가 에러있음
// function selectStore(){
//     var param = {juso: $("#juso").val()}
//     $.ajax({type:'GET', url: '/search', dataType: 'json', contentType: 'application/json; charset=utf-8',data: JSON.stringify(param)})
//             .done(function(data){
//                 setList(data);
//             });
// }


// function setList(data){
//            $("#kidsmaplist").append(str);
//             //목록 출력
//            for(i=0; i<data[i].length, i++;){
//                var str = '<tr style = "cursor:pointer">'
//                         '<td>' + data[i].store + '<td>'
//                         '<td>' + data[i].addr + '<td>'
//                         '<td>' + data[i].category + '<td>'
//                         '<td><img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png" alt="marker img" class="showMarker"></td>'
//                         '</tr>';
//                         $("#kidsmaplist").append(str);
//            }
            
           
           
           

//         }
//document.write("<script src='b.js'></script>");


var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = {
    center: new kakao.maps.LatLng(35.179937855685, 129.07691415917), // 지도의 중심좌표(시청)
    level: 3 // 지도의 확대 레벨
};  
// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 
var bounds = new kakao.maps.LatLngBounds();


//검색한 뒤에 나오게하고싶었는데 마커가 떴다가 초기위치로 지도가 돌아감
// $("#inputbtn").click(function(){
//첫화면에 바로 떠있음
$("#kidsmaplist").ready(function(){
    setMarker(address);
});

//마커찍기
var geocoder = new kakao.maps.services.Geocoder();//service라이브러리 추가했는데 Geocoder인식안됨
//address배열에 직접 주소 입력하는 대신 검색결과로 나온 주소를 넣어주면 됨
var address=['부산시 강서구 범방동 1901-10',
'부산시 강서구 신호동 262-9',
'부산시 강서구 녹산동 97-5',
'부산시 강서구 명지동 3461-17',
'부산시 강서구 명지동 3365-7',
'부산시 강서구 명지동 3442-2',
'부산시 강서구 명지동 3238-15',
'부산시 강서구 대저2동 1060-2',
'부산시 강서구 명지동 3261-10',
'부산시 강서구 대저1동 1459-7',
'부산시 강서구 명지동 3363-3',
'부산시 강서구 명지동 3357-6',
'부산시 강서구 명지동 3395-4']

function setMarker(address){
    
    //for문에 넣어서 좌표로 모두 변환
    for(var i = 0; i<address.length; i++){
                
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
                

                bounds.extend(coords);
                } 
                map.setBounds(bounds);//좌표들 평균 낸 값으로 지도 중심 이동
            })
            }     
        }

// //마커찍기
// var geocoder = new kakao.maps.services.Geocoder();
// function setMarker(data){

//     //for문에 넣어서 좌표로 모두 변환
//     for(var i = 0; i<data[i].addr.length; i++){
                
//         // 주소로 좌표를 검색합니다
//         geocoder.addressSearch(data[i].addr, function(result, status) {
        
//             // 정상적으로 검색이 완료됐으면 
//             if (status === kakao.maps.services.Status.OK) {
        
//                 var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        
//                 // 결과값으로 받은 위치를 마커로 표시합니다
//                 var marker = new kakao.maps.Marker({
//                 map: map,
//                 position: coords
//                     });
        
                    

//                 bounds.extend(coords);
//                 } 
//             })
//             //마커 좌표 평균값이 지도 중간이 되게 함
//             map.setBounds(bounds);
//             }
//         }

//     function setList(data){
//         $("kidsmaplist").append(str);
//         setMarker(data[i].addr);
//         //setMarker(data);
//         for(i=0; i<data[i].length, i++;){
//         var str = '<tr style="cursor:pointer" onclick="selectStore()">'
//             '<td>' + data[i].store+ '</td>'
//             '<td>'+ data[i].addr+'</td>'
//             '<td>'+ data[i].category+'</td>'
//             '<td><img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png" alt="marker img" class="showMarker"></td>'
//         '</tr>';
//         $("kidsmaplist").append(str);
//             }
//         //class=showStore인 아이콘을 클릭하면 가게가 위치한 곳으로 지도 이동
//         $(".showStore").click(function(){
        
//         // 주소로 좌표를 검색합니다
//         geocoder.addressSearch(data[i].addr, function(result, status) {
    
//             // 정상적으로 검색이 완료됐으면 
//             if (status === kakao.maps.services.Status.OK) {
    
//                 var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    
//                 // 결과값으로 받은 위치를 마커로 표시합니다
//                 var marker = new kakao.maps.Marker({
//                     map: map,
//                     position: coords
//                 });
    
                
//                 // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
//                 map.setCenter(coords);
//             }
        
//     });
//         });
    
    
    
// };
//셀 클릭하면 해당가게가 있는 마커를 보여주는 함수

