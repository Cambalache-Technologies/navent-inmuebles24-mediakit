<script runat="server">
  Platform.Load("core", "1.1.1");

  var nombre = Platform.Request.GetFormField("Nombre");
  var apellido = Platform.Request.GetFormField("Apellido");
  var empresa = Platform.Request.GetFormField("Empresa");
  var email = Platform.Request.GetFormField("Correo Electrónico");
  var telefono = Platform.Request.GetFormField("Teléfono");
  var estado = Platform.Request.GetFormField("Estado de la República");
  var inventario = Platform.Request.GetFormField("Propiedades en Inventario");
  var medio = Platform.Request.GetFormField("Medio para ser contactado");

  var whereColumnArr = ['Correo Electrónico'];
  var whereColumValueArr = [email];
  var upsertColumnArr = ['Nombre', 'Apellido', 'Empresa', 'Teléfono', 'Estado de la República', 'Propiedades en Inventario', 'Medio para ser contactado'];
  var upsertColumnValueArr = [nombre, apellido, empresa, telefono, estado, inventario, medio];

  var upsertedRowCount = Platform.Function.UpsertData(
    'HUNTING_Planes-Inmobiliarios_2023_FO',
    whereColumnArr,
    whereColumValueArr,
    upsertColumnArr,
    upsertColumnValueArr
  );

  Platform.Response.Redirect('https://cloud.info.inmuebles24.com.mx/Gracias_Planes');
</script>