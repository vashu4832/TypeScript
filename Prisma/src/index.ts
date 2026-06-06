import { prisma } from "./lib/prisma.js";

interface updateParams {
    firstName: string,
    lastName: string
}

async function updateUser(username: string, {
    firstName,
    lastName
}: updateParams) {
    const result = await prisma.user.update({
        where: {username},
        data: {
            firstName,
            lastName
        }
    })
}

const res = updateUser("ashu@gmail.com",{firstName: "Harkirat", lastName: "Singh"});
console.log(res);