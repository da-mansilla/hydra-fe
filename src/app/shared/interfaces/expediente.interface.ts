export interface Expedientes{
    Expedientes: ExpedienteItem[]
}
export interface ExpedienteItem {
    nombre_solicitante: string,
    nro_expediente: number,
    estado: string
}

export interface ExpedienteDetail{
    nombre_titular: string,
    nombre_solicitante: string
    colegiado: string
    fecha_alta_expediente: string
    fecha_presentacion_documentacion: string
    tramite: string
    tipo_obra: string
    estado_construccion: string
    direccion_obra: string
    padron_catastral: string
}