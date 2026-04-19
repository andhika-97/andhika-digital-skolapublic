import fetch from "node-fetch";
import { expect } from "chai";
import Ajv from "ajv";
import schema_getuser from "./reqresSchema.js";

describe("cobain test", function () {
    const baseURL = "https://reqres.in";

    it("Create - Create single user", async function () {
         const newPost = {
            name:"weaver",
            job :"leader"
        };
        // const response = await fetch(`${baseURL}/api/users?page=2`);
        const response = await fetch("https://reqres.in/api/users", {
            method:"POST",
            headers: { "Conten-Type": "application/json" },
            body: JSON.stringify(newPost),
        });
        const response=await response.json();
        const cekcek=Ajv.compile(schema_creatuser);
        const hasil = cekcek(data);

        expect(hasil,'validasi json schema').to.be.true;

    });
});

