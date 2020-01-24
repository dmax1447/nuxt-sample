<template>
  <div>
    <h1>
      Elements-ui sandbox
    </h1>
    <hr>
    <p>buttons</p>
    <el-button>default</el-button>
    <el-button type="primary">
      primary
    </el-button>

    <hr>
    <p>sliders</p>
    <div class="d-flex p-1">
      <el-slider v-model="sliderValue" class="w-50 m-3" />
      <el-slider v-model="rangeValue" :max="10" class="w-50 m-3" range show-stops />
    </div>

    <hr>
    <p>form with validation</p>
    <div class="w-50 p-1">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm">
        <el-form-item label="Activity name" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="Activity zone" prop="region">
          <el-select v-model="ruleForm.region" placeholder="Activity zone">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="Activity time" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker v-model="ruleForm.date1" type="date" placeholder="Pick a date" style="width: 100%;" />
            </el-form-item>
          </el-col>
          <el-col :span="2" class="line">
            -
          </el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker v-model="ruleForm.date2" placeholder="Pick a time" style="width: 100%;" />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="Instant delivery" prop="delivery">
          <el-switch v-model="ruleForm.delivery" />
        </el-form-item>
        <el-form-item label="Activity type" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="Online activities" name="type" />
            <el-checkbox label="Promotion activities" name="type" />
            <el-checkbox label="Offline activities" name="type" />
            <el-checkbox label="Simple brand exposure" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Resources" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="Sponsorship" />
            <el-radio label="Venue" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Activity form" prop="desc">
          <el-input v-model="ruleForm.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button @click="submitForm('ruleForm')" type="primary">
            Create
          </el-button>
          <el-button @click="resetForm('ruleForm')">
            Reset
          </el-button>
        </el-form-item>
      </el-form>
    </div>

    <hr>
    <p>tabs</p>
    <div class="w-50">
      <el-tabs v-model="activeTabName" @tab-click="handleClick">
        <el-tab-pane label="User" name="first">
          User content <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi hic possimus assumenda, similique quas excepturi laboriosam qui culpa minima recusandae architecto quam quasi aliquam nesciunt voluptates tempora nulla? Hic, nisi.</p>
        </el-tab-pane>
        <el-tab-pane label="Config" name="second">
          Config content <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi hic possimus assumenda, similique quas excepturi laboriosam qui culpa minima recusandae architecto quam quasi aliquam nesciunt voluptates tempora nulla? Hic, nisi.</p>
        </el-tab-pane>
        <el-tab-pane label="Role" name="third">
          Role content <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi hic possimus assumenda, similique quas excepturi laboriosam qui culpa minima recusandae architecto quam quasi aliquam nesciunt voluptates tempora nulla? Hic, nisi.</p>
        </el-tab-pane>
        <el-tab-pane label="Task" name="fourth">
          Task content <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi hic possimus assumenda, similique quas excepturi laboriosam qui culpa minima recusandae architecto quam quasi aliquam nesciunt voluptates tempora nulla? Hic, nisi.</p>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    sliderValue: 20,
    rangeValue: [4, 8],
    ruleForm: {
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    },
    rules: {
      name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
      ],
      region: [
        { required: true, message: 'Please select Activity zone', trigger: 'change' }
      ],
      date1: [
        { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
      ],
      date2: [
        { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
      ],
      type: [
        { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
      ],
      resource: [
        { required: true, message: 'Please select activity resource', trigger: 'change' }
      ],
      desc: [
        { required: true, message: 'Please input activity form', trigger: 'blur' }
      ]
    },
    activeTabName: 'first'
  }),
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          alert('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
