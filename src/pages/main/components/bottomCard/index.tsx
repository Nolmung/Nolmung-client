import { MapPlace } from '@/service/apis/place/index.type';
import Content from '../bottomSheet/Content';

function BottomCard({ markerInfo }: { markerInfo: MapPlace }) {
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
      <Content place={markerInfo} />
    </div>
  );
}

export default BottomCard;
