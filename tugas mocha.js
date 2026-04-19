import fetch from "node-fetch";
import { expect } from "chai";
import Ajv from "ajv";
import schema_getuser from "./reqresSchema.js";

describe("cobain test", function () {
    const baseURL = "https://reqres.in";

    it("READ - Get single user", async function () {
        // const response = await fetch(`${baseURL}/api/users?page=2`);
        const response = await fetch("https://reqres.in/api/users/2", {
            headers: { "x-api-key": "reqres_e21900c2783e456099c7a77163a91c7e" },
            method: "GET",
        });

        expect(response.status, 'testcase nya error').to.equal(200);
        
        const hasil=await response.json();
        console.log(hasil.data.id);
        expect(hasil.data.id, 'idnya salah').to.equal(4);

    });
});

