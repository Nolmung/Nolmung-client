import { MapPlace } from '@/service/apis/place/index.type';
import Content from '../bottomSheet/Content';

interface BottomCardProps {
  markerInfo: MapPlace;
}

function BottomCard({ markerInfo }:BottomCardProps) {
  return (
    <div
      style={{
        zIndex: '10000',
        bottom: '0',
        backgroundColor: 'red',
        position: 'fixed',
        width: '100%',
        height: '100px',
      }}
    >
      <Content isCard={true} place={markerInfo}/>
    </div>
  );
}

export default BottomCard;
