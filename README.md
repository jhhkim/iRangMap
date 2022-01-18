# iRnag Map
### 소개
아이와 동행할 수 있는 부산 지역의 식당을 볼 수 있는 사이트입니다.<br />
망고플레이트의 데이터와 카카오맵 API를 이용했습니다.

***
### 기능
- 주소 검색시 해당하는 가게 목록 및 지도에 위치 마커 출력
- 위치 보기 아이콘 클릭 시 해당 가게의 위치를 지도에 띄움

***
### 작동화면
<img width="949" alt="iRang Home" src="https://user-images.githubusercontent.com/94815029/149901205-4dab6401-8f99-43e3-b5a8-fe62df342caa.png">
메인 화면입니다.<br />
지도의 중심이 부산 시청인 지도가 보입니다.

<img width="938" alt="iRnag result-map" src="https://user-images.githubusercontent.com/94815029/149901237-15f7af68-ebac-4140-acd2-a87d75ce1204.png">
원하는 주소를 검색하면 (예. 부산시 연제구) 연제구에 있는 가게들의 마커가 지도에 뜹니다.<br />
행의 개수를 구한 뒤 행의 개수만큼 for문을 돌려 주소가 있는 열의 정보를 배열에 넣습니다.<br />
카카오API의 주소-좌표 변환을 사용한 뒤 지도에 마커로 표시합니다.

<img width="947" alt="iRang result-list" src="https://user-images.githubusercontent.com/94815029/149901235-8d00309b-0b37-47d9-aa96-3c3ed8cca0ad.png">
지도 아래에는 가게 목록이 뜹니다.

<img width="949" alt="iRang result-iconclick" src="https://user-images.githubusercontent.com/94815029/149901220-15830197-703d-4a46-b4ad-b30badc34df6.png">
위치보기 아이콘을 누르면 해당 가게의 위치를 지도에서 줌인해서 보여줍니다.
