# Guía de Publicación y Despliegue en Cloudflare Pages / Workers

Esta guía detalla paso a paso cómo publicar el proyecto **Aura Coaching & Advisory** (Next.js 16 App Router con `@opennextjs/cloudflare`) en la red global de Cloudflare.

---

## 📋 Métodos de Despliegue Disponibles

Existen 3 formas de publicar la aplicación:
1. [Método 1: Conexión Automática con Git desde el Dashboard de Cloudflare (Recomendado)](#método-1-dashboard-de-cloudflare--conexión-git-recomendado)
2. [Método 2: CI/CD Automatizado con GitHub Actions](#método-2-despliegue-continuo-cicd-con-github-actions)
3. [Método 3: Despliegue Manual desde tu Terminal](#método-3-despliegue-manual-desde-la-terminal)

---

## Método 1: Dashboard de Cloudflare + Conexión Git (Recomendado)

Este método conecta tu repositorio de GitHub directamente a Cloudflare Pages. Cada vez que hagas `git push` a `main`, Cloudflare compilará y publicará la web automáticamente. Además, crea entornos de vista previa automáticos para cada Pull Request.

### Paso 1: Acceder al Dashboard de Cloudflare
1. Ve a [dash.cloudflare.com](https://dash.cloudflare.com/) e inicia sesión con tu cuenta.
2. En el menú lateral izquierdo, haz clic en **Compute (Workers & Pages)**.
3. Haz clic en el botón azul **Create** (Crear).
4. Selecciona la pestaña **Pages** y haz clic en **Connect to Git** (Conectar a Git).

### Paso 2: Vincular tu Repositorio de GitHub
1. Si es la primera vez, autoriza a Cloudflare en tu cuenta de GitHub (`Its-JrDev`).
2. Selecciona el repositorio `aura-coaching-advisory`.
3. Haz clic en **Begin setup** (Comenzar configuración).

### Paso 3: Configurar los Parámetros de Compilación
Configura los campos exactamente como se indica a continuación:

| Campo | Valor a colocar |
| --- | --- |
| **Project name** | `aura-coaching-advisory` |
| **Production branch** | `main` |
| **Framework preset** | `None` *(o Next.js)* |
| **Build command** | `npm run build:cf` |
| **Build output directory** | `.open-next/assets` |
| **Root directory** | `/` |

### Paso 4: Configurar Variables de Entorno y Compatibilidad
Antes de hacer clic en guardar, despliega la sección **Environment variables** y añade:

- `NODE_VERSION` = `20` o `22`

> [!IMPORTANT]
> **Compatibilidad Node.js:**
> Una vez creado el proyecto, dirígete a:
> **Project Settings** > **Functions** > **Compatibility flags**
> Asegúrate de que el flag `nodejs_compat` esté activado y la fecha de compatibilidad sea `2026-10-01` o superior (esto ya está preconfigurado en [`wrangler.jsonc`](./wrangler.jsonc)).

### Paso 5: Desplegar
Haz clic en **Save and Deploy**. Cloudflare descargará el repositorio, ejecutará OpenNext y te entregará una URL pública con certificado SSL gratuito (por ejemplo: `https://aura-coaching-advisory.pages.dev`).

---

## Método 2: Despliegue Continuo (CI/CD) con GitHub Actions

El repositorio ya incluye el flujo de trabajo configurado en [`.github/workflows/ci-cd.yml`](./.github/workflows/ci-cd.yml). Para activarlo, solo necesitas agregar tus credenciales de Cloudflare en GitHub Secrets.

### Paso 1: Obtener tus Credenciales en Cloudflare
1. **Account ID**:
   - En el Dashboard de Cloudflare, selecciona tu cuenta. En la barra lateral derecha verás tu **Account ID**. Cópialo.
2. **API Token**:
   - Ve a [dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens).
   - Haz clic en **Create Token**.
   - Usa la plantilla **Edit Cloudflare Workers** (o crea un Custom Token con permisos de *Account > Workers & Pages > Edit*).
   - Haz clic en **Continue to summary** y copia el token generado.

### Paso 2: Agregar los Secrets en GitHub
1. Ve a tu repositorio en GitHub: [https://github.com/Its-JrDev/aura-coaching-advisory](https://github.com/Its-JrDev/aura-coaching-advisory)
2. Haz clic en **Settings** > **Secrets and variables** > **Actions**.
3. Haz clic en **New repository secret** y añade dos secretos:
   - Nombre: `CLOUDFLARE_API_TOKEN` → Valor: *Tu token generado*
   - Nombre: `CLOUDFLARE_ACCOUNT_ID` → Valor: *Tu Account ID*

### Paso 3: ¡Listo!
A partir de este momento, cada `git push` a la rama `main` ejecutará automáticamente la verificación de tipos, compilación de Next.js, empaquetado de OpenNext y el despliegue directo a Cloudflare.

---

## Método 3: Despliegue Manual desde la Terminal

Si prefieres desplegar directamente desde tu máquina local usando Wrangler CLI:

1. Inicia sesión en Cloudflare en tu terminal:
   ```bash
   npx wrangler login
   ```
2. Compila y publica el proyecto:
   ```bash
   npm run deploy
   ```
   *Este comando compilará el bundle optimizado con OpenNext y lo publicará de inmediato.*

---

## 🌐 Configurar Dominio Personalizado

Para usar tu propio dominio (ej. `aura-coaching.com` o `asesoria.com`):
1. En el Dashboard de Cloudflare Pages, selecciona tu proyecto `aura-coaching-advisory`.
2. Ve a la pestaña **Custom domains**.
3. Haz clic en **Set up a custom domain**.
4. Escribe tu dominio y sigue los pasos para apuntar los DNS (si el dominio ya está en Cloudflare, se configura con un solo clic con SSL/TLS automático).
