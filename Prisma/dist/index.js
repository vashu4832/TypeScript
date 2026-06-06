import { prisma } from "./lib/prisma.js";
async function deleteUser(username) {
    const res = await prisma.user.delete({
        where: { username }
    });
    console.log(res);
}
deleteUser("ashu@gmail.com");
//# sourceMappingURL=index.js.map