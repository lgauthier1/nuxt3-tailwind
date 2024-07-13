<!-- layouts/pdf.vue -->
<template>
  <PdfActionsBar />
  <div class="pdf-container bg-gray-800 min-h-screen flex items-center justify-center">
    <div class="pdf-layout bg-white text-black shadow-lg">
      <header class="pdf-header mb-8">
        <slot name="header">
          <h1 class="text-4xl font-bold">
            {{ title }}
          </h1>
          <p class="text-lg">
            {{ subtitle }}
          </p>
        </slot>
      </header>
      <main>
        <slot />
      </main>
      <footer class="pdf-footer mt-8">
        <slot name="footer">
          <p class="text-sm">
            Generated on {{ new Date().toLocaleDateString() }}
          </p>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Document Title',
  },
  subtitle: {
    type: String,
    default: 'Subtitle of the Document',
  },
})
</script>

  <style scoped>
  .pdf-container {
    padding: 2rem;
  }

  .pdf-layout {
    width: 210mm; /* Largeur A4 */
    height: 297mm; /* Hauteur A4 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20mm; /* Ajustez les marges internes si nécessaire */
    font-family: 'Times New Roman', Times, serif;
    overflow: hidden; /* Empêche le défilement */
    position: relative; /* Assurez-vous que les éléments positionnés restent dans le conteneur */
  }

  .pdf-header, .pdf-footer {
    text-align: center;
  }

  .pdf-footer {
    position: absolute;
    bottom: 20mm; /* Ajustez la position du bas si nécessaire */
    left: 0;
    right: 0;
  }

  /* Styles pour l'impression */
  @media print {
    .pdf-container {
      background: none;
      box-shadow: none;
      min-height: auto;
      padding: 0;
    }

    .pdf-layout {
      width: 210mm; /* Largeur A4 */
      height: 297mm; /* Hauteur A4 */
      box-shadow: none;
      padding: 20mm;
      overflow: visible;
    }

    .pdf-footer {
      position: absolute;
      bottom: 20mm;
      left: 0;
      right: 0;
    }

    @page {
      margin: 0; /* Supprime les marges de la page */
    }
  }
  </style>
