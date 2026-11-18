const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blog API",
      version: "1.0.0",
    },
    servers: [{ url: "http://localhost:5000/api" }],
    paths: {
      "/posts": {
        get: {
          tags: ["Posts"],
          summary: "Get all posts",
          responses: {
            200: { description: "Posts retrieved successfully" },
            500: { description: "Server error" },
          },
        },
        post: {
          tags: ["Posts"],
          summary: "Create a post",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/PostInput" },
              },
            },
          },
          responses: {
            201: { description: "Post created" },
            400: { description: "Invalid post data" },
          },
        },
      },
      "/posts/{id}": {
        get: {
          tags: ["Posts"],
          summary: "Get a post by ID",
          parameters: [{ $ref: "#/components/parameters/PostId" }],
          responses: {
            200: { description: "Post found" },
            404: { description: "Post not found" },
          },
        },
        put: {
          tags: ["Posts"],
          summary: "Update a post",
          parameters: [{ $ref: "#/components/parameters/PostId" }],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/PostInput" },
              },
            },
          },
          responses: {
            200: { description: "Post updated" },
            400: { description: "Invalid post data" },
          },
        },
        delete: {
          tags: ["Posts"],
          summary: "Delete a post",
          parameters: [{ $ref: "#/components/parameters/PostId" }],
          responses: {
            204: { description: "Post deleted" },
            400: { description: "Delete failed" },
          },
        },
      },
    },
    components: {
      parameters: {
        PostId: {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
      },
      schemas: {
        PostInput: {
          type: "object",
          required: ["title", "description"],
          properties: {
            title: {
              type: "string",
              example: "Sample post title",
            },
            description: {
              type: "string",
              example: "Sample post description",
            },
          },
        },
        Post: {
          allOf: [
            { $ref: "#/components/schemas/PostInput" },
            {
              type: "object",
              properties: {
                _id: {
                  type: "string",
                  example: "507f1f77bcf86cd799439011",
                },
                createdAt: {
                  type: "string",
                  format: "date-time",
                },
              },
            },
          ],
        },
      },
    },
  },
};



const swaggerOptionsFinal = {
  apis: [],
  definition: swaggerOptions.definition
};
module.exports = swaggerOptionsFinal;

