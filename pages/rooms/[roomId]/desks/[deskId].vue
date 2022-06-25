<template>
    <div>
        THIS IS THE ROOM {{roomId}} DESK {{deskId}} PAGE
    </div>
</template>

<script setup>
    const route = useRoute();

    const {roomId, deskId} = route.params;
</script>