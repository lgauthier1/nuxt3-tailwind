<template>
    <div>
        <NuxtLayout name="custom">
            <section class="w-full">
                <p>This page will be displayed at the /about route.</p>
                <UCard>
                    <template #header>
                        <Placeholder class="h-8" />
                    </template>

                    <Placeholder class="h-32" />

                    <template #footer>
                        <Placeholder class="h-8" />
                    </template>
                </UCard>
                <div>
                    <div class="flex px-3 py-3.5 border-b dark:border-gray-700">
                        <UInput v-model="q" placeholder="Filter people..." />
                    </div>

                    <UTable :rows="filteredRows" :columns="columns">
                        <template #caption>
                            <caption>Employees of ACME</caption>
                        </template>
                    </UTable>
                </div>
            </section>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'About LGA'
});
const columns = [{
    key: 'id',
    label: 'ID'
}, {
    key: 'name',
    label: 'Name'
}, {
    key: 'title',
    label: 'Title'
}, {
    key: 'email',
    label: 'Email'
}, {
    key: 'role',
    label: 'Role'
}]

const people = [{
    id: 1,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member'
}, {
    id: 2,
    name: 'Courtney Henry',
    title: 'Designer',
    email: 'courtney.henry@example.com',
    role: 'Admin'
}, {
    id: 3,
    name: 'Tom Cook',
    title: 'Director of Product',
    email: 'tom.cook@example.com',
    role: 'Member'
}, {
    id: 4,
    name: 'Whitney Francis',
    title: 'Copywriter',
    email: 'whitney.francis@example.com',
    role: 'Admin'
}, {
    id: 5,
    name: 'Leonard Krasner',
    title: 'Senior Designer',
    email: 'leonard.krasner@example.com',
    role: 'Owner'
}, {
    id: 6,
    name: 'Floyd Miles',
    title: 'Principal Designer',
    email: 'floyd.miles@example.com',
    role: 'Member'
}]

const q = ref('')

const filteredRows = computed(() => {
    if (!q.value) {
        return people
    }

    return people.filter((person) => {
        return Object.values(person).some((value) => {
            return String(value).toLowerCase().includes(q.value.toLowerCase())
        })
    })
})
</script>