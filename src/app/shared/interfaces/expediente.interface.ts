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

export interface ExpedienteNew{
    dni_usuario : number 
    apellido_nombre_solicitante : string 
    dni_solicitante : number 
    email_solicitante : string 
    colegiado : string 
    telefono_solicitante : string 
  
    nombre_titular : string 
    direccion_obra : string 
    padron_catastral :string 
    nro_normativa: number
    estado_construccion : string 
  
    fecha_alta_expediente : string  
    tipo_obra : string
    estado_tramite: string 
    historial_seguimiento : string 
    descripcion_tramite : string 
}

export interface ExpedienteNewResponse{
    nro_expediente : number
}