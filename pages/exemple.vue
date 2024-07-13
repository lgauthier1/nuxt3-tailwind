<!-- pages/quittance.vue -->
<template>
  <layout name="pdf">
    <template #header>
      <h1 class="text-4xl font-bold">Quittance de Loyer</h1>
      <p class="text-lg">Document Officiel</p>
    </template>

    <section>
      <h2 class="text-2xl font-bold mb-4">Quittance de Loyer</h2>
      <p class="mb-4">
        Je soussigné, <strong>[Nom du propriétaire]</strong>, propriétaire du logement situé à
        <strong>[Adresse du logement]</strong>, certifie avoir reçu de <strong>[Nom du locataire]</strong> la somme de
        <strong>[Montant du loyer]</strong> euros au titre du loyer et des charges pour la période du
        <strong>[Date de début]</strong> au <strong>[Date de fin]</strong>.
      </p>
      <p class="mb-4">
        Cette somme couvre l'intégralité des sommes dues pour cette période.
      </p>
      <p class="mb-4">
        Fait à <strong>[Lieu]</strong>, le <strong>[Date de la quittance]</strong>.
      </p>
      <p class="mt-8">
        <strong>Signature du propriétaire :</strong>
      </p>
    </section>

    <template #footer>
      <p class="text-sm">Document généré le {{ new Date().toLocaleDateString() }}</p>
    </template>
  </layout>
</template>

<script setup>
definePageMeta({
  layout: 'pdf'
})
</script>

<style scoped>
/* Vous pouvez ajouter des styles spécifiques à cette page ici */
</style>