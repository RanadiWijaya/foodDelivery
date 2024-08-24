import Realm from "realm";
import { ProductSchema } from "./ProductSchema";
import { UserSchema } from "./UserSchema";

const realm = new Realm({
    schema: [ProductSchema, UserSchema]
});

export default realm