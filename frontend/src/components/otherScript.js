// otherScript.js
import axios from 'axios';

export default {
  name: 'OtherPage',
  data() {
    return {
      keywords: [], // Keywords fetched from the server
      newKeyword: '', // New keyword to add
      updateStatus: null, // Status of adding or deleting keywords
      isMobile: false // Check for mobile view
    };
  },
  methods: {
    async fetchKeywords() {
      try {
        const response = await axios.get('/api/keywords', {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        this.keywords = response.data;
      } catch (error) {
        console.error('Error fetching keywords:', error);
      }
    },
    async addKeyword() {
      if (this.newKeyword.trim() === '') return; // Prevent adding empty keywords

      try {
        const response = await axios.post('/api/keywords', { keyword: this.newKeyword }, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        this.keywords.push(response.data); // Add the new keyword to the list
        this.newKeyword = ''; // Clear input
        this.updateStatus = 'Keyword added successfully!';
      } catch (error) {
        console.error('Error adding keyword:', error);
        this.updateStatus = 'Failed to add keyword.';
      }
    },
    async deleteKeyword(keyword) {
      try {
        await axios.delete(`/api/keywords/${keyword}`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        this.keywords = this.keywords.filter(kw => kw !== keyword); // Remove from local list
        this.updateStatus = 'Keyword deleted successfully!';
      } catch (error) {
        console.error('Error deleting keyword:', error);
        this.updateStatus = 'Failed to delete keyword.';
      }
    },
    checkViewport() {
      this.isMobile = window.innerWidth <= 768;
    }
  },
  created() {
    this.fetchKeywords(); // Fetch keywords when the component is created
    this.checkViewport(); // Check if the user is on mobile
    window.addEventListener('resize', this.checkViewport); // Listen to window resize events
  },
  mounted() {
    document.title = 'Keywords'; // Set the page title
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkViewport); // Cleanup event listeners
  }
};