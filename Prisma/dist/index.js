import { prisma } from "./lib/prisma.js";
async function updateUser(username, { firstName, lastName }) {
    const result = await prisma.user.update({
        where: { username },
        data: {
            firstName,
            lastName
        }
    });
}
const res = updateUser("ashu@gmail.com", { firstName: "Harkirat", lastName: "Singh" });
console.log(res);
//# sourceMappingURL=index.js.map