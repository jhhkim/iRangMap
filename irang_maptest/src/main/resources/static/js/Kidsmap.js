//출력안됨
$(document).ready(function(){
    $.getJSON("/search", function(result){
        var html = "";
        $.each(result, function(i, juso){
            html += "<tr>";
            html += "<td>" + field.id + "</td>";
            html += "<td>" + field.store + "</td>";
            html += "<td>" + field.addr + "</td>";
            html += "<td>" + field.category + "</td>";
            html += "<td><img src='https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png' alt='marker img' class='showMarker'></td>"
            html += "</tr>";
        });
        $("#kidsmaplist").append(html);
    });
});

// $(document).ready(function(){
//     $("#inputbtn").click(function(){
//         selectStore();
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

var geocoder = new kakao.maps.services.Geocoder();
function setList(data){
           $("#kidsmaplist").append(str);
            //목록 출력
           for(i=0; i<data[i].length, i++;){
               var str = '<tr style = "cursor:pointer">'
                        '<td>' + data[i].store + '<td>'
                        '<td>' + data[i].addr + '<td>'
                        '<td>' + data[i].category + '<td>'
                        '<td><img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png" alt="marker img" class="showMarker"></td>'
                        '</tr>';
                        $("#kidsmaplist").append(str);
           }
            
           
           
           

        }

//마커찍기
function setMarker(data){

    //for문에 넣어서 좌표로 모두 변환
    for(var i = 0; i<data[i].addr.length; i++){
                
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(data[i].addr, function(result, status) {
        
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
            })
            //마커 좌표 평균값이 지도 중간이 되게 함
            map.setBounds(bounds);
            }
        }

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
//셀 클릭하면 해당가게가 있는 마커를 보여주는 함수이고싶다
//var data={addr: addr};//뒤의 addr undefined
//ㅇㅇ시 ㅇㅇ구를 검색하면 json파일을 받아서 테이블을 만들고(setList()), 마커를 찍는다(setMarker())

//카카오맵

// var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
//     mapOption = {
//         center: new kakao.maps.LatLng(35.179937855685, 129.07691415917), // 지도의 중심좌표(시청)
//         level: 3 // 지도의 확대 레벨
//     };  

// // 지도를 생성합니다    
// var map = new kakao.maps.Map(mapContainer, mapOption); 
// var bounds = new kakao.maps.LatLngBounds();  

// 주소-좌표 변환 객체를 생성합니다
//var geocoder = new kakao.maps.services.Geocoder();
//화면에 출력되는 주소 가져오고싶음 postmapping도 postman에서 확인해보니 json 형식으로 보냄 거기서 addr만 가져오면?
//var address=[{"%"+addr+"%"}]
//var address=['부산시 연제구 거제동 242-23', '부산시 연제구 거제동 79-28', '부산시 연제구 연산동 708-9']



