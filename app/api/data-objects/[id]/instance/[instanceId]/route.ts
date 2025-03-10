import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(request: Request, { params }: { params: { id: string, instanceId: string } }) {
  const { id } = await params;
  const { instanceId } = await params;

  console.log('DataObject ID:', id);
  console.log('Deleting instance:', instanceId);
  try {
    const dataObject = await prisma.dataObject.findUnique({
      where: { id },
    });
    if (!dataObject) {
      return NextResponse.json({ error: 'Data object not found' }, { status: 404 });
    }
    await prisma.instance.delete({
      where: { id: instanceId },
    });
    return NextResponse.json({ message: 'Instance deleted successfully' });
  } catch (error) {
    console.error('Error deleting instance:', error);
    return NextResponse.json({ error: 'Failed to delete instance' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}