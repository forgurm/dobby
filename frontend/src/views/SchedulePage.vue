<template>
  <div>
    <FullCalendar :options="calendarOptions" @dateClick="handleDateClick" @eventClick="handleEventClick" />
    <Dialog header="Event Details" v-model:visible="displayModal" :modal="true" :closable="false">
      <div class="p-field">
        <label for="title">Event Title</label>
        <InputText v-model="newEvent.title" id="title" :disabled="viewOnly" />
      </div>
      <div class="p-field">
        <label for="start">Start Date</label>
        <InputText v-model="newEvent.start" id="start" :disabled="viewOnly" />
      </div>
      <div class="p-field">
        <label for="end">End Date</label>
        <InputText v-model="newEvent.end" id="end" :disabled="viewOnly" />
      </div>
      <div class="p-field">
        <label for="color">Background Color</label>
        <select v-model="newEvent.backgroundColor" id="color" :disabled="viewOnly" :style="{ backgroundColor: newEvent.backgroundColor }">
          <option v-for="color in colors" :key="color" :value="color" :style="{ backgroundColor: color }">
            &nbsp;
          </option>
        </select>
      </div>
      <div class="p-field">
        <label for="createdBy">Created By</label>
        <InputText v-model="newEvent.createdBy" id="createdBy" disabled />
      </div>
      <div class="p-d-flex p-jc-end">
        <Button label="Delete" icon="pi pi-trash" class="p-button-text" v-if="!viewOnly" @click="deleteEvent" />
        <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="displayModal = false" />
        <Button label="Save" icon="pi pi-check" v-if="!viewOnly" @click="saveEvent" />
      </div>
    </Dialog>
  </div>
</template>

<script>
import calendarScript from '@/components/calendarScript';

export default {
  name: 'SchedulePage',
  ...calendarScript
};
</script>

<style src="../assets/css/calendar.css"></style>
