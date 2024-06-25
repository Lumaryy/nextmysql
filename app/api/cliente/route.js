import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({"message":"Listar todos los clientes - GET"})
}

export async function POST(response){
    let data = await response.json();
    return NextResponse.json({"message":"hola desde el metodo POST ",data})
}