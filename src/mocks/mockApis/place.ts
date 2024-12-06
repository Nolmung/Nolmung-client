import { http, HttpResponse } from 'msw';

import { postDetail } from '../data/postDetail';

export const placeDetailApi = http.get(
  `/place-details/:placeId`,
  async ({ params }) => {
    const detail = postDetail.find(
      (item) => item.placeId === Number(params.placeId),
    );

    if (detail) {
      return HttpResponse.json(detail, { status: 200 });
    } else {
      return HttpResponse.json({ error: 'No Content' }, { status: 204 });
    }
  },
);
