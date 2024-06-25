import { NextResponse } from "next/server";

export function GET(response,{params}){
    let id = params.id;
    return NextResponse.json({"message":"Buscar un cliente - GET "+id})
}

export function DELETE(response,{params}){
    let id = params.id;
    return NextResponse.json({"message":"eliminar un cliente DELETE "+id})
}

export function PUT(response,{params}){
    let id = params.id;
    return NextResponse.json({"message":"actualizar un cliente - PUT "+id})
}