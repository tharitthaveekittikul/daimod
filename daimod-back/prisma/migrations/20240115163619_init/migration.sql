-- CreateTable
CREATE TABLE "Mall" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "province" TEXT NOT NULL,

    CONSTRAINT "Mall_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Restaurant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mallId" INTEGER NOT NULL,
    "cuisineType" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Restaurant" ADD CONSTRAINT "Restaurant_mallId_fkey" FOREIGN KEY ("mallId") REFERENCES "Mall"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
