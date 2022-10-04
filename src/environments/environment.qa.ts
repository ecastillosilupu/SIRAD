export const environment = {
  qa: true,
  //-- LOCAL
  urlApiLogin: 'http://172.20.31.22:8080/ms-seguridad-sinpad/api/v1/usuario/obtener-permisos',
  urlApiv1File: 'http://172.20.31.22:3009/api/v1/file',
  urlApiV1Emergency: 'http://172.20.31.22:3000/api/v1/emergencias',
  urlApiV1EmergencyRecord : 'http://172.20.31.22:3020/api/v1/emergencias_record',
  urlApiV1ListEmergencies: 'http://172.20.31.22:3001/api/v1/emergencias/',
  urlApiV1Formularios: 'http://172.20.31.22:3002/api/v1/formularios',
  urlApiV1FormulariosUpdate: 'http://172.20.31.22:3021/api/v1/formularios',
  urlApiV1CreateEvaluation: 'http://172.20.31.22:3003/api/v1/evaluacion-rapida',
  urlApiV1Ubigeo: 'http://172.20.31.22:3018/api/v1/ubigeo/listar',
  urlApiV1Peligro: 'http://172.20.31.22:8080/ms-maestras/api/v1/listar-tipo-peligro',
  urlApiV1Group: 'http://172.20.31.22:8080/ms-maestras/api/v1/obtener-grupo-peligro',
  urlApiV1CentroPoblado: 'http://172.20.31.22:3019/api/v1/centro-poblado',
  urlApiPlaces: 'http://172.20.31.22:3004/api/v1/maestras',
  urlApiForm2a: 'http://172.20.31.22:3000/api/v1/formulario2a',
  urlApiForm2b: 'http://172.20.31.22:3001/api/v1/formato-2b',
  urlApiEmpadronamiento: 'http://172.20.31.22:3017/api/v1/empadronamiento',
  urlApiV1FamilyGroup: 'http://172.20.31.22:3016/api/v1/grupo-familiar/',
  urlApiV1PermissionGroup: 'http://172.20.31.22:3005/api/v1/grupo-permiso',
  urlApiV1PermissionGroupList: 'http://172.20.31.22:3007/api/v1/grupo-permiso',
  urlApiV1Permission: 'http://172.20.31.22:3006/api/v1/permiso',
  urlApiV1PermissionList: 'http://172.20.31.22:3008/api/v1/permiso',
  urlApiV1DangerGroup: 'http://172.20.31.22:3010/api/v1/grupo-peligro',
  urlApiV1DangerGroupList: 'http://172.20.31.22:3012/api/v1/grupo-peligro',
  urlApiV1Danger: 'http://172.20.31.22:3011/api/v1/peligro',
  urlApiV1DangerList: 'http://172.20.31.22:3013/api/v1/peligro',
  urlApiV1Profile: 'http://172.20.31.22:3014/api/v1/perfil',
  urlApiV1ProfileList: 'http://172.20.31.22:3015/api/v1/perfil-permiso',
  urlApiV1Maestras: 'http://172.20.31.22:8080/ms-maestras/api/v1/listar-salud',
  urlApiGroupProducts: 'http://172.20.31.22:8080/ms-maestras/api/v1/listar-grupos-producto',
  urlApiProducts: 'http://172.20.31.22:8080/ms-maestras/api/v1/listar-productos-by-idgrupo',
  //urlApiV1RegionProvDistrito: 'http://172.20.31.22:8082/api/v1/',
  urlApiV1RegionProvDistrito: 'http://172.20.31.22:8080/ms-maestras/api/v1/',
  urlApiV1NuevoUsuario: 'http://172.20.31.22:8080/ms-seguridad-sinpad/api/v1/usuario/',
  urlApiV1Preliminar: 'http://172.20.31.22:3024/api/v1/preliminar',
  urlApiV1PreliminarMaestras: 'http://172.20.31.22:3036/api/v1',
  urlApiV1EmergencyAtention : 'http://172.20.31.22:3023/api/v1/emergencia_atencion',  
  urlApiV1ListAlmacenes : 'http://172.20.31.22:3022/api/v1/almacenes/',
  urlApiv1ListarUsuario: 'http://172.20.31.22:8080/ms-seguridad-sinpad/api/v1/',
  urlApiUsuarioById: 'http://172.20.31.22:8080/ms-seguridad-sinpad/api/v1/',
  urlApiV1DetalleUsuario: 'http://172.20.31.22:8080/ms-seguridad-sinpad/api/v1/usuario/',
  urlApiV1EmergencyArticleAtention : 'http://172.20.31.22:3026/api/v1/emergencia_atencion_articulos',
  urlApiV1Recursos : 'http://172.20.31.22:3025/api/v1/listar-articulos',
  //Agregado por Luis Hernandez 02/09/22 -> Api Consulta Reniec (springboot) - Api Consulta Personas (nest)
  urlApiV1ConsultaReniec : 'http://bedev.indeci.gob.pe:8080/ws-dnie',
  urlApiV1ConsultaPersona : 'http://172.20.31.22:3027/api/v1/personas/',

  urlApiV1SolicitudUsuarioNuevo: 'http://172.20.31.22:8080/ms-seguridad-sinpad/api/v1/solicitud-usuario/registro',
  urlApiCargo: 'http://172.20.31.22:8082/ms-maestras/api/v1/cargo/',
  urlApiInstitucionPublica: 'http://172.20.31.22:8082/ms-maestras/api/v1/institucionpublica/',
  urlApiInstitucionPrivada: 'http://172.20.31.22:8082/ms-maestras/api/v1/institucionprivada/',
  urlApiV1ListarSolicitudCreacionUsuario : 'http://172.20.31.22:8080/ms-seguridad-sinpad/api/v1/solicitud-usuario',
  urlApiV1PerfilNivel: 'http://localhost:3000/api/v1/perfil-permiso'

};