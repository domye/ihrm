<template>
  <div class="container">
    <div class="app-container">
      <el-tree default-expand-all :data="depts" :props="defaultProps">
        <template v-slot="{ data }">
          <el-row
            type="flex"
            justify="space-between"
            align="middle"
            style="width: 100%; height: 40px"
          >
            <el-col> {{ data.name }}</el-col>
            <el-col :span="4">
              <span class="tree-manager">{{ data.managerName }}</span>
              <el-dropdown>
                <span class="el-dropdown-link">
                  操作<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-plus"
                    >黄金糕</el-dropdown-item
                  >
                  <el-dropdown-item icon="el-icon-circle-plus"
                    >狮子头</el-dropdown-item
                  >
                  <el-dropdown-item icon="el-icon-circle-plus-outline"
                    >螺蛳粉</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown></el-col
            >
          </el-row></template
        >
      </el-tree>
    </div>
  </div>
</template>

<script>
import { getDepartment } from "@/api/department";
export default {
  name: "Department",
  data() {
    return {
      depts: [],
      defaultProps: {
        children: "children",
        label: "name",
      },
    };
  },
  created() {
    this.getDepartment();
  },
  methods: {
    async getDepartment() {
      const result = await getDepartment();
      this.depts = transListToTreeData(result, 0);
    },
  },
};
</script>

<style scoped>
.app-container {
  padding: 30px 140px;
  font-size: 14px;
}
.tree-manager {
  width: 50px;
  display: inline-block;
  margin: 10px;
}
</style>
