import axios from 'axios';

export default {
  data() {
    return {
      showAddMemberForm: false,
      showEditMemberForm: false,
      currentMember: {
        name: '',
        username: '',
        password: '',
        phone: '',
        referralExchange: '',
        referralCode: '',
        grade: '',
        memo: ''
      },
      confirmPassword: '',
      members: [],
      selectedMembers: []
    };
  },
  methods: {
    async fetchMembers() {
      try {
        const response = await axios.get('/user/members', {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        this.members = response.data;
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    },
    openAddMemberForm() {
      this.showAddMemberForm = true;
      document.body.style.overflow = 'hidden';  // 모달 열릴 때 스크롤 막기
    },
    async addMember() {
      if (this.currentMember.password !== this.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      try {
        const response = await axios.post('/user/add-member', this.currentMember, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        if (response.data.success) {
          this.showAddMemberForm = false;
          this.resetForm();
          this.fetchMembers();  // 추가 후 목록 새로고침
        } else {
          alert(response.data.message || 'Failed to add member');
        }
      } catch (error) {
        console.error('Error adding member:', error);
        alert('Failed to add member');
      } finally {
        document.body.style.overflow = '';  // 모달 닫힐 때 스크롤 복원
      }
    },
    async editMember() {
      try {
        const response = await axios.put('/user/edit-member', this.currentMember, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        if (response.data.success) {
          this.showEditMemberForm = false;
          this.resetForm();
          this.fetchMembers();  // 수정 후 목록 새로고침
        } else {
          alert(response.data.message || 'Failed to edit member');
        }
      } catch (error) {
        console.error('Error editing member:', error);
        alert('Failed to edit member');
      } finally {
        document.body.style.overflow = '';  // 모달 닫힐 때 스크롤 복원
      }
    },
    async deleteMember(username) {
      if (confirm('Are you sure you want to delete this member?')) {
        try {
          const response = await axios.delete(`/user/delete-member/${username}`, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
          });
          if (response.data.success) {
            this.fetchMembers();  // 삭제 후 목록 새로고침
          } else {
            alert(response.data.message || 'Failed to delete member');
          }
        } catch (error) {
          console.error('Error deleting member:', error);
          alert('Failed to delete member');
        }
      }
    },
    openEditMemberForm(member) {
      this.currentMember = { ...member };
      this.showEditMemberForm = true;
      document.body.style.overflow = 'hidden';  // 모달 열릴 때 스크롤 막기
    },
    cancelMemberForm() {
      this.showAddMemberForm = false;
      this.showEditMemberForm = false;
      this.resetForm();
      document.body.style.overflow = '';  // 모달 닫힐 때 스크롤 복원
    },
    resetForm() {
      this.currentMember = {
        name: '',
        username: '',
        password: '',
        phone: '',
        referralExchange: '',
        referralCode: '',
        grade: '',
        memo: ''
      };
      this.confirmPassword = '';
    }
  },
  created() {
    this.fetchMembers();  // 컴포넌트 생성 시 멤버 목록 가져오기
  }
};
