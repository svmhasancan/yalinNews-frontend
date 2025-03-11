export interface News {
  id: number;
  title: string;
  content: string;
  imageUrl?: string | null;
  publishDate: Date; // Tarih olarak saklanacak
  categoryId: number;
  authorId: number;
  isActive: boolean;
}
