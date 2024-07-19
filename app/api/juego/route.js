import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(){
    try{
        const data = await prisma.juegos.findMany();
        return NextResponse.json({status:200,data});
    }catch{
        return NextResponse.json({status:500,"message":e.message})
    }
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