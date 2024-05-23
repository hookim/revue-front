import { useState, useEffect } from "react";
import MapAxios from "../../apis/MapAxios";

import "../../assets/css/Map.css"

const MapData = ({ onAptCardClick }) => {
    const [mapData, setMapData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await MapAxios();
                for (let i = 3; i <= 100; i++) {
                  data.push({
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
                setMapData(data);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        }
        fetchData();

    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="card aptlist">
            {mapData.length > 0 ? (mapData.map((apt) => (
                <div className="card-body m-3" key={apt.aptName}
                    onClick={
                        () => onAptCardClick({
                            lat: apt.lat, lon: apt.lon
                        })}

                    style={{ backgroundColor: "GAINSBORO" }}>
                    <h5 className="card-title">{apt.aptName}</h5>
                    <p className="card-text">{apt.floor}</p>
                    <p className="card-text">{apt.exclusiveArea}</p>
                    <p className="card-text">{apt.legalDong}</p>
                    <p className="card-text">{apt.price}</p>
                    <p className="card-text">{apt.constructionYear}</p>
                </div>
            ))
            ) : (
                <div>No data available</div>
            )}
        </div>
    )
}

export default MapData;