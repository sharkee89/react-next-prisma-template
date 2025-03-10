import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = await params;

  try {
    const dataObject = await prisma.dataObject.findUnique({
      where: { id },
      include: {
        properties: true,
        instances: true,
      },
    });

    if (!dataObject) {
      return NextResponse.json({ error: 'Data object not found' }, { status: 404 });
    }

    return NextResponse.json(dataObject);
  } catch (error) {
    console.error('Error fetching data object by ID:', error);
    return NextResponse.json({ error: 'Failed to fetch data object by ID' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    console.log("Attempting to delete data object with ID:", id);

    const dataObjectExists = await prisma.dataObject.findUnique({
      where: { id },
    });

    if (!dataObjectExists) {
      console.log("Data object not found with ID:", id);
      return NextResponse.json({ error: 'Data object not found' }, { status: 404 });
    }

    await prisma.instance.deleteMany({
      where: { dataObjectId: id },
    });

    const deletedDataObject = await prisma.dataObject.delete({
      where: { id },
    });

    return NextResponse.json({
      message: 'Data object deleted successfully',
      data: deletedDataObject,
    });

  } catch(error: any) {
    if (error instanceof Error){
        console.log("Error: ", error.stack)
    }
    return NextResponse.json({ error: 'Failed to delete data object: ' + error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
