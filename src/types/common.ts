export interface ICategory {
  id: number;
  cat_id: number;
  cat_name: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
}

export interface ISubCategory {
  id: number;
  cat_id: number;
  subcat_id: number;
  subcat_name: string;
  no_of_dua: number;
}

export interface IDua {
  id: number;
  cat_id: number;
  subcat_id: number;
  dua_id: number;
  dua_name: string;
  top: string | null;
  dua_arabic: string;
  dua_indopak: string;
  transliteration: string;
  translation: string;
  bottom: string | null;
  refference: string;
  audio: string;
}