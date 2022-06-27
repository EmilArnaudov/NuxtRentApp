<template>
    <div>
        THIS IS THE ROOM {{roomId}} DESKS PAGE
    </div>
</template>

<script setup>
    const route = useRoute();

    const {roomId} = route.params;
</script>