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
export default {
  name: "Department",
  data() {
    return {
      depts: [
        {
          name: "传智教育",
          managerName: "李经理",
          children: [
            { name: "总裁办", managerName: "李经理" },
            { name: "行政部", managerName: "李经理" },
            {
              name: "人事部",
              managerName: "李经理",
              children: [
                { name: "财务核算部", managerName: "李经理" },
                { name: "税务管理部", managerName: "李经理" },
                { name: "薪资管理部", managerName: "李经理" },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "name",
      },
    };
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
