import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const malls = await prisma.mall.createMany({
    data: [
      {
        name: "Mall of Asia",
        location: "Pasay City",
        province: "Metro Manila",
      },
      {
        name: "SM North EDSA",
        location: "Quezon City",
        province: "Metro Manila",
      },
      {
        name: "SM Megamall",
        location: "Mandaluyong City",
        province: "Metro Manila",
      },
    ],
  });
  console.log(malls);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
