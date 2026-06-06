import { prisma } from "./lib/prisma.js";

async function deleteUser(username: string){
    const res = await prisma.user.delete({
        where: {username}
    })
    console.log(res);
}
deleteUser("ashu@gmail.com");