import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/v1/playlist", () => {
    return HttpResponse.json([
      {
        id: "1",
        title: "Song One",
        artist: "Artist One",
        genre: "Pop",
        duration: 180,
      },
      {
        id: "2",
        title: "Song Two",
        artist: "Artist Two",
        genre: "Rock",
        duration: 240,
      },
      {
        id: "3",
        title: "Song Three",
        artist: "Artist Three",
        genre: "HipHop",
        duration: 200,
      },
    ]);
  }),
];
