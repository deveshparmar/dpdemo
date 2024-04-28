import { DatabaseExecuter } from "./DatabaseExecuter";
import { Proxy } from "./Proxy";

const admin: DatabaseExecuter = new Proxy("Admin", "Admin");
admin.executeQuery("CREATE");
admin.executeQuery("UPDATE");
admin.executeQuery("DELETE");

const user: DatabaseExecuter = new Proxy("user", "123");
user.executeQuery("UPDATE");
user.executeQuery("CREATE");

const user2: DatabaseExecuter = new Proxy("user2", "456");
user2.executeQuery("DELETE"); // throws error as it has limited privileges