import type {Response } from "express";
import type { AuthRequest } from "../utils/types";
import { createServiceSchema } from "../utils/validation";
import { prisma } from "../../db";


export async function createService(req: AuthRequest, res: Response) {
    try {
        if (!req.user) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }

        if (req.user.role !== "SERVICE_PROVIDER") {
            res.status(403).json({ message: "service providers can create services" });
            return;
        }

        const validatedData = createServiceSchema.parse(req.body);
        
        const service = await prisma.service.create({
            data: {
                name: validatedData.name,
                type: validatedData.type,
                durationMinutes: validatedData.durationMinutes,
                providerId: req.user.id,
            },
        });

        res.status(201).json({
            id: service.id,
            name: service.name,
            type: service.type,
            durationMinutes: service.durationMinutes,
        });
    } catch (e) {
        if (e instanceof Error && e.name === "ZodError") {
            res.status(400).json({ message: "Invalid input" });
            return;
          }
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function setService(req:AuthRequest,res:Response){
    try{
        if (!req.user) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }

      
        if (req.user.role !== "SERVICE_PROVIDER") {
            res.status(403).json({ error: "Forbidden - Only service providers can set availability" });
            return;
        }
        
      
    }catch(e){


    }
}

export async function getService(req:AuthRequest,res:Response) {
    try{

    }catch(e){

    }
    
}