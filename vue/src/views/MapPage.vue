<script setup>
import { onMounted } from 'vue';
import axios_instance from '../util/axios-instance';
import { ref } from 'vue';
import apt from '../assets/apartment.png'
import  { useStore }  from '../util/store'

const myStore = useStore()
const filter = ref(myStore.getSearchKeyword())
const lists = ref(null);
const map = ref(null);
const clickSidebarHandler = (lat, lon) => {
  map.value.setCenter({x : lon, y : lat})
  const marker = markers.value.find(el => {
    return (lat === el.getPosition().y && lon === el.getPosition().x)
  })

  marker.getIcon().size *= 2

}
const markers = ref(null)

onMounted(()=>{
  axios_instance
  .get("/homes")
  .then((res) => {
      const mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 12
      };

      map.value = new naver.maps.Map('map', mapOptions);
      lists.value = [...res.data]
      
      for (let i = 3; i <= 100; i++) {
        lists.value.push({
          id: i + 2,
          addressNumber: `${200 + i}`,
          aptName: `랜덤 아파트 ${i}`,
          constructionYear: `${1990 + Math.floor(Math.random() * 30)}`,
          exclusiveArea: `${50 + Math.floor(Math.random() * 100)}.0`,
          floor: `${Math.floor(Math.random() * 20) + 1}`,
          lat: 37.5 + (Math.random() * 0.3),
          legalDong: ['종로구', '강남구', '마포구', '서초구', '용산구', '서대문구', '동대문구', '관악구', '송파구', '중구', '동작구', '강동구', '노원구', '금천구', '양천구', '은평구', '구로구', '도봉구', '성북구', '강북구'][Math.floor(Math.random() * 20)],
          lon: 126.8 + (Math.random() * 0.3),
          price: `${100000000 + Math.floor(Math.random() * 150000000)}`
        });
      }

      markers.value = lists.value.map(({lon, lat}) => {
        return new naver.maps.Marker({
          position: new naver.maps.LatLng(lat, lon),
          map: map.value
        });  
      }) 
    })
  })


</script>
<template>

  <div class="map__main">
    <div class="map__sidebar">
      <ul>
        <li class="map__list" v-for="(list,idx) in lists" :key="idx" @click="clickSidebarHandler(list.lat, list.lon)">
          <div>
            가격 : {{ list.price }}
          </div>
          <div>
            준공일 : {{ list.constructionYear }}
          </div>
          <div>
            법정동 : {{ list.legalDong }}
          </div>
          <div>
            아파트 : {{ list.aptName }}
          </div>
          <div>
            전용면적 : {{ list.exclusiveArea }}
          </div>
          <div>
            층수 : {{ list.floor }}
          </div>
        </li>
      </ul>
    </div>

    <div id="map"></div>


  </div>


</template>

<style scoped>
.map__main{
  width: 100%;
  height : 100%;
  border : black solid 2px;
  position : relative;
}

#map{
  width : 100%;
  height : 100%;
  position: relative;
}

.map__sidebar{
  position : absolute;
  left : 1%;
  top : 10%;
  bottom : 10%;
  z-index: 1;
  overflow-y : scroll;
  width : 250px;
  background-color: white;
  border : grey solid 1px;
  border-radius : 5px;
}

ul{
  list-style: none;
  display : contents;
}

.map__list{
  margin : 10px;
  padding : 10px;
  text-align: left;
  background-color : rgb(206, 206, 206);
  border-radius : 10px;
  display : block;
}

</style>
