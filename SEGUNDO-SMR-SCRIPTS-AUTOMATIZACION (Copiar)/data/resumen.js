window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.resumen = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📄</span>
        <span>Resumen Ejecutivo</span>
    </div>
    <p>
        Este proyecto propone el diseño, programación e implantación de una <strong>suite de scripts de
        automatización (MediConnect AutoAdmin Toolkit)</strong> para eliminar las tareas repetitivas de
        administración que realizan diariamente los dos técnicos del departamento de sistemas de
        <strong>MediConnect Solutions S.L.</strong>: altas y bajas de usuarios, copias de seguridad,
        inventario de equipos y limpieza de cuentas inactivas.
    </p>
</div>

<h3>Contexto y Problemática</h3>
<p>
    MediConnect Solutions S.L. es una empresa de telemedicina con <strong>65 empleados</strong> y
    <strong>90 puestos de trabajo</strong> repartidos en dos sedes. El departamento de informática lo forman
    solo <strong>dos técnicos</strong> que administran 2 servidores Windows Server 2022 (Active Directory,
    DNS, DHCP), 2 servidores Debian 12 y 90 equipos de escritorio y portátiles. La gestión se realiza
    todavía de forma manual y artesanal:
</p>
<ul class="space-y-2 my-4">
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Altas y bajas manuales:</strong> unas 25 operaciones al mes, 15-20 minutos cada una, con errores de nombres y unidades de organización sin estandarizar.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Copias de seguridad sin verificar:</strong> dos fallos en 12 meses no detectados; la base de datos de citas estuvo 11 días sin copia válida (pérdida estimada de 6.800 €).</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Cuentas huérfanas:</strong> 18 cuentas de usuarios despedidos siguen activas (riesgo RGPD y de accesos no autorizados).</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Inventario inexistente:</strong> 12 equipos sin registrar y 40 licencias sin tramitar tras la auditoría interna.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Informes manuales:</strong> unas 10 horas mensuales dedica un técnico a copiar datos en hojas de cálculo.</span>
    </li>
</ul>

<h3>Solución Propuesta</h3>
<p>
    Se desarrollará una suite de scripts programados, versionada y documentada, organizada en cinco módulos:
</p>
<ul class="space-y-2 my-4">
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Módulo 1 · Usuarios AD (PowerShell):</strong> alta, baja y modificación masiva con validación de nomenclatura, generación de contraseñas, OU correcta y registro en log.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Módulo 2 · Copias de seguridad (Bash + rsync + dump):</strong> copias incrementales diarias, verificación de integridad, política de retención 30/90/365 días e informe por correo.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Módulo 3 · Inventario (Python):</strong> recogida de hardware y software de todos los equipos y generación de informes CSV y HTML.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Módulo 4 · Higiene de cuentas (Bash + PowerShell):</strong> detección de cuentas inactivas más de 60 días y propuesta automática de baja.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Módulo 5 · Planificación (cron / Programador de tareas):</strong> ejecución automática, alertas por correo y documentación de operación.</span>
    </li>
</ul>

<div class="relative my-8">
    <img src="./images/codigo.jpg" alt="Desarrollo de scripts de automatización" class="w-full rounded-2xl shadow-xl">
    <p class="text-sm text-slate-500 mt-2 text-center">Figura 1: Programación de los scripts de administración.</p>
</div>

<h3>Metodología</h3>
<p>
    El proyecto se desarrolla con metodología <strong>ABP (Aprendizaje Basado en Proyectos)</strong> y siguiendo
    referentes profesionales: <strong>ITIL v4</strong> para la gestión de servicios,
    <strong>RGPD/LOPDGDD</strong> para la protección de datos personales,
    <strong>ISO/IEC 27001</strong> para la seguridad y <strong>PMBOK</strong> para la planificación de tareas.
</p>

<h3>Resultados Esperados</h3>
<p>
    La implantación de la suite debe reducir en un <strong>90%</strong> el tiempo dedicado a altas y bajas de
    usuarios (de 6 a menos de 1 hora al mes), garantizar la verificación diaria de las copias de seguridad
    (de 0 a 1 verificación automática cada 24 horas), obtener el inventario del 100% del parque en un solo
    clic y eliminar las 18 cuentas huérfanas detectadas, dejando el registro RGPD al día.
</p>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>📝 Instrucciones para el Alumnado</span>
    </div>
    <p>
        <strong>Este proyecto es PEDAGÓGICO y debe ser completado por ti.</strong> Las secciones de
        Introducción, Estado del Arte, Viabilidad, Requisitos y Diseño están desarrolladas como EJEMPLO y GUÍA.
        Deberás completar personalmente:
    </p>
    <ul class="list-disc list-inside space-y-2 mt-3">
        <li><strong>Sección 6 (Implementación):</strong> programar, probar y documentar TUS scripts reales en el laboratorio del centro.</li>
        <li><strong>Sección 7 (Administración):</strong> describir los procedimientos reales de operación de tu suite.</li>
        <li><strong>Sección 8 (Herramientas):</strong> adaptar plantillas, checklists y rúbricas a tu implementación.</li>
        <li><strong>Sección 9 (Conclusiones):</strong> redactar tu valoración personal y las mejoras futuras.</li>
        <li><strong>Bibliografía:</strong> añadir las fuentes que hayas consultado realmente.</li>
        <li><strong>Anexos:</strong> incluir capturas de pantalla de TU código y de las ejecuciones.</li>
    </ul>
    <p class="mt-4">
        Los datos de MediConnect Solutions S.L. son un ESCENARIO realista de clase; la implementación práctica
        DEBES HACERLA TÚ en tu propio entorno de pruebas (máquinas virtuales del laboratorio del centro).
    </p>
</div>
`;
