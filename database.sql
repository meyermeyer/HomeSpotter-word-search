CREATE TABLE "gallery"
(
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(255),
    "description" VARCHAR(150),
    "alt" VARCHAR(150),
    "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery"
    ("path", "description", "alt")
VALUES
    ('images/IMG_5192.gif', 'GIF of my band Miss Manners', 'The four Miss Manners bandmates lying in a star formation on the floor with their heads in the center.'),
    ('images/IMG_4815.png', 'Photo of my boyfriend, Kase and my kid, Sal in front of a huge monitor lizard.', 'An excited long haired boy holds a young child in front of an enclosure for a giant monitor lizard.'),
    ('images/IMG_4691.png', 'Me with Kase and Sal at a friend''s farm near Taylor''s Falls.', 'Two smiling adults snuggle a three year old on a grey couch.'),
    ('images/IMG_5281.png', 'Sal playing with his ''unicorn popper'' toy at the playground near our house.', 'A kid with staticky hair stans on top of an outdoor play structure holding a pink unicorn ball-shooting toy.'),
    ('images/IMG_6124.png', 'I made these gluten-free donuts.', 'A plate of home-made gluten free donuts: chocolate, cinnamon sugar, and powdered sugar.'),
    ('images/IMG_6281.png', 'Photo of Sal on a beach in California in his jammies.', 'A small kid in long-sleeved pajamas and tennis shoes sits in the sand on a cliff above the ocean.'),
    ('images/IMG_6367.png', 'My roommate''s cat, Felix is a super snuggler.', 'A long-haired adult in a striped shirt lies on a red leather couch with a fast asleep grey cat flopped on their shoulder and face.'),
    ('images/IMG_6433.png', 'Sal and our roommate Kit were so excited to find their first flower of spring.', 'Two young kids in rain boots dance around a lone white daffodil.');
