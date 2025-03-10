import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = await params;
  try {
    const dataObject = await prisma.dataObject.findMany({
      include: { instances: true },
    });
    if (!dataObject) {
      return NextResponse.json({ error: 'Data object not found' }, { status: 404 });
    }
    
    const data = dataObject.find((d) => d.name.toLowerCase() === id.toLowerCase());

    console.log(data);

    return NextResponse.json({
      id: data?.id,
      name: data?.name,
      elements: data?.instances.length,
      values: data?.instances.map((instance) => {
        return {
          id: instance.id,
          ...(typeof instance.values === 'object' ? instance.values : {}),
        }
      }),
    });
  } catch (error) {
    console.error('Error fetching data object by ID:', error);
    return NextResponse.json({ error: 'Failed to fetch data object by ID' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}