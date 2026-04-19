const schema_getuser = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Reqres single user response schema",
    "type": "object",
    "properties": {
      "data": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "email": {
            "type": "string"
          },
          "first_name": {
            "type": "string"
          },
          "last_name": {
            "type": "string"
          },
          "avatar": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "email",
          "first_name",
          "last_name",
          "avatar"
        ]
      },
      "support": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "text": {
            "type": "string"
          }
        },
        "required": [
          "url",
          "text"
        ]
      },
      "_meta": {
        "type": "object",
        "properties": {
          "powered_by": {
            "type": "string"
          },
          "docs_url": {
            "type": "string"
          },
          "upgrade_url": {
            "type": "string"
          },
          "example_url": {
            "type": "string"
          },
          "variant": {
            "type": "string"
          },
          "message": {
            "type": "string"
          },
          "cta": {
            "type": "object",
            "properties": {
              "label": {
                "type": "string"
              },
              "url": {
                "type": "string"
              }
            },
            "required": [
              "label",
              "url"
            ]
          },
          "context": {
            "type": "string"
          }
        },
        "required": [
          "powered_by",
          "docs_url",
          "upgrade_url",
          "example_url",
          "variant",
          "message",
          "cta",
          "context"
        ]
      }
    },
    "required": [
      "data",
      "support",
      "_meta"
    ]
  };

// hanya contoh
// const schema_createuser = {
//     // your second schema here
//     type: "object",
//     properties: {
//         name: { type: "string" },
//         job: { type: "string" },
//         id: { type: "string" },
//         createdAt: { type: "string" }
//     },
//     required: ["name", "job", "id", "createdAt"]
// };

// jika ada lebih dari satu schema, gunakan export { schema_getuser, schema_createuser };
// export { schema_getuser, schema_createuser };


export default schema_getuser;