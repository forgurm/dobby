<template>
  <div class="keywords-page">
    <h2>Keyword Management</h2>

    <div class="keyword-list">
      <ul>
        <!-- Iterate over the keywords and display each with a delete button -->
        <li v-for="(keywordObj, index) in keywords" :key="keywordObj.id">
          <span>{{ index + 1 }}. {{ keywordObj.keyword }}</span>
          <button @click="deleteKeyword(keywordObj.id)">Delete</button>
        </li>
      </ul>
    </div>

    <div class="add-keyword">
      <input v-model="newKeyword" placeholder="Enter new keyword" />
      <button @click="addKeyword">Add Keyword</button>
    </div>

    <div v-if="updateStatus" class="status-message">
      {{ updateStatus }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'OtherPage',
  data() {
    return {
      keywords: [], // Keywords fetched from the server
      newKeyword: '', // New keyword to add
      updateStatus: null, // Status of adding or deleting keywords
    };
  },
  methods: {
    // Fetch all keywords from the server
    async fetchKeywords() {
      try {
        const response = await axios.get('/api/other/keywords', {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        this.keywords = response.data; // Ensure the keywords are stored as an array
      } catch (error) {
        console.error('Error fetching keywords:', error);
      }
    },
    // Add a new keyword
    async addKeyword() {
      if (this.newKeyword.trim() !== '') {
        try {
          await axios.post('/api/other/keywords', { keyword: this.newKeyword.trim() }, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
          });
          this.updateStatus = 'Keyword added successfully!';
          this.newKeyword = ''; // Clear the input field
          this.fetchKeywords(); // Refresh the keywords list
        } catch (error) {
          console.error('Error adding keyword:', error);
          this.updateStatus = 'Failed to add keyword.';
        }
      }
    },

    // Delete a keyword
    async deleteKeyword(keywordId) {
      try {
        await axios.delete(`/api/other/keywords/${keywordId}`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        this.updateStatus = 'Keyword deleted successfully!';
        this.fetchKeywords(); // Refresh the keywords list after deletion
      } catch (error) {
        console.error('Error deleting keyword:', error);
        this.updateStatus = 'Failed to delete keyword.';
      }
    },
  },

  // Lifecycle hooks
  created() {
    this.fetchKeywords(); // Fetch the keywords when the component is created
  },
};
</script>

<style scoped>
.keywords-page {
  padding: 20px;
}

h2 {
  margin-bottom: 20px;
}

.keyword-list {
  margin-bottom: 20px;
}

li {
  list-style-type: none;
  margin-bottom: 10px;
}

button {
  margin-left: 10px;
  padding: 5px 10px;
}

.add-keyword input {
  padding: 5px;
  margin-right: 10px;
}

.status-message {
  margin-top: 20px;
  color: green;
}
</style>