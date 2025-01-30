import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/v1/playlist", () => {
    console.log("MSW -> GET /api/songs hit!");
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
  http.get("/api/v1/songs/:id", ({ request }) => {
    const { id } = request.params;
    console.log(`MSW -> GET /api/v1/songs/${id} hit!`);
    return HttpResponse.json({
      id,
      title: `Mock Song ${id}`,
      artist: "Mock Artist",
      genre: "Mock Genre",
      duration: 180,
    });
  }),
];
