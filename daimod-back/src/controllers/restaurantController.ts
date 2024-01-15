import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createRestaurant = async (req: Request, res: Response) => {
  try {
    const { name, mallId, cuisineType } = req.body;
    const restaurant = await prisma.restaurant.create({
      data: {
        name,
        cuisineType,
        mall: {
          connect: {
            id: mallId,
          },
        },
      },
    });
    res.status(201).json(restaurant);
  } catch (e) {
    res
      .status(500)
      .json({ error: "An error occurred while creating a restaurant." });
  }
};

export const getAllRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants = await prisma.restaurant.findMany();
    res.json(restaurants);
  } catch (e) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving restaurants." });
  }
};

export const getRestaurantById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found." });
    }
    res.status(200).json(restaurant);
  } catch (e) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving a restaurant." });
  }
};

export const updateRestaurant = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, cuisineType, mallId } = req.body;
    const restaurant = await prisma.restaurant.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        cuisineType,
        mall: {
          connect: {
            id: mallId,
          },
        },
      },
    });
    res.status(200).json(restaurant);
  } catch (e) {
    res
      .status(500)
      .json({ error: "An error occurred while updating a restaurant." });
  }
};

export const deleteRestaurant = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const restaurant = await prisma.restaurant.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json(restaurant);
  } catch (e) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting a restaurant." });
  }
};
