import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import getPokemon from "./PokemonGateway";

describe("PokemonGateway - Unit Tests", () => {
  const mockAdapter = new MockAdapter(axios);

  it("should getPokemon with success", async () => {
    const data = { data: "test" };
    mockAdapter.onGet("https://pokeapi.co/api/pokemon/").reply(200, data);

    await getPokemon().then((res) => {
      expect(res).toBe(data);
    });
  });
});
