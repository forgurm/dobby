import { mapActions } from 'vuex';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

export default {
  components: {
    InputText,
    Checkbox,
    Button,
  },
  data() {
    return {
      username: localStorage.getItem('username') || '',
      password: localStorage.getItem('password') || '',
      rememberMe: localStorage.getItem('rememberMe') === 'true' || false
    };
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin() {
      const user = {
        username: this.username,
        password: this.password
      };
      const success = await this.login(user);
      if (success) {
        console.log("Login successful, navigating to /main");
        if (this.rememberMe) {
          localStorage.setItem('username', this.username);
          localStorage.setItem('password', this.password);
          localStorage.setItem('rememberMe', 'true');
        } else {
          localStorage.removeItem('username');
          localStorage.removeItem('password');
          localStorage.setItem('rememberMe', 'false');
        }
        this.$router.push('/main');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    }
  }
};
