export interface Documento{
    nombre: string;
    fecha: string;
}

export interface DocumentoDetail{
  Base64: string;
  nombre_documentacion: string;
  tipo_documentacion: string;
}

export interface Documentos{
  Documentos: DocumentoDetail[]
}
