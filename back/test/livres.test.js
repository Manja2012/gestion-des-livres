import { getAll } from "../controllers/livre.controller.js"
import { Livre } from "../models/index.js"
import {jest} from '@jest/globals'

jest.mock("../models/livre.model.js");
describe("getAll", () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });
  
  it("should return a list of books", async () => {

    const mockLivres = [{ title: "Livre 1" }, { title: "Livre 2" }];
    
    jest.spyOn(Livre, "findAll").mockResolvedValue(mockLivres)

    await getAll(req, res);

    expect(Livre.findAll).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockLivres);
  });
//   it("should return a 500 status code if an error occurs", async () => {
//     const errorMessage = "Une erreur est survenue";
//     Livre.findAll.mockRejectedValue(new Error(errorMessage));
//     await getAll(req, res);
//     expect(Livre.findAll).toHaveBeenCalledTimes(1);
//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
//   });
});