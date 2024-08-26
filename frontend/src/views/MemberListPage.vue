<template>
  <div class="member-list-page">
    <button @click="openAddMemberForm" class="add-member-button">
      회원 추가
    </button>
    <div v-if="showAddMemberForm || showEditMemberForm" class="modal-overlay" @click.self="cancelMemberForm">
      <div class="modal">
        <h3 class="modal-title">{{ showAddMemberForm ? '회원 추가' : '회원 수정' }}</h3>
        <form class="member-form">
          <div class="form-group">
            <label for="name">이름</label>
            <input type="text" v-model="currentMember.name" required />
          </div>
          <div class="form-group" v-if="showAddMemberForm">
            <label for="username">아이디</label>
            <input type="text" v-model="currentMember.username" required />
          </div>
          <div class="form-group">
            <label for="password">암호</label>
            <input type="password" v-model="currentMember.password" required />
          </div>
          <div class="form-group" v-if="showAddMemberForm">
            <label for="confirmPassword">암호 확인</label>
            <input type="password" v-model="confirmPassword" required />
          </div>
          <div class="form-group">
            <label for="phone">전화번호</label>
            <input type="text" v-model="currentMember.phone" required />
          </div>
          <div class="form-group">
            <label for="referralExchange">레퍼럴 거래소</label>
            <input type="text" v-model="currentMember.referralExchange" required />
          </div>
          <div class="form-group">
            <label for="referralCode">레퍼럴 코드</label>
            <input type="text" v-model="currentMember.referralCode" required />
          </div>
          <div class="form-group">
            <label for="grade">등급</label>
            <input type="number" v-model="currentMember.grade" min="1" max="10" required />
          </div>
          <div class="form-group">
            <label for="memo">메모</label>
            <textarea v-model="currentMember.memo"></textarea>
          </div>
          <div class="modal-actions">
            <button v-if="showAddMemberForm" @click.prevent="addMember" class="save-button">저장</button>
            <button v-if="showEditMemberForm" @click.prevent="editMember" class="save-button">저장</button>
            <button @click="cancelMemberForm" class="cancel-button">취소</button>
          </div>
        </form>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>선택</th>
          <th>일련번호</th>
          <th>이름</th>
          <th>아이디</th>
          <th>등급</th>
          <th>액션</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(member, index) in members" :key="member.username" @click="openEditMemberForm(member)">
          <td><input type="checkbox" v-model="selectedMembers" :value="member" @click.stop /></td>
          <td>{{ index + 1 }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.username }}</td>
          <td>{{ member.grade }}</td>
          <td>
            <button @click.stop="deleteMember(member.username)" class="delete-button">삭제</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import memberListScript from '@/components/memberListScript';

export default {
  ...memberListScript
};
</script>

<style src="../assets/css/memberlist.css"></style>
