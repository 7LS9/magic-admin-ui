<template>
  <div>
    <el-row>
      <el-input v-model="uid" style="width: 210px" placeholder="请输入用户ID" />
    </el-row>
    <el-row>
      <el-input v-model="name" style="width: 210px" placeholder="请输入用户名" />
    </el-row>
    <el-row>
      <el-input v-model="psw" style="width: 210px" placeholder="请输入密码" />
    </el-row>
    <el-row>
      <el-col :span="2">
        <el-button type="success" @click="registerClick">注册</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="loginClick">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { loginVerify, register } from '@/api/admin/loginVerify'
export default {
  data() {
    return {
      uid: '',
      name: '',
      psw: ''
    }
  },
  methods: {
    registerClick() {
      const req = { user_id: Number(this.uid), username: this.name, psw: this.psw }
      register(req).then(response => {
        console.log('registerResponse', response)
        if (response.code === 200 && response.msg === 'success') {
          this.$alert('注册成功', '注册信息', {
            confirmButtonText: '确定‘'
          })
        }
      })
    },
    loginClick() {
      const req = { user_id: Number(this.uid), username: this.name, psw: this.psw }
      loginVerify(req).then(response => {
        console.log('response: ', response)
        if (response.code === 200 && response.msg === 'success') {
          this.$alert('登陆成功', '登录信息', {
            confirmButtonText: '确定'
          })
        }
      })
    }
  }
}
</script>
