export interface Expedientes{
    Expedientes: ExpedienteItem[]
}
export interface ExpedienteItem {
    nombre_solicitante: string,
    nro_expediente: number,
    estado: string
}
