CREATE TABLE "gallery"
(
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(100),
    "description" VARCHAR(150),
    "alt" VARCHAR(150) NOT NULL,
    "likes" INTEGER DEFAULT 0
);
