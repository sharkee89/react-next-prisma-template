import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { dataObjectId, values } = await request.json();
  try {
    const dataObject = await prisma.dataObject.findUnique({
      where: { id: dataObjectId },
    });
    if (!dataObject) {
      return NextResponse.json({ error: 'DataObject not found' }, { status: 404 });
    }
    const newInstance = await prisma.instance.create({
      data: {
        name: `Instance for ${dataObject.name}`,
        values,
        dataObjectId,
      },
    });
    return NextResponse.json(newInstance);
  } catch (error) {
    console.error('Error creating instance:', error);
    return NextResponse.json({ error: 'Failed to create instance' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
