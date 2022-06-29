<template>
  <div class="userBookings">
    <h3 class="heading">My active bookings</h3>
    <div class="bookings">
        <div v-for="desk of desks" class="booking">
            <NuxtLink class="deskLink" :to="`/rooms/${desk.roomId}/desks/${desk._id}`">Desk {{desk._id}}</NuxtLink>
        </div>
    </div>

  </div>
</template>

<script>
  export default {
    computed: {
      desks() {
      const desksArr = [];
      const deskIds = this.$store.state.currentUser.rentedDesks;
      const allDesks = this.$store.state.desks.desks;
      allDesks.forEach((x) => {
        if (deskIds.includes(x._id)) {
          desksArr.push(x);
        }
      })
      return desksArr;
      }
    }
  }
</script>

<style scoped>
.userBookings {
    background-color: transparent;
    padding: 20px;
    border-radius: 8px;
    color: #D4AD76;
    border: 1px solid #D4AD76;
    height: 84vh;
    position: sticky;
    top: 60px;
    align-self: baseline;
}

.deskLink {
  display: block;
  width: 100%;
}

.bookings {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.booking {
    background-color: transparent;
    padding: 5px;
    border-radius: 8px;
    color: #D4AD76;
    border: 1px solid #D4AD76;
    cursor: pointer;
    transition: all 200ms ease-in-out ;
}

.booking:hover {
  background-color: #D4AD76;
  color: white;
}

.heading {
    text-align: center;
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 25px;
}

</style>