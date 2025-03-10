import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const dataObjects = await prisma.dataObject.findMany({
      include: {
        properties: true,
      },
    });
    return NextResponse.json(dataObjects);
  } catch (error) {
    console.error('Error fetching data objects:', error);
    return NextResponse.json({ error: 'Failed to fetch data objects' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request: Request) {
  const { name, properties } = await request.json();

  try {
    const newDataObject = await prisma.dataObject.create({
      data: {
        name,
        properties: {
          create: properties,
        },
      },
    });
    return NextResponse.json(newDataObject);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
