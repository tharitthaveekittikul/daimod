import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createMall = async (req: Request, res: Response) => {
  try {
    const { name, location, province } = req.body;
    const mall = await prisma.mall.create({
      data: {
        name,
        location,
        province,
      },
    });
    res.status(201).json(mall);
  } catch (e) {
    res.status(500).json({ error: "An error occurred while creating a mall." });
  }
};

export const getAllMalls = async (req: Request, res: Response) => {
  try {
    const malls = await prisma.mall.findMany();
    res.status(200).json(malls);
  } catch (e) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving malls." });
  }
};

export const getMallById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const mall = await prisma.mall.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!mall) {
      return res.status(404).json({ error: "Mall not found." });
    }
    res.status(200).json(mall);
  } catch (e) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving a mall." });
  }
};

export const updateMall = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, location, province } = req.body;
    const mall = await prisma.mall.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        location,
        province,
      },
    });
    res.status(200).json(mall);
  } catch (e) {
    res.status(500).json({ error: "An error occurred while updating a mall." });
  }
};

export const deleteMall = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const mall = await prisma.mall.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json(mall);
  } catch (e) {
    res.status(500).json({ error: "An error occurred while deleting a mall." });
  }
};
