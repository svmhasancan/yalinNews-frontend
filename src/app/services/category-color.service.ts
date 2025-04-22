import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryColorService {
  constructor() {}

  categoryColors: { [key: string]: string } = {
    Teknoloji: '#4ea8de',
    Spor: '#38b000',
    Ekonomi: '#f4a261',
    Gündem: '#e63946',
    Bilim: '#9d4edd',
    'Kültür & Sanat': '#f9844a',
    'Sağlık & Yaşam': '#00b4d8',
    Dünya: '#6a994e',
    'E-spor & Oyun': '#5f0f40',
  };
}
