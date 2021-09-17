import { MikroORM } from "@mikro-orm/core";
import express from "express";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  // console.log(orm.em);
  await orm.getMigrator().up();
  // const post = orm.em.create(Post, { title: "first post" });
  // await orm.em.persistAndFlush(post);

  // const posts = await orm.em.find(Post, {});
  // console.log(posts);

  const app = express();
  app.get("/", (/*req*/ _, res) => {
    res.send("hello");
  });
  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main().catch((error) => {
  console.error(error);
});
