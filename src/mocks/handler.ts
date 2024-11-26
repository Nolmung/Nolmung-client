import { http, HttpResponse } from 'msw';

import { postDetail } from './data/postDetail';

export const handlers = [
  http.get(`/place-details/:placeId`, async ({ params }) => {
    const detail = postDetail.find(
      (item) => item.place_id === Number(params.placeId),
    );

    if (detail) {
      return HttpResponse.json(detail, { status: 200 });
    } else {
      return HttpResponse.json({ error: 'No Content' }, { status: 204 });
    }
  }),
];
