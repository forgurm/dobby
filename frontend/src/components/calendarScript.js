import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import axios from 'axios';

export default {
  components: {
    FullCalendar,
    Dialog,
    InputText,
    Button,
  },
  data() {
    return {
      displayModal: false,
      viewOnly: false,
      selectedEventId: null,
      newEvent: {
        title: '',
        start: '',
        end: '',
        backgroundColor: '',
        createdBy: localStorage.getItem('username') || 'Admin', // 로그인한 사용자 이름으로 설정
      },
      colors: ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A5', '#33FFA5', '#FF8833', '#33FF88', '#FF3388', '#33AAFF'],
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
        initialView: 'dayGridMonth',
        editable: true,
        selectable: true,
        events: [],
        dateClick: this.handleDateClick,
        eventClick: this.handleEventClick,
      },
    };
  },
  computed: {
    isCreator() {
      return this.newEvent.createdBy === localStorage.getItem('username');
    }
  },
  created() {
    this.fetchEvents();
  },
  methods: {
    async fetchEvents() {
      try {
        const response = await axios.get('/calendar/events', {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        this.calendarOptions.events = response.data;
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    },
    handleDateClick(info) {
      this.newEvent = {
        title: '',
        start: info.dateStr,
        end: info.dateStr,
        backgroundColor: this.colors[0],
        createdBy: localStorage.getItem('username') || 'Admin',
      };
      this.selectedEventId = null;
      this.viewOnly = false;
      this.displayModal = true;
    },
    handleEventClick(info) {
      const event = info.event;
      this.newEvent = {
        title: event.title,
        start: event.startStr,
        end: event.endStr,
        backgroundColor: event.backgroundColor,
        createdBy: event.extendedProps.createdBy,
      };
      this.selectedEventId = event.id;
      this.viewOnly = !this.isCreator;
      this.displayModal = true;
    },
    async saveEvent() {
      try {
        const headers = {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        };
        if (this.selectedEventId) {
          await axios.put(`/calendar/events/${this.selectedEventId}`, this.newEvent, { headers });
        } else {
          const response = await axios.post('/calendar/events', this.newEvent, { headers });
          this.calendarOptions.events.push({ ...this.newEvent, id: response.data.id });
        }
        this.displayModal = false;
        this.fetchEvents(); // Refresh events after saving
      } catch (error) {
        console.error('Error saving event:', error);
      }
    },
    async deleteEvent() {
      try {
        const headers = {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        };
        if (this.selectedEventId) {
          await axios.delete(`/calendar/events/${this.selectedEventId}`, { headers });
          this.displayModal = false;
          this.fetchEvents(); // Refresh events after deletion
        }
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  }
};
