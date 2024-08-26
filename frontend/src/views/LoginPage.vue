<template>
  <div class="login-page">
    <div class="login-container">
      <img src="/assets/logo.png" alt="Logo" class="logo" />
      <h2 class="login-title">Login</h2>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username" class="form-label">Username</label>
          <InputText v-model="username" class="form-input" required />
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <InputText type="password" v-model="password" class="form-input" required />
        </div>
        <div class="form-group-checkbox">
          <Checkbox v-model="rememberMe" id="rememberMe" :binary="true" />
          <label for="rememberMe" class="form-label">Remember Me</label>
        </div>
        <Button type="submit" class="login-button">Login</Button>
      </form>
    </div>
  </div>
</template>

<script>
import loginScript from '@/components/loginScript';

export default {
  name: 'LoginPage',
  ...loginScript
};
</script>

<style src="../assets/css/login.css"></style>
