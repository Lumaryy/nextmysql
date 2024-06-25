import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(response,{params}){
    try{
        let id =Number(params.id);

    const resp = await prisma.juegos.findFirst(
        {
            where: {idJuego: id}
        }
    );
    return NextResponse.json({status:200,resp})
    }catch(e){
        return NextResponse.json({status:500,error:e.message})
    }
}

export async function DELETE(response,{params}){
    try{
        let id =Number(params.id); 

        const resp = await prisma.juegos.delete(
            {
                where: {idJuego: id}
            }
        );
        return NextResponse.json({status:200,resp})
    }catch(e){
        return NextResponse.json({status:500,error:e.message})
    }
}

export async function PUT(response,{params}){
    try{
        let id =Number(params.id); 
        const data = await response.json();
        const resp = await prisma.juegos.update(
            {
                where: {idJuego: id},
                data:{
                    nombre: data.nombre,
                    descripcion: data.descripcion,
                    precio: data.precio
                }
            }      
        );
        return NextResponse.json({status:200,resp})
    }catch(e){
        return NextResponse.json({status:500,error:e.message})
    }
}