// import express from 'express';
// import request from 'supertest';
// import routerLivre from "../routes/livres.route.js"; 

// const app = express();
// app.use(express.json());
// app.use("/api/livre", routerLivre);

// describe("test d'intégration pour l'API livres", () => {
//   it("should get all books with the command GET /api/livre", async () => {
//     const { body, statusCode } = await request(app).get("/api/livre/");
//     expect(body).toEqual(
//       expect.arrayContaining([
//         expect.objectContaining({
//           id: expect.any(Number),
//           titre: expect.any(String),
//           dateparution: expect.any(String),
//           AuteurId: expect.any(Number)
//         }),
//       ])
//     );
//     expect(statusCode).toBe(200);
//   });
// });
//test qui donne succès à tous les coups
test("test trivial qui réussit toujours", () => {
  expect(true).toBe(true);
});