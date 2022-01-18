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

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = {
    center: new kakao.maps.LatLng(35.179937855685, 129.07691415917), // 지도의 중심좌표(시청)
    level: 3 // 지도의 확대 레벨
};  
// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 
var bounds = new kakao.maps.LatLngBounds();


$("#kidsmaplist").ready(function(){
    setMarker();
});

//마커찍기
//주소-좌표 변환 객체 생성
var geocoder = new kakao.maps.services.Geocoder();
//service라이브러리 추가했는데 Geocoder인식안됨(&libraries=services 붙어있는 링크만 apikey값넣어서 스크립트src에 넣고 나머지 삭제하니까 해결)

//검색결과로 나온 주소들 배열에 넣는 함수
var address = [];
function getAddress(){
    
    var rows = document.getElementById("kidsmaplist").getElementsByTagName("tr");//tbody행 개수 구하기
    for (i = 0; i < rows.length; i++) {
        var adr = document.getElementById("kidsmaplist").getElementsByTagName("tr")[i].getElementsByTagName("td")[1].innerHTML;//addr이 있는 두번째 열 값 가져옴
        address.push(adr);//address 배열에 넣음
    }
}

//address배열에 직접 주소 입력하는 대신 검색결과로 나온 주소를 넣어주면 됨
// var address=['부산시 강서구 범방동 1901-10',
// '부산시 강서구 신호동 262-9',
// '부산시 강서구 녹산동 97-5',
// '부산시 강서구 명지동 3461-17',
// '부산시 강서구 명지동 3365-7',
// '부산시 강서구 명지동 3442-2',
// '부산시 강서구 명지동 3238-15',
// '부산시 강서구 대저2동 1060-2',
// '부산시 강서구 명지동 3261-10',
// '부산시 강서구 대저1동 1459-7',
// '부산시 강서구 명지동 3363-3',
// '부산시 강서구 명지동 3357-6',
// '부산시 강서구 명지동 3395-4']

function setMarker(){
    getAddress();
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

//위치보기 아이콘 클릭하면 지도에 마커 띄워주는 함수
//클릭한 아이콘이 있는 행의 인덱스 번호 띄워줌
// function showMarker(){
// $('#kidsmaplist').find('tr').click( function(){
//     //($(this).index());
//     alert('You clicked index '+ ($(this).index()) );
//     });
// }


var marker;
var counterVal=0;
function showMarker(){ 
    $('#kidsmaplist').find('tr').click(function(){
        //var tr = $(this);
        var td = $(this).children();
        var myPick = td.eq(1).text();//위치보기 아이콘 클릭하면 해당 행의 2번째열(주소) 내용 받음
        
        geocoder.addressSearch(myPick, function(result, status){
            //정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK){
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                // 결과값으로 받은 위치를 새 마커로 표시합니다(기존 마커 위에 얹음)
                // 마커 이미지의 이미지 주소입니다
                var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
                // 마커 이미지의 이미지 크기 입니다
                var imageSize = new kakao.maps.Size(28.36, 41.36);//original size(24,35)
                // 마커 이미지를 생성합니다    
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
                
                
                //markerImg클래스 클릭횟수 카운트 0=i 이면 생성 초과면 marker.setPosition(coords);
                if (counterVal==0){
                    counterVal++;
                    alert(counterVal);
                //새 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                map: map,
                position: coords,
                image: markerImage
                
                    });
                } else { //counterVal이 1이상이면 여기로 바로 빠짐
                    marker.setPosition(coords);//error undefined
                }
                 //레벨도 조정
                // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
                var bounds = new kakao.maps.LatLngBounds();
                // LatLngBounds 객체에 좌표를 추가한다
                bounds.extend(coords);
                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다(레벨변화로 줌은 안일어났음)
                //map.setCenter(coords);
                // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
                // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
                map.setBounds(bounds);
                
            } 
            
        })
    }) 
}



//다른 행의 위치보기 아이콘 누르면 입힌 마커 없어지게
//같은 행의 아이콘 또 눌러도 마커 또 위에 생기지 않게하고싶음
    //지도위에 var MarkerImg가 없을때만 showMarker()를 실행(클릭했을 때 이전의 MarkerImg를 없애고 입력받은 주소에 MarkerImg를 찍음)
                // if (marker exists){
                //     // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
                //     marker.setMap(null);   //마커를 없앤다
                //     showMarker(); //사용자가 클릭한 셀의 주소에 마커를 찍는 함수
                // } else{ showMarker();}
                //showMarker()실행할때 마다 이전 결과값을 초기화할수는 없나


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
