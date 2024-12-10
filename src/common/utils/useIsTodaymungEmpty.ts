import { useTodayMungStore } from '@/pages/todaymungWrite/stores/todayMungStore';

const useIsTodaymungEmpty = () => {
  const { title, content, places, medias, dogs } = useTodayMungStore();
  return (
    title === '' &&
    content === '' &&
    places.length === 0 &&
    medias.length === 0 &&
    dogs.length === 0
  );
};

export default useIsTodaymungEmpty;
