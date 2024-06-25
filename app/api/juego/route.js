import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(){
    const data = await prisma.juegos.findMany();
    return NextResponse.json(data);
}

export async function POST(response){
    try{
        const data = await response.json();
        const resp = await prisma.juegos.create(
            {
                data:{
                    nombre: data.nombre,
                    descripcion: data.descripcion,
                    precio: data.precio
                }
            }
        );

        return NextResponse.json({status:200,resp});

    }catch(e){
        return NextResponse.json({status:500,"message":e.message})
    }
}